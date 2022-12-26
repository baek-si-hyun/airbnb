package com.example.airbnb.repository.wishlist;

import com.example.airbnb.model.entity.wishlist.WishlistDetail;
import com.example.airbnb.model.network.response.wishlist.WishlistMainListResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface WishlistDetailRepository extends JpaRepository<WishlistDetail,  Long> {
    List<WishlistDetail> findByWishlistId(Long wishlistId);

    @Query(value = "SELECT * FROM wishlist_detail WHERE wishlist_id in " +
            " (SELECT wishlist_id FROM wishlist_detail GROUP BY wishlist_id HAVING COUNT(wishlist_id)=1) and mem_id = :memId",nativeQuery = true)
    List<WishlistDetail> findByMemIds(Long memId);

    @Query(value = "SELECT distinct d.lodgingId from WishlistDetail d where d.memId = :memId")
    List<Long> findByMemId(Long memId);
    Optional<WishlistDetail> findByMemIdAndLodgingId(Long memId, Long lodgingId);
}
