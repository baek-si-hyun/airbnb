package com.example.airbnb.model.network.response.reservation;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ReservationResponse {
    private Long resvId;
    private String resvCode;
    private String resvStatus;
    private int resvPerson;
    private Long memId;
    private Long lodgingId;
    private Long lodgingMem;
    private LocalDate resvStart;
    private LocalDate resvEnd;
    private LocalDate createAt;
    private int price;
    private String memFirstName;
    private String memName;
}
