package com.example.airbnb.model.network.request.lodging;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LodgingLocationDetailApiRequest {
    private Long lodgingId;
    private String checkSmartlock;
    private String checkDigitalock;
    private String checkKey;
    private String checkReceptionist;
    private String checkHost;
    private String checkExtra;
    private String checkExplain;
}
