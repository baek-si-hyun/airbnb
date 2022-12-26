/*숙소제목 수정하기 버튼 눌렀을 때*/
$('#su1').on('click', function() {
    $('#first_1').attr('class', 'first_1');
    $('#susu1').attr('class', 'susu1 _kkkkkkk');
})
/*숙소제목닫기 버튼 눌렀을 때*/
$('#ekerl1').on('click', function() {
    $('#first_1').attr('class', 'first_1 _kkkkkkk');
    $('#susu1').attr('class', 'susu1');
    $("#wjwkd1").attr("disabled", true)
})
/*숙소제목 취소 버튼 눌렀을 때*/
$('#cnlth1').on('click', function() {
    $('#first_1').attr('class', 'first_1 _kkkkkkk');
    $('#susu1').attr('class', 'susu1');
    $("#wjwkd1").attr("disabled", true)
})

/*숙소설명 수정하기 버튼 눌렀을 때*/
$('#su2').on('click', function() {
    $('#first_2').attr('class', 'first_2');
    $('#susu2').attr('class', 'susu1 _kkkkkkk');
})
/*숙소설명닫기 버튼 눌렀을 때*/
$('#ekerl2').on('click', function() {
    $('#first_2').attr('class', 'first_2 _kkkkkkk');
    $('#susu2').attr('class', 'susu2');
    $("#wjwkd2").attr("disabled", true)
})
/*숙소설명 취소 버튼 눌렀을 때*/
$('#cnlth2').on('click', function() {
    $('#first_2').attr('class', 'first_2 _kkkkkkk');
    $('#susu2').attr('class', 'susu2');
    $("#wjwkd2").attr("disabled", true)
})
/*숙소설명 텍스트 작성 시 저장 활성 */
$('._159914b').on("change", function() {
    $("#wjwkd2").attr("disabled", false)
})



//게스트 수
function pCount1() {
    const val = Number(document.querySelector("#c1").innerText);
    document.querySelector("#c1").innerText = val + 1;
    if (val + 1 > 0) {
        $('#discount1').removeAttr("disabled")
    }
}

function mCount1() {
    const val = Number(document.querySelector("#c1").innerText);
    document.querySelector("#c1").innerText = val - 1;
    if ((document.querySelector("#c1").innerText) == 0) {
        $('#discount1').attr("disabled", "")
    }
}

/*숙소설명 취소 버튼 눌렀을 때*/
$('#cnlth3').on('click', function() {
    $('#first_3').attr('class', 'first_3 _kkkkkkk');
    $('#susu3').attr('class', 'susu3');
    $("#wjwkd3").attr("disabled", true)
})
/*숙소설명 텍스트 작성 시 저장 활성 */
$('#dlsvnt33').on("change", function() {
    $("#wjwkd3").attr("disabled", false)
})

/*숙소상태 수정하기 버튼 눌렀을 때*/
document.querySelector('#su5').addEventListener('click', function() {

})
$('#su5').on('click', function() {
    $('#first_5').attr('class', 'first_5');
    $('#susu5').attr('class', 'susu5 _kkkkkkk');
})
/*숙소상태 닫기 버튼 눌렀을 때*/
$('#ekerl5').on('click', function() {
    $('#first_5').attr('class', 'first_5 _kkkkkkk');
    $('#susu5').attr('class', 'susu5');
    $("#wjwkd5").attr("disabled", true)
})
/*숙소상태 취소 버튼 눌렀을 때*/
$('#cnlth5').on('click', function() {
    $('#first_5').attr('class', 'first_5 _kkkkkkk');
    $('#susu5').attr('class', 'susu5');
    $("#wjwkd5").attr("disabled", true)
})
/*숙소상태 셀렉트 시 저장 활성 */
$('._83s1a2').on("change", function() {
    $("#wjwkd5").attr("disabled", false)
})
/*숙소상태 셀렉트 시 저장 활성 */
$('._g4rlqtx').on("change", function() {
    $("#wjwkd5").attr("disabled", false)
})

/*비활성 수정하기 버튼 눌렀을 때*/
$('#qlghkftjd').on('click', function() {
    $('#first_6').attr('class', 'first_6');
    $('#susu5').attr('class', 'susu5 _kkkkkkk');
})
/*비활성 닫기 버튼 눌렀을 때*/
$('#ekerl6').on('click', function() {
    $('#first_6').attr('class', 'first_6 _kkkkkkk');
    $('#susu5').attr('class', 'susu5');
    $("#wjwkd6").attr("disabled", true)
})
/*비활성 취소 버튼 눌렀을 때*/
$('#cnlth6').on('click', function() {
    $('#first_6').attr('class', 'first_6 _kkkkkkk');
    $('#susu5').attr('class', 'susu5');
    $("#wjwkd6").attr("disabled", true)
})
/*비활성 셀렉트 시 저장 활성 */
$('._83s1a2').on("change", function() {
    $("#wjwkd6").attr("disabled", false)
})

/*위치 수정하기 버튼 눌렀을 때*/
$('#su7').on('click', function() {
    $('#first_7').attr('class', 'first_7');
    $('#susu7').attr('class', 'susu7 _kkkkkkk');
})
/*위치 닫기 버튼 눌렀을 때*/
$('#ekerl7').on('click', function() {
    $('#first_7').attr('class', 'first_7 _kkkkkkk');
    $('#susu7').attr('class', 'susu7');
    $("#wjwkd7").attr("disabled", true)
})
/*위치 취소 버튼 눌렀을 때*/
$('#cnlth7').on('click', function() {
    $('#first_7').attr('class', 'first_7 _kkkkkkk');
    $('#susu7').attr('class', 'susu7');
    $("#wjwkd7").attr("disabled", true)
})
/*위치 셀렉트 시 저장 활성 */
$('._zknsx2n').on("change", function() {
    $("#wjwkd7").attr("disabled", false)
})

/*지역설명 수정하기 버튼 눌렀을 때*/
$('#su8').on('click', function() {
    $('#first_8').attr('class', 'first_8');
    $('#susu8').attr('class', 'susu8 _kkkkkkk');
})
/*지역설명 닫기 버튼 눌렀을 때*/
$('#ekerl8').on('click', function() {
    $('#first_8').attr('class', 'first_8 _kkkkkkk');
    $('#susu8').attr('class', 'susu8');
    $("#wjwkd8").attr("disabled", true)
})
/*지역설명 취소 버튼 눌렀을 때*/
$('#cnlth8').on('click', function() {
    $('#first_8').attr('class', 'first_8 _kkkkkkk');
    $('#susu8').attr('class', 'susu8');
    $("#wjwkd8").attr("disabled", true)
})
/*지역설명 셀렉트 시 저장 활성 */
$('#wldurtjfaud').on("change", function() {
    $("#wjwkd8").attr("disabled", false)
})
/*교통편 수정하기 버튼 눌렀을 때*/
$('#su9').on('click', function() {
    $('#first_9').attr('class', 'first_9');
    $('#susu9').attr('class', 'susu9 _kkkkkkk');
})
/*교통편 닫기 버튼 눌렀을 때*/
$('#ekerl9').on('click', function() {
    $('#first_9').attr('class', 'first_9 _kkkkkkk');
    $('#susu9').attr('class', 'susu9');
    $("#wjwkd9").attr("disabled", true)
})
/*교통편 취소 버튼 눌렀을 때*/
$('#cnlth9').on('click', function() {
    $('#first_9').attr('class', 'first_9 _kkkkkkk');
    $('#susu9').attr('class', 'susu9');
    $("#wjwkd9").attr("disabled", true)
})
/*교통편 셀렉트 시 저장 활성 */
$('#ryxhdvus').on("change", function() {
    $("#wjwkd9").attr("disabled", false)
})


/*-------------------------------------------------- */
/*아름다운전망 수정하기 버튼 눌렀을 때*/
$('#su10').on('click', function() {
    $('#first_10').attr('class', 'first_10');
})
/*아름다운전망 닫기 버튼 눌렀을 때*/
$('#ekerl10').on('click', function() {
    $('#first_10').attr('class', 'first_10 _kkkkkkk');
})


function pCount2() {
    const val = Number(document.querySelector("#c2").innerText);
    document.querySelector("#c2").innerText = val + 1;
    if (val + 1 > 0) {
        $('#discount2').removeAttr("disabled")
    }
}

function mCount2() {
    const val = Number(document.querySelector("#c2").innerText);
    document.querySelector("#c2").innerText = val - 1;
    if ((document.querySelector("#c2").innerText) == 0) {
        $('#discount2').attr("disabled", "")
    }
}


function pCount3() {
    const val = Number(document.querySelector("#c3").innerText);
    document.querySelector("#c3").innerText = val + 1;
    if (val + 1 > 0) {
        $('#discount3').removeAttr("disabled")
    }
}

function mCount3() {
    const val = Number(document.querySelector("#c3").innerText);
    document.querySelector("#c3").innerText = val - 1;
    if ((document.querySelector("#c3").innerText) == 0) {
        $('#discount3').attr("disabled", "")
    }
}


function pCount4() {
    const val = Number(document.querySelector("#c4").innerText);
    document.querySelector("#c4").innerText = val + 1;
    if (val + 1 > 0) {
        $('#discount4').removeAttr("disabled")
    }
}

function mCount4() {
    const val = Number(document.querySelector("#c4").innerText);
    document.querySelector("#c4").innerText = val - 1;
    if ((document.querySelector("#c4").innerText) == 0) {
        $('#discount4').attr("disabled", "")
    }
}

function pCount5() {
    const val = Number(document.querySelector("#c5").innerText);
    document.querySelector("#c5").innerText = val + 1;
    if (val + 1 > 0) {
        $('#discount5').removeAttr("disabled")
    }
}

function mCount5() {
    const val = Number(document.querySelector("#c5").innerText);
    document.querySelector("#c5").innerText = val - 1;
    if ((document.querySelector("#c5").innerText) == 0) {
        $('#discount5').attr("disabled", "")
    }
}

function pCount6() {
    const val = Number(document.querySelector("#c6").innerText);
    document.querySelector("#c6").innerText = val + 1;
    if (val + 1 > 0) {
        $('#discount6').removeAttr("disabled")
    }
}

function mCount6() {
    const val = Number(document.querySelector("#c6").innerText);
    document.querySelector("#c6").innerText = val - 1;
    if ((document.querySelector("#c6").innerText) == 0) {
        $('#discount6').attr("disabled", "")
    }
}

function pCount7() {
    const val = Number(document.querySelector("#c7").innerText);
    document.querySelector("#c7").innerText = val + 1;
    if (val + 1 > 0) {
        $('#discount7').removeAttr("disabled")
    }
}

function mCount7() {
    const val = Number(document.querySelector("#c7").innerText);
    document.querySelector("#c7").innerText = val - 1;
    if ((document.querySelector("#c7").innerText) == 0) {
        $('#discount7').attr("disabled", "")
    }
}

function pCount8() {
    const val = Number(document.querySelector("#c8").innerText);
    document.querySelector("#c8").innerText = val + 1;
    if (val + 1 > 0) {
        $('#discount8').removeAttr("disabled")
    }
}

function mCount8() {
    const val = Number(document.querySelector("#c8").innerText);
    document.querySelector("#c8").innerText = val - 1;
    if ((document.querySelector("#c8").innerText) == 0) {
        $('#discount8').attr("disabled", "")
    }
}

function pCount9() {
    const val = Number(document.querySelector("#c9").innerText);
    document.querySelector("#c9").innerText = val + 1;
    if (val + 1 > 0) {
        $('#discount9').removeAttr("disabled")
    }
}

function mCount9() {
    const val = Number(document.querySelector("#c9").innerText);
    document.querySelector("#c9").innerText = val - 1;
    if ((document.querySelector("#c9").innerText) == 0) {
        $('#discount9').attr("disabled", "")
    }
}

function pCount10() {
    const val = Number(document.querySelector("#c10").innerText);
    document.querySelector("#c10").innerText = val + 1;
    if (val + 1 > 0) {
        $('#discount10').removeAttr("disabled")
    }
}

function mCount10() {
    const val = Number(document.querySelector("#c10").innerText);
    document.querySelector("#c10").innerText = val - 1;
    if ((document.querySelector("#c10").innerText) == 0) {
        $('#discount10').attr("disabled", "")
    }
}

function pCount11() {
    const val = Number(document.querySelector("#c11").innerText);
    document.querySelector("#c11").innerText = val + 1;
    if (val + 1 > 0) {
        $('#discount11').removeAttr("disabled")
    }
}

function mCount11() {
    const val = Number(document.querySelector("#c11").innerText);
    document.querySelector("#c11").innerText = val - 1;
    if ((document.querySelector("#c11").innerText) == 0) {
        $('#discount11').attr("disabled", "")
    }
}

function pCount12() {
    const val = Number(document.querySelector("#c12").innerText);
    document.querySelector("#c12").innerText = val + 1;
    if (val + 1 > 0) {
        $('#discount12').removeAttr("disabled")
    }
}

function mCount12() {
    const val = Number(document.querySelector("#c12").innerText);
    document.querySelector("#c12").innerText = val - 1;
    if ((document.querySelector("#c12").innerText) == 0) {
        $('#discount12').attr("disabled", "")
    }
}

function pCount13() {
    const val = Number(document.querySelector("#c13").innerText);
    document.querySelector("#c13").innerText = val + 1;
    if (val + 1 > 0) {
        $('#discount13').removeAttr("disabled")
    }
}

function mCount13() {
    const val = Number(document.querySelector("#c13").innerText);
    document.querySelector("#c13").innerText = val - 1;
    if ((document.querySelector("#c13").innerText) == 0) {
        $('#discount13').attr("disabled", "")
    }
}

function pCount14() {
    const val = Number(document.querySelector("#c14").innerText);
    document.querySelector("#c14").innerText = val + 1;
    if (val + 1 > 0) {
        $('#discount14').removeAttr("disabled")
    }
}

function mCount14() {
    const val = Number(document.querySelector("#c14").innerText);
    document.querySelector("#c14").innerText = val - 1;
    if ((document.querySelector("#c14").innerText) == 0) {
        $('#discount14').attr("disabled", "")
    }
}

function pCount15() {
    const val = Number(document.querySelector("#c15").innerText);
    document.querySelector("#c15").innerText = val + 1;
    if (val + 1 > 0) {
        $('#discount15').removeAttr("disabled")
    }
}

function mCount15() {
    const val = Number(document.querySelector("#c15").innerText);
    document.querySelector("#c15").innerText = val - 1;
    if ((document.querySelector("#c15").innerText) == 0) {
        $('#discount15').attr("disabled", "")
    }
}

function pCount16() {
    const val = Number(document.querySelector("#c16").innerText);
    document.querySelector("#c16").innerText = val + 1;
    if (val + 1 > 0) {
        $('#discount16').removeAttr("disabled")
    }
}

function mCount16() {
    const val = Number(document.querySelector("#c16").innerText);
    document.querySelector("#c16").innerText = val - 1;
    if ((document.querySelector("#c16").innerText) == 0) {
        $('#discount16').attr("disabled", "")
    }
}


$('#rhdrks').click(function() {
    $('#ltrltrdiv').show()
})
$('._1rp5252').click(function() {
    $('#ltrltrdiv').hide()
})
$('#wjwkd20').click(function() {
    $('#ltrltrdiv').hide()
})

/*-------------------------------------------------- */
/*아름다운전망 수정하기 버튼 눌렀을 때*/
$('#rhdrks').on('click', function() {
    $('#ltrltrdiv').css('display', 'block');
})
/*-------------------------------------------------- */
/*숙소유형 수정하기 버튼 눌렀을 때*/
$('#su19').on('click', function() {
    $('#first_19').attr('class', 'first_19');
    $('#susu19').attr('class', 'susu19 _kkkkkkk');
})
/*숙소유형 닫기 버튼 눌렀을 때*/
$('#ekerl19').on('click', function() {
    $('#first_19').attr('class', 'first_19 _kkkkkkk');
    $('#susu19').attr('class', 'susu19');
    $("#wjwkd19").attr("disabled", true)
})
/*숙소유형 취소 버튼 눌렀을 때*/
$('#cnlth19').on('click', function() {
    $('#first_19').attr('class', 'first_91 _kkkkkkk');
    $('#susu19').attr('class', 'susu19');
    $("#wjwkd19").attr("disabled", true)
})
/*숙소유형 셀렉트 시 저장 활성 */
$('._vnw474').on("change", function() {
    $("#wjwkd19").attr("disabled", false)
})


// 추가 끝

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



/**/


/*-------------------------------------------- vue -------------------------------------*/

$(function() {
    let id = parseInt($('#iddiv').text())

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
})

// ----------------------------------숙소제목 팝업 출력
$(function() {
    let id = parseInt($('#iddiv').text())

    let lodgingBasic = new Vue({
        el: '#tnrthwpahrs',
        data: {
            lodgingTitle: {}

        },
        methods: {
            // /*숙소제목 수정 버튼 눌렀을 때*/
            subutton1() {
                $('#first_1').attr('class', 'first_1');
                $('#susu1').attr('class', 'susu1 _kkkkkkk');
            },

            // /*숙소제목닫기 버튼 눌렀을 때*/
            close1() {
                $('#first_1').attr('class', 'first_1 _kkkkkkk');
                $('#susu1').attr('class', 'susu1');
                $("#wjwkd1").attr("disabled", true);
            },
            // })
            /*숙소제목 취소 버튼 눌렀을 때*/
            cancell1() {
                $('#first_1').attr('class', 'first_1 _kkkkkkk');
                $('#susu1').attr('class', 'susu1');
                $("#wjwkd1").attr("disabled", true)
            },
            int() {
                let content;
                let textInput = document.querySelector('#dlsvnt1');
                let texttitle = document.querySelector('#texttitle');
                let btn = document.querySelector("#wjwkd1")
                content = textInput.value;

                if (content.length === 0 || content === '') {
                    texttitle.innerHTML = '0/50';
                } else {
                    texttitle.innerHTML = content.length + '/50';
                };

                if (content.length > 49) {
                    textInput.value = textInput.value.substring(0, 49);
                };

                if (content.length !== 0 || content.value !== '') {
                    btn.removeAttribute("disabled");
                }
                if (content.length === 0 || content.value === '') {
                    btn.setAttribute("disabled", '');
                }
            },
            save1() {
                let jsonData = {
                    transaction_time: new Date(),
                    resultCode: "ok",
                    description: "ok",
                    data: {
                        lodgingId: parseInt($('#iddiv').text()),
                        lodgingTitle: $('.titlesss').val(),
                    }
                }

                $.post({
                    url: '/api/room/hostoption10',
                    data: JSON.stringify(jsonData),
                    dataType: 'json',
                    contentType: 'application/json',
                    success: function(response) {
                        lodgingBasic.lodgingTitle = response.data.lodgingTitle;
                        // location.href = '/pages/hostedit/' + parseInt($('#iddiv').text());
                    },
                    error: function() {
                        location.reload();
                    }
                });
            }
        }
    });

    lodgingtitlepop1(id);

    function lodgingtitlepop1(id) {
        $.get("/api/room/hostoption15_1/" + id, function(response) {
            console.dir(response)
            lodgingBasic.data = response.data;
            lodgingBasic.lodgingTitle = response.data.lodgingTitle;
            console.log(lodgingBasic.data)
            $("#tnrthwpahrs").val(response.data);
        })
    }
})


/* -------------------------------숙소 설명-----------------------------------*/
$(function() {
    let id = parseInt($('#iddiv').text())

    let lodgingBasic = new Vue({
        el: '#tnrthtjfaud',
        data: {
            lodgingExplain: {},
        },
        methods: {
            /*숙소설명 수정하기 버튼 눌렀을 때*/
            subutton2() {
                $('#first_2').attr('class', 'first_2');
                $('#susu2').attr('class', 'susu1 _kkkkkkk');
            },
            // /*숙소설명닫기 버튼 눌렀을 때*/
            close2() {
                $('#first_2').attr('class', 'first_2 _kkkkkkk');
                $('#susu2').attr('class', 'susu2');
                $("#wjwkd2").attr("disabled", true)
            },
            // /*숙소설명 취소 버튼 눌렀을 때*/
            cancell2() {
                $('#first_2').attr('class', 'first_2 _kkkkkkk');
                $('#susu2').attr('class', 'susu2');
                $("#wjwkd2").attr("disabled", true)
            },
            save2() {
                let jsonData = {
                    transaction_time: new Date(),
                    resultCode: "ok",
                    description: "ok",
                    data: {
                        lodgingId: parseInt($('#iddiv').text()),
                        lodgingExplain: $('.explaninChange').val(),
                    }
                }

                $.post({
                    url: '/api/room/hostoption12',
                    data: JSON.stringify(jsonData),
                    dataType: 'json',
                    contentType: 'application/json',
                    success: function(response) {
                        lodgingBasic.lodgingExplain = response.data.lodgingExplain;
                        // location.href = '/pages/hostedit/' + parseInt($('#iddiv').text());
                    },
                    error: function() {
                        location.reload();
                    }
                });
            }
        }
    });

    lodgingExplain(id);

    function lodgingExplain(id) {
        $.get("/api/room/hostoption15_1/" + id, function(response) {
            console.dir(response)
            lodgingBasic.data = response.data;
            lodgingBasic.lodgingExplain = response.data.lodgingExplain;
            console.log(lodgingBasic.data)
            $("#tnrthtjfaud").val(response.data);
        })
    }
})

/* ----------- 숙소 상태 -------------*/

$(function() {
    let id = parseInt($('#iddiv').text())

    let lodging_status = new Vue({
        el: '#lodging_status',
        data: {
            lodgingStatus: {}
        },
        methods: {
            subutton5() {
                $('#first_5').attr('class', 'first_5');
                $('#susu5').attr('class', 'susu5 _kkkkkkk');
            },
            close5() {
                $('#first_5').attr('class', 'first_5 _kkkkkkk');
                $('#susu5').attr('class', 'susu5');
                $("#wjwkd5").attr("disabled", true)
            },
            change5() {
                $("#wjwkd5").attr("disabled", false)
            },
            save5() {
                let jsonData = {
                    transaction_time: new Date(),
                    resultCode: "ok",
                    description: "ok",
                    data: {
                        lodgingId: parseInt($('#iddiv').text()),
                        lodgingStatus: $('input[name=tpffpr11]:checked').val(),
                    }
                }

                $.post({
                    url: '/api/room/hostedit_2',
                    data: JSON.stringify(jsonData),
                    dataType: 'json',
                    contentType: 'application/json',
                    success: function(response) {
                        lodging_status.lodgingStatus = response.data.lodgingStatus;
                        $('#first_5').attr('class', 'first_5 _kkkkkkk');
                        $('#susu5').attr('class', 'susu5');
                        $("#wjwkd5").attr("disabled", true);
                        // location.href = '/pages/hostedit/' + parseInt($('#iddiv').text());
                    },
                    error: function() {
                        location.reload();
                    }
                });
            }

        }
    });

    lodgingStatussearch(id);

    function lodgingStatussearch(id) {
        $.get("/api/room/hostoption15_1/" + id, function(response) {
            console.dir(response)
            lodging_status.data = response.data;
            lodging_status.lodgingStatus = response.data.lodgingStatus;
            console.log(lodging_status.data)
            $("#lodging_status").val(lodging_status.data);

            /* radio check 유지 */
            $(":radio[name='tpffpr11'][value='" + lodging_status.lodgingStatus + "']").attr('checked', true);

            $.fn.radioSelect = function(val) {
                this.each(function() {
                    let $this = $(this);
                    if ($this.val() == val)
                        $this.attr('checked', true);
                });
                return this;
            };
            $(":radio[name='tpffpr11']").radioSelect(lodging_status.lodgingStatus);

            /* 운영 상태에 따른 색상 변경 */
            if (lodging_status.lodgingStatus === '운영 중') {
                $('.status_color').attr('style', 'height: 10px; width: 10px; fill: rgb(0, 138, 5);')
                $('#status_explain').text('게스트가 숙소를 검색하고 예약 요청을 보내거나 예약 가능 날짜를 예약할 수 있습니다.')
            }

            if (lodging_status.lodgingStatus === '운영 중지') {
                $('.status_color').attr('style', 'height: 10px; width: 10px; fill: rgb(193, 53, 21);')
                $('#status_explain').text('게스트가 숙소를 예약하거나 검색 결과에서 찾을 수 없습니다.')
            }

            if (lodging_status.lodgingStatus === '비활성화') {
                $('.status_color').attr('style', 'height: 10px; width: 10px; fill: rgb(40, 40, 40);')
                $('#status_explain').text('에어비앤비에서 영구적으로 숙소 비활성화')
            }

        })
    }
})

// ----------------------------------위치 > 주소 팝업 출력
$(function() {
    let id = parseInt($('#iddiv').text())

    let lodgingBasic = new Vue({
        el: '#dnlclwnth',
        data: {
            locationDetail: {},
            locationRoad: {},
            locationWay: {},
            locationCity: {},
            locationState: {},
        },
        methods: {
            /*위치 수정하기 버튼 눌렀을 때*/
            subutton7() {
                $('#first_7').attr('class', 'first_7');
                $('#susu7').attr('class', 'susu7 _kkkkkkk');
            },
            /*위치 닫기 버튼 눌렀을 때*/
            close7() {
                $('#first_7').attr('class', 'first_7 _kkkkkkk');
                $('#susu7').attr('class', 'susu7');
                $("#wjwkd7").attr("disabled", true)
            },
            /*위치 취소 버튼 눌렀을 때*/
            cancell7() {
                $('#first_7').attr('class', 'first_7 _kkkkkkk');
                $('#susu7').attr('class', 'susu7');
                $("#wjwkd7").attr("disabled", true)
            },
            /*위치 셀렉트 시 저장 활성 */
            select7() {
                $("#wjwkd7").attr("disabled", false)
            },
            save7() {
                let jsonData = {
                    transaction_time: new Date(),
                    resultCode: "ok",
                    description: "ok",
                    data: {
                        lodgingId: parseInt($('#iddiv').text()),
                        locationDetail: $('#apt').val(),
                        locationRoad: $('#street').val(),
                        locationCity: $('#city').val(),
                        locationPost: $('#zipcode').val(),
                        locationState: $('#countryCode').val(),
                        locationWay: $('#state').val(),
                        location
                    }
                }

                $.post({
                    url: '/api/room/hostoption5',
                    data: JSON.stringify(jsonData),
                    dataType: 'json',
                    contentType: 'application/json',
                    success: function(response) {
                        lodgingBasic.locationDetail = response.data.locationDetail;
                        lodgingBasic.locationRoad = response.data.locationRoad;
                        lodgingBasic.locationCity = response.data.locationCity;
                        lodgingBasic.locationPost = response.data.locationPost;
                        lodgingBasic.locationState = response.data.locationState;
                        lodgingBasic.locationWay = response.data.locationWay;
                        // location.href = '/pages/hostedit/' + parseInt($('#iddiv').text());
                    },
                    error: function() {
                        location.reload();
                    }
                });
            }
        }
    });

    location(id);

    function location(id) {
        $.get("/api/room/hostoption5/" + id, function(response) {
            console.dir(response)
            lodgingBasic.data = response.data;
            lodgingBasic.locationDetail = response.data.locationDetail;
            lodgingBasic.locationRoad = response.data.locationRoad;
            lodgingBasic.locationCity = response.data.locationCity;
            lodgingBasic.locationPost = response.data.locationPost;
            lodgingBasic.locationState = response.data.locationState;
            lodgingBasic.locationWay = response.data.locationWay;
            console.log(lodgingBasic.data)
            $("#locationss").val(response.data);
        })
    }
})

// ----------------------------------지역 설명 팝업 출력
$(function() {
    let id = parseInt($('#iddiv').text())

    let lodgingBasic = new Vue({
        el: '#wlexpalin',
        data: {
            loactionExplain: {},
        },
        methods: {
            /*지역설명 수정하기 버튼 눌렀을 때*/
            subutton8() {
                $('#first_8').attr('class', 'first_8');
                $('#susu8').attr('class', 'susu8 _kkkkkkk');
            },
            /*지역설명 닫기 버튼 눌렀을 때*/
            close8() {
                $('#first_8').attr('class', 'first_8 _kkkkkkk');
                $('#susu8').attr('class', 'susu8');
                $("#wjwkd8").attr("disabled", true)
            },
            /*지역설명 취소 버튼 눌렀을 때*/
            cancell8() {
                $('#first_8').attr('class', 'first_8 _kkkkkkk');
                $('#susu8').attr('class', 'susu8');
                $("#wjwkd8").attr("disabled", true)
            },
            /*지역설명 셀렉트 시 저장 활성 */
            expll() {
                $("#wjwkd8").attr("disabled", false)
            },
            save8() {
                let jsonData = {
                    transaction_time: new Date(),
                    resultCode: "ok",
                    description: "ok",
                    data: {
                        lodgingId: parseInt($('#iddiv').text()),
                        loactionExplain: $('.expll').val(),
                    }
                }

                $.post({
                    url: '/api/room/hostedit_29',
                    data: JSON.stringify(jsonData),
                    dataType: 'json',
                    contentType: 'application/json',
                    success: function(response) {
                        lodgingBasic.loactionExplain = response.data.loactionExplain;
                        // location.href = '/pages/hostedit/' + parseInt($('#iddiv').text());
                    },
                    error: function() {
                        location.reload();
                    }
                });
            }
        }
    });

    lodgingExplain(id);

    function lodgingExplain(id) {
        $.get("/api/room/hostoption5/" + id, function(response) {
            console.dir(response)
            lodgingBasic.data = response.data;
            lodgingBasic.loactionExplain = response.data.loactionExplain;
            console.log(lodgingBasic.data)
            $("#wlexpalin").val(response.data);
        })
    }

})
// ----------------------------------교통편 팝업 출력
$(function() {
    let id = parseInt($('#iddiv').text())

    let lodgingBasic = new Vue({
        el: '#zzzwerfs',
        data: {
            loactionTraffic: {},
        },
        methods: {
            /*교통편 수정하기 버튼 눌렀을 때*/
            subutton9() {
                $('#first_9').attr('class', 'first_9');
                $('#susu9').attr('class', 'susu9 _kkkkkkk');
            },
            /*교통편 닫기 버튼 눌렀을 때*/
            close9() {
                $('#first_9').attr('class', 'first_9 _kkkkkkk');
                $('#susu9').attr('class', 'susu9');
                $("#wjwkd9").attr("disabled", true)
            },
            /*교통편 취소 버튼 눌렀을 때*/
            cancell9() {
                $('#first_9').attr('class', 'first_9 _kkkkkkk');
                $('#susu9').attr('class', 'susu9');
                $("#wjwkd9").attr("disabled", true)
            },
            /*교통편 셀렉트 시 저장 활성 */
            ryxhdvus() {
                $("#wjwkd9").attr("disabled", false)
            },
            save9() {
                let jsonData = {
                    transaction_time: new Date(),
                    resultCode: "ok",
                    description: "ok",
                    data: {
                        lodgingId: parseInt($('#iddiv').text()),
                        loactionTraffic: $('#ryxhdvus').val(),
                    }
                }

                $.post({
                    url: '/api/room/hostedit_3',
                    data: JSON.stringify(jsonData),
                    dataType: 'json',
                    contentType: 'application/json',
                    success: function(response) {
                        lodgingBasic.loactionTraffic = response.data.loactionTraffic;
                        location.href = '/pages/hostedit/' + parseInt($('#iddiv').text());
                    },
                    error: function() {
                        location.reload();
                    }
                });
            }
        }
    });

    lodgingExplain(id);

    function lodgingExplain(id) {
        $.get("/api/room/hostoption5/" + id, function(response) {
            console.dir(response)
            lodgingBasic.data = response.data;
            lodgingBasic.loactionTraffic = response.data.loactionTraffic;
            console.log(lodgingBasic.data)
            $("#zzzwerfs").val(response.data);
        })
    }
})

// ----------------------------------숙소 유형 팝업 출력
$(function() {
    let id = parseInt($('#iddiv').text())

    let lodgingBasic = new Vue({
        el: '#suckso',
        data: {
            lodgingType1: {},
            lodgingType2: {},
            lodgingType3: {},
            lodgingHigh: {},
            lodgingFloor: {}
        },
        methods: {
            /*숙소유형 수정하기 버튼 눌렀을 때*/
            subutton19() {
                $('#first_19').attr('class', 'first_19');
                $('#susu19').attr('class', 'susu19 _kkkkkkk');
            },
            /*숙소유형 닫기 버튼 눌렀을 때*/
            close19() {
                $('#first_19').attr('class', 'first_19 _kkkkkkk');
                $('#susu19').attr('class', 'susu19');
                $("#wjwkd19").attr("disabled", true)
            },
            /*숙소유형 취소 버튼 눌렀을 때*/
            cancell19() {
                $('#first_19').attr('class', 'first_91 _kkkkkkk');
                $('#susu19').attr('class', 'susu19');
                $("#wjwkd19").attr("disabled", true)
            },
            /*숙소유형 셀렉트 시 저장 활성 */
            changeeee() {
                $("#wjwkd19").attr("disabled", false)
            },
            save19() {
                let jsonData = {
                    transaction_time: new Date(),
                    resultCode: "ok",
                    description: "ok",
                    data: {
                        lodgingId: parseInt($('#iddiv').text()),
                        lodgingType1: $('#type1111').val(),
                        lodgingType2: $('#type2222').val(),
                        lodgingType3: $('#type3333').val(),
                        lodgingHigh: $('#highzzz').val(),
                        lodgingFloor: $('#floorzzz').val()
                    }
                }

                $.post({
                    url: '/api/room/hostedit_30',
                    data: JSON.stringify(jsonData),
                    dataType: 'json',
                    contentType: 'application/json',
                    success: function(response) {
                        lodgingBasic.lodgingType1 = response.data.lodgingType1;
                        lodgingBasic.lodgingType2 = response.data.lodgingType2;
                        lodgingBasic.lodgingType3 = response.data.lodgingType3;
                        lodgingBasic.lodgingHigh = response.data.lodgingHigh;
                        lodgingBasic.lodgingFloor = response.data.lodgingFloor;
                        // location.href = '/pages/hostedit/' + parseInt($('#iddiv').text());
                    },
                    error: function() {
                        location.reload();
                    }
                });
            }
        }
    });

    lodgingExplain(id);

    function lodgingExplain(id) {
        $.get("/api/room/hostoption15_2/" + id, function(response) {
            console.dir(response)
            lodgingBasic.data = response.data;
            lodgingBasic.lodgingType1 = response.data.lodgingType1;
            lodgingBasic.lodgingType2 = response.data.lodgingType2;
            lodgingBasic.lodgingType3 = response.data.lodgingType3;
            lodgingBasic.lodgingHigh = response.data.lodgingHigh;
            lodgingBasic.lodgingFloor = response.data.lodgingFloor;
            console.log(lodgingBasic.data)
            $("#suckso").val(response.data);
        })
    }
})


function pCount1() {

    const val = Number(document.querySelector("#guestsu").innerText);
    document.querySelector("#guestsu").innerText = val + 1;
    if (val + 1 > 0) {
        $('#discount1').removeAttr("disabled")
    }
    let jsonData = {
        data: {
            lodgingId: parseInt($('#iddiv').text()),
            lodgingGuests: $('#guestsu').text()
        }
    }

    $.post({
        url: '/api/room/hostoption7',
        data: JSON.stringify(jsonData),
        dataType: 'json',
        contentType: 'application/json',
        success: function(response) {
            response.data
        },
        error: function() {
            alert('등록실패!');
        }
    });

}

function mCount1() {
    const val = Number(document.querySelector("#guestsu").innerText);
    document.querySelector("#guestsu").innerText = val - 1;
    if ((document.querySelector("#guestsu").innerText) == 0) {
        $('#discount1').attr("disabled", "")
    }
    let jsonData = {
        data: {
            lodgingId: parseInt($('#iddiv').text()),
            lodgingGuests: $('#guestsu').text()
        }
    }
    $.post({
        url: '/api/room/hostoption7',
        data: JSON.stringify(jsonData),
        dataType: 'json',
        contentType: 'application/json',
        success: function(response) {
            response.data
        },
        error: function() {
            alert('등록실패!');
        }
    });

}

$(function() {
    let id = parseInt($('#iddiv').text())
    searchStart(id);

    function searchStart(id) {
        $.get("/api/room/hostoption15_1/" + id, function(response) {
            response.data;
            $('#guestsu').text(response.data.lodgingGuests)
        })
    }
})



$(function() {
    let fldzm = new Vue({
        el: '#first_3',
        data: {
            lodgingHref: {}
        },
        methods: {

            ekerl3() {
                $('#first_3').attr('class', 'first_3 _kkkkkkk');
                $('#susu3').attr('class', 'susu3');
                $("#wjwkd3").attr("disabled", true)
            },
            dlsvnt33() {
                let content;
                content = $('#dlsvnt33').val();

                if (content.length == 0 || content == '') {
                    $('#textspan').text('0/100');
                } else {
                    $('#textspan').text(content.length + '/100');
                }

                if (content.length > 100) {
                    $('#dlsvnt33').val($('#dlsvnt33').val().substring(0, 100));
                }

                if (content.length != 0 || content != '') {
                    $("#wjwkd3").removeAttr("disabled");
                } else if (content.length == 0 || content == '') {
                    $("#wjwkd3").attr("disabled", "");
                }
                wjwkd3()
            }
        }
    })
    let id = parseInt($('#iddiv').text())
    zkacncafldzm(id)

    function zkacncafldzm(id) {
        $.get('/api/room/hostoption15_1/' + id, function(response) {
            fldzm.data = response.data;
            $('#dlsvnt33').val(fldzm.data.lodgingHref)
            $('#viewtext').text(fldzm.data.lodgingHref)
        })
    }
})

function wjwkd3() {
    let jsonData = {
        data: {
            lodgingId: parseInt($('#iddiv').text()),
            lodgingHref: $('#dlsvnt33').val()
        }
    }
    $.post({
        url: '/api/room/hostedit',
        data: JSON.stringify(jsonData),
        dataType: 'json',
        contentType: 'application/json',
        success: function(response) {},
        error: function() {
            alert('등록실패!');
        }
    });
}
$('#su3').on('click', function() {
    $('#first_3').attr('class', 'first_3');
    $('#susu3').attr('class', 'susu1 _kkkkkkk');
})