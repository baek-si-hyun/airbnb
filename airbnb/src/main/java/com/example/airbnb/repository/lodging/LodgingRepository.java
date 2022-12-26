package com.example.airbnb.repository.lodging;

import com.example.airbnb.model.entity.lodging.Lodging;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LodgingRepository extends JpaRepository<Lodging, Long>{
    @Query(value = "select l.memId from Lodging l where l.lodgingId=:id")
    Long findByMemIds(Long id);
    Page<Lodging> findByMemId(Long id , Pageable Pageable);

    @Query(value = "select l.memId from Lodging l where l.memId=:id")
    Long findByMemIdss(Long id);
}
//