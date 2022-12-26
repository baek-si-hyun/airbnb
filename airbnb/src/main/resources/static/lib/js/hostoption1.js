document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('._cd8zo4d').addEventListener('click', function(){
        let jsonData = {
            transaction_time: new Date(),
            resultCode:"ok",
            description:"ok",
            data:{

            }
        }
        $.post({
            url: '/api/room/',
            dataType: 'json',
            data: JSON.stringify(jsonData),
            contentType: 'application/json',
            success: function (response) {
                let lodging_id = response.data.lodgingId
                location.href = '/pages/hostoption2/'+lodging_id;
            },
            error: function () {
                location.reload();
            }
        });
    })
});