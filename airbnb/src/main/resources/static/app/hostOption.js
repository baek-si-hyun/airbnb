//------------------------------ hostoption15 ---------------------------------//
$(function (){
    let id = parseInt($('#iddiv').text())
    let lodgingRoom = new Vue({
        el: '#lodgingRoom',
        data: {
            lodgingType1: {},
            lodgingType2: {},
            lodgingType3: {},
            lodgingExtra: {}
        }
    })

    lodgingRoomsearch(id); // function 실행시켜주기 위해서 함수 호출
    console.log(id)

    function lodgingRoomsearch(id) {
        $.get("/api/room/hostoption15_2/" + id, function (response) { // "api 주소값"?id=+id
            console.dir(response);
            lodgingRoom.data = response.data;
        })
    }

    let lodging = new Vue({
        el: '#lodging',

        data: {
            lodgingTitle: {},
            lodgingExplain: {},
            lodgingGuests: {},
            lodgingCovi: {}
        }
    })


    lodgingsearch(id); // function 실행시켜주기 위해서 함수 호출

    function lodgingsearch(id) {
        $.get("/api/room/hostoption15_1/" + id, function (response) { // "api 주소값"?id=+id
            console.dir(response);
            lodging.data = response.data;
        })
    }




})
