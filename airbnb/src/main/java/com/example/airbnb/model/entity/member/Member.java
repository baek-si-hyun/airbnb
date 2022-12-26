package com.example.airbnb.model.entity.member;

import com.example.airbnb.model.entity.lodging.Lodging;
import com.example.airbnb.model.entity.review.Review;
import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@SequenceGenerator(
        name="member_idx",
        sequenceName = "member_idx",
        initialValue = 1,
        allocationSize = 1
)
@Builder
@EntityListeners(AuditingEntityListener.class)
public class Member { // 이벤트 테이블
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "member_idx")
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