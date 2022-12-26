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
public class LodgingRequires {
    @Id
    private Long lodgingId;
    private String requirePic;

    @JsonIgnore
    @OneToOne(fetch = FetchType.LAZY, mappedBy="lodgingRequires")
    private Lodging lodging;
}
