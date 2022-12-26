$(function() {
    let global1 = new Vue({
        el: '#global1',
        data: {
            preferLan: {}
        }
    });
    let id = parseInt($('#iddiv').text())
    PreferLansearch(id);

    function PreferLansearch(id) {
        $.get("/api/user/memGlobal?id=" + id, function(response) {
            global1.data = response.data;
            $("#preferred_locale").val(response.data.preferLan);
            $("#div1").text(response.data.preferLan);
        })
    }

    function preferLanUpdating() {
        let jsonData = {
            data: {
                memId: parseInt($('#iddiv').text()),
                preferLan: $('#preferred_locale').val()
            }
        }
        $.post({
            url: '/api/user/preferLan',
            data: JSON.stringify(jsonData),
            dataType: 'json',
            contentType: 'application/json',
            success: function(response) {
                global1.data = response.data
                $("#preferred_locale").val(response.data.preferLan);
                $("#div1").text(response.data.preferLan);
            },
            error: function() {
                alert('등록실패!');

            }
        });
    }
    $('#preferLansubmit').click(() => {
        preferLanUpdating();
    })



    let global2 = new Vue({
        el: '#global2',
        data: {
            preferCurr: {}
        }
    });
    preferCurrsearch(id);
    function preferCurrsearch(id) {
        $.get("/api/user/memGlobal?id=" + id, function(response) {
            global2.data = response.data;
            $("#native_currency").val(response.data.preferCurr);
            $("#div2").text(response.data.preferCurr);
        })
    }
    function preferCurrUpdating() {
        let jsonData = {
            data: {
                memId: parseInt($('#iddiv').text()),
                preferCurr: $('#native_currency').val()
            }
        }
        $.post({
            url: '/api/user/preferCurr',
            data: JSON.stringify(jsonData),
            dataType: 'json',
            contentType: 'application/json',
            success: function(response) {
                global2.data = response.data
                $("#native_currency").val(response.data.preferCurr);
                $("#div2").text(response.data.preferCurr);
            },
            error: function() {
                alert('등록실패!');
            }
        });
    }
    $('#preferCurrsubmit').click(() => {
        preferCurrUpdating();
    })


    let global3 = new Vue({
        el: '#global3',
        data: {
            onTimes: {}
        }
    });
    onTimessearch(id);

    function onTimessearch(id) {
        $.get("/api/user/memGlobal?id=" + id, function(response) {
            global3.global3 = response.data;
            $("#timezone").val(response.data.onTimes);
            $("#div3").text(response.data.onTimes);
        })
    }


    function onTimesUpdating() {
        jsonData = {
            data: {
                memId: parseInt($('#iddiv').text()),
                onTimes: $('#timezone').val()
            }
        }
        $.post({
            url: '/api/user/onTimes',
            data: JSON.stringify(jsonData),
            dataType: 'json',
            contentType: 'application/json',
            success: function(response) {
                global3.global3 = response.data
                $("#timezone").val(response.data.onTimes);
                $("#div3").text(response.data.onTimes);
            },
            error: function() {
                alert('등록실패!');

            }
        });
    }
    $('#onTimessubmit').click(() => {
        onTimesUpdating();
    })
})
// 선호하는 언어 수정
$('.btn1').click(function() {
    $('.btn_cancel1').show();
    $(this).hide();
    $('.dropdown1').show();
    $('.content1').text('선호하는 언어에 따라 에어비앤비 페이지의 내용과 커뮤니케이션 방식이 업데이트됩니다.');
    $('.btn_save1').css('visibility', 'visible');
})

// 선호하는 언어 취소
$('.btn_cancel1').click(function() {
    $('.btn1').show();
    $(this).hide();
    $('.dropdown1').hide();
    $('.content1').text('한국어');
    $('.btn_save1').css('visibility', 'hidden');
})

// 선호하는 통화 수정
$('.btn2').click(function() {
    $('.btn_cancel2').show();
    $(this).hide();
    $('.dropdown2').show();
    $('.content2').hide();
    $('.btn_save2').css('visibility', 'visible');
})

// 선호하는 통화 취소
$('.btn_cancel2').click(function() {
    $('.btn2').show();
    $(this).hide();
    $('.dropdown2').hide();
    $('.content2').show();
    $('.btn_save2').css('visibility', 'hidden');
})

// 시간대 수정
$('.btn3').click(function() {
    $('.btn_cancel3').show();
    $(this).hide();
    $('.dropdown3').show();
    $('.content3').hide();
    $('.btn_save3').css('visibility', 'visible');
})

// 시간대 취소
$('.btn_cancel3').click(function() {
    $('.btn3').show();
    $(this).hide();
    $('.dropdown3').hide();
    $('.content3').show();
    $('.btn_save3').css('visibility', 'hidden');
})