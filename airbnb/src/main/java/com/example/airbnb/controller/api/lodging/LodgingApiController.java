package com.example.airbnb.controller.api.lodging;

import com.example.airbnb.service.lodging.LodgingService;
import com.example.airbnb.ifs.CrudInterface;
import com.example.airbnb.model.network.Header;
import com.example.airbnb.model.network.request.lodging.*;
import com.example.airbnb.model.network.request.member.MemGlobalApiRequest;
import com.example.airbnb.model.network.response.lodging.*;
import com.example.airbnb.model.network.response.member.MemGlobalApiResponse;
import com.example.airbnb.model.network.response.member.MemberApiResponse;
import com.example.airbnb.service.lodging.LodgingApiLogicService;
import com.example.airbnb.service.member.MemberApiLogicService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/room")
@RequiredArgsConstructor
public class LodgingApiController implements CrudInterface<LodgingApiRequest, LodgingApiResponse> {

    private final LodgingApiLogicService lodgingApiLogicService;
    private final MemberApiLogicService memberApiLogicService;

    @Override
    @PostMapping ("")
    public Header<LodgingApiResponse> create(@RequestBody Header<LodgingApiRequest> request) {
        return lodgingApiLogicService.create(request);
    }

    // hostingOption1 API
    @PostMapping("/hostoption1")
    public Header<LodgingApiResponse> createMem(@RequestBody Header<LodgingApiRequest> request){
        return lodgingApiLogicService.createMem(request);
    }
    // hostingOption9 API
    @PostMapping("/hostoption9")
    public Header<LodgingPicturesApiResponse> memCreate(@RequestBody Header<LodgingPicturesApiRequest> request){
        return lodgingApiLogicService.memCreate(request);
    }

    // hostingOption2 API
    @PostMapping("/hostoption2")
    public Header<LodgingRoomApiResponse> accommodationType1(@RequestBody Header<LodgingRoomApiRequest> request){
        return lodgingApiLogicService.accommodationType1(request);
    }
    // hostingOption3 API
    @PostMapping("/hostoption3")
    public Header<LodgingRoomApiResponse> accommodationType2(@RequestBody Header<LodgingRoomApiRequest> request){
        return lodgingApiLogicService.accommodationType2(request);
    }
    // hostingOption4 API
    @PostMapping("/hostoption4")
    public Header<LodgingRoomApiResponse> accommodationType3(@RequestBody Header<LodgingRoomApiRequest> request){
        return lodgingApiLogicService.accommodationType3(request);
    }
    //hostingOption5 API 08.13 작성
    @PostMapping("/hostoption5")
    public Header<LodgingLocationApiResponse> lodgingLocation(@RequestBody Header<LodgingLocationApiRequest> request){
        return lodgingApiLogicService.lodgingLocation(request);
    }
    // hostingOption7 API
    @PostMapping("/hostoption7")
    public Header<LodgingApiResponse> guestToWelcome(@RequestBody Header<LodgingApiRequest> request){
        return lodgingApiLogicService.guestToWelcome(request);
    }
    // hostingOption7 API
    @PostMapping("/hostoption7_1")
    public Header<LodgingRoomApiResponse> roomAndOtherSpaces(@RequestBody Header<LodgingRoomApiRequest> request){
        return lodgingApiLogicService.roomAndOtherSpaces(request);
    }
    // hostingOption8 API
    @PostMapping("/hostoption8")
    public Header<LodgingApiResponse> facilities(@RequestBody Header<LodgingApiRequest> request){
        return lodgingApiLogicService.facilities(request);
    }
    // hostingOption9 API
//    @PostMapping("/hostoption9")
//    public Header<LodgingPicturesApiResponse> lodgingPic(@RequestBody Header<LodgingPicturesApiRequest> request){
//        return lodgingApiLogicService.lodgingPic(request);
//    }

    // hostingOption10 API
    @PostMapping("/hostoption10")
    public Header<LodgingApiResponse> lodgingTitle(@RequestBody Header<LodgingApiRequest> request){
        return lodgingApiLogicService.lodgingTitle(request);
    }
    // hostingOption12 API
    @PostMapping("/hostoption12")
    public Header<LodgingApiResponse> lodgingExplain(@RequestBody Header<LodgingApiRequest> request){
        return lodgingApiLogicService.lodgingExplain(request);
    }
    // hostingOption13 API
    @PostMapping("/hostoption13")
    public Header<LodgingPriceApiResponse> lodgingPrice(@RequestBody Header<LodgingPriceApiRequest> request){
        return lodgingApiLogicService.lodgingPrice(request);
    }

    // ---------------------------------hostoption15,16  read--------------------------------- //

    // hostoption15,16 read Api
    @RequestMapping(method = RequestMethod.GET, value = "/hostoption15/{id}")
    public Header<MemberApiResponse> memnameRead(@PathVariable(value = "id", required = false) Long id){
        return memberApiLogicService.read(id);
    }
    // hostoption16 이름값
    @RequestMapping(method = RequestMethod.GET, value = "/hostoption16/{id}")
    public Header<MemberApiResponse> memnameRead2(@PathVariable(value = "id", required = false) Long id){
        return memberApiLogicService.read(id);
    }
    // 숙소 제목 읽기
    @RequestMapping(method = RequestMethod.GET, value = "/hostoption15_1/{id}")
    public Header<LodgingApiResponse> lodgingTitleRead(@PathVariable(value = "id", required = false) Long id) {
        return lodgingApiLogicService.read(id);
    }
    // 숙소 타입 읽기
    @RequestMapping(method = RequestMethod.GET, value = "/hostoption15_2/{id}")
    public Header<LodgingRoomApiResponse> lodgingTypeRead(@PathVariable(value = "id", required = false) Long id) {
        return lodgingApiLogicService.LodgingRoomRead(id);
    }
    // 글로벌 환경설정 언어 읽기
    @RequestMapping(method = RequestMethod.GET, value = "/hostedit_1/{id}")
    public Header<MemGlobalApiResponse> readaa(@PathVariable(value = "id", required = false) Long id) {
        return memberApiLogicService.readaa(id);
    }
    // 요금 및 예약 가능 조정일 읽기
    @RequestMapping(method = RequestMethod.GET, value = "/lodging_price_1/{id}")
    public Header<LodgingPriceApiResponse> lodging_price_1(@PathVariable(value = "id", required = false) Long id) {
        return lodgingApiLogicService.lodging_price_1(id);
    }
    // 여행기간 읽기
    @RequestMapping(method = RequestMethod.GET, value = "/price_weekend/{id}")
    public Header<LodgingDurationApiResponse> price_weekend(@PathVariable(value = "id", required = false) Long id) {
        return lodgingApiLogicService.price_weekend(id);
    }
    // 숙소사진 읽기
    @RequestMapping(method = RequestMethod.GET, value = "/host_option9_picture/{id}")
    public Header<LodgingPicturesApiResponse> host_option9_picture(@PathVariable(value = "id", required = false) Long id) {
        return lodgingApiLogicService.host_option9_picture(id);
    }
    // 숙소 위치 읽기 08.13
    @RequestMapping(method = RequestMethod.GET, value = "/hostoption5/{id}")
    public Header<LodgingLocationApiResponse> locationRead (@PathVariable(value = "id", required = false) Long id) {
        return lodgingApiLogicService.locationRead(id);
    }
    @GetMapping("/hostlist/{id}")
    public Header<List<LodgingListApiResponse>> listhost(@PathVariable Long id ,@PageableDefault(sort = {"lodgingId"}, direction = Sort.Direction.DESC) Pageable pageable){
        return lodgingApiLogicService.listhost(id, pageable);
    }
    // 달력 예약 가능 여부 읽기(Updated by SY)
    @RequestMapping(method = RequestMethod.GET, value = "/lodging_isresv_1/{id}")
    public Header<LodgingIsresvApiResponse> lodging_isresv_1(@PathVariable(value = "id", required = false) Long id) {
        return lodgingApiLogicService.lodging_isresv_1(id);
    }
    // 전체 숙소 리스트
    @RequestMapping(method = RequestMethod.GET, value = "/hosTlist/{id}")
    public Header<LodgingTotalAPiResponse> hosTlist(@PathVariable(value = "id", required = false) Long id){
        return lodgingApiLogicService.hosTlist(id);
    }


    //---------------host edit---------------//
    // 맞춤링크 업데이트
    @PostMapping("/hostedit")
    public Header<LodgingApiResponse> hosteditlink(@RequestBody Header<LodgingApiRequest> request){
        return lodgingApiLogicService.hosteditlink(request);
    }
    // 숙소상태 업데이트
    @PostMapping("/hostedit_2")
    public Header<LodgingApiResponse> hoststatus(@RequestBody Header<LodgingApiRequest> request){
        return lodgingApiLogicService.hoststatus(request);
    }
    // 교통편 업데이트
    @PostMapping("/hostedit_3")
    public Header<LodgingLocationApiResponse> hostLocation(@RequestBody Header<LodgingLocationApiRequest> request){
        return lodgingApiLogicService.hostLocation(request);
    }
    // 글로벌 환경설정 계정 업데이트
    @PostMapping("/hostedit_4")
    public Header<MemGlobalApiResponse> updatepreferLan(@RequestBody Header<MemGlobalApiRequest> request){
        return memberApiLogicService.updatepreferLan(request);
    }
    // 숙소 최저,최고요금 업데이트
    @PostMapping("/hostedit_5")
    public Header<LodgingPriceApiResponse> priceMaxMin(@RequestBody Header<LodgingPriceApiRequest> request){
        return lodgingApiLogicService.priceMaxMin(request);
    }
    // 숙소 요금 통화 업데이트
    @PostMapping("/hostedit_6")
    public Header<LodgingPriceApiResponse> priceTo(@RequestBody Header<LodgingPriceApiRequest> request){
        return lodgingApiLogicService.priceTo(request);
    }
    // 청소비 업데이트
    @PostMapping("/hostedit_7")
    public Header<LodgingPriceApiResponse> price_clean(@RequestBody Header<LodgingPriceApiRequest> request){
        return lodgingApiLogicService.price_clean(request);
    }
    // 반려동물 수수료 업데이트
    @PostMapping("/hostedit_8")
    public Header<LodgingPriceApiResponse> price_pet(@RequestBody Header<LodgingPriceApiRequest> request){
        return lodgingApiLogicService.price_pet(request);
    }
    // 주말1박 요금 업데이트
    @PostMapping("/hostedit_9")
    public Header<LodgingPriceApiResponse> price_weekend(@RequestBody Header<LodgingPriceApiRequest> request){
        return lodgingApiLogicService.price_weekend(request);
    }
    // 추가 게스트 수수료 업데이트
    @PostMapping("/hostedit_9_1")
    public Header<LodgingPriceApiResponse> price_guests(@RequestBody Header<LodgingPriceApiRequest> request){
        return lodgingApiLogicService.price_guests(request);
    }

    // ------------------------------------------ 여행 기간 ------------------------------------------ //
    // 주말1박 요금 업데이트
    @PostMapping("/hostedit_10")
    public Header<LodgingDurationApiResponse> duration_min(@RequestBody Header<LodgingDurationApiRequest> request){
        return lodgingApiLogicService.duration_min(request);
    }

    // 최소 숙박 일수 업데이트
    @PostMapping("/hostedit_11")
    public Header<LodgingDurationApiResponse> duration_daymin(@RequestBody Header<LodgingDurationApiRequest> request){
        return lodgingApiLogicService.duration_daymin(request);
    }
    // 최대 숙박 일수 업데이트(Updated by SY)
    @PostMapping("/hostedit_12")
    public Header<LodgingDurationApiResponse> lodging_duration_max(@RequestBody Header<LodgingDurationApiRequest> request){
        return lodgingApiLogicService.lodging_duration_max(request);
    }
    // 맞춤 숙박 기간 업데이트(Updated by SY)
    @PostMapping("/hostedit_13")
    public Header<LodgingDurationApiResponse> lodging_duration_custom(@RequestBody Header<LodgingDurationApiRequest> request){
        return lodgingApiLogicService.lodging_duration_custom(request);
    }
    // 예약 마감 시한 업데이트(Updated by SY)
    @PostMapping("/hostedit_14")
    public Header<LodgingIsresvApiResponse> lodging_isresv_dueday(@RequestBody Header<LodgingIsresvApiRequest> request){
        return lodgingApiLogicService.lodging_isresv_dueday(request);
    }
    // 준비 시간 업데이트(Updated by SY)
    @PostMapping("/hostedit_15")
    public Header<LodgingIsresvApiResponse> lodging_isresv_ready(@RequestBody Header<LodgingIsresvApiRequest> request){
        return lodgingApiLogicService.lodging_isresv_ready(request);
    }
    // 예약 가능 기간 없데이트
    @PostMapping("/hostedit_16")
    public Header<LodgingIsresvApiResponse> lodging_isresv_due(@RequestBody Header<LodgingIsresvApiRequest> request){
        return lodgingApiLogicService.lodging_isresv_due(request);
    }
    // 체크인 요일 제한 업데이트(Updated by SY)
    @PostMapping("/hostedit_17")
    public Header<LodgingIsresvApiResponse> lodging_isresv_limit(@RequestBody Header<LodgingIsresvApiRequest> request){
        return lodgingApiLogicService.lodging_isresv_limit(request);
    }


    // -------------------------- 정책 및 규칙 업데이트 -------------------
    // 환불 정책 업데이트(Updated by SY)
    @PostMapping("/hostedit_18")
    public Header<LodgingPolicyApiResponse> lodging_policy(@RequestBody Header<LodgingPolicyApiRequest> request){
        return lodgingApiLogicService.lodging_policy(request);
    }
    // 즉시 예약 업데이트(Updated by SY)
    @PostMapping("/hostedit_19")
    public Header<LodgingPolicyApiResponse> lodging_policy_immedi(@RequestBody Header<LodgingPolicyApiRequest> request){
        return lodgingApiLogicService.lodging_policy_immedi(request);
    }
    // 체크인 가능 시간 업데이트(Updated by SY)
    @PostMapping("/hostedit_20")
    public Header<LodgingBeforeApiResponse> lodging_before_checkin(@RequestBody Header<LodgingBeforeApiRequest> request){
        return lodgingApiLogicService.lodging_before_checkin(request);
    }
    // 체크아웃 시간 업데이트(Updated by SY)
    @PostMapping("/hostedit_21")
    public Header<LodgingBeforeApiResponse> lodging_before_checkout(@RequestBody Header<LodgingBeforeApiRequest> request){
        return lodgingApiLogicService.lodging_before_checkout(request);
    }
    // 숙소 이용규칙(어린이) 업데이트(Updated by SY)
    @PostMapping("/hostedit_22")
    public Header<LodgingRulesApiResponse> lodging_rules_child(@RequestBody Header<LodgingRulesApiRequest> request){
        return lodgingApiLogicService.lodging_rules_child(request);
    }

    // 숙소 이용규칙(유아) 업데이트(Updated by SY)
    @PostMapping("/hostedit_23")
    public Header<LodgingRulesApiResponse> lodging_rules_infant(@RequestBody Header<LodgingRulesApiRequest> request){
        return lodgingApiLogicService.lodging_rules_infant(request);
    }

    // 숙소 이용규칙(반려동물) 업데이트(Updated by SY)
    @PostMapping("/hostedit_24")
    public Header<LodgingRulesApiResponse> lodging_rules_pet(@RequestBody Header<LodgingRulesApiRequest> request){
        return lodgingApiLogicService.lodging_rules_pet(request);
    }

    // 숙소 이용규칙(흡연) 업데이트(Updated by SY)
    @PostMapping("/hostedit_25")
    public Header<LodgingRulesApiResponse> lodging_rules_smoking(@RequestBody Header<LodgingRulesApiRequest> request){
        return lodgingApiLogicService.lodging_rules_smoking(request);
    }

    // 숙소 이용규칙(이벤트) 업데이트(Updated by SY)
    @PostMapping("/hostedit_26")
    public Header<LodgingRulesApiResponse> lodging_rules_event(@RequestBody Header<LodgingRulesApiRequest> request){
        return lodgingApiLogicService.lodging_rules_event(request);
    }

    // 숙소 이용규칙(추가규칙) 업데이트(Updated by SY)
    @PostMapping("/hostedit_27")
    public Header<LodgingRulesApiResponse> lodging_rules_extra(@RequestBody Header<LodgingRulesApiRequest> request){
        return lodgingApiLogicService.lodging_rules_extra(request);
    }

    // 정책 읽기 08.18 추가
    @RequestMapping(method = RequestMethod.GET, value = "/lodging_policy_1/{id}")
    public Header<LodgingPolicyApiResponse> lodging_policy_1(@PathVariable(value = "id", required = false) Long id) {
        return lodgingApiLogicService.lodging_policy_1(id);
    }
    // 체크인 시작 종료 체크아웃 시간 (lodging_before) 읽기 08.18 추가
    @RequestMapping(method = RequestMethod.GET, value = "/lodging_before_1/{id}")
    public Header<LodgingBeforeApiResponse> lodging_before_1(@PathVariable(value = "id", required = false) Long id) {
        return lodgingApiLogicService.lodging_before_1(id);
    }

    // 게스트 필수 조건 읽기 08.18 추가
    @RequestMapping(method = RequestMethod.GET, value = "/lodging_requires_1/{id}")
    public Header<LodgingRequiresApiResponse> lodging_requires_1(@PathVariable(value = "id", required = false) Long id) {
        return lodgingApiLogicService.lodging_requires_1(id);
    }

    // 법률과 규정 읽기 08.18 추가
    @RequestMapping(method = RequestMethod.GET, value = "/lodging_role_1/{id}")
    public Header<LodgingRoleApiResponse> lodging_role_1(@PathVariable(value = "id", required = false) Long id) {
        return lodgingApiLogicService.lodging_role_1(id);
    }

    // 숙소 이용규칙 읽기 08.18 추가
    @RequestMapping(method = RequestMethod.GET, value = "/lodging_rules_1/{id}")
    public Header<LodgingRulesApiResponse> lodging_rules_1(@PathVariable(value = "id", required = false) Long id) {
        return lodgingApiLogicService.lodging_rules_1(id);
    }


    // 법률과 규정 업데이트 08.18
    @PostMapping("/hostedit_28")
    public Header<LodgingRoleApiResponse> lodging_role(@RequestBody Header<LodgingRoleApiRequest> request){
        return lodgingApiLogicService.lodging_role(request);
    }

    // 지역 설명 업데이트 08.19
    @PostMapping("/hostedit_29")
    public Header<LodgingLocationApiResponse> locationEx(@RequestBody Header<LodgingLocationApiRequest> request){
        return lodgingApiLogicService.locationEx(request);
    }

    // 숙소유형 업데이트 08.19
    @PostMapping("/hostedit_30")
    public Header<LodgingRoomApiResponse> hostroomsss(@RequestBody Header<LodgingRoomApiRequest> request){
        return lodgingApiLogicService.hostroomsss(request);
    }

    @Override
    public Header<LodgingApiResponse> read(Long id) {
        return null;
    }

    @Override
    public Header<LodgingApiResponse> update(Header<LodgingApiRequest> request) {
        return null;
    }

    @Override
    public Header<LodgingApiResponse> delete(Long id) {
        return null;
    }

    // read //
//     전체 예약 리스트
    @GetMapping("/list")
    public Header<List<LodgingApiResponse>> list(@PageableDefault(sort = {"lodgingId"}, direction = Sort.Direction.DESC) Pageable pageable){
        return lodgingApiLogicService.list(pageable);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/roomPage/{id}")
    public Header<LodgingTotalAPiResponse> roomPages(@PathVariable(value = "id", required = false) Long id){
        return lodgingApiLogicService.roomPages(id);
    }

    // host_done read //
//    @RequestMapping(method = RequestMethod.GET, path = "/lodgingTitle")
//    public Header<LodgingApiResponse> lodgingTitleRead(@RequestParam Long id) {
//        return lodgingApiLogicService.lodgingTitleRead(id);
//    }

}
