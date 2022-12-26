package com.example.airbnb.repository.member;

import com.example.airbnb.model.entity.member.MemInfo;
import com.example.airbnb.model.entity.member.MemNotice;
import com.example.airbnb.model.entity.member.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MemNoticeRepository extends JpaRepository<MemNotice,  Long>{
    MemNotice findByMemId(Long id);
}

