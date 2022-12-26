package com.example.airbnb.model.network.response.lodging;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LodgingBeforeApiResponse {
    private Long lodgingId;
    private String checkinStart;
    private String checkinEnd;
    private String checkoutTime;
    private String communicateGuest1;
    private String communicateGuest2;
    private String communicateGuest3;
    private String communicateExplain;
}
