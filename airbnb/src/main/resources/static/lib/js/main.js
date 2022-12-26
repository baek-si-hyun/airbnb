// 숙소 리스트


document.addEventListener("DOMContentLoaded", function(){

    $.get('/api/list/main?pages=0&tab_id=home&price_min=0&price_max=6800000&category=섬&propertyTypes=&propertyTypes=&propertyTypes=&roomType=&roomType=&roomType=&roomType=&min_bedrooms=0&min_beds=0&screenMin=1&screenMax=10', function(response) {
        if (response.list.length === 0) {
            document.querySelector('#noRooms').style.display = '';
            return
        }
        else{
            for (let i in response.list) {
                $('#loadingpage').before(`<div class="c4mnd7m changediv dir dir-ltr"><div class="c1pbo4kt cikyho8 dir dir-ltr" style="--transition-element_transition-delay:0ms;--transition-element_transition-duration:200ms"><div><div class="m1cp3yuo dir dir-ltr"><div class=" dir dir-ltr"><div class="awuxh4x dir dir-ltr"><div class="cw9aemg dir dir-ltr"><span aria-busy="true" style="display:block;height:100%;width:100%;background-color:white;border-radius:var(--i-g-gvoq)"><span class="_8kplbn" style="animation-play-state: paused; height: 100%; width: 100%; border-radius: var(--i-g-gvoq);"></span></span></div></div></div></div><div class="g1wiliwt cb4nyux dir dir-ltr"><span aria-busy="true" style="display:block;height:19px;width:65%;background-color:white;border-radius:4px"><span class="_8kplbn" style="animation-play-state: paused; height: 100%; width: 100%; border-radius: 4px;"></span></span><div class="a3g92ry dir dir-ltr"><span aria-busy="true" style="display:block;height:19px;width:100%;background-color:white;border-radius:4px"><span class="_8kplbn" style="animation-play-state: paused; height: 100%; width: 100%; border-radius: 4px;"></span></span></div><div class="f15liw5s dir dir-ltr"><span aria-busy="true" style="display:block;height:19px;width:39%;background-color:white;border-radius:4px"><span class="_8kplbn" style="animation-play-state: paused; height: 100%; width: 100%; border-radius: 4px;"></span></span></div><div class="f15liw5s dir dir-ltr"><span aria-busy="true" style="display:block;height:19px;width:28%;background-color:white;border-radius:4px"><span class="_8kplbn" style="animation-play-state: paused; height: 100%; width: 100%; border-radius: 4px;"></span></span></div><div class="pc0djro dir dir-ltr"><span aria-busy="true" style="display:block;height:19px;width:26%;background-color:white;border-radius:4px"><span class="_8kplbn" style="animation-play-state: paused; height: 100%; width: 100%; border-radius: 4px;"></span></span></div></div></div></div><div class="c1l1h97y dir dir-ltr" style="--transition-element_transition-delay:0ms;--transition-element_transition-duration:200ms"><div itemProp="itemListElement" itemScope="" itemType="http://schema.org/ListItem"><meta itemProp="name" content="아다란 클럽 Rannalhi, 몰디브, 워터 방갈로"><meta itemProp="position" content="1"><meta itemProp="url" content="www.airbnb.co.kr/rooms/33032352?adults=1&amp;category_tag=Tag%3A675&amp;children=0&amp;infants=0&amp;search_mode=flex_destinations_search&amp;check_in=2022-07-28&amp;check_out=2022-08-03&amp;previous_page_section_name=1000"><div><div><div aria-labelledby="title_33032352" class="cy5jw6o dir dir-ltr" role="group"><a aria-labelledby="title_33032352" class="ln2bl2p dir dir-ltr" href="/pages/room/${response.list[i].lodgingId}" rel="noopener noreferrer nofollow"></a><div class="mz543g6 dir dir-ltr"><div class="c14dgvke dir dir-ltr"><div aria-describedby="carousel-description" class="cnjlbcx cp0pqp0 rztl681 dir dir-ltr" role="group"><div class="dbldy2s dir dir-ltr"> 6개 %{item_type} 중 1개 표시 </div><div class="c18vjgz6 dir dir-ltr"><div class="o47luuh o1q97y5m dir dir-ltr"><div class="tsz9f4o dir dir-ltr"><div class="t1p13dzz dir dir-ltr"></div><div class="ts9x1g6 dir dir-ltr"><div class="ckqgked cendrgz dir dir-ltr"><button aria-label="목록에 숙소 추가하기" type="button" class="bq05a0m vq7srz5 dir dir-ltr" onclick="pops(this)"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" style="display: block; fill: rgba(0, 0, 0, 0.5); height: 24px; width: 24px; stroke: var(--f-mkcy-f); stroke-width: 2; overflow: visible;"><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path></svg><div class="lodgingIds" hidden="hidden">${response.list[i].lodgingId}</div></button></div></div></div><div class="m1dum4mk dir dir-ltr"><div class="m1tlldn6 dir dir-ltr"><div class="s134m7bb s1tdgjmu dir dir-ltr"><button data-is-hidden="true" aria-hidden="true" aria-label="이전 이미지" type="button" class="_1d3iagv"><span class="_3hmsj"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 4; overflow: visible;"><g fill="none"><path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path></g></svg></span></button></div></div><div class="ms83rji dir dir-ltr"><div class="s134m7bb s1tdgjmu dir dir-ltr"><button aria-hidden="false" aria-label="다음 이미지" type="button" class="_1d3iagv"><span class="_3hmsj"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 4; overflow: visible;"><g fill="none"><path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path></g></svg></span></button></div></div></div><div class="b1tv82fw dir dir-ltr"><div class="bycbjmy dir dir-ltr"></div><div class="balhpdq dir dir-ltr"><div aria-label="전체 6장 중 1번째 사진" role="img" class="_r752or"><div class="_szn05y"><div class="_1b2klj3" style="transform: translateX(0px);"><span class="_4o74ccl" style="transform: scale(1);"></span><span class="_1k9ksvh" style="transform: scale(1);"></span><span class="_1k9ksvh" style="transform: scale(1);"></span><span class="_1k9ksvh" style="transform: scale(0.833333);"></span><span class="_1k9ksvh" style="transform: scale(0.666667);"></span><span class="_1k9ksvh" style="transform: scale(0.666667);"></span></div></div></div></div><div class="b18glxm4 dir dir-ltr"></div></div></div></div><div class="s1yvqyx7 dir dir-ltr"><div class=" dir dir-ltr"><div class="awuxh4x dir dir-ltr"><div class="cw9aemg dir dir-ltr"><div class="c14whb16 dir dir-ltr"><a aria-hidden="false" tabIndex="-1" class="rfexzly dir dir-ltr" href="/pages/room/${response.list[i].lodgingId}" rel="noopener noreferrer nofollow"><div class="cjv59qb dir dir-ltr"><div class="_1h6n1zu" role="img" aria-busy="false" aria-label="Image 1" style="display: inline-block; vertical-align: bottom; height: 100%; width: 100%; min-height: 1px;"><picture><img class="_6tbg2q" aria-hidden="true" alt="Image 1" elementtiming="LCP-target" fetchpriority="high" id="FMP-target" src="${response.list[i].lodgingPicurl}/${response.list[i].lodgingPic}" style="object-fit: cover !important; vertical-align: bottom !important;"> </picture></div></div></a><a aria-hidden="true" tabIndex="-1" class="rfexzly dir dir-ltr" href="./pages/room" rel="noopener noreferrer nofollow"></a><a aria-hidden="true" tabIndex="-1" class="rfexzly dir dir-ltr" href="./pages/room" rel="noopener noreferrer nofollow"></a><a aria-hidden="true" tabIndex="-1" class="rfexzly dir dir-ltr" href="./pages/room" rel="noopener noreferrer nofollow"></a><a aria-hidden="true" tabIndex="-1" class="rfexzly dir dir-ltr" href="./pages/room" rel="noopener noreferrer nofollow"></a><a aria-hidden="true" tabIndex="-1" class="rfexzly dir dir-ltr" href="./pages/room" rel="noopener noreferrer nofollow"></a></div></div></div></div></div></div></div></div><div class="g1tup9az cb4nyux dir dir-ltr"><div class="t1jojoys dir dir-ltr" id="title_33032352">${response.list[i].lodgingLocation}</div><div class="f15liw5s s1cjsi4j dir dir-ltr"><span aria-label="6,596km 거리"><span class=" dir dir-ltr" >${response.list[i].lodgingType2}</span></span></div><div class="f15liw5s s1cjsi4j dir dir-ltr"><span aria-label="7월 28일 ~ 8월 3일"><span class=" dir dir-ltr">${response.list[i].isresvStart} ~ ${response.list[i].isresvEnd}</span></span></div><div class="p1v28t5c dir dir-ltr"><div style="--pricing-guest-display-price-alignment:flex-start; --pricing-guest-display-price-flex-wrap:wrap; --pricing-guest-primary-line-font-size:15px; --pricing-guest-primary-line-line-height:19px; --pricing-guest-primary-line-unit-price-font-weight:var(--jx-zk-pv); --pricing-guest-primary-line-trailing-content-font-size:14px; --pricing-guest-secondary-line-font-size:15px; --pricing-guest-secondary-line-line-height:19px; --pricing-guest-secondary-line-color:#717171; --pricing-guest-explanation-disclaimer-font-size:14px; --pricing-guest-explanation-disclaimer-line-height:18px; --pricing-guest-primary-line-strikethrough-price-font-weight:600; --pricing-guest-primary-line-qualifier-font-size:15px; --pricing-guest-primary-line-qualifier-line-height:19px;"><div class="_i5duul"><span><div class="_1n700sq"><div class="_1jo4hgw" aria-hidden="true"><span class="_tyxjp1">₩${response.list[i].priceNormal}</span><span class="_1vylq8i">&nbsp;/박</span></div><span class="a8jt5op dir dir-ltr">₩${response.list[i].priceNormal}/박</span></div></span><span></span></div></div></div><span aria-label="신규 숙소" class="t5eq1io r4a59j5 dir dir-ltr" role="img"><span aria-hidden="true" class="ru0q88m dir dir-ltr">NEW</span><span class="s1dxllyb dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" style="display: block; height: 12px; width: 12px; fill: currentcolor;"><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd"></path></svg></span></span></div></div><div></div></div></div></div></div></div>`)
            }
        }
        $(".app").hide();
    })

    document.querySelector('.p1rbh6uo').style.display = 'none';
    const leftBtn = document.querySelector('#left');
    const rightBtn = document.querySelector('#right');

    leftBtn.onclick = function() {
        let _scrollX = $('#slideFilm').scrollLeft();
        $('#slideFilm').scrollLeft(_scrollX - 400);
        document.querySelector('.nzjlmas').style.display = '';
        if ($('#slideFilm').scrollLeft() === 0) {
            document.querySelector('.p1rbh6uo').style.display = 'none';
        }
    }
    rightBtn.onclick = function() {
        let _scrollX = $('#slideFilm').scrollLeft();
        $('#slideFilm').scrollLeft(_scrollX + 400);
        document.querySelector('.p1rbh6uo').style.display = '';
        if ($('#slideFilm').scrollLeft() >= 3650) {
            document.querySelector('.nzjlmas').style.display = 'none';
        }
    }

    let page = 0;
    let tabId = "&tab_id=" + 'home'
    let price_filter_min = Number($('#price_filter_min').val())
    let priceMin = "&price_min=" + price_filter_min
    let price_filter_max = Number($('#price_filter_max').val())
    let priceMax = "&price_max=" + price_filter_max
    let ccma3s = '섬';
    let category = "&category=" + ccma3s
    let propertyTypes1Val = $('#filterItem--8551518396750553266-checkbox-room_types-Entire_home_apt-row-checkbox').val()
    let propertyTypes2Val = $('#filterItem--8551518396750553266-checkbox-room_types-Private_room-row-checkbox').val()
    let propertyTypes3Val = $('#filterItem--8551518396750553266-checkbox-room_types-Shared_room-row-checkbox').val()
    let propertyTypes1 = "&propertyTypes=" + propertyTypes1Val
    let propertyTypes2 = "&propertyTypes=" + propertyTypes2Val
    let propertyTypes3 = "&propertyTypes=" + propertyTypes3Val
    let roomType1Val = $('#_1h52lk51').val()
    let roomType2Val = $('#_1h52lk52').val()
    let roomType3Val = $('#_1h52lk53').val()
    let roomType4Val = $('#_1h52lk54').val()
    let roomType1 = "&roomType=" + roomType1Val
    let roomType2 = "&roomType=" + roomType2Val
    let roomType3 = "&roomType=" + roomType3Val
    let roomType4 = "&roomType=" + roomType4Val
    let minbedroomsVal = Number($('#bedroomval').val())
    let minbedsVal = Number($('#bedval').val())
    let minbedrooms = "&min_bedrooms=" + minbedroomsVal
    let minbeds = "&min_beds=" + minbedsVal
    let cvarr = []
    $('input:checkbox[name=convi]:checked').each(function() {
        let cv = $(this).val()
        cvarr.push(cv)
    })
    let convi = '';
    for (let i in cvarr) {
        convi += "&convi=" + cvarr[i]
    }
    let screenMinVal = 1;
    let screenMaxVal = 10;
    let screenMin = "&screenMin=" + screenMinVal;
    let screenMax = "&screenMax=" + screenMaxVal;
    let flag = true;
    $(".mySlideDiv").not(".active").hide(); //화면 로딩 후 첫번째 div를 제외한 나머지 숨김



    $('.c1l3w0tx').click(function() {
        flag = true
        screenMinVal = 1;
        screenMaxVal = 10;
        screenMin = "&screenMin=" + screenMinVal
        screenMax = "&screenMax=" + screenMaxVal
        document.querySelector('#noRooms').style.display = 'none';
        $('.c1l3w0tx').removeClass('ccma3s')
        $(this).addClass('ccma3s')
        page = 0;
        $('.changediv').remove();
        $(".app").show()
        ccma3s = $('.ccma3s').find('.t1h65ots').text();
        category = "&category=" + ccma3s
        $.get("/api/list/main?pages=" + page + tabId + priceMin + priceMax + category + propertyTypes1 + propertyTypes2 + propertyTypes3 + roomType1 + roomType2 + roomType3 + roomType4 + minbedrooms + minbeds + convi + screenMin + screenMax, function(response) {
            if (response.list.length === 0) {
                document.querySelector('#noRooms').style.display = '';
                $(".app").hide()
                return;
            }
            for (let i in response.list) {
                $('#loadingpage').before(`<div class="c4mnd7m changediv dir dir-ltr"><div class="c1pbo4kt cikyho8 dir dir-ltr" style="--transition-element_transition-delay:0ms;--transition-element_transition-duration:200ms"><div><div class="m1cp3yuo dir dir-ltr"><div class=" dir dir-ltr"><div class="awuxh4x dir dir-ltr"><div class="cw9aemg dir dir-ltr"><span aria-busy="true" style="display:block;height:100%;width:100%;background-color:white;border-radius:var(--i-g-gvoq)"><span class="_8kplbn" style="animation-play-state: paused; height: 100%; width: 100%; border-radius: var(--i-g-gvoq);"></span></span></div></div></div></div><div class="g1wiliwt cb4nyux dir dir-ltr"><span aria-busy="true" style="display:block;height:19px;width:65%;background-color:white;border-radius:4px"><span class="_8kplbn" style="animation-play-state: paused; height: 100%; width: 100%; border-radius: 4px;"></span></span><div class="a3g92ry dir dir-ltr"><span aria-busy="true" style="display:block;height:19px;width:100%;background-color:white;border-radius:4px"><span class="_8kplbn" style="animation-play-state: paused; height: 100%; width: 100%; border-radius: 4px;"></span></span></div><div class="f15liw5s dir dir-ltr"><span aria-busy="true" style="display:block;height:19px;width:39%;background-color:white;border-radius:4px"><span class="_8kplbn" style="animation-play-state: paused; height: 100%; width: 100%; border-radius: 4px;"></span></span></div><div class="f15liw5s dir dir-ltr"><span aria-busy="true" style="display:block;height:19px;width:28%;background-color:white;border-radius:4px"><span class="_8kplbn" style="animation-play-state: paused; height: 100%; width: 100%; border-radius: 4px;"></span></span></div><div class="pc0djro dir dir-ltr"><span aria-busy="true" style="display:block;height:19px;width:26%;background-color:white;border-radius:4px"><span class="_8kplbn" style="animation-play-state: paused; height: 100%; width: 100%; border-radius: 4px;"></span></span></div></div></div></div><div class="c1l1h97y dir dir-ltr" style="--transition-element_transition-delay:0ms;--transition-element_transition-duration:200ms"><div itemProp="itemListElement" itemScope="" itemType="http://schema.org/ListItem"><meta itemProp="name" content="아다란 클럽 Rannalhi, 몰디브, 워터 방갈로"><meta itemProp="position" content="1"><meta itemProp="url" content="www.airbnb.co.kr/rooms/33032352?adults=1&amp;category_tag=Tag%3A675&amp;children=0&amp;infants=0&amp;search_mode=flex_destinations_search&amp;check_in=2022-07-28&amp;check_out=2022-08-03&amp;previous_page_section_name=1000"><div><div><div aria-labelledby="title_33032352" class="cy5jw6o dir dir-ltr" role="group"><a aria-labelledby="title_33032352" class="ln2bl2p dir dir-ltr" href="/pages/room/${response.list[i].lodgingId}" rel="noopener noreferrer nofollow"></a><div class="mz543g6 dir dir-ltr"><div class="c14dgvke dir dir-ltr"><div aria-describedby="carousel-description" class="cnjlbcx cp0pqp0 rztl681 dir dir-ltr" role="group"><div class="dbldy2s dir dir-ltr"> 6개 %{item_type} 중 1개 표시 </div><div class="c18vjgz6 dir dir-ltr"><div class="o47luuh o1q97y5m dir dir-ltr"><div class="tsz9f4o dir dir-ltr"><div class="t1p13dzz dir dir-ltr"></div><div class="ts9x1g6 dir dir-ltr"><div class="ckqgked cendrgz dir dir-ltr"><button aria-label="목록에 숙소 추가하기" type="button" class="bq05a0m vq7srz5 dir dir-ltr" onclick="pops(this)"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" style="display: block; fill: rgba(0, 0, 0, 0.5); height: 24px; width: 24px; stroke: var(--f-mkcy-f); stroke-width: 2; overflow: visible;"><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path></svg><div class="lodgingIds" hidden="hidden">${response.list[i].lodgingId}</div></button></div></div></div><div class="m1dum4mk dir dir-ltr"><div class="m1tlldn6 dir dir-ltr"><div class="s134m7bb s1tdgjmu dir dir-ltr"><button data-is-hidden="true" aria-hidden="true" aria-label="이전 이미지" type="button" class="_1d3iagv"><span class="_3hmsj"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 4; overflow: visible;"><g fill="none"><path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path></g></svg></span></button></div></div><div class="ms83rji dir dir-ltr"><div class="s134m7bb s1tdgjmu dir dir-ltr"><button aria-hidden="false" aria-label="다음 이미지" type="button" class="_1d3iagv"><span class="_3hmsj"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 4; overflow: visible;"><g fill="none"><path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path></g></svg></span></button></div></div></div><div class="b1tv82fw dir dir-ltr"><div class="bycbjmy dir dir-ltr"></div><div class="balhpdq dir dir-ltr"><div aria-label="전체 6장 중 1번째 사진" role="img" class="_r752or"><div class="_szn05y"><div class="_1b2klj3" style="transform: translateX(0px);"><span class="_4o74ccl" style="transform: scale(1);"></span><span class="_1k9ksvh" style="transform: scale(1);"></span><span class="_1k9ksvh" style="transform: scale(1);"></span><span class="_1k9ksvh" style="transform: scale(0.833333);"></span><span class="_1k9ksvh" style="transform: scale(0.666667);"></span><span class="_1k9ksvh" style="transform: scale(0.666667);"></span></div></div></div></div><div class="b18glxm4 dir dir-ltr"></div></div></div></div><div class="s1yvqyx7 dir dir-ltr"><div class=" dir dir-ltr"><div class="awuxh4x dir dir-ltr"><div class="cw9aemg dir dir-ltr"><div class="c14whb16 dir dir-ltr"><a aria-hidden="false" tabIndex="-1" class="rfexzly dir dir-ltr" href="/pages/room/${response.list[i].lodgingId}" rel="noopener noreferrer nofollow"><div class="cjv59qb dir dir-ltr"><div class="_1h6n1zu" role="img" aria-busy="false" aria-label="Image 1" style="display: inline-block; vertical-align: bottom; height: 100%; width: 100%; min-height: 1px;"><picture><img class="_6tbg2q" aria-hidden="true" alt="Image 1" elementtiming="LCP-target" fetchpriority="high" id="FMP-target" src="${response.list[i].lodgingPicurl}/${response.list[i].lodgingPic}" style="object-fit: cover !important; vertical-align: bottom !important;"> </picture></div></div></a><a aria-hidden="true" tabIndex="-1" class="rfexzly dir dir-ltr" href="./pages/room" rel="noopener noreferrer nofollow"></a><a aria-hidden="true" tabIndex="-1" class="rfexzly dir dir-ltr" href="./pages/room" rel="noopener noreferrer nofollow"></a><a aria-hidden="true" tabIndex="-1" class="rfexzly dir dir-ltr" href="./pages/room" rel="noopener noreferrer nofollow"></a><a aria-hidden="true" tabIndex="-1" class="rfexzly dir dir-ltr" href="./pages/room" rel="noopener noreferrer nofollow"></a><a aria-hidden="true" tabIndex="-1" class="rfexzly dir dir-ltr" href="./pages/room" rel="noopener noreferrer nofollow"></a></div></div></div></div></div></div></div></div><div class="g1tup9az cb4nyux dir dir-ltr"><div class="t1jojoys dir dir-ltr" id="title_33032352">${response.list[i].lodgingLocation}</div><div class="f15liw5s s1cjsi4j dir dir-ltr"><span aria-label="6,596km 거리"><span class=" dir dir-ltr" >${response.list[i].lodgingType2}</span></span></div><div class="f15liw5s s1cjsi4j dir dir-ltr"><span aria-label="7월 28일 ~ 8월 3일"><span class=" dir dir-ltr">${response.list[i].isresvStart} ~ ${response.list[i].isresvEnd}</span></span></div><div class="p1v28t5c dir dir-ltr"><div style="--pricing-guest-display-price-alignment:flex-start; --pricing-guest-display-price-flex-wrap:wrap; --pricing-guest-primary-line-font-size:15px; --pricing-guest-primary-line-line-height:19px; --pricing-guest-primary-line-unit-price-font-weight:var(--jx-zk-pv); --pricing-guest-primary-line-trailing-content-font-size:14px; --pricing-guest-secondary-line-font-size:15px; --pricing-guest-secondary-line-line-height:19px; --pricing-guest-secondary-line-color:#717171; --pricing-guest-explanation-disclaimer-font-size:14px; --pricing-guest-explanation-disclaimer-line-height:18px; --pricing-guest-primary-line-strikethrough-price-font-weight:600; --pricing-guest-primary-line-qualifier-font-size:15px; --pricing-guest-primary-line-qualifier-line-height:19px;"><div class="_i5duul"><span><div class="_1n700sq"><div class="_1jo4hgw" aria-hidden="true"><span class="_tyxjp1">₩${response.list[i].priceNormal}</span><span class="_1vylq8i">&nbsp;/박</span></div><span class="a8jt5op dir dir-ltr">₩${response.list[i].priceNormal}/박</span></div></span><span></span></div></div></div><span aria-label="신규 숙소" class="t5eq1io r4a59j5 dir dir-ltr" role="img"><span aria-hidden="true" class="ru0q88m dir dir-ltr">NEW</span><span class="s1dxllyb dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" style="display: block; height: 12px; width: 12px; fill: currentcolor;"><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd"></path></svg></span></span></div></div><div></div></div></div></div></div></div>`)
                $(".app").hide()
            }
        })
        return ccma3s;
    })

    $('._1ku51f04').click(function() {
        document.querySelector('#noRooms').style.display = 'none';
        price_filter_min = Number($('#price_filter_min').val())
        price_filter_max = Number($('#price_filter_max').val())
        propertyTypes1Val = $('#filterItem--8551518396750553266-checkbox-room_types-Entire_home_apt-row-checkbox').val()
        propertyTypes2Val = $('#filterItem--8551518396750553266-checkbox-room_types-Private_room-row-checkbox').val()
        propertyTypes3Val = $('#filterItem--8551518396750553266-checkbox-room_types-Shared_room-row-checkbox').val()
        roomType1Val = $('#_1h52lk51').val()
        roomType2Val = $('#_1h52lk52').val()
        roomType3Val = $('#_1h52lk53').val()
        roomType4Val = $('#_1h52lk54').val()
        minbedroomsVal = Number($('#bedroomval').val())
        minbedsVal = Number($('#bedval').val())
        cvarr = []
        $('input:checkbox[name=convi]:checked').each(function() {
            let cv = $(this).val()
            cvarr.push(cv)
            console.log(cvarr)
        })
        screenMinVal = 1;
        screenMaxVal = 10;
        screenMin = "&screenMin=" + screenMinVal
        screenMax = "&screenMax=" + screenMaxVal
        page = 0;
        flag = true
        $('.changediv').remove();
        $(".app").show()
        ccma3s = $('.ccma3s').find('.t1h65ots').text();
        category = "&category=" + ccma3s
        $.get("/api/list/main?pages=" + page + tabId + priceMin + priceMax + category + propertyTypes1 + propertyTypes2 + propertyTypes3 + roomType1 + roomType2 + roomType3 + roomType4 + minbedrooms + minbeds + convi + screenMin + screenMax, function(response) {
            if (response.list.length === 0) {
                document.querySelector('#noRooms').style.display = '';
                return;
            }
            for (let i in response.list) {
                $('#loadingpage').before(`<div class="c4mnd7m changediv dir dir-ltr"><div class="c1pbo4kt cikyho8 dir dir-ltr" style="--transition-element_transition-delay:0ms;--transition-element_transition-duration:200ms"><div><div class="m1cp3yuo dir dir-ltr"><div class=" dir dir-ltr"><div class="awuxh4x dir dir-ltr"><div class="cw9aemg dir dir-ltr"><span aria-busy="true" style="display:block;height:100%;width:100%;background-color:white;border-radius:var(--i-g-gvoq)"><span class="_8kplbn" style="animation-play-state: paused; height: 100%; width: 100%; border-radius: var(--i-g-gvoq);"></span></span></div></div></div></div><div class="g1wiliwt cb4nyux dir dir-ltr"><span aria-busy="true" style="display:block;height:19px;width:65%;background-color:white;border-radius:4px"><span class="_8kplbn" style="animation-play-state: paused; height: 100%; width: 100%; border-radius: 4px;"></span></span><div class="a3g92ry dir dir-ltr"><span aria-busy="true" style="display:block;height:19px;width:100%;background-color:white;border-radius:4px"><span class="_8kplbn" style="animation-play-state: paused; height: 100%; width: 100%; border-radius: 4px;"></span></span></div><div class="f15liw5s dir dir-ltr"><span aria-busy="true" style="display:block;height:19px;width:39%;background-color:white;border-radius:4px"><span class="_8kplbn" style="animation-play-state: paused; height: 100%; width: 100%; border-radius: 4px;"></span></span></div><div class="f15liw5s dir dir-ltr"><span aria-busy="true" style="display:block;height:19px;width:28%;background-color:white;border-radius:4px"><span class="_8kplbn" style="animation-play-state: paused; height: 100%; width: 100%; border-radius: 4px;"></span></span></div><div class="pc0djro dir dir-ltr"><span aria-busy="true" style="display:block;height:19px;width:26%;background-color:white;border-radius:4px"><span class="_8kplbn" style="animation-play-state: paused; height: 100%; width: 100%; border-radius: 4px;"></span></span></div></div></div></div><div class="c1l1h97y dir dir-ltr" style="--transition-element_transition-delay:0ms;--transition-element_transition-duration:200ms"><div itemProp="itemListElement" itemScope="" itemType="http://schema.org/ListItem"><meta itemProp="name" content="아다란 클럽 Rannalhi, 몰디브, 워터 방갈로"><meta itemProp="position" content="1"><meta itemProp="url" content="www.airbnb.co.kr/rooms/33032352?adults=1&amp;category_tag=Tag%3A675&amp;children=0&amp;infants=0&amp;search_mode=flex_destinations_search&amp;check_in=2022-07-28&amp;check_out=2022-08-03&amp;previous_page_section_name=1000"><div><div><div aria-labelledby="title_33032352" class="cy5jw6o dir dir-ltr" role="group"><a aria-labelledby="title_33032352" class="ln2bl2p dir dir-ltr" href="/pages/room/${response.list[i].lodgingId}" rel="noopener noreferrer nofollow"></a><div class="mz543g6 dir dir-ltr"><div class="c14dgvke dir dir-ltr"><div aria-describedby="carousel-description" class="cnjlbcx cp0pqp0 rztl681 dir dir-ltr" role="group"><div class="dbldy2s dir dir-ltr"> 6개 %{item_type} 중 1개 표시 </div><div class="c18vjgz6 dir dir-ltr"><div class="o47luuh o1q97y5m dir dir-ltr"><div class="tsz9f4o dir dir-ltr"><div class="t1p13dzz dir dir-ltr"></div><div class="ts9x1g6 dir dir-ltr"><div class="ckqgked cendrgz dir dir-ltr"><button aria-label="목록에 숙소 추가하기" type="button" class="bq05a0m vq7srz5 dir dir-ltr" onclick="pops(this)"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" style="display: block; fill: rgba(0, 0, 0, 0.5); height: 24px; width: 24px; stroke: var(--f-mkcy-f); stroke-width: 2; overflow: visible;"><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path></svg><div class="lodgingIds" hidden="hidden">${response.list[i].lodgingId}</div></button></div></div></div><div class="m1dum4mk dir dir-ltr"><div class="m1tlldn6 dir dir-ltr"><div class="s134m7bb s1tdgjmu dir dir-ltr"><button data-is-hidden="true" aria-hidden="true" aria-label="이전 이미지" type="button" class="_1d3iagv"><span class="_3hmsj"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 4; overflow: visible;"><g fill="none"><path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path></g></svg></span></button></div></div><div class="ms83rji dir dir-ltr"><div class="s134m7bb s1tdgjmu dir dir-ltr"><button aria-hidden="false" aria-label="다음 이미지" type="button" class="_1d3iagv"><span class="_3hmsj"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 4; overflow: visible;"><g fill="none"><path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path></g></svg></span></button></div></div></div><div class="b1tv82fw dir dir-ltr"><div class="bycbjmy dir dir-ltr"></div><div class="balhpdq dir dir-ltr"><div aria-label="전체 6장 중 1번째 사진" role="img" class="_r752or"><div class="_szn05y"><div class="_1b2klj3" style="transform: translateX(0px);"><span class="_4o74ccl" style="transform: scale(1);"></span><span class="_1k9ksvh" style="transform: scale(1);"></span><span class="_1k9ksvh" style="transform: scale(1);"></span><span class="_1k9ksvh" style="transform: scale(0.833333);"></span><span class="_1k9ksvh" style="transform: scale(0.666667);"></span><span class="_1k9ksvh" style="transform: scale(0.666667);"></span></div></div></div></div><div class="b18glxm4 dir dir-ltr"></div></div></div></div><div class="s1yvqyx7 dir dir-ltr"><div class=" dir dir-ltr"><div class="awuxh4x dir dir-ltr"><div class="cw9aemg dir dir-ltr"><div class="c14whb16 dir dir-ltr"><a aria-hidden="false" tabIndex="-1" class="rfexzly dir dir-ltr" href="/pages/room/${response.list[i].lodgingId}" rel="noopener noreferrer nofollow"><div class="cjv59qb dir dir-ltr"><div class="_1h6n1zu" role="img" aria-busy="false" aria-label="Image 1" style="display: inline-block; vertical-align: bottom; height: 100%; width: 100%; min-height: 1px;"><picture><img class="_6tbg2q" aria-hidden="true" alt="Image 1" elementtiming="LCP-target" fetchpriority="high" id="FMP-target" src="${response.list[i].lodgingPicurl}/${response.list[i].lodgingPic}" style="object-fit: cover !important; vertical-align: bottom !important;"> </picture></div></div></a><a aria-hidden="true" tabIndex="-1" class="rfexzly dir dir-ltr" href="./pages/room" rel="noopener noreferrer nofollow"></a><a aria-hidden="true" tabIndex="-1" class="rfexzly dir dir-ltr" href="./pages/room" rel="noopener noreferrer nofollow"></a><a aria-hidden="true" tabIndex="-1" class="rfexzly dir dir-ltr" href="./pages/room" rel="noopener noreferrer nofollow"></a><a aria-hidden="true" tabIndex="-1" class="rfexzly dir dir-ltr" href="./pages/room" rel="noopener noreferrer nofollow"></a><a aria-hidden="true" tabIndex="-1" class="rfexzly dir dir-ltr" href="./pages/room" rel="noopener noreferrer nofollow"></a></div></div></div></div></div></div></div></div><div class="g1tup9az cb4nyux dir dir-ltr"><div class="t1jojoys dir dir-ltr" id="title_33032352">${response.list[i].lodgingLocation}</div><div class="f15liw5s s1cjsi4j dir dir-ltr"><span aria-label="6,596km 거리"><span class=" dir dir-ltr" >${response.list[i].lodgingType2}</span></span></div><div class="f15liw5s s1cjsi4j dir dir-ltr"><span aria-label="7월 28일 ~ 8월 3일"><span class=" dir dir-ltr">${response.list[i].isresvStart} ~ ${response.list[i].isresvEnd}</span></span></div><div class="p1v28t5c dir dir-ltr"><div style="--pricing-guest-display-price-alignment:flex-start; --pricing-guest-display-price-flex-wrap:wrap; --pricing-guest-primary-line-font-size:15px; --pricing-guest-primary-line-line-height:19px; --pricing-guest-primary-line-unit-price-font-weight:var(--jx-zk-pv); --pricing-guest-primary-line-trailing-content-font-size:14px; --pricing-guest-secondary-line-font-size:15px; --pricing-guest-secondary-line-line-height:19px; --pricing-guest-secondary-line-color:#717171; --pricing-guest-explanation-disclaimer-font-size:14px; --pricing-guest-explanation-disclaimer-line-height:18px; --pricing-guest-primary-line-strikethrough-price-font-weight:600; --pricing-guest-primary-line-qualifier-font-size:15px; --pricing-guest-primary-line-qualifier-line-height:19px;"><div class="_i5duul"><span><div class="_1n700sq"><div class="_1jo4hgw" aria-hidden="true"><span class="_tyxjp1">₩${response.list[i].priceNormal}</span><span class="_1vylq8i">&nbsp;/박</span></div><span class="a8jt5op dir dir-ltr">₩${response.list[i].priceNormal}/박</span></div></span><span></span></div></div></div><span aria-label="신규 숙소" class="t5eq1io r4a59j5 dir dir-ltr" role="img"><span aria-hidden="true" class="ru0q88m dir dir-ltr">NEW</span><span class="s1dxllyb dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" style="display: block; height: 12px; width: 12px; fill: currentcolor;"><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd"></path></svg></span></span></div></div><div></div></div></div></div></div></div>`)
            }
            $(".app").hide()
        })
        return price_filter_min, price_filter_max, propertyTypes1Val, propertyTypes2Val, propertyTypes3Val, roomType1Val, roomType2Val, roomType3Val, roomType4Val, minbedroomsVal, minbedsVal, cvarr;
    })


    $(window).scroll(function() {
        if(flag === true){
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                $('.app').show()
                page++;
                screenMinVal += 10
                screenMaxVal += 10
                screenMin = "&screenMin=" + screenMinVal
                screenMax = "&screenMax=" + screenMaxVal
                $.get("/api/list/main?pages=" + page + tabId + priceMin + priceMax + category + propertyTypes1 + propertyTypes2 + propertyTypes3 + roomType1 + roomType2 + roomType3 + roomType4 + minbedrooms + minbeds + convi + screenMin + screenMax, function(response) {
                    if(response.list.length === 0){
                        flag = false;
                    }
                    for (let i in response.list) {
                        $('#loadingpage').before(`<div class="c4mnd7m changediv dir dir-ltr"><div class="c1pbo4kt cikyho8 dir dir-ltr" style="--transition-element_transition-delay:0ms;--transition-element_transition-duration:200ms"><div><div class="m1cp3yuo dir dir-ltr"><div class=" dir dir-ltr"><div class="awuxh4x dir dir-ltr"><div class="cw9aemg dir dir-ltr"><span aria-busy="true" style="display:block;height:100%;width:100%;background-color:white;border-radius:var(--i-g-gvoq)"><span class="_8kplbn" style="animation-play-state: paused; height: 100%; width: 100%; border-radius: var(--i-g-gvoq);"></span></span></div></div></div></div><div class="g1wiliwt cb4nyux dir dir-ltr"><span aria-busy="true" style="display:block;height:19px;width:65%;background-color:white;border-radius:4px"><span class="_8kplbn" style="animation-play-state: paused; height: 100%; width: 100%; border-radius: 4px;"></span></span><div class="a3g92ry dir dir-ltr"><span aria-busy="true" style="display:block;height:19px;width:100%;background-color:white;border-radius:4px"><span class="_8kplbn" style="animation-play-state: paused; height: 100%; width: 100%; border-radius: 4px;"></span></span></div><div class="f15liw5s dir dir-ltr"><span aria-busy="true" style="display:block;height:19px;width:39%;background-color:white;border-radius:4px"><span class="_8kplbn" style="animation-play-state: paused; height: 100%; width: 100%; border-radius: 4px;"></span></span></div><div class="f15liw5s dir dir-ltr"><span aria-busy="true" style="display:block;height:19px;width:28%;background-color:white;border-radius:4px"><span class="_8kplbn" style="animation-play-state: paused; height: 100%; width: 100%; border-radius: 4px;"></span></span></div><div class="pc0djro dir dir-ltr"><span aria-busy="true" style="display:block;height:19px;width:26%;background-color:white;border-radius:4px"><span class="_8kplbn" style="animation-play-state: paused; height: 100%; width: 100%; border-radius: 4px;"></span></span></div></div></div></div><div class="c1l1h97y dir dir-ltr" style="--transition-element_transition-delay:0ms;--transition-element_transition-duration:200ms"><div itemProp="itemListElement" itemScope="" itemType="http://schema.org/ListItem"><meta itemProp="name" content="아다란 클럽 Rannalhi, 몰디브, 워터 방갈로"><meta itemProp="position" content="1"><meta itemProp="url" content="www.airbnb.co.kr/rooms/33032352?adults=1&amp;category_tag=Tag%3A675&amp;children=0&amp;infants=0&amp;search_mode=flex_destinations_search&amp;check_in=2022-07-28&amp;check_out=2022-08-03&amp;previous_page_section_name=1000"><div><div><div aria-labelledby="title_33032352" class="cy5jw6o dir dir-ltr" role="group"><a aria-labelledby="title_33032352" class="ln2bl2p dir dir-ltr" href="/pages/room/${response.list[i].lodgingId}" rel="noopener noreferrer nofollow"></a><div class="mz543g6 dir dir-ltr"><div class="c14dgvke dir dir-ltr"><div aria-describedby="carousel-description" class="cnjlbcx cp0pqp0 rztl681 dir dir-ltr" role="group"><div class="dbldy2s dir dir-ltr"> 6개 %{item_type} 중 1개 표시 </div><div class="c18vjgz6 dir dir-ltr"><div class="o47luuh o1q97y5m dir dir-ltr"><div class="tsz9f4o dir dir-ltr"><div class="t1p13dzz dir dir-ltr"></div><div class="ts9x1g6 dir dir-ltr"><div class="ckqgked cendrgz dir dir-ltr"><button aria-label="목록에 숙소 추가하기" type="button" class="bq05a0m vq7srz5 dir dir-ltr" onclick="pops(this)"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" style="display: block; fill: rgba(0, 0, 0, 0.5); height: 24px; width: 24px; stroke: var(--f-mkcy-f); stroke-width: 2; overflow: visible;"><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path></svg><div class="lodgingIds" hidden="hidden">${response.list[i].lodgingId}</div></button></div></div></div><div class="m1dum4mk dir dir-ltr"><div class="m1tlldn6 dir dir-ltr"><div class="s134m7bb s1tdgjmu dir dir-ltr"><button data-is-hidden="true" aria-hidden="true" aria-label="이전 이미지" type="button" class="_1d3iagv"><span class="_3hmsj"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 4; overflow: visible;"><g fill="none"><path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path></g></svg></span></button></div></div><div class="ms83rji dir dir-ltr"><div class="s134m7bb s1tdgjmu dir dir-ltr"><button aria-hidden="false" aria-label="다음 이미지" type="button" class="_1d3iagv"><span class="_3hmsj"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 4; overflow: visible;"><g fill="none"><path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path></g></svg></span></button></div></div></div><div class="b1tv82fw dir dir-ltr"><div class="bycbjmy dir dir-ltr"></div><div class="balhpdq dir dir-ltr"><div aria-label="전체 6장 중 1번째 사진" role="img" class="_r752or"><div class="_szn05y"><div class="_1b2klj3" style="transform: translateX(0px);"><span class="_4o74ccl" style="transform: scale(1);"></span><span class="_1k9ksvh" style="transform: scale(1);"></span><span class="_1k9ksvh" style="transform: scale(1);"></span><span class="_1k9ksvh" style="transform: scale(0.833333);"></span><span class="_1k9ksvh" style="transform: scale(0.666667);"></span><span class="_1k9ksvh" style="transform: scale(0.666667);"></span></div></div></div></div><div class="b18glxm4 dir dir-ltr"></div></div></div></div><div class="s1yvqyx7 dir dir-ltr"><div class=" dir dir-ltr"><div class="awuxh4x dir dir-ltr"><div class="cw9aemg dir dir-ltr"><div class="c14whb16 dir dir-ltr"><a aria-hidden="false" tabIndex="-1" class="rfexzly dir dir-ltr" href="/pages/room/${response.list[i].lodgingId}" rel="noopener noreferrer nofollow"><div class="cjv59qb dir dir-ltr"><div class="_1h6n1zu" role="img" aria-busy="false" aria-label="Image 1" style="display: inline-block; vertical-align: bottom; height: 100%; width: 100%; min-height: 1px;"><picture><img class="_6tbg2q" aria-hidden="true" alt="Image 1" elementtiming="LCP-target" fetchpriority="high" id="FMP-target" src="${response.list[i].lodgingPicurl}/${response.list[i].lodgingPic}" style="object-fit: cover !important; vertical-align: bottom !important;"> </picture></div></div></a><a aria-hidden="true" tabIndex="-1" class="rfexzly dir dir-ltr" href="./pages/room" rel="noopener noreferrer nofollow"></a><a aria-hidden="true" tabIndex="-1" class="rfexzly dir dir-ltr" href="./pages/room" rel="noopener noreferrer nofollow"></a><a aria-hidden="true" tabIndex="-1" class="rfexzly dir dir-ltr" href="./pages/room" rel="noopener noreferrer nofollow"></a><a aria-hidden="true" tabIndex="-1" class="rfexzly dir dir-ltr" href="./pages/room" rel="noopener noreferrer nofollow"></a><a aria-hidden="true" tabIndex="-1" class="rfexzly dir dir-ltr" href="./pages/room" rel="noopener noreferrer nofollow"></a></div></div></div></div></div></div></div></div><div class="g1tup9az cb4nyux dir dir-ltr"><div class="t1jojoys dir dir-ltr" id="title_33032352">${response.list[i].lodgingLocation}</div><div class="f15liw5s s1cjsi4j dir dir-ltr"><span aria-label="6,596km 거리"><span class=" dir dir-ltr" >${response.list[i].lodgingType2}</span></span></div><div class="f15liw5s s1cjsi4j dir dir-ltr"><span aria-label="7월 28일 ~ 8월 3일"><span class=" dir dir-ltr">${response.list[i].isresvStart} ~ ${response.list[i].isresvEnd}</span></span></div><div class="p1v28t5c dir dir-ltr"><div style="--pricing-guest-display-price-alignment:flex-start; --pricing-guest-display-price-flex-wrap:wrap; --pricing-guest-primary-line-font-size:15px; --pricing-guest-primary-line-line-height:19px; --pricing-guest-primary-line-unit-price-font-weight:var(--jx-zk-pv); --pricing-guest-primary-line-trailing-content-font-size:14px; --pricing-guest-secondary-line-font-size:15px; --pricing-guest-secondary-line-line-height:19px; --pricing-guest-secondary-line-color:#717171; --pricing-guest-explanation-disclaimer-font-size:14px; --pricing-guest-explanation-disclaimer-line-height:18px; --pricing-guest-primary-line-strikethrough-price-font-weight:600; --pricing-guest-primary-line-qualifier-font-size:15px; --pricing-guest-primary-line-qualifier-line-height:19px;"><div class="_i5duul"><span><div class="_1n700sq"><div class="_1jo4hgw" aria-hidden="true"><span class="_tyxjp1">₩${response.list[i].priceNormal}</span><span class="_1vylq8i">&nbsp;/박</span></div><span class="a8jt5op dir dir-ltr">₩${response.list[i].priceNormal}/박</span></div></span><span></span></div></div></div><span aria-label="신규 숙소" class="t5eq1io r4a59j5 dir dir-ltr" role="img"><span aria-hidden="true" class="ru0q88m dir dir-ltr">NEW</span><span class="s1dxllyb dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" style="display: block; height: 12px; width: 12px; fill: currentcolor;"><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd"></path></svg></span></span></div></div><div></div></div></div></div></div></div>`)
                    }
                    $(".app").hide()
                })
            }
        }else{
            $(".app").hide()
        }
    })
})


//필터 팝업 on/off
//필터 팝업 닫기
$('._e296pg > svg').on('click', function() {
    $('.popup2').hide();
    $('.popup3').hide();
    $('.popup4').hide();
});

//필터 팝업 열기
$('.v1tureqs').on('click', function() {
    $('.popup2').show();
    $('._1ku51f04').on('click', function() {
        $('.popup2').hide();
    });
    //체크형
    $('._1yf4i4f').on('click', function() {
        if ($(this).is(':checked')) {
            //이미 체크 되어 있을 때
            $(this).attr('class', '_smt4n2a');
            $(this).next().attr('class', '_1v5cvwv4');
            $(this).next().append('<span class="_1oj8hra"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 4; overflow: visible;"><path fill="none" d="m4 16.5 8 8 16-16"></path></svg></span>');
        } else {
            //체크 되어 있지 않을 때
            $(this).attr('class', '_1yf4i4f');
            $(this).next().attr('class', '_41yoza');
            $(this).next().empty();
        }
        if ($('#filterItem--8551518396750553266-checkbox-room_types-Entire_home_apt-row-checkbox').is('._smt4n2a')) {
            $('#filterItem--8551518396750553266-checkbox-room_types-Entire_home_apt-row-checkbox').val('집전체')
        } else {
            $('#filterItem--8551518396750553266-checkbox-room_types-Entire_home_apt-row-checkbox').val('')
        }
        if ($('#filterItem--8551518396750553266-checkbox-room_types-Private_room-row-checkbox').is('._smt4n2a')) {
            $('#filterItem--8551518396750553266-checkbox-room_types-Private_room-row-checkbox').val('개인실')
        } else {
            $('#filterItem--8551518396750553266-checkbox-room_types-Private_room-row-checkbox').val('')
        }
        if ($('#filterItem--8551518396750553266-checkbox-room_types-Shared_room-row-checkbox').is('._smt4n2a')) {
            $('#filterItem--8551518396750553266-checkbox-room_types-Shared_room-row-checkbox').val('다인실')
        } else {
            $('#filterItem--8551518396750553266-checkbox-room_types-Shared_room-row-checkbox').val('')
        }
    });
    //침실과 침대 체크 (못함)
    $('.bedroom').on('click', function() {
        $('.bedroom').attr('class', '_1710jwy bedroom')
        $(this).attr('class', '_11yc859a bedroom');
    });

    $('.bed').on('click', function() {
        $('.bed').attr('class', '_1710jwy bed')
        $(this).attr('class', '_11yc859a bed');
    });

    //건물 유형 선택
    $('._1h52lk5').on('click', function() {
        $(this).toggleClass('_1h52lk5 _joxslpg')

        if ($('#_1h52lk51').is('._joxslpg')) {
            $('#_1h52lk51').val('단독또는다세대주택')
        } else {
            $('#_1h52lk51').val('')
        }
        if ($('#_1h52lk52').is('._joxslpg')) {
            $('#_1h52lk52').val('아파트')
        } else {
            $('#_1h52lk52').val('')
        }
        if ($('#_1h52lk53').is('._joxslpg')) {
            $('#_1h52lk53').val('게스트용별채')
        } else {
            $('#_1h52lk53').val('')
        }
        if ($('#_1h52lk54').is('._joxslpg')) {
            $('#_1h52lk54').val('호텔')
        } else {
            $('#_1h52lk54').val('')
        }
    });

    //예약 옵션1
    $('#filterItem-7842838992373410220-switch-ib-true').on('click', function() {
        $(this).toggleClass("_17z7clia _1x8lx0do");
        $('#toggle1').toggleClass("_vr1ztso _16g1cyy8");
        $('#filterItem-7842838992373410220-switch-ib-true ._svg').toggle();
    })

    //예약 옵션2
    $('#filterItem-7842838992373410220-switch-amenities-51').on('click', function() {
        $(this).toggleClass("_17z7clia _1x8lx0do");
        $('#toggle2').toggleClass("_vr1ztso _16g1cyy8");
        $('#filterItem-7842838992373410220-switch-amenities-51 ._svg').toggle();
    });

    //편의 시설
    $('._more1').on('click', function() {
        $('._convi').show();
        $('._convi2').hide();
    });
    $('._close1').on('click', function() {
        $('._convi').hide();
        $('._convi2').show();
    });

    $('._1h52lk5').on('click', function() {
        $(this).toggleClass('_1h52lk5 _joxslpg')

        if ($('#_1h52lk51').is('._joxslpg')) {
            $('#_1h52lk51').val('단독또는다세대주택')
        } else {
            $('#_1h52lk51').val('')
        }
        if ($('#_1h52lk52').is('._joxslpg')) {
            $('#_1h52lk52').val('아파트')
        } else {
            $('#_1h52lk52').val('')
        }
        if ($('#_1h52lk53').is('._joxslpg')) {
            $('#_1h52lk53').val('게스트용별채')
        } else {
            $('#_1h52lk53').val('')
        }
        if ($('#_1h52lk54').is('._joxslpg')) {
            $('#_1h52lk54').val('호텔')
        } else {
            $('#_1h52lk54').val('')
        }
    });

    //호스트 언어
    $('._more2').on('click', function() {
        $('.host_lan').show();
        $('.host_lan2').hide();
    });
    $('._close2').on('click', function() {
        $('.host_lan').hide();
        $('.host_lan2').show();
    });
    //침실과 침대
    $('#bedroom0').on('click', function() {
        if ($('#bedroom0').is('._11yc859a')) {
            $('#bedroomval').val('')
        }
    })
    $('#bedroom1').on('click', function() {
        if ($('#bedroom1').is('._11yc859a')) {
            $('#bedroomval').val(1)
        }
    })
    $('#bedroom2').on('click', function() {
        if ($('#bedroom2').is('._11yc859a')) {
            $('#bedroomval').val(2)
        }
    })
    $('#bedroom3').on('click', function() {
        if ($('#bedroom3').is('._11yc859a')) {
            $('#bedroomval').val(3)
        }
    })
    $('#bedroom4').on('click', function() {
        if ($('#bedroom4').is('._11yc859a')) {
            $('#bedroomval').val(4)
        }
    })
    $('#bedroom5').on('click', function() {
        if ($('#bedroom5').is('._11yc859a')) {
            $('#bedroomval').val(5)
        }
    })
    $('#bedroom6').on('click', function() {
        if ($('#bedroom6').is('._11yc859a')) {
            $('#bedroomval').val(6)
        }
    })
    $('#bedroom7').on('click', function() {
        if ($('#bedroom7').is('._11yc859a')) {
            $('#bedroomval').val(7)
        }
    })
    $('#bedroom8').on('click', function() {
        if ($('#bedroom8').is('._11yc859a')) {
            $('#bedroomval').val(8)
        }
    })

    $('#bedval0').on('click', function() {
        if ($('#bedval0').is('._11yc859a')) {
            $('#bedval').val('')
        }
    })
    $('#bedval1').on('click', function() {
        if ($('#bedval1').is('._11yc859a')) {
            $('#bedval').val(1)
        }
    })
    $('#bedval2').on('click', function() {
        if ($('#bedval2').is('._11yc859a')) {
            $('#bedval').val(2)
        }
    })
    $('#bedval3').on('click', function() {
        if ($('#bedval3').is('._11yc859a')) {
            $('#bedval').val(3)
        }
    })
    $('#bedval4').on('click', function() {
        if ($('#bedval4').is('._11yc859a')) {
            $('#bedval').val(4)
        }
    })
    $('#bedval5').on('click', function() {
        if ($('#bedval5').is('._11yc859a')) {
            $('#bedval').val(5)
        }
    })
    $('#bedval6').on('click', function() {
        if ($('#bedval6').is('._11yc859a')) {
            $('#bedval').val(6)
        }
    })
    $('#bedval7').on('click', function() {
        if ($('#bedval7').is('._11yc859a')) {
            $('#bedval').val(7)
        }
    })
    $('#bedval8').on('click', function() {
        if ($('#bedval8').is('._11yc859a')) {
            $('#bedval').val(8)
        }
    });
});
$('._1yf4i4f').on('click', function() {
    //필수
    if ($('input[name="무선 인터넷"]').is('._smt4n2a')) {
        $('input[name="무선 인터넷"]').val('무선 인터넷')
    } else {
        $('input[name="무선 인터넷"]').val('')
    }
    if ($('input[name="주방"]').is('._smt4n2a')) {
        $('input[name="주방"]').val('주방')
    } else {
        $('input[name="주방"]').val('')
    }
    if ($('input[name="세탁기"]').is('._smt4n2a')) {
        $('input[name="세탁기"]').val('세탁기')
    } else {
        $('input[name="세탁기"]').val('')
    }
    if ($('input[name="건조기"]').is('._smt4n2a')) {
        $('input[name="건조기"]').val('건조기')
    } else {
        $('input[name="건조기"]').val('')
    }
    if ($('input[name="에어컨"]').is('._smt4n2a')) {
        $('input[name="에어컨"]').val('에어컨')
    } else {
        $('input[name="에어컨"]').val('')
    }
    if ($('input[name="무료 주차 공간"]').is('._smt4n2a')) {
        $('input[name="무료 주차 공간"]').val('무료 주차 공간')
    } else {
        $('input[name="무료 주차 공간"]').val('')
    }
    if ($('input[name="건조기"]').is('._smt4n2a')) {
        $('input[name="건조기"]').val('건조기')
    } else {
        $('input[name="건조기"]').val('')
    }
    if ($('input[name="난방"]').is('._smt4n2a')) {
        $('input[name="난방"]').val('난방')
    } else {
        $('input[name="난방"]').val('')
    }
    if ($('input[name="업무 전용 공간"]').is('._smt4n2a')) {
        $('input[name="업무 전용 공간"]').val('업무 전용 공간')
    } else {
        $('input[name="업무 전용 공간"]').val('')
    }
    if ($('input[name="TV"]').is('._smt4n2a')) {
        $('input[name="TV"]').val('TV')
    } else {
        $('input[name="TV"]').val('')
    }
    if ($('input[name="헤어드라이어"]').is('._smt4n2a')) {
        $('input[name="헤어드라이어"]').val('헤어드라이어')
    } else {
        $('input[name="헤어드라이어"]').val('')
    }
    //특징
    if ($('input[name="수영장"]').is('._smt4n2a')) {
        $('input[name="수영장"]').val('수영장')
    } else {
        $('input[name="수영장"]').val('')
    }
    if ($('input[name="자쿠지"]').is('._smt4n2a')) {
        $('input[name="자쿠지"]').val('자쿠지')
    } else {
        $('input[name="자쿠지"]').val('')
    }
    if ($('input[name="전기차 충전시설"]').is('._smt4n2a')) {
        $('input[name="전기차 충전시설"]').val('전기차 충전시설')
    } else {
        $('input[name="전기차 충전시설"]').val('')
    }
    if ($('input[name="아기 침대"]').is('._smt4n2a')) {
        $('input[name="아기 침대"]').val('아기 침대')
    } else {
        $('input[name="아기 침대"]').val('')
    }
    if ($('input[name="헬스장"]').is('._smt4n2a')) {
        $('input[name="헬스장"]').val('헬스장')
    } else {
        $('input[name="헬스장"]').val('')
    }
    if ($('input[name="바비큐 그릴"]').is('._smt4n2a')) {
        $('input[name="바비큐 그릴"]').val('바비큐 그릴')
    } else {
        $('input[name="바비큐 그릴"]').val('')
    }
    if ($('input[name="아침식사"]').is('._smt4n2a')) {
        $('input[name="아침식사"]').val('아침식사')
    } else {
        $('input[name="아침식사"]').val('')
    }
    if ($('input[name="실내 벽난로"]').is('._smt4n2a')) {
        $('input[name="실내 벽난로"]').val('실내 벽난로')
    } else {
        $('input[name="실내 벽난로"]').val('')
    }
    if ($('input[name="흡연 가능"]').is('._smt4n2a')) {
        $('input[name="흡연 가능"]').val('흡연 가능')
    } else {
        $('input[name="흡연 가능"]').val('')
    }
    //위치
    if ($('input[name="해변에 인접"]').is('._smt4n2a')) {
        $('input[name="해변에 인접"]').val('해변에 인접')
    } else {
        $('input[name="해변에 인접"]').val('')
    }
    if ($('input[name="수변에 인접"]').is('._smt4n2a')) {
        $('input[name="수변에 인접"]').val('수변에 인접')
    } else {
        $('input[name="수변에 인접"]').val('')
    }
    if ($('input[name="스키를 탄 채로 출입 가능"]').is('._smt4n2a')) {
        $('input[name="스키를 탄 채로 출입 가능"]').val('스키를 탄 채로 출입 가능')
    } else {
        $('input[name="스키를 탄 채로 출입 가능"]').val('')
    }
    //안전
    if ($('input[name="화재경보기"]').is('._smt4n2a')) {
        $('input[name="화재경보기"]').val('화재경보기')
    } else {
        $('input[name="화재경보기"]').val('')
    }
    if ($('input[name="일산화탄소 경보기"]').is('._smt4n2a')) {
        $('input[name="일산화탄소 경보기"]').val('일산화탄소 경보기')
    } else {
        $('input[name="일산화탄소 경보기"]').val('')
    }
    //게스트 출입구 및 주차장
    if ($('input[name="게스트 출입구에 계단이나 문턱 없음"]').is('._smt4n2a')) {
        $('input[name="게스트 출입구에 계단이나 문턱 없음"]').val('게스트 출입구에 계단이나 문턱 없음')
    } else {
        $('input[name="게스트 출입구에 계단이나 문턱 없음"]').val('')
    }
    if ($('input[name="너비 81cm 이상의 게스트 출입구"]').is('._smt4n2a')) {
        $('input[name="너비 81cm 이상의 게스트 출입구"]').val('너비 81cm 이상의 게스트 출입구')
    } else {
        $('input[name="너비 81cm 이상의 게스트 출입구"]').val('')
    }
    if ($('input[name="휠체어 접근 가능 주차 공간"]').is('._smt4n2a')) {
        $('input[name="휠체어 접근 가능 주차 공간"]').val('휠체어 접근 가능 주차 공간')
    } else {
        $('input[name="휠체어 접근 가능 주차 공간"]').val('')
    }

});




