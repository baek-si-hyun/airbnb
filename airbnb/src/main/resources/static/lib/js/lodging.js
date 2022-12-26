let mem_id = parseInt($('#iddiv2').text())
let lodging_id = parseInt($('#iddiv').text())
$(function() {
    // 세부사항 출력
    let mem_id = parseInt($('#iddiv2').text())
    let lodging_id = parseInt($('#iddiv').text())
    let hostList = new Vue({
        el: '#hostList',
        data: {
            list: {
                lodgingId: {},
                lodgingTitle: {},
                lodgingPic: {},
                lodgingPicurl: {},
                lodgingStatus: {},
                lodgingBeds: {},
                lodgingBedrooms: {},
                lodgingBathroom: {},
                locationState: {},
                locationCity: {},
                lodgingDate: {}
            }
        }
    });

    let str = $(location).attr('href').split('/');
    searchStart(mem_id);

    function searchStart(id) {
        $.get("/api/room/hostlist/" + id, function(response) {
            console.dir(response)
            hostList.list = response.data;
            console.log(hostList.list)
            $("#hostList").val(hostList.list);
        });
    }
})