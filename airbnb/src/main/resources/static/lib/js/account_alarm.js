$(function() {
    /* 계정으로 전환 */
    $('#tab--notification-preferences--1').on('click', function() {
        $(this).attr('class', '_fd0fliz');
        $('#tab--notification-preferences--0').attr('class', '_tns11i');
        $('#panel--notification-preferences--1').show();
        $('#panel--notification-preferences--0').hide();
    })
    /* 혜택 및 업데이트 전환 */
    $('#tab--notification-preferences--0').on('click', function() {
        $(this).attr('class', '_fd0fliz');
        $('#tab--notification-preferences--1').attr('class', '_tns11i');
        $('#panel--notification-preferences--1').hide();
        $('#panel--notification-preferences--0').show();
    })

    /* 실적 및 축하 수정*/
    $('.btn1').on('click', function() {
        $('#popup1').show();
        $('.title').text('실적 및 축하');
        $('.content').text('호스팅에서 의미 있는 순간에 도달할 때나 슈퍼호스트 지위를 달성했을 때 소식을 받아보세요.');
    })

    /* 유용한 팁과 정보 */
    $('.btn2').on('click', function() {
        $('#popup2').show();
        $('.title').text('유용한 팁과 정보');
        $('.content').text('데이터에 기반한 유용한 팁과 정보로 호스팅 목표 달성에 도움을 받으세요.');
        $('#HOST_RECOGNITION_ACHIEVEMENTSVOICE').show();
    })

    /* 요금 트렌드 및 제안 */
    $('.btn3').on('click', function() {
        $('#popup3').show();
        $('.title').text('요금 트렌드 및 제안');
        $('.content').text('데이터에 기반한 유용한 팁과 정보로 요금을 최적화하세요.');
        $('#HOST_RECOGNITION_ACHIEVEMENTSVOICE').show();
    })

    /* 호스팅 혜택 */
    $('.btn4').on('click', function() {
        $('#popup4').show();
        $('.title').text('호스팅 혜택');
        $('.content').text('제휴사 제품 할인, 특별 프로모션 등 에어비앤비가 드리는 혜택을 이용하세요.');
        $('#HOST_RECOGNITION_ACHIEVEMENTSVOICE').show();
    })

    /* 뉴스 및 업데이트 */
    $('.btn5').on('click', function() {
        $('#popup5').show();
        $('.title').text('뉴스 및 업데이트');
        $('.content').text('에어비앤비에서 선보이는 새로운 기능, 앱·서비스 변경 사항에 대한 정보를 가장 먼저 받아보세요.');
        $('#HOST_RECOGNITION_ACHIEVEMENTSVOICE').show();
    })

    /* 현지 법률과 규정 */
    $('.btn6').on('click', function() {
        $('#popup6').show();
        $('.title').text('현지 법률과 규정');
        $('.content').text('호스팅 지역의 단기 임대 법규에 대한 최신 소식을 받아보세요.');
        $('#HOST_RECOGNITION_ACHIEVEMENTSVOICE').show();
    })

    /* 여행 아이디어 및 특가 */
    $('.btn7').on('click', function() {
        $('#popup7').show();
        $('.title').text('여행 아이디어 및 특가');
        $('.content').text('영감을 주는 숙소, 체험, 특가 정보');
        $('#HOST_RECOGNITION_ACHIEVEMENTSVOICE').hide();
    })

    /* 여행 계획 */
    $('.btn8').on('click', function() {
        $('#popup8').show();
        $('.title').text('여행 계획');
        $('.content').text('에어비앤비가 추천해드리는 숙소와 체험을 보며 여행 계획을 세워보세요.')
        $('#HOST_RECOGNITION_ACHIEVEMENTSVOICE').hide();
    })

    /* 뉴스 및 프로그램 */
    $('.btn9').on('click', function() {
        $('#popup9').show();
        $('.title').text('뉴스 및 프로그램');
        $('.content').text('새로운 프로그램에 관한 소식과 뉴스를 받아보세요.')
        $('#HOST_RECOGNITION_ACHIEVEMENTSVOICE').hide();
    })

    /* 피드백 */
    $('.btn10').on('click', function() {
        $('#popup10').show();
        $('.title').text('피드백');
        $('.content').text('에어비앤비에 대한 만족도와 개선 방안을 알려주세요.')
        $('#HOST_RECOGNITION_ACHIEVEMENTSVOICE').hide();
    })

    /* 여행 규정 */
    $('.btn11').on('click', function() {
        $('#popup11').show();
        $('.title').text('여행 규정');
        $('.content').text('스마트한 여행을 위해 최신 여행 규정을 확인하세요.')
        $('#HOST_RECOGNITION_ACHIEVEMENTSVOICE').hide();
    })

    /* 팝업 닫기 */
    $('._e296pg > svg').on('click', function() {
        $('#popup1').hide();
        $('#popup2').hide();
        $('#popup3').hide();
        $('#popup4').hide();
        $('#popup5').hide();
        $('#popup6').hide();
        $('#popup7').hide();
        $('#popup8').hide();
        $('#popup9').hide();
        $('#popup10').hide();
        $('#popup11').hide();
        $('#popup12').hide();
        $('#popup13').hide();
        $('#popup14').hide();
        $('#popup15').hide();
        $('#popup16').hide();
        $('#popup17').hide();
        $('#popup18').hide();
    })
})


$(function() {

    let alarmData = new Vue({
        el: '#alarmData',
        data: {
            isCelebrate: {},
            isTrip: {},
            isTrend: {},
            isHostbenefit: {},
            isNews: {},
            isLocalrules: {},
            isIdea: {},
            isPlan: {},
            isProgram: {},
            isFeedback: {},
            isTriprules: {},
            isAccount: {},
            isLodging: {},
            isGuest: {},
            isHost: {},
            isAlarm: {},
            isMessage: {}
        }
    });
    let id = parseInt($('#iddiv').text())
    alarmsearch(id);

    function alarmsearch(id) {
        $.get("/api/user/memNotice?id=" + id, function(response) {
            console.dir(response);
            alarmData.data = response.data;
            $('#isCelebrateE').val(response.data.isCelebrate[0])
            $('#isCelebrateM').val(response.data.isCelebrate[1])
            $('#isCelebrateC').val(response.data.isCelebrate[2])
            $('#isTripE').val(response.data.isTrip[0])
            $('#isTripM').val(response.data.isTrip[1])
            $('#isTripC').val(response.data.isTrip[2])
            $('#isTrendE').val(response.data.isTrend[0])
            $('#isTrendM').val(response.data.isTrend[1])
            $('#isTrendC').val(response.data.isTrend[2])
            $('#isHostbenefitE').val(response.data.isHostbenefit[0])
            $('#isHostbenefitM').val(response.data.isHostbenefit[1])
            $('#isHostbenefitC').val(response.data.isHostbenefit[2])
            $('#isNewsE').val(response.data.isNews[0])
            $('#isNewsM').val(response.data.isNews[1])
            $('#isNewsC').val(response.data.isNews[2])
            $('#isLocalrulesE').val(response.data.isLocalrules[0])
            $('#isLocalrulesM').val(response.data.isLocalrules[1])
            $('#isLocalrulesC').val(response.data.isLocalrules[2])
            $('#isIdeaE').val(response.data.isIdea[0])
            $('#isIdeaM').val(response.data.isIdea[1])
            $('#isPlanE').val(response.data.isPlan[0])
            $('#isPlanM').val(response.data.isPlan[1])
            $('#isProgramE').val(response.data.isProgram[0])
            $('#isProgramM').val(response.data.isProgram[1])
            $('#isFeedbackE').val(response.data.isFeedback[0])
            $('#isFeedbackM').val(response.data.isFeedback[1])
            $('#isTriprulesE').val(response.data.isTriprules[0])
            $('#isTriprulesM').val(response.data.isTriprules[1])
            $('#isAccountM').val(response.data.isAccount[0])
            $('#isLodgingM').val(response.data.isLodging[0])
            $('#isGuestM').val(response.data.isGuest[0])
            $('#isHostM').val(response.data.isHost[0])
            $('#isAlarmE').val(response.data.isAlarm[0])
            $('#isAlarmM').val(response.data.isAlarm[1])
            $('#isMessageE').val(response.data.isMessage[0])
            $('#isMessageM').val(response.data.isMessage[1])

            console.log($("#isCelebrateE").val())
            if ($("#isCelebrateE").val() === 'Y') {
                $('#toggle1').addClass('_8lt637i').removeClass('_17z7clia')
                $('#toggle_round1').addClass('_16g1cyy8').removeClass('_vr1ztso')
            }
            if ($("#isCelebrateE").val() === 'N') {
                $('#toggle1').removeClass('_8lt637i').addClass('_17z7clia')
                $('#toggle_round1').removeClass('_16g1cyy8').addClass('_vr1ztso')
            }

            if ($("#isCelebrateM").val() === 'Y') {
                $('#toggle2').addClass('_8lt637i').removeClass('_17z7clia')
                $('#toggle_round2').addClass('_16g1cyy8').removeClass('_vr1ztso')
            }
            if ($("#isCelebrateM").val() === 'N') {
                $('#toggle2').removeClass('_8lt637i').addClass('_17z7clia')
                $('#toggle_round2').removeClass('_16g1cyy8').addClass('_vr1ztso')
            }

            if ($("#isCelebrateC").val() === 'Y') {
                $('#toggle3').addClass('_8lt637i').removeClass('_17z7clia')
                $('#toggle_round3').addClass('_16g1cyy8').removeClass('_vr1ztso')
            }
            if ($("#isCelebrateC").val() === 'N') {
                $('#toggle3').removeClass('_8lt637i').addClass('_17z7clia')
                $('#toggle_round3').removeClass('_16g1cyy8').addClass('_vr1ztso')
            }
        })
    };

    function alarmUpdate() {
        let jsonData = {
            data: {
                memId: parseInt($('#iddiv').text()),
                isCelebrate: ($('#isCelebrateE').val() + " " + $('#isCelebrateM').val() + " " + $('#isCelebrateC').val()),
                isTrip: ($('#isTripE').val() + " " + $('#isTripM').val() + " " + $('#isTripC').val()),
                isTrend: ($('#isTrendE').val() + " " + $('#isTrendM').val() + " " + $('#isTrendC').val()),
                isHostbenefit: ($('#isHostbenefitE').val() + " " + $('#isHostbenefitM').val() + " " + $('#isHostbenefitC').val()),
                isNews: ($('#isNewsE').val() + " " + $('#isNewsM').val() + " " + $('#isNewsC').val()),
                isLocalrules: ($('#isLocalrulesE').val() + " " + $('#isLocalrulesM').val() + " " + $('#isLocalrulesC').val()),
                isIdea: ($('#isIdeaE').val() + " " + $('#isIdeaM').val()),
                isPlan: ($('#isPlanE').val() + " " + $('#isPlanM').val()),
                isProgram: ($('#isProgramE').val() + " " + $('#isProgramM').val()),
                isFeedback: ($('#isFeedbackE').val() + " " + $('#isFeedbackM').val()),
                isTriprules: ($('#isTriprulesE').val() + " " + $('#isTriprulesM').val()),
                isAccount: ($('#isAccountM').val()),
                isLodging: ($('#isLodgingM').val()),
                isGuest: ($('#isGuestM').val()),
                isHost: ($('#isHostM').val()),
                isAlarm: ($('#isAlarmE').val() + " " + $('#isAlarmM').val()),
                isMessage: ($('#isMessageE').val() + " " + $('#isMessageM').val())
            }
        }

        $.post({
            url: '/api/user/alarmChange',
            data: JSON.stringify(jsonData),
            dataType: 'json',
            contentType: 'application/json',
            success: function(response) {
                console.dir(response)
                alarmData.data = response.data;
            },
            error: function() {}
        });
    }




    /* 팝업 토글 버튼 */
    $('#toggle1').on('click', function() {
        $(this).toggleClass("_8lt637i _17z7clia");
        $('#toggle_round1').toggleClass("_16g1cyy8 _vr1ztso");
        $('#toggle1 ._svg').toggle();
        if ($('#toggle1').is('._8lt637i')) {
            $('#isCelebrateE').val('Y');
        } else {
            $('#isCelebrateE').val('N');
        }
        alarmUpdate()
    })

    $('#toggle2').on('click', function() {
        $(this).toggleClass("_8lt637i _17z7clia");
        $('#toggle_round2').toggleClass("_16g1cyy8 _vr1ztso");
        $('#toggle2 ._svg').toggle();
        if ($('#toggle2').is('._8lt637i')) {
            $('#isCelebrateM').val('Y')
        } else {
            $('#isCelebrateM').val('N')
        }
        alarmUpdate()
    })

    $('#toggle3').on('click', function() {
        $(this).toggleClass("_8lt637i _17z7clia");
        $('#toggle_round3').toggleClass("_16g1cyy8 _vr1ztso");
        $('#toggle3 ._svg').toggle();
        if ($('#toggle3').is('._8lt637i')) {
            $('#isCelebrateC').val('Y');
        } else {
            $('#isCelebrateC').val('N');
        }
        alarmUpdate()
    })

    //

    $('#toggle4').on('click', function() {
        $(this).toggleClass("_8lt637i _17z7clia");
        $('#toggle_round4').toggleClass("_16g1cyy8 _vr1ztso");
        $('#toggle4 svg').toggle();
        if ($('#toggle4').is('._8lt637i')) {
            $('#isTripE').val('Y');
        } else {
            $('#isTripE').val('N');
        }
        alarmUpdate()
    })

    $('#toggle5').on('click', function() {
        $(this).toggleClass("_8lt637i _17z7clia");
        $('#toggle_round5').toggleClass("_16g1cyy8 _vr1ztso");
        $('#toggle5 svg').toggle();
        if ($('#toggle5').is('._8lt637i')) {
            $('#isTripM').val('Y');
        } else {
            $('#isTripM').val('N');
        }
        alarmUpdate()
    })

    $('#toggle6').on('click', function() {
        $(this).toggleClass("_8lt637i _17z7clia");
        $('#toggle_round6').toggleClass("_16g1cyy8 _vr1ztso");
        $('#toggle6 svg').toggle();
        if ($('#toggle6').is('._8lt637i')) {
            $('#isTripC').val('Y');
        } else {
            $('#isTripC').val('N');
        }
        alarmUpdate()
    })

    //

    $('#toggle7').on('click', function() {
        $(this).toggleClass("_8lt637i _17z7clia");
        $('#toggle_round7').toggleClass("_16g1cyy8 _vr1ztso");
        $('#toggle7 svg').toggle();
        if ($('#toggle7').is('._8lt637i')) {
            $('#isTrendE').val('Y');
        } else {
            $('#isTrendE').val('N');
        }
        alarmUpdate()
    })

    $('#toggle8').on('click', function() {
        $(this).toggleClass("_8lt637i _17z7clia");
        $('#toggle_round8').toggleClass("_16g1cyy8 _vr1ztso");
        $('#toggle8 svg').toggle();
        if ($('#toggle8').is('._8lt637i')) {
            $('#isTrendM').val('Y');
        } else {
            $('#isTrendM').val('N');
        }
        alarmUpdate()
    })

    $('#toggle9').on('click', function() {
        $(this).toggleClass("_8lt637i _17z7clia");
        $('#toggle_round9').toggleClass("_16g1cyy8 _vr1ztso");
        $('#toggle9 svg').toggle();
        if ($('#toggle9').is('._8lt637i')) {
            $('#isTrendC').val('Y');
        } else {
            $('#isTrendC').val('N');
        }
        alarmUpdate()
    })

    //

    $('#toggle10').on('click', function() {
        $(this).toggleClass("_8lt637i _17z7clia");
        $('#toggle_round10').toggleClass("_16g1cyy8 _vr1ztso");
        $('#toggle10 svg').toggle();
        if ($('#toggle10').is('._8lt637i')) {
            $('#isHostbenefitE').val('Y');
        } else {
            $('#isHostbenefitE').val('N');
        }
        alarmUpdate()
    })

    $('#toggle11').on('click', function() {
        $(this).toggleClass("_8lt637i _17z7clia");
        $('#toggle_round11').toggleClass("_16g1cyy8 _vr1ztso");
        $('#toggle11 svg').toggle();
        if ($('#toggle11').is('._8lt637i')) {
            $('#isHostbenefitM').val('Y');
        } else {
            $('#isHostbenefitM').val('N');
        }
        alarmUpdate()
    })

    $('#toggle12').on('click', function() {
        $(this).toggleClass("_8lt637i _17z7clia");
        $('#toggle_round12').toggleClass("_16g1cyy8 _vr1ztso");
        $('#toggle12 svg').toggle();
        if ($('#toggle12').is('._8lt637i')) {
            $('#isHostbenefitC').val('Y');
        } else {
            $('#isHostbenefitC').val('N');
        }
        alarmUpdate()
    })

    //

    $('#toggle13').on('click', function() {
        $(this).toggleClass("_8lt637i _17z7clia");
        $('#toggle_round13').toggleClass("_16g1cyy8 _vr1ztso");
        $('#toggle13 svg').toggle();
        if ($('#toggle13').is('._8lt637i')) {
            $('#isNewsE').val('Y');
        } else {
            $('#isNewsE').val('N');
        }
        alarmUpdate()
    })

    $('#toggle14').on('click', function() {
        $(this).toggleClass("_8lt637i _17z7clia");
        $('#toggle_round14').toggleClass("_16g1cyy8 _vr1ztso");
        $('#toggle14 svg').toggle();
        if ($('#toggle14').is('._8lt637i')) {
            $('#isNewsM').val('Y');
        } else {
            $('#isNewsM').val('N');
        }
        alarmUpdate()
    })

    $('#toggle15').on('click', function() {
        $(this).toggleClass("_8lt637i _17z7clia");
        $('#toggle_round15').toggleClass("_16g1cyy8 _vr1ztso");
        $('#toggle15 svg').toggle();
        if ($('#toggle15').is('._8lt637i')) {
            $('#isNewsC').val('Y');
        } else {
            $('#isNewsC').val('N');
        }
        alarmUpdate()
    })

    //

    $('#toggle16').on('click', function() {
        $(this).toggleClass("_8lt637i _17z7clia");
        $('#toggle_round16').toggleClass("_16g1cyy8 _vr1ztso");
        $('#toggle16 svg').toggle();
        if ($('#toggle16').is('._8lt637i')) {
            $('#isLocalrulesE').val('Y');
        } else {
            $('#isLocalrulesE').val('N');
        }
        alarmUpdate()
    })

    $('#toggle17').on('click', function() {
        $(this).toggleClass("_8lt637i _17z7clia");
        $('#toggle_round17').toggleClass("_16g1cyy8 _vr1ztso");
        $('#toggle17 svg').toggle();
        if ($('#toggle17').is('._8lt637i')) {
            $('#isLocalrulesM').val('Y');
        } else {
            $('#isLocalrulesM').val('N');
        }
        alarmUpdate()
    })

    $('#toggle18').on('click', function() {
        $(this).toggleClass("_8lt637i _17z7clia");
        $('#toggle_round18').toggleClass("_16g1cyy8 _vr1ztso");
        $('#toggle18 svg').toggle();
        if ($('#toggle18').is('._8lt637i')) {
            $('#isLocalrulesC').val('Y');
        } else {
            $('#isLocalrulesC').val('N');
        }
        alarmUpdate()
    })

    //

    $('#toggle19').on('click', function() {
        $(this).toggleClass("_8lt637i _17z7clia");
        $('#toggle_round19').toggleClass("_16g1cyy8 _vr1ztso");
        $('#toggle19 svg').toggle();
        if ($('#toggle19').is('._8lt637i')) {
            $('#isIdeaE').val('Y');
        } else {
            $('#isIdeaE').val('N');
        }
        alarmUpdate()
    })

    $('#toggle20').on('click', function() {
        $(this).toggleClass("_8lt637i _17z7clia");
        $('#toggle_round20').toggleClass("_16g1cyy8 _vr1ztso");
        $('#toggle20 svg').toggle();
        if ($('#toggle20').is('._8lt637i')) {
            $('#isIdeaM').val('Y');
        } else {
            $('#isIdeaM').val('N');
        }
        alarmUpdate()
    })

    //

    $('#toggle21').on('click', function() {
        $(this).toggleClass("_8lt637i _17z7clia");
        $('#toggle_round21').toggleClass("_16g1cyy8 _vr1ztso");
        $('#toggle21 svg').toggle();
        if ($('#toggle21').is('._8lt637i')) {
            $('#isPlanE').val('Y');
        } else {
            $('#isPlanE').val('N');
        }
        alarmUpdate()
    })

    $('#toggle22').on('click', function() {
        $(this).toggleClass("_8lt637i _17z7clia");
        $('#toggle_round22').toggleClass("_16g1cyy8 _vr1ztso");
        $('#toggle22 svg').toggle();
        if ($('#toggle22').is('._8lt637i')) {
            $('#isPlanM').val('Y');
        } else {
            $('#isPlanM').val('N');
        }
        alarmUpdate()
    })

    //

    $('#toggle23').on('click', function() {
        $(this).toggleClass("_8lt637i _17z7clia");
        $('#toggle_round23').toggleClass("_16g1cyy8 _vr1ztso");
        $('#toggle23 svg').toggle();
        if ($('#toggle23').is('._8lt637i')) {
            $('#isProgramE').val('Y');
        } else {
            $('#isProgramE').val('N');
        }
        alarmUpdate()
    })

    $('#toggle24').on('click', function() {
        $(this).toggleClass("_8lt637i _17z7clia");
        $('#toggle_round24').toggleClass("_16g1cyy8 _vr1ztso");
        $('#toggle24 svg').toggle();
        if ($('#toggle24').is('._8lt637i')) {
            $('#isProgramM').val('Y');
        } else {
            $('#isProgramM').val('N');
        }
        alarmUpdate()
    })

    //

    $('#toggle25').on('click', function() {
        $(this).toggleClass("_8lt637i _17z7clia");
        $('#toggle_round25').toggleClass("_16g1cyy8 _vr1ztso");
        $('#toggle25 svg').toggle();
        if ($('#toggle25').is('._8lt637i')) {
            $('#isFeedbackE').val('Y');
        } else {
            $('#isFeedbackE').val('N');
        }
        alarmUpdate()
    })

    $('#toggle26').on('click', function() {
        $(this).toggleClass("_8lt637i _17z7clia");
        $('#toggle_round26').toggleClass("_16g1cyy8 _vr1ztso");
        $('#toggle26 svg').toggle();
        if ($('#toggle26').is('._8lt637i')) {
            $('#isFeedbackM').val('Y');
        } else {
            $('#isFeedbackM').val('N');
        }
        alarmUpdate()
    })

    //

    $('#toggle27').on('click', function() {
        $(this).toggleClass("_8lt637i _17z7clia");
        $('#toggle_round27').toggleClass("_16g1cyy8 _vr1ztso");
        $('#toggle27 svg').toggle();
        if ($('#toggle27').is('._8lt637i')) {
            $('#isTriprulesE').val('Y');
        } else {
            $('#isTriprulesE').val('N');
        }
        alarmUpdate()
    })

    $('#toggle28').on('click', function() {
        $(this).toggleClass("_8lt637i _17z7clia");
        $('#toggle_round28').toggleClass("_16g1cyy8 _vr1ztso");
        $('#toggle28 svg').toggle();
        if ($('#toggle28').is('._8lt637i')) {
            $('#isTriprulesM').val('Y');
        } else {
            $('#isTriprulesM').val('N');
        }
        alarmUpdate()
    })

    //

    $('#toggle29').on('click', function() {
        $(this).toggleClass("_8lt637i _17z7clia");
        $('#toggle_round29').toggleClass("_16g1cyy8 _vr1ztso");
        $('#toggle29 svg').toggle();
        if ($('#toggle29').is('._8lt637i')) {
            $('#isAccountM').val('Y');
        } else {
            $('#isAccountM').val('N');
        }
        alarmUpdate()
    })

    //

    $('#toggle30').on('click', function() {
        $(this).toggleClass("_8lt637i _17z7clia");
        $('#toggle_round30').toggleClass("_16g1cyy8 _vr1ztso");
        $('#toggle30 svg').toggle();
        if ($('#toggle30').is('._8lt637i')) {
            $('#isLodgingM').val('Y');
        } else {
            $('#isLodgingM').val('N');
        }
        alarmUpdate()
    })

    //

    $('#toggle31').on('click', function() {
        $(this).toggleClass("_8lt637i _17z7clia");
        $('#toggle_round31').toggleClass("_16g1cyy8 _vr1ztso");
        $('#toggle31 svg').toggle();
        if ($('#toggle31').is('._8lt637i')) {
            $('#isGuestM').val('Y');
        } else {
            $('#isGuestM').val('N');
        }
        alarmUpdate()
    })

    //

    $('#toggle32').on('click', function() {
        $(this).toggleClass("_8lt637i _17z7clia");
        $('#toggle_round32').toggleClass("_16g1cyy8 _vr1ztso");
        $('#toggle32 svg').toggle();
        if ($('#toggle32').is('._8lt637i')) {
            $('#isHostM').val('Y');
        } else {
            $('#isHostM').val('N');
        }
        alarmUpdate()
    })

    //

    $('#toggle33').on('click', function() {
        $(this).toggleClass("_8lt637i _17z7clia");
        $('#toggle_round33').toggleClass("_16g1cyy8 _vr1ztso");
        $('#toggle33 svg').toggle();
        if ($('#toggle33').is('._8lt637i')) {
            $('#isAlarmE').val('Y');
        } else {
            $('#isAlarmE').val('N');
        }
        alarmUpdate()
    })

    $('#toggle34').on('click', function() {
        $(this).toggleClass("_8lt637i _17z7clia");
        $('#toggle_round34').toggleClass("_16g1cyy8 _vr1ztso");
        $('#toggle34 svg').toggle();
        if ($('#toggle34').is('._8lt637i')) {
            $('#isAlarmM').val('Y');
        } else {
            $('#isAlarmM').val('N');
        }
        alarmUpdate()
    })

    //

    $('#toggle35').on('click', function() {
        $(this).toggleClass("_8lt637i _17z7clia");
        $('#toggle_round35').toggleClass("_16g1cyy8 _vr1ztso");
        $('#toggle35 svg').toggle();
        if ($('#toggle35').is('._8lt637i')) {
            $('#isMessageE').val('Y');
        } else {
            $('#isMessageE').val('N');
        }
        alarmUpdate()
    })

    $('#toggle36').on('click', function() {
        $(this).toggleClass("_8lt637i _17z7clia");
        $('#toggle_round36').toggleClass("_16g1cyy8 _vr1ztso");
        $('#toggle36 svg').toggle();
        if ($('#toggle36').is('._8lt637i')) {
            $('#isMessageM').val('Y');
        } else {
            $('#isMessageM').val('N');
        }
        alarmUpdate()
    })
})



$(function() {
    // 모든 마케팅 이메일에 대한 수신 동의 취소 팝업창
    $('#undefinedEMAIL-row-checkbox').on('click', function() {
        $('#popup18').show();
    })

    //수신 동의 취소
    $('._za4ekfm').on('click', function() {
        $('#popup18').hide();
    })

})


$(function() {
    // 계정 활동
    $('.btn12').on('click', function() {
        $('#popup12').show();
        $('.title').text('계정 활동');
        $('.content').text('예약, 계정 활동, 에어비앤비 이용 약관과 같은 법률 정보에 관한 최신 소식을 받아보세요.')
        $('#HOST_RECOGNITION_ACHIEVEMENTSVOICE').hide();
        $('#HOST_LISTING_ACTIVITYEMAIL').attr('class', 'rcem0st d750e13 dir dir-ltr')

    })

    // 숙소 활동
    $('.btn13').on('click', function() {
        $('#popup13').show();
        $('.title').text('숙소 활동');
        $('.content').text('예약 알림으로 모든 예약을 효율적으로 관리하세요.')
        $('#HOST_RECOGNITION_ACHIEVEMENTSVOICE').hide();
        $('#HOST_LISTING_ACTIVITYEMAIL').attr('class', 'rcem0st d750e13 dir dir-ltr')
    })

    // 게스트 정책
    $('.btn14').on('click', function() {
        $('#popup14').show();
        $('.title').text('게스트 정책');
        $('.content').text('에어비앤비 이용에 관한 중요한 정보를 받아보세요.')
        $('#HOST_RECOGNITION_ACHIEVEMENTSVOICE').hide();
        $('#HOST_LISTING_ACTIVITYEMAIL').attr('class', 'rcem0st d750e13 dir dir-ltr')
    })

    // 호스트 정책
    $('.btn15').on('click', function() {
        $('#popup15').show();
        $('.title').text('호스트 정책');
        $('.content').text('에어비앤비 규정 및 정책 변경 사항, 세금 및 규제 관련 최신 소식을 받아보세요')
        $('#HOST_RECOGNITION_ACHIEVEMENTSVOICE').hide();
        $('#HOST_LISTING_ACTIVITYEMAIL').attr('class', 'rcem0st d750e13 dir dir-ltr')
    })

    // 알림
    $('.btn16').on('click', function() {
        $('#popup16').show();
        $('.title').text('알림');
        $('.content').text('예약 및 계정 활동과 관련한 중요한 알림을 받아보세요.')
        $('#HOST_RECOGNITION_ACHIEVEMENTSVOICE').hide();
        $('#HOST_LISTING_ACTIVITYEMAIL').attr('class', 'rcem0st d750e13 dir dir-ltr')
    })

    //  게스트, 호스트가 보내는 메시지
    $('.btn17').on('click', function() {
        $('#popup17').show();
        $('.title').text('메시지');
        $('.content').text('호스트나 게스트가 보낸 중요한 메시지를 놓치지 말고 확인하세요.')
        $('#HOST_RECOGNITION_ACHIEVEMENTSVOICE').hide();
        $('#HOST_LISTING_ACTIVITYEMAIL').attr('class', 'rcem0st d750e13 dir dir-ltr')
    })
})