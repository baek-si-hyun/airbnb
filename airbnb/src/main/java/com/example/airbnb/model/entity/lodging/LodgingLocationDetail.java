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
public class LodgingLocationDetail {
    @Id
    private Long lodgingId;
    private String checkSmartlock;
    private String checkDigitalock;
    private String checkKey;
    private String checkReceptionist;
    private String checkHost;
    private String checkExtra;
    private String checkExplain;

    @JsonIgnore
    @OneToOne(fetch = FetchType.LAZY, mappedBy="lodgingLocationDetail")
    private Lodging lodging;
}
