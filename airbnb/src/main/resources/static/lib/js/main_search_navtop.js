function count_nav() {
    let pep = Number(document.querySelector("#c1").innerText) + Number(document.querySelector("#c2").innerText) +
        Number(document.querySelector("#c3").innerText);
    let animal = Number(document.querySelector("#c4").innerHTML);
    $('#gstcnt').text(`게스트 ${pep}명, 반려동물 ${animal}마리`);
}
//달력
$('#datepicker').datepicker();
$('#datepicker2').datepicker();
$('#datepicker3').datepicker();


function resetAll() {
    $('.cn7o9ly').attr('class', 'c1kffd0v cxy853f dir dir-ltr');
    $('.l1h6eamc').attr('class', 'lkm6i7z l1rzxhu2 lr5v90m dir dir-ltr');
    $('.b12rw3s8').attr('class', 'b3ppcw1 b1kj223i b1t24mo5 dir dir-ltr');
    $('.ceyij5b').attr('class', 'c1lt77mq c1oqx6sn dir dir-ltr');
    $('.o8h0gdx').remove();
    resetNav();
}

function resetNav() {
    //블록효과 css 제거
    $('.check1').attr('class', 'b192dx2b b174x59c check1 dir dir-ltr');
    $('.check2').attr('class', 'b192dx2b b174x59c check2 dir dir-ltr');
    $('.check3').attr('class', 'b192dx2b b174x59c check3 dir dir-ltr');
    $('.i1eek2sl').attr('class', 'i11g7f5s ix85u26 ivycze5 dir dir-ltr');
    $('.bkmyqgh').attr('class', 'b192dx2b b174x59c bkmyqgh dir dir-ltr');
    //다운된 효과 제거
    $('.p1jg7hjv').attr('class', 'p1jg7hjv dir dir-ltr');
    $('.p1el3a6w').attr('class', 'p1el3a6w dumyblank dir dir-ltr');
    $('.fuhmdl6 ').attr('class', 'c1nifi44 fuhmdl6 l16t0m55 dumyblank dir dir-ltr');
    $('.p1el3a6w3').hide();
}

function travelwhere() {
    resetNav();
    //여행지 블록효과 css 적용
    $('.bkmyqgh').attr('class', 'b192dx2b b174x59c bkmyqgh dir dir-ltr');

    //체크아웃 블록효과 css 적용
    $('.ix85u26').attr('class', 'i11g7f5s i1eek2sl ivycze5 dir dir-ltr');

    //여행지에 드롭 다운
    $('.p1jg7hjv').addClass('p5mmcz9');

    //화면 블랙아웃
    if ($('.o8h0gdx').length < 1) {
        $('header').after("<div class='o8h0gdx dir dir-ltr'></div>")
    }
}

function travelCheckin() {
    resetNav();

    //체크아웃 블록효과 css 적용
    $('.check1').attr('class', 'b192dx2b b1odri3w check1 dir dir-ltr');
    $('.fuhmdl6 ').attr('class', 'c1nifi44 fuhmdl6 l16t0m55 dir dir-ltr');

    //화면 블랙아웃
    if ($('.o8h0gdx').length < 1) {
        $('header').after("<div class='o8h0gdx dir dir-ltr'></div>")
    }
}

function travelCheckOut() {
    resetNav();

    //체크아웃 블록효과 css 적용
    $('.check2').attr('class', 'b192dx2b b1odri3w check2 dir dir-ltr');
    $('.fuhmdl6 ').attr('class', 'c1nifi44 fuhmdl6 l16t0m55 dir dir-ltr');

    //화면 블랙아웃
    if ($('.o8h0gdx').length < 1) {
        $('header').after("<div class='o8h0gdx dir dir-ltr'></div>")
    }
}

function travelGuest() {
    //블록효과 css 제거
    resetNav();

    //여행자 블록효과 css 적용
    $('.bkmyqgh').attr('class', 'b192dx2b b1odri3w bkmyqgh dir dir-ltr');

    //여행자 팝업
    $('.p1el3a6w').attr('class', 'p1el3a6w dir dir-ltr');

    //화면 블랙아웃
    if ($('.o8h0gdx').length < 1) {
        $('header').after("<div class='o8h0gdx dir dir-ltr'></div>")
    }
}


//어디든지 클릭시에 실행

//상단 메뉴바 (어디든지 언제든일주일 게스트추가)
$('.ffc0w66').on('click', function(e) {
    // 상단 메뉴바 중  공통사항
    $('.cxy853f').attr('class', 'c1kffd0v cn7o9ly dir dir-ltr');
    $('.lr5v90m').attr('class', 'lkm6i7z l1rzxhu2 l1h6eamc dir dir-ltr');
    $('.b1t24mo5').attr('class', 'b3ppcw1 b1kj223i b12rw3s8 dir dir-ltr');
    $('.c1oqx6sn').attr('class', 'c1lt77mq ceyij5b dir dir-ltr');

    if ($(this).data('index') == 0) {
        travelwhere();
    }
    if ($(this).data('index') == 1) {
        travelCheckin();
    }
    if ($(this).data('index') == 2) {
        travelGuest();
    }
    //체험 날짜
    $('.check3').on('click', function() {
        $('.check3').attr('class', 'b192dx2b b1odri3w check3 dir dir-ltr');
        $('.p1el3a6w3').show();
    });

    $(document).on('click', function(e) {
        if ($(e.target).closest('.b12rw3s8').length < 1) {
            resetAll();
        }
    });
    e.stopPropagation();
});

//여행지
$('.ix85u26').on('click', function() {
    travelwhere();
});

$('.b192dx2b').on('click', function() {
    //체크인
    if ($(this).attr('tabindex') == 0) {
        travelCheckin();
    }

    //체크 아웃
    if ($(this).attr('tabindex') == 1) {
        travelCheckOut();
    }

    //여행자
    if ($(this).attr('tabindex') == 2) {
        travelGuest();
    }
});

//여행지 6개중 선택
$('._bi7q1f').on('click', function() {
    $('#bigsearch-query-location-input').val($(this).find('.a8jt5op').html());
    $('._as2q9p7').attr('class', '_bi7q1f');
    $(this).attr('class', '_as2q9p7');
    travelCheckin();
});

$('._as2q9p7').on('click', function() {
    $('#bigsearch-query-location-input').val('유연한 검색');
    travelCheckin();
});

//달력 버튼 클릭시(체크인)
$('.gj-icon').on('click', function() {
    $("#datepicker").on("change", function() {
        $('.datefir').text($(this).val());
    });

    $("#datepicker2").on("change", function() {
        $('.datesec').text($(this).val());
    });

    $("#datepicker3").on("change", function() {
        $('.datethird').text($(this).val());
    });
});



//여행자 게스트 숫자
function pCount1() {
    const val = Number(document.querySelector("#c1").innerText);
    document.querySelector("#c1").innerText = val + 1;
    if (val + 1 > 0) {
        $('#discount1').removeAttr("disabled")
    }
    count_nav()
}

function mCount1() {
    const val = Number(document.querySelector("#c1").innerText);
    document.querySelector("#c1").innerText = val - 1;
    if ((document.querySelector("#c1").innerText) == 1) {
        $('#discount1').attr("disabled", "")
    }
    count_nav()
}

function pCount2() {
    const val = Number(document.querySelector("#c2").innerText);
    document.querySelector("#c2").innerText = val + 1;
    if (val + 1 > 0) {
        $('#discount2').removeAttr("disabled")
    }
    count_nav()
}

function mCount2() {
    const val = Number(document.querySelector("#c2").innerText);
    document.querySelector("#c2").innerText = val - 1;
    if ((document.querySelector("#c2").innerText) == 0) {
        $('#discount2').attr("disabled", "")
    }
    count_nav()
}


function pCount3() {
    const val = Number(document.querySelector("#c3").innerText);
    document.querySelector("#c3").innerText = val + 1;
    if (val + 1 > 0) {
        $('#discount3').removeAttr("disabled")
    }
    count_nav()
}

function mCount3() {
    const val = Number(document.querySelector("#c3").innerText);
    document.querySelector("#c3").innerText = val - 1;
    if ((document.querySelector("#c3").innerText) == 0) {
        $('#discount3').attr("disabled", "")
    }
    count_nav()
}


function pCount4() {
    const val = Number(document.querySelector("#c4").innerText);
    document.querySelector("#c4").innerText = val + 1;
    if (val + 1 > 0) {
        $('#discount4').removeAttr("disabled")
    }
    count_nav()
}

function mCount4() {
    const val = Number(document.querySelector("#c4").innerText);
    document.querySelector("#c4").innerText = val - 1;
    if ((document.querySelector("#c4").innerText) == 0) {
        $('#discount4').attr("disabled", "")
    }
    count_nav()
}
// 숙소선택
$('.chec1').on('click', function() {
    resetNav();
    //숙소 밑줄
    $('.tnrruw1').eq(0).addClass('t1s6zadl');
    $('.tnrruw1').eq(1).removeClass('t1s6zadl');

    //체험선택후 숙소 선택 시
    $('.check1_nav').show();
    $('.check2_nav').hide();
});
//체험 클릭
$('.chec2').on('click', function() {
    resetNav();
    //체험 밑줄
    $('.tnrruw1').eq(0).removeClass('t1s6zadl');
    $('.tnrruw1').eq(1).addClass('t1s6zadl');

    //ui변경
    $('.check1_nav').hide();
    $('.check2_nav').show();
});

//팝업닫기
$('._e296pg > svg').on('click', function() {
    $('.popup1').hide();
});

//언어및 지역 팝업 열기
$('.b2').on('click', function() {
    $('.popup1').show();
});

$('#tab--language_region_and_currency--1').on('click', function() {
    $('#tab--language_region_and_currency--0').attr('class', '_tns11i');
    $('#tab--language_region_and_currency--1').attr('class', '_fd0fliz');
    $('#panel--language_region_and_currency--0').hide();
    $('#panel--language_region_and_currency--1').show();
});

$('#tab--language_region_and_currency--0').on('click', function() {
    $('#tab--language_region_and_currency--0').attr('class', '_fd0fliz');
    $('#tab--language_region_and_currency--1').attr('class', '_tns11i');
    $('#panel--language_region_and_currency--0').show();
    $('#panel--language_region_and_currency--1').hide();
});

//검색 실행 시
$('.b134py57').on('click', function() {
    location.href = "./pages/acc";
});
// 달력 실행
//$('#datepicker').datepicker();

//프로필 팝업 on/off
$('.c1grjlav').on('click', function(e) {
    $('#simple-header-profile-menu').show();
    $(document).on('click', function(e) {
        if ($(e.target).closest('.c1ixqffw').length < 1) {
            $('#simple-header-profile-menu').hide();
        }
    });
    e.stopPropagation();
});