package com.example.airbnb.model.entity.lodging;

import com.example.airbnb.model.entity.member.Member;
import lombok.*;

import javax.persistence.*;
import java.awt.geom.Area;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@SequenceGenerator(
        name="lodging_seq",
        sequenceName = "lodging_seq",
        initialValue = 1,
        allocationSize = 1
)

//@EqualsAndHashCode(callSuper = false, exclude = {"lodgingBefore","lodgingDuration","lodgingIsresv","lodgingLocation","lodgingLocationDetail","lodgingPictures"
//,"lodgingPolicy","lodgingPrice","lodgingRequires","lodgingRole","lodgingRoom","lodgingRules","lodgingWifi"})
@ToString(exclude = {"lodgingBefore","lodgingDuration","lodgingIsresv","lodgingLocation","lodgingLocationDetail","lodgingPictures"
        ,"lodgingPolicy","lodgingPrice","lodgingRequires","lodgingRole","lodgingRoom","lodgingRules","lodgingWifi"})
@Builder
public class Lodging {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "lodging_seq")
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

    @OneToOne()
    @JoinColumn(name="lodgingId")
    private LodgingBefore lodgingBefore;

    @OneToOne()
    @JoinColumn(name="lodgingId")
    private LodgingDuration lodgingDuration;

    @OneToOne()
    @JoinColumn(name="lodgingId")
    private LodgingIsresv lodgingIsresv;

    @OneToOne()
    @JoinColumn(name="lodgingId")
    private LodgingLocation lodgingLocation;

    @OneToOne()
    @JoinColumn(name="lodgingId")
    private LodgingLocationDetail lodgingLocationDetail;

    @OneToOne()
    @JoinColumn(name="lodgingId")
    private LodgingPictures lodgingPictures;

    @OneToOne()
    @JoinColumn(name="lodgingId")
    private LodgingPolicy lodgingPolicy;

    @OneToOne()
    @JoinColumn(name="lodgingId")
    private LodgingPrice lodgingPrice;

    @OneToOne()
    @JoinColumn(name="lodgingId")
    private LodgingRequires lodgingRequires;

    @OneToOne()
    @JoinColumn(name="lodgingId")
    private LodgingRole lodgingRole;

    @OneToOne()
    @JoinColumn(name="lodgingId")
    private LodgingRoom lodgingRoom;

    @OneToOne()
    @JoinColumn(name="lodgingId")
    private LodgingRules lodgingRules;

    @OneToOne()
    @JoinColumn(name="lodgingId")
    private LodgingWifi lodgingWifi;

}
