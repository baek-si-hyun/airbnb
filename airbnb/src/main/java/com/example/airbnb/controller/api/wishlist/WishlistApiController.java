package com.example.airbnb.controller.api.wishlist;


import com.example.airbnb.ifs.CrudInterface;
import com.example.airbnb.model.entity.wishlist.Wishlist;
import com.example.airbnb.model.entity.wishlist.WishlistDetail;
import com.example.airbnb.model.network.Header;
import com.example.airbnb.model.network.request.review.ReviewApiRequest;
import com.example.airbnb.model.network.request.wishlist.WishlistApiRequest;
import com.example.airbnb.model.network.response.review.ReviewApiResponse;
import com.example.airbnb.model.network.response.wishlist.WishlistApiResponse;
import com.example.airbnb.model.network.response.wishlist.WishlistMainListResponse;
import com.example.airbnb.service.wishlist.WishlistApiLogicService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/wishlist")
@RequiredArgsConstructor
public class WishlistApiController implements CrudInterface<WishlistApiRequest, WishlistApiResponse> {

    private final WishlistApiLogicService wishlistApiLogicService;

    // 새로운 위시리스트 만들기
    @Override
    @PostMapping("")
    public Header create(@RequestBody Header<WishlistApiRequest> request) {
        return wishlistApiLogicService.create(request);
    }

    // 기존 위시리스트에 숙소 추가하기
    @GetMapping("")
    public Header append(@RequestParam Long wishlistId, @RequestParam Long lodgingId, @RequestParam Long memId){
        return wishlistApiLogicService.append(wishlistId,lodgingId,memId);
    }

    // 기존 위시리스트의 숙소 삭제하기
    @GetMapping("/delete")
    public Header delete(@RequestParam Long memId, @RequestParam Long lodgingId){
        return wishlistApiLogicService.delete(memId,lodgingId);
    }

    // 위시리스트 자체 삭제하기
    @GetMapping("/delete/{wishlistId}")
    public Header deleteList(@PathVariable(value = "wishlistId")  Long wishlistId){
        return wishlistApiLogicService.deleteList(wishlistId);
    }

    // 위시리스트 이름 변경
    @GetMapping("/change")
    public Header change(@RequestParam Long wishlistId, @RequestParam String title){
        return wishlistApiLogicService.change(wishlistId,title);
    }

    // 메인 위시리스트 뿌리기
    @GetMapping("/main")
    public Header<List<WishlistMainListResponse>> listing(@RequestParam Long memId){
        return wishlistApiLogicService.listing(memId);
    }

    // 메인 위시리스트 유저가 등록한 숙소 id 뿌리기
    @GetMapping("/main/check")
    public Header<List<Long>> check(@RequestParam Long memId){
        return wishlistApiLogicService.check(memId);
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
}
