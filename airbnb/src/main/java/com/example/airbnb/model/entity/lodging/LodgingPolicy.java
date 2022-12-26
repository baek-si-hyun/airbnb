package com.example.airbnb.model.entity.lodging;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
//@EqualsAndHashCode(callSuper = false, exclude = {"lodging"})
@ToString(exclude = {"lodging"})
public class LodgingPolicy {
    @Id
    private Long lodgingId;
    private String policyStanard;
    private String policyLongstay;
    private String immediHow;
    private String immediReqired;

    @JsonIgnore
    @OneToOne(fetch = FetchType.LAZY, mappedBy="lodgingPolicy")
    private Lodging lodging;
}
