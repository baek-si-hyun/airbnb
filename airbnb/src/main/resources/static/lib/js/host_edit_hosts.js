/* 공동 호스트 팝업 on*/
$('#rhdehdghtmxm').on('click', function() {
    $('#popup1').show()
})
/* 공동 호스트 팝업 off*/
$('#button123').on('click', function() {
    $('#popup1').hide()
})

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