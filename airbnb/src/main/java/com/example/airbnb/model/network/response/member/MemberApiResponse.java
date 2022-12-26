package com.example.airbnb.model.network.response.member;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MemberApiResponse {
    private Long memId;
    private String memKnd;
    private String memName;
    private String memFirstname;
    private String memPw;
    private String email;
    private String birth;
    private String memHpContr;
    private String memHp;
    private String confirmStatus;
    private String isLogshare;
    private LocalDateTime confirmAt;
    private LocalDateTime updateAt;
    private LocalDateTime outAt;
    private String memPic;
    private String memPicurl;
}
