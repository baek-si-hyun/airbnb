const optionBtn = document.querySelectorAll('._1nmot8t')
for (const btn of optionBtn) {
    btn.addEventListener('click', function() {
        if (this === btn) {
            if (btn.className === '_1nmot8t') {
                btn.className = '_19lvxaoa'
            } else {
                btn.className = '_1nmot8t'
            }
        }
    })
}



let lodging_id = parseInt($('#iddiv').text())
let lodging_covi;
let array = [];
$("._1ku51f04").on('click', function() {
    array.push($('._19lvxaoa').find('._129jysg').append(",").text())

    lodging_covi = array.toString()

    let jsonData = {
        transaction_time: new Date(),
        resultCode: "ok",
        description: "ok",
        data: {
            lodgingId: lodging_id,
            lodgingCovi: lodging_covi
        }
    }

    $.post({
        url: '/api/room/hostoption8',
        data: JSON.stringify(jsonData),
        dataType: 'json',
        contentType: 'application/json',
        success: function() {
            let lodging_id = parseInt($('#iddiv').text())
            console.log(lodging_id)
            location.href = '/pages/hostoption9/' + lodging_id;
        },
        error: function() {
            location.reload();
        }
    });
});