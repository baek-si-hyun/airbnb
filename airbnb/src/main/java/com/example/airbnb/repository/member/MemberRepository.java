package com.example.airbnb.repository.member;

import com.example.airbnb.model.entity.member.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.swing.text.html.parser.Entity;
import java.util.Optional;

@Repository
public interface MemberRepository extends JpaRepository<Member,  Long> {
    //login select + from member where email =? and memPw =?
    Optional<Member> findByEmail(String email);
    //pwChange select * from member where id = ? and memPw =?
    Optional<Member> findByMemIdAndMemPw(Long id, String memPw);
    //pwChange select * from member where email = ? and memPw =?
    Optional<Member> findByEmailAndMemPw(String email, String memPw);
    Member findByMemId(Long id);
}
