package com.example.airbnb.service.review;

import com.example.airbnb.ifs.CrudInterface;
import com.example.airbnb.model.entity.lodging.Lodging;
import com.example.airbnb.model.entity.review.Review;
import com.example.airbnb.model.network.Header;
import com.example.airbnb.model.network.request.lodging.LodgingApiRequest;
import com.example.airbnb.model.network.request.review.ReviewApiRequest;
import com.example.airbnb.model.network.response.lodging.LodgingApiResponse;
import com.example.airbnb.model.network.response.review.ReviewApiResponse;
import com.example.airbnb.repository.member.MemberRepository;
import com.example.airbnb.repository.review.ReviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ReviewApiLogicService implements CrudInterface<ReviewApiRequest, ReviewApiResponse> {

    private final ReviewRepository reviewRepository;
    private final MemberRepository memberRepository;

    @Override
    public Header create(Header<ReviewApiRequest> request) {
        ReviewApiRequest reviewApiRequest = request.getData();
        Review review = Review.builder()
                .lodgingId(reviewApiRequest.getLodgingId())
                .memId(reviewApiRequest.getMemId())
                .reviewComm(reviewApiRequest.getReviewComm())
                .reviewLocation(reviewApiRequest.getReviewLocation())
                .reviewCheckin(reviewApiRequest.getReviewCheckin())
                .reviewPricing(reviewApiRequest.getReviewPricing())
                .reviewClean(reviewApiRequest.getReviewClean())
                .reviewTotal(reviewApiRequest.getReviewTotal())
                .reviewTitle(reviewApiRequest.getReviewTitle())
                .reviewContent(reviewApiRequest.getReviewContent())
                .build();
        Review newReview = reviewRepository.save(review);
        return Header.OK();
    }

    //해당 숙소에 대한 리뷰 전부 뿌리기
    public Header<List<ReviewApiResponse>> reads(Long id){
        List<Review> reviewList = reviewRepository.findByLodgingId(id);
        List<ReviewApiResponse> reviewApiResponses = reviewList.stream()
                .map(re -> Converts(re))
                .collect(Collectors.toList());
        return Header.OK(reviewApiResponses);
    }

    //해당 숙소에 대한 리뷰 + 검색한 문자로 리뷰 찾기
    public Header<List<ReviewApiResponse>> readss(Long id, String content){
        List<Review> reviewList = reviewRepository.findToContent(id,content);
        List<ReviewApiResponse> reviewApiResponses = reviewList.stream()
                .map(re -> Converts(re))
                .collect(Collectors.toList());
        return Header.OK(reviewApiResponses);
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

    // response
    public ReviewApiResponse Converts(Review review){
        ReviewApiResponse reviewApiResponse = ReviewApiResponse.builder()
                .reviewId(review.getReviewId())
                .lodgingId(review.getLodgingId())
                .memId(review.getMemId())
                .reviewComm(review.getReviewComm())
                .reviewLocation(review.getReviewLocation())
                .reviewCheckin(review.getReviewCheckin())
                .reviewPricing(review.getReviewPricing())
                .reviewClean(review.getReviewClean())
                .reviewTotal(review.getReviewTotal())
                .reviewTitle(review.getReviewTitle())
                .reviewContent(review.getReviewContent())
                .createAt(review.getCreateAt())
                .updateAt(review.getUpdateAt())
                .member(memberRepository.findByMemId(review.getMemId())).build();
        return reviewApiResponse;
    }
}
