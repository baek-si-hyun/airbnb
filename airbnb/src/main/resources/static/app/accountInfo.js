$(function () {
    let id = parseInt($('#iddiv').text())
    //이름 수정
    let legalName = new Vue({
        el: '#legalName-row-subtitle2',
        data: {
            memName: {},
            memFirstname: {}
        }
    });
    nameSearch(id);
    function nameSearch(id) {
        $.get("/api/user/mem?id=" + id, function (response) {
            console.dir(response);
            legalName.data = response.data;
            $("#first_name").val(response.data.memFirstname);
            $("#firstNameId").text(response.data.memFirstname);
            $("#last_name").val(response.data.memName);
            $("#lastNameId").text(response.data.memName);
        })
    }
    let formid = new Vue({
        el: '#formid',
        data: {

        }
    });
    function nameUpdating() {
        let jsonData = {
            data: {
                memId: parseInt($('#iddiv').text()),
                memName: $('#last_name').val(),
                memFirstname: $('#first_name').val()
            }
        }
        $.post({
            url: '/api/user/name',
            data: JSON.stringify(jsonData),
            dataType: 'json',
            contentType: 'application/json',
            success: function (response) {
                formid.data = response.data
                $("#first_name").val(response.data.memFirstname);
                $("#firstNameId").text(response.data.memFirstname);
                $("#last_name").val(response.data.memName);
                $("#lastNameId").text(response.data.memName);
            },
            error: function () {
                alert('등록실패!');

            }
        });
    }
    $('#namesubmit').click(() => {
        nameUpdating();
    })




    //성별 수정
    let genderView = new Vue({
        el: '#gender-row-subtitle',
        data: {
            memGender: {}
        }
    });
    genderSearch(id);
    function genderSearch(id) {
        $.get("/api/user/memInfo?id=" + id, function (response) {
            console.dir(response);
            genderView.data = response.data;
            $("#gender-input").val(response.data.memGender);
            $("#gender1").text(response.data.memGender);
        })
    }
    let genderInput = new Vue({
        el: '#gender-input',
        data: {

        }
    });
    function genderUpdating() {
        jsonData = {
            data: {
                memId: parseInt($('#iddiv').text()),
                memGender: $('#gender-input').val()
            }
        }
        $.post({
            url: '/api/user/gender',
            data: JSON.stringify(jsonData),
            dataType: 'json',
            contentType: 'application/json',
            success: function (response) {
                genderInput.data = response.data
                $("#gender-input").val(response.data.memGender);
                $("#gender1").text(response.data.memGender);
            },
            error: function () {
                alert('등록실패!');

            }
        });
    }
    $('#gendersubmit').click(() => {
        genderUpdating();
    })





    // 이메일 수정
    let emailView = new Vue({
        el: '#email-row-subtitle1',
        data: {
            email: {}
        }
    });
    emailSearch(id);
    function emailSearch(id) {
        $.get("/api/user/mem?id=" + id, function (response) {
            console.dir(response);
            emailView.data = response.data;
            $("#email-input").val(response.data.email);
            $("#email1").text(response.data.email);
        })
    }
    let emailInput = new Vue({
        el: '#email-input',
        data: {

        }
    });
    function emailUpdating() {
        jsonData = {
            data: {
                memId: parseInt($('#iddiv').text()),
                email: $('#email-input').val()
            }
        }
        $.post({
            url: '/api/user/email',
            data: JSON.stringify(jsonData),
            dataType: 'json',
            contentType: 'application/json',
            success: function (response) {
                emailInput.data = response.data
                $("#email-input").val(response.data.email);
                $("#email1").text(response.data.email);
            },
            error: function () {
                alert('등록실패!');
            }
        });
    }
    $('#emailsubmit').click(() => {
        emailUpdating();
    })






    // 전화번호 수정
    let hpView = new Vue({
        el: '#email-row-subtitle1',
        data: {
            memHp: {},
            memHpContr: {}
        }
    });
    hpSearch(id);
    function hpSearch(id) {
        $.get("/api/user/mem?id=" + id, function (response) {
            hpView.data = response.data;
            $("#phoneInputVerification1").val(response.data.memHp);
            $("#hp1").text(response.data.memHp);
            $("#country").val(response.data.memHpContr);
        })
    }
    let hpInput = new Vue({
        el: '#phoneInputVerification1',
        data: {

        }
    });
    function hpUpdating() {
        jsonData = {
            data: {
                memId: parseInt($('#iddiv').text()),
                memHp: $("#phoneInputVerification1").val(),
                memHpContr: $("#country").val()
            }
        }
        $.post({
            url: '/api/user/Hp',
            data: JSON.stringify(jsonData),
            dataType: 'json',
            contentType: 'application/json',
            success: function (response) {
                hpInput.data = response.data
                $("#phoneInputVerification1").val(response.data.memHp);
                $("#hp1").text(response.data.memHp);
                $("#country").val(response.data.memHpContr);
            },
            error: function () {
                alert('등록실패!');
            }
        });
    }
    $('#hpsubmit').click(() => {
        hpUpdating();
    })






    //주소 수정
    let addressView = new Vue({
        el: '#address-row-subtitle',
        data: {
            addressCont: {},
            addressState: {},
            addressCity: {},
            addressRoad: {},
            addressDetail: {},
            addressPost: {}
        }
    });
    addressSearch(id);
    function addressSearch(id) {
        $.get("/api/user/memInfo?id=" + id, function (response) {
            addressView.data = response.data;
            $("#addresscountry_code").val(response.data.addressCont);
            $("#address1").text(response.data.addressCont);
            $("#addressstate").val(response.data.addressState);
            $("#address2").text(response.data.addressState);
            $("#addresscity").val(response.data.addressCity);
            $("#address3").text(response.data.addressCity);
            $("#addressroad").val(response.data.addressRoad);
            $("#address4").text(response.data.addressRoad);
            $("#addressapt").val(response.data.addressDetail);
            $("#address5").text(response.data.addressDetail);
            $("#addresszipcode").val(response.data.addressPost);
            $("#address6").text(response.data.addressPost);
        })
    }
    let addressInput = new Vue({
        el: '#address-row-subtitle',
        data: {

        }
    });
    function addressUpdating() {
        jsonData = {
            data: {
                memId: parseInt($('#iddiv').text()),
                addressCont: $("#addresscountry_code").val(),
                addressState: $("#addressstate").val(),
                addressCity: $("#addresscity").val(),
                addressRoad: $("#addressroad").val(),
                addressDetail: $("#addressapt").val(),
                addressPost: $("#addresszipcode").val()
            }
        }

        $.post({
            url: '/api/user/address',
            data: JSON.stringify(jsonData),
            dataType: 'json',
            contentType: 'application/json',
            success: function (response) {
                addressInput.data = response.data
                $("#addresscountry_code").val(response.data.addressCont);
                $("#address1").text(response.data.addressCont);
                $("#addressstate").val(response.data.addressState);
                $("#address2").text(response.data.addressState);
                $("#addresscity").val(response.data.addressCity);
                $("#address3").text(response.data.addressCity);
                $("#addressroad").val(response.data.addressRoad);
                $("#address4").text(response.data.addressRoad);
                $("#addressapt").val(response.data.addressDetail);
                $("#address5").text(response.data.addressDetail);
                $("#addresszipcode").val(response.data.addressPost);
                $("#address6").text(response.data.addressPost);
            },
            error: function () {
                alert('등록실패!');
            }
        });
    }
    $('#addresssubmit').click(() => {
        addressUpdating();
    })
})

