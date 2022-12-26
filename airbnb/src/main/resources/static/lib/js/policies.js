function loadingProcess() {
    openLoading();
    // 타이머를 이용해 로딩창 종료
    setTimeout(closeLoading, 3000);
}

// 로딩창 키는 함수
function openLoading() {
    //화면 높이와 너비를 구합니다.
    let maskHeight = $(document).height();
    let maskWidth = window.document.body.clientWidth;
    //출력할 마스크를 설정해준다.
    let mask = "<div id='mask' style='position:absolute; z-index:9000; background-color:#000000; display:none; left:0; top:0;'></div>";
    // 로딩 이미지 주소 및 옵션
    let loadingImg = '';
    loadingImg += "<div id='loadingImg' style='position:absolute; top: calc(50% - (200px / 2)); width:100%; z-index:99999999;'>";
    loadingImg += " <img src='https://loadingapng.com/animation.php?image=4&fore_color=000000&back_color=FFFFFF&size=128x128&transparency=1&image_type=0&uncacher=75.5975991029623' style='position: relative; display: block; margin: 0px auto;'/>";
    loadingImg += "</div>";
    //레이어 추가
    $('body')
        .append(mask)
        .append(loadingImg)
    //마스크의 높이와 너비로 전체 화면을 채운다.
    $('#mask').css({
        'width': maskWidth,
        'height': maskHeight,
        'opacity': '0.3'
    });
    //마스크 표시
    $('#mask').show();
    //로딩 이미지 표시
    $('#loadingImg').show();
}

// 로딩창 끄는 함수
function closeLoading() {
    $('#mask, #loadingImg').hide();
    $('#mask, #loadingImg').empty();
}

let id = parseInt($('#iddiv').text())
let mem_id = parseInt($('#iddiv2').text())
$(function() {
    loadingProcess()
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


let radio1Value = $('#radio1_value').val()
$(function() {
    $(":radio[name='radio1'][value='" + radio1Value + "']").attr('checked', true);

    $.fn.radioSelect = function(val) {
        this.each(function() {
            let $this = $(this);
            if ($this.val() == val)
                $this.attr('checked', true);
        });
        return this;
    };

    $(":radio[name='radio1']").radioSelect(radio1Value);
})


/* --------------------------------------------------------------------------------------------------------*/


// // 환불 정책 수정 팝업
//
// $('#btn1').on('click', function(){
//     $('#content1').hide()
//     $('#popup1').css('display', 'block')
//     $("#save_btn1").attr("disabled", true)
// })
//
// $('#close_btn1').on('click', function(){
//     $('#content1').show()
//     $('#popup1').css('display', 'none')
// })
//
// $('#cancel_btn1').on('click', function(){
//     $('#content1').show()
//     $('#popup1').css('display', 'none')
// })
//
// $('._83s1a2').on("change",function(){
//     $("#save_btn1").attr("disabled", false)
// })
//
//
// $('._g4rlqtx').on("change",function(){
//     $("#save_btn1").attr("disabled", false)
// })
//
// // 즉시 예약 수정 팝업
// $('#btn2').on('click', function(){
//     $('#content2').hide()
//     $('#popup2').css('display', 'block')
//     $("#save_btn2").attr("disabled", true)
// })
//
// $('#close_btn2').on('click', function(){
//     $('#content2').show()
//     $('#popup2').css('display', 'none')
// })
//
// $('#cancel_btn2').on('click', function(){
//     $('#content2').show()
//     $('#popup2').css('display', 'none')
// })
//
// $('._83s1a2').on("change",function(){
//     $("#save_btn2").attr("disabled", false)
// })
//
//
// $('._g4rlqtx').on("change",function(){
//     $("#save_btn2").attr("disabled", false)
// })
//
// $('#slide_toggle2').click(function(){
//     $(this).toggleClass('_1x8lx0do _1hzx1vsg');
//     $('#slide2').toggleClass(' _16g1cyy8 _vr1ztso');
//     $('#slide_toggle2 svg').toggle();
//     $("#save_btn2").attr("disabled", false)
// })
//
// $('#slide_toggle3').click(function(){
//     $(this).toggleClass('_1x8lx0do _1hzx1vsg');
//     $('#slide3').toggleClass(' _16g1cyy8 _vr1ztso');
//     $('#slide_toggle3 svg').toggle();
//     $("#save_btn2").attr("disabled", false)
// })
//
// $('#slide_toggle4').click(function(){
//     $(this).toggleClass('_1x8lx0do _1hzx1vsg');
//     $('#slide4').toggleClass(' _16g1cyy8 _vr1ztso');
//     $('#slide_toggle4 svg').toggle();
//     $("#save_btn2").attr("disabled", false)
// })
//
//
// // 체크인 가능 시간 수정 팝업
// $('#btn3').on('click', function(){
//     $('#content3').hide()
//     $('#popup3').css('display', 'block')
//     $("#save_btn3").attr("disabled", true)
// })
//
// $('#close_btn3').on('click', function(){
//     $('#content3').show()
//     $('#popup3').css('display', 'none')
// })
//
// $('#cancel_btn3').on('click', function(){
//     $('#content3').show()
//     $('#popup3').css('display', 'none')
// })
//
// $('._1iwku6d').on('change', function(){
//     $("#save_btn3").attr("disabled", false)
// })
//
// // 체크 아웃 수정 팝업
//
// $('#btn4').on('click', function(){
//     $('#content4').hide()
//     $('#popup4').css('display', 'block')
//     $("#save_btn4").attr("disabled", true)
// })
//
// $('#close_btn4').on('click', function(){
//     $('#content4').show()
//     $('#popup4').css('display', 'none')
// })
//
// $('#cancel_btn4').on('click', function(){
//     $('#content4').show()
//     $('#popup4').css('display', 'none')
// })
//
// $('._1iwku6d').on('change', function(){
//     $("#save_btn4").attr("disabled", false)
// })
//
// // 추가 규칙 수정 팝업
//
// $('#btn5').on('click', function(){
//     $('#content5').hide()
//     $('#popup5').css('display', 'block')
//     $("#save_btn5").attr("disabled", true)
// })
//
// $('#close_btn5').on('click', function(){
//     $('#content5').show()
//     $('#popup5').css('display', 'none')
// })
//
// $('#cancel_btn5').on('click', function(){
//     $('#content5').show()
//     $('#popup5').css('display', 'none')
// })
//
// $('._159914b').on('change', function(){
//     $("#save_btn5").attr("disabled", false)
// })
//
// // 숙소 주요 용도 수정 팝업
// $('#btn6').on('click', function(){
//     $('#content6').hide()
//     $('#popup6').css('display', 'block')
//     $("#save_btn6").attr("disabled", true)
// })
//
// $('#close_btn6').on('click', function(){
//     $('#content6').show()
//     $('#popup6').css('display', 'none')
// })
//
// $('#cancel_btn6').on('click', function(){
//     $('#content6').show()
//     $('#popup6').css('display', 'none')
// })
//
// $('._83s1a2').on('change', function(){
//     $("#save_btn6").attr("disabled", false)
// })
//
// // 체크 박스 라벨
//
// // 어린이에게 적합함
// $(".check1").click(function () {
//     _id = $(this).attr("myp.suitableForChildren.row-toggle-DLS-toggle-no");
//     if ($(this).is(":checked")) {
//         $("label[for='" + _id + "']").addClass("checked");
//         $('#myp.suitableForChildren.row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
//         $('#myp.suitableForChildren.row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
//         $("#check_toggle1").attr('class', '_1hwl8fxn')
//         $("#check_toggle2").attr('class', '_15okx3g')
//     } else {
//         $("label[for='" + _id + "']").removeClass("checked");
//         $(this).attr('class', '._31v5fv');
//         $('#myp.suitableForChildren.row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
//         $("#check_toggle1").attr('class', '_15okx3g')
//         $("#check_toggle2").attr('class', '_1hwl8fxn')
//
//     }
// })
//
// $(".check2").click(function () {
//     _id = $(this).attr("myp.suitableForChildren.row-toggle-DLS-toggle-yes");
//     if ($(this).is(":checked")) {
//         $("label[for='" + _id + "']").addClass("checked");
//         $(this).attr('class', '_11mpi653');
//         $('#myp.suitableForChildren.row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
//         $("#check_toggle2").attr('class', '_1hwl8fxn')
//         $("#check_toggle1").attr('class', '_15okx3g')
//     } else {
//         $("label[for='" + _id + "']").removeClass("checked");
//         $("#check_toggle2").attr('class', '_15okx3g')
//     }
// })
//
//
// // 유아에게 적합함
//
// $(".check3").click(function () {
//     _id = $(this).attr("myp.suitableForChildren.row-toggle-DLS-toggle-no");
//     if ($(this).is(":checked")) {
//         $("label[for='" + _id + "']").addClass("checked");
//         $('#myp.suitableForChildren.row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
//         $('#myp.suitableForChildren.row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
//         $("#check_toggle3").attr('class', '_1hwl8fxn')
//         $("#check_toggle4").attr('class', '_15okx3g')
//     } else {
//         $("label[for='" + _id + "']").removeClass("checked");
//         $(this).attr('class', '._31v5fv');
//         $('#myp.suitableForChildren.row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
//         $("#check_toggle3").attr('class', '_15okx3g')
//         $("#check_toggle4").attr('class', '_1hwl8fxn')
//
//     }
// })
//
// $(".check4").click(function () {
//     _id = $(this).attr("myp.suitableForChildren.row-toggle-DLS-toggle-yes");
//     if ($(this).is(":checked")) {
//         $("label[for='" + _id + "']").addClass("checked");
//         $(this).attr('class', '_11mpi653');
//         $('#myp.suitableForChildren.row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
//         $("#check_toggle4").attr('class', '_1hwl8fxn')
//         $("#check_toggle3").attr('class', '_15okx3g')
//     } else {
//         $("label[for='" + _id + "']").removeClass("checked");
//         $("#check_toggle3").attr('class', '_15okx3g')
//     }
// })
//
//
// // 반려동물 입실가능
//
// $(".check5").click(function () {
//     _id = $(this).attr("myp.suitableForChildren.row-toggle-DLS-toggle-no");
//     if ($(this).is(":checked")) {
//         $("label[for='" + _id + "']").addClass("checked");
//         $('#myp.suitableForChildren.row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
//         $('#myp.suitableForChildren.row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
//         $("#check_toggle5").attr('class', '_1hwl8fxn')
//         $("#check_toggle6").attr('class', '_15okx3g')
//     } else {
//         $("label[for='" + _id + "']").removeClass("checked");
//         $(this).attr('class', '._31v5fv');
//         $('#myp.suitableForChildren.row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
//         $("#check_toggle5").attr('class', '_15okx3g')
//         $("#check_toggle6").attr('class', '_1hwl8fxn')
//
//     }
// })
//
// $(".check6").click(function () {
//     _id = $(this).attr("myp.suitableForChildren.row-toggle-DLS-toggle-yes");
//     if ($(this).is(":checked")) {
//         $("label[for='" + _id + "']").addClass("checked");
//         $(this).attr('class', '_11mpi653');
//         $('#myp.suitableForChildren.row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
//         $("#check_toggle6").attr('class', '_1hwl8fxn')
//         $("#check_toggle5").attr('class', '_15okx3g')
//     } else {
//         $("label[for='" + _id + "']").removeClass("checked");
//         $("#check_toggle5").attr('class', '_15okx3g')
//     }
// })
//
// // 흡연 가능
//
// $(".check7").click(function () {
//     _id = $(this).attr("myp.suitableForChildren.row-toggle-DLS-toggle-no");
//     if ($(this).is(":checked")) {
//         $("label[for='" + _id + "']").addClass("checked");
//         $('#myp.suitableForChildren.row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
//         $('#myp.suitableForChildren.row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
//         $("#check_toggle7").attr('class', '_1hwl8fxn')
//         $("#check_toggle8").attr('class', '_15okx3g')
//     } else {
//         $("label[for='" + _id + "']").removeClass("checked");
//         $(this).attr('class', '._31v5fv');
//         $('#myp.suitableForChildren.row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
//         $("#check_toggle7").attr('class', '_15okx3g')
//         $("#check_toggle8").attr('class', '_1hwl8fxn')
//
//     }
// })
//
// $(".check8").click(function () {
//     _id = $(this).attr("myp.suitableForChildren.row-toggle-DLS-toggle-yes");
//     if ($(this).is(":checked")) {
//         $("label[for='" + _id + "']").addClass("checked");
//         $(this).attr('class', '_11mpi653');
//         $('#myp.suitableForChildren.row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
//         $("#check_toggle8").attr('class', '_1hwl8fxn')
//         $("#check_toggle7").attr('class', '_15okx3g')
//     } else {
//         $("label[for='" + _id + "']").removeClass("checked");
//         $("#check_toggle7").attr('class', '_15okx3g')
//     }
// })
//
// // 이벤트 허용
//
// $(".check9").click(function () {
//     _id = $(this).attr("myp.suitableForChildren.row-toggle-DLS-toggle-no");
//     if ($(this).is(":checked")) {
//         $("label[for='" + _id + "']").addClass("checked");
//         $('#myp.suitableForChildren.row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
//         $('#myp.suitableForChildren.row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
//         $("#check_toggle9").attr('class', '_1hwl8fxn')
//         $("#check_toggle10").attr('class', '_15okx3g')
//     } else {
//         $("label[for='" + _id + "']").removeClass("checked");
//         $(this).attr('class', '._31v5fv');
//         $('#myp.suitableForChildren.row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
//         $("#check_toggle9").attr('class', '_15okx3g')
//         $("#check_toggle10").attr('class', '_1hwl8fxn')
//
//     }
// })
//
// $(".check10").click(function () {
//     _id = $(this).attr("myp.suitableForChildren.row-toggle-DLS-toggle-yes");
//     if ($(this).is(":checked")) {
//         $("label[for='" + _id + "']").addClass("checked");
//         $(this).attr('class', '_11mpi653');
//         $('#myp.suitableForChildren.row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
//         $("#check_toggle10").attr('class', '_1hwl8fxn')
//         $("#check_toggle9").attr('class', '_15okx3g')
//     } else {
//         $("label[for='" + _id + "']").removeClass("checked");
//         $("#check_toggle9").attr('class', '_15okx3g')
//     }
// })
//
// // 체크 박스 라벨 끝
//
//
// // 게스트 필수조건 슬라이드 토글
//
// $('#slide_toggle1').click(function(){
//     $(this).toggleClass('_1x8lx0do _1hzx1vsg');
//     $('#slide1').toggleClass(' _16g1cyy8 _vr1ztso');
//     $('#slide_toggle1 svg').toggle();
// })



// // 참고할거

// $('#ekerl5').on('click',function(){
//     $('#first_5').attr('class', 'first_5 _kkkkkkk');
//     $('#susu5').attr('class', 'susu5');
//     $("#wjwkd5").attr("disabled", true)
// })
// /*숙소상태 취소 버튼 눌렀을 때*/ 
// $('#cnlth5').on('click',function(){
//     $('#first_5').attr('class', 'first_5 _kkkkkkk');
//     $('#susu5').attr('class', 'susu5');
//     $("#wjwkd5").attr("disabled", true)
// })
// /*숙소상태 셀렉트 시 저장 활성 */ 
// $('._83s1a2').on("change",function(){
//     $("#wjwkd5").attr("disabled", false)
// })
// /*숙소상태 셀렉트 시 저장 활성 */ 
// $('._g4rlqtx').on("change",function(){
//     $("#wjwkd5").attr("disabled", false)
// })

/*------------------------------------------------ vue -----------------------------------------------------*/


$(function() {
    let id = parseInt($('#iddiv').text())

    /*------------- 숙소 제목, 숙소 상태 vue -----------------*/
    let lodgingBasic = new Vue({
        el: '#lodging_basic',
        data: {
            lodgingTitle: {},
            lodgingStatus: {}
        }
    });

    lodgingBasicsearch(id); // function 실행시켜주기 위해서 함수 호출

    function lodgingBasicsearch(id) {
        $.get("/api/room/hostoption15_1/" + id, function(response) {
            console.dir(response)
            lodgingBasic.data = response.data;
            lodgingBasic.lodgingTitle = response.data.lodgingTitle;
            lodgingBasic.lodgingStatus = response.data.lodgingStatus;
            console.log(lodgingBasic.data)
            $("#lodging_basic").val(response.data);
        })
    }

    /*---------------- 정책 vue ------------- */
    let policy = new Vue({
        el: '#policy',
        data: {
            policyStanard: {},
            policyLongstay: {},
            immediHow: {},
            immediReqire: {},
            checkinStart: {},
            checkinEnd: {},
            checkoutTime: {}
        },
        methods: {
            /* 환불 정책 수정 클릭 시 */
            openPopup1() {
                $('#content1').hide()
                $('#popup1').css('display', 'block')
                $("#save_btn1").attr("disabled", true)
            },
            /* 환불 정책 닫기 클릭 시 */
            closePopup1() {
                $('#content1').show()
                $('#popup1').css('display', 'none')
            },
            changeBtn1() {
                $("#save_btn1").attr("disabled", false)
            },
            saveBtn1() {
                let jsonData = {
                    transaction_time: new Date(),
                    resultCode: "ok",
                    description: "ok",
                    data: {
                        lodgingId: parseInt($('#iddiv').text()),
                        policyStanard: $('input[name=radio1]:checked').val(),
                        policyLongstay: $('input[name=radio2]:checked').val()
                    }
                }

                $.post({
                    url: '/api/room/hostedit_18',
                    data: JSON.stringify(jsonData),
                    dataType: 'json',
                    contentType: 'application/json',
                    success: function(response) {
                        policy.policyStanard = response.data.policyStanard;
                        policy.policyLongstay = response.data.policyLongstay;
                        $('#content1').show()
                        $('#popup1').css('display', 'none')
                        location.href = '/pages/policies/' + parseInt($('#iddiv').text());
                        // alert('등록성공!');
                    },
                    error: function() {
                        // alert('다시 시도해주세요!');
                        location.reload();
                    }
                });
            },
            /* 즉시 예약 수정 클릭시 */
            openPopup2() {
                $('#content2').hide()
                $('#popup2').css('display', 'block')
                $("#save_btn2").attr("disabled", true)
            },
            /* 즉시 예약 닫기 클릭시 */
            closePopup2() {
                $('#content2').show()
                $('#popup2').css('display', 'none')
            },
            /* 즉시 예약 값 변경시 */
            changeBtn2() {
                $("#save_btn2").attr("disabled", false)
            },
            /* 즉시 예약 변경된 값 업데이트 */
            saveBtn2() {
                let jsonData = {
                    transaction_time: new Date(),
                    resultCode: "ok",
                    description: "ok",
                    data: {
                        lodgingId: parseInt($('#iddiv').text()),
                        immediHow: $('input[name=radio3]:checked').val(),
                        immediReqire: 'N'
                    }
                }

                $.post({
                    url: '/api/room/hostedit_19',
                    data: JSON.stringify(jsonData),
                    dataType: 'json',
                    contentType: 'application/json',
                    success: function(response) {
                        policy.immediHow = response.data.immediHow;
                        policy.immediReqire = response.data.immediReqire;
                        $('#content1').show()
                        $('#popup1').css('display', 'none')
                        location.href = '/pages/policies/' + parseInt($('#iddiv').text());
                        // alert('등록성공!');
                    },
                    error: function() {
                        // alert('다시 시도해주세요!');
                        location.reload();
                    }
                })
            },
            /* 체크인 가능 시간 수정 클릭 시 */
            openPopup3() {
                $('#content3').hide()
                $('#popup3').css('display', 'block')
                $("#save_btn3").attr("disabled", true)
            },
            /* 체크인 가능 시간 닫기 클릭 시 */
            closePopup3() {
                $('#content3').show()
                $('#popup3').css('display', 'none')
            },
            /* 체크인 가능 시간 값 변경 시 */
            changeBtn3() {
                $("#save_btn3").attr("disabled", false)
            },
            /* 체크인 가능 시간 값 업데이트 */
            saveBtn3() {
                let jsonData = {
                    transaction_time: new Date(),
                    resultCode: "ok",
                    description: "ok",
                    data: {
                        lodgingId: parseInt($('#iddiv').text()),
                        checkinStart: $('#select1').val(),
                        checkinEnd: $('#select2').val()
                    }
                }

                $.post({
                    url: '/api/room/hostedit_20',
                    data: JSON.stringify(jsonData),
                    dataType: 'json',
                    contentType: 'application/json',
                    success: function(response) {
                        location.href = '/pages/policies/' + parseInt($('#iddiv').text());
                        policy.checkinStart = response.data.checkinStart;
                        policy.checkinEnd = response.data.checkinEnd;
                        // alert('등록성공!');
                    },
                    error: function() {
                        // alert('다시 시도해주세요!');
                        location.reload();
                    }
                })
            },
            /* 체크인 아웃 시간 수정 클릭 시 */
            openPopup4() {
                $('#content4').hide()
                $('#popup4').css('display', 'block')
                $("#save_btn4").attr("disabled", true)
            },
            /* 체크인 가능 시간 닫기 클릭 시 */
            closePopup4() {
                $('#content4').show()
                $('#popup4').css('display', 'none')
            },
            /* 체크인 가능 시간 값 변경 시 */
            changeBtn4() {
                $("#save_btn4").attr("disabled", false)
            },
            /* 체크인 가능 시간 값 업데이트 */
            saveBtn4() {
                let jsonData = {
                    transaction_time: new Date(),
                    resultCode: "ok",
                    description: "ok",
                    data: {
                        lodgingId: parseInt($('#iddiv').text()),
                        checkoutTime: $('#select3').val()
                    }
                }

                $.post({
                    url: '/api/room/hostedit_21',
                    data: JSON.stringify(jsonData),
                    dataType: 'json',
                    contentType: 'application/json',
                    success: function(response) {
                        policy.checkoutTime = response.data.checkoutTime;
                        $('#content3').show()
                        $('#popup3').css('display', 'none')
                        location.href = '/pages/policies/' + parseInt($('#iddiv').text());
                        // alert('등록성공!');
                    },
                    error: function() {
                        // alert('다시 시도해주세요!');
                        location.reload();
                    }
                })
            }
        }
    });

    policysearch1(id); // function 실행시켜주기 위해서 함수 호출

    function policysearch1(id) {
        $.get("/api/room/lodging_policy_1/" + id, function(response) {
            console.dir(response)
            policy.data = response.data;
            policy.policyStanard = response.data.policyStanard;
            policy.policyLongstay = response.data.policyLongstay;
            policy.immediHow = response.data.immediHow;
            policy.immediReqire = response.data.immediReqire;
            console.log(policy.data)
            $("#policy").val(response.data);

            /* radio check 유지 */
            $(":radio[name='radio1'][value='" + policy.policyStanard + "']").attr('checked', true);

            $(":radio[name='radio2']").each(function() {
                let $this = $(this);
                if ($this.val() == policy.policyLongstay)
                    $this.attr('checked', true);
            });

            $(":radio[name='radio3']").each(function() {
                let $this = $(this);
                if ($this.val() == policy.immediHow)
                    $this.attr('checked', true);
            });

            $.fn.radioSelect = function(val) {
                this.each(function() {
                    let $this = $(this);
                    if ($this.val() == val)
                        $this.attr('checked', true);
                });
                return this;
            };
            $(":radio[name='radio1']").radioSelect(policy.policyStanard);
            $(":radio[name='radio2']").radioSelect(policy.policyLongstay);
            $(":radio[name='radio3']").radioSelect(policy.immediHow);
        })
    }

    policysearch2(id); // function 실행시켜주기 위해서 함수 호출

    function policysearch2(id) {
        $.get("/api/room/lodging_before_1/" + id, function(response) {
            console.dir(response)
            policy.data = response.data;
            policy.checkinStart = response.data.checkinStart;
            policy.checkinEnd = response.data.checkinEnd;
            policy.checkoutTime = response.data.checkoutTime;
            console.log(policy.data)
            $("#policy").val(response.data);
        })
    }

    // /*---------------- 숙소 이용규칙 vue ------------- */
    // let lodging_rules = new Vue({
    //     el: '#lodging_rules',
    //     data: {
    //         rulesChild: {},
    //         rulesInfant: {},
    //         rulesPet: {},
    //         rulesSmoking: {},
    //         rulesEvent: {},
    //         rulesExtra: {}
    //     },
    //     methods: {
    //         saveClick1(){
    //
    //             let jsonData = {
    //                 transaction_time: new Date(),
    //                 resultCode: "ok",
    //                 description: "ok",
    //                 data: {
    //                     lodgingId: parseInt($('#iddiv').text()),
    //                     rulesChild: $('input[name=click1]:checked').val()
    //                 }
    //             }
    //
    //             $.post({
    //                 url: '/api/room/hostedit_22',
    //                 data: JSON.stringify(jsonData),
    //                 dataType: 'json',
    //                 contentType: 'application/json',
    //                 success: function (response) {
    //                     policy.rulesChild = response.data.rulesChild;
    //                     location.href = '/pages/policies/' + parseInt($('#iddiv').text());
    //                     // alert('등록성공!');
    //                 },
    //                 error: function () {
    //                     // alert('다시 시도해주세요!');
    //                     location.reload();
    //                 }
    //             })
    //         }
    //
    //     }
    // });
    //
    // lodgingRulessearch(id); // function 실행시켜주기 위해서 함수 호출
    //
    // function lodgingRulessearch(id) {
    //     $.get("/api/room/lodging_policy_1/" + id, function (response){
    //         console.dir(response)
    //         lodging_rules.data = response.data;
    //         lodging_rules.rulesChild = response.data.rulesChild;
    //         lodging_rules.rulesInfant = response.data.rulesInfant;
    //         lodging_rules.rulesPet = response.data.rulesPet;
    //         lodging_rules.rulesSmoking = response.data.rulesSmoking;
    //         lodging_rules.rulesEvent = response.data.rulesEvent;
    //         lodging_rules.rulesExtra = response.data.rulesExtra;
    //         console.log(lodging_rules.data)
    //         $("#lodging_rules").val(response.data);
    //
    //         /* radio check 유지 */
    //         $(":radio[name='click1'][value='" + lodging_rules.rulesChild + "']").attr('checked', true);
    //
    //         // $(":radio[name='radio2']").each(function() {
    //         //     let $this = $(this);
    //         //     if($this.val() == lodging_rules.rulesChild)
    //         //         $this.attr('checked', true);
    //         // });
    //         //
    //         // $(":radio[name='radio3']").each(function() {
    //         //     let $this = $(this);
    //         //     if($this.val() == policy.immediHow)
    //         //         $this.attr('checked', true);
    //         // });
    //
    //         $.fn.radioSelect = function(val) {
    //             this.each(function() {
    //                 let $this = $(this);
    //                 if($this.val() == val)
    //                     $this.attr('checked', true);
    //             });
    //             return this;
    //         };
    //         $(":radio[name='click1']").radioSelect(lodging_rules.rulesChild);
    //         // $(":radio[name='radio2']").radioSelect(policy.policyLongstay);
    //         // $(":radio[name='radio3']").radioSelect(policy.immediHow);
    //
    //         /*------ 토글 -------*/
    //         _id = $(this).attr("myp.suitableForChildren.row-toggle-DLS-toggle-no");
    //         if ($(this).val() === 'N') {
    //             $("label[for='" + _id + "']").addClass("checked");
    //             $('#myp.suitableForChildren.row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
    //             $('#myp.suitableForChildren.row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
    //             $("#check_toggle1").attr('class', '_1hwl8fxn')
    //             $("#check_toggle2").attr('class', '_15okx3g')
    //         } else if($(this).val() === 'Y') {
    //             $("label[for='" + _id + "']").removeClass("checked");
    //             $(this).attr('class', '._31v5fv');
    //             $('#myp.suitableForChildren.row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
    //             $("#check_toggle1").attr('class', '_15okx3g')
    //             $("#check_toggle2").attr('class', '_1hwl8fxn')
    //         }
    //     })
    // }

    // /*---------------- 게스트 필수조건 vue ------------- */
    // let prerequisite = new Vue({
    //     el: '#prerequisite',
    //     data: {
    //         requirePic: {}
    //
    //     },
    //     methods: {
    //
    //     }
    // });
    //
    // prerequisitesearch(id); // function 실행시켜주기 위해서 함수 호출
    //
    // function prerequisitesearch(id) {
    //     $.get("/api/room/lodging_requires_1/" + id, function (response){
    //         console.dir(response)
    //         prerequisite.data = response.data;
    //         prerequisite.requirePic = response.data.requirePic;
    //         console.log(prerequisite.data)
    //         $("#prerequisite").val(response.data);
    //     })
    // }

    /*---------------- 숙소 이용 규칙 추가 규칙 ----------------*/

    let addrules = new Vue({
        el: '#addrules',
        data: {
            rulesExtra: {}

        },
        methods: {
            openPopup5() {
                $('#content5').hide()
                $('#popup5').css('display', 'block')
                $("#save_btn5").attr("disabled", true)
            },
            closePopup5() {
                $('#content5').show()
                $('#popup5').css('display', 'none')
            },
            changeBtn5() {
                $("#save_btn5").attr("disabled", false)
            },
            saveBtn5() {
                let jsonData = {
                    transaction_time: new Date(),
                    resultCode: "ok",
                    description: "ok",
                    data: {
                        lodgingId: parseInt($('#iddiv').text()),
                        rulesExtra: $('#addrules_text').val()
                    }
                }

                $.post({
                    url: '/api/room/hostedit_27',
                    data: JSON.stringify(jsonData),
                    dataType: 'json',
                    contentType: 'application/json;charset=utf-8',
                    success: function(response) {
                        console.log(response.data)
                        addrules.rulesExtra = response.data.rulesExtra;
                        $('#content5').show()
                        $('#popup5').css('display', 'none')
                        location.href = '/pages/policies/' + parseInt($('#iddiv').text());
                        // alert('등록성공!');
                    },
                    error: function() {
                        // alert('다시 시도해주세요!');
                        location.reload();
                    }
                })
            }
        }
    });

    addrulessearch(id); // function 실행시켜주기 위해서 함수 호출

    function addrulessearch(id) {
        $.get("/api/room/lodging_rules_1/" + id, function(response) {
            console.dir(response)
            addrules.data = response.data;
            addrules.rulesExtra = response.data.rulesExtra;
            console.log(addrules.data)
            $("#addrules").val(response.data);
        })
    }

    /*---------------- 법률과 규정 vue ------------- */

    let lodging_role = new Vue({
        el: '#lodging_role',
        data: {
            rolesRo: {}

        },
        methods: {
            openPopup6() {
                $('#content6').hide()
                $('#popup6').css('display', 'block')
                $("#save_btn6").attr("disabled", true)
            },
            closePopup6() {
                $('#content6').show()
                $('#popup6').css('display', 'none')
            },
            changeBtn6() {
                $("#save_btn6").attr("disabled", false)
            },
            saveBtn6() {
                let jsonData = {
                    transaction_time: new Date(),
                    resultCode: "ok",
                    description: "ok",
                    data: {
                        lodgingId: parseInt($('#iddiv').text()),
                        rolesRo: $('input[name=radio4]:checked').val(),
                    }
                }

                $.post({
                    url: '/api/room/hostedit_28',
                    data: JSON.stringify(jsonData),
                    dataType: 'json',
                    contentType: 'application/json',
                    success: function(response) {
                        lodging_role.rolesRo = response.data.rolesRo;
                        $('#content6').show()
                        $('#popup6').css('display', 'none')
                        location.href = '/pages/policies/' + parseInt($('#iddiv').text());
                        // alert('등록성공!');
                    },
                    error: function() {
                        // alert('다시 시도해주세요!');
                        location.reload();
                    }
                })
            }
        }
    });

    lodgingRolesearch(id); // function 실행시켜주기 위해서 함수 호출

    function lodgingRolesearch(id) {
        $.get("/api/room/lodging_role_1/" + id, function(response) {
            console.dir(response)
            lodging_role.data = response.data;
            lodging_role.rolesRo = response.data.rolesRo;
            console.log(lodging_role.data)
            $("#lodging_role").val(response.data);

            /* radio check 유지 */
            $(":radio[name='radio4'][value='" + lodging_role.rolesRo + "']").attr('checked', true);

            $.fn.radioSelect = function(val) {
                this.each(function() {
                    let $this = $(this);
                    if ($this.val() == val)
                        $this.attr('checked', true);
                });
                return this;
            };
            $(":radio[name='radio4']").radioSelect(lodging_role.rolesRo);

        })
    }

})



$(function() {
    searchrules(id);

    function searchrules(id) {
        $.get("/api/room/hosTlist/" + id, function(response) {
            response.data;
            console.log(response.data)
            console.log(response.data.lodgingRulesApiResponse.rulesChild)
            $('#hidden1').val(response.data.lodgingRulesApiResponse.rulesChild)
            $('#hidden2').val(response.data.lodgingRulesApiResponse.rulesInfant)
            $('#hidden3').val(response.data.lodgingRulesApiResponse.rulesPet)
            $('#hidden4').val(response.data.lodgingRulesApiResponse.rulesSmoking)
            $('#hidden5').val(response.data.lodgingRulesApiResponse.rulesEvent)
            if ($('#hidden1').val() === 'N') {
                $('#check_toggle1').removeClass('_15okx3g').addClass('_1hwl8fxn')
                $('#check_toggle2').removeClass('_1hwl8fxn').addClass('_15okx3g')
            }
            if ($('#hidden1').val() === 'Y') {
                $('#check_toggle2').removeClass('_15okx3g').addClass('_1hwl8fxn')
                $('#check_toggle1').removeClass('_1hwl8fxn').addClass('_15okx3g')
            }

            if ($('#hidden2').val() === 'N') {
                $('#check_toggle3').removeClass('_15okx3g').addClass('_1hwl8fxn')
                $('#check_toggle4').removeClass('_1hwl8fxn').addClass('_15okx3g')
            }
            if ($('#hidden2').val() === 'Y') {
                $('#check_toggle4').removeClass('_15okx3g').addClass('_1hwl8fxn')
                $('#check_toggle3').removeClass('_1hwl8fxn').addClass('_15okx3g')
            }

            if ($('#hidden3').val() === 'N') {
                $('#check_toggle5').removeClass('_15okx3g').addClass('_1hwl8fxn')
                $('#check_toggle6').removeClass('_1hwl8fxn').addClass('_15okx3g')
            }
            if ($('#hidden3').val() === 'Y') {
                $('#check_toggle6').removeClass('_15okx3g').addClass('_1hwl8fxn')
                $('#check_toggle5').removeClass('_1hwl8fxn').addClass('_15okx3g')
            }

            if ($('#hidden4').val() === 'N') {
                $('#check_toggle7').removeClass('_15okx3g').addClass('_1hwl8fxn')
                $('#check_toggle8').removeClass('_1hwl8fxn').addClass('_15okx3g')
            }
            if ($('#hidden4').val() === 'Y') {
                $('#check_toggle8').removeClass('_15okx3g').addClass('_1hwl8fxn')
                $('#check_toggle7').removeClass('_1hwl8fxn').addClass('_15okx3g')
            }

            if ($('#hidden5').val() === 'N') {
                $('#check_toggle9').removeClass('_15okx3g').addClass('_1hwl8fxn')
                $('#check_toggle10').removeClass('_1hwl8fxn').addClass('_15okx3g')
            }
            if ($('#hidden5').val() === 'Y') {
                $('#check_toggle10').removeClass('_15okx3g').addClass('_1hwl8fxn')
                $('#check_toggle9').removeClass('_1hwl8fxn').addClass('_15okx3g')
            }

        })
    }
})

function saveclick1() {
    $('.check1').removeClass('_15okx3g').addClass('_1hwl8fxn')
    $('.check2').removeClass('_1hwl8fxn').addClass('_15okx3g')
    $('#hidden1').val('N')
    let jsonData = {
        transaction_time: new Date(),
        resultCode: "ok",
        description: "ok",
        data: {
            lodgingId: parseInt($('#iddiv').text()),
            rulesChild: $('#hidden1').val()
        }
    }

    $.post({
        url: '/api/room/hostedit_22',
        data: JSON.stringify(jsonData),
        dataType: 'json',
        contentType: 'application/json',
        success: function(response) {
            location.href = '/pages/policies/' + parseInt($('#iddiv').text());
        },
        error: function() {
            location.reload();
        }
    });
}

function saveclick11() {
    $('.check2').removeClass('_15okx3g').addClass('_1hwl8fxn')
    $('.check1').removeClass('_1hwl8fxn').addClass('_15okx3g')
    $('#hidden1').val('Y')
    let jsonData = {
        transaction_time: new Date(),
        resultCode: "ok",
        description: "ok",
        data: {
            lodgingId: parseInt($('#iddiv').text()),
            rulesChild: $('#hidden1').val()
        }
    }

    $.post({
        url: '/api/room/hostedit_22',
        data: JSON.stringify(jsonData),
        dataType: 'json',
        contentType: 'application/json',
        success: function(response) {
            location.href = '/pages/policies/' + parseInt($('#iddiv').text());
        },
        error: function() {
            location.reload();
        }
    });
}

function saveclick2() {
    $('.check3').removeClass('_15okx3g').addClass('_1hwl8fxn')
    $('.check4').removeClass('_1hwl8fxn').addClass('_15okx3g')
    $('#hidden2').val('N')
    let jsonData = {
        transaction_time: new Date(),
        resultCode: "ok",
        description: "ok",
        data: {
            lodgingId: parseInt($('#iddiv').text()),
            rulesInfant: $('#hidden2').val()
        }
    }

    $.post({
        url: '/api/room/hostedit_23',
        data: JSON.stringify(jsonData),
        dataType: 'json',
        contentType: 'application/json',
        success: function(response) {
            location.href = '/pages/policies/' + parseInt($('#iddiv').text());
        },
        error: function() {
            location.reload();
        }
    });
}

function saveclick22() {
    $('.check4').removeClass('_15okx3g').addClass('_1hwl8fxn')
    $('.check3').removeClass('_1hwl8fxn').addClass('_15okx3g')
    $('#hidden2').val('Y')
    let jsonData = {
        transaction_time: new Date(),
        resultCode: "ok",
        description: "ok",
        data: {
            lodgingId: parseInt($('#iddiv').text()),
            rulesInfant: $('#hidden2').val()
        }
    }

    $.post({
        url: '/api/room/hostedit_23',
        data: JSON.stringify(jsonData),
        dataType: 'json',
        contentType: 'application/json',
        success: function(response) {
            location.href = '/pages/policies/' + parseInt($('#iddiv').text());
        },
        error: function() {
            location.reload();
        }
    });
}

function saveclick3() {
    $('.check5').removeClass('_15okx3g').addClass('_1hwl8fxn')
    $('.check6').removeClass('_1hwl8fxn').addClass('_15okx3g')
    $('#hidden3').val('N')
    let jsonData = {
        transaction_time: new Date(),
        resultCode: "ok",
        description: "ok",
        data: {
            lodgingId: parseInt($('#iddiv').text()),
            rulesPet: $('#hidden3').val()
        }
    }

    $.post({
        url: '/api/room/hostedit_24',
        data: JSON.stringify(jsonData),
        dataType: 'json',
        contentType: 'application/json',
        success: function(response) {
            location.href = '/pages/policies/' + parseInt($('#iddiv').text());
        },
        error: function() {
            location.reload();
        }
    });
}

function saveclick33() {
    $('.check6').removeClass('_15okx3g').addClass('_1hwl8fxn')
    $('.check5').removeClass('_1hwl8fxn').addClass('_15okx3g')
    $('#hidden3').val('Y')
    let jsonData = {
        transaction_time: new Date(),
        resultCode: "ok",
        description: "ok",
        data: {
            lodgingId: parseInt($('#iddiv').text()),
            rulesPet: $('#hidden3').val()
        }
    }

    $.post({
        url: '/api/room/hostedit_24',
        data: JSON.stringify(jsonData),
        dataType: 'json',
        contentType: 'application/json',
        success: function(response) {
            location.href = '/pages/policies/' + parseInt($('#iddiv').text());
        },
        error: function() {
            location.reload();
        }
    });
}

function saveclick4() {
    $('.check7').removeClass('_15okx3g').addClass('_1hwl8fxn')
    $('.check8').removeClass('_1hwl8fxn').addClass('_15okx3g')
    $('#hidden4').val('N')
    let jsonData = {
        transaction_time: new Date(),
        resultCode: "ok",
        description: "ok",
        data: {
            lodgingId: parseInt($('#iddiv').text()),
            rulesSmoking: $('#hidden4').val()
        }
    }

    $.post({
        url: '/api/room/hostedit_25',
        data: JSON.stringify(jsonData),
        dataType: 'json',
        contentType: 'application/json',
        success: function(response) {
            location.href = '/pages/policies/' + parseInt($('#iddiv').text());
        },
        error: function() {
            location.reload();
        }
    });
}

function saveclick44() {
    $('.check8').removeClass('_15okx3g').addClass('_1hwl8fxn')
    $('.check7').removeClass('_1hwl8fxn').addClass('_15okx3g')
    $('#hidden4').val('Y')
    let jsonData = {
        transaction_time: new Date(),
        resultCode: "ok",
        description: "ok",
        data: {
            lodgingId: parseInt($('#iddiv').text()),
            rulesSmoking: $('#hidden4').val()
        }
    }

    $.post({
        url: '/api/room/hostedit_25',
        data: JSON.stringify(jsonData),
        dataType: 'json',
        contentType: 'application/json',
        success: function(response) {
            location.href = '/pages/policies/' + parseInt($('#iddiv').text());
        },
        error: function() {
            location.reload();
        }
    });
}

function saveclick5() {
    $('.check9').removeClass('_15okx3g').addClass('_1hwl8fxn')
    $('.check10').removeClass('_1hwl8fxn').addClass('_15okx3g')
    $('#hidden5').val('N')
    let jsonData = {
        transaction_time: new Date(),
        resultCode: "ok",
        description: "ok",
        data: {
            lodgingId: parseInt($('#iddiv').text()),
            rulesEvent: $('#hidden5').val()
        }
    }

    $.post({
        url: '/api/room/hostedit_26',
        data: JSON.stringify(jsonData),
        dataType: 'json',
        contentType: 'application/json',
        success: function(response) {
            location.href = '/pages/policies/' + parseInt($('#iddiv').text());
        },
        error: function() {
            location.reload();
        }
    });
}

function saveclick55() {
    $('.check10').removeClass('_15okx3g').addClass('_1hwl8fxn')
    $('.check9').removeClass('_1hwl8fxn').addClass('_15okx3g')
    $('#hidden5').val('Y')
    let jsonData = {
        transaction_time: new Date(),
        resultCode: "ok",
        description: "ok",
        data: {
            lodgingId: parseInt($('#iddiv').text()),
            rulesEvent: $('#hidden5').val()
        }
    }

    $.post({
        url: '/api/room/hostedit_26',
        data: JSON.stringify(jsonData),
        dataType: 'json',
        contentType: 'application/json',
        success: function(response) {
            location.href = '/pages/policies/' + parseInt($('#iddiv').text());
        },
        error: function() {
            location.reload();
        }
    });
}