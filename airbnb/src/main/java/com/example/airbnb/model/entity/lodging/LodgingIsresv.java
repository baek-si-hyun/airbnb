package com.example.airbnb.model.entity.lodging;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
//@EqualsAndHashCode(callSuper = false, exclude = {"lodging"})
@ToString(exclude = {"lodging"})
public class LodgingIsresv {
    @Id
    private Long lodgingId;
    private String isresvDueday;
    private String isresvDuetime;
    private String isresvReady;
    private LocalDateTime isresvStart;
    private LocalDateTime isresvEnd;
    private Integer isresvLimit;

    @JsonIgnore
    @OneToOne(fetch = FetchType.LAZY, mappedBy="lodgingIsresv")
    private Lodging lodging;
}
