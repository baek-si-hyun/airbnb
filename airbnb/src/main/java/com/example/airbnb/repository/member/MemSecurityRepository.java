package com.example.airbnb.repository.member;

import com.example.airbnb.model.entity.member.MemPayment;
import com.example.airbnb.model.entity.member.MemSecurity;
import com.example.airbnb.model.entity.member.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemSecurityRepository extends JpaRepository<MemSecurity,  Long> {
    MemSecurity findByMemId(Long id);
}
