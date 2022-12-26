package com.example.airbnb.model.entity.wishlist;

import com.example.airbnb.model.entity.lodging.LodgingBefore;
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
public class Wishlist {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "review_idx")
    private Long wishlistId;
    private Long memId;
    private LocalDateTime createAt;
    private LocalDateTime updateAt;
    private String wishlistTitle;
}
