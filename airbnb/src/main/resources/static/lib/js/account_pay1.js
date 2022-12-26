$(document).ready(function(e) {
    $('#btn2').click(function() {
        $('#itrdiv1').show();
        $('._oda838, ._15rpys7s, .submitbtn').on('click', function() {
            $('#itrdiv1').hide();
        })
    })
    console.log($(e.target))
    $('#btn2').on('click', function(e) {
        $('#itrdiv1').show()
        $(document).on('click', function(e) {
            if ($(e.target).closest('._1ucy1zjv').length < 1) {

                $('#itrdiv1').hide();
            }
        });
        e.stopPropagation();
    });
})