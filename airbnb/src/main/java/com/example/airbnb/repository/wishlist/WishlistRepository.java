package com.example.airbnb.repository.wishlist;

import com.example.airbnb.model.entity.wishlist.Wishlist;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface WishlistRepository extends JpaRepository<Wishlist,  Long> {
    List<Wishlist> findByMemId(Long memId);
}
