package com.example.airbnb.service.wishlist;

import com.example.airbnb.ifs.CrudInterface;
import com.example.airbnb.model.entity.lodging.LodgingPictures;
import com.example.airbnb.model.entity.wishlist.Wishlist;
import com.example.airbnb.model.entity.wishlist.WishlistDetail;
import com.example.airbnb.model.network.Header;
import com.example.airbnb.model.network.request.review.ReviewApiRequest;
import com.example.airbnb.model.network.request.wishlist.WishlistApiRequest;
import com.example.airbnb.model.network.response.member.MemberApiResponse;
import com.example.airbnb.model.network.response.review.ReviewApiResponse;
import com.example.airbnb.model.network.response.wishlist.WishlistApiResponse;
import com.example.airbnb.model.network.response.wishlist.WishlistMainListResponse;
import com.example.airbnb.repository.lodging.LodgingPicturesRepository;
import com.example.airbnb.repository.wishlist.WishlistDetailRepository;
import com.example.airbnb.repository.wishlist.WishlistRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class WishlistApiLogicService implements CrudInterface<WishlistApiRequest, WishlistApiResponse> {

    private final WishlistRepository wishlistRepository;
    private final WishlistDetailRepository wishlistDetailRepository;

    private final LodgingPicturesRepository lodgingPicturesRepository;

    // 새로운 숙소 만들기
    @Override
    public Header create(Header<WishlistApiRequest> request) {
        if(request == null) return Header.ERROR("데이터 입력 에러");
        WishlistApiRequest wishlistApiRequest = request.getData();
        Wishlist wishlist = Wishlist.builder()
                .memId(wishlistApiRequest.getMemId())
                .wishlistTitle(wishlistApiRequest.getWishlistTitle()).build();
        Wishlist newWishlist = wishlistRepository.save(wishlist);
        WishlistDetail wishlistDetail = WishlistDetail.builder()
                .wishlistId(newWishlist.getWishlistId())
                .memId(wishlistApiRequest.getMemId())
                .lodgingId(wishlistApiRequest.getLodgingId()).build();
        WishlistDetail newWishListDetail =  wishlistDetailRepository.save(wishlistDetail);
        return Header.OK(newWishListDetail);
    }

    // 기존 위시리스트에 숙소 추가하기
    public Header append(Long wishlistId, Long lodgingId, Long memId){
        if(wishlistId == null || lodgingId == null) return Header.ERROR("데이터 입력 에러");
        WishlistDetail wishlistDetail = WishlistDetail.builder()
                .wishlistId(wishlistId)
                .memId(memId)
                .lodgingId(lodgingId).build();
        WishlistDetail wishlistDetail1 = wishlistDetailRepository.save(wishlistDetail);
        System.out.println(wishlistDetail1);
        return Header.OK();
    }

    // 위시리스트의 숙소 삭제
    public Header delete(Long memId, Long lodgingId) {
        Optional<WishlistDetail> wishlistDetail = wishlistDetailRepository.findByMemIdAndLodgingId(memId,lodgingId);
        return wishlistDetail.map(
                wishlistDetail1 -> {
                    wishlistDetailRepository.delete(wishlistDetail1);
                    return Header.OK();
                }).orElseGet(()->Header.ERROR("데이터 없음"));
    }

    // 위시리스트 자체 삭제
    public Header deleteList(Long wishlistId) {
        List<WishlistDetail> wishlistDetail = wishlistDetailRepository.findByWishlistId(wishlistId);
        Optional<Wishlist> wishlist = wishlistRepository.findById(wishlistId);
        wishlistDetail.stream().map(
                wishlistDetail1 -> {
                    wishlistDetailRepository.delete(wishlistDetail1);
                    return null;
                }).collect(Collectors.toList());
        return wishlist.map(wish -> {
            wishlistRepository.delete(wish);
            return Header.OK();
        }).orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    // 위시리스트 이름 변경
    public Header change(Long wishlistId, String title){
        Optional<Wishlist> wishlist = wishlistRepository.findById(wishlistId);
        return wishlist.map(
                wishlist1 -> {
                    wishlist1.setWishlistTitle(title);
                    wishlistRepository.save(wishlist1);
                    return Header.OK();
                }).orElseGet(() -> Header.ERROR("데이터 없음"));
    }

//메인 위시리스트 (제목, 위시리스트 사진) 뿌리기
    public Header<List<WishlistMainListResponse>> listing(Long memId){
        List<WishlistDetail> detailList = wishlistDetailRepository.findByMemIds(memId);
        System.out.println(detailList);
        List<WishlistMainListResponse> mainListResponseList = detailList.stream()
                .map(wishlist -> converts(wishlist)).collect(Collectors.toList());
        return Header.OK(mainListResponseList);
    }

    public Header<List<Long>> check(Long memId){
        List<Long> lodgingIdList = wishlistDetailRepository.findByMemId(memId);
        if(lodgingIdList == null) return Header.ERROR("데이터 없음");
        return Header.OK(lodgingIdList);
    }


    @Override
    public Header<WishlistApiResponse> read(Long id) {
        return null;
    }

    @Override
    public Header<WishlistApiResponse> update(Header<WishlistApiRequest> request) {
        return null;
    }

    @Override
    public Header<WishlistApiResponse> delete(Long id) {
        return null;
    }

    //response
    public WishlistApiResponse convert(Wishlist wishlist){
        WishlistApiResponse wishlistApiResponse = WishlistApiResponse.builder()
                .wishlistId(wishlist.getWishlistId())
                .wishlistTitle(wishlist.getWishlistTitle())
                .createAt(wishlist.getCreateAt())
                .build();
        return wishlistApiResponse;
    }

    public WishlistMainListResponse converts(WishlistDetail wishlistDetail){
        WishlistMainListResponse wishlistMainListResponse = WishlistMainListResponse.builder()
                .wishlistTitle(wishlistRepository.findById(wishlistDetail.getWishlistId()).get().getWishlistTitle())
                .lodgingPictures(lodgingPicturesRepository.findById(wishlistDetail.getLodgingId()).get())
                .wishListId(wishlistRepository.findById(wishlistDetail.getWishlistId()).get().getWishlistId())
                .build();
        return wishlistMainListResponse;
    }
}
