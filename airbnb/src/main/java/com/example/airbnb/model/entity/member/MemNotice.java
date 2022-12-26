package com.example.airbnb.model.entity.member;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
public class MemNotice {
    @Id
    private Long memId;
    private String isCelebrate;
    private String isTrip;
    private String isTrend;
    private String isHostbenefit;
    private String isNews;
    private String isLocalrules;
    private String isIdea;
    private String isPlan;
    private String isProgram;
    private String isFeedback;
    private String isTriprules;
    private String isAccount;
    private String isLodging;
    private String isGuest;
    private String isHost;
    private String isAlarm;
    private String isMessage;
}
