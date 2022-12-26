package com.example.airbnb.model.enumclass;


import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum Allowed{

    N(0,"거절", "NotAllow"),
    Y(1,"허용", "Allow");

    private Integer id;
    private String title;
    private String description;
}