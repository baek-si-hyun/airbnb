package com.example.airbnb.model.entity.review;

import com.example.airbnb.model.entity.lodging.LodgingBefore;
import com.example.airbnb.model.entity.member.Member;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@SequenceGenerator(
        name="review_idx",
        sequenceName = "review_idx",
        initialValue = 1,
        allocationSize = 1
)
@Builder
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "review_idx")
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
}
