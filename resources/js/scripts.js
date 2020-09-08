$(document).ready(
    function(){
        // stiky nav
        $('.about-section').waypoint(
            function(direction){
                if (direction == "down")
                    $('nav').addClass('sticky');
                    else {
                        $('nav').removeClass('sticky');
                    }
            }, {
                offset: '700px'
            }
        )



        // mobile-navigation
        $('.mobile-nav-icon').click(
            function(){
                $('.main-nav').slideToggle(200);

                if ($('.mobile-nav-icon').hasClass('fa-bars')){
                    $('.mobile-nav-icon').addClass('fa-times');
                    $('.mobile-nav-icon').removeClass('fa-bars')
                }
                else{
                    $('.mobile-nav-icon').addClass('fa-bars');
                    $('.mobile-nav-icon').removeClass('fa-times')
                }
            }
        )
    }
 )