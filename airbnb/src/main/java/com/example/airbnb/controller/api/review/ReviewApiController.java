package com.example.airbnb.controller.api.review;

import com.example.airbnb.ifs.CrudInterface;
import com.example.airbnb.model.network.Header;
import com.example.airbnb.model.network.request.review.ReviewApiRequest;
import com.example.airbnb.model.network.response.review.ReviewApiResponse;
import com.example.airbnb.service.review.ReviewApiLogicService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/review")
@RequiredArgsConstructor
public class ReviewApiController implements CrudInterface<ReviewApiRequest, ReviewApiResponse> {

    private final ReviewApiLogicService reviewApiLogicService;

    @Override
    @PostMapping("")
    public Header<ReviewApiResponse> create(@RequestBody Header<ReviewApiRequest> request) {
        return reviewApiLogicService.create(request);
    }

    //해당 숙소에 대한 리뷰 전부 뿌리기
    @GetMapping("")
    public Header<List<ReviewApiResponse>> reads(@RequestParam Long id){
        return reviewApiLogicService.reads(id);
    }

    //해당 숙소에 대한 리뷰 검색 (contents 내부에 관련 문장 포함시 리스트로 뿌려줌)
    @GetMapping("/search")
    public Header<List<ReviewApiResponse>> reads(@RequestParam Long id,@RequestParam String content){
        return reviewApiLogicService.readss(id,content);
    }

    @Override
    public Header<ReviewApiResponse> read(Long id) {
        return null;
    }

    @Override
    public Header<ReviewApiResponse> update(Header<ReviewApiRequest> request) {
        return null;
    }

    @Override
    public Header<ReviewApiResponse> delete(Long id) {
        return null;
    }
}
