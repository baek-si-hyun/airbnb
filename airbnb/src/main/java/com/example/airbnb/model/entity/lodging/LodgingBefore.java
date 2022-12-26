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
public class LodgingBefore {
    @Id
    private Long lodgingId;
    private String checkinStart;
    private String checkinEnd;
    private String checkoutTime;
    private String communicateGuest1;
    private String communicateGuest2;
    private String communicateGuest3;
    private String communicateExplain;

    @JsonIgnore
    @OneToOne(fetch = FetchType.LAZY,mappedBy="lodgingBefore")
    private Lodging lodging;
}
