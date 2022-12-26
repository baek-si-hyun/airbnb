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
public class MemInfo {
    @Id
    private Long memId;
    private String memLocation;
    private String memLan;
    private String memComp;
    private String memGender;
    private String memBirth;
    private String memEmerHp;
    private Long paymentId;
    private String addressCont;
    private String addressState;
    private String addressCity;
    private String addressRoad;
    private String addressDetail;
    private String addressPost;
    private String memContent;
}
