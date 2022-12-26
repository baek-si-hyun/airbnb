package com.example.airbnb.model.network.response.lodging;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LodgingApiResponse {
    private Long lodgingId;
    private String lodgingTitle;
    private String lodgingExplain;
    private Long lodgingGuests;
    private String lodgingCovi;
    private String lodgingHref;
    private String lodgingStatus;
    private LocalDateTime lodgingDate;
    private LocalDateTime lodgingUpdateDate;
    private Long memId;
    //박해찬 main 리스트 추가//
    private String lodgingLocation;
    private LocalDate isresvStart;
    private LocalDate isresvEnd;
    private String reviewTotal;
    private Integer priceNormal;
    private String lodgingPic;
    private String lodgingPicurl;
    private String lodgingType2;
    //박해찬 main 리스트 추가//
}
