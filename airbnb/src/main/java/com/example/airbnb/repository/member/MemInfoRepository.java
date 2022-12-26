package com.example.airbnb.repository.member;

import com.example.airbnb.model.entity.member.MemGlobal;
import com.example.airbnb.model.entity.member.MemInfo;
import com.example.airbnb.model.entity.member.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface MemInfoRepository  extends JpaRepository<MemInfo,  Long> {
    MemInfo findByMemId(Long id);
}
