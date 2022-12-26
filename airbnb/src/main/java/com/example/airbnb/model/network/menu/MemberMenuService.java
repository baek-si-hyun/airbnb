package com.example.airbnb.model.network.menu;

import com.example.airbnb.model.entity.member.Member;
import com.example.airbnb.model.front.LoginMenu;
import com.example.airbnb.model.front.MemberMenu;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class MemberMenuService {
    public List<MemberMenu> getMemberMenu(){
        return Arrays.asList(
                MemberMenu.builder().title("여행").url("/pages/travel").code("users").classes("").build(),
                MemberMenu.builder().title("위시리스트").url("/pages/wish").code("users").classes("").build(),
                MemberMenu.builder().title("숙소 관리").url("/pages/host_done").code("host").classes("").build(),
                MemberMenu.builder().title("체험 관리").url("#").code("activity").classes("").build(),
                MemberMenu.builder().title("계정").url("/pages/account_main").code("activity").classes("").build(),
                MemberMenu.builder().title("도움말").url("/pages/help").code("help").classes("").build(),
                MemberMenu.builder().title("로그아웃").url("/pages/logout").code("help").classes("").build());
    }
}
