package com.example.airbnb.model.network.request.wishlist;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class WishlistApiRequest {
    private Long wishlistId;
    private Long memId;
    private LocalDateTime createAt;
    private LocalDateTime updateAt;
    private String wishlistTitle;
    private Long lodgingId;
}
