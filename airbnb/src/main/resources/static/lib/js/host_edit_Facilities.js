/*에어컨 팝업 */
$('#check_toggle4').on('click', function() {
    $('#first_1').attr('class', 'first_1');
})

/*최소숙박 맞춤설정 닫기 버튼 눌렀을 때*/
$('#ekerl1').on('click', function() {
    $('#first_1').attr('class', 'first_1 _kkkkkkk');
    $("#wjwkd1").attr("disabled", true)
})
/*최소숙박 맞춤설정 취소 버튼 눌렀을 때*/
$('#cnlth1').on('click', function() {
    $('#first_1').attr('class', 'first_1 _kkkkkkk');
    $("#wjwkd1").attr("disabled", true)
})
$('._e296pg').on("change", function() {
    $("#wjwkd1").attr("disabled", false)
})


/* 필수품목 */
$(".check1").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle1").attr('class', '_1hwl8fxn')
        $("#check_toggle2").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle1").attr('class', '_15okx3g')
        $("#check_toggle2").attr('class', '_1hwl8fxn')

    }
})

$(".check2").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle2").attr('class', '_1hwl8fxn')
        $("#check_toggle1").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle2").attr('class', '_15okx3g')
    }
})

/* 에어컨 */
$(".check3").click(function() {
    _id = $(this).attr("v3_popular.ac.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.ac.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.ac.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle3").attr('class', '_1hwl8fxn')
        $("#check_toggle4").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.ac.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle3").attr('class', '_15okx3g')
        $("#check_toggle4").attr('class', '_1hwl8fxn')

    }
})

$(".check4").click(function() {
    _id = $(this).attr("v3_popular.ac.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.ac.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle4").attr('class', '_1hwl8fxn')
        $("#check_toggle3").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle4").attr('class', '_15okx3g')
    }
})

/* 청소용품*/
$(".check5").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle5").attr('class', '_1hwl8fxn')
        $("#check_toggle6").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle5").attr('class', '_15okx3g')
        $("#check_toggle6").attr('class', '_1hwl8fxn')

    }
})

$(".check6").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle6").attr('class', '_1hwl8fxn')
        $("#check_toggle5").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle6").attr('class', '_15okx3g')
    }
})

/* 기본조리도구*/
$(".check7").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle7").attr('class', '_1hwl8fxn')
        $("#check_toggle8").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle7").attr('class', '_15okx3g')
        $("#check_toggle8").attr('class', '_1hwl8fxn')

    }
})

$(".check8").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle8").attr('class', '_1hwl8fxn')
        $("#check_toggle7").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle8").attr('class', '_15okx3g')
    }
})

/* 업무 전용 공간 */
$(".check9").click(function() {
    _id = $(this).attr("v3_popular.laptop_friendly_workspace.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.laptop_friendly_workspace.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.laptop_friendly_workspace.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle9").attr('class', '_1hwl8fxn')
        $("#check_toggle10").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.laptop_friendly_workspace.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle9").attr('class', '_15okx3g')
        $("#check_toggle10").attr('class', '_1hwl8fxn')

    }
})

$(".check10").click(function() {
    _id = $(this).attr("v3_popular.laptop_friendly_workspace.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.laptop_friendly_workspace.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle10").attr('class', '_1hwl8fxn')
        $("#check_toggle9").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle10").attr('class', '_15okx3g')
    }
})

/* 식기류 */
$(".check11").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.dishes_and_silverware.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.dishes_and_silverware.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle11").attr('class', '_1hwl8fxn')
        $("#check_toggle12").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle11").attr('class', '_15okx3g')
        $("#check_toggle12").attr('class', '_1hwl8fxn')

    }
})

$(".check12").click(function() {
    _id = $(this).attr("v3_popular.dishes_and_silverware.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.dishes_and_silverware.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle12").attr('class', '_1hwl8fxn')
        $("#check_toggle11").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle12").attr('class', '_15okx3g')
    }
})

/* 건조기 */
$(".check13").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle13").attr('class', '_1hwl8fxn')
        $("#check_toggle14").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle13").attr('class', '_15okx3g')
        $("#check_toggle14").attr('class', '_1hwl8fxn')

    }
})

$(".check14").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle14").attr('class', '_1hwl8fxn')
        $("#check_toggle13").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle14").attr('class', '_15okx3g')
    }
})

/* 헤어드라이어 */
$(".check15").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle15").attr('class', '_1hwl8fxn')
        $("#check_toggle6").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle15").attr('class', '_15okx3g')
        $("#check_toggle16").attr('class', '_1hwl8fxn')

    }
})

$(".check16").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle16").attr('class', '_1hwl8fxn')
        $("#check_toggle15").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle16").attr('class', '_15okx3g')
    }
})

/* 난방 */
$(".check17").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle17").attr('class', '_1hwl8fxn')
        $("#check_toggle18").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle17").attr('class', '_15okx3g')
        $("#check_toggle18").attr('class', '_1hwl8fxn')

    }
})

$(".check18").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle18").attr('class', '_1hwl8fxn')
        $("#check_toggle17").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle18").attr('class', '_15okx3g')
    }
})

/* 자쿠지 */
$(".check19").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle19").attr('class', '_1hwl8fxn')
        $("#check_toggle20").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle19").attr('class', '_15okx3g')
        $("#check_toggle20").attr('class', '_1hwl8fxn')

    }
})

$(".check20").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle20").attr('class', '_1hwl8fxn')
        $("#check_toggle19").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle20").attr('class', '_15okx3g')
    }
})

/* 주방 */
$(".check21").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle21").attr('class', '_1hwl8fxn')
        $("#check_toggle22").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle21").attr('class', '_15okx3g')
        $("#check_toggle22").attr('class', '_1hwl8fxn')

    }
})

$(".check22").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle22").attr('class', '_1hwl8fxn')
        $("#check_toggle21").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle22").attr('class', '_15okx3g')
    }
})

/* 수영장 */
$(".check23").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle23").attr('class', '_1hwl8fxn')
        $("#check_toggle24").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle23").attr('class', '_15okx3g')
        $("#check_toggle24").attr('class', '_1hwl8fxn')

    }
})

$(".check24").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle24").attr('class', '_1hwl8fxn')
        $("#check_toggle23").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle24").attr('class', '_15okx3g')
    }
})

/* TV */
$(".check25").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle25").attr('class', '_1hwl8fxn')
        $("#check_toggle26").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle25").attr('class', '_15okx3g')
        $("#check_toggle26").attr('class', '_1hwl8fxn')

    }
})

$(".check26").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle26").attr('class', '_1hwl8fxn')
        $("#check_toggle25").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle26").attr('class', '_15okx3g')
    }
})

/* 세탁기 */
$(".check27").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle27").attr('class', '_1hwl8fxn')
        $("#check_toggle28").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle27").attr('class', '_15okx3g')
        $("#check_toggle28").attr('class', '_1hwl8fxn')

    }
})

$(".check28").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle28").attr('class', '_1hwl8fxn')
        $("#check_toggle27").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle28").attr('class', '_15okx3g')
    }
})

/* 무선인터넷 */
$(".check29").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle29").attr('class', '_1hwl8fxn')
        $("#check_toggle30").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle29").attr('class', '_15okx3g')
        $("#check_toggle30").attr('class', '_1hwl8fxn')

    }
})

$(".check30").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle30").attr('class', '_1hwl8fxn')
        $("#check_toggle29").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle30").attr('class', '_15okx3g')
    }
})

/* 욕조 */
$(".check31").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle31").attr('class', '_1hwl8fxn')
        $("#check_toggle32").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle31").attr('class', '_15okx3g')
        $("#check_toggle32").attr('class', '_1hwl8fxn')

    }
})

$(".check32").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle32").attr('class', '_1hwl8fxn')
        $("#check_toggle31").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle32").attr('class', '_15okx3g')
    }
})

/* 비데 */
$(".check33").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle33").attr('class', '_1hwl8fxn')
        $("#check_toggle34").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle33").attr('class', '_15okx3g')
        $("#check_toggle34").attr('class', '_1hwl8fxn')

    }
})

$(".check34").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle34").attr('class', '_1hwl8fxn')
        $("#check_toggle33").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle34").attr('class', '_15okx3g')
    }
})

/* 바디클렌저 */
$(".check35").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle35").attr('class', '_1hwl8fxn')
        $("#check_toggle36").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle35").attr('class', '_15okx3g')
        $("#check_toggle36").attr('class', '_1hwl8fxn')

    }
})

$(".check36").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle36").attr('class', '_1hwl8fxn')
        $("#check_toggle35").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle36").attr('class', '_15okx3g')
    }
})

/* 청소용품 */
$(".check37").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle37").attr('class', '_1hwl8fxn')
        $("#check_toggle38").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle37").attr('class', '_15okx3g')
        $("#check_toggle38").attr('class', '_1hwl8fxn')

    }
})

$(".check38").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle38").attr('class', '_1hwl8fxn')
        $("#check_toggle37").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle38").attr('class', '_15okx3g')
    }
})

/* 컨디셔너 */
$(".check39").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle39").attr('class', '_1hwl8fxn')
        $("#check_toggle40").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle39").attr('class', '_15okx3g')
        $("#check_toggle40").attr('class', '_1hwl8fxn')

    }
})

$(".check40").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle40").attr('class', '_1hwl8fxn')
        $("#check_toggle39").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle40").attr('class', '_15okx3g')
    }
})

/* 헤어드라이어 */
$(".check41").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle41").attr('class', '_1hwl8fxn')
        $("#check_toggle42").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle41").attr('class', '_15okx3g')
        $("#check_toggle42").attr('class', '_1hwl8fxn')

    }
})

$(".check42").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle42").attr('class', '_1hwl8fxn')
        $("#check_toggle41").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle42").attr('class', '_15okx3g')
    }
})

/* 온수 */
$(".check43").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle43").attr('class', '_1hwl8fxn')
        $("#check_toggle44").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle43").attr('class', '_15okx3g')
        $("#check_toggle44").attr('class', '_1hwl8fxn')

    }
})

$(".check44").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle44").attr('class', '_1hwl8fxn')
        $("#check_toggle43").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle44").attr('class', '_15okx3g')
    }
})

/* 야외샤월시설 */
$(".check45").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle45").attr('class', '_1hwl8fxn')
        $("#check_toggle46").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle45").attr('class', '_15okx3g')
        $("#check_toggle46").attr('class', '_1hwl8fxn')

    }
})

$(".check46").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle46").attr('class', '_1hwl8fxn')
        $("#check_toggle45").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle46").attr('class', '_15okx3g')
    }
})

/* 샴푸 */
$(".check47").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle47").attr('class', '_1hwl8fxn')
        $("#check_toggle48").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle47").attr('class', '_15okx3g')
        $("#check_toggle48").attr('class', '_1hwl8fxn')

    }
})

$(".check48").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle48").attr('class', '_1hwl8fxn')
        $("#check_toggle47").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle48").attr('class', '_15okx3g')
    }
})

/* 샤워젤 */
$(".check49").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle49").attr('class', '_1hwl8fxn')
        $("#check_toggle50").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle49").attr('class', '_15okx3g')
        $("#check_toggle50").attr('class', '_1hwl8fxn')

    }
})

$(".check50").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle50").attr('class', '_1hwl8fxn')
        $("#check_toggle49").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle50").attr('class', '_15okx3g')
    }
})

/* ---------------침실 및 세탁시설 ---------------*/


/* 필수품목 */
$(".check51").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle51").attr('class', '_1hwl8fxn')
        $("#check_toggle52").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle51").attr('class', '_15okx3g')
        $("#check_toggle52").attr('class', '_1hwl8fxn')

    }
})

$(".check52").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle52").attr('class', '_1hwl8fxn')
        $("#check_toggle51").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle52").attr('class', '_15okx3g')
    }
})

/* 침구 */
$(".check53").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle53").attr('class', '_1hwl8fxn')
        $("#check_toggle54").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle53").attr('class', '_15okx3g')
        $("#check_toggle54").attr('class', '_1hwl8fxn')

    }
})

$(".check54").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle54").attr('class', '_1hwl8fxn')
        $("#check_toggle53").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle54").attr('class', '_15okx3g')
    }
})

/* 의류 보관 공간 */
$(".check55").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle55").attr('class', '_1hwl8fxn')
        $("#check_toggle56").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle55").attr('class', '_15okx3g')
        $("#check_toggle56").attr('class', '_1hwl8fxn')

    }
})

$(".check56").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle56").attr('class', '_1hwl8fxn')
        $("#check_toggle55").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle56").attr('class', '_15okx3g')
    }
})

/* 건조기 */
$(".check57").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle57").attr('class', '_1hwl8fxn')
        $("#check_toggle58").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle57").attr('class', '_15okx3g')
        $("#check_toggle58").attr('class', '_1hwl8fxn')

    }
})

$(".check58").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle58").attr('class', '_1hwl8fxn')
        $("#check_toggle57").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle58").attr('class', '_15okx3g')
    }
})

/* 의류 건조대 */
$(".check59").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle59").attr('class', '_1hwl8fxn')
        $("#check_toggle60").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle59").attr('class', '_15okx3g')
        $("#check_toggle60").attr('class', '_1hwl8fxn')

    }
})

$(".check60").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle60").attr('class', '_1hwl8fxn')
        $("#check_toggle59").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle60").attr('class', '_15okx3g')
    }
})

/* 여분의 배개와 담요 */
$(".check61").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle61").attr('class', '_1hwl8fxn')
        $("#check_toggle62").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle61").attr('class', '_15okx3g')
        $("#check_toggle62").attr('class', '_1hwl8fxn')

    }
})

$(".check62").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle62").attr('class', '_1hwl8fxn')
        $("#check_toggle61").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle62").attr('class', '_15okx3g')
    }
})

/* 옷걸이 */
$(".check63").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle63").attr('class', '_1hwl8fxn')
        $("#check_toggle64").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle63").attr('class', '_15okx3g')
        $("#check_toggle64").attr('class', '_1hwl8fxn')

    }
})

$(".check64").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle64").attr('class', '_1hwl8fxn')
        $("#check_toggle63").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle64").attr('class', '_15okx3g')
    }
})

/* 다리미 */
$(".check65").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle65").attr('class', '_1hwl8fxn')
        $("#check_toggle66").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle65").attr('class', '_15okx3g')
        $("#check_toggle66").attr('class', '_1hwl8fxn')

    }
})

$(".check66").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle66").attr('class', '_1hwl8fxn')
        $("#check_toggle65").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle66").attr('class', '_15okx3g')
    }
})

/* 모기장 */
$(".check67").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle67").attr('class', '_1hwl8fxn')
        $("#check_toggle68").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle67").attr('class', '_15okx3g')
        $("#check_toggle68").attr('class', '_1hwl8fxn')

    }
})

$(".check68").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle68").attr('class', '_1hwl8fxn')
        $("#check_toggle67").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle68").attr('class', '_15okx3g')
    }
})

/* 암막커튼 */
$(".check69").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle69").attr('class', '_1hwl8fxn')
        $("#check_toggle70").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle69").attr('class', '_15okx3g')
        $("#check_toggle70").attr('class', '_1hwl8fxn')

    }
})

$(".check70").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle70").attr('class', '_1hwl8fxn')
        $("#check_toggle69").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle70").attr('class', '_15okx3g')
    }
})

/* 금고 */
$(".check71").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle71").attr('class', '_1hwl8fxn')
        $("#check_toggle72").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle71").attr('class', '_15okx3g')
        $("#check_toggle72").attr('class', '_1hwl8fxn')

    }
})

$(".check72").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle72").attr('class', '_1hwl8fxn')
        $("#check_toggle71").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle72").attr('class', '_15okx3g')
    }
})

/* 세탁기 */
$(".check73").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle73").attr('class', '_1hwl8fxn')
        $("#check_toggle74").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle73").attr('class', '_15okx3g')
        $("#check_toggle74").attr('class', '_1hwl8fxn')

    }
})

$(".check74").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle74").attr('class', '_1hwl8fxn')
        $("#check_toggle73").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle74").attr('class', '_15okx3g')
    }
})

/*----------------엔터테이먼트------------------*/

/* 도서 및 읽을거리 */
$(".check75").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle75").attr('class', '_1hwl8fxn')
        $("#check_toggle76").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle75").attr('class', '_15okx3g')
        $("#check_toggle76").attr('class', '_1hwl8fxn')

    }
})

$(".check76").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle76").attr('class', '_1hwl8fxn')
        $("#check_toggle75").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle76").attr('class', '_15okx3g')
    }
})

/* 이더넷 연결지원 */
$(".check77").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle77").attr('class', '_1hwl8fxn')
        $("#check_toggle78").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle77").attr('class', '_15okx3g')
        $("#check_toggle78").attr('class', '_1hwl8fxn')

    }
})

$(".check78").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle78").attr('class', '_1hwl8fxn')
        $("#check_toggle77").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle78").attr('class', '_15okx3g')
    }
})

/* 운동기구 */
$(".check79").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle79").attr('class', '_1hwl8fxn')
        $("#check_toggle80").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle79").attr('class', '_15okx3g')
        $("#check_toggle80").attr('class', '_1hwl8fxn')

    }
})

$(".check80").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle80").attr('class', '_1hwl8fxn')
        $("#check_toggle79").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle80").attr('class', '_15okx3g')
    }
})

/* 게임기 */
$(".check81").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle81").attr('class', '_1hwl8fxn')
        $("#check_toggle82").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle81").attr('class', '_15okx3g')
        $("#check_toggle82").attr('class', '_1hwl8fxn')

    }
})

$(".check82").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle82").attr('class', '_1hwl8fxn')
        $("#check_toggle81").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle82").attr('class', '_15okx3g')
    }
})

/* 피아노 */
$(".check83").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle83").attr('class', '_1hwl8fxn')
        $("#check_toggle84").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle83").attr('class', '_15okx3g')
        $("#check_toggle84").attr('class', '_1hwl8fxn')

    }
})

$(".check84").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle84").attr('class', '_1hwl8fxn')
        $("#check_toggle83").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle84").attr('class', '_15okx3g')
    }
})

/* 탁구대 */
$(".check85").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle85").attr('class', '_1hwl8fxn')
        $("#check_toggle86").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle85").attr('class', '_15okx3g')
        $("#check_toggle86").attr('class', '_1hwl8fxn')

    }
})

$(".check86").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle86").attr('class', '_1hwl8fxn')
        $("#check_toggle85").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle86").attr('class', '_15okx3g')
    }
})

/* 당구대 */
$(".check87").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle87").attr('class', '_1hwl8fxn')
        $("#check_toggle88").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle87").attr('class', '_15okx3g')
        $("#check_toggle88").attr('class', '_1hwl8fxn')

    }
})

$(".check88").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle88").attr('class', '_1hwl8fxn')
        $("#check_toggle87").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle88").attr('class', '_15okx3g')
    }
})

/* 녹음기 */
$(".check89").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle89").attr('class', '_1hwl8fxn')
        $("#check_toggle90").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle89").attr('class', '_15okx3g')
        $("#check_toggle90").attr('class', '_1hwl8fxn')

    }
})

$(".check90").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle90").attr('class', '_1hwl8fxn')
        $("#check_toggle89").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle90").attr('class', '_15okx3g')
    }
})

/* 음향시스템 */
$(".check91").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle91").attr('class', '_1hwl8fxn')
        $("#check_toggle92").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle91").attr('class', '_15okx3g')
        $("#check_toggle92").attr('class', '_1hwl8fxn')

    }
})

$(".check92").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle92").attr('class', '_1hwl8fxn')
        $("#check_toggle91").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle92").attr('class', '_15okx3g')
    }
})

/* 티비 */
$(".check93").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle93").attr('class', '_1hwl8fxn')
        $("#check_toggle94").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle93").attr('class', '_15okx3g')
        $("#check_toggle94").attr('class', '_1hwl8fxn')

    }
})

$(".check94").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle94").attr('class', '_1hwl8fxn')
        $("#check_toggle93").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle94").attr('class', '_15okx3g')
    }
})


/*-------------------------------가족----------------------------------*/

/* 아기욕조 */
$(".check95").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle95").attr('class', '_1hwl8fxn')
        $("#check_toggle96").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle95").attr('class', '_15okx3g')
        $("#check_toggle96").attr('class', '_1hwl8fxn')

    }
})

$(".check96").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle96").attr('class', '_1hwl8fxn')
        $("#check_toggle95").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle96").attr('class', '_15okx3g')
    }
})

/* 아기모니터 */
$(".check97").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle97").attr('class', '_1hwl8fxn')
        $("#check_toggle98").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle97").attr('class', '_15okx3g')
        $("#check_toggle98").attr('class', '_1hwl8fxn')

    }
})

$(".check98").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle98").attr('class', '_1hwl8fxn')
        $("#check_toggle97").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle98").attr('class', '_15okx3g')
    }
})

/* 아기용 안전문 */
$(".check99").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle99").attr('class', '_1hwl8fxn')
        $("#check_toggle100").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle99").attr('class', '_15okx3g')
        $("#check_toggle100").attr('class', '_1hwl8fxn')

    }
})

$(".check100").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle100").attr('class', '_1hwl8fxn')
        $("#check_toggle99").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle100").attr('class', '_15okx3g')
    }
})


/* 베이비시터 추천가능  */
$(".check101").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle101").attr('class', '_1hwl8fxn')
        $("#check_toggle102").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle101").attr('class', '_15okx3g')
        $("#check_toggle102").attr('class', '_1hwl8fxn')

    }
})

$(".check102").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle102").attr('class', '_1hwl8fxn')
        $("#check_toggle101").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle102").attr('class', '_15okx3g')
    }
})



/* 보드게임 */
$(".check103").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle103").attr('class', '_1hwl8fxn')
        $("#check_toggle104").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle103").attr('class', '_15okx3g')
        $("#check_toggle104").attr('class', '_1hwl8fxn')

    }
})

$(".check104").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle104").attr('class', '_1hwl8fxn')
        $("#check_toggle103").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle104").attr('class', '_15okx3g')
    }
})



/* 기저귀 교환대 */
$(".check105").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle105").attr('class', '_1hwl8fxn')
        $("#check_toggle106").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle105").attr('class', '_15okx3g')
        $("#check_toggle106").attr('class', '_1hwl8fxn')

    }
})

$(".check106").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle106").attr('class', '_1hwl8fxn')
        $("#check_toggle105").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle106").attr('class', '_15okx3g')
    }
})



/* 어린이용 책과 장난감 */
$(".check107").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle107").attr('class', '_1hwl8fxn')
        $("#check_toggle108").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle107").attr('class', '_15okx3g')
        $("#check_toggle108").attr('class', '_1hwl8fxn')

    }
})

$(".check108").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle108").attr('class', '_1hwl8fxn')
        $("#check_toggle107").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle108").attr('class', '_15okx3g')
    }
})



/* 어린이용 식기 */
$(".check109").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle109").attr('class', '_1hwl8fxn')
        $("#check_toggle110").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle109").attr('class', '_15okx3g')
        $("#check_toggle110").attr('class', '_1hwl8fxn')

    }
})

$(".check110").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle110").attr('class', '_1hwl8fxn')
        $("#check_toggle109").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle110").attr('class', '_15okx3g')
    }
})



/* 아기 침대 */
$(".check111").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle111").attr('class', '_1hwl8fxn')
        $("#check_toggle112").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle111").attr('class', '_15okx3g')
        $("#check_toggle112").attr('class', '_1hwl8fxn')

    }
})

$(".check112").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle112").attr('class', '_1hwl8fxn')
        $("#check_toggle111").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle112").attr('class', '_15okx3g')
    }
})



/* 벽난로 안전장치 */
$(".check113").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle113").attr('class', '_1hwl8fxn')
        $("#check_toggle114").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle113").attr('class', '_15okx3g')
        $("#check_toggle114").attr('class', '_1hwl8fxn')

    }
})

$(".check114").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle114").attr('class', '_1hwl8fxn')
        $("#check_toggle113").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle114").attr('class', '_15okx3g')
    }
})



/* 유아용 식탁의자 */
$(".check115").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle115").attr('class', '_1hwl8fxn')
        $("#check_toggle116").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle115").attr('class', '_15okx3g')
        $("#check_toggle116").attr('class', '_1hwl8fxn')

    }
})

$(".check116").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle116").attr('class', '_1hwl8fxn')
        $("#check_toggle115").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle116").attr('class', '_15okx3g')
    }
})



/* 전원 콘센트 덮개 */
$(".check117").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle117").attr('class', '_1hwl8fxn')
        $("#check_toggle118").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle117").attr('class', '_15okx3g')
        $("#check_toggle118").attr('class', '_1hwl8fxn')

    }
})

$(".check118").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle118").attr('class', '_1hwl8fxn')
        $("#check_toggle117").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle118").attr('class', '_15okx3g')
    }
})



/* 다기능/여행용 안전장치 */
$(".check119").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle119").attr('class', '_1hwl8fxn')
        $("#check_toggle120").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle119").attr('class', '_15okx3g')
        $("#check_toggle120").attr('class', '_1hwl8fxn')

    }
})

$(".check120").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle120").attr('class', '_1hwl8fxn')
        $("#check_toggle119").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle120").attr('class', '_15okx3g')
    }
})



/* 테이블 모서리 보호대 */
$(".check121").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle121").attr('class', '_1hwl8fxn')
        $("#check_toggle122").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle121").attr('class', '_15okx3g')
        $("#check_toggle122").attr('class', '_1hwl8fxn')

    }
})

$(".check122").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle122").attr('class', '_1hwl8fxn')
        $("#check_toggle121").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle122").attr('class', '_15okx3g')
    }
})



/* 창문안전 장치 설치 */
$(".check123").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle123").attr('class', '_1hwl8fxn')
        $("#check_toggle124").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle123").attr('class', '_15okx3g')
        $("#check_toggle124").attr('class', '_1hwl8fxn')

    }
})

$(".check124").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle124").attr('class', '_1hwl8fxn')
        $("#check_toggle123").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle124").attr('class', '_15okx3g')
    }
})


/* --------------------- 냉난방 ------------------------------- */


/* 에어컨 */
$(".check125").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle125").attr('class', '_1hwl8fxn')
        $("#check_toggle126").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle125").attr('class', '_15okx3g')
        $("#check_toggle126").attr('class', '_1hwl8fxn')

    }
})

$(".check126").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle126").attr('class', '_1hwl8fxn')
        $("#check_toggle125").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle126").attr('class', '_15okx3g')
    }
})



/* 천장 선풍기 */
$(".check127").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle127").attr('class', '_1hwl8fxn')
        $("#check_toggle128").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle127").attr('class', '_15okx3g')
        $("#check_toggle128").attr('class', '_1hwl8fxn')

    }
})

$(".check128").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle128").attr('class', '_1hwl8fxn')
        $("#check_toggle127").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle128").attr('class', '_15okx3g')
    }
})



/* 난방 */
$(".check129").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle129").attr('class', '_1hwl8fxn')
        $("#check_toggle130").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle129").attr('class', '_15okx3g')
        $("#check_toggle130").attr('class', '_1hwl8fxn')

    }
})

$(".check130").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle130").attr('class', '_1hwl8fxn')
        $("#check_toggle129").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle130").attr('class', '_15okx3g')
    }
})



/* 실내 벽난로 */
$(".check131").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle131").attr('class', '_1hwl8fxn')
        $("#check_toggle132").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle131").attr('class', '_15okx3g')
        $("#check_toggle132").attr('class', '_1hwl8fxn')

    }
})

$(".check132").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle132").attr('class', '_1hwl8fxn')
        $("#check_toggle131").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle132").attr('class', '_15okx3g')
    }
})



/* 선풍기 */
$(".check133").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle133").attr('class', '_1hwl8fxn')
        $("#check_toggle134").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle133").attr('class', '_15okx3g')
        $("#check_toggle134").attr('class', '_1hwl8fxn')

    }
})

$(".check134").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle134").attr('class', '_1hwl8fxn')
        $("#check_toggle133").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle134").attr('class', '_15okx3g')
    }
})

/*----------------------------숙소 안전----------------------------------*/


/* 일산화 탄소 경보기 */
$(".check135").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle135").attr('class', '_1hwl8fxn')
        $("#check_toggle136").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle135").attr('class', '_15okx3g')
        $("#check_toggle136").attr('class', '_1hwl8fxn')

    }
})

$(".check136").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle136").attr('class', '_1hwl8fxn')
        $("#check_toggle135").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle136").attr('class', '_15okx3g')
    }
})



/* 소화기 */
$(".check137").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle137").attr('class', '_1hwl8fxn')
        $("#check_toggle138").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle137").attr('class', '_15okx3g')
        $("#check_toggle138").attr('class', '_1hwl8fxn')

    }
})

$(".check138").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle138").attr('class', '_1hwl8fxn')
        $("#check_toggle137").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle138").attr('class', '_15okx3g')
    }
})



/* 구급상자 */
$(".check139").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle139").attr('class', '_1hwl8fxn')
        $("#check_toggle140").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle139").attr('class', '_15okx3g')
        $("#check_toggle140").attr('class', '_1hwl8fxn')

    }
})

$(".check140").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle140").attr('class', '_1hwl8fxn')
        $("#check_toggle139").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle140").attr('class', '_15okx3g')
    }
})



/* 화재 경보기 */
$(".check141").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle141").attr('class', '_1hwl8fxn')
        $("#check_toggle142").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle141").attr('class', '_15okx3g')
        $("#check_toggle142").attr('class', '_1hwl8fxn')

    }
})

$(".check142").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle142").attr('class', '_1hwl8fxn')
        $("#check_toggle141").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle142").attr('class', '_15okx3g')
    }
})

/*---------------------------인터넷 업무 공간------------------------------------ */

/* 업무 전용 공간 */
$(".check143").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle143").attr('class', '_1hwl8fxn')
        $("#check_toggle144").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle143").attr('class', '_15okx3g')
        $("#check_toggle144").attr('class', '_1hwl8fxn')

    }
})

$(".check144").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle144").attr('class', '_1hwl8fxn')
        $("#check_toggle143").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle144").attr('class', '_15okx3g')
    }
})



/* 포켓 와이파이 */
$(".check145").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle145").attr('class', '_1hwl8fxn')
        $("#check_toggle146").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle145").attr('class', '_15okx3g')
        $("#check_toggle146").attr('class', '_1hwl8fxn')

    }
})

$(".check146").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle146").attr('class', '_1hwl8fxn')
        $("#check_toggle145").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle146").attr('class', '_15okx3g')
    }
})



/* 무선인터넷 */
$(".check147").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle147").attr('class', '_1hwl8fxn')
        $("#check_toggle148").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle147").attr('class', '_15okx3g')
        $("#check_toggle148").attr('class', '_1hwl8fxn')

    }
})

$(".check148").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle148").attr('class', '_1hwl8fxn')
        $("#check_toggle147").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle148").attr('class', '_15okx3g')
    }
})

/*---------------------주방 및 식당------------------------- */

/* 제빵용시트 */
$(".check149").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle149").attr('class', '_1hwl8fxn')
        $("#check_toggle150").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle149").attr('class', '_15okx3g')
        $("#check_toggle150").attr('class', '_1hwl8fxn')

    }
})

$(".check150").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle150").attr('class', '_1hwl8fxn')
        $("#check_toggle149").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle150").attr('class', '_15okx3g')
    }
})
/* 바비큐도구 */
$(".check151").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle151").attr('class', '_1hwl8fxn')
        $("#check_toggle152").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle151").attr('class', '_15okx3g')
        $("#check_toggle152").attr('class', '_1hwl8fxn')

    }
})

$(".check152").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle152").attr('class', '_1hwl8fxn')
        $("#check_toggle151").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle152").attr('class', '_15okx3g')
    }
})
/* 제빵기 */
$(".check153").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle153").attr('class', '_1hwl8fxn')
        $("#check_toggle154").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle153").attr('class', '_15okx3g')
        $("#check_toggle154").attr('class', '_1hwl8fxn')

    }
})

$(".check154").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle154").attr('class', '_1hwl8fxn')
        $("#check_toggle153").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle154").attr('class', '_15okx3g')
    }
})
/* 믹서기 */
$(".check155").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle155").attr('class', '_1hwl8fxn')
        $("#check_toggle156").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle155").attr('class', '_15okx3g')
        $("#check_toggle156").attr('class', '_1hwl8fxn')

    }
})

$(".check156").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle156").attr('class', '_1hwl8fxn')
        $("#check_toggle155").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle156").attr('class', '_15okx3g')
    }
})
/* 커피 */
$(".check157").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle157").attr('class', '_1hwl8fxn')
        $("#check_toggle158").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle157").attr('class', '_15okx3g')
        $("#check_toggle158").attr('class', '_1hwl8fxn')

    }
})

$(".check158").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle158").attr('class', '_1hwl8fxn')
        $("#check_toggle157").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle158").attr('class', '_15okx3g')
    }
})

/* 커피메이커 */
$(".check159").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle159").attr('class', '_1hwl8fxn')
        $("#check_toggle160").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle159").attr('class', '_15okx3g')
        $("#check_toggle160").attr('class', '_1hwl8fxn')

    }
})

$(".check160").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle160").attr('class', '_1hwl8fxn')
        $("#check_toggle159").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle160").attr('class', '_15okx3g')
    }
})
/* 기본조리도구 */
$(".check161").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle161").attr('class', '_1hwl8fxn')
        $("#check_toggle162").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle161").attr('class', '_15okx3g')
        $("#check_toggle162").attr('class', '_1hwl8fxn')

    }
})

$(".check162").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle162").attr('class', '_1hwl8fxn')
        $("#check_toggle161").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle162").attr('class', '_15okx3g')
    }
})
/* 식탁 */
$(".check163").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle163").attr('class', '_1hwl8fxn')
        $("#check_toggle164").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle163").attr('class', '_15okx3g')
        $("#check_toggle164").attr('class', '_1hwl8fxn')

    }
})

$(".check164").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle164").attr('class', '_1hwl8fxn')
        $("#check_toggle163").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle164").attr('class', '_15okx3g')
    }
})
/* 식기류 */
$(".check165").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle165").attr('class', '_1hwl8fxn')
        $("#check_toggle166").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle165").attr('class', '_15okx3g')
        $("#check_toggle166").attr('class', '_1hwl8fxn')

    }
})

$(".check166").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle166").attr('class', '_1hwl8fxn')
        $("#check_toggle165").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle166").attr('class', '_15okx3g')
    }
})
/* 식기세척기 */
$(".check167").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle167").attr('class', '_1hwl8fxn')
        $("#check_toggle168").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle167").attr('class', '_15okx3g')
        $("#check_toggle168").attr('class', '_1hwl8fxn')

    }
})

$(".check168").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle168").attr('class', '_1hwl8fxn')
        $("#check_toggle167").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle168").attr('class', '_15okx3g')
    }
})
/* 냉동고 */
$(".check169").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle169").attr('class', '_1hwl8fxn')
        $("#check_toggle170").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle169").attr('class', '_15okx3g')
        $("#check_toggle170").attr('class', '_1hwl8fxn')

    }
})

$(".check170").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle170").attr('class', '_1hwl8fxn')
        $("#check_toggle169").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle170").attr('class', '_15okx3g')
    }
})
/* 따듯한물주전자 */
$(".check171").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle171").attr('class', '_1hwl8fxn')
        $("#check_toggle172").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle171").attr('class', '_15okx3g')
        $("#check_toggle172").attr('class', '_1hwl8fxn')

    }
})

$(".check172").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle172").attr('class', '_1hwl8fxn')
        $("#check_toggle171").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle172").attr('class', '_15okx3g')
    }
})
/* 주방 */
$(".check173").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle173").attr('class', '_1hwl8fxn')
        $("#check_toggle174").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle173").attr('class', '_15okx3g')
        $("#check_toggle174").attr('class', '_1hwl8fxn')

    }
})

$(".check174").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle174").attr('class', '_1hwl8fxn')
        $("#check_toggle173").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle174").attr('class', '_15okx3g')
    }
})
/* 전자레인지 */
$(".check175").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle175").attr('class', '_1hwl8fxn')
        $("#check_toggle176").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle175").attr('class', '_15okx3g')
        $("#check_toggle176").attr('class', '_1hwl8fxn')

    }
})

$(".check176").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle176").attr('class', '_1hwl8fxn')
        $("#check_toggle175").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle175").attr('class', '_15okx3g')
    }
})
/* 소형냉장고 */
$(".check177").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle177").attr('class', '_1hwl8fxn')
        $("#check_toggle178").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle177").attr('class', '_15okx3g')
        $("#check_toggle178").attr('class', '_1hwl8fxn')

    }
})

$(".check178").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle178").attr('class', '_1hwl8fxn')
        $("#check_toggle177").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle178").attr('class', '_15okx3g')
    }
})
/* 오븐 */
$(".check179").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle179").attr('class', '_1hwl8fxn')
        $("#check_toggle180").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle179").attr('class', '_15okx3g')
        $("#check_toggle180").attr('class', '_1hwl8fxn')

    }
})

$(".check180").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle180").attr('class', '_1hwl8fxn')
        $("#check_toggle179").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle180").attr('class', '_15okx3g')
    }
})
/* 냉장고 */
$(".check181").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle181").attr('class', '_1hwl8fxn')
        $("#check_toggle182").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle181").attr('class', '_15okx3g')
        $("#check_toggle182").attr('class', '_1hwl8fxn')

    }
})

$(".check182").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle182").attr('class', '_1hwl8fxn')
        $("#check_toggle181").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle182").attr('class', '_15okx3g')
    }
})
/* 전기밥솥 */
$(".check183").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle183").attr('class', '_1hwl8fxn')
        $("#check_toggle184").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle183").attr('class', '_15okx3g')
        $("#check_toggle184").attr('class', '_1hwl8fxn')

    }
})

$(".check184").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle184").attr('class', '_1hwl8fxn')
        $("#check_toggle183").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle184").attr('class', '_15okx3g')
    }
})
/* 가스레인지또는인덕션 */
$(".check185").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle185").attr('class', '_1hwl8fxn')
        $("#check_toggle186").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle185").attr('class', '_15okx3g')
        $("#check_toggle186").attr('class', '_1hwl8fxn')

    }
})

$(".check186").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle186").attr('class', '_1hwl8fxn')
        $("#check_toggle185").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle186").attr('class', '_15okx3g')
    }
})
/* 토스터기 */
$(".check187").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle187").attr('class', '_1hwl8fxn')
        $("#check_toggle188").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle187").attr('class', '_15okx3g')
        $("#check_toggle188").attr('class', '_1hwl8fxn')

    }
})

$(".check188").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle188").attr('class', '_1hwl8fxn')
        $("#check_toggle187").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle188").attr('class', '_15okx3g')
    }
})
/* 쓰레기압축기 */
$(".check189").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle189").attr('class', '_1hwl8fxn')
        $("#check_toggle190").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle189").attr('class', '_15okx3g')
        $("#check_toggle190").attr('class', '_1hwl8fxn')

    }
})

$(".check190").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle190").attr('class', '_1hwl8fxn')
        $("#check_toggle189").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle190").attr('class', '_15okx3g')
    }
})
/* 와인잔 */
$(".check191").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle191").attr('class', '_1hwl8fxn')
        $("#check_toggle192").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle191").attr('class', '_15okx3g')
        $("#check_toggle192").attr('class', '_1hwl8fxn')

    }
})

$(".check192").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle192").attr('class', '_1hwl8fxn')
        $("#check_toggle191").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle192").attr('class', '_15okx3g')
    }
})

/*-----------------------------------야외---------------------------------------- */
/* 뒷마당 */
$(".check193").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle193").attr('class', '_1hwl8fxn')
        $("#check_toggle194").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle193").attr('class', '_15okx3g')
        $("#check_toggle194").attr('class', '_1hwl8fxn')

    }
})

$(".check194").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle194").attr('class', '_1hwl8fxn')
        $("#check_toggle193").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle194").attr('class', '_15okx3g')
    }
})
/* 바비큐그릴 */
$(".check195").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle195").attr('class', '_1hwl8fxn')
        $("#check_toggle196").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle195").attr('class', '_15okx3g')
        $("#check_toggle196").attr('class', '_1hwl8fxn')

    }
})

$(".check196").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle196").attr('class', '_1hwl8fxn')
        $("#check_toggle195").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle196").attr('class', '_15okx3g')
    }
})
/* 해수욕필수품 */
$(".check197").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle197").attr('class', '_1hwl8fxn')
        $("#check_toggle198").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle197").attr('class', '_15okx3g')
        $("#check_toggle198").attr('class', '_1hwl8fxn')

    }
})

$(".check198").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle198").attr('class', '_1hwl8fxn')
        $("#check_toggle197").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle198").attr('class', '_15okx3g')
    }
})
/* 자전거 */
$(".check199").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle199").attr('class', '_1hwl8fxn')
        $("#check_toggle200").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle199").attr('class', '_15okx3g')
        $("#check_toggle200").attr('class', '_1hwl8fxn')

    }
})

$(".check200").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle200").attr('class', '_1hwl8fxn')
        $("#check_toggle199").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle200").attr('class', '_15okx3g')
    }
})

/* 보트계류장 */
$(".check201").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle201").attr('class', '_1hwl8fxn')
        $("#check_toggle202").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle201").attr('class', '_15okx3g')
        $("#check_toggle202").attr('class', '_1hwl8fxn')

    }
})

$(".check202").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle202").attr('class', '_1hwl8fxn')
        $("#check_toggle201").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle202").attr('class', '_15okx3g')
    }
})

/* 화로 */
$(".check203").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle203").attr('class', '_1hwl8fxn')
        $("#check_toggle204").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle203").attr('class', '_15okx3g')
        $("#check_toggle204").attr('class', '_1hwl8fxn')

    }
})

$(".check204").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle204").attr('class', '_1hwl8fxn')
        $("#check_toggle203").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle204").attr('class', '_15okx3g')
    }
})

/* 해먹 */
$(".check205").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle205").attr('class', '_1hwl8fxn')
        $("#check_toggle206").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle205").attr('class', '_15okx3g')
        $("#check_toggle206").attr('class', '_1hwl8fxn')

    }
})

$(".check206").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle206").attr('class', '_1hwl8fxn')
        $("#check_toggle205").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle206").attr('class', '_15okx3g')
    }
})

/* 카약 */
$(".check207").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle207").attr('class', '_1hwl8fxn')
        $("#check_toggle208").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle207").attr('class', '_15okx3g')
        $("#check_toggle208").attr('class', '_1hwl8fxn')

    }
})

$(".check208").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle208").attr('class', '_1hwl8fxn')
        $("#check_toggle207").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle208").attr('class', '_15okx3g')
    }
})


/* 야외식사 */
$(".check209").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle209").attr('class', '_1hwl8fxn')
        $("#check_toggle210").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle209").attr('class', '_15okx3g')
        $("#check_toggle210").attr('class', '_1hwl8fxn')

    }
})
$(".check210").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle210").attr('class', '_1hwl8fxn')
        $("#check_toggle209").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle210").attr('class', '_15okx3g')
    }
})

/* 야외가구 */
$(".check211").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle211").attr('class', '_1hwl8fxn')
        $("#check_toggle212").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle211").attr('class', '_15okx3g')
        $("#check_toggle212").attr('class', '_1hwl8fxn')

    }
})

$(".check212").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle212").attr('class', '_1hwl8fxn')
        $("#check_toggle211").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle212").attr('class', '_15okx3g')
    }
})

/* 야외주방 */
$(".check213").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle213").attr('class', '_1hwl8fxn')
        $("#check_toggle214").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle213").attr('class', '_15okx3g')
        $("#check_toggle214").attr('class', '_1hwl8fxn')

    }
})

$(".check214").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle214").attr('class', '_1hwl8fxn')
        $("#check_toggle213").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle214").attr('class', '_15okx3g')
    }
})

/* 파티오또는발코니 */
$(".check215").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle215").attr('class', '_1hwl8fxn')
        $("#check_toggle216").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle215").attr('class', '_15okx3g')
        $("#check_toggle216").attr('class', '_1hwl8fxn')

    }
})

$(".check216").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle216").attr('class', '_1hwl8fxn')
        $("#check_toggle215").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle216").attr('class', '_15okx3g')
    }
})


/*----------------------------주차장 및 기타시설 ----------------------------------- */
/* 엘리베이터 */
$(".check217").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle217").attr('class', '_1hwl8fxn')
        $("#check_toggle218").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle217").attr('class', '_15okx3g')
        $("#check_toggle218").attr('class', '_1hwl8fxn')

    }
})

$(".check218").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle218").attr('class', '_1hwl8fxn')
        $("#check_toggle217").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle218").attr('class', '_15okx3g')
    }
})

/* 전기차충전시설 */
$(".check219").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle219").attr('class', '_1hwl8fxn')
        $("#check_toggle220").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle219").attr('class', '_15okx3g')
        $("#check_toggle220").attr('class', '_1hwl8fxn')

    }
})

$(".check220").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle220").attr('class', '_1hwl8fxn')
        $("#check_toggle219").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle220").attr('class', '_15okx3g')
    }
})
/* 건물내무료주차 */
$(".check221").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle221").attr('class', '_1hwl8fxn')
        $("#check_toggle222").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle221").attr('class', '_15okx3g')
        $("#check_toggle222").attr('class', '_1hwl8fxn')

    }
})

$(".check222").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle222").attr('class', '_1hwl8fxn')
        $("#check_toggle221").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle222").attr('class', '_15okx3g')
    }
})
/* 도로주차(무료) */
$(".check223").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle223").attr('class', '_1hwl8fxn')
        $("#check_toggle224").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle223").attr('class', '_15okx3g')
        $("#check_toggle224").attr('class', '_1hwl8fxn')

    }
})

$(".check224").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle224").attr('class', '_1hwl8fxn')
        $("#check_toggle223").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle224").attr('class', '_15okx3g')
    }
})
/* 헬스장 */
$(".check225").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle225").attr('class', '_1hwl8fxn')
        $("#check_toggle226").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle225").attr('class', '_15okx3g')
        $("#check_toggle226").attr('class', '_1hwl8fxn')

    }
})

$(".check226").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle226").attr('class', '_1hwl8fxn')
        $("#check_toggle225").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle226").attr('class', '_15okx3g')
    }
})
/* 자쿠지 */
$(".check227").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle227").attr('class', '_1hwl8fxn')
        $("#check_toggle228").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle227").attr('class', '_15okx3g')
        $("#check_toggle228").attr('class', '_1hwl8fxn')

    }
})

$(".check228").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle228").attr('class', '_1hwl8fxn')
        $("#check_toggle227").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle228").attr('class', '_15okx3g')
    }
})
/* 외부유료주차 */
$(".check229").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle229").attr('class', '_1hwl8fxn')
        $("#check_toggle230").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle229").attr('class', '_15okx3g')
        $("#check_toggle230").attr('class', '_1hwl8fxn')

    }
})

$(".check230").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle230").attr('class', '_1hwl8fxn')
        $("#check_toggle229").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle230").attr('class', '_15okx3g')
    }
})
/* 건물내유료주차 */
$(".check231").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle231").attr('class', '_1hwl8fxn')
        $("#check_toggle232").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle231").attr('class', '_15okx3g')
        $("#check_toggle232").attr('class', '_1hwl8fxn')

    }
})

$(".check232").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle232").attr('class', '_1hwl8fxn')
        $("#check_toggle231").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle232").attr('class', '_15okx3g')
    }
})
/* 수영장 */
$(".check233").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle233").attr('class', '_1hwl8fxn')
        $("#check_toggle234").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle233").attr('class', '_15okx3g')
        $("#check_toggle234").attr('class', '_1hwl8fxn')

    }
})

$(".check234").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle234").attr('class', '_1hwl8fxn')
        $("#check_toggle233").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle234").attr('class', '_15okx3g')
    }
})
/* 사우나 */
$(".check235").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle235").attr('class', '_1hwl8fxn')
        $("#check_toggle236").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle235").attr('class', '_15okx3g')
        $("#check_toggle236").attr('class', '_1hwl8fxn')

    }
})

$(".check236").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle236").attr('class', '_1hwl8fxn')
        $("#check_toggle235").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle236").attr('class', '_15okx3g')
    }
})
/* 단층주택 */
$(".check237").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle237").attr('class', '_1hwl8fxn')
        $("#check_toggle238").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle237").attr('class', '_15okx3g')
        $("#check_toggle238").attr('class', '_1hwl8fxn')

    }
})

$(".check238").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle238").attr('class', '_1hwl8fxn')
        $("#check_toggle237").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle238").attr('class', '_15okx3g')
    }
})


/*------------------------서비스----------------------------- */



/* 아침식사 */
$(".check239").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle239").attr('class', '_1hwl8fxn')
        $("#check_toggle240").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle239").attr('class', '_15okx3g')
        $("#check_toggle240").attr('class', '_1hwl8fxn')

    }
})

$(".check240").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle240").attr('class', '_1hwl8fxn')
        $("#check_toggle239").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle240").attr('class', '_15okx3g')
    }
})


/* 체크아웃전청소 */
$(".check241").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle241").attr('class', '_1hwl8fxn')
        $("#check_toggle242").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle241").attr('class', '_15okx3g')
        $("#check_toggle242").attr('class', '_1hwl8fxn')

    }
})

$(".check242").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle242").attr('class', '_1hwl8fxn')
        $("#check_toggle241").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle242").attr('class', '_15okx3g')
    }
})

/* 장기숙박가능 */
$(".check243").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle243").attr('class', '_1hwl8fxn')
        $("#check_toggle244").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle243").attr('class', '_15okx3g')
        $("#check_toggle244").attr('class', '_1hwl8fxn')

    }
})

$(".check244").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle244").attr('class', '_1hwl8fxn')
        $("#check_toggle243").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle244").attr('class', '_15okx3g')
    }
})

/* 여행가방보관가능 */
$(".check245").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-no");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-no').attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle245").attr('class', '_1hwl8fxn')
        $("#check_toggle246").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $(this).attr('class', '._31v5fv');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._11mpi653');
        $("#check_toggle245").attr('class', '_15okx3g')
        $("#check_toggle246").attr('class', '_1hwl8fxn')

    }
})

$(".check246").click(function() {
    _id = $(this).attr("v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes");
    if ($(this).is(":checked")) {
        $("label[for='" + _id + "']").addClass("checked");
        $(this).attr('class', '_11mpi653');
        $('#v3_popular.essentials.amenity-row-toggle-DLS-toggle-yes').attr('class', '._31v5fv');
        $("#check_toggle246").attr('class', '_1hwl8fxn')
        $("#check_toggle245").attr('class', '_15okx3g')
    } else {
        $("label[for='" + _id + "']").removeClass("checked");
        $("#check_toggle246").attr('class', '_15okx3g')
    }
})