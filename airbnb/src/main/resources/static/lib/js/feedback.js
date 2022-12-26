/* 피드백 팝업 */
/*피드백 버튼 눌렀을 때*/
$('#popup44').on('click', function() {
    $('#first_18').attr('class', 'first_18');
})
/*피드백 닫기 버튼 눌렀을 때*/
$('#ekerl18').on('click', function() {
    $('.first_18').attr('class', 'first_18 _kkkkkkk');
    $("#button642").attr("disabled", true)
})
/*피드백셀렉트 버튼 활성 눌렀을 때*/
$('._1fnnolo').on("change", function() {
    $("#button642").attr("disabled", false)
})