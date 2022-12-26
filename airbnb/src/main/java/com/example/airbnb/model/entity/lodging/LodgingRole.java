package com.example.airbnb.model.entity.lodging;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
//@EqualsAndHashCode(callSuper = false, exclude = {"lodging"})
@ToString(exclude = {"lodging"})
public class LodgingRole {
    @Id
    private Long lodgingId;
    private String rolesRo;

    @JsonIgnore
    @OneToOne(fetch = FetchType.LAZY, mappedBy="lodgingRole")
    private Lodging lodging;
}
