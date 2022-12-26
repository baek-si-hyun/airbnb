$(function() {
    if ($('#btn1').is('._1a5ksj6v')) {
        let during = new Vue({
            el: '#during',
            data: {
                list: {
                    resvId: {},
                    resvCode: {},
                    resvStatus: {},
                    resvPerson: {},
                    memId: {},
                    memName: {},
                    memFirstname: {},
                    lodgingId: {},
                    resvStart: {},
                    resvEnd: {},
                    createAt: {},
                    price: {}
                }
            },
            methods: {
                durCancel(e) {
                    let id = e.target.previousSibling.innerText
                    $.get("/api/resv/durCancel/" + id, function() {
                        $('#during').hide()
                        location.reload()
                    })

                    $('#during').show()

                },
                durComplete(e) {
                    let id = e.target.previousSibling.innerText
                    $.get("/api/resv/durComplete/" + id, function() {
                        $('#during').hide()
                        location.reload()
                    })
                    $('#during').show()
                }
            }
        })
        let id = parseInt($('#iddiv').text())
        console.log($('#iddiv').text())
        duringsearch(id);

        function duringsearch(id) {
            $.get("/api/resv/during/" + id, function(response) {
                during.list = response.data;
            })
        }
    }
    $('#btn2').on('click', function() {
        let complete = new Vue({
            el: '#complete',
            data: {
                list: {
                    resvId: {},
                    resvCode: {},
                    resvStatus: {},
                    resvPerson: {},
                    memId: {},
                    memName: {},
                    memFirstname: {},
                    lodgingId: {},
                    resvStart: {},
                    resvEnd: {},
                    createAt: {},
                    price: {}
                }
            }
        })
        let id = parseInt($('#iddiv').text())
        console.log($('#iddiv').text())
        completesearch(id);

        function completesearch(id) {
            $.get("/api/resv/complete/" + id, function(response) {
                complete.list = response.data;
            })
        }
    })
    $('#btn3').on('click', function() {
        let cancel = new Vue({
            el: '#cancel',
            data: {
                list: {
                    resvId: {},
                    resvCode: {},
                    resvStatus: {},
                    resvPerson: {},
                    memId: {},
                    memName: {},
                    memFirstname: {},
                    lodgingId: {},
                    resvStart: {},
                    resvEnd: {},
                    createAt: {},
                    price: {}
                }
            }
        })
        let id = parseInt($('#iddiv').text())
        console.log($('#iddiv').text())
        cancelsearch(id);

        function cancelsearch(id) {
            $.get("/api/resv/cancel/" + id, function(response) {
                cancel.list = response.data;
            })
        }
    })
    $('#btn4').on('click', function() {
        let all = new Vue({
            el: '#all',
            data: {
                list: {
                    resvId: {},
                    resvCode: {},
                    resvStatus: {},
                    resvPerson: {},
                    memId: {},
                    memName: {},
                    memFirstname: {},
                    lodgingId: {},
                    resvStart: {},
                    resvEnd: {},
                    createAt: {},
                    price: {}
                }
            }
        })
        let id = parseInt($('#iddiv').text())
        console.log($('#iddiv').text())
        allsearch(id);

        function allsearch(id) {
            $.get("/api/resv/all/" + id, function(response) {
                all.list = response.data;
                console.log(all.list);
            })
        }
    })
})




// 예정된 여행
$('#btn1').on('click', function() {
    $(this).attr('class', '_1a5ksj6v')
    $('#btn2').attr('class', '_1tc6qhl9')
    $('#btn3').attr('class', '_1tc6qhl9')
    $('#btn4').attr('class', '_1tc6qhl9')
    $('._1cvivhm').show();
    $('.content1').show();
    $('.content2').hide();
    $('.content3').hide();
    $('.content4').hide();
})

// 완료
$('#btn2').on('click', function() {
    $(this).attr('class', '_1a5ksj6v')
    $('#btn1').attr('class', '_1tc6qhl9')
    $('#btn3').attr('class', '_1tc6qhl9')
    $('#btn4').attr('class', '_1tc6qhl9')
    $('._1cvivhm').hide();
    $('.content1').hide();
    $('.content2').show();
    $('.content3').hide();
    $('.content4').hide();
})

// 취소됨

$('#btn3').on('click', function() {
    $(this).attr('class', '_1a5ksj6v')
    $('#btn1').attr('class', '_1tc6qhl9')
    $('#btn2').attr('class', '_1tc6qhl9')
    $('#btn4').attr('class', '_1tc6qhl9')
    $('._1cvivhm').hide();
    $('.content1').hide();
    $('.content2').hide();
    $('.content3').show();
    $('.content4').hide();
})

// 모두

$('#btn4').on('click', function() {
    $(this).attr('class', '_1a5ksj6v')
    $('#btn1').attr('class', '_1tc6qhl9')
    $('#btn2').attr('class', '_1tc6qhl9')
    $('#btn3').attr('class', '_1tc6qhl9')
    $('._1cvivhm').hide();
    $('.content1').hide();
    $('.content2').hide();
    $('.content3').hide();
    $('.content4').show();
})

// 의견 보내기 팝업
$('._15rpys7s').on('click', function() {
    $('.popup1').show();
})

// 의견 보내기 팝업 닫기
$('._dernx5').on('click', function() {
    $('.popup1').hide();
})

// 내보내기

$('#btn6').on('click', function() {
    $(this).toggleClass('_tnwf9lf _ikp18e4');
    $('.popup3').toggle();
})

$(document).mouseup(function(e) {
    if ($(".popup3").has(e.target).length === 0) {
        $(".popup3").hide();
        $("#btn6").attr('class', '_tnwf9lf')
    }
});

// CSV 파일 다운로드 팝업

$('#btn7').on('click', function() {
    $('.popup4').show();
})

// CSV 파일 다운로드 팝업 닫기

$('._oda838').on('click', function() {
    $('.popup4').hide();
})


// 예약 동기화 팝업

$('#btn8').on('click', function() {
    $('.popup5').show();
})

// 예약 동기화 팝업 닫기
$('._1rp5252').on('click', function() {
    $('.popup5').hide();
})


// 필터 팝업
$('#btn5').on('click', function() {
    $(this).toggleClass('_qpy8m4n _oefcizc')
    $('.popup2').toggle();
})

// 다른 영역 클릭시 팝업 닫기
$(document).mouseup(function(e) {
    if ($(".popup2").has(e.target).length === 0) {
        $(".popup2").hide();
        $("#btn5").attr('class', '_qpy8m4n')
    }
})


// 모든 예약 보기
$('._b0ybw8s').on('click', function() {
    $('#btn4').attr('class', '_1a5ksj6v');
    $('#btn1').attr('class', '_1tc6qhl9')
    $('#btn2').attr('class', '_1tc6qhl9')
    $('#btn3').attr('class', '_1tc6qhl9')
    $('._1cvivhm').hide();
    $('.content1').hide();
    $('.content2').hide();
    $('.content3').hide();
    $('.content4').show();
})

// 완료 세부사항 팝업
$('#btn9').click(function() {
    $('#popup6').show();
})

$('#btn11').click(function() {
    $('#popup6').show();
})

$('#btn_close6').click(function() {
    $('#popup6').hide();
})

// 취소됨 세부사항 팝업
$('#btn10').click(function() {
    $('#popup7').show();
})

$('#btn12').click(function() {
    $('#popup7').show();
})

$('#btn_close7').click(function() {
    $('#popup7').hide();
})

// 취소됨 특별가 제안 팝업

$('#btn13').click(function() {
    $('#popup6').show();
})

$('#btn_close8').click(function() {
    $('#popup8').hide();
})