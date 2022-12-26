package com.example.airbnb.model.network.request.member;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MemInfoApiRequest {
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