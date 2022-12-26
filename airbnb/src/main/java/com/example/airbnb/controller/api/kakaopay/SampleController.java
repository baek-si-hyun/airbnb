package com.example.airbnb.controller.api.kakaopay;

import com.example.airbnb.model.VO.KakaoPayApprovalVO;
import com.example.airbnb.model.entity.reservation.Reservation;
import com.example.airbnb.model.network.request.payment.KakaoPayRequest;
import com.example.airbnb.model.network.response.reservation.ReservationResponse;
import com.example.airbnb.repository.lodging.LodgingRepository;
import com.example.airbnb.repository.reservation.ReservationRepository;
import com.example.airbnb.service.kakaopay.KakaoPay;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.extern.java.Log;
import net.sf.jsqlparser.Model;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import java.awt.*;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Random;

@Log
@Controller
@RequiredArgsConstructor
public class SampleController {

    @Setter(onMethod_ = @Autowired)
    private KakaoPay kakaopay;

    private final ReservationRepository reservationRepository;
    private final LodgingRepository lodgingRepository;

    @GetMapping("/kakaoPay")
    public void kakaoPayGet() {
    }

    @PostMapping("/api/kakaopay")
    public String kakaoPay(@RequestParam(value = "memId") Long memId, @RequestParam(value = "lodgingId") Long lodgingId, @RequestParam(value = "isresvStart") String isresvStart,
                           @RequestParam(value = "isresvEnd") String isresvEnd, @RequestParam(value = "price") int price, @RequestParam(value = "product")String product,
                           @RequestParam(value = "guest")int guest){
        log.info("kakaoPay post............................................");

        String isresvStarts = ("20"+isresvStart).replace("/","-");
        String isresvEnds = ("20"+isresvEnd).replace("/","-");

        int leftLimit = 48; // numeral '0'
        int rightLimit = 122; // letter 'z'
        int targetStringLength = 10;
        Random random = new Random();
        String generatedString = random.ints(leftLimit, rightLimit + 1)
                .filter(i -> (i <= 57 || i >= 65) && (i <= 90 || i >= 97))
                .limit(targetStringLength)
                .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
                .toString();

        Reservation reservation = Reservation.builder()
                .resvCode(generatedString)
                .resvStatus("예약중")
                .resvPerson(guest)
                .memId(memId)
                .lodgingId(lodgingId)
                .resvStart(LocalDate.parse(isresvStarts, DateTimeFormatter.ISO_DATE))
                .resvEnd(LocalDate.parse(isresvEnds, DateTimeFormatter.ISO_DATE))
                .createAt(LocalDate.now())
                .price(price)
                .lodgingMem(lodgingRepository.findById(lodgingId).get().getMemId())
                .build();
        Reservation newReservation = reservationRepository.save(reservation);
        return "redirect:"+kakaopay.kakaoPayReady(memId,lodgingId,price,product);
    }

//    @GetMapping("pages/kakaoPaySuccess")
//    public ModelAndView kakaoPaySuccess(@RequestParam("pg_token") String pg_token) {
//        log.info("kakaoPaySuccess get............................................");
//        log.info("kakaoPaySuccess pg_token : " + pg_token);
//        return new ModelAndView("/pages/kakaosuccess").addObject("info", kakaopay.kakaoPayInfo(pg_token));
//    }
}
