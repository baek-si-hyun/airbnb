package com.example.airbnb.model.network.response.lodging;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LodgingRoomApiResponse {
    private Long lodgingId;
    private String lodgingType1;
    private String lodgingType2;
    private String lodgingType3;
    private String lodgingHigh;
    private String lodgingFloor;
    private Integer lodgingBeds;
    private Integer lodgingBedrooms;
    private Integer lodgingBathroom;
}
