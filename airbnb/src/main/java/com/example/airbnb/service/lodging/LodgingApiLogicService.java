package com.example.airbnb.service.lodging;

import com.example.airbnb.ifs.CrudInterface;
import com.example.airbnb.model.entity.lodging.*;
import com.example.airbnb.model.entity.member.Member;
import com.example.airbnb.model.network.Header;
import com.example.airbnb.model.network.Pagination;
import com.example.airbnb.model.network.request.lodging.*;
import com.example.airbnb.model.network.response.lodging.*;
import com.example.airbnb.model.network.response.member.MemberApiResponse;
import com.example.airbnb.repository.lodging.LodgingBeforeRepository;
import com.example.airbnb.repository.lodging.LodgingDurationRepository;
import com.example.airbnb.repository.lodging.LodgingIsresvRepository;
import com.example.airbnb.repository.lodging.LodgingLocationDetailRepository;
import com.example.airbnb.repository.lodging.LodgingLocationRepository;
import com.example.airbnb.repository.lodging.LodgingPicturesRepository;
import com.example.airbnb.repository.lodging.LodgingPolicyRepository;
import com.example.airbnb.repository.lodging.LodgingPriceRepository;
import com.example.airbnb.repository.lodging.LodgingRequiresRepository;
import com.example.airbnb.repository.lodging.LodgingRoleRepository;
import com.example.airbnb.repository.lodging.LodgingRoomRepository;
import com.example.airbnb.repository.lodging.LodgingRulesRepository;
import com.example.airbnb.repository.lodging.LodgingWifiRepository;
import com.example.airbnb.repository.lodging.LodgingRepository;
import com.example.airbnb.repository.member.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class LodgingApiLogicService implements CrudInterface<LodgingApiRequest, LodgingApiResponse> {

    @Autowired
    private final LodgingRepository lodgingRepository;
    @Autowired
    private final LodgingBeforeRepository lodgingBeforeRepository;
    @Autowired
    private final LodgingDurationRepository lodgingDurationRepository;
    @Autowired
    private final LodgingIsresvRepository lodgingIsresvRepository;
    @Autowired
    private final LodgingLocationDetailRepository lodgingLocationDetailRepository;
    @Autowired
    private final LodgingLocationRepository lodgingLocationRepository;
    @Autowired
    private final LodgingPicturesRepository lodgingPicturesRepository;
    @Autowired
    private final LodgingPolicyRepository lodgingPolicyRepository;
    @Autowired
    private final LodgingPriceRepository lodgingPriceRepository;
    @Autowired
    private final LodgingRequiresRepository lodgingRequiresRepository;
    @Autowired
    private final LodgingRoleRepository lodgingRoleRepository;
    @Autowired
    private final LodgingRoomRepository lodgingRoomRepository;
    @Autowired
    private final LodgingRulesRepository lodgingRulesRepository;
    @Autowired
    private final LodgingWifiRepository lodgingWifiRepository;
    @Autowired
    private final MemberRepository memberRepository;

    //숙소 및 객실
    private Header<LodgingRoomApiResponse> lodgingroom(LodgingRoom lodgingRoom){
        LodgingRoomApiResponse lodgingRoomApiResponse = LodgingRoomApiResponse.builder()
                .lodgingId(lodgingRoom.getLodgingId())
                .lodgingType1(lodgingRoom.getLodgingType1())
                .lodgingType2(lodgingRoom.getLodgingType2())
                .lodgingType3(lodgingRoom.getLodgingType3())
                .lodgingHigh(lodgingRoom.getLodgingHigh())
                .lodgingFloor(lodgingRoom.getLodgingFloor())
                .lodgingBeds(lodgingRoom.getLodgingBeds())
                .lodgingBedrooms(lodgingRoom.getLodgingBedrooms())
                .lodgingBathroom(lodgingRoom.getLodgingBathroom())
                .build();
        return Header.OK(lodgingRoomApiResponse);
    }
    //숙소 기본 정보
    private Header<LodgingApiResponse> lodging(Lodging lodging){
        LodgingApiResponse lodgingApiResponse = LodgingApiResponse.builder()
                .lodgingId(lodging.getLodgingId())
                .lodgingTitle(lodging.getLodgingTitle())
                .lodgingExplain(lodging.getLodgingExplain())
                .lodgingGuests(lodging.getLodgingGuests())
                .lodgingCovi(lodging.getLodgingCovi())
                .lodgingHref(lodging.getLodgingHref())
                .lodgingStatus(lodging.getLodgingStatus())
                .lodgingUpdateDate(LocalDateTime.now())
                .memId(lodging.getMemId())
                .build();
        return Header.OK(lodgingApiResponse);
    }

    // 요금 및 예약 가능 조정일
    private Header<LodgingPriceApiResponse> lodgingprice(LodgingPrice lodgingPrice){
        LodgingPriceApiResponse lodgingPriceApiResponse = LodgingPriceApiResponse.builder()
                .lodgingId(lodgingPrice.getLodgingId())
                .priceNormal(lodgingPrice.getPriceNormal())
                .priceMin(lodgingPrice.getPriceMin())
                .priceMax(lodgingPrice.getPriceMax())
                .priceTo(lodgingPrice.getPriceTo())
                .priceClean(lodgingPrice.getPriceClean())
                .priceCleanShort(lodgingPrice.getPriceCleanShort())
                .pricePet(lodgingPrice.getPricePet())
                .priceExtra(lodgingPrice.getPriceExtra())
                .priceWeekend(lodgingPrice.getPriceWeekend())
                .build();
        return Header.OK(lodgingPriceApiResponse);
    }

    private Header<LodgingLocationApiResponse> location(LodgingLocation lodgingLocation){
        LodgingLocationApiResponse lodgingLocationApiResponse = LodgingLocationApiResponse.builder()
                .lodgingId(lodgingLocation.getLodgingId())
                .locationState(lodgingLocation.getLocationState())
                .locationCity(lodgingLocation.getLocationCity())
                .locationRoad(lodgingLocation.getLocationRoad())
                .locationDetail(lodgingLocation.getLocationDetail())
                .locationPost(lodgingLocation.getLocationPost())
                .loactionExplain(lodgingLocation.getLoactionExplain())
                .loactionTraffic(lodgingLocation.getLoactionTraffic())
                .loactionView(lodgingLocation.getLoactionView())
                .locationWay(lodgingLocation.getLocationWay())
                .locationManual(lodgingLocation.getLocationManual())
                .build();
        return Header.OK(lodgingLocationApiResponse);
    }
    // 여행기간
    private Header<LodgingDurationApiResponse> duration(@NotNull LodgingDuration lodgingDuration){
        LodgingDurationApiResponse lodgingDurationApiResponse = LodgingDurationApiResponse.builder()
                .lodgingId(lodgingDuration.getLodgingId())
                .durationMin(lodgingDuration.getDurationMin())
                .durationDaymin(lodgingDuration.getDurationDaymin())
                .durationMax(lodgingDuration.getDurationMax())
                .durationCustom(lodgingDuration.getDurationCustom())
                .durationCustommin(lodgingDuration.getDurationCustommin())
                .durationCustomdays(lodgingDuration.getDurationCustomdays())
                .build();
        return Header.OK(lodgingDurationApiResponse);
    }

    // 숙소관리 아이디생성
    private Header<LodgingApiResponse> response1(Lodging lodging){
        LodgingApiResponse lodgingApiResponse = LodgingApiResponse.builder()
                .lodgingId(lodging.getLodgingId())
                .memId((lodging.getMemId()))
                .build();
        return Header.OK(lodgingApiResponse);
    }

    // 숙소사진
    private Header<LodgingPicturesApiResponse> lodgingPictures(LodgingPictures lodgingPictures){
        LodgingPicturesApiResponse lodgingPicturesApiResponse = LodgingPicturesApiResponse.builder()
                .lodgingId(lodgingPictures.getLodgingId())
                .lodgingPic(lodgingPictures.getLodgingPic())
                .lodgingPicurl(lodgingPictures.getLodgingPicurl())
                .lodgingPic2(lodgingPictures.getLodgingPic2())
                .lodgingPicurl2(lodgingPictures.getLodgingPicurl2())
                .lodgingPic3(lodgingPictures.getLodgingPic3())
                .lodgingPicurl3(lodgingPictures.getLodgingPicurl3())
                .lodgingPic4(lodgingPictures.getLodgingPic4())
                .lodgingPicurl4(lodgingPictures.getLodgingPicurl4())
                .lodgingPic5(lodgingPictures.getLodgingPic5())
                .lodgingPicurl5(lodgingPictures.getLodgingPicurl5())
                .memId(lodgingPictures.getMemId())
                .build();
        return Header.OK(lodgingPicturesApiResponse);
    }
    // 멤버 아이디
    private Header<LodgingApiResponse> responsemem(Lodging lodging){
        LodgingApiResponse lodgingApiResponse = LodgingApiResponse.builder()
                .memId(lodging.getMemId())
                .build();
        return Header.OK(lodgingApiResponse);
    }
    // 요금 및 예약 가능 조정일
    private Header<LodgingPriceApiResponse> lodgingPrice(LodgingPrice lodgingPrice){
        LodgingPriceApiResponse lodgingPriceApiResponse = LodgingPriceApiResponse.builder()
                .priceNormal(lodgingPrice.getPriceNormal())
                .priceMin(lodgingPrice.getPriceMin())
                .priceMax(lodgingPrice.getPriceMax())
                .priceTo(lodgingPrice.getPriceTo())
                .priceClean(lodgingPrice.getPriceClean())
                .priceCleanShort(lodgingPrice.getPriceCleanShort())
                .pricePet(lodgingPrice.getPricePet())
                .priceExtra(lodgingPrice.getPriceExtra())
                .priceWeekend(lodgingPrice.getPriceWeekend())
                .build();
        return Header.OK(lodgingPriceApiResponse);
    }
    // 예약 가능 여부
    private Header<LodgingIsresvApiResponse> lodgingIsresv(LodgingIsresv lodgingIsresv){
        LodgingIsresvApiResponse lodgingIsresvApiResponse = LodgingIsresvApiResponse.builder()
                .lodgingId(lodgingIsresv.getLodgingId())
                .isresvDueday(lodgingIsresv.getIsresvDueday())
                .isresvDuetime(lodgingIsresv.getIsresvDuetime())
                .isresvReady(lodgingIsresv.getIsresvReady())
                .isresvStart(lodgingIsresv.getIsresvStart())
                .isresvEnd(lodgingIsresv.getIsresvEnd())
                .isresvLimit(lodgingIsresv.getIsresvLimit())
                .build();
        return Header.OK(lodgingIsresvApiResponse);
    }

    // 정책
    private Header<LodgingPolicyApiResponse> lodgingPolicy(LodgingPolicy lodgingPolicy){
        LodgingPolicyApiResponse lodgingPolicyApiResponse = LodgingPolicyApiResponse.builder()
                .policyStanard(lodgingPolicy.getPolicyStanard())
                .policyLongstay(lodgingPolicy.getPolicyLongstay())
                .immediHow(lodgingPolicy.getImmediHow())
                .immediReqired(lodgingPolicy.getImmediReqired())
                .build();
        return Header.OK(lodgingPolicyApiResponse);
    }
    // 즉시 예약 업데이트(Updated by SY)
    public Header<LodgingPolicyApiResponse> lodging_policy_immedi(Header<LodgingPolicyApiRequest> request){
        LodgingPolicyApiRequest lodgingPolicyApiRequest  = request.getData();
        Optional<LodgingPolicy> lodgingPolicy = lodgingPolicyRepository.findById(lodgingPolicyApiRequest.getLodgingId());
        return lodgingPolicy.map(
                        lodgingPolicys -> {
                            lodgingPolicys.setImmediHow(lodgingPolicyApiRequest.getImmediHow());
                            lodgingPolicys.setImmediReqired(lodgingPolicyApiRequest.getImmediReqired());
                            return lodgingPolicys;
                        }).map(lodgingPolicys -> lodgingPolicyRepository.save(lodgingPolicys)).map(lodgingPolicys -> lodgingPolicy(lodgingPolicys))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }
    // updated by SY(220811_1400) -----------------------------------------------------------------
    // 게스트를 위한 정보
    private Header<LodgingBeforeApiResponse> lodgingBefore(LodgingBefore lodgingBefore){
        LodgingBeforeApiResponse lodgingBeforeApiResponse = LodgingBeforeApiResponse.builder()
                .checkinStart(lodgingBefore.getCheckinStart())
                .checkinEnd(lodgingBefore.getCheckinEnd())
                .checkoutTime(lodgingBefore.getCheckoutTime())
                .communicateGuest1(lodgingBefore.getCommunicateGuest1())
                .communicateGuest2(lodgingBefore.getCommunicateGuest2())
                .communicateGuest3(lodgingBefore.getCommunicateGuest3())
                .communicateExplain(lodgingBefore.getCommunicateExplain())
                .build();
        return Header.OK(lodgingBeforeApiResponse);
    }
    // 숙소 이용규칙
    private Header<LodgingRulesApiResponse> lodgingRules(LodgingRules lodgingRules){
        LodgingRulesApiResponse lodgingRulesApiResponse = LodgingRulesApiResponse.builder()
                .rulesChild(lodgingRules.getRulesChild())
                .rulesInfant(lodgingRules.getRulesInfant())
                .rulesPet(lodgingRules.getRulesPet())
                .rulesSmoking(lodgingRules.getRulesSmoking())
                .rulesEvent(lodgingRules.getRulesEvent())
                .rulesExtra(lodgingRules.getRulesExtra())
                .build();
        return Header.OK(lodgingRulesApiResponse);
    }


    //---------------------------------------숙소등록시작---------------------------------------//

    // 테이블 lodgingId 생성
    @Override
    public Header<LodgingApiResponse> create(Header<LodgingApiRequest> request) {
        LodgingApiRequest lodgingApiRequest  = request.getData();
        Lodging lodging = Lodging.builder()
                .lodgingStatus("등록 중")
                .lodgingHref("설정되지 않음")
                .lodgingDate(LocalDateTime.now())
                .lodgingUpdateDate(LocalDateTime.now())
                .build();
        Lodging newLodging = lodgingRepository.save(lodging);
        System.out.println("lodging id :"+ newLodging.getLodgingId());
        LodgingBefore lodgingBefore = LodgingBefore.builder()
                .lodgingId(newLodging.getLodgingId())
                .build();
        LodgingDuration lodgingDuration = LodgingDuration.builder()
                .lodgingId(newLodging.getLodgingId())
                .durationCustom("없음")
                .build();
        LodgingIsresv lodgingIsresv = LodgingIsresv.builder()
                .lodgingId(newLodging.getLodgingId())
                .isresvReady("없음")
                .isresvStart(LocalDateTime.now())
                .isresvEnd(LocalDateTime.now().plusDays(1))
                .build();
        LodgingLocation lodgingLocation = LodgingLocation.builder()
                .lodgingId(newLodging.getLodgingId())
                .build();
        LodgingLocationDetail lodgingLocationDetail= LodgingLocationDetail.builder()
                .lodgingId(newLodging.getLodgingId())
                .build();
        LodgingPictures lodgingPictures = LodgingPictures.builder()
                .lodgingId(newLodging.getLodgingId())
                .build();
        LodgingPolicy lodgingPolicy = LodgingPolicy.builder()
                .lodgingId(newLodging.getLodgingId())
                .policyStanard("22/08/19")
                .policyLongstay("22/08/20")
                .build();
        LodgingPrice lodgingPrice = LodgingPrice.builder()
                .lodgingId(newLodging.getLodgingId())
                .priceTo("KRW")
                .build();
        LodgingRequires lodgingRequires = LodgingRequires.builder()
                .lodgingId(newLodging.getLodgingId())
                .build();
        LodgingRole lodgingRole = LodgingRole.builder()
                .lodgingId(newLodging.getLodgingId())
                .build();
        LodgingRoom lodgingRoom = LodgingRoom.builder()
                .lodgingId(newLodging.getLodgingId())
                .build();
        LodgingRules lodgingRules = LodgingRules.builder()
                .lodgingId(newLodging.getLodgingId())
                .build();
        LodgingWifi lodgingWifi = LodgingWifi.builder()
                .lodgingId(newLodging.getLodgingId())
                .build();
        lodgingBeforeRepository.save(lodgingBefore);
        lodgingDurationRepository.save(lodgingDuration);
        lodgingIsresvRepository.save(lodgingIsresv);
        lodgingLocationRepository.save(lodgingLocation);
        lodgingLocationDetailRepository.save(lodgingLocationDetail);
        lodgingPicturesRepository.save(lodgingPictures);
        lodgingPolicyRepository.save(lodgingPolicy);
        lodgingPriceRepository.save(lodgingPrice);
        lodgingRequiresRepository.save(lodgingRequires);
        lodgingRoleRepository.save(lodgingRole);
        lodgingRoomRepository.save(lodgingRoom);
        lodgingRulesRepository.save(lodgingRules);
        lodgingWifiRepository.save(lodgingWifi);
        return response1(newLodging);
    }


    // --------------------------------------업데이트 시작--------------------------------------//
    // 숙소 타입1
    public Header<LodgingRoomApiResponse> accommodationType1(Header<LodgingRoomApiRequest> request){
        LodgingRoomApiRequest lodgingRoomApiRequest  = request.getData();
        Optional<LodgingRoom> lodgingRoom = lodgingRoomRepository.findById(lodgingRoomApiRequest.getLodgingId());
        return lodgingRoom.map(
                        lodgingRooms -> {
                            lodgingRooms.setLodgingType1(lodgingRoomApiRequest.getLodgingType1());
                            return lodgingRooms;
                        }).map(lodgingRooms -> lodgingRoomRepository.save(lodgingRooms)).map(lodgingRooms -> lodgingroom(lodgingRooms))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }
    // 숙소 타입2
    public Header<LodgingRoomApiResponse> accommodationType2(Header<LodgingRoomApiRequest> request){
        LodgingRoomApiRequest lodgingRoomApiRequest  = request.getData();
        Optional<LodgingRoom> lodgingRoom = lodgingRoomRepository.findById(lodgingRoomApiRequest.getLodgingId());
        return lodgingRoom.map(
                        lodgingRooms -> {
                            lodgingRooms.setLodgingType2(lodgingRoomApiRequest.getLodgingType2());
                            return lodgingRooms;
                        }).map(lodgingRooms -> lodgingRoomRepository.save(lodgingRooms)).map(lodgingRooms -> lodgingroom(lodgingRooms))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }
    // 숙소 타입3
    public Header<LodgingRoomApiResponse> accommodationType3(Header<LodgingRoomApiRequest> request){
        LodgingRoomApiRequest lodgingRoomApiRequest  = request.getData();
        Optional<LodgingRoom> lodgingRoom = lodgingRoomRepository.findById(lodgingRoomApiRequest.getLodgingId());
        return lodgingRoom.map(
                        lodgingRooms -> {
                            lodgingRooms.setLodgingType3(lodgingRoomApiRequest.getLodgingType3());
                            return lodgingRooms;
                        }).map(lodgingRooms -> lodgingRoomRepository.save(lodgingRooms)).map(lodgingRooms -> lodgingroom(lodgingRooms))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }
    // 게스트 수
    public Header<LodgingApiResponse> guestToWelcome(Header<LodgingApiRequest> request){
        LodgingApiRequest lodgingApiRequest  = request.getData();
        Optional<Lodging> lodging = lodgingRepository.findById(lodgingApiRequest.getLodgingId());
        return lodging.map(
                        lodgings -> {
                            lodgings.setLodgingGuests(lodgingApiRequest.getLodgingGuests());
                            return lodgings;
                        }).map(lodgings -> lodgingRepository.save(lodgings)).map(lodgings -> lodging(lodgings))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }
    // 방 및 기타 공간
    public Header<LodgingRoomApiResponse> roomAndOtherSpaces(Header<LodgingRoomApiRequest> request){
        LodgingRoomApiRequest lodgingRoomApiRequest  = request.getData();
        Optional<LodgingRoom> lodgingRoom = lodgingRoomRepository.findById(lodgingRoomApiRequest.getLodgingId());
        return lodgingRoom.map(
                        lodgingRooms -> {
                            lodgingRooms.setLodgingBeds(lodgingRoomApiRequest.getLodgingBeds());
                            lodgingRooms.setLodgingBedrooms(lodgingRoomApiRequest.getLodgingBedrooms());
                            lodgingRooms.setLodgingBathroom(lodgingRoomApiRequest.getLodgingBathroom());
                            return lodgingRooms;
                        }).map(lodgingRooms -> lodgingRoomRepository.save(lodgingRooms)).map(lodgingRooms -> lodgingroom(lodgingRooms))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }
    // 숙소 편의시설
    public Header<LodgingApiResponse> facilities(Header<LodgingApiRequest> request){
        LodgingApiRequest lodgingApiRequest  = request.getData();
        Optional<Lodging> lodging = lodgingRepository.findById(lodgingApiRequest.getLodgingId());
        return lodging.map(
                        lodgings -> {
                            lodgings.setLodgingCovi(lodgingApiRequest.getLodgingCovi());
                            return lodgings;
                        }).map(lodgings -> lodgingRepository.save(lodgings)).map(lodgings -> lodging(lodgings))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }
    // 숙소 제목
    public Header<LodgingApiResponse> lodgingTitle(Header<LodgingApiRequest> request){
        LodgingApiRequest lodgingApiRequest  = request.getData();
        Optional<Lodging> lodging = lodgingRepository.findById(lodgingApiRequest.getLodgingId());
        return lodging.map(
                        lodgings -> {
                            lodgings.setLodgingTitle(lodgingApiRequest.getLodgingTitle());
                            return lodgings;
                        }).map(lodgings -> lodgingRepository.save(lodgings)).map(lodgings -> lodging(lodgings))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }
    // 숙소 설명
    public Header<LodgingApiResponse> lodgingExplain(Header<LodgingApiRequest> request){
        LodgingApiRequest lodgingApiRequest  = request.getData();
        Optional<Lodging> lodging = lodgingRepository.findById(lodgingApiRequest.getLodgingId());
        return lodging.map(
                        lodgings -> {
                            lodgings.setLodgingExplain(lodgingApiRequest.getLodgingExplain());
                            return lodgings;
                        }).map(lodgings -> lodgingRepository.save(lodgings)).map(lodgings -> lodging(lodgings))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    // 숙소 요금 지정 (기본 요금)
    public Header<LodgingPriceApiResponse> lodgingPrice(Header<LodgingPriceApiRequest> request){
        LodgingPriceApiRequest lodgingPriceApiRequest  = request.getData();
        Optional<LodgingPrice> lodgingPrice = lodgingPriceRepository.findById(lodgingPriceApiRequest.getLodgingId());
        return lodgingPrice.map(
                        lodgingPrices -> {
                            lodgingPrices.setPriceNormal(lodgingPriceApiRequest.getPriceNormal());
                            return lodgingPrices;
                        }).map(lodgingPrices -> lodgingPriceRepository.save(lodgingPrices)).map(lodgingPrices -> lodgingprice(lodgingPrices))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }
    // 숙소 요금 지정 (최저 요금,최고요금)
    public Header<LodgingPriceApiResponse> priceMaxMin(Header<LodgingPriceApiRequest> request){
        LodgingPriceApiRequest lodgingPriceApiRequest  = request.getData();
        Optional<LodgingPrice> lodgingPrice = lodgingPriceRepository.findById(lodgingPriceApiRequest.getLodgingId());
        return lodgingPrice.map(
                        lodgingPrices -> {
                            lodgingPrices.setPriceMax(lodgingPriceApiRequest.getPriceMax());
                            lodgingPrices.setPriceMin(lodgingPriceApiRequest.getPriceMin());
                            return lodgingPrices;
                        }).map(lodgingPrices -> lodgingPriceRepository.save(lodgingPrices)).map(lodgingPrices -> lodgingprice(lodgingPrices))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }
    // 숙소 요금 통화
    public Header<LodgingPriceApiResponse> priceTo(Header<LodgingPriceApiRequest> request){
        LodgingPriceApiRequest lodgingPriceApiRequest  = request.getData();
        Optional<LodgingPrice> lodgingPrice = lodgingPriceRepository.findById(lodgingPriceApiRequest.getLodgingId());
        return lodgingPrice.map(
                        lodgingPrices -> {
                            lodgingPrices.setPriceTo(lodgingPriceApiRequest.getPriceTo());
                            return lodgingPrices;
                        }).map(lodgingPrices -> lodgingPriceRepository.save(lodgingPrices)).map(lodgingPrices -> lodgingprice(lodgingPrices))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }
    // 청소비 수수료
    public Header<LodgingPriceApiResponse> price_clean(Header<LodgingPriceApiRequest> request){
        LodgingPriceApiRequest lodgingPriceApiRequest  = request.getData();
        Optional<LodgingPrice> lodgingPrice = lodgingPriceRepository.findById(lodgingPriceApiRequest.getLodgingId());
        return lodgingPrice.map(
                        lodgingPrices -> {
                            lodgingPrices.setPriceClean(lodgingPriceApiRequest.getPriceClean());
                            lodgingPrices.setPriceCleanShort(lodgingPriceApiRequest.getPriceCleanShort());
                            return lodgingPrices;
                        }).map(lodgingPrices -> lodgingPriceRepository.save(lodgingPrices)).map(lodgingPrices -> lodgingprice(lodgingPrices))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }
    // 반려동물 수수료
    public Header<LodgingPriceApiResponse> price_pet(Header<LodgingPriceApiRequest> request){
        LodgingPriceApiRequest lodgingPriceApiRequest  = request.getData();
        Optional<LodgingPrice> lodgingPrice = lodgingPriceRepository.findById(lodgingPriceApiRequest.getLodgingId());
        return lodgingPrice.map(
                        lodgingPrices -> {
                            lodgingPrices.setPricePet(lodgingPriceApiRequest.getPricePet());
                            return lodgingPrices;
                        }).map(lodgingPrices -> lodgingPriceRepository.save(lodgingPrices)).map(lodgingPrices -> lodgingprice(lodgingPrices))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }
    // 주말 1박 요금
    public Header<LodgingPriceApiResponse> price_weekend(Header<LodgingPriceApiRequest> request){
        LodgingPriceApiRequest lodgingPriceApiRequest  = request.getData();
        Optional<LodgingPrice> lodgingPrice = lodgingPriceRepository.findById(lodgingPriceApiRequest.getLodgingId());
        return lodgingPrice.map(
                        lodgingPrices -> {
                            lodgingPrices.setPriceWeekend(lodgingPriceApiRequest.getPriceWeekend());
                            return lodgingPrices;
                        }).map(lodgingPrices -> lodgingPriceRepository.save(lodgingPrices)).map(lodgingPrices -> lodgingprice(lodgingPrices))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }
    // 추가 게스트 수수료
    public Header<LodgingPriceApiResponse> price_guests(Header<LodgingPriceApiRequest> request){
        LodgingPriceApiRequest lodgingPriceApiRequest  = request.getData();
        Optional<LodgingPrice> lodgingPrice = lodgingPriceRepository.findById(lodgingPriceApiRequest.getLodgingId());
        return lodgingPrice.map(
                        lodgingPrices -> {
                            lodgingPrices.setPriceExtra(lodgingPriceApiRequest.getPriceExtra());
                            return lodgingPrices;
                        }).map(lodgingPrices -> lodgingPriceRepository.save(lodgingPrices)).map(lodgingPrices -> lodgingprice(lodgingPrices))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }
    // 최소 숙박 일수
    public Header<LodgingDurationApiResponse> duration_min(Header<LodgingDurationApiRequest> request){
        LodgingDurationApiRequest lodgingDurationApiRequest  = request.getData();
        Optional<LodgingDuration> lodgingDuration = lodgingDurationRepository.findById(lodgingDurationApiRequest.getLodgingId());
        return lodgingDuration.map(
                        lodgingDuration1 -> {
                            lodgingDuration1.setDurationMin(lodgingDurationApiRequest.getDurationMin());
                            return lodgingDuration1;
                        }).map(lodgingDuration1 -> lodgingDurationRepository.save(lodgingDuration1)).map(lodgingDuration1 -> duration(lodgingDuration1))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }
    // 요일별 최소 숙박 일수
    public Header<LodgingDurationApiResponse> duration_daymin(Header<LodgingDurationApiRequest> request){
        LodgingDurationApiRequest lodgingDurationApiRequest  = request.getData();
        Optional<LodgingDuration> lodgingDuration = lodgingDurationRepository.findById(lodgingDurationApiRequest.getLodgingId());
        return lodgingDuration.map(
                        lodgingDuration1 -> {
                            lodgingDuration1.setDurationDaymin(lodgingDurationApiRequest.getDurationDaymin());
                            return lodgingDuration1;
                        }).map(lodgingDuration1 -> lodgingDurationRepository.save(lodgingDuration1)).map(lodgingDuration1 -> duration(lodgingDuration1))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }
    // 맞춤 링크
    public Header<LodgingApiResponse> hosteditlink(Header<LodgingApiRequest> request){
        LodgingApiRequest lodgingApiRequest  = request.getData();
        Optional<Lodging> lodging = lodgingRepository.findById(lodgingApiRequest.getLodgingId());
        return lodging.map(
                        lodgings -> {
                            lodgings.setLodgingHref(lodgingApiRequest.getLodgingHref());
                            return lodgings;
                        }).map(lodgings -> lodgingRepository.save(lodgings)).map(lodgings -> lodging(lodgings))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }
    // 숙소상태
    public Header<LodgingApiResponse> hoststatus(Header<LodgingApiRequest> request){
        LodgingApiRequest lodgingApiRequest  = request.getData();
        Optional<Lodging> lodging = lodgingRepository.findById(lodgingApiRequest.getLodgingId());
        return lodging.map(
                        lodgings -> {
                            lodgings.setLodgingStatus(lodgingApiRequest.getLodgingStatus());
                            return lodgings;
                        }).map(lodgings -> lodgingRepository.save(lodgings)).map(lodgings -> lodging(lodgings))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }
    // 교통편
    public Header<LodgingLocationApiResponse> hostLocation(Header<LodgingLocationApiRequest> request){
        LodgingLocationApiRequest lodgingLocationApiRequest  = request.getData();
        Optional<LodgingLocation> lodgingLocation = lodgingLocationRepository.findById(lodgingLocationApiRequest.getLodgingId());
        return lodgingLocation.map(
                        lodgingLocation1 -> {
                            lodgingLocation1.setLoactionTraffic(lodgingLocationApiRequest.getLoactionTraffic());
                            return lodgingLocation1;
                        }).map(lodgingLocation1 -> lodgingLocationRepository.save(lodgingLocation1)).map(lodgingLocation1 -> location(lodgingLocation1))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }
    // 숙소ID 멤버 ID 없데이트
    public Header<LodgingApiResponse> createMem(Header<LodgingApiRequest> request){
        LodgingApiRequest lodgingApiRequest  = request.getData();
        Optional<Lodging> lodging = lodgingRepository.findById(lodgingApiRequest.getLodgingId());
        return lodging.map(
                        lodgings -> {
                            lodgings.setMemId(lodgingApiRequest.getMemId());
                            return lodgings;
                        }).map(lodgings -> lodgingRepository.save(lodgings)).map(lodgings -> lodging(lodgings))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }
    // 숙소사진ID 멤버 ID 업데이트
    public Header<LodgingPicturesApiResponse> memCreate(Header<LodgingPicturesApiRequest> request){
        LodgingPicturesApiRequest lodgingPicturesApiRequest  = request.getData();
        Optional<LodgingPictures> lodgingPictures = lodgingPicturesRepository.findById(lodgingPicturesApiRequest.getLodgingId());
        return lodgingPictures.map(
                        lodgingPictures1 -> {
                            lodgingPictures1.setMemId(lodgingPicturesApiRequest.getMemId());
                            return lodgingPictures1;
                        }).map(lodgingPictures1 -> lodgingPicturesRepository.save(lodgingPictures1)).map(lodgingPictures1 -> lodgingPictures(lodgingPictures1))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }
    // 숙소 위치 업데이트 08.13
    public Header<LodgingLocationApiResponse> lodgingLocation(Header<LodgingLocationApiRequest> request){
        LodgingLocationApiRequest lodgingLocationApiRequest  = request.getData();
        Optional<LodgingLocation> lodgingLocation = lodgingLocationRepository.findById(lodgingLocationApiRequest.getLodgingId());
        return lodgingLocation.map(
                        lodgingLocation1 -> {
                            lodgingLocation1.setLocationState(lodgingLocationApiRequest.getLocationState()); // 국가입니당 ㅋㅋ
                            lodgingLocation1.setLocationWay(lodgingLocationApiRequest.getLocationWay()); // 주/시 입니다 ㅋㅋ
                            lodgingLocation1.setLocationCity(lodgingLocationApiRequest.getLocationCity());
                            lodgingLocation1.setLocationRoad(lodgingLocationApiRequest.getLocationRoad());
                            lodgingLocation1.setLocationDetail(lodgingLocationApiRequest.getLocationDetail());
                            lodgingLocation1.setLocationPost(lodgingLocationApiRequest.getLocationPost());

                            return lodgingLocation1;
                        }).map(lodgingLocation1 -> lodgingLocationRepository.save(lodgingLocation1)).map(lodgingLocation1 -> location(lodgingLocation1))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }


    // @@@@@@@@@@@@수정@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    public Header<LodgingDurationApiResponse> lodging_duration_max(Header<LodgingDurationApiRequest> request){
        LodgingDurationApiRequest lodgingDurationApiRequest  = request.getData();
        Optional<LodgingDuration> lodgingDuration = lodgingDurationRepository.findById(lodgingDurationApiRequest.getLodgingId());
        return lodgingDuration.map(
                        lodgingDurations -> {
                            lodgingDurations.setDurationMax(lodgingDurationApiRequest.getDurationMax());
                            return lodgingDurations;
                        }).map(lodgingDurations -> lodgingDurationRepository.save(lodgingDurations)).map(lodgingDurations -> duration(lodgingDurations))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }
    // 맞춤 숙박 기간 업데이트(Updated by SY)
    public Header<LodgingDurationApiResponse> lodging_duration_custom(Header<LodgingDurationApiRequest> request){
        LodgingDurationApiRequest lodgingDurationApiRequest  = request.getData();
        Optional<LodgingDuration> lodgingDuration = lodgingDurationRepository.findById(lodgingDurationApiRequest.getLodgingId());
        return lodgingDuration.map(
                        lodgingDurations -> {
                            lodgingDurations.setDurationCustom(lodgingDurationApiRequest.getDurationCustom());
                            lodgingDurations.setDurationCustommin(lodgingDurationApiRequest.getDurationCustommin());
                            lodgingDurations.setDurationCustomdays(lodgingDurationApiRequest.getDurationCustomdays());
                            return lodgingDurations;
                        }).map(lodgingDurations -> lodgingDurationRepository.save(lodgingDurations)).map(lodgingDurations -> duration(lodgingDurations))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }
    // 예약 마감 시한 업데이트(Updated by SY)
    public Header<LodgingIsresvApiResponse> lodging_isresv_dueday(Header<LodgingIsresvApiRequest> request){
        LodgingIsresvApiRequest lodgingIsresvApiRequest  = request.getData();
        Optional<LodgingIsresv> lodgingIsresv = lodgingIsresvRepository.findById(lodgingIsresvApiRequest.getLodgingId());
        return lodgingIsresv.map(
                        lodgingIsresvs -> {
                            lodgingIsresvs.setIsresvDueday(lodgingIsresvApiRequest.getIsresvDueday());
                            lodgingIsresvs.setIsresvDuetime(lodgingIsresvApiRequest.getIsresvDuetime());
                            return lodgingIsresvs;
                        }).map(lodgingIsresvs -> lodgingIsresvRepository.save(lodgingIsresvs)).map(lodgingIsresvs -> lodgingIsresv(lodgingIsresvs))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }
    // 준비 시간 업데이트(Updated by SY)
    public Header<LodgingIsresvApiResponse> lodging_isresv_ready(Header<LodgingIsresvApiRequest> request){
        LodgingIsresvApiRequest lodgingIsresvApiRequest  = request.getData();
        Optional<LodgingIsresv> lodgingIsresv = lodgingIsresvRepository.findById(lodgingIsresvApiRequest.getLodgingId());
        return lodgingIsresv.map(
                        lodgingIsresvs -> {
                            lodgingIsresvs.setIsresvReady(lodgingIsresvApiRequest.getIsresvReady());
                            return lodgingIsresvs;
                        }).map(lodgingIsresvs -> lodgingIsresvRepository.save(lodgingIsresvs)).map(lodgingIsresvs -> lodgingIsresv(lodgingIsresvs))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }
    // 예약 가능 시간 업데이트(start, end)
    public Header<LodgingIsresvApiResponse> lodging_isresv_due(Header<LodgingIsresvApiRequest> request){
        LodgingIsresvApiRequest lodgingIsresvApiRequest  = request.getData();
        LocalDateTime date1 = lodgingIsresvApiRequest.getIsresvStart();
        LocalDateTime date2 = lodgingIsresvApiRequest.getIsresvEnd();

        Optional<LodgingIsresv> lodgingIsresv = lodgingIsresvRepository.findById(lodgingIsresvApiRequest.getLodgingId());
        return lodgingIsresv.map(
                        lodgingIsresvs -> {
                            lodgingIsresvs.setIsresvStart(date1);
                            lodgingIsresvs.setIsresvEnd(date2);
                            return lodgingIsresvs;
                        }).map(lodgingIsresvs -> lodgingIsresvRepository.save(lodgingIsresvs)).map(lodgingIsresvs -> lodgingIsresv(lodgingIsresvs))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }
    // 체크인 요일 제한 업데이트(Updated by SY)
    public Header<LodgingIsresvApiResponse> lodging_isresv_limit(Header<LodgingIsresvApiRequest> request){
        LodgingIsresvApiRequest lodgingIsresvApiRequest  = request.getData();
        Optional<LodgingIsresv> lodgingIsresv = lodgingIsresvRepository.findById(lodgingIsresvApiRequest.getLodgingId());
        return lodgingIsresv.map(
                        lodgingIsresvs -> {
                            lodgingIsresvs.setIsresvLimit(lodgingIsresvApiRequest.getIsresvLimit());
                            return lodgingIsresvs;
                        }).map(lodgingIsresvs -> lodgingIsresvRepository.save(lodgingIsresvs)).map(lodgingIsresvs -> lodgingIsresv(lodgingIsresvs))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }
    // 정책 및 규칙
    // 환불 정책 업데이트(Updated by SY)
    public Header<LodgingPolicyApiResponse> lodging_policy(Header<LodgingPolicyApiRequest> request){
        LodgingPolicyApiRequest lodgingPolicyApiRequest  = request.getData();
        Optional<LodgingPolicy> lodgingPolicy = lodgingPolicyRepository.findById(lodgingPolicyApiRequest.getLodgingId());
        return lodgingPolicy.map(
                        lodgingPolicys -> {
                            lodgingPolicys.setPolicyStanard(lodgingPolicyApiRequest.getPolicyStanard());
                            lodgingPolicys.setPolicyLongstay(lodgingPolicyApiRequest.getPolicyLongstay());
                            return lodgingPolicys;
                        }).map(lodgingPolicys -> lodgingPolicyRepository.save(lodgingPolicys)).map(lodgingPolicys -> lodgingPolicy(lodgingPolicys))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    // 체크인 가능 시간 업데이트(Updated by SY)
    public Header<LodgingBeforeApiResponse> lodging_before_checkin(Header<LodgingBeforeApiRequest> request){
        LodgingBeforeApiRequest lodgingBeforeApiRequest  = request.getData();
        Optional<LodgingBefore> lodgingBefore = lodgingBeforeRepository.findById(lodgingBeforeApiRequest.getLodgingId());
        return lodgingBefore.map(
                        lodgingBefores -> {
                            lodgingBefores.setCheckinStart(lodgingBeforeApiRequest.getCheckinStart());
                            lodgingBefores.setCheckinEnd(lodgingBeforeApiRequest.getCheckinEnd());
                            return lodgingBefores;
                        }).map(lodgingBefores -> lodgingBeforeRepository.save(lodgingBefores)).map(lodgingBefores -> lodgingBefore(lodgingBefores))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }
    // 체크아웃 시간 업데이트(Updated by SY)
    public Header<LodgingBeforeApiResponse> lodging_before_checkout(Header<LodgingBeforeApiRequest> request){
        LodgingBeforeApiRequest lodgingBeforeApiRequest  = request.getData();
        Optional<LodgingBefore> lodgingBefore = lodgingBeforeRepository.findById(lodgingBeforeApiRequest.getLodgingId());
        return lodgingBefore.map(
                        lodgingBefores -> {
                            lodgingBefores.setCheckoutTime(lodgingBeforeApiRequest.getCheckoutTime());
                            return lodgingBefores;
                        }).map(lodgingBefores -> lodgingBeforeRepository.save(lodgingBefores)).map(lodgingBefores -> lodgingBefore(lodgingBefores))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }
    // 숙소 이용규칙(어린이) 업데이트(Updated by SY)
    public Header<LodgingRulesApiResponse> lodging_rules_child(Header<LodgingRulesApiRequest> request){
        LodgingRulesApiRequest lodgingRulesApiRequest  = request.getData();
        Optional<LodgingRules> lodgingRules = lodgingRulesRepository.findById(lodgingRulesApiRequest.getLodgingId());
        return lodgingRules.map(
                        lodgingRuless -> {
                            lodgingRuless.setRulesChild(lodgingRulesApiRequest.getRulesChild());
                            return lodgingRuless;
                        }).map(lodgingRuless -> lodgingRulesRepository.save(lodgingRuless)).map(lodgingRuless -> lodgingRules(lodgingRuless))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    // 숙소 이용규칙(유아) 업데이트(Updated by SY)
    public Header<LodgingRulesApiResponse> lodging_rules_infant(Header<LodgingRulesApiRequest> request){
        LodgingRulesApiRequest lodgingRulesApiRequest  = request.getData();
        Optional<LodgingRules> lodgingRules = lodgingRulesRepository.findById(lodgingRulesApiRequest.getLodgingId());
        return lodgingRules.map(
                        lodgingRuless -> {
                            lodgingRuless.setRulesInfant(lodgingRulesApiRequest.getRulesInfant());
                            return lodgingRuless;
                        }).map(lodgingRuless -> lodgingRulesRepository.save(lodgingRuless)).map(lodgingRuless -> lodgingRules(lodgingRuless))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    // 숙소 이용규칙(반려동물) 업데이트(Updated by SY)
    public Header<LodgingRulesApiResponse> lodging_rules_pet(Header<LodgingRulesApiRequest> request){
        LodgingRulesApiRequest lodgingRulesApiRequest  = request.getData();
        Optional<LodgingRules> lodgingRules = lodgingRulesRepository.findById(lodgingRulesApiRequest.getLodgingId());
        return lodgingRules.map(
                        lodgingRuless -> {
                            lodgingRuless.setRulesPet(lodgingRulesApiRequest.getRulesPet());
                            return lodgingRuless;
                        }).map(lodgingRuless -> lodgingRulesRepository.save(lodgingRuless)).map(lodgingRuless -> lodgingRules(lodgingRuless))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    // 숙소 이용규칙(흡연) 업데이트(Updated by SY)
    public Header<LodgingRulesApiResponse> lodging_rules_smoking(Header<LodgingRulesApiRequest> request){
        LodgingRulesApiRequest lodgingRulesApiRequest  = request.getData();
        Optional<LodgingRules> lodgingRules = lodgingRulesRepository.findById(lodgingRulesApiRequest.getLodgingId());
        return lodgingRules.map(
                        lodgingRuless -> {
                            lodgingRuless.setRulesSmoking(lodgingRulesApiRequest.getRulesSmoking());
                            return lodgingRuless;
                        }).map(lodgingRuless -> lodgingRulesRepository.save(lodgingRuless)).map(lodgingRuless -> lodgingRules(lodgingRuless))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    // 숙소 이용규칙(이벤트) 업데이트(Updated by SY)
    public Header<LodgingRulesApiResponse> lodging_rules_event(Header<LodgingRulesApiRequest> request){
        LodgingRulesApiRequest lodgingRulesApiRequest  = request.getData();
        Optional<LodgingRules> lodgingRules = lodgingRulesRepository.findById(lodgingRulesApiRequest.getLodgingId());
        return lodgingRules.map(
                        lodgingRuless -> {
                            lodgingRuless.setRulesEvent(lodgingRulesApiRequest.getRulesEvent());
                            return lodgingRuless;
                        }).map(lodgingRuless -> lodgingRulesRepository.save(lodgingRuless)).map(lodgingRuless -> lodgingRules(lodgingRuless))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    // 숙소 이용규칙(추가규칙) 업데이트(Updated by SY)
    public Header<LodgingRulesApiResponse> lodging_rules_extra(Header<LodgingRulesApiRequest> request){
        LodgingRulesApiRequest lodgingRulesApiRequest  = request.getData();
        Optional<LodgingRules> lodgingRules = lodgingRulesRepository.findById(lodgingRulesApiRequest.getLodgingId());
        return lodgingRules.map(
                        lodgingRuless -> {
                            lodgingRuless.setRulesExtra(lodgingRulesApiRequest.getRulesExtra());
                            return lodgingRuless;
                        }).map(lodgingRuless -> lodgingRulesRepository.save(lodgingRuless)).map(lodgingRuless -> lodgingRules(lodgingRuless))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }
    // -------------------------------------- 업데이트 end--------------------------------------//




    //---------------------------------------read---------------------------------------//
    //숙소 이름
    @Override
    public Header<LodgingApiResponse> read(Long id) {
        return lodgingRepository.findById(id).map(lodging -> lodging(lodging)).orElseGet(() -> Header.ERROR("데이터 없음"));
    }
    public Header<LodgingDurationApiResponse> price_weekend(Long id) {
        return lodgingDurationRepository.findById(id).map(lodgingDuration -> duration(lodgingDuration)).orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    public Header<LodgingRoomApiResponse> LodgingRoomRead(Long id) {
        return lodgingRoomRepository.findById(id).map(lodgingRoom -> lodgingroom(lodgingRoom)).orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    public Header<LodgingPriceApiResponse> lodging_price_1(Long id) {
        return lodgingPriceRepository.findById(id).map(lodgingPrice -> lodgingPrice(lodgingPrice)).orElseGet(() -> Header.ERROR("데이터 없음"));
    }
    // 숙소 사진
    public Header<LodgingPicturesApiResponse> host_option9_picture(Long id) {
        return lodgingPicturesRepository.findById(id).map(lodgingPictures -> lodgingPictures(lodgingPictures)).orElseGet(() -> Header.ERROR("데이터 없음"));
    }
    // 숙소 위치 08.13
    public Header<LodgingLocationApiResponse> locationRead(Long id) {
        return lodgingLocationRepository.findById(id).map(lodgingLocation -> location(lodgingLocation)).orElseGet(() -> Header.ERROR("데이터 없음"));
    }
    // 예약 가능 여부 읽기
    public Header<LodgingIsresvApiResponse> lodging_isresv_1(Long id) {
        return lodgingIsresvRepository.findById(id).map(lodgingIsresv -> lodgingIsresv(lodgingIsresv)).orElseGet(() -> Header.ERROR("데이터 없음"));
    }


    // 숙소 리스트 읽어오기

    public LodgingListApiResponse hostList(Lodging lodging){
        LodgingListApiResponse  lodgingList = LodgingListApiResponse.builder()
                .lodgingId(lodging.getLodgingId())
                .lodgingBathroom(lodgingRoomRepository.findById(lodging.getLodgingId()).get().getLodgingBathroom())
                .lodgingBedrooms(lodgingRoomRepository.findById(lodging.getLodgingId()).get().getLodgingBedrooms())
                .lodgingBeds(lodgingRoomRepository.findById(lodging.getLodgingId()).get().getLodgingBeds())
                .lodgingPic(lodgingPicturesRepository.findById(lodging.getLodgingId()).get().getLodgingPic())
                .lodgingPicurl(lodgingPicturesRepository.findById(lodging.getLodgingId()).get().getLodgingPicurl())
                .locationState(lodgingLocationRepository.findById(lodging.getLodgingId()).get().getLocationState())
                .lodgingTitle(lodging.getLodgingTitle())
                .lodgingStatus(lodging.getLodgingStatus())
                .locationCity(lodgingLocationRepository.findById(lodging.getLodgingId()).get().getLocationCity())
                .lodgingDate(lodgingRepository.findById(lodging.getLodgingId()).get().getLodgingDate())
                .memId(lodging.getMemId())
                .build();
        return lodgingList;

    }


    public Header<List<LodgingListApiResponse>> listhost(Long id,Pageable pageable){
        Page<Lodging> lodgingPage = lodgingRepository.findByMemId(id, pageable);
        System.out.println(lodgingPage);
        List<LodgingListApiResponse> reserList = lodgingPage.stream()
                .map(host -> hostList(host))
                .collect(Collectors.toList());
        Pagination pagination = Pagination.builder()
                .totalPages(lodgingPage.getTotalPages())
                .totalElements(lodgingPage.getTotalElements())
                .currentPage(lodgingPage.getNumber())
                .currentElements(lodgingPage.getNumberOfElements())
                .build();
        return Header.OK(reserList, pagination);
    }
    public Header<LodgingTotalAPiResponse> hosTlist(Long id){
        LodgingTotalAPiResponse lodging = LodgingTotalAPiResponse.builder()
                .lodgingApiResponse(lodging1(lodgingRepository.findById(id).get()))
                .lodgingRoomApiResponse(lodgingroom1(lodgingRoomRepository.findById(id).get()))
                .lodgingDurationApiResponse(converts(lodgingDurationRepository.findById(id).get()))
                .lodgingBeforeApiResponse(converts(lodgingBeforeRepository.findById(id).get()))
                .lodgingIsresvApiResponse(converts(lodgingIsresvRepository.findById(id).get()))
                .lodgingLocationApiResponse(converts(lodgingLocationRepository.findById(id).get()))
                .lodgingLocationDetailApiResponse(converts(lodgingLocationDetailRepository.findById(id).get()))
                .lodgingPicturesApiResponse(lodgingPictures1(lodgingPicturesRepository.findById(id).get()))
                .lodgingPolicyApiResponse(converts(lodgingPolicyRepository.findById(id).get()))
                .lodgingPriceApiResponse(lodgingPrice1(lodgingPriceRepository.findById(id).get()))
                .lodgingRoleApiResponse(converts(lodgingRoleRepository.findById(id).get()))
                .lodgingRoomApiResponse(lodgingroom1(lodgingRoomRepository.findById(id).get()))
                .lodgingRulesApiResponse(converts(lodgingRulesRepository.findById(id).get()))
                .memberApiResponse(converts(memberRepository.findById((lodgingRepository.findById(id).get().getMemId())).get())).build();
        return Header.OK(lodging);
    }

    //---------------------------------------read end---------------------------------------//

    @Override
    public Header<LodgingApiResponse> update(Header<LodgingApiRequest> request) {
        return null;
    }

    @Override
    public Header<LodgingApiResponse> delete(Long id) {
        return null;
    }

    //---------------------------------------숙소등록 끝---------------------------------------//

    //---------------------------------------숙소 관리 시작---------------------------------------//

    private LodgingApiResponse responseListing(Lodging lodging){
        LodgingApiResponse lodgingApiResponse = LodgingApiResponse.builder()
                .lodgingId(lodging.getLodgingId())
                .memId((lodging.getMemId()))
                .lodgingLocation(lodgingLocationRepository.findById(lodging.getLodgingId()).get().getLocationState())
                .isresvStart(lodgingIsresvRepository.findById(lodging.getLodgingId()).get().getIsresvStart().toLocalDate())
                .isresvEnd(lodgingIsresvRepository.findById(lodging.getLodgingId()).get().getIsresvEnd().toLocalDate())
//리뷰 제작 후 재설계    .lodgingLocation(lodgingLocationRepository.findById(lodging.getLodgingId()).get().getLocationState())
                .lodgingExplain(lodging.getLodgingExplain())
                .priceNormal(lodgingPriceRepository.findById(lodging.getLodgingId()).get().getPriceNormal())
                .lodgingPic(lodgingPicturesRepository.findById(lodging.getLodgingId()).get().getLodgingPic())
                .lodgingPicurl(lodgingPicturesRepository.findById(lodging.getLodgingId()).get().getLodgingPicurl())
                .lodgingType2(lodgingRoomRepository.findById(lodging.getLodgingId()).get().getLodgingType2())
                .build();
        return lodgingApiResponse;
    }

//    페이지 데이터 값 전체 뿌려주기
    public Header<List<LodgingApiResponse>> list(Pageable pageable) {
        Page<Lodging> lodgingPage = lodgingRepository.findAll(pageable);
        System.out.println(lodgingPage);
        List<LodgingApiResponse> reserveApiResponseList = lodgingPage.stream()
                .map(re -> responseListing(re))
                .collect(Collectors.toList());
        Pagination pagination = Pagination.builder()
                .totalPages(lodgingPage.getTotalPages())
                .totalElements(lodgingPage.getTotalElements())
                .currentPage(lodgingPage.getNumber())
                .currentElements(lodgingPage.getNumberOfElements())
                .build();
        return Header.OK(reserveApiResponseList, pagination);
    }
//    public void aas(Pageable pageable) {
//        List<LodgingRoom> lodgingApiResponsePage = lodgingRoomRepository.findAll();
//    }

    public Header<LodgingTotalAPiResponse> roomPages(Long id){
        LodgingTotalAPiResponse lodging = LodgingTotalAPiResponse.builder()
                .lodgingApiResponse(lodging1(lodgingRepository.findById(id).get()))
                .lodgingRoomApiResponse(lodgingroom1(lodgingRoomRepository.findById(id).get()))
                .lodgingDurationApiResponse(converts(lodgingDurationRepository.findById(id).get()))
                .lodgingBeforeApiResponse(converts(lodgingBeforeRepository.findById(id).get()))
                .lodgingIsresvApiResponse(converts(lodgingIsresvRepository.findById(id).get()))
                .lodgingLocationApiResponse(converts(lodgingLocationRepository.findById(id).get()))
                .lodgingLocationDetailApiResponse(converts(lodgingLocationDetailRepository.findById(id).get()))
                .lodgingPicturesApiResponse(lodgingPictures1(lodgingPicturesRepository.findById(id).get()))
                .lodgingPolicyApiResponse(converts(lodgingPolicyRepository.findById(id).get()))
                .lodgingPriceApiResponse(lodgingPrice1(lodgingPriceRepository.findById(id).get()))
                .lodgingRoleApiResponse(converts(lodgingRoleRepository.findById(id).get()))
                .lodgingRoomApiResponse(lodgingroom1(lodgingRoomRepository.findById(id).get()))
                .lodgingRulesApiResponse(converts(lodgingRulesRepository.findById(id).get()))
                .memberApiResponse(converts(memberRepository.findById((lodgingRepository.findById(id).get().getMemId())).get())).build();;
        return Header.OK(lodging);
    }
    public Long readmem(Long id) {
        return lodgingRepository.findByMemIdss(id);
    }

    public Long readmems(Long id) {
        return lodgingRepository.findByMemIds(id);
    }


//response 모음
private MemberApiResponse converts(Member member) {
    MemberApiResponse memberApiResponse = MemberApiResponse.builder()
            .memId(member.getMemId())
            .memKnd(member.getMemKnd())
            .memName(member.getMemName())
            .memFirstname(member.getMemFirstname())
            .memPw(member.getMemPw())
            .email(member.getEmail())
            .birth(member.getBirth())
            .memHpContr(member.getMemHpContr())
            .memHp(member.getMemHp())
            .isLogshare(member.getIsLogshare())
            .memPic(member.getMemPic())
            .memPicurl(member.getMemPicurl())
            .build();
    return memberApiResponse;
}

    //숙소 및 객실
    private LodgingRoomApiResponse lodgingroom1(LodgingRoom lodgingRoom){
        LodgingRoomApiResponse lodgingRoomApiResponse = LodgingRoomApiResponse.builder()
                .lodgingId(lodgingRoom.getLodgingId())
                .lodgingType1(lodgingRoom.getLodgingType1())
                .lodgingType2(lodgingRoom.getLodgingType2())
                .lodgingType3(lodgingRoom.getLodgingType3())
                .lodgingHigh(lodgingRoom.getLodgingHigh())
                .lodgingFloor(lodgingRoom.getLodgingFloor())
                .lodgingBeds(lodgingRoom.getLodgingBeds())
                .lodgingBedrooms(lodgingRoom.getLodgingBedrooms())
                .lodgingBathroom(lodgingRoom.getLodgingBathroom())
                .build();
        return lodgingRoomApiResponse;
    }
    //숙소 기본 정보
    private LodgingApiResponse lodging1(Lodging lodging){
        LodgingApiResponse lodgingApiResponse = LodgingApiResponse.builder()
                .lodgingId(lodging.getLodgingId())
                .lodgingTitle(lodging.getLodgingTitle())
                .lodgingExplain(lodging.getLodgingExplain())
                .lodgingGuests(lodging.getLodgingGuests())
                .lodgingCovi(lodging.getLodgingCovi())
                .lodgingHref(lodging.getLodgingHref())
                .lodgingStatus(lodging.getLodgingStatus())
                .memId(lodging.getMemId())
                .build();
        return lodgingApiResponse;
    }
    // 요금 및 예약 가능 조정일
    private LodgingPriceApiResponse lodgingPrice1(LodgingPrice lodgingPrice){
        LodgingPriceApiResponse lodgingPriceApiResponse = LodgingPriceApiResponse.builder()
                .lodgingId(lodgingPrice.getLodgingId())
                .priceNormal(lodgingPrice.getPriceNormal())
                .priceMin(lodgingPrice.getPriceMin())
                .priceMax(lodgingPrice.getPriceMax())
                .priceTo(lodgingPrice.getPriceTo())
                .priceClean(lodgingPrice.getPriceClean())
                .priceCleanShort(lodgingPrice.getPriceCleanShort())
                .pricePet(lodgingPrice.getPricePet())
                .priceExtra(lodgingPrice.getPriceExtra())
                .priceWeekend(lodgingPrice.getPriceWeekend())
                .build();
        return lodgingPriceApiResponse;
    }
    // 숙소사진
    private LodgingPicturesApiResponse lodgingPictures1(LodgingPictures lodgingPictures){
        LodgingPicturesApiResponse lodgingPicturesApiResponse = LodgingPicturesApiResponse.builder()
                .lodgingId(lodgingPictures.getLodgingId())
                .lodgingPic(lodgingPictures.getLodgingPic())
                .lodgingPicurl(lodgingPictures.getLodgingPicurl())
                .lodgingPic2(lodgingPictures.getLodgingPic2())
                .lodgingPicurl2(lodgingPictures.getLodgingPicurl2())
                .lodgingPic3(lodgingPictures.getLodgingPic3())
                .lodgingPicurl3(lodgingPictures.getLodgingPicurl3())
                .lodgingPic4(lodgingPictures.getLodgingPic4())
                .lodgingPicurl4(lodgingPictures.getLodgingPicurl4())
                .lodgingPic5(lodgingPictures.getLodgingPic())
                .lodgingPicurl5(lodgingPictures.getLodgingPicurl5())
                .build();
        return lodgingPicturesApiResponse;
    }
    // lodgingbefore
    private LodgingBeforeApiResponse converts(LodgingBefore lodgingBefore){
        LodgingBeforeApiResponse lodgingBeforeApiResponse = LodgingBeforeApiResponse.builder()
                .lodgingId(lodgingBefore.getLodgingId())
                .checkinStart(lodgingBefore.getCheckinStart())
                .checkinEnd(lodgingBefore.getCheckinEnd())
                .checkoutTime(lodgingBefore.getCheckoutTime())
                .communicateGuest1(lodgingBefore.getCommunicateGuest1())
                .communicateGuest2(lodgingBefore.getCommunicateGuest2())
                .communicateGuest3(lodgingBefore.getCommunicateGuest3())
                .communicateExplain(lodgingBefore.getCommunicateExplain())
                .build();
        return lodgingBeforeApiResponse;
    }
    // lodgingduration
    private LodgingDurationApiResponse converts(LodgingDuration lodgingDuration){
        LodgingDurationApiResponse lodgingDurationApiResponse = LodgingDurationApiResponse.builder()
                .lodgingId(lodgingDuration.getLodgingId())
                .durationMin(lodgingDuration.getDurationMin())
                .durationDaymin(lodgingDuration.getDurationDaymin())
                .durationMax(lodgingDuration.getDurationMax())
                .durationCustom(lodgingDuration.getDurationCustom())
                .durationCustommin(lodgingDuration.getDurationCustommin())
                .durationCustomdays(lodgingDuration.getDurationCustomdays())
                .build();
        return lodgingDurationApiResponse;
    }
    // lodgingIsresv
    private LodgingIsresvApiResponse converts(LodgingIsresv lodgingIsresv){
        LodgingIsresvApiResponse lodgingIsresvApiResponse = LodgingIsresvApiResponse.builder()
                .lodgingId(lodgingIsresv.getLodgingId())
                .isresvDueday(lodgingIsresv.getIsresvDueday())
                .isresvDuetime(lodgingIsresv.getIsresvDuetime())
                .isresvReady(lodgingIsresv.getIsresvReady())
                .isresvStart(lodgingIsresv.getIsresvStart())
                .isresvEnd(lodgingIsresv.getIsresvEnd())
                .isresvLimit(lodgingIsresv.getIsresvLimit())
                .build();
        return lodgingIsresvApiResponse;
    }
    //location
    private LodgingLocationApiResponse converts(LodgingLocation lodgingLocation){
        LodgingLocationApiResponse lodgingLocationApiResponse = LodgingLocationApiResponse.builder()
                .lodgingId(lodgingLocation.getLodgingId())
                .locationState(lodgingLocation.getLocationState())
                .locationCity(lodgingLocation.getLocationCity())
                .locationRoad(lodgingLocation.getLocationRoad())
                .locationDetail(lodgingLocation.getLocationDetail())
                .loactionExplain(lodgingLocation.getLoactionExplain())
                .locationPost(lodgingLocation.getLocationPost())
                .loactionTraffic(lodgingLocation.getLoactionTraffic())
                .loactionView(lodgingLocation.getLoactionView())
                .locationWay(lodgingLocation.getLocationWay())
                .locationManual(lodgingLocation.getLocationManual())
                .build();
        return lodgingLocationApiResponse;
    }
    //location detail
    private LodgingLocationDetailApiResponse converts(LodgingLocationDetail lodgingLocationDetail){
        LodgingLocationDetailApiResponse lodgingLocationDetailApiResponse = LodgingLocationDetailApiResponse.builder()
                .lodgingId(lodgingLocationDetail.getLodgingId())
                .checkSmartlock(lodgingLocationDetail.getCheckSmartlock())
                .checkDigitalock(lodgingLocationDetail.getCheckDigitalock())
                .checkKey(lodgingLocationDetail.getCheckKey())
                .checkReceptionist(lodgingLocationDetail.getCheckReceptionist())
                .checkHost(lodgingLocationDetail.getCheckHost())
                .checkExtra(lodgingLocationDetail.getCheckExtra())
                .checkExplain(lodgingLocationDetail.getCheckExplain())
                .build();
        return lodgingLocationDetailApiResponse;
    }
    //policy
    private LodgingPolicyApiResponse converts(LodgingPolicy lodgingPolicy){
        LodgingPolicyApiResponse lodgingPolicyApiResponse = LodgingPolicyApiResponse.builder()
                .lodgingId(lodgingPolicy.getLodgingId())
                .policyStanard(lodgingPolicy.getPolicyStanard())
                .policyLongstay(lodgingPolicy.getPolicyLongstay())
                .immediHow(lodgingPolicy.getImmediHow())
                .immediReqired(lodgingPolicy.getImmediReqired())
                .build();
        return lodgingPolicyApiResponse;
    }
    //role
    private LodgingRoleApiResponse converts(LodgingRole lodgingRole){
        LodgingRoleApiResponse lodgingRoleApiResponse = LodgingRoleApiResponse.builder()
                .lodgingId(lodgingRole.getLodgingId())
                .rolesRo(lodgingRole.getRolesRo())
                .build();
        return lodgingRoleApiResponse;
    }

    //rules
    private LodgingRulesApiResponse converts(LodgingRules lodgingRules){
        LodgingRulesApiResponse lodgingRulesApiResponse = LodgingRulesApiResponse.builder()
                .lodgingId(lodgingRules.getLodgingId())
                .rulesChild(lodgingRules.getRulesChild())
                .rulesInfant(lodgingRules.getRulesInfant())
                .rulesPet(lodgingRules.getRulesPet())
                .rulesSmoking(lodgingRules.getRulesSmoking())
                .rulesEvent(lodgingRules.getRulesEvent())
                .rulesExtra(lodgingRules.getRulesExtra())
                .build();
        return lodgingRulesApiResponse;
    }

    // 게스트를 위한 정보 08.18 수정
    private Header<LodgingBeforeApiResponse> lodgingBefore1(LodgingBefore lodgingBefore){
        LodgingBeforeApiResponse lodgingBeforeApiResponse = LodgingBeforeApiResponse.builder()
                .lodgingId(lodgingBefore.getLodgingId())
                .checkinStart(lodgingBefore.getCheckinStart())
                .checkinEnd(lodgingBefore.getCheckinEnd())
                .checkoutTime(lodgingBefore.getCheckoutTime())
                .communicateGuest1(lodgingBefore.getCommunicateGuest1())
                .communicateGuest2(lodgingBefore.getCommunicateGuest2())
                .communicateGuest3(lodgingBefore.getCommunicateGuest3())
                .communicateExplain(lodgingBefore.getCommunicateExplain())
                .build();
        return Header.OK(lodgingBeforeApiResponse);
    }

    // 숙소 이용규칙 08.18 수정
    private Header<LodgingRulesApiResponse> lodgingRules1(LodgingRules lodgingRules){
        LodgingRulesApiResponse lodgingRulesApiResponse = LodgingRulesApiResponse.builder()
                .lodgingId(lodgingRules.getLodgingId())
                .rulesChild(lodgingRules.getRulesChild())
                .rulesInfant(lodgingRules.getRulesInfant())
                .rulesPet(lodgingRules.getRulesPet())
                .rulesSmoking(lodgingRules.getRulesSmoking())
                .rulesEvent(lodgingRules.getRulesEvent())
                .rulesExtra(lodgingRules.getRulesExtra())
                .build();
        return Header.OK(lodgingRulesApiResponse);
    }


    // 게스트 필수 조건 08.18 수정

    private Header<LodgingRequiresApiResponse> lodgingRequires(LodgingRequires lodgingRequires){
        LodgingRequiresApiResponse lodgingRequiresApiResponse = LodgingRequiresApiResponse.builder()
                .lodgingId(lodgingRequires.getLodgingId())
                .requirePic(lodgingRequires.getRequirePic())
                .build();
        return Header.OK(lodgingRequiresApiResponse);
    }

    // 법률과 규정 08.18 수정
    private Header<LodgingRoleApiResponse> lodgingRole(LodgingRole lodgingRole){
        LodgingRoleApiResponse lodgingRoleApiResponse = LodgingRoleApiResponse.builder()
                .lodgingId(lodgingRole.getLodgingId())
                .rolesRo(lodgingRole.getRolesRo())
                .build();
        return Header.OK(lodgingRoleApiResponse);
    }

    // 법률과 규정 업데이트
    public Header<LodgingRoleApiResponse> lodging_role(Header<LodgingRoleApiRequest> request){
        LodgingRoleApiRequest lodgingRoleApiRequest  = request.getData();
        Optional<LodgingRole> lodgingRole = lodgingRoleRepository.findById(lodgingRoleApiRequest.getLodgingId());
        return lodgingRole.map(
                        lodgingRoles -> {
                            lodgingRoles.setRolesRo(lodgingRoleApiRequest.getRolesRo());
                            return lodgingRoles;
                        }).map(lodgingRoles -> lodgingRoleRepository.save(lodgingRoles)).map(lodgingRoles -> lodgingRole(lodgingRoles))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }


    // 정책 읽기 08.18 추가
    public Header<LodgingPolicyApiResponse> lodging_policy_1(Long id) {
        return lodgingPolicyRepository.findById(id).map(lodgingPolicy -> lodgingPolicy(lodgingPolicy)).orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    // 체크인 시작 종료 체크아웃 시간 (lodging_before) 읽기08.18 추가
    public Header<LodgingBeforeApiResponse> lodging_before_1(Long id) {
        return lodgingBeforeRepository.findById(id).map(lodgingBefore -> lodgingBefore1(lodgingBefore)).orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    // 게스트 필수 조건 읽기 08.18 추가
    public Header<LodgingRequiresApiResponse> lodging_requires_1(Long id) {
        return lodgingRequiresRepository.findById(id).map(lodgingRequires -> lodgingRequires(lodgingRequires)).orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    // 숙소 이용 규칙 읽기 08.18 추가
    public Header<LodgingRulesApiResponse> lodging_rules_1(Long id) {
        return lodgingRulesRepository.findById(id).map(lodgingRules -> lodgingRules(lodgingRules)).orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    // 법률과 규정 읽기 08.18 추가

    public Header<LodgingRoleApiResponse> lodging_role_1(Long id) {
        return lodgingRoleRepository.findById(id).map(lodgingRole -> lodgingRole(lodgingRole)).orElseGet(() -> Header.ERROR("데이터 없음"));
    }


    // 지역 설명 08.19
    public Header<LodgingLocationApiResponse> locationEx(Header<LodgingLocationApiRequest> request){
        LodgingLocationApiRequest lodgingLocationApiRequest  = request.getData();
        Optional<LodgingLocation> lodgingLocation = lodgingLocationRepository.findById(lodgingLocationApiRequest.getLodgingId());
        return lodgingLocation.map(
                        lodgingLocation1 -> {
                            lodgingLocation1.setLoactionExplain(lodgingLocationApiRequest.getLoactionExplain());
                            return lodgingLocation1;
                        }).map(lodgingLocation1 -> lodgingLocationRepository.save(lodgingLocation1)).map(lodgingLocation1 -> location(lodgingLocation1))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }


    // 숙소 유형 08.19
    public Header<LodgingRoomApiResponse> hostroomsss(Header<LodgingRoomApiRequest> request){
        LodgingRoomApiRequest lodgingRoomApiRequest  = request.getData();
        Optional<LodgingRoom> lodgingRoom = lodgingRoomRepository.findById(lodgingRoomApiRequest.getLodgingId());
        return lodgingRoom.map(
                        lodgingRooms -> {
                            lodgingRooms.setLodgingType1(lodgingRoomApiRequest.getLodgingType1());
                            lodgingRooms.setLodgingType2(lodgingRoomApiRequest.getLodgingType2());
                            lodgingRooms.setLodgingType3(lodgingRoomApiRequest.getLodgingType3());
                            lodgingRooms.setLodgingFloor(lodgingRoomApiRequest.getLodgingFloor());
                            lodgingRooms.setLodgingHigh(lodgingRoomApiRequest.getLodgingHigh());
                            return lodgingRooms;
                        }).map(lodgingRooms -> lodgingRoomRepository.save(lodgingRooms)).map(lodgingRooms -> lodgingroom(lodgingRooms))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }

}
