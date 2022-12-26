let lodging_type1;
// 항목 선택시 테두리
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('._dkkqb8')
    for (const button of buttons) {
        button.addEventListener('click', function() {
            if (document.getElementsByClassName('_28hxjy8').length >= 1) {
                for (const off_button of buttons) {
                    off_button.className = '_dkkqb8'
                }
            }
            this.className = '_28hxjy8'
            lodging_type1 = this.querySelector('._19uq0tn').innerText
            // 항목 선택시 다음 버튼 활성화
            document.querySelector('._1ku51f04').removeAttribute('disabled')
        });
    };
});

// 선택된 값 서버에 전송
document.querySelector("._1ku51f04").addEventListener('click', function() {});

let mem_id = parseInt($('#iddiv2').text())
let lodging_id = parseInt($('#iddiv').text())


// 선택된 값 서버에 전송
$("._1ku51f04").on('click', function() {
    console.log(lodging_id)
    let jsonData1 = {
        transaction_time: new Date(),
        resultCode: "ok",
        description: "ok",
        data: {
            lodgingId: lodging_id,
            memId: mem_id

        }
    }
    console.log(jsonData1)
    $.post({
        url: '/api/room/hostoption1',
        data: JSON.stringify(jsonData1),
        dataType: 'json',
        contentType: 'application/json',
        success: function() {

        },
        error: function() {
            location.reload();
        }
    });

    let jsonData2 = {
        transaction_time: new Date(),
        resultCode: "ok",
        description: "ok",
        data: {
            lodgingId: lodging_id,
            memId: mem_id
        }
    }

    $.post({
        url: '/api/room/hostoption9/',
        dataType: 'json',
        data: JSON.stringify(jsonData2),
        contentType: 'application/json',
        success: function(res) {

        },
        error: function() {
            location.reload();
        }
    });

    let jsonData3 = {
        transaction_time: new Date(),
        resultCode: "ok",
        description: "ok",
        data: {
            lodgingId: lodging_id,
            lodgingType1: lodging_type1,

        }
    }
    console.log(jsonData3)
    $.post({
        url: '/api/room/hostoption2',
        data: JSON.stringify(jsonData3),
        dataType: 'json',
        contentType: 'application/json',
        success: function() {
            if (lodging_type1 == '아파트') {
                location.href = '/pages/hostoption3_1';
            } else if (lodging_type1 == '주택') {
                location.href = '/pages/hostoption3_2';
            } else if (lodging_type1 == '별채') {
                location.href = '/pages/hostoption3_3';
            } else if (lodging_type1 == '독특한 숙소') {
                location.href = '/pages/hostoption3_4';
            } else if (lodging_type1 == 'B&B') {
                location.href = '/pages/hostoption3_5';
            } else if (lodging_type1 == '부티크 호텔') {
                location.href = '/pages/hostoption3_6';
            }

        },
        error: function() {
            location.reload();
        }
    });

});