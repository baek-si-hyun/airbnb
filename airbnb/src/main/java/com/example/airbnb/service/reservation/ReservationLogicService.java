package com.example.airbnb.service.reservation;

import com.example.airbnb.ifs.CrudInterface;
import com.example.airbnb.model.entity.lodging.Lodging;
import com.example.airbnb.model.entity.lodging.LodgingLocation;
import com.example.airbnb.model.entity.reservation.Reservation;
import com.example.airbnb.model.network.Header;
import com.example.airbnb.model.network.Pagination;
import com.example.airbnb.model.network.request.member.MemberApiRequest;
import com.example.airbnb.model.network.response.lodging.LodgingListApiResponse;
import com.example.airbnb.model.network.response.member.MemberApiResponse;
import com.example.airbnb.model.network.response.reservation.ReservationResponse;
import com.example.airbnb.model.network.response.reservation.ReservationTotalResponse;
import com.example.airbnb.repository.lodging.LodgingLocationRepository;
import com.example.airbnb.repository.lodging.LodgingPicturesRepository;
import com.example.airbnb.repository.lodging.LodgingRepository;
import com.example.airbnb.repository.lodging.LodgingRoomRepository;
import com.example.airbnb.repository.member.MemberRepository;
import com.example.airbnb.repository.reservation.ReservationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
@RequiredArgsConstructor
public class ReservationLogicService implements CrudInterface<MemberApiRequest, MemberApiResponse> {

    @Autowired
    private ReservationRepository reservationRepository;
    @Autowired
    private MemberRepository memberRepository;
    @Autowired
    private LodgingRepository lodgingRepository;
    @Autowired
    private LodgingLocationRepository lodgingLocationRepository;
    @Autowired
    private LodgingPicturesRepository lodgingPicturesRepository;
    @Autowired
    private LodgingRoomRepository lodgingRoomRepository;



    @Override
    public Header<MemberApiResponse> create(Header<MemberApiRequest> request) {
        return null;
    }

    @Override
    public Header<MemberApiResponse> read(Long id) {
        return null;
    }

    @Override
    public Header<MemberApiResponse> update(Header<MemberApiRequest> request) {
        return null;
    }

    @Override
    public Header<MemberApiResponse> delete(Long id) {
        return null;
    }

    //????????? ??????
    public Header<List<ReservationResponse>> readDuring(Long memId, Pageable pageable){
        String dur = "?????????";
        Page<Reservation> reservationPage = reservationRepository.findDuring(memId,dur,pageable);

        List<ReservationResponse> reserList = reservationPage.stream()
                .map(host -> responDur(host))
                .collect(Collectors.toList());

        Pagination pagination = Pagination.builder()
                .totalPages(reservationPage.getTotalPages())
                .totalElements(reservationPage.getTotalElements())
                .currentPage(reservationPage.getNumber())
                .currentElements(reservationPage.getNumberOfElements())
                .build();
        return Header.OK(reserList, pagination);
    }

    //?????? ??????
    public Header<List<ReservationResponse>> readComplete(Long memId, Pageable pageable){
        String complete = "????????????";
        Page<Reservation> reservationPage = reservationRepository.findComplete(memId,complete,pageable);

        List<ReservationResponse> reserList = reservationPage.stream()
                .map(host -> responDur(host))
                .collect(Collectors.toList());

        Pagination pagination = Pagination.builder()
                .totalPages(reservationPage.getTotalPages())
                .totalElements(reservationPage.getTotalElements())
                .currentPage(reservationPage.getNumber())
                .currentElements(reservationPage.getNumberOfElements())
                .build();
        return Header.OK(reserList, pagination);
    }
    //????????? ??????
    public Header<List<ReservationResponse>> readCancel(Long memId, Pageable pageable){
        String cancel = "????????????";
        Page<Reservation> reservationPage = reservationRepository.findCancel(memId,cancel,pageable);

        List<ReservationResponse> reserList = reservationPage.stream()
                .map(host -> responDur(host))
                .collect(Collectors.toList());

        Pagination pagination = Pagination.builder()
                .totalPages(reservationPage.getTotalPages())
                .totalElements(reservationPage.getTotalElements())
                .currentPage(reservationPage.getNumber())
                .currentElements(reservationPage.getNumberOfElements())
                .build();
        return Header.OK(reserList, pagination);
    }
    //??????
    public Header<List<ReservationResponse>> readAll(Long memId, Pageable pageable){
        Page<Reservation> reservationPage = reservationRepository.findAlls(memId,pageable);

        List<ReservationResponse> reserList = reservationPage.stream()
                .map(host -> responDur(host))
                .collect(Collectors.toList());

        Pagination pagination = Pagination.builder()
                .totalPages(reservationPage.getTotalPages())
                .totalElements(reservationPage.getTotalElements())
                .currentPage(reservationPage.getNumber())
                .currentElements(reservationPage.getNumberOfElements())
                .build();
        return Header.OK(reserList, pagination);
    }



    //Travel
    public Header<List<ReservationTotalResponse>> readAllTravel(Long memId, Pageable pageable){
        String check = "????????????";
        Page<Reservation> reservationPage = reservationRepository.findAllsTravel(memId,check,pageable);

        List<ReservationTotalResponse> reserList = reservationPage.stream()
                .map(host -> responTot(host))
                .collect(Collectors.toList());

        Pagination pagination = Pagination.builder()
                .totalPages(reservationPage.getTotalPages())
                .totalElements(reservationPage.getTotalElements())
                .currentPage(reservationPage.getNumber())
                .currentElements(reservationPage.getNumberOfElements())
                .build();
        return Header.OK(reserList, pagination);
    }

    //?????? ?????? ??????
    public Header<ReservationResponse> cancel(@PathVariable Long resvId) {
        Optional<Reservation> reservationOption = reservationRepository.findByResvId(resvId);
        return reservationOption.map(
                        reservation -> {
                            reservation.setResvStatus("????????????");
                            return reservation;
                        }).map(reservation1 -> reservationRepository.save(reservation1)).map(reservation1 -> Header.OK(responDur(reservation1)))
                .orElseGet(
                        () -> Header.ERROR("????????? ??????")
                );
    }

    //?????? ?????? ??????
    public Header<ReservationResponse> complete(@PathVariable Long resvId) {
        Optional<Reservation> reservationOption = reservationRepository.findByResvId(resvId);
        return reservationOption.map(
                        reservation -> {
                            reservation.setResvStatus("????????????");
                            return reservation;
                        }).map(reservation1 -> reservationRepository.save(reservation1)).map(reservation1 -> Header.OK(responDur(reservation1)))
                .orElseGet(
                        () -> Header.ERROR("????????? ??????")
                );
    }


    //response
    public ReservationResponse responDur(Reservation reservation){
        ReservationResponse reservationResponse = ReservationResponse.builder()
                .resvId(reservation.getResvId())
                .resvCode(reservation.getResvCode())
                .resvStatus(reservation.getResvStatus())
                .resvPerson(reservation.getResvPerson())
                .memId(reservation.getMemId())
                .memName(memberRepository.findByMemId(reservation.getMemId()).getMemFirstname())
                .memName(memberRepository.findByMemId(reservation.getMemId()).getMemName())
                .lodgingId(reservation.getLodgingId())
                .resvStart(reservation.getResvStart())
                .resvEnd(reservation.getResvEnd())
                .lodgingMem(reservation.getLodgingMem())
                .createAt(reservation.getCreateAt())
                .price(reservation.getPrice()).build();
        return reservationResponse;
    }

    public ReservationTotalResponse responTot(Reservation reservation){
        ReservationTotalResponse reservationResponse = ReservationTotalResponse.builder()
                .lodgingId(reservation.getLodgingId())
                .price(reservation.getPrice())
                .guest(reservation.getResvPerson())
                .lodgingTitle(lodgingRepository.findById(reservation.getLodgingId()).get().getLodgingTitle())
                .lodgingState(lodgingLocationRepository.findById(reservation.getLodgingId()).get().getLocationState())
                .lodgingCity(lodgingLocationRepository.findById(reservation.getLodgingId()).get().getLocationCity())
                .lodgingPic(lodgingPicturesRepository.findById(reservation.getLodgingId()).get().getLodgingPic())
                .lodgingPicurl(lodgingPicturesRepository.findById(reservation.getLodgingId()).get().getLodgingPicurl())
                .bedroom(lodgingRoomRepository.findById(reservation.getLodgingId()).get().getLodgingBedrooms())
                .bed(lodgingRoomRepository.findById(reservation.getLodgingId()).get().getLodgingBeds())
                .bathroom(lodgingRoomRepository.findById(reservation.getLodgingId()).get().getLodgingBathroom()).build();
        return reservationResponse;
    }
}
