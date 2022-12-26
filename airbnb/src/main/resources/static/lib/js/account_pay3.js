$(document).ready(function(e){

    $('#pay3btn').click(function(){
        $('#itrdiv').show();
        $('._oda838, ._1dj2p4gk, .submitbtn').on('click',function(){
            $('#itrdiv').hide();
        })
    })

    $('#pay3btn').on('click', function(e) {
        $('#itrdiv').show()
        $(document).on('click', function(e) {
            if($(e.target).closest('._1ucy1zjv').length < 1){
                
                $('#itrdiv').hide();
            }
        });
        e.stopPropagation();
    });
})