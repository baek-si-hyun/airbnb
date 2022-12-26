package com.example.airbnb.model.network.request.payment;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class KakaoPayRequest {
    private Long memId;
    private Long lodgingId;
    private LocalDateTime isresvStart;
    private LocalDateTime isresvEnd;
    private int price;
}
