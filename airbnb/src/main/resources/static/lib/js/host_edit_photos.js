$(function() {
    $('.uploads').click(function(e) {
        e.preventDefault();
        $('#file').click();
    });
});

var sel_files = [];

$(document).ready(function() {
    $('#file').on("change", handleImgsFilesSelect);
})

function handleImgsFilesSelect(e) {
    var files = e.target.files;
    var filesArr = Array.prototype.slice.call(files);

    filesArr.forEach(function(f) {
        if (!f.type.match("image.*")) {
            alert('확장자는 이미지 확장자만 가능합니다');
            return;
        }
        sel_files.push(f);

        var reader = new FileReader();
        reader.onload = function(e) {
            var img_html = '<div class="_1oa4lmzv"><div class="_18dgbyf"><div data-testid="droppable-space"><div data-testid="draggable-photo" draggable="true"><div role="group" aria-label="1번째 사진(전체 5장)"><div class="_1fopc40"><div class="_e296pg" style="padding-bottom: 66.67%;"><div class="_1k2xyy0"><div class="_1258d0t"><div class="_100wjs0"><div class="_1h6n1zu" role="img" aria-busy="false" aria-label="사진(653225492607634010_1427311913)에 설명이 없습니다." style="display: inline-block; vertical-align: bottom; height: 100%; width: 100%; min-height: 1px;"><img src=\'' + e.target.result + ' style="object-fit: cover; vertical-align: bottom;"><div class="_15p4g025" style="background-image: url(\'' + e.target.result + ')' + 'background-size: cover;"></div></div></div><div class="_1c1qb2i"><div class="_jro6t0"><div class="_s63vo4"><div><div class="_1p99teo"><button aria-label="사진 옵션" type="button" class="_1d3iagv"><span class="_3hmsj"><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 16px; width: 16px; fill: rgb(34, 34, 34);"><path d="M3 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm5 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm5 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path></svg></span></button></div></div></div></div></div></div></div></div></div><div><div class="_1qbj27u"><button aria-label="1번째 사진(전체 5장)에 설명 추가" type="button" class="_15rpys7s"><div class="_9d4he4">설명 추가하기</div></button></div></div></div></div></div></div></div>';
            $("._1byskwn").append(img_html);
        }
        reader.readAsDataURL(f);
    })
}


//사진 변경 팝업
$('.ch1').on('click', function() {
    $('.cover_pic').show();
});
//사진 변경 팝업 끄기
$('._pa35zs').on('click', function() {
    $('.cover_pic').hide();
});
$('._1dj2p4gk').on('click', function() {
    $('.cover_pic').hide();
});
$('._1ku51f04').on('click', function() {
    $('.cover_pic').hide();
});

//클릭 시 아래에 팝업생성
$('._1p99teo').on('click', function(e) {
    const pop = '<div class="_olsjb9v" tabindex="-1"><button type="button" class="_14tt8lmp" aria-label="커버 사진으로 설정"><div class="_q40c6s">커버 사진으로 설정</div></button><button type="button" class="_14tt8lmp del" aria-label="삭제"><div class="_q40c6s">삭제</div></button></div>'
    $(this).after(pop);
    const valu = $(this).next();
    //사진 삭제 확인 팝업
    $('.del').on('click', function() {
        $('.delpop').show();
    });
    //사진 변경 팝업 끄기
    $('._1wv4knt').on('click', function() {
        $('.delpop').hide();
    });
    $('._1e5q4qoz').on('click', function() {
        $('.delpop').hide();
    });
    //삭제
    $('._1lerwp6l').on('click', function() {
        $('.delpop').hide();
    });

    $(document).on('click', function(e) {
        if ($(e.target).closest('._olsjb9v').length < 1) {
            valu.remove();
        }
    });
    e.stopPropagation();
});


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