$('._1l56up5').on('click',function(){
    $(this).attr("class","_14osaqey");
});

$('._1c3ujs7').on('click',function(){
    $(this).attr("class","_1c3ujs7 focus-visible");
});

let content;
let textInput = document.querySelector('._1c3ujs7');
let textspan = document.querySelector('#textspan');
textInput.addEventListener('input',() => {
    content = textInput.value;
    

    if (content.length === 0 || content === '') {
        textspan.innerHTML = '37/500';
    } else {
        textspan.innerHTML = content.length + '/500';
    }

    if (content.length > 499) {
        textInput.value = textInput.value.substring(0,499);
    };

    if (content.length !== 0 || content.value !== ''){
        document.querySelector("._1ku51f04").removeAttribute("disabled");
    }
    if(content.length === 0 || content.value === ''){
        document.querySelector("._1ku51f04").setAttribute("disabled", "");
    }
});

let lodging_id = parseInt($('#iddiv').text())

$("._1ku51f04").on('click', function(){
    let jsonData = {
        transaction_time: new Date(),
        resultCode:"ok",
        description:"ok",
        data:{
            lodgingId: lodging_id,
            lodgingExplain: content
        }
    }

    $.post({
        url: '/api/room/hostoption12',
        data: JSON.stringify(jsonData),
        dataType: 'json',
        contentType: 'application/json',
        success: function(){
            // alert('등록성공!');
            location.href='/pages/hostoption13';
        },
        error: function(){
            // alert('다시 시도해주세요');
            location.reload();
        }
    });
});
        