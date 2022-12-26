package com.example.airbnb.model.entity.lodging;

import com.example.airbnb.model.entity.wishlist.Wishlist;
import com.example.airbnb.model.entity.wishlist.WishlistDetail;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
//@EqualsAndHashCode(callSuper = false, exclude = {"lodging"})
public class LodgingPictures {
    @Id
    private Long lodgingId;
    private String lodgingPic;
    private String lodgingPicurl;
    private String lodgingPic2;
    private String lodgingPicurl2;
    private String lodgingPic3;
    private String lodgingPicurl3;
    private String lodgingPic4;
    private String lodgingPicurl4;
    private String lodgingPic5;
    private String lodgingPicurl5;
    private Long memId;

    @JsonIgnore
    @OneToOne(fetch = FetchType.LAZY, mappedBy="lodgingPictures")
    private Lodging lodging;
}
