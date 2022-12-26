package com.example.airbnb.model.network.response.review;

import com.example.airbnb.model.entity.member.Member;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ReviewApiResponse {
    private Long reviewId;
    private Long lodgingId;
    private Long memId;
    private int reviewComm;
    private int reviewLocation;
    private int reviewCheckin;
    private int reviewPricing;
    private int reviewClean;
    private double reviewTotal;
    private String reviewTitle;
    private String reviewContent;
    private LocalDateTime createAt;
    private LocalDateTime updateAt;
    private Member member;

}
