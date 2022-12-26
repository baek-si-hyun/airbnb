package com.example.airbnb.model.network.response.wishlist;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class WishlistDetailApiResponse {
    private Long wishlistId;
    private Long LodgingId;
}
