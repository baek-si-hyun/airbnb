package com.example.airbnb.model.entity.reservation;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@SequenceGenerator(
        name="resv_idx",
        sequenceName = "resv_idx",
        initialValue = 1,
        allocationSize = 1
)
@Builder
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "resv_idx")
    private Long resvId;
    private String resvCode;
    private String resvStatus;
    private int resvPerson;
    private Long memId;
    private LocalDate resvStart;
    private LocalDate resvEnd;
    private LocalDate createAt;
    private int price;
    private Long lodgingId;
    private Long lodgingMem;
}
