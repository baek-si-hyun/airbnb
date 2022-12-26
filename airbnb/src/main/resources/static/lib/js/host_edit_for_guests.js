/*체크인 가능시간 수정하기 버튼 눌렀을 때*/
$('#button_su').on('click', function() {
    $('#first_ii').attr('class', 'first_ii');
    $('#djqtdj1').attr('class', 'djqtdj1 _kkkkkkk');
})
/*체크인 가능시간 x 버튼 눌렀을 때*/
$('#ekerl').on('click', function() {
    $('#first_ii').attr('class', 'first_ii _kkkkkkk');
    $('#djqtdj1').attr('class', 'djqtdj1');
    $("#wjwkddldyd").attr("disabled", true)
})
/*체크인 취소 버튼 눌렀을 때*/
$('#cnlth').on('click', function() {
    $('#first_ii').attr('class', 'first_ii _kkkkkkk');
    $('#djqtdj1').attr('class', 'djqtdj1');
    $("#wjwkddldyd").attr("disabled", true)
})
/*체크인 셀렉트 저장버튼 활성 눌렀을 때*/
$('#select2').on("change", function() {
    $("#wjwkddldyd").attr("disabled", false)
})
$('#select1').on("change", function() {
    $("#wjwkddldyd").attr("disabled", false)
})
/*------------------------------------------------------------------------------------*/


/*체크아웃 수정 버튼*/
$('#button_sad').on('click', function() {
    $('#first_iii').attr('class', '_11rnjg7z');
    $('#djqtdj').attr('class', 'djqtdj _kkkkkkk');
})
/*체크아웃  x 버튼 눌렀을 때*/
$('#ekerl1').on('click', function() {
    $('#first_iii').attr('class', '_11rnjg7z _kkkkkkk');
    $('#djqtdj').attr('class', 'djqtdj');
    $("#wjwkdqjsm").attr("disabled", true)
})
/*체크아웃 취소 버튼 눌렀을 때*/
$('#cnlth1').on('click', function() {
    $('#first_iii').attr('class', '_11rnjg7z _kkkkkkk');
    $('#djqtdj').attr('class', 'djqtdj');
    $("#wjwkdqjsm").attr("disabled", true)
})
/*체크아웃 셀렉트 저장버튼 활성 눌렀을 때*/
$('#select3').on("change", function() {
    $("#wjwkdqjsm").attr("disabled", false)
})


/*------------------------------------------------------------------------------------*/


/*게스트 교류 수정 버튼*/
$('#tnwjd33').on('click', function() {
    $('#cnlthdi').attr('class', 'cnlthdi');
    $('#djqtdj12').attr('class', 'djqtdj12 _kkkkkkk');
})
/*게스트 교류  x 버튼 눌렀을 때*/
$('#cnlth33').on('click', function() {
    $('#cnlthdi').attr('class', 'cnlthdi _kkkkkkk');
    $('#djqtdj12').attr('class', 'djqtdj12');
    $("#wjwkdqjxmsii").attr("disabled", true)
})
/*게스트 교류 취소 버튼 눌렀을 때*/
$('#ekerl33').on('click', function() {
    $('#cnlthdi').attr('class', 'cnlthdi _kkkkkkk');
    $('#djqtdj12').attr('class', 'djqtdj12');
    $("#wjwkdqjxmsii").attr("disabled", true)
})

/*게스트메뉴얼 라디오 입력시 저장버튼 활성 버튼*/
$('#rarara').on('click', function() {
    $('#wjwkdqjxmsii').attr("disabled", false);
})

/*게스트메뉴얼 텍스트 입력시 저장버튼 활성 버튼*/
$('#rptmxmdhkryfb').on("change keydown paste textarea", function() {
    if ($("#rptmxmdhkryfb").val() == '')
        $("#wjwkdqjxmsii").attr("disabled", false)
})
/*게스트메뉴얼 라디오 입력시 저장버튼 활성 버튼*/
$('._83s1a2').on('click', function() {
    $('#wjwkdqjxmsii').attr("disabled", false);
})




/*------------------------------------------------------------------------------------*/

/*예약 후 정보 수정 버튼*/
$('#button_suuu').on('click', function() {
    $('#first_iiii').attr('class', 'first_iiii _kkkkkkk');
    $('#asdfk22').attr('class', 'asdfk22');
})

/*예약 후 정보 닫기 버튼*/
$('#ekerl444').on('click', function() {
    $('#first_iiii').attr('class', 'first_iiii');
    $('#asdfk22').attr('class', 'asdfk22 _kkkkkkk');
})
/*예약 후 정보 취소 버튼*/
$('#cnlth444').on('click', function() {
    $('#first_iiii').attr('class', 'first_iiii');
    $('#asdfk22').attr('class', 'asdfk22 _kkkkkkk');
})


/*------------------------------------------------------------------------------------*/

/*찾아오기 수정 버튼*/
$('#button_susususu').on('click', function() {
    $('#first_iiiii').attr('class', 'first_iiiii _kkkkkkk');
    $('#ckwdkdhrl').attr('class', 'ckwdkdhrl');
})

/*찾아오기 닫기 버튼*/
$('#ekerl54634').on('click', function() {
    $('#first_iiiii').attr('class', 'first_iiiii');
    $('#ckwdkdhrl').attr('class', 'ckwdkdhrl _kkkkkkk');
    $("#wjwkdgkrl").attr("disabled", true)
})

/*찾아오기 취소 버튼*/
$('#cnlth3435').on('click', function() {
    $('#first_iiiii').attr('class', 'first_iiiii');
    $('#ckwdkdhrl').attr('class', 'ckwdkdhrl _kkkkkkk');
    $("#wjwkdgkrl").attr("disabled", true)
})

/*찾아오기 텍스트 입력시 저장버튼 활성 버튼*/
$('#xprtmxm').on("change keydown paste textarea", function() {
    if ($("#xprtmxm").val() == '')
        $("#wjwkdgkrl").attr("disabled", false)
})


/*------------------------------------------------------------------------------------*/
/*게스트메뉴얼 수정 버튼*/
$('#susususuuuu').on('click', function() {
    $('#first_iiiiii').attr('class', 'first_iiiiii _kkkkkkk');
    $('#ckwdkdhrl1').attr('class', 'ckwdkdhrl1');
})

/*게스트메뉴얼 닫기 버튼*/
$('#ekerl567').on('click', function() {
    $('#first_iiiiii').attr('class', 'first_iiiiii');
    $('#ckwdkdhrl1').attr('class', 'ckwdkdhrl1 _kkkkkkk');
    $("#wjwkdgkrl1").attr("disabled", true)
})

/*게스트메뉴얼 취소 버튼*/
$('#cnlth567').on('click', function() {
    $('#first_iiiiii').attr('class', 'first_iiiiii');
    $('#ckwdkdhrl1').attr('class', 'ckwdkdhrl1 _kkkkkkk');
    $("#wjwkdgkrl1").attr("disabled", true)
})

/*게스트메뉴얼 텍스트 입력시 저장버튼 활성 버튼*/
$('#xprtmxm1').on("change keydown paste textarea", function() {
    if ($("#xprtmxm1").val() == '')
        $("#wjwkdgkrl1").attr("disabled", false)
})
/*------------------------------------------------------------------------------------*/

/*도착 상세정보 체크인 수정 버튼*/
$('#sususujjj').on('click', function() {
    $('#first_iiiiiiii').attr('class', 'first_iiiiiiii _kkkkkkk');
    $('#ckwdkdhrl111').attr('class', 'ckwdkdhrl11');
})
/*도착 상세정보 체크인 닫기 버튼*/
$('#ekerl999').on('click', function() {
    $('#first_iiiiiiii').attr('class', 'first_iiiiiiii');
    $('#ckwdkdhrl111').attr('class', 'ckwdkdhrl11 _kkkkkkk');
    $("#wjwkdqjxmszz").attr("disabled", true);

})

/*도착 상세정보  체크인 취소 버튼*/
$('#cnlth999').on('click', function() {
    $('#first_iiiiiiii').attr('class', 'first_iiiiiiii');
    $('#ckwdkdhrl111').attr('class', 'ckwdkdhrl11 _kkkkkkk');
    $("#wjwkdqjxmszz").attr("disabled", true);
})
/*도착 상세정보 체크인 텍스트 입력시 저장버튼 활성 버튼*/
$('#tkdtpqjxms').on("change keydown paste textarea", function() {
    if ($("#tkdtpqjxms").val() == '')
        $("#wjwkdqjxmszz").attr("disabled", false);
})
$('._83s1a2').on('click', function() {
    $('#wjwkdqjxmszz').attr("disabled", false);
})




/*------------------------------------------------------------------------------------*/
/*와이파이 수정 버튼*/
$('#sususuuuasd').on('click', function() {
    $('#first_iiiiiii').attr('class', 'first_iiiiiii _kkkkkkk');
    $('#ckwdkdhrl11').attr('class', 'ckwdkdhrl11');
})

/*와이파이 닫기 버튼*/
$('#ekerl777').on('click', function() {
    $('#first_iiiiiii').attr('class', 'first_iiiiiii');
    $('#ckwdkdhrl11').attr('class', 'ckwdkdhrl11 _kkkkkkk');
    $("#wjwkdgkrlrlrl").attr("disabled", true)
})

/*와이파이 취소 버튼*/
$('#cnlth777').on('click', function() {
    $('#first_iiiiiii').attr('class', 'first_iiiiiii');
    $('#ckwdkdhrl11').attr('class', 'ckwdkdhrl11 _kkkkkkk');
    $("#wjwkdgkrlrlrl").attr("disabled", true)
})

/*와이파이 비밀번호 텍스트 입력시 저장버튼 활성 버튼*/
$('#psssssword').on("change keydown paste textarea", function() {
    if ($("#psssssword").val() == '')
        $("#wjwkdgkrlrlrl").attr("disabled", false)
})
/*와이파이 이름 텍스트 입력시 저장버튼 활성 버튼*/
$('#namename').on("change keydown paste textarea", function() {
    if ($("#namename").val() == '')
        $("#wjwkdgkrlrlrl").attr("disabled", false)
})

/*------------------------------------------------------------------------------------*/
/* 피드백 팝업 on*/
$('#popup44').on('click', function() {
    $('#popupgg').show()
})
/* 피드백 팝업 off*/
$('#button4321').on('click', function() {
    $('#popupgg').hide()
    $('#button642').attr("disabled", true);
})

$('.pop0').on('click', function() {
    $('#button642').attr("disabled", false);
})


let id = parseInt($('#iddiv').text())
let mem_id = parseInt($('#iddiv2').text())
$(function() {
    let id = parseInt($('#iddiv').text())
    let mem_id = parseInt($('#iddiv2').text())
    console.log(mem_id)

    let lodging = new Vue({
        el: '#hostList',
        data: {
            lodgingApiResponse: {
                lodgingId: {}
            },
            lodgingRoomApiResponse: {},
            lodgingDurationApiResponse: {},
            lodgingBeforeApiResponse: {},
            lodgingIsresvApiResponse: {},
            lodgingLocationApiResponse: {},
            lodgingLocationDetailApiResponse: {},
            lodgingPicturesApiResponse: {},
            lodgingPolicyApiResponse: {},
            lodgingPriceApiResponse: {},
            lodgingRoleApiResponse: {},
            lodgingRoomApiResponse: {},
            lodgingRulesApiResponse: {},
            memberApiResponse: {}
        }
    });
    console.log(id)
    searchStart(id);

    function searchStart(id) {
        $.get("/api/room/hosTlist/" + id, function(response) {
            console.dir(response.data.lodgingApiResponse.lodgingId);
            lodging.data = response.data;
            console.log(lodging.data)
            $("#suk1").attr("href", "/pages/hostedit/" + lodging.data.lodgingApiResponse.lodgingId);
            $("#suk2").attr("href", "/pages/host_edit_pricing/" + lodging.data.lodgingApiResponse.lodgingId);
            $("#suk3").attr("href", "/pages/policies/" + lodging.data.lodgingApiResponse.lodgingId);
            $("#suk4").attr("href", "/pages/host_edit_for_guests/" + lodging.data.lodgingApiResponse.lodgingId);
        })
    }
})