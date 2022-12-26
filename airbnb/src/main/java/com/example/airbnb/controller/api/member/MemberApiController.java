package com.example.airbnb.controller.api.member;
import com.example.airbnb.ifs.CrudInterface;
import com.example.airbnb.model.network.Header;
import com.example.airbnb.model.network.request.member.*;
import com.example.airbnb.model.network.response.member.*;
import com.example.airbnb.service.member.MemberApiLogicService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class MemberApiController implements CrudInterface<MemberApiRequest, MemberApiResponse> {

    private final MemberApiLogicService memberApiLogicService;

    //회원가입 파트 (/lib/js/loginPop.js)
    @Override
    @PostMapping("")
    public Header<MemberApiResponse> create(@RequestBody Header<MemberApiRequest> request) {
        return memberApiLogicService.create(request);
    }

    @PostMapping("/login")
    public Header<MemberApiResponse> loginEmail(@RequestBody Header<LoginRequest> request) {
        return memberApiLogicService.emailChecks(request);
    }

    @PostMapping("/loginPw")
    public Header<MemberApiResponse> pwChecks(@RequestBody Header<LoginRequest> request) {
        return memberApiLogicService.pwChecks(request);
    }

    //member read
    @Override
    @RequestMapping(method = RequestMethod.GET, path = "/mem")
    public Header<MemberApiResponse> read(@RequestParam Long id) {
        return memberApiLogicService.read(id);
    }

    // memInfo read
    @RequestMapping(method = RequestMethod.GET, path = "/memInfo")
    public Header<MemInfoApiResponse> readInfo(@RequestParam Long id) {
        return memberApiLogicService.reads(id);
    }

    // memNotice read
    @RequestMapping(method = RequestMethod.GET, path = "/memNotice")
    public Header<MemNoticeApiResponse> readNotice(@RequestParam Long id) {
        return memberApiLogicService.readss(id);
    }

    // memPrivacy read
    @RequestMapping(method = RequestMethod.GET, path = "/memPrivacy")
    public Header<MemSecurityApiResponse> readPrivacy(@RequestParam Long id) {
        return memberApiLogicService.readsa(id);
    }

    // memGlobal
    @RequestMapping(method = RequestMethod.GET, path = "/memGlobal")
    public Header<MemGlobalApiResponse> memGlobal(@RequestParam Long id) {
        return memberApiLogicService.readaa(id);
    }

    @Override
    public Header<MemberApiResponse> update(Header<MemberApiRequest> request) {
        return null;
    }

// -------------------------- 계정 프로필 업데이트 -----------------------------------------//
    @PostMapping("/profile")
    public Header<MemInfoApiResponse> updateProfile(@RequestBody Header<MemInfoApiRequest> request) {
        return memberApiLogicService.updateProfile(request);
    }
// -------------------------- #end 계정 프로필 업데이트 -----------------------------------------//
// -------------------------- 계정 개인정보 업데이트 -----------------------------------------//
//이름 수정
    @PostMapping("/name")
    public Header<MemberApiResponse> updateName(@RequestBody Header<MemberApiRequest> request) {
        return memberApiLogicService.updateName(request);
    }
// 성별 수정
    @PostMapping("/gender")
    public Header<MemInfoApiResponse> updateGender(@RequestBody Header<MemInfoApiRequest> request) {
        return memberApiLogicService.updateGender(request);
    }
// 이메일 수정
    @PostMapping("/email")
    public Header<MemberApiResponse> updateEmail(@RequestBody Header<MemberApiRequest> request) {
        return memberApiLogicService.updateEmail(request);
    }
// 주소 수정
    @PostMapping("/address")
    public Header<MemInfoApiResponse> updateAddress(@RequestBody Header<MemInfoApiRequest> request) {
        return memberApiLogicService.updateAddress(request);
    }
//전화번호 수정
    @PostMapping("/Hp")
    public Header<MemberApiResponse> updateHp(@RequestBody Header<MemberApiRequest> request) {
        return memberApiLogicService.updateHp(request);
    }
    // -------------------------- #end 계정 개인정보 업데이트 -----------------------------------------//

    // -------------------------- 로그인 및 보안 -----------------------------------------//
    @PostMapping("/pwChange")
    public void updatePw(@RequestBody Header<MemberApiRequest> request) {
        memberApiLogicService.updatePw(request);
    }
    // -------------------------- #end 로그인 및 보안 -----------------------------------------//
    // -------------------------- 계정 알림 -----------------------------------------//
    //화면 바뀔때 서버에 적용
    @PostMapping("/alarmChange")
    public Header<MemNoticeApiResponse> updateAlarm(@RequestBody Header<MemNoticeApiRequest> request) {
        return memberApiLogicService.updateAlarm(request);
    }
    // -------------------------- #end 계정 알림 -----------------------------------------//
    // -------------------------- 계정 게스트 기부금 -----------------------------------------//
    //화면 바뀔때 서버에 적용
    @PostMapping("/donate")
    public Header<MemPaymentApiResponse> updateDonate(@RequestBody Header<MemPaymentApiRequest> request) {
        return memberApiLogicService.updateDonate(request);
    }
    // -------------------------- #end 계정 게스트 기부금 -----------------------------------------//
    // -------------------------- 계정 활동 공유 -----------------------------------------//
    //화면 바뀔때 서버에 적용
    @PostMapping("/share")
    public Header<MemSecurityApiResponse> updateShare(@RequestBody Header<MemSecurityApiRequest> request) {
        return memberApiLogicService.updateShare(request);
    }
    // -------------------------- #end 계정 활동 공유 -----------------------------------------//
    // -------------------------- 글로벌 환경 공유 -----------------------------------------//
    //선호하는 언어
    @PostMapping("/preferLan")
    public Header<MemGlobalApiResponse> updatepreferLan(@RequestBody Header<MemGlobalApiRequest> request) {
        return memberApiLogicService.updatepreferLan(request);
    }
    //선호하는 통화
    @PostMapping("/preferCurr")
    public Header<MemGlobalApiResponse> updatepreferCurr(@RequestBody Header<MemGlobalApiRequest> request) {
        return memberApiLogicService.updatepreferCurr(request);
    }
    //시간대
    @PostMapping("/onTimes")
    public Header<MemGlobalApiResponse> updateonTimes(@RequestBody Header<MemGlobalApiRequest> request) {
        return memberApiLogicService.updateonTimes(request);
    }
    // -------------------------- #end 글로벌 환경 공유 -----------------------------------------//
    // -------------------------- 비활성화 (계정 삭제) -------------------------------------------//
    @PostMapping("/delete")
    public Header deleteAll(Long id) {
        return memberApiLogicService.deleteAll(id);
    }
    // -------------------------- #end 비활성화 (계정 삭제) -------------------------------------------//
    @Override
    public Header<MemberApiResponse> delete(Long id) {
        return null;
    }

//    @Autowired
//    private MailService mailService;
//
//    @RequestMapping("/mail/send")
//    public String showSend(){
//        return "/mail/send";
//    }
//
//    @RequestMapping("/sendEmail")
//    @ResponseBody
//    public ResponseEntity<?> doSend(String email, String title, String body){
//        mailService.send(email, title, body);
//
//        HttpHeaders headers = new HttpHeaders();
//        headers.setLocation(URI.create("/user/findResult"));
//        return new ResponseEntity<>(headers, HttpStatus.MOVED_PERMANENTLY);
//    }
}


