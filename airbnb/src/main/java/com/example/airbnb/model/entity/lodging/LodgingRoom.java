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
public class LodgingRoom {
    @Id
    private Long lodgingId;
    private String lodgingType1;
    private String lodgingType2;
    private String lodgingType3;
    private String lodgingHigh;
    private String lodgingFloor;
    private Integer lodgingBeds;
    private Integer lodgingBedrooms;
    private Integer lodgingBathroom;

    @JsonIgnore
    @OneToOne(fetch = FetchType.LAZY, mappedBy="lodgingRoom")
    private Lodging lodging;

}
