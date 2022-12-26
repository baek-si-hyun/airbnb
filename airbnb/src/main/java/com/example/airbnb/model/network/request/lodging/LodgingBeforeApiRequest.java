package com.example.airbnb.model.network.request.lodging;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LodgingBeforeApiRequest {
    private Long lodgingId;
    private String checkinStart;
    private String checkinEnd;
    private String checkoutTime;
    private String communicateGuest1;
    private String communicateGuest2;
    private String communicateGuest3;
    private String communicateExplain;
}
