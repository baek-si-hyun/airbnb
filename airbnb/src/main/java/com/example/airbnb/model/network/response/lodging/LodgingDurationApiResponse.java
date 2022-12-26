package com.example.airbnb.model.network.response.lodging;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LodgingDurationApiResponse {
    private Long lodgingId;
    private Integer durationMin;
    private Integer durationDaymin;
    private Integer durationMax;
    private String durationCustom;
    private Integer durationCustommin;
    private Integer durationCustomdays;
}
