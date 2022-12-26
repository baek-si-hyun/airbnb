// 항목 선택시 테두리
let lodging_type2;
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('._dkkqb8')
    for (const button of buttons) {
        button.addEventListener('click', function () {
            if(document.getElementsByClassName('_28hxjy8').length >= 1){
                for(const off_button of buttons){
                    off_button.className = '_dkkqb8'
                }
            }
            this.className = '_28hxjy8'
            lodging_type2 = this.querySelector('._19uq0tn').innerText
            // 항목 선택시 다음 버튼 활성화
            document.querySelector('._1ku51f04').removeAttribute('disabled')
        });
    };
});

// 이전 버튼 클릭시 이전 페이지로 이동
$('._za4ekfm').click(function (){
    location.href='/pages/hostoption2/'+lodging_id;
})

let lodging_id = parseInt($('#iddiv').text())

$("._1ku51f04").on('click', function(){
    let jsonData = {
        transaction_time: new Date(),
        resultCode:"ok",
        description:"ok",
        data:{
            lodgingId: lodging_id,
            lodgingType2: lodging_type2
        }
    }

    $.post({
        url: '/api/room/hostoption3',
        data: JSON.stringify(jsonData),
        dataType: 'json',
        contentType: 'application/json',
        success: function(){
            // alert('등록성공!');
            location.href='/pages/hostoption4';
        },
        error: function(){
            // alert('다시 시도해주세요');
            location.reload();
        }
    });
});