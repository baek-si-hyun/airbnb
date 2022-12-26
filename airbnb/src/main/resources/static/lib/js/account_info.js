/*실명 수정 버튼 눌렀을 때*/
$('#legalName-row-action').on('click', function() {
    $('#legalName-row-action').attr('class', '_en4nskq _kkkkkkk');
    $('#legalName-row-action2').attr('class', '_en4nskq');
    $('#legalName-row-subtitle2').attr('class', '_hi9sy _kkkkkkk');
    $('#formid').removeAttr('class');
    $('#legalName-row-subtitle').attr('class', '_hi9sy');
})

/*실명 취소 버튼 눌렀을 때*/
$('#legalName-row-action2').on('click', function() {
    $('#formid').attr('class', '_kkkkkkk');
    $('#legalName-row-subtitle2').attr('class', '_hi9sy');
    $('#legalName-row-subtitle').attr('class', '_kkkkkkk');
    $('#legalName-row-action').attr('class', '_en4nskq');
    $('#legalName-row-action2').attr('class', '_kkkkkkk');
})

/*성별 수정 버튼 눌렀을 때*/
$('#gender-row-action').on('click', function() {
    $('#gender-row-action').attr('class', '_en4nskq _kkkkkkk');
    $('#gender-row-action2').attr('class', '_en4nskq');
    $('#gender-row-subtitle').attr('class', '_hi9sy _kkkkkkk');
    $('#formid1').removeAttr('class');
})

/*성별 취소 버튼 눌렀을 때*/
$('#gender-row-action2').on('click', function() {
    $('#formid1').attr('class', '_kkkkkkk');
    $('#gender-row-subtitle').attr('class', '_hi9sy');
    $('#gender-row-action2').attr('class', '_kkkkkkk');
    $('#gender-row-action').attr('class', '_en4nskq');
})

/*이메일 수정 버튼 눌렀을 때*/
$('#email-row-action').on('click', function() {
    $('#email-row-action').attr('class', '_en4nskq _kkkkkkk');
    $('#email-row-action2').attr('class', '_en4nskq');
    $('#email-row-subtitle1').attr('class', '_hi9sy _kkkkkkk');
    $('#email-row-subtitle').attr('class', '_hi9sy');
    $('#formid3').removeAttr('class');
})

/*이메일 취소 버튼 눌렀을 때*/
$('#email-row-action2').on('click', function() {
    $('#email-row-action2').attr('class', '_en4nskq _kkkkkkk');
    $('#email-row-action').attr('class', '_en4nskq');
    $('#email-row-subtitle').attr('class', '_hi9sy _kkkkkkk');
    $('#email-row-subtitle1').attr('class', '_hi9sy');
    $('#email-row-action2').attr('class', '_kkkkkkk');
    $('#formid3').attr('class', '_kkkkkkk');
})

/*전화번호 수정 버튼 눌렀을 때*/
$('#phoneNumbers-row-action1').on('click', function() {
    $('#form3').show();
    $('#phoneNumbers-row-action1').hide();
    $('#phoneNumbers-row-action2').show();
})

$('#phoneNumbers-row-action2').on('click', function() {
    $('#form3').hide();
    $('#phoneNumbers-row-action2').hide();
    $('#phoneNumbers-row-action1').show();
})

// $('#phoneNumbers-row-action').attr('class', '_gw4xx4 _kkkkkkk');
// $('#321337886-row-title').attr('class', '_gw4xx4 _kkkkkkk');
// $('#321337886-row-subtitle').attr('class', '_1imhiqqh _kkkkkkk');
// $('#formid4').attr('class', 'formid4');
// $('#321337886-row-title2').attr('class', '_gw4xx4');
// $('#321337886-row-subtitle2').attr('class', '_1imhiqqh');
// $('#321337886-row-action').attr('class', '_en4nskq');

/*전화번호 닫기 버튼 눌렀을 때*/
$('#phoneNumbers-row-action2').on('click', function() {
    $('#phoneNumbers-row-action').attr('class', '_en4nskq');
    $('#phoneNumbers-row-action2').attr('class', '_en4nskq _kkkkkkk');
    $('#formid4').attr('class', 'formid4 _kkkkkkk');
    $('#321337886-row-title').attr('class', '_gw4xx4');
    $('#321337886-row-subtitle').attr('class', '_1imhiqqh');
    $('#form3').attr('class', 'form3 _kkkkkkk');

})

/*전화번호 수정2 버튼 눌렀을 때*/
$('#321337886-row-actionn').on('click', function() {
    $('#form3').attr('class', 'form3');
    $('#formid4').attr('class', 'formid4 _kkkkkkk');
    $('#321337886-row-subtitle').attr('class', '_1imhiqqh');
})


/*주소 수정 버튼 눌렀을 때*/
$('#address-row-action').on('click', function() {
    $('#address-row-action').attr('class', '_en4nskq _kkkkkkk');
    $('#address-row-action1').attr('class', '_en4nskq');
    $('#form22').attr('class', 'form22');
    $('#address-row-subtitle').attr('class', '_hi9sy _kkkkkkk');
    $('#address-row-subtitle1').attr('class', '_hi9sy');
})

/*주소 취소 버튼 눌렀을 때*/
$('#address-row-action1').on('click', function() {
    $('#address-row-action1').attr('class', '_en4nskq _kkkkkkk');
    $('#address-row-action').attr('class', '_en4nskq');
    $('#form22').attr('class', 'form22 _kkkkkkk');
    $('#address-row-subtitle1').attr('class', '_hi9sy _kkkkkkk');
    $('#address-row-subtitle').attr('class', '_hi9sy');
})


/*비상연락처 추가 버튼 눌렀을 때*/
$('#emergencyContacts-row-action').on('click', function() {
    $('#emergencyContacts-row-action').attr('class', '_en4nskq _kkkkkkk');
    $('#emergencyContacts-row-subtitle').attr('class', '_hi9sy _kkkkkkk');
    $('#emergencyContacts-row-subtitle1').attr('class', '_hi9sy');
    $('#form33').attr('class', 'form33');
    $('#emergencyContacts-row-action1').attr('class', '_en4nskq');

})

/*비상연락처 취소 버튼 눌렀을 때*/
$('#emergencyContacts-row-action1').on('click', function() {
    $('#emergencyContacts-row-action1').attr('class', '_en4nskq _kkkkkkk');
    $('#emergencyContacts-row-action').attr('class', '_en4nskq');
    $('#emergencyContacts-row-subtitle').attr('class', '_hi9sy');
    $('#emergencyContacts-row-subtitle1').attr('class', '_hi9sy _kkkkkkk');
    $('#form33').attr('class', 'form33 _kkkkkkk');

})

/*여권정보 추가 버튼 눌렀을 때*/
$('#guestIdentification-row-action11').on('click', function() {
    $('#guestIdentification-row-action11').attr('class', '_en4nskq _kkkkkkk');
    $('#guestIdentification-row-action1').attr('class', '_en4nskq');
    $('#guestIdentification-row-subtitle1').attr('class', '_hi9sy');
    $('#form44').attr('class', 'form44');
    $('#guestIdentification-row-subtitle').attr('class', '_hi9sy _kkkkkkk');

})

/*여권정보 취소 버튼 눌렀을 때*/
$('#guestIdentification-row-action1').on('click', function() {
    $('#guestIdentification-row-action11').attr('class', '_en4nskq');
    $('#guestIdentification-row-action1').attr('class', '_en4nskq _kkkkkkk');
    $('#guestIdentification-row-subtitle1').attr('class', '_hi9sy _kkkkkkk');
    $('#form44').attr('class', 'form44 _kkkkkkk');
    $('#guestIdentification-row-subtitle').attr('class', '_hi9sy');
})