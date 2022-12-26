package com.example.airbnb.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.data.domain.Page;
import org.springframework.data.repository.query.Param;

import java.util.ArrayList;
import java.util.List;

@Mapper
public interface NewMapper {
    List<Long> findCondition(@Param("priceMin")int priceMin,@Param("priceMax")int priceMax, @Param("category")String category, @Param("sqlv1")String sqlv1, @Param("sqlv2")String sqlv2,
                             @Param("minbeds")int minbeds, @Param("minbedrooms")int minbedrooms, @Param("checkList") String[] checkList, @Param("screenMin")int screenMin, @Param("screenMax")int screenMax);
}
