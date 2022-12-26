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
public class LodgingPolicyApiResponse {
    private Long lodgingId;
    private String policyStanard;
    private String policyLongstay;
    private String immediHow;
    private String immediReqired;
}
