$(document).ready(function() {
    $('#div2').hide();
    $('#div3').hide();
    $('#div4').hide();
    $('#search-suggestions-popup').hide();
    $('#tab--role_tabs--0').click(function() {
        $('#div1').show();
        $('#div2, #div3, #div4').hide()
        $('#tab--role_tabs--0').addClass('_fd0fliz').removeClass('_tns11i');
        $('#tab--role_tabs--1, #tab--role_tabs--2, #tab--role_tabs--3').removeClass('_fd0fliz').addClass('_tns11i');
    });
    $('#tab--role_tabs--1').click(function() {
        $('#div2').show();
        $('#div1, #div3, #div4').hide()
        $('#tab--role_tabs--1').addClass('_fd0fliz').removeClass('_tns11i');
        $('#tab--role_tabs--0, #tab--role_tabs--2, #tab--role_tabs--3').removeClass('_fd0fliz').addClass('_tns11i');
    });
    $('#tab--role_tabs--2').click(function() {
        $('#div3').show();
        $('#div1, #div2, #div4').hide()
        $('#tab--role_tabs--2').addClass('_fd0fliz').removeClass('_tns11i');
        $('#tab--role_tabs--0, #tab--role_tabs--1, #tab--role_tabs--3').removeClass('_fd0fliz').addClass('_tns11i');
    });
    $('#tab--role_tabs--3').click(function() {
        $('#div4').show();
        $('#div1, #div2, #div3').hide()
        $('#tab--role_tabs--3').addClass('_fd0fliz').removeClass('_tns11i');
        $('#tab--role_tabs--0, #tab--role_tabs--1, #tab--role_tabs--2').removeClass('_fd0fliz').addClass('_tns11i');
    });
    $('.i17j5df5').click(function() {
        $('#search-suggestions-popup').show();
        $('.ctqyxkl').addClass('cusudri');
        $('.i17j5df5').addClass('focus-visible');
        $('.sjnrf6s').addClass('slteii9t');
    });
    $('._1qi0sj8').click(function() {
        $('#itrdiv2').show();
    })
    $('._vxvq8x').click(function() {
        $('#itrdiv2').hide();
    })
    $('.msc963k').click(function() {
        $('#itrdiv1').show();
    })
    $('.msc963k').on('click', function(e) {
        $('#itrdiv1').show()
        $(document).on('click.msc963k', function(e) {
            if ($(e.target).closest('.m1sbgceq').length < 1) {
                $('#itrdiv1').hide();
            }
        });
        e.stopPropagation();
    });

});

$(document).on("click", function(e) {
    if ($(e.target).closest(".focus-visible").length < 1 && !$(e.target).hasClass("focus-visible") && $(e.target).closest(".sfme1lx ").length < 1 && !$(e.target).hasClass("sfme1lx")) {
        $('#search-suggestions-popup').hide();
        $('.ctqyxkl').removeClass('cusudri')
        $('.i17j5df5').removeClass('focus-visible')
        $('.sjnrf6s').removeClass('slteii9t')
    }
});