$(function() {
    let id = parseInt($('#iddiv2').text())

    let memName = new Vue({
        el: '#memName',
        data: {
            memFirstname: {}
        }
    });

    memberNamesearch(id);

    function memberNamesearch(id) {
        $.get("/api/room/hostoption16/" + id, function(response) {
            console.dir(response)
            memName.data = response.data;
            memName.memFirstname = response.data.memFirstname;
            console.log(memName.data)
            $("#memName").val(response.data);
        })
    }
})