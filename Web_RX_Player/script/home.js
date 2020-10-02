

$(document).ready(function () {

    var i = 0;
    
    $('.slide-pic').eq(1).css("display", "block");

    $('#next').on('click',function() {
        
        $('.slide-pic').eq(i-1).fadeIn(1000)
        $('.slide-pic').eq(i-1).css("display", "block")

            if(i < $('.slide-pic').length - 1){
                i++
            }else{
                i = 0 
            }
              
            $('.slide-pic').eq(i).css("display", "block")
            $('.slide-pic').eq(i).fadeOut(1000)
            
            console.log(i)

    })

    $('#prev').on('click',function() {  
        
            $('.slide-pic').eq(i).fadeIn(1000)
            $('.slide-pic').eq(i).css("display", "block")

            if(i > 0){
                i--
            }else{
                i = $('.slide-pic').length -1
            }
              
            $('.slide-pic').eq(i-1).css("display", "block")
            $('.slide-pic').eq(i-1).fadeOut(1000)
            
            console.log(i)

    })

});


