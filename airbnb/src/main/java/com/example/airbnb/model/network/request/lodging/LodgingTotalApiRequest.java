package com.example.airbnb.model.network.request.lodging;

import com.example.airbnb.model.network.response.lodging.*;
import com.example.airbnb.model.network.response.member.MemberApiResponse;
import com.fasterxml.jackson.annotation.JsonAutoDetect;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class LodgingTotalApiRequest {
    //lodging
    private LodgingApiResponse lodgingApiResponse;
    //lodgingBefore
    private LodgingBeforeApiResponse lodgingBeforeApiResponse;
    //lodgingDuration
    private LodgingDurationApiResponse lodgingDurationApiResponse;
    //lodgingIsresv
    private LodgingIsresvApiResponse lodgingIsresvApiResponse;
    //lodginngLocation
    private LodgingLocationApiResponse lodgingLocationApiResponse;
    //lodgingLocationDetail
    private LodgingLocationDetailApiResponse lodgingLocationDetailApiResponse;
    //Lodging pictures
    private LodgingPicturesApiResponse lodgingPicturesApiResponse;
    //LodgingPolicy
    private LodgingPolicyApiResponse lodgingPolicyApiResponse;
    //LdogingPrice
    private LodgingPriceApiResponse lodgingPriceApiResponse;
    //LodgingRole
    private LodgingRoleApiResponse lodgingRoleApiResponse;
    //lodgingLRoom
    private LodgingRoomApiResponse lodgingRoomApiResponse;
    //LodgingRules
    private LodgingRulesApiResponse lodgingRulesApiResponse;
    //Member
    private MemberApiResponse memberApiResponse;
}
