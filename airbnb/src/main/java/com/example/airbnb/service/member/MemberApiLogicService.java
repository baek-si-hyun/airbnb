package com.example.airbnb.service.member;
import com.example.airbnb.ifs.CrudInterface;
import com.example.airbnb.model.entity.member.*;
import com.example.airbnb.model.network.Header;
import com.example.airbnb.model.network.request.member.*;
import com.example.airbnb.model.network.response.member.*;
import com.example.airbnb.repository.member.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MemberApiLogicService implements CrudInterface<MemberApiRequest, MemberApiResponse> {
//    @Autowired
//    private JavaMailSender mailSender;

    private final MemberRepository memberRepository;
    private final MemGlobalRepository memGlobalRepository;
    private final MemInfoRepository memInfoRepository;
    private final MemNoticeRepository memNoticeRepository;
    private final MemPaymentRepository memPaymentRepository;
    private final MemSecurityRepository memSecurityRepository;

    SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
    Calendar c1 = Calendar.getInstance();
    String strToday = sdf.format(c1.getTime());
//------------------------------ 로그인 파트 --------------------------------//
public Header<MemberApiResponse> emailChecks(Header<LoginRequest> login){
        LoginRequest logs = login.getData();
        return memberRepository.findByEmail(logs.getEmail()).map(member -> response(member)).orElseGet(() -> Header.ERROR("데이터 없음"));
    }

//    // 이메일 찾는 서비스
//    public MailDTO emailFinder(String memberEmail){
//        String pw = memberRepository.findByEmail(memberEmail).get().getMemPw();
//        MailDTO dto = new MailDTO();
//        dto.setAddress(memberEmail);
//        dto.setTitle("AirBnb 비밀번호 찾기 안내 이메일 입니다.");
//        dto.setMessage("안녕하세요. AirBnb 비밀번호 안내 관련 이메일 입니다." + " 회원님의 비밀번호는 "
//                + pw + " 입니다." + "로그인 후에 비밀번호를 변경을 해주세요");
//        return dto;
//    }
//
//    // 메일보내기
//
//    public void mailSend(MailDTO mailDTO) {
//        System.out.println("전송 완료!");
//        SimpleMailMessage message = new SimpleMailMessage();
//        message.setTo(mailDTO.getAddress());
//        message.setSubject(mailDTO.getTitle());
//        message.setText(mailDTO.getMessage());
//        message.setFrom("gocks4578@naver.com");
//        message.setReplyTo("gocks4578@naver.com");
//        System.out.println("message"+message);
//        mailSender.send(message);
//    }

    public Header<MemberApiResponse> pwChecks(Header<LoginRequest> login){
        LoginRequest logs = login.getData();
        return memberRepository.findByEmailAndMemPw(logs.getEmail(),logs.getMemPw()).map(member -> response(member)).orElseGet(() -> Header.ERROR("데이터 없음"));
    }

//------------------------------- response 함수 ----------------------------//
    private Header<MemberApiResponse> response(Member member) {
        MemberApiResponse memberApiResponse = MemberApiResponse.builder()
                .memId(member.getMemId())
                .memKnd("guest")
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
        return Header.OK(memberApiResponse);
    }

    private Header<MemInfoApiResponse> responseMemInfo(MemInfo memInfo) {
        MemInfoApiResponse memInfoApiResponse = MemInfoApiResponse.builder()
                .memId(memInfo.getMemId())
                .memLocation(memInfo.getMemLocation())
                .memLan(memInfo.getMemLan())
                .memComp(memInfo.getMemComp())
                .memGender(memInfo.getMemGender())
                .memBirth(memInfo.getMemBirth())
                .memEmerHp(memInfo.getMemEmerHp())
                .paymentId(memInfo.getPaymentId())
                .addressCont(memInfo.getAddressCont())
                .addressState(memInfo.getAddressState())
                .addressCity(memInfo.getAddressCity())
                .addressRoad(memInfo.getAddressRoad())
                .addressDetail(memInfo.getAddressDetail())
                .addressPost(memInfo.getAddressPost())
                .memContent(memInfo.getMemContent())
                .build();
        return Header.OK(memInfoApiResponse);
    }

    private Header<MemNoticeApiResponse> responseMemNotice(MemNotice memNotice) {
        MemNoticeApiResponse memNoticeApiResponse = MemNoticeApiResponse.builder()
                .memId(memNotice.getMemId())
                .isCelebrate(memNotice.getIsCelebrate().split(" "))
                .isTrip(memNotice.getIsTrip().split(" "))
                .isTrend(memNotice.getIsTrend().split(" "))
                .isHostbenefit(memNotice.getIsHostbenefit().split(" "))
                .isNews(memNotice.getIsNews().split(" "))
                .isLocalrules(memNotice.getIsLocalrules().split(" "))
                .isIdea(memNotice.getIsIdea().split(" "))
                .isPlan(memNotice.getIsPlan().split(" "))
                .isProgram(memNotice.getIsProgram().split(" "))
                .isFeedback(memNotice.getIsFeedback().split(" "))
                .isTriprules(memNotice.getIsTriprules().split(" "))
                .isAccount(memNotice.getIsAccount().split(" "))
                .isLodging(memNotice.getIsLodging().split(" "))
                .isGuest(memNotice.getIsGuest().split(" "))
                .isHost(memNotice.getIsHost().split(" "))
                .isAlarm(memNotice.getIsAlarm().split(" "))
                .isMessage(memNotice.getIsMessage().split(" "))
                .build();
        System.out.println(memNoticeApiResponse);
        return Header.OK(memNoticeApiResponse);
    }

    private Header<MemPaymentApiResponse> responsePayment(MemPayment memPayment) {
        MemPaymentApiResponse memPaymentApiResponse = MemPaymentApiResponse.builder()
                .memId(memPayment.getMemId())
                .paymentId(memPayment.getPaymentId())
                .paymentForId(memPayment.getPaymentForId())
                .isDonate(memPayment.getIsDonate())
                .build();
        return Header.OK(memPaymentApiResponse);
    }

    private Header<MemSecurityApiResponse> responseSecurity(MemSecurity memSecurity) {
        MemSecurityApiResponse memSecurityApiResponse = MemSecurityApiResponse.builder()
                .memId(memSecurity.getMemId())
                .isLogshare(memSecurity.getIsLogshare())
                .isDatashare(memSecurity.getIsDatashare())
                .build();
        return Header.OK(memSecurityApiResponse);
    }

    private Header<MemGlobalApiResponse> responseGlobal(MemGlobal memGlobal) {
        MemGlobalApiResponse memGlobalApiResponse = MemGlobalApiResponse.builder()
                .memId(memGlobal.getMemId())
                .preferLan(memGlobal.getPreferLan())
                .preferCurr(memGlobal.getPreferCurr())
                .onTimes(memGlobal.getOnTimes())
                .build();
        return Header.OK(memGlobalApiResponse);
    }
  //------------------------------------ #end response 함수 ----------------------------//

    @Override
    public Header<MemberApiResponse> create(Header<MemberApiRequest> request) {
        MemberApiRequest memberApiRequest = request.getData();
        Member member = Member.builder()
                .memKnd("guest")
                .memName(memberApiRequest.getMemName())
                .memFirstname(memberApiRequest.getMemFirstname())
                .birth(memberApiRequest.getBirth())
                .email(memberApiRequest.getEmail())
                .memPw(memberApiRequest.getMemPw())
                .isLogshare(memberApiRequest.getIsLogshare())
                .build();
        Member newUsers = memberRepository.save(member);
        MemGlobal memGlobal = MemGlobal.builder().memId(newUsers.getMemId()).build();
        MemInfo memInfo = MemInfo.builder().memId(newUsers.getMemId()).build();
        MemNotice memNotice = MemNotice.builder().memId(newUsers.getMemId()).build();
        MemPayment memPayment = MemPayment.builder().memId(newUsers.getMemId()).build();
        MemSecurity memSecurity = MemSecurity.builder().memId(newUsers.getMemId()).build();
        memGlobalRepository.save(memGlobal);
        memInfoRepository.save(memInfo);
        memNoticeRepository.save(memNotice);
        memPaymentRepository.save(memPayment);
        memSecurityRepository.save(memSecurity);
        return response(newUsers);
    }

    //맴버값
    @Override
    public Header<MemberApiResponse> read(Long id) {
        return memberRepository.findById(id).map(member -> response(member)).orElseGet(() -> Header.ERROR("데이터 없음"));
    }


    public Header<MemberApiResponse> read(String email) {
        return memberRepository.findByEmail(email).map(users -> response(users))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    public Header<MemberApiResponse> read(String email, String memPw) {
        return memberRepository.findByEmailAndMemPw(email,memPw).map(users -> response(users))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    //맴버 info값
    public Header<MemInfoApiResponse> reads(Long id) {
        return memInfoRepository.findById(id).map(memInfo -> responseMemInfo(memInfo)).orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    //맴버 notice값
    public Header<MemNoticeApiResponse> readss(Long id) {
        return memNoticeRepository.findById(id).map(memNotice -> responseMemNotice(memNotice)).orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    //맴버 privacy값
    public Header<MemSecurityApiResponse> readsa(Long id) {
        return memSecurityRepository.findById(id).map(memSecurity -> responseSecurity(memSecurity)).orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    //맴버 global값
    public Header<MemGlobalApiResponse> readaa(Long id) {
        return memGlobalRepository.findById(id).map(memGlobal -> responseGlobal(memGlobal)).orElseGet(() -> Header.ERROR("데이터 없음"));
    }
    // -------------------------- 계정 프로필 업데이트 -----------------------------------------//
    @Override
    public Header<MemberApiResponse> update(Header<MemberApiRequest> request) {
        return null;
    }
    public Header<MemInfoApiResponse> updateProfile(Header<MemInfoApiRequest> request) {
        MemInfoApiRequest memInfoApiRequest = request.getData();
        Optional<MemInfo> memInfo = memInfoRepository.findById(memInfoApiRequest.getMemId());
        System.out.println(memInfo);
        return memInfo.map(
                        member1 -> {
                            member1.setMemContent(memInfoApiRequest.getMemContent());
                            member1.setMemComp(memInfoApiRequest.getMemComp());
                            member1.setMemLan(memInfoApiRequest.getMemLan());
                            member1.setMemLocation(memInfoApiRequest.getMemLocation());
                            return member1;
                        }).map(member1 -> memInfoRepository.save(member1)).map(member1 -> responseMemInfo(member1))
                .orElseGet(
                        () -> Header.ERROR("데이터 없음")
                );
    }
    // -------------------------- #end 계정 프로필 업데이트 -----------------------------------------//
    // -------------------------- 계정 개인정보 업데이트 -----------------------------------------//
    //이름 변경
    public Header<MemberApiResponse> updateName(Header<MemberApiRequest> request) {
        MemberApiRequest memberApiRequest = request.getData();
        Optional<Member> member = memberRepository.findById(memberApiRequest.getMemId());
        System.out.println(member);
        return member.map(
                        member1 -> {
                            member1.setMemFirstname(memberApiRequest.getMemFirstname());
                            member1.setMemName(memberApiRequest.getMemName());
                            return member1;
                        }).map(member1 -> memberRepository.save(member1)).map(member1 -> response(member1))
                .orElseGet(
                        () -> Header.ERROR("데이터 없음")
                );
    }

    //성별 변경
    public Header<MemInfoApiResponse> updateGender(Header<MemInfoApiRequest> request) {
        MemInfoApiRequest memInfoApiRequest = request.getData();
        Optional<MemInfo> memInfo = memInfoRepository.findById(memInfoApiRequest.getMemId());
        return memInfo.map(
                        member1 -> {
                            member1.setMemGender(memInfoApiRequest.getMemGender());
                            return member1;
                        }).map(member1 -> memInfoRepository.save(member1)).map(member1 -> responseMemInfo(member1))
                .orElseGet(
                        () -> Header.ERROR("데이터 없음")
                );
    }

    //이메일 변경
    public Header<MemberApiResponse> updateEmail(Header<MemberApiRequest> request) {
        MemberApiRequest memberApiRequest = request.getData();
        Optional<Member> member = memberRepository.findById(memberApiRequest.getMemId());
        return member.map(
                        member1 -> {
                            member1.setEmail(memberApiRequest.getEmail());
                            return member1;
                        }).map(member1 -> memberRepository.save(member1)).map(member1 -> response(member1))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    //주소 변경
    public Header<MemInfoApiResponse> updateAddress(Header<MemInfoApiRequest> request) {
        MemInfoApiRequest memInfoApiRequest = request.getData();
        Optional<MemInfo> memInfo = memInfoRepository.findById(memInfoApiRequest.getMemId());
        return memInfo.map(
                        member1 -> {
                            member1.setAddressCont(memInfoApiRequest.getAddressCont());
                            member1.setAddressState(memInfoApiRequest.getAddressState());
                            member1.setAddressCity(memInfoApiRequest.getAddressCity());
                            member1.setAddressRoad(memInfoApiRequest.getAddressRoad());
                            member1.setAddressDetail(memInfoApiRequest.getAddressDetail());
                            member1.setAddressPost(memInfoApiRequest.getAddressPost());
                            return member1;
                        }).map(member1 -> memInfoRepository.save(member1)).map(member1 -> responseMemInfo(member1))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    //이름 변경
    public Header<MemberApiResponse> updateHp(Header<MemberApiRequest> request) {
        MemberApiRequest memberApiRequest = request.getData();
        Optional<Member> member = memberRepository.findById(memberApiRequest.getMemId());
        return member.map(
                        member1 -> {
                            member1.setMemHp(memberApiRequest.getMemHp());
                            member1.setMemHpContr(memberApiRequest.getMemHpContr());
                            return member1;
                        }).map(member1 -> memberRepository.save(member1)).map(member1 -> response(member1))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }
    // -------------------------- #end 계정 개인정보 업데이트 -----------------------------------------//

    // -------------------------- 로그인 및 보안 -----------------------------------------//
    //비밀번호 변경
    public void updatePw(Header<MemberApiRequest> request) {
        MemberApiRequest memberApiRequest = request.getData();
        Optional<Member> member = memberRepository.findByMemIdAndMemPw(memberApiRequest.getMemId(), memberApiRequest.getMemPw());
        member.map(
                        member1 -> {
                            member1.setMemPw(memberApiRequest.getNewpassword());
                            return member1;
                        }).map(member1 -> memberRepository.save(member1));
    }
    // -------------------------- #end 로그인 및 보안 -----------------------------------------//
    // -------------------------- 계정 알림 -----------------------------------------//
    public Header<MemNoticeApiResponse> updateAlarm(Header<MemNoticeApiRequest> request) {
        MemNoticeApiRequest memNoticeApiRequest = request.getData();
        Optional<MemNotice> memNotice = memNoticeRepository.findById(memNoticeApiRequest.getMemId());
        return memNotice.map(
                        member1 -> {
                                member1.setMemId(memNoticeApiRequest.getMemId());
                                member1.setIsCelebrate(memNoticeApiRequest.getIsCelebrate());
                                member1.setIsTrip(memNoticeApiRequest.getIsTrip());
                                member1.setIsTrend(memNoticeApiRequest.getIsTrend());
                                member1.setIsHostbenefit(memNoticeApiRequest.getIsHostbenefit());
                                member1.setIsNews(memNoticeApiRequest.getIsNews());
                                member1.setIsLocalrules(memNoticeApiRequest.getIsLocalrules());
                                member1.setIsIdea(memNoticeApiRequest.getIsIdea());
                                member1.setIsPlan(memNoticeApiRequest.getIsPlan());
                                member1.setIsProgram(memNoticeApiRequest.getIsProgram());
                                member1.setIsFeedback(memNoticeApiRequest.getIsFeedback());
                                member1.setIsTriprules(memNoticeApiRequest.getIsTriprules());
                                member1.setIsAccount(memNoticeApiRequest.getIsAccount());
                                member1.setIsLodging(memNoticeApiRequest.getIsLodging());
                                member1.setIsGuest(memNoticeApiRequest.getIsGuest());
                                member1.setIsHost(memNoticeApiRequest.getIsHost());
                                member1.setIsAlarm(memNoticeApiRequest.getIsAlarm());
                                member1.setIsMessage(memNoticeApiRequest.getIsMessage());
                            return member1;
                        }).map(member1 -> memNoticeRepository.save(member1)).map(member1 -> responseMemNotice(member1))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }
    // -------------------------- #end 계정 알림 -----------------------------------------//
    // -------------------------- 계정 알림 -----------------------------------------//
    public Header<MemPaymentApiResponse> updateDonate(Header<MemPaymentApiRequest> request) {
        MemPaymentApiRequest memPaymentApiRequest = request.getData();
        Optional<MemPayment> memPayment = memPaymentRepository.findById(memPaymentApiRequest.getMemId());
        return memPayment.map(
                        member1 -> {
                            member1.setMemId(memPaymentApiRequest.getMemId());
                            member1.setPaymentForId(memPaymentApiRequest.getPaymentForId());
                            member1.setPaymentId(memPaymentApiRequest.getPaymentId());
                            member1.setIsDonate(memPaymentApiRequest.getIsDonate());
                            return member1;
                        }).map(member1 -> memPaymentRepository.save(member1)).map(member1 -> responsePayment(member1))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }
    // -------------------------- #end 계정 알림 -----------------------------------------//
    // -------------------------- 계정 활동 공유-----------------------------------------//
    public Header<MemSecurityApiResponse> updateShare(Header<MemSecurityApiRequest> request) {
        MemSecurityApiRequest memSecurityApiRequest = request.getData();
        Optional<MemSecurity> memSecurity = memSecurityRepository.findById(memSecurityApiRequest.getMemId());
        return memSecurity.map(
                        member1 -> {
                            member1.setMemId(memSecurityApiRequest.getMemId());
                            member1.setIsLogshare(memSecurityApiRequest.getIsLogshare());
                            member1.setIsDatashare(memSecurityApiRequest.getIsDatashare());
                            return member1;
                        }).map(member1 -> memSecurityRepository.save(member1)).map(member1 -> responseSecurity(member1))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }
    // -------------------------- #end 계정 활동 공유-----------------------------------------//
    // -------------------------- 계정 글로벌 환경 설정-----------------------------------------//
    // 선호하는 언어
    public Header<MemGlobalApiResponse> updatepreferLan(Header<MemGlobalApiRequest> request) {
        MemGlobalApiRequest memGlobalApiRequest = request.getData();
        Optional<MemGlobal> memGlobal = memGlobalRepository.findById(memGlobalApiRequest.getMemId());
        return memGlobal.map(
                        member1 -> {
                            member1.setMemId(memGlobalApiRequest.getMemId());
                            member1.setPreferLan(memGlobalApiRequest.getPreferLan());
                            return member1;
                        }).map(member1 -> memGlobalRepository.save(member1)).map(member1 -> responseGlobal(member1))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }
    // 선호하는 통화
    public Header<MemGlobalApiResponse> updatepreferCurr(Header<MemGlobalApiRequest> request) {
        MemGlobalApiRequest memGlobalApiRequest = request.getData();
        Optional<MemGlobal> memGlobal = memGlobalRepository.findById(memGlobalApiRequest.getMemId());
        return memGlobal.map(
                        member1 -> {
                            member1.setMemId(memGlobalApiRequest.getMemId());
                            member1.setPreferCurr(memGlobalApiRequest.getPreferCurr());
                            return member1;
                        }).map(member1 -> memGlobalRepository.save(member1)).map(member1 -> responseGlobal(member1))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }
    // 시간대
    public Header<MemGlobalApiResponse> updateonTimes(Header<MemGlobalApiRequest> request) {
        MemGlobalApiRequest memGlobalApiRequest = request.getData();
        Optional<MemGlobal> memGlobal = memGlobalRepository.findById(memGlobalApiRequest.getMemId());
        return memGlobal.map(
                        member1 -> {
                            member1.setMemId(memGlobalApiRequest.getMemId());
                            member1.setOnTimes(memGlobalApiRequest.getOnTimes());
                            return member1;
                        }).map(member1 -> memGlobalRepository.save(member1)).map(member1 -> responseGlobal(member1))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }
    // -------------------------- #end 계정 글로벌 환경 설정-----------------------------------------//
    // -------------------------- 계정 삭제 (임시) 숙소등록 완료시 재작성-----------------------------------------//
    public Header deleteAll(Long id) {
        Member member = memberRepository.findByMemId(id);
        MemGlobal memGlobal = memGlobalRepository.findByMemId(id);
        MemInfo memInfo = memInfoRepository.findByMemId(id);
        MemNotice memNotice = memNoticeRepository.findByMemId(id);
        MemPayment memPayment = memPaymentRepository.findByMemId(id);
        MemSecurity memSecurity = memSecurityRepository.findByMemId(id);
        memberRepository.delete(member);
        memGlobalRepository.delete(memGlobal);
        memInfoRepository.delete(memInfo);
        memNoticeRepository.delete(memNotice);
        memPaymentRepository.delete(memPayment);
        memSecurityRepository.delete(memSecurity);
        return Header.OK();
        }
    // -------------------------- #end 계정 삭제 -----------------------------------------//
    @Override
    public Header<MemberApiResponse> delete(Long id) {
        return null;
    }
    // -------------------------- 멤머 종류 변경 게스트 > 호스트 -----------------------------------------//
    public void transform(Long id) {
        Optional<Member> member = memberRepository.findById(id);
        member.map(
                member1 -> {
                    member1.setMemKnd("host");
                    return member1;
                }).map(member1 -> memberRepository.save(member1));
    }
}

