package com.example.airbnb.controller.api.reservation;

import com.example.airbnb.ifs.CrudInterface;
import com.example.airbnb.model.network.Header;
import com.example.airbnb.model.network.request.member.MemberApiRequest;
import com.example.airbnb.model.network.request.reservation.ReservationRequest;
import com.example.airbnb.model.network.response.member.MemberApiResponse;
import com.example.airbnb.model.network.response.reservation.ReservationResponse;
import com.example.airbnb.model.network.response.reservation.ReservationTotalResponse;
import com.example.airbnb.service.reservation.ReservationLogicService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/resv")
@RequiredArgsConstructor
public class ReservationApiController implements CrudInterface<ReservationRequest, ReservationResponse> {

    private final ReservationLogicService reservationLogicService;

    @Override
    public Header<ReservationResponse> create(Header<ReservationRequest> request) {
        return null;
    }

    @Override
    public Header<ReservationResponse> read(Long id) {
        return null;
    }

    @Override
    public Header<ReservationResponse> update(Header<ReservationRequest> request) {
        return null;
    }

    @Override
    public Header<ReservationResponse> delete(Long id) {
        return null;
    }

    //예정된 여행
    @RequestMapping(method = RequestMethod.GET, path = "/during/{memId}") // during/memId
    public Header<List<ReservationResponse>> readDuring(@PathVariable Long memId , @PageableDefault(sort = {"resvId"}, direction = Sort.Direction.DESC) Pageable pageable) {
        return reservationLogicService.readDuring(memId,pageable);
    }

    //예약 완료
    @RequestMapping(method = RequestMethod.GET, path = "/complete/{memId}") // complete/memId
    public Header<List<ReservationResponse>> readComplete(@PathVariable Long memId , @PageableDefault(sort = {"resvId"}, direction = Sort.Direction.DESC) Pageable pageable) {
        return reservationLogicService.readComplete(memId,pageable);
    }

    //취소됨
    @RequestMapping(method = RequestMethod.GET, path = "/cancel/{memId}") // cancel/memId
    public Header<List<ReservationResponse>> readCancle(@PathVariable Long memId , @PageableDefault(sort = {"resvId"}, direction = Sort.Direction.DESC) Pageable pageable) {
        return reservationLogicService.readCancel(memId,pageable);
    }

    //모두
    @RequestMapping(method = RequestMethod.GET, path = "/all/{memId}")
    public Header<List<ReservationResponse>> readAll(@PathVariable Long memId ,@PageableDefault(sort = {"resvId"}, direction = Sort.Direction.DESC) Pageable pageable) {
        return reservationLogicService.readAll(memId,pageable);
    }

    //예정 취소 버튼
    @RequestMapping(method = RequestMethod.GET, path = "/durCancel/{resvId}")
    public Header<ReservationResponse> cancel(@PathVariable Long resvId) {
        return reservationLogicService.cancel(resvId);
    }

    //예정 확정 버튼
    @RequestMapping(method = RequestMethod.GET, path = "/durComplete/{resvId}")
    public Header<ReservationResponse> complete(@PathVariable Long resvId) {
        return reservationLogicService.complete(resvId);
    }

    @RequestMapping(method = RequestMethod.GET, path = "/allTravel/{memId}")
    public Header<List<ReservationTotalResponse>> readAllTravel(@PathVariable Long memId , @PageableDefault(sort = {"resvId"}, direction = Sort.Direction.DESC) Pageable pageable) {
        return reservationLogicService.readAllTravel(memId,pageable);
    }
}
