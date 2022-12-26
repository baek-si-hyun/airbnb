$(function() {

    let leftName = new Vue({
        el: '#leftName',
        data: {
            memFirstname: {}
        }
    });
    let rightName = new Vue({
        el: '#rightName',
        data: {
            memFirstname: {}
        }
    });
    let confirmAtView = new Vue({
        el: '#confirmAtView',
        data: {
            confirmAt: {}
        }
    });
    let id = parseInt($('#iddiv').text())

    search(id);

    function search(id) {
        $.get("/api/user/mem?id=" + id, function(response) {
            console.dir(response);
            leftName.data = response.data;
            rightName.data = response.data;
            confirmAtView.data = response.data;
            $("#leftName").text(response.data.memFirstname);
            $("#rightName").text(response.data.memFirstname);
            let date = (response.data.confirmAt)
            $("#confirmAtView").text(date);
        })
    }



    let about12 = new Vue({
        el: '#about12',
        data: {
            memContent: {}
        }
    });
    let location = new Vue({
        el: '#location',
        data: {
            addressCont: {}
        }
    });
    let work = new Vue({
        el: '#work',
        data: {
            memComp: {}
        }
    });
    profileSearch(id);

    function profileSearch(id) {
        $.get("/api/user/memInfo?id=" + id, function(response) {
            console.dir(response);
            about12.data = response.data;
            location.data = response.data;
            work.work = response.data;
            $("#about12").val(response.data.memContent);
            $("#location").val(response.data.addressCont);
            $("#work").val(response.data.memComp);
        })
    }

    function profileUpdating() {
        let jsonData = {
            data: {
                memId: parseInt($('#iddiv').text()),
                memContent: $("#about12").val(),
                addressCont: $("#location").val(),
                memComp: $("#work").val()
            }
        }
        $.post({
            url: '/api/user/profile',
            data: JSON.stringify(jsonData),
            dataType: 'json',
            contentType: 'application/json',
            success: function(response) {
                about12.data = response.data;
                location.data = response.data;
                work.work = response.data;
                $("#about12").val(response.data.memContent);
                $("#location").val(response.data.addressCont);
                $("#work").val(response.data.memComp);
            },
            error: function() {
                alert('등록실패!');
            }
        });
    }
    $('#button33').click(() => {
        profileUpdating();
    })

    /*프로필 수정하기 버튼 눌렀을 때*/
    $('#button1').on('click', function() {
        $('#form66').attr('class', 'form66');
        $("#button1").attr("disabled", true);
    })

    /*프로필 취소 버튼 눌렀을 때*/
    $('#button2').on('click', function() {
        $('#form66').attr('class', 'form66 _kkkkkkk');
        $("#button1").attr("disabled", false);
        $("#button33").attr("disabled", true)
    })


    /*인풋 텍스트 작성시 버튼 비활성화 해제*/
    $('#about12').on("change keydown paste textarea", function() {
        if ($("#about12").val() == '')
            $("#button33").attr("disabled", false)

    })
})