package com.example.airbnb.repository.reservation;

import com.example.airbnb.model.entity.member.Member;
import com.example.airbnb.model.entity.reservation.Reservation;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation,  Long> {

    @Query(value = "select r from Reservation r where r.resvStatus=:dur and r.lodgingMem=:memId")
    Page<Reservation> findDuring(Long memId, String dur ,Pageable pageable);

    @Query(value = "select r from Reservation r where r.resvStatus=:complete and r.lodgingMem=:memId")
    Page<Reservation> findComplete(Long memId, String complete, Pageable pageable);

    @Query(value = "select r from Reservation r where r.resvStatus=:cancel and r.lodgingMem=:memId")
    Page<Reservation> findCancel(Long memId, String cancel, Pageable pageable);

    @Query(value = "select r from Reservation r where r.lodgingMem=:memId")
    Page<Reservation> findAlls(Long memId, Pageable pageable);

    Optional<Reservation> findByResvId(Long resvId);
    @Query(value = "select r from Reservation r where r.resvStatus=:check and r.memId=:memId")
    Page<Reservation> findAllsTravel(Long memId, String check, Pageable pageable);
}
