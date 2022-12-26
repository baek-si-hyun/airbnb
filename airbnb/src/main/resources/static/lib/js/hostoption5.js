function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(locationSuccess, locationError, geo_options);
    } else {
        console.log("지오 로케이션 없음")
    }
    $('._xzfqmcp').hide()
    $('._cawx7l0').show()

};

let latitude, longitude;

function locationSuccess(p) {
    latitude = p.coords.latitude,
        longitude = p.coords.longitude;
    let find = latitude + ',' + longitude
    $('#latlng').val(find)
    console.log(find)
    initialize();
}

function locationError(error) {
    let errorTypes = {
        0: "위치 액서스 오류",
        1: "위치 액서스 허용 안됨",
        2: "알수 없는 위치입니다",
        3: "응답시간 초과되었습니다"
    };
    let errorMsg = errorTypes[error.code];
}
// locationError
let geo_options = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000
};
// geo_options
let map;

function initialize() {
    let myLatLng = new google.maps.LatLng(latitude, longitude);
    let mapOptions = {
        zoom: 13,
        center: myLatLng,
        panControl: false,
        zoomControl: false,
        scaleControl: false,
        fullscreenControl: false,
        mapTypeControl: false,
        streetViewControl: false
    };
    let image = './images/Luffys-flag-icon.jpg';
    map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
    // let beachMarker = new google.maps.Marker({
    //     position: new google.maps.LatLng(latitude, longitude),
    //     map: map
    // })
    initMap()
}

function initMap() {
    let geocoder = new google.maps.Geocoder;
    let data = $('#latlng').val()
    let datadata = data.split(",", 2)

    let latlng = {
        lat: parseFloat(datadata[0]),
        lng: parseFloat(datadata[1])
    };
    geocoder.geocode({
        'location': latlng
    }, function(results) {
        console.log(results)
        let result = results[0]
        let address = result.formatted_address.split(" ", 6)
        console.log(address)
        $('#countryCode').val(address[0]).prop("selected", true)
        $('#state').val(address[1])
        $('#city').val(address[2])
        $('#street').val(address[3])
        $('#apt').val(address[4])
        $('#zipcode').val(address[5])
    });
}

$('._1fnnpuw6').click(function(e) {
    if ($('._qgv474').find("._1p5zqcr")) {

        $('#searchbar1').addClass('_16kl056s').removeClass('_1pulvtcv');
        $('#searchbar2').addClass('_k568g25').removeClass('_1y61moct');
        $('#searchbar3').addClass('_xzfqmcp').removeClass('_1fnnpuw6');
        $('#searchbar4').addClass('_hjxf4mi').removeClass('_lbaapj');
        $('#searchbar5').addClass('_fad0ioi').removeClass('_1l0iogx');
        $('#searchbar6').addClass('_18c48cum').removeClass('_171jtg');
        $('#autocomplete-results').addClass('_1p5zqcr').removeClass('_1p5zqcr1');
    }
});
$(document).on("click", function(e) {
    if ($(e.target).closest("._xzfqmcp").length < 1 && !$(e.target).hasClass("_xzfqmcp")) {
        $('#searchbar1').removeClass('_16kl056s').addClass('_1pulvtcv');
        $('#searchbar2').removeClass('_k568g25').addClass('_1y61moct');
        $('#searchbar3').removeClass('_xzfqmcp').addClass('_1fnnpuw6');
        $('#searchbar4').removeClass('_hjxf4mi').addClass('_lbaapj');
        $('#searchbar5').removeClass('_fad0ioi').addClass('_1l0iogx');
        $('#searchbar6').removeClass('_18c48cum').addClass('_171jtg');
        $('#autocomplete-results').removeClass('_1p5zqcr').addClass('_1p5zqcr1');
    }
});


document.querySelector('._12uiun8').addEventListener("click", function(e) {
    document.querySelector('#searchbar3').style.display = 'none';
    document.querySelector('._cawx7l0').style.display = 'block';

});

const cancel = document.querySelectorAll('._oda838')

for (const btn of cancel) {
    btn.addEventListener('click', function() {
        document.querySelector('._cawx7l0').style.display = 'none'
        document.querySelector('#searchbar3').style.display = '';
    })
}
let lodging_id = parseInt($('#iddiv').text())

document.querySelector('#location_insert').addEventListener("click", function(e) {

    let location_state = $('#countryCode').val();
    let location_way = $('#state').val();
    let location_city = $('#city').val();
    let location_road = $('#street').val();
    let location_detail = $('#apt').val();
    let location_post = $('#zipcode').val();

    console.log(lodging_id)
    console.log(location_state)
    console.log(location_way)
    console.log(location_city)
    console.log(location_road)
    console.log(location_detail)
    console.log(location_post)


    let jsonData = {
        transaction_time: new Date(),
        resultCode: "ok",
        description: "ok",
        data: {
            lodgingId: lodging_id,
            locationState: location_state,
            locationWay: location_way,
            locationCity: location_city,
            locationRoad: location_road,
            locationDetail: location_detail,
            locationPost: location_post
        }
    }
    console.log(location_state)
    $.post({
        url: '/api/room/hostoption5',
        data: JSON.stringify(jsonData),
        dataType: 'json',
        contentType: 'application/json',
        success: function() {
            // alert('등록성공!');
            location.href = '/pages/hostoption7';
            $('#btn_next').attr("disabled", false);
        },
        error: function() {
            // alert('다시 시도해주세요');
            location.reload();
        }
    });
    $('#btn_next').removeAttr("disabled")
})

$(document).ready(function() {
    $('#submitbtn').click(function() {
        $('._cawx7l0').hide();
        $('._xzfqmcp').show()
    })

})


$('._xzfqmcp').addClass('_cawx7l0').removeClass('_xzfqmcp');
$('#changebox').addClass('_1p19jml').removeClass('_qgv474');