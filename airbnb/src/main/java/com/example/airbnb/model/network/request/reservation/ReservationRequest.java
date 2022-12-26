package com.example.airbnb.model.network.request.reservation;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ReservationRequest {
    private Long resvId;
    private String resvCode;
    private String resvStatus;
    private int resvPerson;
    private Long memId;
    private Long lodgingId;
    private LocalDate resvStart;
    private LocalDate resvEnd;
    private LocalDate createAt;
    private int price;
}
