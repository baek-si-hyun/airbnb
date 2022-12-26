package com.example.airbnb.model.network.response.reservation;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ReservationTotalResponse {
    private Long lodgingId;
    private String lodgingTitle;
    private int bedroom;
    private int bed;
    private int bathroom;
    private String lodgingState;
    private String lodgingCity;
    private String lodgingPic;
    private String lodgingPicurl;
    private int guest;
    private int price;
}
