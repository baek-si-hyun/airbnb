$(function() {

    let privacyData1 = new Vue({
        el: '#privacyInput1',
        data: {
            isLogshare: {}
        }
    });
    let privacyData2 = new Vue({
        el: '#privacyInput',
        data: {
            isDatashare: {}
        }
    });
    let id = parseInt($('#iddiv').text())

    privacydatasearch(id);

    function privacydatasearch(id) {
        $.get("/api/user/memPrivacy?id=" + id, function(response) {
            console.dir(response);
            privacyData1.data = response.data;
            privacyData2.data = response.data;
            $("#privacyInput1").val(response.data.isLogshare);
            $("#privacyInput2").val(response.data.isDatashare);

        })
    }

    function privacydata() {
        let jsonData = {
            data: {
                memId: parseInt($('#iddiv').text()),
                isLogshare: $('#privacyInput1').val(),
                isDatashare: $('#privacyInput2').val()
            }
        }
        $.post({
            url: '/api/user/share',
            data: JSON.stringify(jsonData),
            dataType: 'json',
            contentType: 'application/json',
            success: function(response) {
                console.dir(response)
                privacyData1.data = response.data;
                privacyData2.data = response.data;
            },
            error: function() {}
        });
    }
    // 공유탭 전환
    $('#tab--account-settings-main-navigation-tabs--0').click(function() {
        $('#panel--account-settings-main-navigation-tabs--0').show();
        $('#panel--account-settings-main-navigation-tabs--1').hide();
        $('#tab--account-settings-main-navigation-tabs--0').attr('class', '_fd0fliz')
        $('#tab--account-settings-main-navigation-tabs--1').attr('class', '_tns11i')
    })

    // 서비스탭 전환
    $('#tab--account-settings-main-navigation-tabs--1').click(function() {
        $('#panel--account-settings-main-navigation-tabs--1').show();
        $('#panel--account-settings-main-navigation-tabs--0').hide();
        $('#tab--account-settings-main-navigation-tabs--1').attr('class', '_fd0fliz')
        $('#tab--account-settings-main-navigation-tabs--0').attr('class', '_tns11i')
    })


    // 활동 공유 토글
    $('#btn1').click(function() {
        $(this).toggleClass('_1x8lx0do _1hzx1vsg');
        $('#toggle1').toggleClass('_16g1cyy8 _vr1ztso');
        if ($('#btn1').is('._1x8lx0do')) {
            $('#privacyInput1').attr('value', 'Y');
        } else {
            $('#privacyInput1').attr('value', 'N');
        }
        privacydata()
    })

    // 데이터 공유 토글
    $('#btn2').click(function() {
        $(this).toggleClass('_1x8lx0do _1hzx1vsg');
        $('#toggle2').toggleClass('_16g1cyy8 _vr1ztso');
        if ($('#btn2').is('._1x8lx0do')) {
            $('#privacyInput2').attr('value', 'Y');
        } else {
            $('#privacyInput2').attr('value', 'N');
        }
        privacydata()
    })

    // 자세히 알아보기 열기
    $('._15rpys7s').click(function() {
        $('#popup1').show();
    })
    // 자세히 알아보기 닫기
    $('._oda838').click(function() {
        $('#popup1').hide();
    })

})
