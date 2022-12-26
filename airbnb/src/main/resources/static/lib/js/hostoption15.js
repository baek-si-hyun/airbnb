$(function() {
    let id = parseInt($('#iddiv').text())
    let mem_id = parseInt($('#iddiv2').text())
    console.log(mem_id)

    let lodging = new Vue({
        el: '#lodging',
        data: {
            lodgingTitle: {},
            lodgingExplain: {},
            lodgingGuests: {},
            lodgingCovi: {},
            lodgingType1: {},
            lodgingType2: {},
            lodgingType3: {},
            lodgingBeds: {},
            lodgingBedrooms: {},
            lodgingBathroom: {},
            memFirstname: {},
            locationState: {},
            locationWay: {},
            locationCity: {},
            locationRoad: {},
            lodgingPic: {},
            lodgingPicurl: {}
        }
    });
    lodgingPicsearch(id);
    lodgingsearch(id);
    lodgingRoomsearch(id);
    memberNamesearch(mem_id);
    hostLocationsearch(id);


    function lodgingsearch(id) {
        $.get("/api/room/hostoption15_1/" + id, function(response) { // "api 주소값"?id=+id
            console.dir(response);
            lodging.data = response.data;
            lodging.lodgingTitle = response.data.lodgingTitle;
            lodging.lodgingExplain = response.data.lodgingExplain;
            lodging.lodgingGuests = response.data.lodgingGuests;
            lodging.lodgingCovi = response.data.lodgingCovi;
            console.log(lodging.data)
            $("#lodging").val(lodging.data);
        })
    }

    function lodgingRoomsearch(id) {
        $.get("/api/room/hostoption15_2/" + id, function(response) { // "api 주소값"?id=+id
            console.dir(response);
            lodging.data = response.data;
            lodging.lodgingType1 = response.data.lodgingType1;
            lodging.lodgingType2 = response.data.lodgingType2;
            lodging.lodgingType3 = response.data.lodgingType3;
            lodging.lodgingBeds = response.data.lodgingBeds;
            lodging.lodgingBedrooms = response.data.lodgingBedrooms;
            lodging.lodgingBathroom = response.data.lodgingBathroom;
            $("#lodging").val(response.data);
        })
    }
    // 숙소 사진 미리보기
    function lodgingPicsearch(id) {
        $.get("/api/room/host_option9_picture/" + id, function(response) {
            console.dir(response)
            lodging.data = response.data;
            lodging.lodgingPicurl = response.data.lodgingPicurl;
            lodging.lodgingPic = response.data.lodgingPic;
            $("#lodging").val(response.data);
        })
    }

    // 호스트 이름 뷰
    function memberNamesearch(id) {
        $.get("/api/room/hostoption16/" + id, function(response) {
            console.dir(response)
            lodging.data = response.data;
            lodging.memFirstname = response.data.memFirstname;
            $("#lodging").val(response.data);
        })
    }

    // 숙소 위치 뷰
    function hostLocationsearch(id) {
        $.get("/api/room/hostoption5/" + id, function(response) {
            console.dir(response)
            lodging.data = response.data;
            lodging.locationState = response.data.locationState;
            lodging.locationWay = response.data.locationWay;
            lodging.locationCity = response.data.locationCity;
            lodging.locationRoad = response.data.locationRoad;
            $("#lodging").val(response.data);
        })
    }
})