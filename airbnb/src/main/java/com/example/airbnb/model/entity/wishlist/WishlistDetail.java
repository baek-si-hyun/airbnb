package com.example.airbnb.model.entity.wishlist;

import com.example.airbnb.model.entity.lodging.Lodging;
import com.example.airbnb.model.entity.lodging.LodgingPictures;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
@SequenceGenerator(
        name="wishlist_detail_idx",
        sequenceName = "wishlist_detail_idx",
        initialValue = 1,
        allocationSize = 1
)
public class WishlistDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "wishlist_detail_idx")
    private Long wishlistDetailId;
    private Long wishlistId;
    private Long lodgingId;
    private Long memId;

}
