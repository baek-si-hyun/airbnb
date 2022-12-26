package com.example.airbnb.repository.member;

import com.example.airbnb.model.entity.member.MemNotice;
import com.example.airbnb.model.entity.member.MemPayment;
import com.example.airbnb.model.entity.member.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemPaymentRepository extends JpaRepository<MemPayment,  Long> {
    MemPayment findByMemId(Long id);
}
