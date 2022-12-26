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
public class LodgingIsresvApiResponse {
    private Long lodgingId;
    private String isresvDueday;
    private String isresvDuetime;
    private String isresvReady;
    private LocalDateTime isresvStart;
    private LocalDateTime isresvEnd;
    private Integer isresvLimit;
}
