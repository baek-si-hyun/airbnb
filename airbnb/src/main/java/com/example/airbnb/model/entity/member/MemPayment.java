package com.example.airbnb.model.entity.member;

import com.example.airbnb.model.enumclass.Allowed;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
@EntityListeners(AuditingEntityListener.class)
public class MemPayment {
    @Id
    private Long memId;
    private Long paymentId;
    private Long paymentForId;
    @Enumerated(EnumType.STRING)
    private Allowed isDonate;
}
