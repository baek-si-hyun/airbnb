package com.example.airbnb.model.network.response.wishlist;

import com.example.airbnb.model.entity.lodging.LodgingPictures;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class WishlistApiResponse {
    private Long wishlistId;
    private Long memId;
    private LocalDateTime createAt;
    private LocalDateTime updateAt;
    private String wishlistTitle;
    private LodgingPictures lodgingPictures;
}
