//클릭시 팝업리스트 
$('._m7zt8').on('click',function(e){
    $('.menu_down1').show();
    $(document).on('click',function(e){
        if($(e.target).closest('.menu_down1').length < 1){
            $('.menu_down1').hide();
        }
    });
    e.stopPropagation();
});

//클릭시 팝업리스트 
$('._1u0z83f5').on('click',function(e){
    $('.menu_down2').show();
    $(document).on('click',function(e){
        if($(e.target).closest('.menu_down2').length < 1){
            $('.menu_down2').hide();
        }
    });
    e.stopPropagation();
});