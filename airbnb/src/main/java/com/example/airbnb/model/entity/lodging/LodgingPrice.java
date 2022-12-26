package com.example.airbnb.model.entity.lodging;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
//@EqualsAndHashCode(callSuper = false, exclude = {"lodging"})
@ToString(exclude = {"lodging"})
public class LodgingPrice {
    @Id
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

    @JsonIgnore
    @OneToOne(fetch = FetchType.LAZY, mappedBy="lodgingPrice")
    private Lodging lodging;
}
