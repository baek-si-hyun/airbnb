package com.example.airbnb.model.network.response.lodging;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LodgingListApiResponse {
    private Long lodgingId;
    private Long memId;
    private String lodgingTitle;
    private String lodgingPic;
    private String lodgingPicurl;
    private String lodgingStatus;
    private Integer lodgingBeds;
    private Integer lodgingBedrooms;
    private Integer lodgingBathroom;
    private String locationState;
    private String locationCity;
    private LocalDateTime lodgingDate;
}
