package com.example.airbnb.model.network.response.lodging;

import com.example.airbnb.model.enumclass.Allowed;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LodgingRulesApiResponse {
    private Long lodgingId;
    private String rulesChild;
    private String rulesInfant;
    private String rulesPet;
    private String rulesSmoking;
    private String rulesEvent;
    private String rulesExtra;
}
