package com.example.airbnb.model.network.request.member;

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
@Builder
@EntityListeners(AuditingEntityListener.class)
public class MemSecurityApiRequest {
    @Id
    private Long memId;
    @Enumerated(EnumType.STRING)
    private Allowed isLogshare;
    @Enumerated(EnumType.STRING)
    private Allowed isDatashare;
}
