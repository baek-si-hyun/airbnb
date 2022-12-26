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
public class LodgingIsresvApiRequest {
    private Long lodgingId;
    private String isresvDueday;
    private String isresvDuetime;
    private String isresvReady;
    private LocalDateTime isresvStart;
    private LocalDateTime isresvEnd;
    private Integer isresvLimit;
}
