$(function () {
    let id = parseInt($('#lodgingId').text())
    let bak = 1;
    let pep = 1;
    let roomView = new Vue({
        el: '#lodging',
        data: {
            lodgingApiResponse:
                {
                    lodgingId: {},
                    lodgingTitle: {},
                    lodgingExplain: {},
                    lodgingGuests: {},
                    lodgingCovi: {},
                    lodgingHref: {},
                    lodgingStatus: {},
                    memId: {},
                    lodgingLocation: {},
                    isresvdate: {},
                    reviewTotal: {},
                    priceNormal: {},
                    lodgingPic: {},
                    lodgingPicurl: {}
                },
            lodgingBeforeApiResponse:
                {
                    lodgingId: {},
                    checkinStart: {},
                    checkinEnd: {},
                    checkoutTime: {},
                    communicateGuest1: {},
                    communicateGuest2: {},
                    communicateGuest3: {},
                    communicateExplain: {}
                },
            lodgingDurationApiResponse:
                {
                    lodgingId: {},
                    durationMin: {},
                    durationDaymin: {},
                    durationMax: {},
                    durationCustom: {},
                    durationCustommin: {},
                    durationCustomdays: {}
                },
            lodgingIsresvApiResponse:
                {
                    lodgingId: {},
                    isresvDueday: {},
                    isresvDuetime: {},
                    isresvReady: {},
                    isresvStart: {},
                    isresvEnd: {},
                    isresvLimit: {}
                },
            lodgingLocationApiResponse:
                {
                    lodgingId: {},
                    locationState: {},
                    locationCity: {},
                    locationRoad: {},
                    locationDetail: {},
                    locationPost: {},
                    loactionExplain: {},
                    loactionTraffic: {},
                    loactionView: {},
                    locationWay: {},
                    locationManual: {}
                },
            lodgingLocationDetailApiResponse:
                {
                    lodgingId: {},
                    checkSmartlock: {},
                    checkDigitalock: {},
                    checkKey: {},
                    checkReceptionist: {},
                    checkHost: {},
                    checkExtra: {},
                    checkExplain: {}
                },
            lodgingPicturesApiResponse:
                {
                    lodgingId: {},
                    lodgingPic: {},
                    lodgingPicurl: {},
                    lodgingPic2: {},
                    lodgingPicurl2: {},
                    lodgingPic3: {},
                    lodgingPicurl3: {},
                    lodgingPic4: {},
                    lodgingPicurl4: {},
                    lodgingPic5: {},
                    lodgingPicurl5: {},
                    memId: {}
                },
            lodgingPolicyApiResponse:
                {
                    lodgingId: {},
                    policyStanard: {},
                    policyLongstay: {},
                    immediHow: {},
                    immediReqire: {}
                },
            lodgingPriceApiResponse:
                {
                    lodgingId: {},
                    priceNormal: {},
                    priceMin: {},
                    priceMax: {},
                    priceTo: {},
                    priceClean: {},
                    priceCleanShort: {},
                    pricePet: {},
                    priceExtra: {},
                    priceWeekend: {}
                },
            lodgingRoleApiResponse:
                {
                    lodgingId: {},
                    rolesRo: {}
                },
            lodgingRoomApiResponse:
                {
                    lodgingId: {},
                    lodgingType1: {},
                    lodgingType2: {},
                    lodgingType3: {},
                    lodgingHigh: {},
                    lodgingFloor: {},
                    lodgingBeds: {},
                    lodgingBedrooms: {},
                    lodgingBathroom: {}
                },
            lodgingRulesApiResponse:
                {
                    lodgingId: {},
                    rulesChild: {},
                    rulesInfant: {},
                    rulesPet: {},
                    rulesSmoking: {},
                    rulesEvent: {},
                    rulesExtra: {}
                },
            memberApiResponse:
                {
                    memId: {},
                    memKnd: {},
                    memName: {},
                    memFirstname: {},
                    memPw: {},
                    email: {},
                    birth: {},
                    memHpContr: {},
                    memHp: {},
                    confirmStatus: {},
                    isLogshare: {},
                    confirmAt: {},
                    updateAt: {},
                    outAt: {},
                    memPic: {},
                    memPicurl: {}
                }
        },
        methods: {
            pCount5() {
                const val = Number(document.querySelector("#c5").innerText);
                document.querySelector("#c5").innerText = val + 1;
                if (val + 1 > 0) {
                    $('#discount5').removeAttr("disabled")
                }
                pep = Number(document.querySelector("#c5").innerText) + Number(document.querySelector("#c6").innerText)
                    + Number(document.querySelector("#c7").innerText)
                if(parseInt($('#maxPersonnel').text()) <= pep){
                    $('#pluscount5').attr("disabled", "")
                    $('#pluscount6').attr("disabled", "")
                    $('#pluscount7').attr("disabled", "")
                }
                change()
                count();
            },
            mCount5() {
                const val = Number(document.querySelector("#c5").innerText);
                document.querySelector("#c5").innerText = val - 1;
                if ((document.querySelector("#c5").innerText) == 1) {
                    $('#discount5').attr("disabled", "")
                }
                pep = Number(document.querySelector("#c5").innerText) + Number(document.querySelector("#c6").innerText)
                    + Number(document.querySelector("#c7").innerText)
                if(parseInt($('#maxPersonnel').text()) > pep){
                    $('#pluscount5').removeAttr("disabled")
                    $('#pluscount6').removeAttr("disabled")
                    $('#pluscount7').removeAttr("disabled")
                }
                change()
                count();
            },

            pCount6() {
                const val = Number(document.querySelector("#c6").innerText);
                document.querySelector("#c6").innerText = val + 1;
                if (val + 1 > 0) {
                    $('#discount6').removeAttr("disabled")
                }
                pep = Number(document.querySelector("#c5").innerText) + Number(document.querySelector("#c6").innerText)
                    + Number(document.querySelector("#c7").innerText)
                if(parseInt($('#maxPersonnel').text()) <= pep){
                    $('#pluscount5').attr("disabled", "")
                    $('#pluscount6').attr("disabled", "")
                    $('#pluscount7').attr("disabled", "")
                }
                change()
                count();
            },

            mCount6() {
                const val = Number(document.querySelector("#c6").innerText);
                document.querySelector("#c6").innerText = val - 1;
                if ((document.querySelector("#c6").innerText) == 0) {
                    $('#discount6').attr("disabled", "")
                }
                pep = Number(document.querySelector("#c5").innerText) + Number(document.querySelector("#c6").innerText)
                    + Number(document.querySelector("#c7").innerText)
                if(parseInt($('#maxPersonnel').text()) > pep){
                    $('#pluscount5').removeAttr("disabled")
                    $('#pluscount6').removeAttr("disabled")
                    $('#pluscount7').removeAttr("disabled")
                }
                change()
                count();
            },


            pCount7() {
                const val = Number(document.querySelector("#c7").innerText);
                document.querySelector("#c7").innerText = val + 1;
                if (val + 1 > 0) {
                    $('#discount7').removeAttr("disabled")
                }
                pep = Number(document.querySelector("#c5").innerText) + Number(document.querySelector("#c6").innerText)
                    + Number(document.querySelector("#c7").innerText)
                if(parseInt($('#maxPersonnel').text()) <= pep){
                    $('#pluscount5').attr("disabled", "")
                    $('#pluscount6').attr("disabled", "")
                    $('#pluscount7').attr("disabled", "")
                }
                change()
                count();
            },

            mCount7() {
                const val = Number(document.querySelector("#c7").innerText);
                document.querySelector("#c7").innerText = val - 1;
                if ((document.querySelector("#c7").innerText) == 0) {
                    $('#discount7').attr("disabled", "")
                }
                pep = Number(document.querySelector("#c5").innerText) + Number(document.querySelector("#c6").innerText)
                    + Number(document.querySelector("#c7").innerText)
                if(parseInt($('#maxPersonnel').text()) > pep){
                    $('#pluscount5').removeAttr("disabled")
                    $('#pluscount6').removeAttr("disabled")
                    $('#pluscount7').removeAttr("disabled")
                }
                change()
                count();
            },

            pCount8() {
                const val = Number(document.querySelector("#c8").innerText);
                document.querySelector("#c8").innerText = val + 1;
                if (val + 1 > 0) {
                    $('#discount8').removeAttr("disabled")
                }
                change()
            },
            mCount8() {
                const val = Number(document.querySelector("#c8").innerText);
                document.querySelector("#c8").innerText = val - 1;
                if ((document.querySelector("#c8").innerText) == 0) {
                    $('#discount8').attr("disabled", "")
                }
                change()
                count();
            }
        }
    });
    lodgingIdSearch(id);
    function lodgingIdSearch(id) {
        $.get("/api/room/roomPage/" + id, function (response) {
            $('#skel').hide()
            roomView.data = response.data;
            let lodgingTitle = roomView.data.lodgingApiResponse.lodgingTitle
            $('#lodgingTitle1').text(lodgingTitle)
            let locationState = roomView.data.lodgingLocationApiResponse.locationState
            $('#locationState1').text(locationState)
            $('#locationState2').text(locationState)
            $('#lodgingBedrooms').text(roomView.data.lodgingRoomApiResponse.lodgingBedrooms)
            $('#lodgingBeds').text(roomView.data.lodgingRoomApiResponse.lodgingBeds)
            $('#lodgingBathroom').text(roomView.data.lodgingRoomApiResponse.lodgingBathroom)
            $('#lodgingExplain').text(roomView.data.lodgingApiResponse.lodgingExplain)
            $('#bedroomnum').text(roomView.data.lodgingRoomApiResponse.lodgingBedrooms)
            $('#bednum').text(roomView.data.lodgingRoomApiResponse.lodgingBeds)
            $('#bathnum').text(roomView.data.lodgingRoomApiResponse.lodgingBathroom)
            $('#checkoutStart').text(roomView.data.lodgingIsresvApiResponse.isresvDuetime)

            let priceNormalNN = roomView.data.lodgingPriceApiResponse.priceNormal
            const priceNormal = priceNormalNN.toLocaleString('ko-KR')
            $('#priceNormal1').text(priceNormal)
            $('#priceNormal2').text(priceNormal)
            $('#sideBarPrice').text(priceNormal)
            $('#serviceSuSu').text(0)
            $('#totalPrice').text(priceNormal)
            $('#nomalpricepic').text(priceNormal)
            $('#checkinStart').text(roomView.data.lodgingBeforeApiResponse.checkinStart)
            $('#checkinEnd').text(roomView.data.lodgingBeforeApiResponse.checkinEnd)

            let hostName = roomView.data.memberApiResponse.memName + roomView.data.memberApiResponse.memFirstname
            $('#hostname1').text(hostName);
            $('#hostname2').text(hostName)

            let lodgingGuests = roomView.data.lodgingApiResponse.lodgingGuests
            $('#maxPersonnel').text(lodgingGuests)
            $('#hostExplan').text(lodgingGuests)

            $('#memberReg').text((roomView.data.memberApiResponse.confirmAt).substring(0,10))

            let convivalString = roomView
                .data
                .lodgingApiResponse
                .lodgingCovi;
            let convival = convivalString.split(',');
            for (let i in convival) {
                if (convival[i] === '무선 인터넷') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>무선 인터넷</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="m15.9999 20.33323c2.0250459 0 3.66667 1.6416241 3.66667 3.66667s-1.6416241 3.66667-3.66667 3.66667-3.66667-1.6416241-3.66667-3.66667 1.6416241-3.66667 3.66667-3.66667zm0 2c-.9204764 0-1.66667.7461936-1.66667 1.66667s.7461936 1.66667 1.66667 1.66667 1.66667-.7461936 1.66667-1.66667-.7461936-1.66667-1.66667-1.66667zm.0001-7.33323c3.5168171 0 6.5625093 2.0171251 8.0432368 4.9575354l-1.5143264 1.5127043c-1.0142061-2.615688-3.5549814-4.4702397-6.5289104-4.4702397s-5.5147043 1.8545517-6.52891042 4.4702397l-1.51382132-1.5137072c1.48091492-2.939866 4.52631444-4.9565325 8.04273174-4.9565325zm.0001-5.3332c4.9804693 0 9.3676401 2.540213 11.9365919 6.3957185l-1.4470949 1.4473863c-2.1746764-3.5072732-6.0593053-5.8431048-10.489497-5.8431048s-8.31482064 2.3358316-10.48949703 5.8431048l-1.44709488-1.4473863c2.56895177-3.8555055 6.95612261-6.3957185 11.93659191-6.3957185zm-.0002-5.3336c6.4510616 0 12.1766693 3.10603731 15.7629187 7.9042075l-1.4304978 1.4309874c-3.2086497-4.44342277-8.4328305-7.3351949-14.3324209-7.3351949-5.8991465 0-11.12298511 2.89133703-14.33169668 7.334192l-1.43047422-1.4309849c3.58629751-4.79760153 9.31155768-7.9032071 15.7621709-7.9032071z"></path></svg></div></div></div>')
                }
                if (convival[i] === '수영장') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>수영장</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M24 26c.988 0 1.945.351 2.671 1.009.306.276.71.445 1.142.483L28 27.5v2l-.228-.006a3.96 3.96 0 0 1-2.443-1.003A1.978 1.978 0 0 0 24 28c-.502 0-.978.175-1.328.491a3.977 3.977 0 0 1-2.67 1.009 3.977 3.977 0 0 1-2.672-1.009A1.978 1.978 0 0 0 16 28c-.503 0-.98.175-1.329.491a3.978 3.978 0 0 1-2.67 1.009 3.978 3.978 0 0 1-2.672-1.008A1.978 1.978 0 0 0 8 28c-.503 0-.98.175-1.33.491a3.96 3.96 0 0 1-2.442 1.003L4 29.5v-2l.187-.008a1.953 1.953 0 0 0 1.142-.483A3.975 3.975 0 0 1 8 26c.988 0 1.945.352 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.492A3.974 3.974 0 0 1 16 26c.988 0 1.945.351 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.491A3.975 3.975 0 0 1 23.999 26zm0-5c.988 0 1.945.351 2.671 1.009.306.276.71.445 1.142.483L28 22.5v2l-.228-.006a3.96 3.96 0 0 1-2.443-1.003A1.978 1.978 0 0 0 24 23c-.502 0-.978.175-1.328.491a3.977 3.977 0 0 1-2.67 1.009 3.977 3.977 0 0 1-2.672-1.009A1.978 1.978 0 0 0 16 23c-.503 0-.98.175-1.329.491a3.978 3.978 0 0 1-2.67 1.009 3.978 3.978 0 0 1-2.672-1.008A1.978 1.978 0 0 0 8 23c-.503 0-.98.175-1.33.491a3.96 3.96 0 0 1-2.442 1.003L4 24.5v-2l.187-.008a1.953 1.953 0 0 0 1.142-.483A3.975 3.975 0 0 1 8 21c.988 0 1.945.352 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.492A3.974 3.974 0 0 1 16 21c.988 0 1.945.351 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.491A3.975 3.975 0 0 1 23.999 21zM20 3a4 4 0 0 1 3.995 3.8L24 7v2h4v2h-4v5c.912 0 1.798.3 2.5.862l.171.147c.306.276.71.445 1.142.483L28 17.5v2l-.228-.006a3.96 3.96 0 0 1-2.443-1.003A1.978 1.978 0 0 0 24 18c-.502 0-.978.175-1.328.491a3.977 3.977 0 0 1-2.67 1.009 3.977 3.977 0 0 1-2.672-1.009A1.978 1.978 0 0 0 16 18c-.503 0-.98.175-1.329.491a3.978 3.978 0 0 1-2.67 1.009 3.978 3.978 0 0 1-2.672-1.008A1.978 1.978 0 0 0 8 18c-.503 0-.98.175-1.33.491a3.96 3.96 0 0 1-2.442 1.003L4 19.5v-2l.187-.008a1.953 1.953 0 0 0 1.142-.483A3.975 3.975 0 0 1 8 16c.988 0 1.945.352 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.492a3.956 3.956 0 0 1 2.444-1.002L16 16v-5H4V9h12V7a2 2 0 0 0-3.995-.15L12 7h-2a4 4 0 0 1 7-2.645A3.985 3.985 0 0 1 20 3zm-2 13.523c.16.091.313.194.459.307l.212.179c.35.316.826.49 1.33.491.439 0 .86-.134 1.191-.38l.137-.111c.206-.187.431-.35.67-.486V11h-4zM20 5a2 2 0 0 0-1.995 1.85L18 7v2h4V7a2 2 0 0 0-2-2z"></path></svg></div></div></div>');
                    $('#_1vjikx5').before('<div class="_1vjikx5"><div class="_1t2btyf"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M24 26c.988 0 1.945.351 2.671 1.009.306.276.71.445 1.142.483L28 27.5v2l-.228-.006a3.96 3.96 0 0 1-2.443-1.003A1.978 1.978 0 0 0 24 28c-.502 0-.978.175-1.328.491a3.977 3.977 0 0 1-2.67 1.009 3.977 3.977 0 0 1-2.672-1.009A1.978 1.978 0 0 0 16 28c-.503 0-.98.175-1.329.491a3.978 3.978 0 0 1-2.67 1.009 3.978 3.978 0 0 1-2.672-1.008A1.978 1.978 0 0 0 8 28c-.503 0-.98.175-1.33.491a3.96 3.96 0 0 1-2.442 1.003L4 29.5v-2l.187-.008a1.953 1.953 0 0 0 1.142-.483A3.975 3.975 0 0 1 8 26c.988 0 1.945.352 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.492A3.974 3.974 0 0 1 16 26c.988 0 1.945.351 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.491A3.975 3.975 0 0 1 23.999 26zm0-5c.988 0 1.945.351 2.671 1.009.306.276.71.445 1.142.483L28 22.5v2l-.228-.006a3.96 3.96 0 0 1-2.443-1.003A1.978 1.978 0 0 0 24 23c-.502 0-.978.175-1.328.491a3.977 3.977 0 0 1-2.67 1.009 3.977 3.977 0 0 1-2.672-1.009A1.978 1.978 0 0 0 16 23c-.503 0-.98.175-1.329.491a3.978 3.978 0 0 1-2.67 1.009 3.978 3.978 0 0 1-2.672-1.008A1.978 1.978 0 0 0 8 23c-.503 0-.98.175-1.33.491a3.96 3.96 0 0 1-2.442 1.003L4 24.5v-2l.187-.008a1.953 1.953 0 0 0 1.142-.483A3.975 3.975 0 0 1 8 21c.988 0 1.945.352 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.492A3.974 3.974 0 0 1 16 21c.988 0 1.945.351 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.491A3.975 3.975 0 0 1 23.999 21zM20 3a4 4 0 0 1 3.995 3.8L24 7v2h4v2h-4v5c.912 0 1.798.3 2.5.862l.171.147c.306.276.71.445 1.142.483L28 17.5v2l-.228-.006a3.96 3.96 0 0 1-2.443-1.003A1.978 1.978 0 0 0 24 18c-.502 0-.978.175-1.328.491a3.977 3.977 0 0 1-2.67 1.009 3.977 3.977 0 0 1-2.672-1.009A1.978 1.978 0 0 0 16 18c-.503 0-.98.175-1.329.491a3.978 3.978 0 0 1-2.67 1.009 3.978 3.978 0 0 1-2.672-1.008A1.978 1.978 0 0 0 8 18c-.503 0-.98.175-1.33.491a3.96 3.96 0 0 1-2.442 1.003L4 19.5v-2l.187-.008a1.953 1.953 0 0 0 1.142-.483A3.975 3.975 0 0 1 8 16c.988 0 1.945.352 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.492a3.956 3.956 0 0 1 2.444-1.002L16 16v-5H4V9h12V7a2 2 0 0 0-3.995-.15L12 7h-2a4 4 0 0 1 7-2.645A3.985 3.985 0 0 1 20 3zm-2 13.523c.16.091.313.194.459.307l.212.179c.35.316.826.49 1.33.491.439 0 .86-.134 1.191-.38l.137-.111c.206-.187.431-.35.67-.486V11h-4zM20 5a2 2 0 0 0-1.995 1.85L18 7v2h4V7a2 2 0 0 0-2-2z"></path></svg></div><div class="_1mqc21n"><div class="_1qsawv5">마음껏 물놀이를 즐기세요</div><div class="_1jlr81g">이 숙소는 수영장을 갖춘 숙소 입니다.</div></div></div>')
                }
                if (convival[i] === '아침 식사') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>아침 식사</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M2 31a1 1 0 0 1-1-1 9 9 0 0 1 17.945-1H21c.736 0 1.428-.265 1.971-.739a2.99 2.99 0 0 0 1.022-2.06L24 26V14H13v6h-2v-7a1 1 0 0 1 .883-.993L12 12h13a1 1 0 0 1 .993.883L26 13v2h4a1 1 0 0 1 .993.883L31 16v9a1 1 0 0 1-.883.993L30 26h-4a4.99 4.99 0 0 1-1.714 3.768 4.982 4.982 0 0 1-3.025 1.225L21 31zm3.85-6.637a7.003 7.003 0 0 0-2.693 4.154l-.058.301-.028.182h4.103zM10 23c-.823 0-1.612.142-2.346.403L9.254 29h1.491l1.6-5.598a6.968 6.968 0 0 0-1.854-.385l-.25-.013zm4.151 1.363L12.825 29h4.103l-.027-.182a6.999 6.999 0 0 0-2.75-4.455zM29 17h-3v7h3zM19.994 1c-.002 2.062-.471 3.344-1.765 5.424l-.753 1.183C16.61 8.998 16.198 9.908 16.058 11h-2.015c.15-1.613.708-2.836 1.91-4.728l.563-.88C17.632 3.6 17.993 2.607 17.994.998zm5 0c-.002 2.062-.471 3.344-1.765 5.424l-.753 1.183C21.61 8.998 21.198 9.908 21.058 11h-2.015c.15-1.613.708-2.836 1.91-4.728l.563-.88C22.632 3.6 22.993 2.607 22.994.998z"></path></svg></div></div></div>')
                }
                if (convival[i] === '에어컨') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>에어컨</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M17 1v4.03l4.026-2.324 1 1.732L17 7.339v6.928l6-3.464V5h2v4.648l3.49-2.014 1 1.732L26 11.381l4.026 2.325-1 1.732L24 12.535l-6 3.464 6 3.465 5.026-2.902 1 1.732L26 20.618l3.49 2.016-1 1.732L25 22.351V27h-2v-5.804l-6-3.465v6.929l5.026 2.902-1 1.732L17 26.97V31h-2v-4.031l-4.026 2.325-1-1.732L15 24.66v-6.929l-6 3.464V27H7v-4.65l-3.49 2.016-1-1.732 3.489-2.016-4.025-2.324 1-1.732 5.025 2.901 6-3.464-6-3.464-5.025 2.903-1-1.732L6 11.38 2.51 9.366l1-1.732L7 9.648V5h2v5.803l6 3.464V7.339L9.974 4.438l1-1.732L15 5.03V1z"></path></svg></div></div></div>')
                }
                if (convival[i] === '샴푸') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>샴푸</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M20 1v2h-3v2h1a2 2 0 0 1 1.995 1.85L20 7v2a4 4 0 0 1 3.995 3.8L24 13v14a4 4 0 0 1-3.8 3.995L20 31h-8a4 4 0 0 1-3.995-3.8L8 27V13a4 4 0 0 1 3.8-3.995L12 9V7a2 2 0 0 1 1.85-1.995L14 5h1V3H8V1zm2 21H10v5a2 2 0 0 0 1.85 1.995L12 29h8a2 2 0 0 0 1.995-1.85L22 27zm0-6H10v4h12zm-2-5h-8a2 2 0 0 0-1.995 1.85L10 13v1h12v-1a2 2 0 0 0-2-2zm-2-4h-4v2h4z"></path></svg></div></div></div>')
                }
                if (convival[i] === '헤어드라이어') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>헤어드라이어</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M14 27l-.005.2a4 4 0 0 1-3.789 3.795L10 31H4v-2h6l.15-.005a2 2 0 0 0 1.844-1.838L12 27zM10 1c.536 0 1.067.047 1.58.138l.38.077 17.448 3.64a2 2 0 0 1 1.585 1.792l.007.166v6.374a2 2 0 0 1-1.431 1.917l-.16.04-13.554 2.826 1.767 6.506a2 2 0 0 1-1.753 2.516l-.177.008H11.76a2 2 0 0 1-1.879-1.315l-.048-.15-1.88-6.769A9 9 0 0 1 10 1zm5.692 24l-1.799-6.621-1.806.378a8.998 8.998 0 0 1-1.663.233l-.331.008L11.76 25zM10 3a7 7 0 1 0 1.32 13.875l.331-.07L29 13.187V6.813L11.538 3.169A7.027 7.027 0 0 0 10 3zm0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path></svg></div></div></div>')
                }
                if (convival[i] === '청소용품') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>청소용품</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M20 1v2h-3v2h1a2 2 0 0 1 1.995 1.85L20 7v2a4 4 0 0 1 3.995 3.8L24 13v14a4 4 0 0 1-3.8 3.995L20 31h-8a4 4 0 0 1-3.995-3.8L8 27V13a4 4 0 0 1 3.8-3.995L12 9V7a2 2 0 0 1 1.85-1.995L14 5h1V3H8V1zm2 21H10v5a2 2 0 0 0 1.85 1.995L12 29h8a2 2 0 0 0 1.995-1.85L22 27zm0-6H10v4h12zm-2-5h-8a2 2 0 0 0-1.995 1.85L10 13v1h12v-1a2 2 0 0 0-2-2zm-2-4h-4v2h4z"></path></svg></div></div></div>')
                }
                if (convival[i] === '샤워젤') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>샤워젤</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M18 1v2h-7v2h1a2 2 0 0 1 1.995 1.85L14 7l.001 2.1a5.002 5.002 0 0 1 3.994 4.674L18 14v14a3 3 0 0 1-2.824 2.995L15 31H5a3 3 0 0 1-2.995-2.824L2 28V14a5.002 5.002 0 0 1 4-4.9V7a2 2 0 0 1 1.85-1.995L8 5h1V3H6V1h12zm-2 15.058c-1.143.147-2.085.595-3.577 1.552l-.348.225C9.64 19.424 8.293 19.995 6 19.995a9.003 9.003 0 0 1-2-.217V28a1 1 0 0 0 .883.993L5 29h10a1 1 0 0 0 .993-.883L16 28V16.058zM27 13a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm-14-2H7a3 3 0 0 0-2.995 2.824L4 14v3.711a6.846 6.846 0 0 0 2 .284c1.633 0 2.64-.361 4.4-1.462l.638-.41c2.016-1.315 3.277-1.922 4.962-2.08V14a3 3 0 0 0-3-3zm14 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM25 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM12 7H8v2h4V7zm13-3a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path></svg></div></div></div>')
                }
                if (convival[i] === '필수품목') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>필수품목</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M11 1v7l1.898 20.819.007.174c-.025 1.069-.804 1.907-1.818 1.999a2 2 0 0 1-.181.008h-7.81l-.174-.008C1.86 30.87 1.096 30.018 1.096 29l.002-.09 1.907-21L3.001 1zm6 0l.15.005a2 2 0 0 1 1.844 1.838L19 3v7.123l-2 8V31h-2V18.123l.007-.163.02-.162.033-.16L16.719 11H13V1zm11 0a2 2 0 0 1 1.995 1.85L30 3v26a2 2 0 0 1-1.85 1.995L28 31h-7v-2h7v-2h-7v-2h7v-2h-7v-2h7v-2h-7v-2h7v-2h-7v-2h7v-2h-7V9h7V7h-7V5h7V3h-7V1zM9.088 9h-4.18L3.096 29l.058.002L10.906 29l-.004-.058zM17 3h-2v6h2zM9.002 3H5L5 7h4.004z"></path></svg></div></div></div>')
                }
                if (convival[i] === '옷걸이') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>옷걸이</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M16 2a5 5 0 0 1 1.661 9.717 1.002 1.002 0 0 0-.653.816l-.008.126v.813l13.23 9.052a3 3 0 0 1 1.299 2.279l.006.197a3 3 0 0 1-3 3H3.465a3 3 0 0 1-1.694-5.476L15 13.472v-.813c0-1.211.724-2.285 1.816-2.757l.176-.07a3 3 0 1 0-3.987-3.008L13 7h-2a5 5 0 0 1 5-5zm0 13.211L2.9 24.175A1 1 0 0 0 3.465 26h25.07a1 1 0 0 0 .565-1.825z"></path></svg></div></div></div>')
                }
                if (convival[i] === '욕조') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>욕조</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M7.5 2a4.5 4.5 0 0 1 4.473 4H14v2H8V6h1.95a2.5 2.5 0 0 0-4.945.336L5 6.5V16h26v2h-2v5a5.001 5.001 0 0 1-3 4.584V30h-2v-2H8v2H6v-2.416a5.002 5.002 0 0 1-2.995-4.349L3 23v-5H1v-2h2V6.5A4.5 4.5 0 0 1 7.5 2zm19.499 16h-22L5 23a3 3 0 0 0 2.65 2.98l.174.015L8 26h16a3 3 0 0 0 2.995-2.824L27 23z"></path></svg></div></div></div>')
                }
                if (convival[i] === '침구') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>침구</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M19.586 2a2 2 0 0 1 1.284.467l.13.119L29.414 11a2 2 0 0 1 .578 1.238l.008.176V25a5 5 0 0 1-4.783 4.995L25 30H4a2 2 0 0 1-1.995-1.85L2 28V7a5 5 0 0 1 4.783-4.995L7 2zM7 4a3 3 0 0 0-2.995 2.824L4 7v14a3 3 0 0 0 2.824 2.995L7 24h19v2H7a4.978 4.978 0 0 1-3-1v3h21a3 3 0 0 0 2.995-2.824L28 25v-3H6v-2h22v-6h-5a5 5 0 0 1-4.995-4.783L18 9V4zm20.586 8L20 4.415V9a3 3 0 0 0 2.824 2.995L23 12z"></path></svg></div></div></div>')
                }
                if (convival[i] === '당구대') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>당구대</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M28 5a3 3 0 0 1 2.995 2.824L31 8v16a3 3 0 0 1-2.824 2.995L28 27h-4.28l1.229 3.684-1.898.632L21.612 27H4a3 3 0 0 1-2.995-2.824L1 24V8a3 3 0 0 1 2.824-2.995L4 5h24zm0 18a1 1 0 0 0-.117 1.993L28 25l.117-.007A1 1 0 0 0 28 23zM4 23a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM25.17 7L19 6.999V8l-.005.176a3 3 0 0 1-5.99 0L13 8V6.999L6.83 7A3 3 0 0 1 3 10.83v10.34A3 3 0 0 1 6.83 25H13v-1a3 3 0 0 1 5.995-.176L19 24v1h1.946l-3.212-9.636 1.897-.633L23.054 25h2.117a2.987 2.987 0 0 1-.166-.824L25 24a3 3 0 0 1 4-2.829V10.829A3 3 0 0 1 25.17 7zM16 23a1 1 0 0 0-.993.883L15 24v1h2v-1a1 1 0 0 0-1-1zm2-11a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm10-5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM4 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm13-.001h-2V8l.007.117a1 1 0 0 0 1.986 0L17 8V6.999z"></path></svg></div></div></div>')
                }
                if (convival[i] === '음향 시스템') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>음향 시스템</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M24 1a5 5 0 0 1 4.995 4.783L29 6v20a5 5 0 0 1-4.783 4.995L24 31H8a5 5 0 0 1-4.995-4.783L3 26V6a5 5 0 0 1 4.783-4.995L8 1zm0 2H8a3 3 0 0 0-2.995 2.824L5 6v20a3 3 0 0 0 2.824 2.995L8 29h16a3 3 0 0 0 2.995-2.824L27 26V6a3 3 0 0 0-2.824-2.995zm-8 10a7 7 0 1 1 0 14 7 7 0 0 1 0-14zm0 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm0-14a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg></div></div></div>')
                }
                if (convival[i] === '실내 벽난로') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>실내 벽난로</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="m31 6v2h-1v23h-6v-18h-16v18h-6v-23h-1v-2zm-15.368 8.991.959.702c3.317 2.43 5.141 5.07 5.382 7.934l.02.287.005.207.002.138c0 3.183-2.698 5.741-6 5.741-3.168 0-5.789-2.358-5.988-5.387l-.01-.218-.002-.147c.004-1.629.557-3.29 1.64-4.985l.224-.34.677-.98 1.238.783zm12.368-6.991h-24v21h2v-16a2 2 0 0 1 1.697-1.977l.154-.018.149-.005h16a2 2 0 0 1 1.995 1.85l.005.15v16h2zm-12 17.355-.092.093c-.62.655-.908 1.233-.908 1.719 0 .428.413.833 1 .833s1-.405 1-.833c0-.445-.242-.968-.76-1.556l-.148-.163zm.351-7.315-1.766 3.562-1.466-.927-.152.265c-.534.96-.844 1.878-.937 2.749l-.023.289-.007.26.001.118c.025.92.408 1.761 1.024 2.403.14-1.137.86-2.237 2.097-3.324l.238-.203.64-.534.64.534c1.384 1.153 2.188 2.32 2.335 3.528a3.593 3.593 0 0 0 1.018-2.27l.007-.218-.006-.28c-.088-1.865-1.113-3.702-3.129-5.51l-.268-.236zm14.649-16.04v2h-30v-2z"></path></svg></div></div></div>')
                }
                if (convival[i] === '전기 밥솥') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>전기 밥솥</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M21 3a9 9 0 0 1 8.996 8.735L30 12v4h1v2h-1v9a2 2 0 0 1-1.85 1.995L28 29H4a2 2 0 0 1-1.995-1.85L2 27v-9H1v-2h1v-4a9 9 0 0 1 8.735-8.996L11 3zm7 11H4v13h24zm-8 2v2h-8v-2zM9 16a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm14 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM21 5H11a7 7 0 0 0-6.996 6.76L4 12h7V8h10v4h7a7 7 0 0 0-6.76-6.996zm-2 5h-6v2h6z"></path></svg></div></div></div>')
                }
                if (convival[i] === '식탁') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>식탁</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M31 9v21h-2v-7h-6v7h-2v-7a2 2 0 0 1 1.85-1.995L23 21h6V9h2zM3 9v12h6a2 2 0 0 1 1.995 1.85L11 23v7H9v-7H3v7H1V9h2zm14-2v2.083a6.002 6.002 0 0 1 4.996 5.692L22 15h5v2H17v13h-2V17H5v-2h5a6.002 6.002 0 0 1 5-5.917V7h2zm-1 4a4 4 0 0 0-3.995 3.8L12 15h8a4 4 0 0 0-4-4z"></path></svg></div></div></div>')
                }
                if (convival[i] === '야외 가구') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>야외 가구</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="m21.5371936.79901371c7.1880175 1.92602347 11.494866 9.23747869 9.7426084 16.43001709l-.0788157.3081628-.2588191.9659258-12.3525005-3.310178-3.857 14.14h-2.073l3.997-14.658-12.11647204-3.2462092.25881905-.9659258c1.95353809-7.29070343 9.44747649-11.61733078 16.73817989-9.66379269zm-15.87052693 20.20098629c2.209139 0 4 1.790861 4 4s-1.790861 4-4 4-4-1.790861-4-4 1.790861-4 4-4zm0 2c-1.1045695 0-2 .8954305-2 2s.8954305 2 2 2 2-.8954305 2-2-.8954305-2-2-2zm19.65915683-18.08358565.0562051.17389745c.7414212 2.34256671.7721409 5.3779941-.0104397 8.5029521l-.083862.3235661-.2500602.9331114 4.4483333 1.1920586.0336854-.1902377c.6822646-4.2118807-1.0077857-8.36292241-4.1938619-10.93534795zm-3.4573144-1.74209583-2.7528424 10.08862288 3.99 1.069.2502086-.9327495c1.2342523-4.60629235.4411768-8.82534729-1.4873662-10.22487338zm-1.9509888-.45024981c-2.2768126.37924219-4.8951798 3.45150567-6.1362066 7.78144189l-.0846967.3054909-.2509503.9329399 3.738 1.002zm-3.6637953-.26273744-.2191322.03588101c-3.8698651.66371945-7.25443966 3.26546734-8.8113326 7.03021387l-.12548156.31640439-.06677864.18116946 4.4836667 1.2019414.2500987-.933578c.8918782-3.32853504 2.5446834-6.12802789 4.4889596-7.83203213z"></path></svg></div></div></div>')
                }
                if (convival[i] === '와인잔') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>와인잔</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M9.238 3l-.203.408a20.366 20.366 0 0 0-1.69 5.01l-.007.032A9.001 9.001 0 0 1 10.16 8c2.262 0 4.444.844 6.124 2.407l.237.229a6.979 6.979 0 0 0 4.948 2.05 6.985 6.985 0 0 0 3.528-.951l-.002-.222c-.071-2.757-.746-5.456-2.03-8.105L22.762 3H9.238zm.92 7c-1.087 0-2.15.249-3.112.726C7.014 11.15 7 11.574 7 12a9 9 0 0 0 9 9c4.06 0 7.706-3.138 8.72-6.919a8.999 8.999 0 0 1-3.252.605 8.976 8.976 0 0 1-6.126-2.408l-.236-.228A6.967 6.967 0 0 0 10.159 10zm13.804-9l.284.523C26.079 4.913 27 8.41 27 12c0 5.4-4.528 10.398-10 10.95V29h6v2H9v-2h6v-6.045C9.394 22.45 5 17.738 5 12c0-3.591.92-7.087 2.754-10.477L8.038 1h15.924z"></path></svg></div></div></div>')
                }
                if (convival[i] === '바비큐 그릴') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>바비큐 그릴</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M12.994 2h2c-.002 2.062-.471 3.344-1.765 5.424l-.753 1.183c-.867 1.391-1.278 2.301-1.418 3.393H9.043c.1-1.069.378-1.966.903-3H6c0 5.523 4.477 10 10 10 5.43 0 9.848-4.327 9.996-9.72L26 9l-3.765.001c-.704 1.177-1.05 2.014-1.177 2.999h-2.015c.15-1.613.708-2.836 1.91-4.728l.563-.88c1.116-1.791 1.477-2.784 1.478-4.393h2c-.002 1.919-.408 3.162-1.506 5L28 7v2c0 .682-.057 1.35-.166 2H30v2h-2.683a12.039 12.039 0 0 1-5.896 6.709l4.49 9.877-1.821.828-2.006-4.415H17V30h-2v-4H9.916L7.91 30.413l-1.82-.828 4.49-9.877A12.039 12.039 0 0 1 4.682 13H2v-2h2.166a12.058 12.058 0 0 1-.162-1.695L4 9V7h7.127l.389-.609c1.116-1.79 1.477-2.783 1.478-4.392zm-.56 18.461L10.824 24H15v-3.04a11.95 11.95 0 0 1-2.566-.498zM17 20.96v3.04h4.175l-1.609-3.538c-.684.213-1.395.366-2.126.453zm.994-18.96h2c-.002 2.063-.471 3.345-1.765 5.425l-.753 1.183c-.867 1.391-1.278 2.301-1.418 3.393h-2.015c.15-1.613.708-2.836 1.91-4.728l.563-.88c1.116-1.791 1.477-2.784 1.478-4.393z"></path></svg></div></div></div>')
                }
                if (convival[i] === '셀프 체크인') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>셀프 체크인</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M9 29v-2h2v-2H6a5 5 0 0 1-4.995-4.783L1 20V8a5 5 0 0 1 4.783-4.995L6 3h20a5 5 0 0 1 4.995 4.783L31 8v12a5 5 0 0 1-4.783 4.995L26 25h-5v2h2v2zm10-4h-6v2h6zm7-20H6a3 3 0 0 0-2.995 2.824L3 8v12a3 3 0 0 0 2.824 2.995L6 23h20a3 3 0 0 0 2.995-2.824L29 20V8a3 3 0 0 0-2.824-2.995z"></path></svg></div></div></div>');
                    $('#_1vjikx5').before('<div class="_1vjikx5"><div class="_1t2btyf"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M9 29v-2h2v-2H6a5 5 0 0 1-4.995-4.783L1 20V8a5 5 0 0 1 4.783-4.995L6 3h20a5 5 0 0 1 4.995 4.783L31 8v12a5 5 0 0 1-4.783 4.995L26 25h-5v2h2v2zm10-4h-6v2h6zm7-20H6a3 3 0 0 0-2.995 2.824L3 8v12a3 3 0 0 0 2.824 2.995L6 23h20a3 3 0 0 0 2.995-2.824L29 20V8a3 3 0 0 0-2.824-2.995z"></path></svg></div><div class="_1mqc21n"><div class="_1qsawv5">셀프 체크인</div><div class="_1jlr81g">안내 직원의 도움을 받아 체크인하실 수 있어요.</div></div></div>')
                }
                if (convival[i] === '열쇠 보관함') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>열쇠 보관함</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M25 2a5 5 0 0 1 4.995 4.783L30 7v18a5 5 0 0 1-4.783 4.995L25 30H7a5 5 0 0 1-4.995-4.783L2 25V7a5 5 0 0 1 4.783-4.995L7 2zm0 2H7a3 3 0 0 0-2.995 2.824L4 7v4l2-.001V6h20v20H6v-5.001L4 21v4a3 3 0 0 0 2.824 2.995L7 28h18a3 3 0 0 0 2.995-2.824L28 25V7a3 3 0 0 0-2.824-2.995zm-1 4H8v16h16zm-8 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm-10-.001L4 13v6l2-.001z"></path></svg></div></div></div>');
                    $('#_1vjikx5').before('<div class="_1vjikx5"><div class="_1t2btyf"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M25 2a5 5 0 0 1 4.995 4.783L30 7v18a5 5 0 0 1-4.783 4.995L25 30H7a5 5 0 0 1-4.995-4.783L2 25V7a5 5 0 0 1 4.783-4.995L7 2zm0 2H7a3 3 0 0 0-2.995 2.824L4 7v4l2-.001V6h20v20H6v-5.001L4 21v4a3 3 0 0 0 2.824 2.995L7 28h18a3 3 0 0 0 2.995-2.824L28 25V7a3 3 0 0 0-2.824-2.995zm-1 4H8v16h16zm-8 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm-10-.001L4 13v6l2-.001z"></path></svg></div><div class="_1mqc21n"><div class="_1qsawv5">열쇠 보관함</div><div class="_1jlr81g">열쇠 보관함을 통해 체크인하실 수 있어요.</div></div></div>')
                }
                if (convival[i] === '믹서기') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>믹서기</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M23 1a1 1 0 0 1 .993.883L24 2v4l-.02.196-2.906 14.536a4.997 4.997 0 0 1 2.317 3.39l.04.258.561 4.496a1 1 0 0 1-.874 1.117L23 30H9a1 1 0 0 1-1-1.006l.008-.118.562-4.496a4.996 4.996 0 0 1 2.356-3.648L8.18 7H7a1 1 0 0 0-.993.883L6 8v7H4V8a3 3 0 0 1 2.824-2.995L7 5h.999L8 2a1 1 0 0 1 .883-.993L9 1h14zm-9.499 21a3 3 0 0 0-2.92 2.45l-.027.178-.421 3.371h11.733l-.42-3.371a3 3 0 0 0-2.619-2.607L18.5 22h-4.999zM16 24a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm5.78-17H10.219l2.6 13L15 19.999V11h2v8.999l2.18.001 2.6-13zm.219-4h-12v2h12V3z"></path></svg></div></div></div>')
                }
                if (convival[i] === '식기류') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>식기류</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M29 1v2c-7.18 0-13 5.82-13 13 0 7.077 5.655 12.833 12.693 12.996L29 29v2c-8.284 0-15-6.716-15-15 0-8.18 6.547-14.83 14.686-14.997zM3 1h2v6h2V1h2v6h2V1h2v9a5.002 5.002 0 0 1-3.999 4.9L9 31H7V14.9a5.01 5.01 0 0 1-3.978-4.444l-.017-.232L3 10zm26 6v2a7 7 0 0 0-.24 13.996L29 23v2a9 9 0 0 1-.265-17.996zM10.999 9h-6v.975l.005.176a3 3 0 0 0 5.99.025L11 10z"></path></svg></div></div></div>')
                }
                if (convival[i] === '제빵용 시트') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>제빵용 시트</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="m4 25c.513 0 .942.503 1 1v2h22v-2c0-.513.5-1 1-1h3v2h-2v2c0 .513-.5 1-1 1h-24c-.5 0-1-.5-1-1v-2h-2v-2zm16-10c2.989 0 5.352 2.256 5.669 5.203l.182 2.592a3 3 0 0 1 -2.788 3.198l-.102.005-13.819.002a3 3 0 0 1 -3-3l.17-2.568c.203-2.982 2.725-5.317 5.688-5.432zm-5 2h-2v3h-2v-2.831a3.833 3.833 0 0 0 -2.673 3.19 21.494 21.494 0 0 0 -.185 2.641c0 .513.36.942.858 1h14c.512-.035.833-.452.857-.952a343.57 343.57 0 0 0 -.163-2.48 3.832 3.832 0 0 0 -2.694-3.398v2.83h-2v-3h-2v3h-2zm8.995-15.001 2 .002c-.002 2.06-.472 3.342-1.766 5.422l-.752 1.183c-1.061 1.702-1.44 2.683-1.474 4.157l-.003.237h-2c0-2.16.515-3.466 1.954-5.729l.562-.88c1.061-1.701 1.44-2.682 1.476-4.155zm-5 0 2 .002c-.002 2.06-.472 3.342-1.766 5.422l-.752 1.183c-1.061 1.702-1.44 2.683-1.474 4.157l-.003.237h-2c0-2.16.515-3.466 1.954-5.729l.562-.88c1.061-1.701 1.44-2.682 1.476-4.155zm-5 0 2 .002c-.002 2.06-.472 3.342-1.766 5.422l-.752 1.183c-1.061 1.702-1.44 2.683-1.474 4.157l-.003.237h-2c0-2.16.515-3.466 1.954-5.729l.562-.88c1.061-1.701 1.44-2.682 1.476-4.155z"></path></svg></div></div></div>')
                }
                if (convival[i] === '오븐') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>오븐</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M28 2a2 2 0 0 1 1.995 1.85L30 4v24a2 2 0 0 1-1.85 1.995L28 30H4a2 2 0 0 1-1.995-1.85L2 28V4a2 2 0 0 1 1.85-1.995L4 2zm0 10H4v16h24zm-2 2v12H6V14zm-2 2H8v8h16zm4-12H4v6h24zm-3 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-6 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-6 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM7 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg></div></div></div>')
                }
                if (convival[i] === '여분의 담요와 배게') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>여분의 담요와 배게</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M26.805 4.006a2.995 2.995 0 0 0-1.873.82l-.022.022-.113-.021a47.19 47.19 0 0 0-16.86-.132l-.848.153-.021-.022A3 3 0 0 0 2 7l.007.211c.04.56.234 1.09.554 1.536l.025.033-.044.278c-.718 4.722-.717 9.14.001 13.88l.044.279-.025.035A3 3 0 0 0 5 28l.195-.006a2.995 2.995 0 0 0 1.873-.82l.021-.023.114.022a47.19 47.19 0 0 0 16.86.132l.847-.154.022.023A3 3 0 0 0 30 25l-.007-.212a2.992 2.992 0 0 0-.554-1.536l-.027-.034.045-.28c.718-4.74.719-9.158 0-13.88l-.044-.278.026-.033A3 3 0 0 0 27 4l-.194.006zM27 6a1 1 0 0 1 .676 1.737l-.4.367.09.534c.84 5.04.84 9.662-.001 14.723l-.09.534.4.367a1 1 0 1 1-1.525 1.266l-.367-.59-.68.138a45.287 45.287 0 0 1-18.205 0l-.68-.138-.368.59a1 1 0 1 1-1.525-1.265l.4-.367-.09-.535c-.841-5.06-.842-9.683 0-14.723l.088-.534-.399-.367A1 1 0 1 1 5.85 6.473l.367.59.68-.139a45.287 45.287 0 0 1 18.205 0l.68.138.368-.59A.998.998 0 0 1 27 6z"></path></svg></div></div></div>')
                }
                if (convival[i] === '다라미') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>다라미</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M12 28a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-6-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM16.027 3l.308.004a12.493 12.493 0 0 1 11.817 9.48l.07.3 1.73 7.782.027.144a2 2 0 0 1-1.83 2.285L28 23H2.247l-.15-.005a2 2 0 0 1-1.844-1.838L.247 21v-7l.004-.217a5 5 0 0 1 4.773-4.778L5.247 9h9V5h-14V3zm11.528 16H2.245l.002 2H28zM16.247 5.002V11h-11l-.177.005a3 3 0 0 0-2.818 2.819L2.247 14l-.001 3H27.11l-.84-3.783-.067-.28a10.494 10.494 0 0 0-9.596-7.921l-.292-.012z"></path></svg></div></div></div>')
                }
                if (convival[i] === '이벤트/행사 가능') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>이벤트/행사 가능</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M9 29v-2h2v-2H6a5 5 0 0 1-4.995-4.783L1 20V8a5 5 0 0 1 4.783-4.995L6 3h20a5 5 0 0 1 4.995 4.783L31 8v12a5 5 0 0 1-4.783 4.995L26 25h-5v2h2v2zm10-4h-6v2h6zm7-20H6a3 3 0 0 0-2.995 2.824L3 8v12a3 3 0 0 0 2.824 2.995L6 23h20a3 3 0 0 0 2.995-2.824L29 20V8a3 3 0 0 0-2.824-2.995z"></path></svg></div></div></div>')
                }
                if (convival[i] === '야외 식사 공간') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>야외 식사 공간</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M29 15v16h-2v-6h-6v6h-2v-6l.005-.15a2 2 0 0 1 1.838-1.844L21 23h6v-8zM5 15v8h6a2 2 0 0 1 1.995 1.85L13 25v6h-2v-6H5v6H3V15zM16 1a15 15 0 0 1 13.556 8.571 1 1 0 0 1-.79 1.423l-.113.006H17v8h8v2h-8v10h-2V21H7v-2h8v-8H3.347a1 1 0 0 1-.946-1.323l.043-.106A15 15 0 0 1 16 1zm0 2C11.71 3 7.799 5.097 5.402 8.468l-.197.284L5.042 9h21.915l-.162-.248a12.995 12.995 0 0 0-10.1-5.734l-.365-.014z"></path></svg></div></div></div>')
                }
                if (convival[i] === '가스레인지') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>가스레인지</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M27 0a2 2 0 0 1 1.995 1.85L29 2v26a2 2 0 0 1-1.85 1.995L27 30H5a2 2 0 0 1-1.995-1.85L3 28V2A2 2 0 0 1 4.85.005L5 0zm0 2H5v26h22zm-3 22a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-5.333 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-5.334 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM8 24a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm13-10a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm-10 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm10 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM21 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM11 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm10 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM11 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path></svg></div></div></div>')
                }
                if (convival[i] === '따듯한 물주전자') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>따듯한 물주전자</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M26 28v2H6v-2h20zM16 1a8.638 8.638 0 0 1 7.834 5H28a1 1 0 0 1 .997 1.076c-.295 3.873-1.576 6.45-3.894 7.564l.893 10.273a1 1 0 0 1-.88 1.08L25 26H7a1 1 0 0 1-1-.971l.004-.116L7.397 8.887c.026-.3.068-.597.124-.887H5a1 1 0 0 0-.993.883L4 9v10H2V9a3 3 0 0 1 2.824-2.995L5 6h3.165A8.638 8.638 0 0 1 16 1zm6.431 7H9.57a6.647 6.647 0 0 0-.138.7l-.041.36L8.09 24h15.819L22.61 9.06A6.67 6.67 0 0 0 22.431 8zm-5.45 3c-.147 2.02-1.163 4.144-2.7 5.783l-.231.238a6.96 6.96 0 0 0-1.984 3.98h-2.015a8.956 8.956 0 0 1 2.356-5.158l.228-.236c1.304-1.304 2.18-3.034 2.339-4.607h2.007zm4 0c.013.166.019.333.019.5-.001 2.164-1.054 4.508-2.72 6.283l-.23.238A6.967 6.967 0 0 0 16.28 21h-2.064a8.955 8.955 0 0 1 2.191-4.157l.228-.236C18.08 15.163 19 13.196 19 11.499a4.94 4.94 0 0 0-.026-.5h2.008zm5.907-3h-2.409c.04.207.073.418.098.63l.026.257.306 3.518c.98-.792 1.634-2.165 1.946-4.18L26.888 8zM16 3a6.633 6.633 0 0 0-5.552 3h11.104a6.635 6.635 0 0 0-5.043-2.98l-.275-.016L16 3z"></path></svg></div></div></div>')
                }
                if (convival[i] === '커피메이커') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>커피메이커</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M25 2a1 1 0 0 1 .936.649l.034.108 1 4a1 1 0 0 1-.857 1.237L26 8h-9v2h-2V7.999H4.999v20l3 .001a5 5 0 0 1-.716-4.66l.102-.263 2.515-6.04-1.794-3.59a1 1 0 0 1 .779-1.44L9 12h14a1 1 0 0 1 .94 1.341l-.046.106L22.618 16H24a5 5 0 0 1 4.995 4.783L29 21v4h-2v-4a3 3 0 0 0-2.824-2.995L24 18h-1.5l2.115 5.077A4.998 4.998 0 0 1 24 28L27 28v2H4a1 1 0 0 1-.993-.883L3 29V3a1 1 0 0 1 .883-.993L4 2zM12.647 22a6.638 6.638 0 0 0-2.91.628l-.506 1.218a3 3 0 0 0-.194.682l-.028.235L9 25a3 3 0 0 0 2.824 2.995l.156.004 8.027.001.23-.01a3 3 0 0 0 2.603-2.023c-1.692-.121-2.93-.67-4.836-1.889l-.375-.243C15.493 22.44 14.452 22 12.647 22zm7.686-4h-8.667l-.913 2.188A9.062 9.062 0 0 1 12.647 20c2.188 0 3.515.52 5.75 1.95l.38.246c1.74 1.136 2.741 1.627 4.034 1.76l-.042-.11zm1.048-4H10.618l1 2h8.763zm2.837-10.001H4.999v2h19.719z"></path></svg></div></div></div>')
                }
                if (convival[i] === '전자레인지') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>전자레인지</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M29 3a2 2 0 0 1 1.995 1.85L31 5v22a2 2 0 0 1-1.85 1.995L29 29H3a2 2 0 0 1-1.995-1.85L1 27V5a2 2 0 0 1 1.85-1.995L3 3zm0 2H3v22h26zm-6 2v18H5V7zm-2 2H7v14l3 .001a4.975 4.975 0 0 1-.992-2.721L9 20v-3h10v3a4.978 4.978 0 0 1-1 3.001L21 23zm-4 10h-6v1a3 3 0 0 0 2.65 2.98l.174.015L14 23a3 3 0 0 0 2.995-2.824L17 20zm9-8a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg></div></div></div>')
                }
                if (convival[i] === '토스트기') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>토스트기</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M20.929 2a3.929 3.929 0 0 1 3.929 3.929c0 .866-.286 1.705-.828 2.41l-.03.034V10a5 5 0 0 1 4.995 4.783L29 15v12a2 2 0 0 1-1.85 1.995L27 29h-1v1h-2v-1H8v1H6v-1H5a2 2 0 0 1-1.995-1.85L3 27V17H1v-2h2a5 5 0 0 1 4.783-4.995L8 10V8.38a3.932 3.932 0 0 1-.003-4.899l.143-.168.153-.162a3.929 3.929 0 0 1 2.556-1.145L11.07 2h9.858zM24 12H8a3 3 0 0 0-2.995 2.824L5 15v12h22V15a3 3 0 0 0-2.824-2.995L24 12zM8 23a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM20.929 4H11.07a1.929 1.929 0 0 0-1.364 3.293 1 1 0 0 1 .284.576L10 8v1.999h12V8a1 1 0 0 1 .122-.479l.066-.105.08-.097.12-.128a1.929 1.929 0 0 0-1.308-3.185L20.929 4z"></path></svg></div></div></div>')
                }
                if (convival[i] === '도로 주차(무료)') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>도로 주차(무료)</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M26 19a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm20.693-5l.42 1.119C29.253 15.036 30 16.426 30 18v9c0 1.103-.897 2-2 2h-2c-1.103 0-2-.897-2-2v-2H8v2c0 1.103-.897 2-2 2H4c-1.103 0-2-.897-2-2v-9c0-1.575.746-2.965 1.888-3.882L4.308 13H2v-2h3v.152l1.82-4.854A2.009 2.009 0 0 1 8.693 5h14.614c.829 0 1.58.521 1.873 1.297L27 11.151V11h3v2h-2.307zM6 25H4v2h2v-2zm22 0h-2v2h2v-2zm0-2v-5c0-1.654-1.346-3-3-3H7c-1.654 0-3 1.346-3 3v5h24zm-3-10h.557l-2.25-6H8.693l-2.25 6H25zm-15 7h12v-2H10v2z"></path></svg></div></div></div>')
                }
                if (convival[i] === '장기 숙박 가능') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>여행 가방 보관 가능</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M26 19a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm20.693-5l.42 1.119C29.253 15.036 30 16.426 30 18v9c0 1.103-.897 2-2 2h-2c-1.103 0-2-.897-2-2v-2H8v2c0 1.103-.897 2-2 2H4c-1.103 0-2-.897-2-2v-9c0-1.575.746-2.965 1.888-3.882L4.308 13H2v-2h3v.152l1.82-4.854A2.009 2.009 0 0 1 8.693 5h14.614c.829 0 1.58.521 1.873 1.297L27 11.151V11h3v2h-2.307zM6 25H4v2h2v-2zm22 0h-2v2h2v-2zm0-2v-5c0-1.654-1.346-3-3-3H7c-1.654 0-3 1.346-3 3v5h24zm-3-10h.557l-2.25-6H8.693l-2.25 6H25zm-15 7h12v-2H10v2z"></path></svg></div></div></div>')
                }
                if (convival[i] === '호스트가 게스트를 맞이함') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>호스트가 게스트를 맞이함</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="m30.7810143 17.3461852c.0404342.0673904.0782664.1363082.1134129.2066012.7673165 1.534633.3185851 3.3882121-1.0395248 4.4059545l-.1607232.1136567-11.7341112 7.8227408c-1.0482526.6988351-2.3186579.9743849-3.5564884.7780685l-.264658-.0493079-11.55797978-2.47671c-.86789794-.1859781-1.50252469-.9187915-1.57418356-1.7906095l-.00675826-.1649953v-5.1915842c0-1.0543618.81587779-1.9181651 1.85073766-1.9945143l.14926234-.0054857 16.2408214-.0001031c.6752139 0 1.1644696.3199718 1.4637178.809882l5.8635526-3.5168243c1.454208-.8725249 3.3403977-.4009775 4.2129225 1.0532306zm-3.0731562.6036906-.1107748.0580646-6.6288651 3.9785317c-.022896.1035632-.0502803.2069982-.0821668.30978-.4757982 1.5336698-1.8012965 2.6144677-3.6520013 2.6984776l-.2340501.0052703h-5v-2h5c.3878763 0 .7218082-.0672878 1.0015656-.1900993l-.0015656-1.8099007h-15v5.1915842l11.5579798 2.47671c.7259277.1555559 1.481239.0360049 2.1211397-.3310383l.1715482-.1062181 11.7341111-7.8227407c.6030673-.4020449.8369928-1.1661036.57899-1.829816l-.058196-.1312675-.0395443-.0720369c-.2607673-.4346121-.7812053-.617496-1.243887-.4692947zm-16.7078581-16.9498758c3.1924277 0 6.0161326 1.88636423 7.2894426 4.698673l.1275574.300327 7.497216.001 2.9999976 3-3 3h-3.5002136l-2.414 2.4142136-1.842-1.8412136-.0953975.1891854c-1.2766838 2.3955812-3.716673 4.0236911-6.5003165 4.2182204l-.2891554.0149826-.2731306.0046116c-4.418278 0-8-3.581722-8-8s3.581722-8 8-8zm0 2c-3.3137085 0-6 2.6862915-6 6s2.6862915 6 6 6c2.5886163 0 4.8546019-1.6541536 5.6764176-4.0501962l.0749846-.2341604.2120002-.7119233 1.4493209-.00521032 1.5872767 1.58649022 1.5857864-1.585h3.4982136l1.001-1-1.001-1.001-8.1196215.00094923-.2127222-.71473925c-.7506594-2.52218928-3.0792117-4.28520998-5.7516563-4.28520998zm-3 5c.55228475 0 1 .44771525 1 1s-.44771525 1-1 1-1-.44771525-1-1 .44771525-1 1-1z"></path></svg></div></div></div>')
                }
                if (convival[i] === '아름다운 전망') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>아름다운 전망</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M28 2a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2H4v15.499l.187-.007c.371-.033.72-.161 1.005-.372l.137-.111A3.975 3.975 0 0 1 8 18c.988 0 1.945.352 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.492A3.974 3.974 0 0 1 16 18c.988 0 1.945.351 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.491A3.975 3.975 0 0 1 23.999 18c.989 0 1.946.351 2.672 1.009.35.316.827.49 1.33.491l-.001 2-.228-.006a3.96 3.96 0 0 1-2.443-1.003A1.978 1.978 0 0 0 24 20c-.502 0-.978.175-1.328.491a3.977 3.977 0 0 1-2.67 1.009 3.977 3.977 0 0 1-2.672-1.009A1.978 1.978 0 0 0 16 20c-.503 0-.98.175-1.329.491a3.978 3.978 0 0 1-2.67 1.009 3.978 3.978 0 0 1-2.672-1.008A1.978 1.978 0 0 0 8 20c-.503 0-.98.175-1.33.491A3.976 3.976 0 0 1 4 21.5v2.999l.187-.007c.371-.033.72-.161 1.005-.372l.137-.111A3.975 3.975 0 0 1 8 23c.988 0 1.945.352 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.492A3.974 3.974 0 0 1 16 23c.988 0 1.945.351 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.491A3.975 3.975 0 0 1 23.999 23c.989 0 1.946.351 2.672 1.009.35.316.827.49 1.33.491l-.001 2-.228-.006a3.96 3.96 0 0 1-2.443-1.003A1.978 1.978 0 0 0 24 25c-.502 0-.978.175-1.328.491a3.977 3.977 0 0 1-2.67 1.009 3.977 3.977 0 0 1-2.672-1.009A1.978 1.978 0 0 0 16 25c-.503 0-.98.175-1.329.491a3.978 3.978 0 0 1-2.67 1.009 3.978 3.978 0 0 1-2.672-1.008A1.978 1.978 0 0 0 8 25c-.503 0-.98.175-1.33.491A3.976 3.976 0 0 1 4 26.5V28h24zm-6 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg></div></div></div>')
                }
                if (convival[i] === '반려동물 입실 가능') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>반려동물 입실 가능</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M13.693 13.934a4 4 0 0 1 5.283.595l.292.366 4.768 6.755a4 4 0 0 1 .596 3.342 4.004 4.004 0 0 1-4.496 2.913l-.403-.084-3.474-.932a1 1 0 0 0-.518 0l-3.474.932a4 4 0 0 1-2.941-.347l-.401-.249a4.004 4.004 0 0 1-1.19-5.207l.229-.368 4.768-6.755a4 4 0 0 1 .961-.96zm3.756 1.889a2 2 0 0 0-2.979.09l-.104.136-4.838 6.861a2 2 0 0 0 2.048 3.017l.173-.038 3.992-1.07a1 1 0 0 1 .518 0l3.964 1.063.143.034a2 2 0 0 0 2.132-2.963l-4.947-7.014zM27 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM5 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm22 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM5 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm6-10a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm10 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM11 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path></svg></div></div></div>');
                    $('#_1vjikx5').before('<div class="_1vjikx5"><div class="_1t2btyf"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M13.693 13.934a4 4 0 0 1 5.283.595l.292.366 4.768 6.755a4 4 0 0 1 .596 3.342 4.004 4.004 0 0 1-4.496 2.913l-.403-.084-3.474-.932a1 1 0 0 0-.518 0l-3.474.932a4 4 0 0 1-2.941-.347l-.401-.249a4.004 4.004 0 0 1-1.19-5.207l.229-.368 4.768-6.755a4 4 0 0 1 .961-.96zm3.756 1.889a2 2 0 0 0-2.979.09l-.104.136-4.838 6.861a2 2 0 0 0 2.048 3.017l.173-.038 3.992-1.07a1 1 0 0 1 .518 0l3.964 1.063.143.034a2 2 0 0 0 2.132-2.963l-4.947-7.014zM27 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM5 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm22 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM5 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm6-10a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm10 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM11 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path></svg></div><div class="_1mqc21n"><div class="_1qsawv5">반려동물 환영</div><div class="_1jlr81g">반려동물 동반이 허용되는 숙소입니다.</div></div></div>')
                }
                if (convival[i] === '흡연 가능') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>흡연 가능</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M30 19v8h-2v-8zm-4 0v8H3a2 2 0 0 1-1.995-1.85L1 25v-4a2 2 0 0 1 1.85-1.995L3 19zm-2 2H3v4h21zM21 3a4 4 0 0 1 3.356 6.178l-.1.145.137.041a8.004 8.004 0 0 1 5.603 7.387L30 17h-2a6 6 0 0 0-5.775-5.996L22 11h-1V9a2 2 0 0 0 .15-3.995L21 5zm-4 0v2a4 4 0 0 0-.2 7.995L17 13h5a4 4 0 0 1 3.995 3.8L26 17h-2a2 2 0 0 0-1.85-1.995L22 15h-5a6 6 0 0 1-.225-11.996z"></path></svg></div></div></div>')
                }
                if (convival[i] === 'Tv') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>Tv</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M9 29v-2h2v-2H6a5 5 0 0 1-4.995-4.783L1 20V8a5 5 0 0 1 4.783-4.995L6 3h20a5 5 0 0 1 4.995 4.783L31 8v12a5 5 0 0 1-4.783 4.995L26 25h-5v2h2v2zm10-4h-6v2h6zm7-20H6a3 3 0 0 0-2.995 2.824L3 8v12a3 3 0 0 0 2.824 2.995L6 23h20a3 3 0 0 0 2.995-2.824L29 20V8a3 3 0 0 0-2.824-2.995z"></path></svg></div></div></div>')
                }
                if (convival[i] === '화재경보기') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>화재경보기</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M9 29v-2h2v-2H6a5 5 0 0 1-4.995-4.783L1 20V8a5 5 0 0 1 4.783-4.995L6 3h20a5 5 0 0 1 4.995 4.783L31 8v12a5 5 0 0 1-4.783 4.995L26 25h-5v2h2v2zm10-4h-6v2h6zm7-20H6a3 3 0 0 0-2.995 2.824L3 8v12a3 3 0 0 0 2.824 2.995L6 23h20a3 3 0 0 0 2.995-2.824L29 20V8a3 3 0 0 0-2.824-2.995z"></path></svg></div></div></div>')
                }
                if (convival[i] === '일산화탄소 경보기') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>일산화탄소 경보기</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M25 2a5 5 0 0 1 4.995 4.783L30 7v18a5 5 0 0 1-4.783 4.995L25 30H7a5 5 0 0 1-4.995-4.783L2 25V7a5 5 0 0 1 4.783-4.995L7 2zm0 2H7a3 3 0 0 0-2.995 2.824L4 7v18a3 3 0 0 0 2.824 2.995L7 28h18a3 3 0 0 0 2.995-2.824L28 25V7a3 3 0 0 0-2.824-2.995zM11.1 17a5.006 5.006 0 0 0 3.9 3.9v2.03A7.005 7.005 0 0 1 9.071 17zm9.8 0l2.029.001a7.005 7.005 0 0 1-5.928 5.928v-2.03A5.006 5.006 0 0 0 20.9 17zM16 13a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm1.001-5.929A7.005 7.005 0 0 1 22.929 15H20.9A5.006 5.006 0 0 0 17 11.1zm-2.001 0v2.03A5.006 5.006 0 0 0 11.1 15H9.07A7.005 7.005 0 0 1 15 9.07zM23 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg></div></div></div>')
                }
                if (convival[i] === '소화기') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>소화기</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M7 28H5V15c0-4.997 3.356-9.304 8.061-10.603A3 3 0 0 1 17.69 2.52l2.66-2.28 1.302 1.52L19.036 4H23v2h-4.17A3.008 3.008 0 0 1 17 7.83l.001.242a7.007 7.007 0 0 1 5.982 6.446l.013.24L23 15v15a2 2 0 0 1-1.85 1.995L21 32H11a2 2 0 0 1-1.995-1.85L9 30v-6H7zm9-18c-2.617 0-4.775 2.014-4.983 4.573l-.013.22L11 15v15h10V15.018l-.003-.206A5 5 0 0 0 16 10zm-2.654-3.6a9.002 9.002 0 0 0-6.342 8.327L7 15v7h2v-7.018l.005-.244A7.001 7.001 0 0 1 15 8.071v-.242a3.01 3.01 0 0 1-1.654-1.43zM16 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg></div></div></div>')
                }
                if (convival[i] === '구급상자') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>구급상자</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M26 3a5 5 0 0 1 4.995 4.783L31 8v16a5 5 0 0 1-4.783 4.995L26 29H6a5 5 0 0 1-4.995-4.783L1 24V8a5 5 0 0 1 4.783-4.995L6 3zm0 2H6a3 3 0 0 0-2.995 2.824L3 8v16a3 3 0 0 0 2.824 2.995L6 27h20a3 3 0 0 0 2.995-2.824L29 24V8a3 3 0 0 0-2.824-2.995zm-7 4v4h4v6h-4v4h-6v-4.001L9 19v-6l4-.001V9zm-2.001 2h-2L15 14.999h-4.001V17L15 16.998 14.999 21h2L17 17h3.999v-2H17z"></path></svg></div></div></div>')
                }
                if (convival[i] === '숙소 내 보안 카메라') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>숙소 내 보안 카메라</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M23 3a2 2 0 0 1 1.995 1.85L25 5v1.522l5-1.999v11.954l-5-2V16a2 2 0 0 1-1.85 1.995L23 18l-6.1.001a5.005 5.005 0 0 1-3.984 3.915 5.002 5.002 0 0 1-4.7 4.08L8 26H4v4H2V20h2v4h4a3.001 3.001 0 0 0 2.872-2.13A5.004 5.004 0 0 1 7.1 18.002L4 18a2 2 0 0 1-1.995-1.85L2 16V5a2 2 0 0 1 1.85-1.995L4 3zM12 14a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm11-9H4v11h3.1a5.002 5.002 0 0 1 9.8 0H23zm5 2.476l-3 1.2v3.647l3 1.2zM7 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg></div></div></div>')
                }
                if (convival[i] === '주방') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>주방</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M26 1a5 5 0 0 1 5 5c0 6.389-1.592 13.187-4 14.693V31h-2V20.694c-2.364-1.478-3.942-8.062-3.998-14.349L21 6l.005-.217A5 5 0 0 1 26 1zm-9 0v18.118c2.317.557 4 3.01 4 5.882 0 3.27-2.183 6-5 6s-5-2.73-5-6c0-2.872 1.683-5.326 4-5.882V1zM2 1h1c4.47 0 6.934 6.365 6.999 18.505L10 21H3.999L4 31H2zm14 20c-1.602 0-3 1.748-3 4s1.398 4 3 4 3-1.748 3-4-1.398-4-3-4zM4 3.239V19h3.995l-.017-.964-.027-.949C7.673 9.157 6.235 4.623 4.224 3.364l-.12-.07zm19.005 2.585L23 6l.002.31c.045 4.321 1.031 9.133 1.999 11.39V3.17a3.002 3.002 0 0 0-1.996 2.654zm3.996-2.653v14.526C27.99 15.387 29 10.4 29 6a3.001 3.001 0 0 0-2-2.829z"></path></svg></div></div></div>')
                }
                if (convival[i] === '냉장고') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>냉장고</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M25 1a2 2 0 0 1 1.995 1.85L27 3v26a2 2 0 0 1-1.85 1.995L25 31H7a2 2 0 0 1-1.995-1.85L5 29V3a2 2 0 0 1 1.85-1.995L7 1zm0 10H7v18h18zm-15 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM25 3H7v6h18zM10 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg></div></div></div>')
                }
                if (convival[i] === '기본 조리도구') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>기본 조리도구</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M26 1a5 5 0 0 1 5 5c0 6.389-1.592 13.187-4 14.693V31h-2V20.694c-2.364-1.478-3.942-8.062-3.998-14.349L21 6l.005-.217A5 5 0 0 1 26 1zm-9 0v18.118c2.317.557 4 3.01 4 5.882 0 3.27-2.183 6-5 6s-5-2.73-5-6c0-2.872 1.683-5.326 4-5.882V1zM2 1h1c4.47 0 6.934 6.365 6.999 18.505L10 21H3.999L4 31H2zm14 20c-1.602 0-3 1.748-3 4s1.398 4 3 4 3-1.748 3-4-1.398-4-3-4zM4 3.239V19h3.995l-.017-.964-.027-.949C7.673 9.157 6.235 4.623 4.224 3.364l-.12-.07zm19.005 2.585L23 6l.002.31c.045 4.321 1.031 9.133 1.999 11.39V3.17a3.002 3.002 0 0 0-1.996 2.654zm3.996-2.653v14.526C27.99 15.387 29 10.4 29 6a3.001 3.001 0 0 0-2-2.829z"></path></svg></div></div></div>')
                }
                if (convival[i] === '세탁기') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>세탁기</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="m26.2875958 2c1.4943151.00218728 2.7591731 1.1037772 2.9663548 2.58389031.4975641 3.56108628.7460494 7.36641109.7460494 11.41610969s-.2484853 7.8550234-.7460839 11.4163568c-.1988613 1.4206714-1.3725089 2.4927235-2.7894512 2.5781497l-.1783321.0054935h-20.57372863c-1.49431506-.0021873-2.7591731-1.1037772-2.96635481-2.5838903-.49756403-3.5610863-.74604936-7.3664111-.74604936-11.4161097s.24848533-7.85502341.74608392-11.41635683c.19886126-1.42067133 1.37250888-2.49272345 2.78945123-2.57814972l.17833204-.00549345zm-.001463 1.99999893h-20.57080259c-.49804876.00072866-.919536.36781024-.98852197.86064804-.48434104 3.46644876-.72680824 7.17961153-.72680824 11.13935193 0 3.9597426.2424672 7.6729054.72677368 11.139107.06371126.4551553.42774918.8029468.87395616.8543314l.11313735.0065616h20.57080261c.4980488-.0007265.919536-.3678081.988522-.8606459.484341-3.4664487.7268082-7.1796115.7268082-11.1393541 0-3.9597404-.2424672-7.67290317-.7267737-11.13910479-.0690205-.49308494-.4905077-.86016652-.9870935-.86089518zm-10.2861328 3.00000107c4.9705627 0 9 4.0294373 9 9s-4.0294373 9-9 9-9-4.0294373-9-9 4.0294373-9 9-9zm-5.8414878 7.4999981c-.34108957-.0001654-.67972606.0242467-1.01356612.0725599-.09481995.4612974-.14494608.9385159-.14494608 1.4274401 0 3.8659951 3.1340068 7 7 7 2.7319686 0 5.0983993-1.5650514 6.2516347-3.8475004-.2599201.0223771-.5214932.0336332-.7841237.0335052-2.2620527-.0011072-4.4437323-.8444711-6.1250979-2.4078908l-.2367463-.2282308c-1.3302626-1.3311149-3.1018689-2.0498832-4.9471546-2.0498832zm5.8414878-5.4999981c-2.5924559 0-4.8557544 1.4092904-6.06558041 3.5035562l.22458041-.0035562c2.2624645 0 4.4444831.8435532 6.1243595 2.4073778l.2365208.22829c1.3314314 1.3305789 3.1034818 2.049432 4.9486075 2.0503351.4925113.0002394.9799732-.0508503 1.4553384-.1512223.0503426-.3388527.0761738-.6838001.0761738-1.0347806 0-3.8659932-3.1340068-7-7-7zm-9-3c.55228475 0 1 .44771525 1 1s-.44771525 1-1 1-1-.44771525-1-1 .44771525-1 1-1z"></path></svg></div></div></div>')
                }
                if (convival[i] === '건조기') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>건조기</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="m26.2875958 2c1.4943151.00218728 2.7591731 1.1037772 2.9663548 2.58389031.4975641 3.56108628.7460494 7.36641109.7460494 11.41610969s-.2484853 7.8550234-.7460839 11.4163568c-.1988613 1.4206714-1.3725089 2.4927235-2.7894512 2.5781497l-.1783321.0054935h-20.57372863c-1.49431506-.0021873-2.7591731-1.1037772-2.96635481-2.5838903-.49756403-3.5610863-.74604936-7.3664111-.74604936-11.4161097s.24848533-7.85502341.74608392-11.41635683c.19886126-1.42067133 1.37250888-2.49272345 2.78945123-2.57814972l.17833204-.00549345zm-.001463 1.99999893h-20.57080259c-.49804876.00072866-.919536.36781024-.98852197.86064804-.48434104 3.46644876-.72680824 7.17961153-.72680824 11.13935193 0 3.9597426.2424672 7.6729054.72677368 11.139107.06371126.4551553.42774918.8029468.87395616.8543314l.11313735.0065616h20.57080261c.4980488-.0007265.919536-.3678081.988522-.8606459.484341-3.4664487.7268082-7.1796115.7268082-11.1393541 0-3.9597404-.2424672-7.67290317-.7267737-11.13910479-.0637112-.45515533-.4277492-.80294685-.8739561-.85433312zm-10.2861328 3.00000107c4.9705627 0 9 4.0294373 9 9s-4.0294373 9-9 9-9-4.0294373-9-9 4.0294373-9 9-9zm0 2c-3.8659932 0-7 3.1340068-7 7s3.1340068 7 7 7 7-3.1340068 7-7-3.1340068-7-7-7zm-4.7951346 5.5788106c1.3597551.2032355 2.6368491.8036363 3.6750675 1.7549063l.4624802.4443952c1.3026453 1.2112662 2.9056013 1.990323 4.6135777 2.2803419-.5217984.6740368-1.2132426 1.2118231-2.0102649 1.5488326-1.57815-.5325014-3.0356786-1.4253778-4.2547254-2.6436447-.7379136-.7383863-1.6623492-1.2119187-2.6564208-1.3872052-.0233335-.1876103-.0345797-.3807102-.0345797-.5764367 0-.4937113.071557-.9707096.2048654-1.4211894zm3.0802908-3.2769928c1.3461758.5441062 2.5883533 1.3583726 3.6484848 2.4191837.8218211.8212949 1.8740777 1.3152275 2.9951909 1.4359211.0468951.2736529.0711681.5555305.0711681.8430774 0 .3991428-.0467695.787362-.1351271 1.1594763-1.5240964-.1309275-2.9679331-.7542169-4.1190706-1.8077277l-.4624428-.4443708c-1.1628727-1.0825373-2.5663679-1.8199267-4.0706028-2.1712732.5507846-.6396449 1.262657-1.1386519 2.0723995-1.4342868zm-7.2851562-5.3018178c.55228475 0 1 .44771525 1 1s-.44771525 1-1 1-1-.44771525-1-1 .44771525-1 1-1z"></path></svg></div></div></div>')
                }
                if (convival[i] === '넷플릭스') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>넷플릭스</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M9 29v-2h2v-2H6a5 5 0 0 1-4.995-4.783L1 20V8a5 5 0 0 1 4.783-4.995L6 3h20a5 5 0 0 1 4.995 4.783L31 8v12a5 5 0 0 1-4.783 4.995L26 25h-5v2h2v2zm10-4h-6v2h6zm7-20H6a3 3 0 0 0-2.995 2.824L3 8v12a3 3 0 0 0 2.824 2.995L6 23h20a3 3 0 0 0 2.995-2.824L29 20V8a3 3 0 0 0-2.824-2.995z"></path></svg></div></div></div>')
                }
                if (convival[i] === '게스트 전용 입구') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>게스트 전용 입구</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M25 1a2 2 0 0 1 1.995 1.85L27 3l-.001 26H29v2H3v-2h1.999L5 3a2 2 0 0 1 1.85-1.995L7 1zm0 2H7l-.001 26h18zm-3 12a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg></div></div></div>')
                }
                if (convival[i] === '전용 파티오 또는 발코니') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>전용 파티오 또는 발코니</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M23 1a2 2 0 0 1 1.995 1.85L25 3v16h4v2h-2v8h2v2H3v-2h2v-8H3v-2h4V3a2 2 0 0 1 1.85-1.995L9 1zM9 21H7v8h2zm4 0h-2v8h2zm4 0h-2v8h2zm4 0h-2v8h2zm4 0h-2v8h2zm-10-8H9v6h6zm8 0h-6v6h6zM15 3H9v8h6zm8 0h-6v8h6z"></path></svg></div></div></div>')
                }
                if (convival[i] === '뒷마당') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>뒷마당</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M16 1a5 5 0 0 1 5 5 5 5 0 0 1 0 10 5.002 5.002 0 0 1-4 4.9v4.287C18.652 23.224 21.153 22 23.95 22a8.94 8.94 0 0 1 3.737.814l.313.15.002 2.328A6.963 6.963 0 0 0 23.95 24c-3.542 0-6.453 2.489-6.93 5.869l-.02.15-.006.098a1 1 0 0 1-.876.876L16 31a1 1 0 0 1-.974-.77l-.02-.124C14.635 26.623 11.615 24 7.972 24a6.963 6.963 0 0 0-3.97 1.234l.002-2.314c1.218-.6 2.57-.92 3.968-.92 2.818 0 5.358 1.24 7.028 3.224V20.9a5.002 5.002 0 0 1-3.995-4.683L11 16l-.217-.005a5 5 0 0 1 0-9.99L11 6l.005-.217A5 5 0 0 1 16 1zm2.864 14.1c-.811.567-1.799.9-2.864.9s-2.053-.333-2.864-.9l-.062.232a3 3 0 1 0 5.851.001zM11 8a3 3 0 1 0 .667 5.926l.234-.062A4.977 4.977 0 0 1 11 11c0-1.065.333-2.053.9-2.864l-.232-.062A3.013 3.013 0 0 0 11 8zm10 0c-.228 0-.45.025-.667.074l-.234.062C20.667 8.947 21 9.935 21 11a4.977 4.977 0 0 1-.9 2.864l.232.062A3 3 0 1 0 21 8zm-5 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-5a3 3 0 0 0-2.926 3.667l.062.234C13.947 6.333 14.935 6 16 6s2.053.333 2.864.9l.062-.232A3 3 0 0 0 16 3z"></path></svg></div></div></div>')
                }
                if (convival[i] === '건물 내 무료 주차 ') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>건물 내 무료 주차</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M26 19a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm20.693-5l.42 1.119C29.253 15.036 30 16.426 30 18v9c0 1.103-.897 2-2 2h-2c-1.103 0-2-.897-2-2v-2H8v2c0 1.103-.897 2-2 2H4c-1.103 0-2-.897-2-2v-9c0-1.575.746-2.965 1.888-3.882L4.308 13H2v-2h3v.152l1.82-4.854A2.009 2.009 0 0 1 8.693 5h14.614c.829 0 1.58.521 1.873 1.297L27 11.151V11h3v2h-2.307zM6 25H4v2h2v-2zm22 0h-2v2h2v-2zm0-2v-5c0-1.654-1.346-3-3-3H7c-1.654 0-3 1.346-3 3v5h24zm-3-10h.557l-2.25-6H8.693l-2.25 6H25zm-15 7h12v-2H10v2z"></path></svg></div></div></div>')
                }
                if (convival[i] === '전용 수영장') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>전용 수영장</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M24 26c.988 0 1.945.351 2.671 1.009.306.276.71.445 1.142.483L28 27.5v2l-.228-.006a3.96 3.96 0 0 1-2.443-1.003A1.978 1.978 0 0 0 24 28c-.502 0-.978.175-1.328.491a3.977 3.977 0 0 1-2.67 1.009 3.977 3.977 0 0 1-2.672-1.009A1.978 1.978 0 0 0 16 28c-.503 0-.98.175-1.329.491a3.978 3.978 0 0 1-2.67 1.009 3.978 3.978 0 0 1-2.672-1.008A1.978 1.978 0 0 0 8 28c-.503 0-.98.175-1.33.491a3.96 3.96 0 0 1-2.442 1.003L4 29.5v-2l.187-.008a1.953 1.953 0 0 0 1.142-.483A3.975 3.975 0 0 1 8 26c.988 0 1.945.352 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.492A3.974 3.974 0 0 1 16 26c.988 0 1.945.351 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.491A3.975 3.975 0 0 1 23.999 26zm0-5c.988 0 1.945.351 2.671 1.009.306.276.71.445 1.142.483L28 22.5v2l-.228-.006a3.96 3.96 0 0 1-2.443-1.003A1.978 1.978 0 0 0 24 23c-.502 0-.978.175-1.328.491a3.977 3.977 0 0 1-2.67 1.009 3.977 3.977 0 0 1-2.672-1.009A1.978 1.978 0 0 0 16 23c-.503 0-.98.175-1.329.491a3.978 3.978 0 0 1-2.67 1.009 3.978 3.978 0 0 1-2.672-1.008A1.978 1.978 0 0 0 8 23c-.503 0-.98.175-1.33.491a3.96 3.96 0 0 1-2.442 1.003L4 24.5v-2l.187-.008a1.953 1.953 0 0 0 1.142-.483A3.975 3.975 0 0 1 8 21c.988 0 1.945.352 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.492A3.974 3.974 0 0 1 16 21c.988 0 1.945.351 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.491A3.975 3.975 0 0 1 23.999 21zM20 3a4 4 0 0 1 3.995 3.8L24 7v2h4v2h-4v5c.912 0 1.798.3 2.5.862l.171.147c.306.276.71.445 1.142.483L28 17.5v2l-.228-.006a3.96 3.96 0 0 1-2.443-1.003A1.978 1.978 0 0 0 24 18c-.502 0-.978.175-1.328.491a3.977 3.977 0 0 1-2.67 1.009 3.977 3.977 0 0 1-2.672-1.009A1.978 1.978 0 0 0 16 18c-.503 0-.98.175-1.329.491a3.978 3.978 0 0 1-2.67 1.009 3.978 3.978 0 0 1-2.672-1.008A1.978 1.978 0 0 0 8 18c-.503 0-.98.175-1.33.491a3.96 3.96 0 0 1-2.442 1.003L4 19.5v-2l.187-.008a1.953 1.953 0 0 0 1.142-.483A3.975 3.975 0 0 1 8 16c.988 0 1.945.352 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.492a3.956 3.956 0 0 1 2.444-1.002L16 16v-5H4V9h12V7a2 2 0 0 0-3.995-.15L12 7h-2a4 4 0 0 1 7-2.645A3.985 3.985 0 0 1 20 3zm-2 13.523c.16.091.313.194.459.307l.212.179c.35.316.826.49 1.33.491.439 0 .86-.134 1.191-.38l.137-.111c.206-.187.431-.35.67-.486V11h-4zM20 5a2 2 0 0 0-1.995 1.85L18 7v2h4V7a2 2 0 0 0-2-2z"></path></svg></div></div></div>')
                }
                if (convival[i] === '난방') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>난방</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M16 0a5 5 0 0 1 4.995 4.783L21 5l.001 12.756.26.217a7.984 7.984 0 0 1 2.717 5.43l.017.304L24 24a8 8 0 1 1-13.251-6.036l.25-.209L11 5A5 5 0 0 1 15.563.019l.22-.014zm0 2a3 3 0 0 0-2.995 2.824L13 5v13.777l-.428.298a6 6 0 1 0 7.062.15l-.205-.15-.428-.298L19 11h-4V9h4V7h-4V5h4a3 3 0 0 0-3-3zm1 11v7.126A4.002 4.002 0 0 1 16 28a4 4 0 0 1-1-7.874V13zm-1 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path></svg></div></div></div>')
                }
                if (convival[i] === '온수') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>온수</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M16 32c6.627 0 12-5.373 12-12 0-6.218-3.671-12.51-10.924-18.889L16 .18l-1.076.932C7.671 7.491 4 13.782 4 20c0 6.577 5.397 12 12 12zm0-2c-5.496 0-10-4.525-10-10 0-5.327 3.115-10.882 9.424-16.65l.407-.37.169-.149.576.518c6.043 5.526 9.156 10.855 9.407 15.977l.013.34L26 20c0 5.523-4.477 10-10 10zm-3.452-5.092a8.954 8.954 0 0 1 2.127-4.932l.232-.26.445-.462a6.973 6.973 0 0 0 1.827-4.416l.007-.306-.006-.307-.007-.11a6.03 6.03 0 0 0-2.009-.057 4.979 4.979 0 0 1-1.443 4.008 10.951 10.951 0 0 0-2.87 5.016 6.034 6.034 0 0 0 1.697 1.826zM16 26l.253-.005.25-.016-.003-.137c0-1.32.512-2.582 1.464-3.533a10.981 10.981 0 0 0 3.017-5.656 6.026 6.026 0 0 0-1.803-1.743 8.971 8.971 0 0 1-2.172 5.493l-.228.255-.444.462a6.96 6.96 0 0 0-1.827 4.415l-.006.276c.48.123.982.189 1.499.189z"></path></svg></div></div></div>')
                }
                if (convival[i] === '아기침대') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>아기침대</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M3 3v4h26V3h2v18a5.002 5.002 0 0 1-3.999 4.9L27 30h-2v-4H7v4H5v-4.1a5.002 5.002 0 0 1-3.995-4.683L1 21V3zm6 6H7v15h2zm4 0h-2v15h2zm4 0h-2v15h2zm4 0h-2v15h2zm4 0h-2v15h2zM5 9H3v12c0 1.306.835 2.418 2 2.83zm24 0h-2v14.829a3.002 3.002 0 0 0 1.995-2.653L29 21z"></path></svg></div></div></div>')
                }
                if (convival[i] === '업무 전용공간') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>업무 전용공간</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M26 2a1 1 0 0 1 .922.612l.04.113 2 7a1 1 0 0 1-.847 1.269L28 11h-3v5h6v2h-2v13h-2l.001-2.536a3.976 3.976 0 0 1-1.73.527L25 29H7a3.982 3.982 0 0 1-2-.535V31H3V18H1v-2h5v-4a1 1 0 0 1 .883-.993L7 11h.238L6.086 8.406l1.828-.812L9.427 11H12a1 1 0 0 1 .993.883L13 12v4h10v-5h-3a1 1 0 0 1-.987-1.162l.025-.113 2-7a1 1 0 0 1 .842-.718L22 2h4zm1 16H5v7a2 2 0 0 0 1.697 1.977l.154.018L7 27h18a2 2 0 0 0 1.995-1.85L27 25v-7zm-16-5H8v3h3v-3zm14.245-9h-2.491l-1.429 5h5.349l-1.429-5z"></path></svg></div></div></div>');
                    $('#_1vjikx5').before('<div class="_1vjikx5"><div class="_1t2btyf"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M26 2a1 1 0 0 1 .922.612l.04.113 2 7a1 1 0 0 1-.847 1.269L28 11h-3v5h6v2h-2v13h-2l.001-2.536a3.976 3.976 0 0 1-1.73.527L25 29H7a3.982 3.982 0 0 1-2-.535V31H3V18H1v-2h5v-4a1 1 0 0 1 .883-.993L7 11h.238L6.086 8.406l1.828-.812L9.427 11H12a1 1 0 0 1 .993.883L13 12v4h10v-5h-3a1 1 0 0 1-.987-1.162l.025-.113 2-7a1 1 0 0 1 .842-.718L22 2h4zm1 16H5v7a2 2 0 0 0 1.697 1.977l.154.018L7 27h18a2 2 0 0 0 1.995-1.85L27 25v-7zm-16-5H8v3h3v-3zm14.245-9h-2.491l-1.429 5h5.349l-1.429-5z"></path></svg></div><div class="_1mqc21n"><div class="_1qsawv5">업무 전용공간</div><div class="_1jlr81g">와이파이를 갖추고 업무에 적합한 공용 공간입니다.</div></div></div>')
                }
                if (convival[i] === '전용 온수 욕조') {
                    $('#conviDiv').append('<div class="_19xnuo97"><div class="iikjzje i10xc1ab dir dir-ltr"><div>전용 온수 욕조</div><div class="i4wvyiy i1fpqhzs dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M9.5 2a4.5 4.5 0 0 1 3.527 7.295c.609.215 1.173.55 1.66.988l.191.182L17.414 13H31v2h-2v14a2 2 0 0 1-1.85 1.995L27 31H5a2 2 0 0 1-1.995-1.85L3 29V15H1v-2h2.1a5.009 5.009 0 0 1 2.955-3.608A4.5 4.5 0 0 1 9.5 2zm7.085 13H5v14h22V15h-7.586l3.293 3.294-1.414 1.414zM9.5 4a2.5 2.5 0 0 0-1 4.792V11H8a3.001 3.001 0 0 0-2.83 2h9.415l-1.121-1.121a3 3 0 0 0-1.923-.872L11.343 11H10.5V8.792A2.5 2.5 0 0 0 9.5 4zm15.486-3a6.957 6.957 0 0 1-1.803 4.07l-.445.463A8.971 8.971 0 0 0 20.354 11H18.35a10.975 10.975 0 0 1 3.202-7.118A4.961 4.961 0 0 0 22.974 1zm2.007 0h2.004a10.96 10.96 0 0 1-3.202 7.124A4.974 4.974 0 0 0 24.373 11h-2.012a6.97 6.97 0 0 1 1.804-4.064l.444-.462A8.958 8.958 0 0 0 26.993.999z"></path></svg></div></div></div>')
                }
            }
            if (roomView
                .data
                .lodgingRulesApiResponse
                .rulesSmoking === 'N') {
                $('#rulesDiv').append('<div class="i1303y2k dir dir-ltr"><div aria-hidden="true" class="iv1oy2i dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" style="display: block; height: 16px; width: 16px; fill: currentcolor;"><path d="M24.242 19H27v2.758L24.242 19zM23 15c1.103 0 2 .897 2 2h2c0-2.206-1.794-4-4-4h-4.758l2 2H23zm6 8.758l2 2V19h-2v4.758zM18 5V3c-2.636 0-4.875 1.71-5.679 4.079l1.701 1.701C14.14 6.678 15.87 5 18 5zM4 19c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h19.758l-8-8H4zm25-2h2c0-3.629-2.429-6.701-5.746-7.677A3.97 3.97 0 0 0 26 7c0-2.206-1.794-4-4-4v2c1.103 0 2 .897 2 2s-.897 2-2 2v2h1c3.309 0 6 2.691 6 6zM3.293 3.707l26 26 1.414-1.414-26-26-1.414 1.414z"></path></svg></div><span>흡연 금지</span></div>')
            }
            if (roomView
                .data
                .lodgingRulesApiResponse
                .rulesPet === 'N') {
                $('#rulesDiv').append('<div class="i1303y2k dir dir-ltr"><div aria-hidden="true" class="iv1oy2i dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" style="display: block; height: 16px; width: 16px; fill: currentcolor;"><path d="M3.707 2.293l26 26-1.414 1.414-26-26 1.414-1.414zm8.164 13.821l11.149 11.15a3.993 3.993 0 0 1-3.053.612l-.234-.055L16 26.82l-3.733 1.001a4 4 0 0 1-2.941-.347l-.204-.118-.197-.131a4 4 0 0 1-1.08-5.398l.119-.177 3.907-5.536zM27 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM5 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm16-8a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM11 4a4 4 0 0 1 3.381 6.138l-5.52-5.519A3.981 3.981 0 0 1 11 4z"></path></svg></div><span>반려동물 동반 불가</span></div>')
            }
            if (roomView
                .data
                .lodgingRulesApiResponse
                .rulesEvent === 'N') {
                $('#rulesDiv').append('<div class="i1303y2k dir dir-ltr"><div aria-hidden="true" class="iv1oy2i dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" style="display: block; height: 16px; width: 16px; fill: currentcolor;"><path d="M5.12 9.363l13.882 13.88c-.494.349-1.01.694-1.549 1.035L19.65 27.2a1.125 1.125 0 0 1-.433 1.7l-.111.043-.157.039-.04.006-.158.013H17v3h-2v-3h-1.75a1.125 1.125 0 0 1-1.117-1.264l.025-.131.067-.189.021-.045.103-.17 2.14-2.862C8.212 20.918 5 16.457 5 11c0-.556.041-1.103.12-1.637zm-1.413-7.07l26 26-1.414 1.414-26-26 1.414-1.414zM16 0c5.909 0 11 5.275 11 11 0 2.915-1.167 5.676-3.472 8.286L7.853 3.609A10.972 10.972 0 0 1 16 0zm6 7a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path></svg></div><span>파티나 이벤트 금지</span></div>')
            }
            if (roomView
                .data
                .lodgingRulesApiResponse
                .rulesInfant === 'N') {
                $('#rulesDiv').append('<div class="i1303y2k dir dir-ltr"><div aria-hidden="true" class="iv1oy2i dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" style="display: block; height: 16px; width: 16px; fill: currentcolor;"><path d="M19.862 24.105l1.535 1.536a2 2 0 0 0 2.327 2.327l1.55 1.548A4 4 0 0 1 19.365 26a3.913 3.913 0 0 1 .444-1.8l.052-.095zM11.757 16l8 8H10.81c.344.59.555 1.268.555 2a4 4 0 0 1-8 0c0-1.545.885-2.87 2.167-3.536.025-.039.05-.078.078-.116l.048-.055L9.95 18H8.364a3 3 0 0 0-1.976.743l-.145.136-3.829 3.829L1 21.294l3.829-3.83A5 5 0 0 1 8.1 16.008L8.364 16h3.393zM3.979 2.565l25.456 25.456-1.414 1.414L2.565 3.979l1.414-1.414zM7.365 24a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm23-22v2h-2.343a3 3 0 0 0-1.977.743l-.144.136-.536.535V19c0 .63-.122 1.23-.34 1.782l-8.929-8.929.06-.06-.184-.064-2.365-2.363A4 4 0 0 1 17.365 4a3.983 3.983 0 0 1 3.728 2.6l.066.192.499-.5.272-.27 2.556-2.558a5 5 0 0 1 3.271-1.457L28.022 2h2.343z"></path></svg></div><span>어린이와 유아에게 적합하지 않음</span></div>')
            }

            $('#FMP-target').attr("src",roomView.data.lodgingPicturesApiResponse.lodgingPicurl +'/' +roomView.data.lodgingPicturesApiResponse.lodgingPic)
            $('#FMP-target2').attr("src",roomView.data.lodgingPicturesApiResponse.lodgingPicurl2 +'/' +roomView.data.lodgingPicturesApiResponse.lodgingPic2)
            $('#FMP-target3').attr("src",roomView.data.lodgingPicturesApiResponse.lodgingPicurl3 +'/' +roomView.data.lodgingPicturesApiResponse.lodgingPic3)
            $('#FMP-target4').attr("src",roomView.data.lodgingPicturesApiResponse.lodgingPicurl4 +'/' +roomView.data.lodgingPicturesApiResponse.lodgingPic4)
            $('#FMP-target5').attr("src",roomView.data.lodgingPicturesApiResponse.lodgingPicurl5 +'/' +roomView.data.lodgingPicturesApiResponse.lodgingPic5)

            let text
            switch(roomView.data.lodgingPolicyApiResponse.policyStanard) {
                case '유연':
                    text = '체크인 1일 전까지 취소 시 전액 환불'
                    break

                case '일반':
                    text = '체크인 5일 전까지 취소 시 전액 환불'
                    break

                case '비교적 엄격':
                    text = '체크인 30일 전까지 취소하면 전액 환불됩니다. 체크인까지 남은 기간이 30일 미만인 시점에\n' +
                        '예약할 경우, 예약 후 48시간 이내에 취소하고 체크인까지 14일 이상이 남았다면 전액\n' +
                        '환불되며, 그 후에는 체크인 7일 전까지 취소하면 예약금의 50%가 환불됩니다. 그 후에는\n' +
                        '환불되지 않습니다.'
                    break

                case '엄격':
                    text = '예약 후 48시간 이내에 취소하고 체크인 14일 전인 경우에 요금의 전액이 환불됩니다. 체크인\n' +
                        '7일 전에 취소할 경우 요금의 50%가 환불됩니다. 체크인까지 7일이 남지 않은 시점에 취소할\n' +
                        '경우 환불되지 않습니다.\n'
                    break
                default:
                    text = '예약 후 환불이 불가능 합니다.'
                    break
            }
            $('#backdate').text(text)
            $('#policyStanard').text(text)
            $('#hostExplanlong').text('호스트 소개aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')

            //사이드바 날짜 출럭
            const date = new Date();
            const nextdate = toStringByFormatting(new Date().addDays(1));
            const year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();
            $('#ckeckInDate').text(year+'. '+month+'. '+day+'.')
            $('#ckeckOutDate').text(nextdate.substring(0, 4)+'. '+nextdate.substring(5, 7)+'. '+nextdate.substring(8, 10)+'.')
            $('.checkIn-book_it').val(year+'. '+month+'. '+day+'.')
            $('.checkOut-book_it').val(year+'. '+month+'. '+(day+1)+'.')
            $('._uxnsba').text(year+'년 '+month+'월 '+day+'일'+' - '+year+'년 '+month+'월 '+(day+1)+'일')
            let isresvStart = toStringByFormatting(date);
            let isresvEnd = roomView.data.lodgingIsresvApiResponse.isresvEnd.substring(0,10)
            $('#datepicker4').attr('min', isresvStart)
            $('#datepicker4').attr('max', isresvEnd)
            $('#datepicker4').val(isresvStart)
            $('#datepicker5').attr('min', isresvStart)
            $('#datepicker5').attr('max', isresvEnd)
            $('#datepicker5').val(nextdate)
            $('#bak').text(bak+'/박')
            $('#sidebak').text(bak)
            $('#_18x0pkv1').append(`<div class="_1fpuhdl _1fpuhdl123"><span class="_18x3iiu"><div>${isresvStart.substring(0, 4)}. ${isresvStart.substring(5, 7)}. ${isresvStart.substring(8, 10)}.</div></span><span class="_1k4xcdh">₩<span class="pricepep">${$('#priceNormal1').text()}</span></span></div>`)
            $('#sideBarPriceTotal1').text((Number($('#nomalpricepic').text().replace(/\,/g,''))*pep*bak).toLocaleString('ko-KR'))
            $('#sideBarPriceTotal2').text($('#priceNormal1').text())
        })
    }



    function change(){
        pep = Number(document.querySelector("#c5").innerText) + Number(document.querySelector("#c6").innerText) + Number(document.querySelector("#c7").innerText)
        let priceNN = Number($('#nomalpricepic').text().replace(/\,/g,''))
        let priceNY = priceNN*pep
        let price = priceNY.toLocaleString('ko-KR')
        $('.pricepep').text(price)
        $('#sidebak').text(bak)
        let totalprice = priceNY*bak
        let total = totalprice.toLocaleString('ko-KR')
        $('#sideBarPriceTotal1').text(total)
        $('#totalPrice').text(total)
        $('#sideBarPriceTotal2').text(total)
        $('#sideBarPrice').text(price)
    }
    $('._qqb2vcb').on('click',function (){
        let start123 = document.querySelector("#datepicker4").value
        let start1 = start123.substring(2,4)
        let start2 = start123.substring(5,7)
        let start3 = start123.substring(8,10)
        $('#ckeckInDate').text('20'+start1+'. '+start2+'. '+start3+'.')
        let start = start1+'/'+start2+'/'+start3
        let end123 = document.querySelector("#datepicker5").value
        let end1 = end123.substring(2,4)
        let end2 = end123.substring(5,7)
        let end3 = end123.substring(8,10)
        $('#ckeckOutDate').text('20'+end1+'. '+end2+'. '+end3+'.')
        let end = end1+'/'+end2+'/'+end3
        pep = Number(document.querySelector("#c5").innerText) + Number(document.querySelector("#c6").innerText)
            + Number(document.querySelector("#c7").innerText)
        location.href = '/pages/payment?id='+id+'&guest='+pep+'&isresv_start='+start+'&isresv_end='+end;
    })
    function count() {
        pep = Number(document.querySelector("#c5").innerText) + Number(document.querySelector("#c6").innerText)
            + Number(document.querySelector("#c7").innerText)
        $('#pepcnt').text(`게스트 ${pep}명`);
    }
    // 게스트 인원 바를 선택 시
    $('._1gpyw79').on('click', function () {
        if ($('._r2ourjn').css('display') == 'block') {
            $('._r2ourjn').hide();
        } else {
            $('._r2ourjn').show();
        }
    });
    //닫기 버튼 클릭 시
    $('._za4ekfm').on('click', function () {
        $('._r2ourjn').hide();
    });

    // 기본 요금 상세 내역 팝업
    $('.pop_btn1').on('click', function () {
        $('.sub_modal1').show();
    });

    $('._1wv4knt').on('click', function () {
        // 기본요금상세내역 팝업 종료
        $('.sub_modal1').hide();
        //에어비앤비 서비스수수료 안내 modal 종료
        $('.sub_modal2').hide();
    });
    //숙소 신고하기 modal 종료
    $('._oda838').on('click', function () {
        $('.sub_modal3').hide();
        $('.sub_modal4').hide();
        //알아두어야 할 사항 (환불 정책)
        $('.sub_modal6').hide();
        $('.sub_modal7').hide();
    });
    //에어비앤비 서비스수수료 안내 modal
    $('.pop_btn2').on('click', function () {
        $('.sub_modal2').show();
    });
    //숙소 편의시설 modal
    $('.b65jmrv').on('click', function () {
        $('.sub_modal4').show();
    });
    //숙소 신고하기
    //modal1
    $('.pop_btn3').on('click', function () {
        $('.sub_modal3').show();
    });
    //신고 선택후 다음 버튼
    $('._1ku51f04').on('click', function () {
        $('.sub_modal3').hide();
        $('.sub_modal7').show();
        $('.backbtn1').on('click', function () {
            $('.sub_modal7').hide();
            $('.sub_modal3').show();
        });
        $('._159914b').keyup(function () {
            if ($('._159914b').val().length > 0) {
                $('._1ku51f04').removeAttr("disabled");
            } else if ($('._159914b').val().length == 0) {
                $('._1ku51f04').attr("disabled", "true");
            }
        });
    });
    //호스트 소개 확장 버튼
    $('.pop_btn4').on('click', function () {
        $('._1ojpw5l').removeClass('_1ojpw5l');
        $(this).remove();
    });
    //알아두어야 할 사항 (건강과 안전)
    $('._pa35zs').on('click', function () {
        $('.sub_modal5').hide();
    });
    $('.pop_btn5').on('click', function () {
        $('.sub_modal5').show();
    });
    //알아두어야 할 사항 (환불 정책)
    $('.pop_btn6').on('click', function () {
        $('.sub_modal6').show();
    });

    //예약 체크인 + 체크아웃
    $('._16l1qv1').on('click', function () {
        $('._13ah4vr').show();
        //닫기
        $('._1lerwp6l').on('click', function () {
            let start123 = document.querySelector("#datepicker4").value
            let start1 = start123.substring(2,4)
            let start2 = Number(start123.substring(5,7))
            let start3 = Number(start123.substring(8,10))
            $('#checkIn-book_it').val('20'+start1+'. '+start2+'. '+start3+'.')
            $('#ckeckInDate').text('20'+start1+'. '+start2+'. '+start3+'.')

            let end123 = document.querySelector("#datepicker5").value
            let end1 = end123.substring(2,4)
            let end2 = Number(end123.substring(5,7))
            let end3 = Number(end123.substring(8,10))
            $('#checkOut-book_it').val('20'+end1+'. '+end2+'. '+end3+'.')
            $('#ckeckOutDate').text('20'+end1+'. '+end2+'. '+end3+'.')
            $('._13ah4vr').hide();
        });
    })
    $('#datepicker4').on('change', function (){
        let start123 = document.querySelector("#datepicker4").value
        if(start123 >= document.querySelector("#datepicker5").value){
            let ercode = toStringByFormatting(new Date(document.querySelector("#datepicker5").value).minusDays(1))
            document.querySelector("#datepicker4").value = toStringByFormatting(new Date(document.querySelector("#datepicker5").value).minusDays(1))
            let ercode1 = ercode.substring(2,4)
            let ercode2 = Number(ercode.substring(5,7))
            let ercode3 = Number(ercode.substring(8,10))
            $('#checkIn-book_it').val('20'+ercode1+'. '+ercode2+'. '+ercode3+'.')
            $('#ckeckInDate').text('20'+ercode1+'. '+ercode2+'. '+ercode3+'.')
            toCalBak()
            change()
            return
        }
        let start1 = start123.substring(2,4)
        let start2 = Number(start123.substring(5,7))
        let start3 = Number(start123.substring(8,10))
        $('#checkIn-book_it').val('20'+start1+'. '+start2+'. '+start3+'.')
        $('#ckeckInDate').text('20'+start1+'. '+start2+'. '+start3+'.')
        toCalBak()
        change()
    })
    $('#datepicker5').on('change', function (){
        let end123 = document.querySelector("#datepicker5").value
        let end1 = end123.substring(2,4)
        let end2 = Number(end123.substring(5,7))
        let end3 = Number(end123.substring(8,10))
        $('#checkOut-book_it').val('20'+end1+'. '+end2+'. '+end3+'.')
        $('#ckeckOutDate').text('20'+end1+'. '+end2+'. '+end3+'.')
        toCalBak()
        change()
    })
    let total1= Number($('#sideBarPriceTotal1').text().replace(",",""))
    $('#sideBarPriceTotal1').text(total1*Number(document.querySelector("#c5").innerText))
    //달력 버튼 클릭시()
    $('.gj-icon').on('click', function () {
        $("#datepicker4").on("change", function () {
            $('.datefour').val($(this).val());
            $('.datefour').text($(this).val());
        });

        $("#datepicker5").on("change", function () {
            $('.datefive').val($(this).val());
            $('.datefive').text($(this).val());
        });
    });

    Date.prototype.addDays = function(days) {
        let date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    }

    Date.prototype.minusDays = function(days) {
        let date = new Date(this.valueOf());
        date.setDate(date.getDate() - days);
        return date;
    }

    function leftPad(value) {
        if (value >= 10) {
            return value;
        }
        return `0${value}`;
    }

    function toStringByFormatting(source, delimiter = '-') {
        const year = source.getFullYear();
        const month = leftPad(source.getMonth() + 1);
        const day = leftPad(source.getDate());

        return [year, month, day].join(delimiter);
    }
    function toCalBak(){
        let start = document.querySelector("#datepicker4").value.split("-")
        let end = document.querySelector("#datepicker5").value.split("-")
        let start1 = Number(start[0])
        let start2 = Number(start[1])
        let start3 = Number(start[2])
        let end11 = Number(end[0])
        let end22 = Number(end[1])
        let end33 = Number(end[2])
        let price2 = $('#priceNormal1').text()
        let price = price2.toLocaleString('ko-KR')
        let startDate = new Date(start1,start2,start3);
        let endDate = new Date(end11,end22,end33);
        let btMs = endDate.getTime() - startDate.getTime();
        let btDay = (btMs /(1000*60*60*24));
        console.log(btDay)
        $('#bak').text(btDay+'/박')
        $('._1fpuhdl123').remove()
        for(let i = 0; i<btDay; i++){
            let date = toStringByFormatting(new Date(start).addDays(i))
            let year = date.substring(0, 4)
            let month = date.substring(5, 7)
            let day = date.substring(8, 10)
            $('#_18x0pkv1').append(`<div class="_1fpuhdl _1fpuhdl123"><span class="_18x3iiu"><div>${year}. ${month}. ${day}.</div></span><span class="_1k4xcdh">₩<span class="pricepep">${price}</span></span></div>`)
        }
        let priceYY = parseInt(price2.replace(",",""))
        $('#sidesideBarPriceTotal1').text(btDay)
        let totalNN = priceYY*btDay
        bak = btDay
        let total = totalNN.toLocaleString('ko-KR')
        $('#sideBarPriceTotal1').text(total)
        $('#sideBarPrice').text(price)
        $('#totalPrice').text(total)
        $('#sideBarPriceTotal2').text(total)
    }
})