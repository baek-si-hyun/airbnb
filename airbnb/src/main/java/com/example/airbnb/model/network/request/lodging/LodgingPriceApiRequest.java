package com.example.airbnb.model.network.request.lodging;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LodgingPriceApiRequest {
    private Long lodgingId;
    private Integer priceNormal;
    private Integer priceMin;
    private Integer priceMax;
    private String priceTo;
    private Integer priceClean;
    private Integer priceCleanShort;
    private Integer pricePet;
    private Integer priceExtra;
    private Integer priceWeekend;
}
