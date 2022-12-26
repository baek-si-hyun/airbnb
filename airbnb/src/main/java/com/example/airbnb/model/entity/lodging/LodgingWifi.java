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
public class LodgingWifi {
    @Id
    private Long lodgingId;

    @JsonIgnore
    @OneToOne(fetch = FetchType.LAZY, mappedBy="lodgingWifi")
    private Lodging lodging;
}
