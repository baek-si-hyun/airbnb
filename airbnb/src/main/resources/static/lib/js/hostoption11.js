let var1, var2;
$('button[type=button]').on('click',function(){
    if($('._mtz5g2d').length === 0){
        var1 = $(this).toggleClass('_w0xfdo _mtz5g2d');
    }
    else if($('._mtz5g2d').length === 1){
        var2 = $(this).toggleClass('_w0xfdo _mtz5g2d');
    }else{
        var1.addClass('_w0xfdo').removeClass('_mtz5g2d');
        var1=var2;
        var2 = $(this).toggleClass('_w0xfdo _mtz5g2d');
    }
});


