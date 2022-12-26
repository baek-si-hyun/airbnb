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
public class LodgingDuration {
    @Id
    private Long lodgingId;
    private Integer durationMin;
    private Integer durationDaymin;
    private Integer durationMax;
    private String durationCustom;
    private Integer durationCustommin;
    private Integer durationCustomdays;

    @JsonIgnore
    @OneToOne(fetch = FetchType.LAZY,mappedBy="lodgingDuration")
    private Lodging lodging;
}
