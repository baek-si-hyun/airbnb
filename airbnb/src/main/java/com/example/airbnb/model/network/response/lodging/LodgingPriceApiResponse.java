package com.example.airbnb.model.network.response.lodging;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LodgingPriceApiResponse {
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
