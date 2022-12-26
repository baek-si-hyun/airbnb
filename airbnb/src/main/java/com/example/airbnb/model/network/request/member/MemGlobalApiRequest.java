package com.example.airbnb.model.network.request.member;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MemGlobalApiRequest {
    @Id
    private Long memId;
    private String preferLan;
    private String preferCurr;
    private String onTimes;
}
