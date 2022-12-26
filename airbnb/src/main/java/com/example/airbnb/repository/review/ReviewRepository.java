package com.example.airbnb.repository.review;

import com.example.airbnb.model.entity.review.Review;
import com.example.airbnb.model.network.response.review.ReviewApiResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<Review,  Long> {
    List<Review> findByLodgingId(Long id);

    @Query( value = "select * from review where lodging_id = :id and review_content like %:content%",nativeQuery = true)
    List<Review> findToContent(@Param("id") Long id,@Param("content") String content);
}
