package com.example.airbnb.model.network.request.wishlist;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class WishlistDetailApiRequest {
    private Long wishlistId;
    private Long LodgingId;
}
