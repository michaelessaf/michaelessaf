var lastScrollTop = 0;
var SFhasVisted = false;

jQuery(document).ready(function($) {
    $(".clickable-row").click(function() {
        if (!$(this).data("href")=='') {
          console.log("true");
          window.location = $(this).data("href");
        }
      });

      // about me flourish
      $(window).scroll(function(){
        if ($('#abtme').isOnScreen()) {
            $('#abtme').addClass('flourish');
        } else {
          $('#abtme').removeClass('flourish');
        }
      });

        // secondary flourish
        $(window).scroll(function(){
          $( ".interest" ).each(function(index) {
            if ($( this ).isOnScreen()) {
                if(SFhasVisted){
                  $( this ).removeClass('secondaryflourish');
                }
                $( this ).addClass('flourish');
                SFhasVisted = true;
            } else {
                $( this ).removeClass('flourish');
            }

          });
        });
});



$.fn.isOnScreen = function(){

    var win = $(window);

    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};

$(window).scroll(function(){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       // downscroll code
       $('.mousewrapper').addClass('hidden')
       try{$('.mousewrapper').removeClass('appear')} catch {}
   } else {
      // upscroll code
      $('.mousewrapper').removeClass('hidden')
      $('.mousewrapper').addClass('appear')
   }
   lastScrollTop = st;


})
