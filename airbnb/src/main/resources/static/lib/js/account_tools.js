$(document).ready(function() {
    $('svg').hide();
    $('._ahrdgu1').hide()
    $('._1sk1regd').hide()

    $('#cancel_reason_radio_group_0').click(function() {
        $('svg').hide();
        $('#svg1').show();
        $('._1sk1regd').hide();
        $('._ahrdgu1').hide();
        $('button[type=button]').toggleClass('_72kmbi0 _p1854ce').removeAttr('disabled', '');
    });
    $('#cancel_reason_radio_group_1').click(function() {
        $('svg').hide();
        $('#svg2').show();
        $('._1sk1regd').show();
        $('._ahrdgu1').hide();
        $('button[type=button]').toggleClass('_72kmbi0 _p1854ce').removeAttr('disabled', '');
    });
    $('#cancel_reason_radio_group_2').click(function() {
        $('svg').hide();
        $('#svg3').show();
        $('._1sk1regd').hide();
        $('._ahrdgu1').hide();
        $('button[type=button]').toggleClass('_72kmbi0 _p1854ce').removeAttr('disabled', '');
    });
    $('#cancel_reason_radio_group_3').click(function() {
        $('svg').hide();
        $('#svg4').show();
        $('._1sk1regd').hide();
        $('._ahrdgu1').show();
        $('button[type=button]').toggleClass('_72kmbi0 _p1854ce').removeAttr('disabled', '');
    });
});
