package com.example.airbnb.model.network.request.lodging;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LodgingPicturesApiRequest {
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
}
