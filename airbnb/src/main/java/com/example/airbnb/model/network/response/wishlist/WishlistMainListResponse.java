package com.example.airbnb.model.network.response.wishlist;

import com.example.airbnb.model.entity.lodging.LodgingPictures;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class WishlistMainListResponse {
    private String wishlistTitle;
    private LodgingPictures lodgingPictures;
    private Long wishListId;
}
