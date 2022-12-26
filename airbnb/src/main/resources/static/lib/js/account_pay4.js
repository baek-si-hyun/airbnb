//기부 버튼 클릭
$(function() {

    let donateView = new Vue({
        el: '#donateInput',
        data: {
            isDonate: {}
        }
    });

    let id = parseInt($('#iddiv').text())

    donatesearch(id);

    function donatesearch(id) {
        $.get("/api/user/memPrivacy?id=" + id, function(response) {
            console.dir(response);
            donateView.data = response.data;
            console.log(response.data.isDonate)
        })
    }

    function donateUpdating() {
        let jsonData = {
            data: {
                memId: parseInt($('#iddiv').text()),
                isDonate: $('#donateInput').val()
            }
        }
        $.post({
            url: '/api/user/donate',
            data: JSON.stringify(jsonData),
            dataType: 'json',
            contentType: 'application/json',
            success: function(response) {
                donateView.data = response.data
            },
            error: function() {
                alert('등록실패!');

            }
        });
    }


    $('._hgs47m').on('click', function() {
        $('#change1').toggleClass('_byj74f _1nqg52lg')
        $('#change2').toggleClass('_nkz5o8 _v76fopi')
        $('#change3').toggleClass('_wd4c3r _1m1auhrh')
        $('#change4').toggleClass('_zsj5a1p _1abyqs14')
        $('#change5').toggleClass('_1est833r _pna3r')
        if ($('#change1').is('._1nqg52lg')) {
            $('#donateInput').attr('value', 'Y');
        } else {
            $('#donateInput').attr('value', 'N');
        }
        donateUpdating();
    })
})