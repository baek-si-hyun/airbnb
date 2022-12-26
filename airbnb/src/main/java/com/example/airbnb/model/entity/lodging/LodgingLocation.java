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
public class LodgingLocation {
    @Id
    private Long lodgingId;
    private String locationState;
    private String locationCity;
    private String locationRoad;
    private String locationDetail;
    private String locationPost;
    private String loactionExplain;
    private String loactionTraffic;
    private String loactionView;
    private String locationWay;
    private String locationManual;

    @JsonIgnore
    @OneToOne(fetch = FetchType.LAZY, mappedBy="lodgingLocation")
    private Lodging lodging;
}
