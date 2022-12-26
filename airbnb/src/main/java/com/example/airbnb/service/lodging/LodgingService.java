package com.example.airbnb.service.lodging;
import com.example.airbnb.ifs.CrudInterface;
import com.example.airbnb.mapper.NewMapper;
import com.example.airbnb.model.network.Header;
import com.example.airbnb.model.network.request.lodging.LodgingApiRequest;
import com.example.airbnb.model.network.response.lodging.LodgingApiResponse;
import com.example.airbnb.repository.lodging.*;
import com.github.pagehelper.PageHelper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class LodgingService implements CrudInterface<LodgingApiRequest, LodgingApiResponse> {
    @Autowired
    private NewMapper newMapper;

    private final LodgingRepository lodgingRepository;
    private final LodgingLocationRepository lodgingLocationRepository;
    private final LodgingPriceRepository lodgingPriceRepository;
    private final LodgingIsresvRepository lodgingIsresvRepository;
    private final LodgingPicturesRepository lodgingPicturesRepository;
    private final LodgingRoomRepository lodgingRoomRepository;


    @Override
    public Header<LodgingApiResponse> create(Header<LodgingApiRequest> request) {
        return null;
    }
    @Override
    public Header<LodgingApiResponse> read(Long id) {
        return null;
    }

    @Override
    public Header<LodgingApiResponse> update(Header<LodgingApiRequest> request) {
        return null;
    }

    @Override
    public Header<LodgingApiResponse> delete(Long id) {
        return null;
    }


    public List<LodgingApiResponse> findCondition(int pages, String tabId, Integer priceMin, Integer priceMax, String category,
                                    String propertyTypes, String roomType , int minbedrooms, int minbeds,
                                    String convi, int screenMin, int screenMax){
        if(propertyTypes.equals("||")){
            propertyTypes = "개인실,다인실,공간 전체";
        }
        String sqlv1 = propertyTypes.replace(',','|');
        sqlv1 = "'"+sqlv1+"'";

        //property type lodgingtype3

        if(roomType.equals("|||")){
            roomType = "별채,아파트,주택,B&B";
        }
        String sqlv2 = roomType.replace(',','|');
        sqlv2 = "'"+sqlv2+"'";

        String[] checkList = null;
        if(convi != null) {
            checkList = convi.split(",");
        }
        if(priceMax==0) priceMax = 40000000;

        List<Long> maps = newMapper.findCondition(priceMin, priceMax, category, sqlv1, sqlv2, minbeds, minbedrooms, checkList, screenMin, screenMax);
//        PageHelper.startPage(pages,10);
        System.out.println(screenMin);
        System.out.println(screenMax);
        System.out.println(maps);
        List<LodgingApiResponse> reserveApiResponseList = maps.stream()
                .map(re -> responseListing(re))
                .collect(Collectors.toList());
        return reserveApiResponseList;
    }

    private LodgingApiResponse responseListing(Long id){
        LodgingApiResponse lodgingApiResponse = LodgingApiResponse.builder()
                .lodgingId(id)
                .memId(lodgingRepository.findById(id).get().getMemId())
                .lodgingLocation(lodgingLocationRepository.findById(id).get().getLocationState())
                .isresvStart(lodgingIsresvRepository.findById(id).get().getIsresvStart().toLocalDate())
                .isresvEnd(lodgingIsresvRepository.findById(id).get().getIsresvEnd().toLocalDate())
                .lodgingExplain(lodgingRepository.findById(id).get().getLodgingExplain())
                .priceNormal(lodgingPriceRepository.findById(id).get().getPriceNormal())
                .lodgingPic(lodgingPicturesRepository.findById(id).get().getLodgingPic())
                .lodgingPicurl(lodgingPicturesRepository.findById(id).get().getLodgingPicurl())
                .lodgingType2(lodgingRoomRepository.findById(id).get().getLodgingType2())
                .build();
        return lodgingApiResponse;
    }
}
