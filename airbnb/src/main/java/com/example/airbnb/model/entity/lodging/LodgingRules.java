package com.example.airbnb.model.entity.lodging;

import com.example.airbnb.model.enumclass.Allowed;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@EntityListeners(AuditingEntityListener.class)
//@EqualsAndHashCode(callSuper = false, exclude = {"lodging"})
@ToString(exclude = {"lodging"})
public class LodgingRules {
    @Id
    private Long lodgingId;
    private String rulesChild;
    private String rulesInfant;
    private String rulesPet;
    private String rulesSmoking;
    private String rulesEvent;
    private String rulesExtra;

    @JsonIgnore
    @OneToOne(fetch = FetchType.LAZY, mappedBy="lodgingRules")
    private Lodging lodging;
}
