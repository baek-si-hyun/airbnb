package com.example.airbnb.controller.page;
import com.example.airbnb.model.entity.lodging.LodgingPictures;
import com.example.airbnb.model.entity.member.Member;
import com.example.airbnb.model.network.menu.LoginMenuService;
import com.example.airbnb.model.network.response.lodging.LodgingTotalAPiResponse;
import com.example.airbnb.repository.lodging.LodgingPicturesRepository;
import com.example.airbnb.repository.member.MemberRepository;
import com.example.airbnb.service.lodging.LodgingApiLogicService;
import com.example.airbnb.service.member.MemberApiLogicService;
import com.example.airbnb.model.network.menu.MemberMenuService;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.support.DefaultSessionAttributeStore;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.NoSuchFileException;
import java.nio.file.Path;
import java.nio.file.Paths;

@Controller
@RequestMapping("/pages") // http://localhost:8080/pages
public class PageController {
    @Autowired
    private MemberApiLogicService memberApiLogicService;
    @Autowired
    private LodgingPicturesRepository lodgingPicturesRepository;
    @Autowired
    private MemberRepository memberRepository;
    @Autowired
    private LoginMenuService loginMenuService;
    @Autowired
    private MemberMenuService memberMenuService;
    @Autowired
    private LodgingApiLogicService lodgingApiLogicService;

    // -------------------------- 메인 -----------------------------------------//
    @RequestMapping(path = {""})
    public ModelAndView main(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        Long id = 0L;
        if (session == null) {
            return new ModelAndView("pages/main").addObject("id", id).addObject("menuList", loginMenuService.getLoginMenu()
                    ).addObject("hostmode","호스트되기").addObject("link","/pages/sub");
        } else {
            id = (Long) session.getAttribute("id");
            System.out.println("isregisted:"+lodgingApiLogicService.readmem(id));
            if(lodgingApiLogicService.readmem(id) != null) {
                return new ModelAndView("pages/main").addObject("id", id).addObject("menuList", memberMenuService.getMemberMenu())
                        .addObject("hostmode", "호스트 모드로 전환").addObject("link", "/pages/host_done");
            }else {
                return new ModelAndView("pages/main").addObject("id", id).addObject("menuList", memberMenuService.getMemberMenu()
                ).addObject("hostmode","호스트되기").addObject("link","/pages/sub");

            }
        }
    }
    // -------------------------- #end 메인 -----------------------------------------//
    @RequestMapping("/sub")    // http://localhost:9090/pages/sub
    public ModelAndView sub() {
        return new ModelAndView("/pages/hosting/host_before/sub");
    }

    @RequestMapping(path = {"/wish"})
    public ModelAndView wish() {
        return new ModelAndView("/pages/wishlist/wishlist");
    }

    @RequestMapping(path = {"/travel"})
    public ModelAndView account(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        Long id = (Long) session.getAttribute("id");
        return new ModelAndView("pages/user_travel/travel").addObject("id",id);
    }

    @RequestMapping(path = {"/help"})
    public ModelAndView help() {
        return new ModelAndView("pages/help/help");
    }

    @RequestMapping(path = {"/acc"})
    public ModelAndView acc() {
        return new ModelAndView("pages/accomm/accomm");
    }

    @RequestMapping(path = {"/tool1"})
    public ModelAndView tool1() {
        return new ModelAndView("pages/account/account_tools");
    }

    // -------------------------- 계정 비활성화#2 -----------------------------------------//
    @RequestMapping(path = {"/tool2"})
    public ModelAndView tool2(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        Long id = (Long) session.getAttribute("id");
        String email =  memberApiLogicService.read(id).getData().getEmail();
        return new ModelAndView("pages/account/account_tools1").addObject("email",email).addObject("id",id);
    }
    // -------------------------- #end 계정 비활성화#2 -----------------------------------------//
    @RequestMapping(path = {"/tool3"})
    public ModelAndView tool3() {
        return new ModelAndView("pages/account/account_tools2");
    }

    @RequestMapping(path = {"/hostfinish"})
    public ModelAndView hostfinish() {
        return new ModelAndView("pages/host_finish/host_finish");
    }

    @RequestMapping(method = RequestMethod.GET, value = "/room/{LodgingId}")
    public ModelAndView room(HttpServletRequest request, @PathVariable(value = "LodgingId", required = false) Long LodgingId)throws Exception {
        System.out.println(LodgingId);
        return new ModelAndView("/pages/room/roompage").addObject("LodgingId",LodgingId);
    }
    // -------------------------- 계정 메인 -----------------------------------------//
    @RequestMapping(path = {"account_main"})
    public ModelAndView account_main(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        Long id = (Long) session.getAttribute("id");
        String memFirstname = memberApiLogicService.read(id).getData().getMemFirstname();
        String memName = memberApiLogicService.read(id).getData().getMemName();
        String email = memberApiLogicService.read(id).getData().getEmail();
        return new ModelAndView("/pages/account/account_main").addObject("menuList", memberMenuService.getMemberMenu())
                .addObject("memFirstname", memFirstname)
                .addObject("memName", memName)
                .addObject("email", email);
    }
    // -------------------------- 계정 알림 -----------------------------------------//
    @RequestMapping(path = {"account_alarm"})
    public ModelAndView account_alarm(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        Long id = (Long) session.getAttribute("id");
        return new ModelAndView("/pages/account/account_alarm").addObject("id", id);
    }
    // -------------------------- 계정 글로벌 -----------------------------------------//
    @RequestMapping(path = {"account_global"})
    public ModelAndView account_global(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        Long id = (Long) session.getAttribute("id");
        return new ModelAndView("/pages/account/account_global").addObject("id", id);
    }
    // -------------------------- 계정 개인정보 업데이트 -----------------------------------------//
    @RequestMapping(path = {"account_info"})
    public ModelAndView account_info(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        Long id = (Long) session.getAttribute("id");
        return new ModelAndView("/pages/account/account_info").addObject("id", id);
    }
    // -------------------------- #end 계정 개인정보 업데이트 -----------------------------------------//
    // -------------------------- 로그인 및 보안 -----------------------------------------//
    @RequestMapping(path = {"account_loginBoan"})
    public ModelAndView account_loginBoan(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        Long id = (Long) session.getAttribute("id");
        return new ModelAndView("/pages/account/host_login_boan").addObject("id", id);
    }
    // -------------------------- #end 로그인 및 보안 -----------------------------------------//
    // -------------------------- 결제 및 대금 수령 -----------------------------------------//
    @RequestMapping(path = {"account_pay1"})
    public ModelAndView account_pay1() {
        return new ModelAndView("/pages/account/account_pay1");
    }

    @RequestMapping(path = {"account_pay1_1"})
    public ModelAndView account_pay1_1() {
        return new ModelAndView("/pages/account/account_pay1-1");
    }

    @RequestMapping(path = {"account_pay2"})
    public ModelAndView account_pay2() {
        return new ModelAndView("/pages/account/account_pay2");
    }

    @RequestMapping(path = {"account_pay2_1"})
    public ModelAndView account_pay2_1() {
        return new ModelAndView("/pages/account/account_pay2-1");
    }

    @RequestMapping(path = {"account_pay3"})
    public ModelAndView account_pay3() {
        return new ModelAndView("/pages/account/account_pay3");
    }

    @RequestMapping(path = {"account_pay4"})
    public ModelAndView account_pay4(HttpServletRequest request){
        HttpSession session = request.getSession(false);
        Long id = (Long) session.getAttribute("id");
        return new ModelAndView("/pages/account/account_pay4").addObject("id",id);
    }
    // -------------------------- #end 결제 및 대금 수령 -----------------------------------------//
    // -------------------------- 개인정보 및 공개 설정 -----------------------------------------//
    @RequestMapping(path = {"account_privacy"})
    public ModelAndView account_privacy(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        Long id = (Long) session.getAttribute("id");
        return new ModelAndView("/pages/account/account_privacy").addObject("id",id);
    }
    // -------------------------- #end 개인정보 및 공개 설정 -----------------------------------------//
    // -------------------------- 유저 프로필 -----------------------------------------//
    @RequestMapping(path = {"account_profile"})
    public ModelAndView account_profile(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        Long id = (Long) session.getAttribute("id");
        return new ModelAndView("/pages/account/account_profile").addObject("id",id);
    }
    // -------------------------- #end 유저 프로필 -----------------------------------------//

    // -------------------------- 결제 프로필 -----------------------------------------//
    @RequestMapping(method = RequestMethod.GET, value = "/payment")
    public ModelAndView payment(HttpServletRequest request, @RequestParam("id") Long id, @RequestParam("guest") int guest,@RequestParam("isresv_start") String isresv_start, @RequestParam("isresv_end")String isresv_end) {
       LodgingTotalAPiResponse lodgingTotalAPiResponse = lodgingApiLogicService.roomPages(id).getData();
       String pic = lodgingTotalAPiResponse.getLodgingPicturesApiResponse().getLodgingPic();
       String picurl = lodgingTotalAPiResponse.getLodgingPicturesApiResponse().getLodgingPicurl();
       String pics = picurl+"/"+pic;
       String title = lodgingTotalAPiResponse.getLodgingApiResponse().getLodgingTitle();
       String category = lodgingTotalAPiResponse.getLodgingRoomApiResponse().getLodgingType2();
       int price = lodgingTotalAPiResponse.getLodgingPriceApiResponse().getPriceNormal();
       String hostName = lodgingTotalAPiResponse.getMemberApiResponse().getMemName();
       // 나중에 localdate로 변경
        String refund1 = lodgingTotalAPiResponse.getLodgingPolicyApiResponse().getPolicyStanard();
        String refund2 = lodgingTotalAPiResponse.getLodgingPolicyApiResponse().getPolicyLongstay();

        HttpSession session = request.getSession(false);
        Long memId = (Long) session.getAttribute("id");
        return new ModelAndView("/pages/payment/payment").addObject("pics",pics).addObject("title",title).addObject("category",category)
                .addObject("price",price).addObject("hostName",hostName).addObject("isresv_start",isresv_start).addObject("isresv_end",isresv_end)
                .addObject("refund1",refund1).addObject("refund2",refund2).addObject("guest",guest).addObject("lodgingId",id)
                .addObject("memId",memId);
    }
    // -------------------------- #end 유저 프로필 -----------------------------------------//

    @RequestMapping(path = {"/edit-photo"})
    public ModelAndView editPhoto() {
        return new ModelAndView("pages/account/profileupdate");
    }


    @PostMapping("/login")
    public String login(HttpServletRequest request, String email, String memPw) {
        if(memberApiLogicService.read(email, memPw).getData() != null) {
            HttpSession session = request.getSession();
            Long id = memberApiLogicService.read(email, memPw).getData().getMemId();
            System.out.println("id : "+id);
            session.setAttribute("id", id);
        }
        return "redirect:/pages";
    }
    // -------------------------- 로그 아웃 -----------------------------------------//
    @RequestMapping("/logout")
    public String logout(HttpServletRequest request) {
        HttpSession session = request.getSession();
        session.invalidate();
        return "redirect:/pages";
    }
    // -------------------------- #end 로그 아웃 -----------------------------------------//
    // -------------------------- 프로필 저장 -----------------------------------------//
    @PostMapping("/profileImg")
    public String profileImg(HttpServletRequest request,
                             @RequestPart (value = "pic", required = false) MultipartFile pic
    )throws IOException{
        HttpSession session = request.getSession(false);
        Long id = (Long) session.getAttribute("id");

        Member member = memberRepository.findById(id).get();
        // pict+url : /Users/baghaechan/Desktop/airbnb/src/main/upload/user/1/XCVyDpLMFmemyxdXSAmFrFlzpMgRQLPU.jpg
        // 실제경로 :   /Users/baghaechan/Desktop/airbnb/src/main/upload/user/1
        String url = member.getMemPicurl();
        String pict = member.getMemPic();
        Path filePath = Paths.get(url+pict);
        System.out.println("db에 저장된 경로:"+filePath);
        try{
            Files.delete(filePath);
        }catch (NoSuchFileException e){
            System.out.println("삭제하려는 파일/디렉토리가 없습니다");
        }catch (IOException e){
            e.printStackTrace();
        }
        String picName = pic.getOriginalFilename(); //apple.jpg
        String picExtension = FilenameUtils.getExtension(picName).toLowerCase(); //.jpg
        FilenameUtils.removeExtension(picName); //apple

        File dstPic;
        String dstPicName;
//        String createPicName;
        String picUrl = System.getProperty("user.dir") + "/src/main/upload/user/"+id+"/";

        do{
            dstPicName = RandomStringUtils.randomAlphabetic(32)+"."+picExtension;
//            createPicName = RandomStringUtils.randomAlphabetic(32)+"."+picExtension;
            dstPic = new File(picUrl+dstPicName);
        }while (dstPic.exists());

        dstPic.getParentFile().mkdir();
        pic.transferTo(dstPic);

        member.setMemPic(dstPicName);
        member.setMemPicurl(picUrl);
        memberRepository.save(member);
        return "redirect:/pages/account_profile";
    }
    // -------------------------- #end 프로필 저장 -----------------------------------------//
    // --------------------------- 숙소 관리 ----------------------------------------------//


    @RequestMapping(method = RequestMethod.GET, value = "/host_edit_Facilities/{id}")   // http://localhost:9090/pages/hostedit
    public ModelAndView hostEditFacilities(HttpServletRequest request , @PathVariable(value = "id", required = false) Long id)throws Exception {
        HttpSession session = request.getSession(false);
        Long id1 = (Long) session.getAttribute("id");
        return new ModelAndView("/pages/hosting/host_after/host_edit_Facilities").addObject("lodgingId",id).addObject("id",id1);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/host_edit_for_guests/{id}")   // http://localhost:9090/pages/hostedit
    public ModelAndView hostEditForGuests(HttpServletRequest request , @PathVariable(value = "id", required = false) Long id) throws Exception{
        HttpSession session = request.getSession(false);
        Long id1 = (Long) session.getAttribute("id");
        return new ModelAndView("/pages/hosting/host_after/host_edit_for_guests").addObject("lodgingId",id).addObject("id",id1);
    }
    @RequestMapping(method = RequestMethod.GET, value = "/host_edit_hosts/{id}")   // http://localhost:9090/pages/hostedit
    public ModelAndView hostEditHosts(HttpServletRequest request , @PathVariable(value = "id", required = false) Long id) throws Exception{
        HttpSession session = request.getSession(false);
        Long id1 = (Long) session.getAttribute("id");
        return new ModelAndView("/pages/hosting/host_after/host_edit_hosts").addObject("lodgingId",id).addObject("id",id1);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/host_edit_photos/{id}")   // http://localhost:9090/pages/hostedit
    public ModelAndView hostEditPhotos(HttpServletRequest request , @PathVariable(value = "id", required = false) Long id) throws Exception{
        HttpSession session = request.getSession(false);
        Long id1 = (Long) session.getAttribute("id");
        return new ModelAndView("/pages/hosting/host_after/host_edit_photos").addObject("lodgingId",id).addObject("id",id1);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/host_edit_pricing/{id}")   // http://localhost:9090/pages/hostedit
    public ModelAndView host_edit_pricing(HttpServletRequest request , @PathVariable(value = "id", required = false) Long id) throws Exception{
        HttpSession session = request.getSession(false);
        Long id1 = (Long) session.getAttribute("id");
        return new ModelAndView("/pages/hosting/host_after/host_edit_pricing").addObject("lodgingId",id).addObject("id",id1);
    }
    @RequestMapping("/host_insite1")    // http://localhost:9090/pages/host_insite1
    public ModelAndView hostInsite1() {
        return new ModelAndView("/pages/hosting/host_after/host_insite1");
    }

    @RequestMapping("/host_insite2")    // http://localhost:9090/pages/host_insite2
    public ModelAndView hostInsite2() {
        return new ModelAndView("/pages/hosting/host_after/host_insite2");
    }

    @RequestMapping("/host_insite3")    // http://localhost:9090/pages/host_insite3
    public ModelAndView hostInsite3() {
        return new ModelAndView("/pages/hosting/host_after/host_insite3");
    }

    @RequestMapping("/host_insite4")    // http://localhost:9090/pages/host_insite4
    public ModelAndView hostInsite4() {
        return new ModelAndView("/pages/hosting/host_after/host_insite4");
    }

    @RequestMapping("/host_insite6")    // http://localhost:9090/pages/host_insite6
    public ModelAndView hostInsite6() {
        return new ModelAndView("/pages/hosting/host_after/host_insite6");
    }

    @RequestMapping(method = RequestMethod.GET, value = "/hostedit/{id}")   // http://localhost:9090/pages/hostedit
    public ModelAndView hostEdit(HttpServletRequest request , @PathVariable(value = "id", required = false) Long id) throws Exception{
        HttpSession session = request.getSession(false);
        Long id1 = (Long) session.getAttribute("id");
        return new ModelAndView("/pages/hosting/host_after/hostedit").addObject("lodgingId",id).addObject("id",id1);
    }
    @RequestMapping("/host_done")    // http://localhost:9090/pages/
    public ModelAndView host_done(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        Long id = (Long) session.getAttribute("lodgingId");
        Long id1 = (Long) session.getAttribute("id");
        return new ModelAndView("/pages/hosting/host_after/host_done").addObject("lodgingId",id).addObject("id",id1);
    }

    @RequestMapping("/hosting_reservation")    // http://localhost:9090/pages/hosting_reservation
    public ModelAndView hostingReservation(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        Long id = (Long) session.getAttribute("lodgingId");
        Long id1 = (Long) session.getAttribute("id");
        return new ModelAndView("/pages/hosting/host_after/hosting_reservation").addObject("lodgingId",id).addObject("id",id1);
    }

    @RequestMapping("/lodging")    // http://localhost:9090/pages/lodging
    public ModelAndView lodging(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        Long id = (Long) session.getAttribute("lodgingId");
        Long id1 = (Long) session.getAttribute("id");
        return new ModelAndView("/pages/hosting/host_after/lodging").addObject("lodgingId",id).addObject("id",id1);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/policies/{id}")   // http://localhost:9090/pages/policies
    public ModelAndView policies(HttpServletRequest request , @PathVariable(value = "id", required = false) Long id) throws Exception{
        HttpSession session = request.getSession(false);
        Long id1 = (Long) session.getAttribute("id");
        return new ModelAndView("/pages/hosting/host_after/policies").addObject("lodgingId",id).addObject("id",id1);
    }


    @RequestMapping("/hostoption3")    // http://localhost:9090/pages/hostoption3
    public ModelAndView hostOption3(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        Long id = (Long) session.getAttribute("lodgingId");
        return new ModelAndView("/pages/hosting/host_before/hostoption3").addObject("lodgingId",id);
    }
    // 08.13 추가 부분 (type1 종류별 카테고리)
    @RequestMapping("/hostoption3_1")    // http://localhost:9090/pages/hostoption3_1
    public ModelAndView hostOption3_1(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        Long id = (Long) session.getAttribute("lodgingId");
        return new ModelAndView("/pages/hosting/host_before/hostoption3_1").addObject("lodgingId",id);
    }

    @RequestMapping("/hostoption3_2")    // http://localhost:9090/pages/hostoption3_2
    public ModelAndView hostOption3_2(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        Long id = (Long) session.getAttribute("lodgingId");
        return new ModelAndView("/pages/hosting/host_before/hostoption3_2").addObject("lodgingId",id);
    }

    @RequestMapping("/hostoption3_3")    // http://localhost:9090/pages/hostoption3_3
    public ModelAndView hostOption3_3(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        Long id = (Long) session.getAttribute("lodgingId");
        return new ModelAndView("/pages/hosting/host_before/hostoption3_3").addObject("lodgingId",id);
    }

    @RequestMapping("/hostoption3_4")    // http://localhost:9090/pages/hostoption3_4
    public ModelAndView hostOption3_4(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        Long id = (Long) session.getAttribute("lodgingId");
        return new ModelAndView("/pages/hosting/host_before/hostoption3_4").addObject("lodgingId",id);
    }

    @RequestMapping("/hostoption3_5")    // http://localhost:9090/pages/hostoption3_5
    public ModelAndView hostOption3_5(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        Long id = (Long) session.getAttribute("lodgingId");
        return new ModelAndView("/pages/hosting/host_before/hostoption3_5").addObject("lodgingId",id);
    }

    @RequestMapping("/hostoption3_6")    // http://localhost:9090/pages/hostoption3_6
    public ModelAndView hostOption3_6(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        Long id = (Long) session.getAttribute("lodgingId");
        return new ModelAndView("/pages/hosting/host_before/hostoption3_6").addObject("lodgingId",id);
    }
    // 08.13 추가 부분 끝

    @RequestMapping("/hostoption4")    // http://localhost:9090/pages/hostoption4
    public ModelAndView hostOption4(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        Long id = (Long) session.getAttribute("lodgingId");
        return new ModelAndView("/pages/hosting/host_before/hostoption4").addObject("lodgingId",id);
    }
    @RequestMapping("/hostoption5")    // http://localhost:9090/pages/hostoption5
    public ModelAndView hostOption5(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        Long id = (Long) session.getAttribute("lodgingId");
        return new ModelAndView("/pages/hosting/host_before/hostoption5").addObject("lodgingId",id);
    }
    @RequestMapping("/hostoption6")    // http://localhost:9090/pages/hostoption6
    public ModelAndView hostOption6(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        Long id = (Long) session.getAttribute("lodgingId");
        return new ModelAndView("/pages/hosting/host_before/hostoption6").addObject("lodgingId",id);
    }
    @RequestMapping("/hostoption7")    // http://localhost:9090/pages/hostoption7
    public ModelAndView hostOption7(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        Long id = (Long) session.getAttribute("lodgingId");
        return new ModelAndView("/pages/hosting/host_before/hostoption7").addObject("lodgingId",id);
    }
    @RequestMapping("/hostoption8")    // http://localhost:9090/pages/hostoption8
    public ModelAndView hostOption8(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        Long id = (Long) session.getAttribute("lodgingId");
        return new ModelAndView("/pages/hosting/host_before/hostoption8").addObject("lodgingId",id);
    }
    //    @RequestMapping(method = RequestMethod.GET, value = "/hostoption9/{id}")    // http://localhost:9090/pages/hostoption9
//    public ModelAndView hostOption9(HttpServletRequest request, @PathVariable(value = "id", required = false) Long id)throws Exception {
//        HttpSession session = request.getSession(false);
//        Long id1 = (Long) session.getAttribute("lodgingId");
//        session.setAttribute("lodgingId", id);
//        return new ModelAndView("/pages/hosting/host_before/hostoption9").addObject("lodgingId",id).addObject("id",id1);
//    }
    @RequestMapping(method = RequestMethod.GET, value = "/hostoption9/{id}")    // http://localhost:9090/pages/hostoption9
    public ModelAndView hostOption9(HttpServletRequest request, @PathVariable(value = "id", required = false) Long id)throws Exception {
        HttpSession session = request.getSession(false);
        Long id1 = (Long) session.getAttribute("lodgingId");
        session.setAttribute("lodgingId", id);
        return new ModelAndView("/pages/hosting/host_before/hostoption9").addObject("lodgingId",id).addObject("id",id1);
    }



    @RequestMapping("/hostoption10")    // http://localhost:9090/pages/hostoption10
    public ModelAndView hostOption10(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        Long id = (Long) session.getAttribute("lodgingId");
        return new ModelAndView("/pages/hosting/host_before/hostoption10").addObject("lodgingId",id);
    }
    @RequestMapping("/hostoption11")    // http://localhost:9090/pages/hostoption11
    public ModelAndView hostOption11(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        Long id = (Long) session.getAttribute("lodgingId");
        return new ModelAndView("/pages/hosting/host_before/hostoption11").addObject("lodgingId",id);
    }
    @RequestMapping("/hostoption12")    // http://localhost:9090/pages/hostoption11
    public ModelAndView hostOption12(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        Long id = (Long) session.getAttribute("lodgingId");
        return new ModelAndView("/pages/hosting/host_before/hostoption12").addObject("lodgingId",id);
    }
    @RequestMapping("/hostoption13")    // http://localhost:9090/pages/hostoption13
    public ModelAndView hostOption13(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        Long id = (Long) session.getAttribute("lodgingId");
        return new ModelAndView("/pages/hosting/host_before/hostoption13").addObject("lodgingId",id);
    }
    @RequestMapping("/hostoption14")    // http://localhost:9090/pages/hostoption14
    public ModelAndView hostOption14(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        Long id = (Long) session.getAttribute("lodgingId");
        return new ModelAndView("/pages/hosting/host_before/hostoption14").addObject("lodgingId",id);
    }

    @RequestMapping("/hostoption15")    // http://localhost:9090/pages/hostoption15
    public ModelAndView hostOption15(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        Long id = (Long) session.getAttribute("lodgingId");
        Long id1 = (Long) session.getAttribute("id");
        return new ModelAndView("/pages/hosting/host_before/hostoption15").addObject("lodgingId",id).addObject("id",id1);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/hostoption16")    // http://localhost:9090/pages/hostoption16
    public ModelAndView hostOption16(HttpServletRequest request, DefaultSessionAttributeStore status, ModelMap model) {
        HttpSession session = request.getSession(false);
        Long id = (Long) session.getAttribute("lodgingId");
        Long id1 = (Long) session.getAttribute("id");
        memberApiLogicService.transform(id1);
        return new ModelAndView("/pages/hosting/host_before/hostoption16").addObject("id",id1).addObject("lodgingId",id);
    }

    // 로그인 세션 없을 시 숙소 등록 x
    @RequestMapping("/hostoption1")
    public ModelAndView hostoption1(HttpServletRequest request)throws Exception {
        HttpSession session = request.getSession(false);
        ModelAndView mv = new ModelAndView();

        if (session == null) {
            return new ModelAndView("pages/main");
        } else {
            Long id = (Long) session.getAttribute("id");
            System.out.println("id : " + id);
            mv.setViewName("/pages/hosting/host_before/hostoption1");
            return mv.addObject("id",id);
        }
    }

    // 숙소 등록 세션 등록 및 멤머 세션 가져오기
    @RequestMapping(method = RequestMethod.GET, value = "/hostoption2/{id}")
    public ModelAndView hostoption2(HttpServletRequest request, @PathVariable(value = "id", required = false) Long id)throws Exception {

        HttpSession session = request.getSession();

        session.setAttribute("lodgingId", id);
        Long id1 = (Long) session.getAttribute("id");
        ModelAndView mv = new ModelAndView();
        System.out.println("==================");
        System.out.println("세션에 저장 되 있는 변수:" + id);
        System.out.println("세션에 저장 되 있는 변수:" + id1);
        System.out.println("==================");
        mv.setViewName("/pages/hosting/host_before/hostoption2");
        return mv.addObject("lodgingId",id).addObject("id", id1);
    }

    // Lodging 사진 등록
    @PostMapping("/lodgingPic")
    public String lodgingPic(HttpServletRequest request,
                             @RequestPart (value = "pic", required = false) MultipartFile pic,
                             @RequestPart (value = "pic2", required = false) MultipartFile pic2,
                             @RequestPart (value = "pic3", required = false) MultipartFile pic3,
                             @RequestPart (value = "pic4", required = false) MultipartFile pic4,
                             @RequestPart (value = "pic5", required = false) MultipartFile pic5
    )throws IOException{
        HttpSession session = request.getSession(false);
        Long id = (Long) session.getAttribute("lodgingId");

        LodgingPictures lodgingPictures = lodgingPicturesRepository.findById(id).get();
        // 숙소 메인 사진
        String picName = pic.getOriginalFilename(); //apple.jpg
        String picExtension = FilenameUtils.getExtension(picName).toLowerCase(); //.jpg
        FilenameUtils.removeExtension(picName); //apple

        Path relativePath = Paths.get("");
        String path = relativePath.toAbsolutePath().toString();

        File dstPic;
        String dstPicName;
        String createPicName;
        String picUrl = System.getProperty("user.dir") + "/src/main/resources/static/lib/pic/lodging/lodging2/";
        System.out.println("Changed3 Working Directory = " + picUrl.replace(path,"").substring(26));
        do{
            dstPicName = RandomStringUtils.randomAlphabetic(32)+"."+picExtension;
            createPicName = RandomStringUtils.randomAlphabetic(32)+"."+picExtension;
            dstPic = new File(picUrl+dstPicName);
        }while (dstPic.exists());

        dstPic.getParentFile().mkdir();
        pic.transferTo(dstPic);

        lodgingPictures.setLodgingPic(dstPicName);
        lodgingPictures.setLodgingPicurl(picUrl.replace(path,"").substring(26));

        // 숙소 서브 사진 1
        String picName2 = pic2.getOriginalFilename(); //apple.jpg
        String picExtension2 = FilenameUtils.getExtension(picName2).toLowerCase(); //.jpg
        FilenameUtils.removeExtension(picName2); //apple

        File dstPic2;
        String dstPicName2;
        String createPicName2;
        String picUrl2 = System.getProperty("user.dir") + "/src/main/resources/static/lib/pic/lodging/lodging2/";

        do{
            dstPicName2 = RandomStringUtils.randomAlphabetic(32)+"."+picExtension2;
            createPicName2 = RandomStringUtils.randomAlphabetic(32)+"."+picExtension2;
            dstPic2 = new File(picUrl2+dstPicName2);
        }while (dstPic2.exists());

        dstPic2.getParentFile().mkdir();
        pic2.transferTo(dstPic2);

        lodgingPictures.setLodgingPic2(dstPicName2);
        lodgingPictures.setLodgingPicurl2(picUrl2.replace(path,"").substring(26));

        // 숙소 서브 사진 3
        String picName3 = pic3.getOriginalFilename(); //apple.jpg
        String picExtension3 = FilenameUtils.getExtension(picName3).toLowerCase(); //.jpg
        FilenameUtils.removeExtension(picName3); //apple

        File dstPic3;
        String dstPicName3;
        String createPicName3;
        String picUrl3 = System.getProperty("user.dir") + "/src/main/resources/static/lib/pic/lodging/lodging2/";

        do{
            dstPicName3 = RandomStringUtils.randomAlphabetic(32)+"."+picExtension3;
            createPicName3 = RandomStringUtils.randomAlphabetic(32)+"."+picExtension3;
            dstPic3 = new File(picUrl3+dstPicName3);
        }while (dstPic3.exists());

        dstPic3.getParentFile().mkdir();
        pic3.transferTo(dstPic3);

        lodgingPictures.setLodgingPic3(dstPicName3);
        lodgingPictures.setLodgingPicurl3(picUrl3.replace(path,"").substring(26));


        // 숙소 서브 사진 4
        String picName4 = pic4.getOriginalFilename(); //apple.jpg
        String picExtension4 = FilenameUtils.getExtension(picName4).toLowerCase(); //.jpg
        FilenameUtils.removeExtension(picName4); //apple

        File dstPic4;
        String dstPicName4;
        String createPicName4;
        String picUrl4 = System.getProperty("user.dir") + "/src/main/resources/static/lib/pic/lodging/lodging2/";

        do{
            dstPicName4 = RandomStringUtils.randomAlphabetic(32)+"."+picExtension4;
            createPicName4 = RandomStringUtils.randomAlphabetic(32)+"."+picExtension4;
            dstPic4 = new File(picUrl4+dstPicName4);
        }while (dstPic4.exists());

        dstPic4.getParentFile().mkdir();
        pic4.transferTo(dstPic4);

        lodgingPictures.setLodgingPic4(dstPicName4);
        lodgingPictures.setLodgingPicurl4(picUrl4.replace(path,"").substring(26));

        // 숙소 서브 사진 5
        String picName5 = pic5.getOriginalFilename(); //apple.jpg
        String picExtension5 = FilenameUtils.getExtension(picName5).toLowerCase(); //.jpg
        FilenameUtils.removeExtension(picName5); //apple

        File dstPic5;
        String dstPicName5;
        String createPicName5;
        String picUrl5 = System.getProperty("user.dir") + "/src/main/resources/static/lib/pic/lodging/lodging2/";

        do{
            dstPicName5 = RandomStringUtils.randomAlphabetic(32)+"."+picExtension5;
            createPicName5 = RandomStringUtils.randomAlphabetic(32)+"."+picExtension5;
            dstPic5 = new File(picUrl5+dstPicName5);
        }while (dstPic5.exists());

        dstPic5.getParentFile().mkdir();
        pic5.transferTo(dstPic5);

        lodgingPictures.setLodgingPic5(dstPicName5);
        lodgingPictures.setLodgingPicurl5(picUrl5.replace(path,"").substring(26));
        lodgingPicturesRepository.save(lodgingPictures);

        return "redirect:/pages/hostoption10";
    }
}