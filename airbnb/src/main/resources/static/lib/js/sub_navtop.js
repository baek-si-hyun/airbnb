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
    $('._1hpx3rih').attr('class', '_1d8im2uw');
    $('._1ys9m4ab').attr('class', '_4acemm4');
    $('.ceyij5b').attr('class', 'c1lt77mq c1oqx6sn dir dir-ltr');
    $('._1uog1jkc').attr('class', '_1up2wiaw');
    $('._1nlexnu').remove();
    resetNav();

}

function resetNav() {
    //블록효과 css 제거
    $('._1kxfihfz').attr('class', '_1t9u8f6n');
    $('.chec1').attr('class', '_14nll2z1 chec1');
    $('.chec2').attr('class', '_14nll2z1 chec2');
    $('.check3').attr('class', 'b192dx2b b174x59c check3 dir dir-ltr');
    $('._1gqzge1b').attr('class', '_17kpbwhx');
    //다운된 효과 제거
    $('._xhcgu32').attr('class', '_yu5dnq');
    $('._wxu8ir').hide();
    $('.dd00').hide();
    $('.dd11').hide();
}

function travelwhere() {
    resetNav();
    //여행지 블록효과 css 적용
    $('._1t9u8f6n').attr('class', '_1kxfihfz');
    //여행지에 드롭 다운
    $('._yu5dnq').attr('class', '_xhcgu32');
}

function travelCheckin() {
    resetNav();
    //체크인 블록효과 css 적용
    $('.chec1').attr('class', '_1ky3o1vf chec1');
    //드롭다운
    $('.dd00').show();
}

function travelCheckOut() {
    resetNav();
    //체크아웃 블록효과 css 적용
    $('.chec2').attr('class', '_1ky3o1vf chec2');
    //드롭다운
    $('.dd00').show();
}

function activity() {
    resetNav();
    //체크아웃 블록효과 css 적용
    $('.check3').attr('class', 'b192dx2b b1odri3w check3 dir dir-ltr');
    //드롭다운
    $('.dd11').show();
}

function travelGuest() {
    resetNav();

    //여행자 블록효과 css 적용
    $('._17kpbwhx').attr('class', '_1gqzge1b');
    //여행자 팝업
    $('._wxu8ir').show();
    //화면 블랙아웃

}

//상단 메뉴바 검색 시작하기
$('.ffc0w66').on('click', function(e) {
    // 상단 메뉴바 중  공통사항
    $('._1d8im2uw').attr('class', '_1hpx3rih');
    $('._4acemm4').attr('class', '_1ys9m4ab');
    $('._1up2wiaw').attr('class', '_1uog1jkc');
    $('.c1oqx6sn').attr('class', 'c1lt77mq ceyij5b dir dir-ltr');
    if ($('._1nlexnu').length < 1) {
        $('header').after("<div class='_1nlexnu dir dir-ltr'></div>")
    }
    $(document).on('click', function(e) {
        if ($(e.target).closest('._1hpx3rih').length < 1) {
            resetAll();
        }
    });
    e.stopPropagation();
});
//여행지
$('._1t9u8f6n').on('click', function() {
    travelwhere();
});


$('._14nll2z1').on('click', function() {
    //체크인
    if ($(this).attr('tabindex') == 0) {
        travelCheckin();
    }
    //체크 아웃
    if ($(this).attr('tabindex') == 1) {
        travelCheckOut();
    }
});

//여행자
$('._17kpbwhx').on('click', function() {
    travelGuest();
});


//여행지 6개중 선택
$('._bi7q1f').on('click', function() {
    $('#bigsearch-query-stays_location_inspirations-input').val($(this).find('.a8jt5op').html());
    $('._as2q9p7').attr('class', '_bi7q1f');
    $(this).attr('class', '_as2q9p7');
    travelCheckin();
});

$('._as2q9p7').on('click', function() {
    $('#bigsearch-query-location-input').val('유연한 검색');
    travelCheckin();
});

//여행자 게스트 숫자
function pCount1() {
    const val = Number(document.querySelector("#c1").innerText);
    document.querySelector("#c1").innerText = val + 1;
    if (val + 1 > 0) {
        $('#discount1').removeAttr("disabled")
    }
    count_nav();
}

function mCount1() {
    const val = Number(document.querySelector("#c1").innerText);
    document.querySelector("#c1").innerText = val - 1;
    if ((document.querySelector("#c1").innerText) == 0) {
        $('#discount1').attr("disabled", "")
    }
    count_nav();
}

function pCount2() {
    const val = Number(document.querySelector("#c2").innerText);
    document.querySelector("#c2").innerText = val + 1;
    if (val + 1 > 0) {
        $('#discount2').removeAttr("disabled")
    }
    count_nav();
}

function mCount2() {
    const val = Number(document.querySelector("#c2").innerText);
    document.querySelector("#c2").innerText = val - 1;
    if ((document.querySelector("#c2").innerText) == 0) {
        $('#discount2').attr("disabled", "")
    }
    count_nav();
}


function pCount3() {
    const val = Number(document.querySelector("#c3").innerText);
    document.querySelector("#c3").innerText = val + 1;
    if (val + 1 > 0) {
        $('#discount3').removeAttr("disabled")
    }
    count_nav();
}

function mCount3() {
    const val = Number(document.querySelector("#c3").innerText);
    document.querySelector("#c3").innerText = val - 1;
    if ((document.querySelector("#c3").innerText) == 0) {
        $('#discount3').attr("disabled", "")
    }
    count_nav();
}

function pCount4() {
    const val = Number(document.querySelector("#c4").innerText);
    document.querySelector("#c4").innerText = val + 1;
    if (val + 1 > 0) {
        $('#discount4').removeAttr("disabled")
    }
    count_nav();
}

function mCount4() {
    const val = Number(document.querySelector("#c4").innerText);
    document.querySelector("#c4").innerText = val - 1;
    if ((document.querySelector("#c4").innerText) == 0) {
        $('#discount4').attr("disabled", "")
    }
    count_nav();
}
// 숙소선택
$('.check1').on('click', function() {
    resetNav();
    //숙소 밑줄
    $('._3i1l2kz').attr('class', '_882esz')
    $(this).children().first().attr('class', '_3i1l2kz');

    //체험선택후 숙소 선택 시
    $('.check1_nav').show();
    $('.check2_nav').hide();
});
//체험 클릭
$('.check2').on('click', function() {
    resetNav();
    //체험 밑줄
    $('._3i1l2kz').attr('class', '_882esz')
    $(this).children().first().attr('class', '_3i1l2kz');
    //ui변경
    //체험선택후 숙소 선택 시
    $('.check1_nav').hide();
    $('.check2_nav').show();
});

//날짜
$('.check3').on('click', function() {
    activity();
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

//프로필 팝업 on/off
$('._1h75pd34').on('click', function(e) {
    $('#simple-header-profile-menu').show();
    $(document).on('click', function(e) {
        if ($(e.target).closest('.c1ixqffw').length < 1) {
            $('#simple-header-profile-menu').hide();
        }
    });
    e.stopPropagation();
});