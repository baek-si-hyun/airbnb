package com.example.airbnb.model.network.request.lodging;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LodgingLocationApiRequest {
    private Long lodgingId;
    private String locationState;
    private String locationCity;
    private String locationRoad;
    private String locationDetail;
    private String locationPost;
    private String loactionExplain;
    private String loactionTraffic;
    private String loactionView;
    private String locationWay;
    private String locationManual;
}
