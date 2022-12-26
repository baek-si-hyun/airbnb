package com.example.airbnb.model.network.menu;

import com.example.airbnb.model.front.LoginMenu;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class LoginMenuService {
    public List<LoginMenu> getLoginMenu(){
        return Arrays.asList(
                LoginMenu.builder().title("로그인").url("#").code("login").classes("forlog").build(),
                LoginMenu.builder().title("숙소 호스트 되기").url("/pages/category").code("host").classes("").build(),
                LoginMenu.builder().title("체험 호스트 되기").url("#").code("activity").classes("").build(),
                LoginMenu.builder().title("도움말").url("/pages/help").code("help").classes("").build());
    }
}
