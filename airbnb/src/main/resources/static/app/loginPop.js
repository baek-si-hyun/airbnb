let erMsg = '<div class="_klarpw"><div class="_1yhfti2" ' +
    'id="email-login-email-InputField-help" data-testid="email-login-email-InputField-help-error">' +
    '<span style="margin-right: 4px;"><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" ' +
    'aria-label="오류 표시기" role="img" focusable="false" style="display: block; height: 16px; width: 16px; ' +
    'fill: currentcolor;"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zm0 10.2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm.8-6.6H7.2v5.2h1.6z">' +
    '</path></svg></span>이메일이 필요합니다.</div></div>'
//로그인 메인
$('.forlog').on('click',function(){
    $('.login_main').show();
});
//닫기
$('._pa35zs').on('click',function(){
    $('.login_main').hide();
});
$('#social-member').on('click',function() {
    $('.login_main').hide();
    $('.login_member').show();
});
//체크박스1 클릭
$('#email-signupuser_profile_info-row-checkbox').attr('value', 'N');
$('#email-signupuser_profile_info-row-checkbox').on('click',function(){
    $(this).next().empty();
    $(this).toggleClass('checkbox1');
    $(this).toggleClass('_1yf4i4f _smt4n2a');
    $(this).next().toggleClass('_41yoza _1v5cvwv4');
    $(this).next().append('<span class="_1oj8hra"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 4; overflow: visible;"><path fill="none" d="m4 16.5 8 8 16-16"></path></svg></span>');
    if($('#email-signupuser_profile_info-row-checkbox').is('.checkbox1')){
        $('#email-signupuser_profile_info-row-checkbox').attr('value', 'Y');
    }else{
        $('#email-signupuser_profile_info-row-checkbox').attr('value', 'N');
    }
});
//체크박스2 클릭
$('#email-signupuser_sub-row-checkbox').attr('value', 'N');
$('#email-signupuser_sub-row-checkbox').on('click',function(){
    $(this).next().empty();
    $(this).toggleClass('_1yf4i4f _smt4n2a');
    $(this).toggleClass('checkbox2');
    $(this).next().toggleClass('_41yoza _1v5cvwv4');
    $(this).next().append('<span class="_1oj8hra"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 4; overflow: visible;"><path fill="none" d="m4 16.5 8 8 16-16"></path></svg></span>');
    if($('#email-signupuser_sub-row-checkbox').is('.checkbox2')){
        $('#email-signupuser_sub-row-checkbox').attr('value', 'Y');
    }else{
        $('#email-signupuser_sub-row-checkbox').attr('value', 'N');
    }
});
//비밀번호 표시
$('._15rpys7s').on('click',function (){
    $('#email-signup-password').toggleClass('active');
    if($('input').hasClass('active')) {
        $('#email-signup-password').attr('type', "text");
        $('._15rpys7s').text('숨기기');
    }else{
        $('#email-signup-password').attr('type', "password");
        $('._15rpys7s').text('표시');
    }
});

//뒤로가기
$('.backmain').on('click',function(){
    $('.login_main').show();
    $('.login_member').hide();
    $('.login_pw').hide();
});

//비밀번호 표시
$('#togPw').on('click',function (){
    $('#email-login-password').toggleClass('active');
    if($('input').hasClass('active')) {
        $('#email-login-password').attr('type', "text");
        $('#togPw').text('숨기기');
    }else{
        $('#email-login-password').attr('type', "password");
        $('#togPw').text('표시');
    }
});

function emailCheck(){
    const email = $('#email-login-email');
    const emailcheck = /^[a-zA-Z0-9\-\.]+@[a-zA-Z0-9\-\.]+\.[a-zA-Z0-9]/;
    $('#sendemails').val(email.val());
    $('#email-signup-email').val(email.val());
    if (!(emailcheck.test(email.val()))){
        $(email).val('');
        $(email).focus();
        $('_k8r05be').after(erMsg);
        return false;
    }

    let jsonData = {
        transaction_time: new Date(),
        resultCode:"ok",
        description:"ok",
        data:{
            email: $('#email-login-email').val(),
           }
    }

    $.post({
        url: '/api/user/login',
        data: JSON.stringify(jsonData),
        dataType: 'json',
        contentType: 'application/json',
        success: function(res){
            if(res.data ==null){
                $('.login_main').hide();
                $('.login_member').show();
            }else {
                $('.login_main').hide();
                $('.login_pw').show();
            }
        },
        error: function(res){

        }
    });
    return true;
}

function member(){
    const first_name = $('#email-signup-userfirst');
    const last_name = $('#email-signup-userlast');
    const birth = $('#email-signup-date');
    const email = $('#email-signup-email');
    let year = birth.val().substring(0,4);
    const password = $('#email-signup-password');
    const checkbox = $('#email-signupuser_profile_info-row-checkbox');

    const nameCheck = /^[가-힣|a-z|A-Z|]+$/;
    const emailcheck = /^[a-zA-Z0-9\-\.]+@[a-zA-Z0-9\-\.]+\.[a-zA-Z0-9]/;
    const pwExp = /(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[#?!@$ %^&*-]).{6,20}$/;

    if (!(nameCheck.test(first_name.val()))){
        $(first_name).val('');
        $(first_name).focus();
        alert('이름을 입력 하세요');
        return false;
    }

    if (!(nameCheck.test(last_name.val()))){
        $(last_name).val('');
        $(last_name).focus();
        alert('성을 입력 하세요');
        return false;
    }

    if (year >= 2004 || (birth.val()=='')){
        $(birth).val('');
        alert('만 18세 이상만 에어비앤비를 이용할 수 있습니다');
        return false;
    }

    if (!(emailcheck.test(email.val()))){
        $(email).val('');
        $(email).focus();
        alert('이메일 형식에 맞게 입력 하세요');
        return false;
    }

    if (!(pwExp.test(password.val()))){
        $(password).val('');
        $(password).focus();
        alert('비밀번호 형식에 맞게 입력 하세요');
        return false;
    }

    if(!(checkbox.val('Y'))){
        alert('개인정보 수집 및 이용에 동의해야합니다.');
        return false;
    }

    let jsonData = {
        transaction_time: new Date(),
        resultCode:"ok",
        description:"ok",
        data:{
            memFirstname: $('#email-signup-userfirst').val(),
            memName: $('#email-signup-userlast').val(),
            birth: $('#email-signup-date').val(),
            email: $('#email-signup-email').val(),
            memPw: $('#email-signup-password').val(),
            isLogshare: ($('#email-signupuser_profile_info-row-checkbox').val() + " " + $('#email-signupuser_sub-row-checkbox').val())
        }
    }
    $.post({
        url: '/api/user',
        data: JSON.stringify(jsonData),
        dataType: 'json',
        contentType: 'application/json',
        success: function(){
            alert('회원 가입 완료!')
            location.href='/pages';
        },
        error: function(){
            location.reload();
        }
    });
}

// 이메일 비밀번호 확인 메일
$("#checkEmail").click(function () {
    const userEmail = $('#email-login-email').val();
    const sendEmail = document.forms["sendEmail"];
    $.ajax({
        type: 'post',
        url: 'api/user/sendEmail',
        data: {
            'memberEmail': userEmail
        },
        dataType: "text",
        success: function (result) {
            if(result == "no"){
                // 중복되는 것이 있다면 no == 일치하는 이메일이 있다!
                alert('임시비밀번호를 전송 했습니다.');
                sendEmail.submit();
            }else {
                alert('가입되지 않은 이메일입니다.');
            }

        },error: function () {
            console.log('에러 체크!!')
        }
    })
});