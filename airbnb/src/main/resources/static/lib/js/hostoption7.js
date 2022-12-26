//여행자 게스트 숫자

function pCount1(){    
    const val = Number(document.querySelector("#c1").innerText);
    document.querySelector("#c1").innerText=val+1;
    if(val+1 > 0){
        $('#discount1').removeAttr("disabled")
    }
}

function mCount1(){
    const val = Number(document.querySelector("#c1").innerText);
    document.querySelector("#c1").innerText=val-1;
    if((document.querySelector("#c1").innerText)==1){
        $('#discount1').attr("disabled","")
    }
}

function pCount2(){    
    const val = Number(document.querySelector("#c2").innerText);
    document.querySelector("#c2").innerText=val+1;
    if(val+1 > 0){
        $('#discount2').removeAttr("disabled")
    }  
}
function mCount2(){
    const val = Number(document.querySelector("#c2").innerText);
    document.querySelector("#c2").innerText=val-1;
    if((document.querySelector("#c2").innerText)==1){
        $('#discount2').attr("disabled","")
    }
}


function pCount3(){    
    const val = Number(document.querySelector("#c3").innerText);
    document.querySelector("#c3").innerText=val+1;
    if(val+1 > 0){
        $('#discount3').removeAttr("disabled")
    }  
}
function mCount3(){
    const val = Number(document.querySelector("#c3").innerText);
    document.querySelector("#c3").innerText=val-1;
    if((document.querySelector("#c3").innerText)==1){
        $('#discount3').attr("disabled","")
    }
}


function pCount4(){    
    const val = Number(document.querySelector("#c4").innerText);
    document.querySelector("#c4").innerText=val+1;
    if(val+1 > 0){
        $('#discount4').removeAttr("disabled")
    }  
}
function mCount4(){
    const val = Number(document.querySelector("#c4").innerText);
    document.querySelector("#c4").innerText=val-1;
    if((document.querySelector("#c4").innerText)==1){
        $('#discount4').attr("disabled","")
    }
}


$("._1ku51f04").on('click', function(){
    let lodging_id = parseInt($('#iddiv').text())
    let lodging_guests = parseInt($('#c1').text());
    let lodging_beds = parseInt($('#c2').text());
    let lodging_bedrooms = parseInt($('#c3').text());
    let lodging_bathroom = parseInt($('#c4').text());
    let jsonData1 = {
        transaction_time: new Date(),
        resultCode:"ok",
        description:"ok",
        data:{
            lodgingId: lodging_id,
            lodgingGuests: lodging_guests
        }
    }
    $.post({
        url: '/api/room/hostoption7',
        data: JSON.stringify(jsonData1),
        dataType: 'json',
        contentType: 'application/json',
        success: function(){
            // alert('등록성공!');
            location.href='/pages/hostoption8';
        },
        error: function(){
            // alert('다시 시도해주세요');
            location.reload();
        }
    });
    let jsonData2 = {
        transaction_time: new Date(),
        resultCode:"ok",
        description:"ok",
        data:{
            lodgingId: lodging_id,
            lodgingBeds: lodging_beds,
            lodgingBedrooms: lodging_bedrooms,
            lodgingBathroom: lodging_bathroom
        }
    }

    $.post({
        url: '/api/room/hostoption7_1',
        data: JSON.stringify(jsonData2),
        dataType: 'json',
        contentType: 'application/json',
        success: function(){
            // alert('등록성공!');
            location.href='/pages/hostoption8';
        },
        error: function(){
            // alert('다시 시도해주세요');
            location.reload();
        }
    });
});