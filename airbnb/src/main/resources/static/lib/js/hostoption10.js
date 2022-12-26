document.querySelector('._1l56up5').addEventListener('click', () => {
    $(this).attr("class", "_14osaqey");
});


let content;
let textInput = document.querySelector('._yv33y4');
let textspan = document.querySelector('#textspan');
textInput.addEventListener('input', () => {
    content = textInput.value;

    if (content.length === 0 || content === '') {
        textspan.innerHTML = '0/50';
    } else {
        textspan.innerHTML = content.length + '/50';
    };

    if (content.length > 49) {
        textInput.value = textInput.value.substring(0, 49);
    };

    if (content.length !== 0 || content.value !== '') {
        document.querySelector("._1ku51f04").removeAttribute("disabled");
    }
    if (content.length === 0 || content.value === '') {
        document.querySelector("._1ku51f04").setAttribute("disabled", "");
    }
});

let lodging_id = parseInt(document.querySelector('#iddiv').innerText)

$("._1ku51f04").on('click', function() {
    let jsonData = {
        transaction_time: new Date(),
        resultCode: "ok",
        description: "ok",
        data: {
            lodgingId: lodging_id,
            lodgingTitle: content
        }
    }

    $.post({
        url: '/api/room/hostoption10',
        data: JSON.stringify(jsonData),
        dataType: 'json',
        contentType: 'application/json',
        success: function() {
            // alert('등록성공!');
            location.href = '/pages/hostoption12';
        },
        error: function() {
            // alert('다시 시도해주세요');
            location.reload();
        }
    });
});