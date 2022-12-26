package com.example.airbnb.model.network.request.lodging;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LodgingApiRequest {
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
}
