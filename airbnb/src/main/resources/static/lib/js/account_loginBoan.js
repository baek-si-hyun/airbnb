$(function() {
    $('._kt3i5a4').click(function() {
        let pass1 = $('#userPass1');
        let pass2 = $('#userPass2');

        if (pass1.val() !== pass2.val()) {
            $(pass2).val('');
            $(pass2).focus();
            alert('비밀번호가 일치하지 않습니다');
            return false;
        }
        if (pass1.val() === pass2.val()) {
            let jsonData = {
                data: {
                    memId: parseInt($('#iddiv').text()),
                    memPw: $('#old_password').val(),
                    newpassword: $('#userPass1').val()
                }
            }
            $.post({
                url: '/api/user/pwChange',
                data: JSON.stringify(jsonData),
                dataType: 'json',
                contentType: 'application/json',
                success: function() {
                    alert('등록 성공!');
                },
                error: function() {
                    alert('등록 실패!');
                }
            });
        }
    })
})

$(function() {
    /*실명 수정 버튼 눌렀을 때*/
    $('#button1').on('click', function() {
        $('#button1').attr('class', '_b0ybw8s _kkkkkkk');
        $('#button2').attr('class', '_b0ybw8s');
        $('#day1').attr('class', '_czm8crp _kkkkkkk');
        $('#form1').attr('class', 'form1');
    })

    /*실명 취소 버튼 눌렀을 때*/
    $('#button2').on('click', function() {
        $('#button2').attr('class', '_b0ybw8s _kkkkkkk');
        $('#button1').attr('class', '_b0ybw8s');
        $('#form1').attr('class', 'form1 _kkkkkkk');
        $('#day1').attr('class', '_czm8crp');
    })
})