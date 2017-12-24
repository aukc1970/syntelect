// Text slider
var spinner = {
    index: 0,
    auto: function(currentIndex) {
      if (currentIndex != undefined) {
        spinner.index = currentIndex % spinner.quotes.length;
      } else {
        spinner.index = (spinner.index + 1) % spinner.quotes.length;
      }
      spinner.quotes.removeClass("show");
      jQuery(spinner.quotes[spinner.index]).addClass("show");
      spinner.dots.removeClass('dot-fill');
      jQuery(spinner.dots[spinner.index]).addClass('dot-fill');
    },

    initial: function(){
      this.quotes = jQuery(".quote-rotate");
      this.images = jQuery(".quote-image");
      spinner.quotes.first().addClass("show");
      //dots
      if (spinner.quotes.length != 1) {
          for (i = 0; i < spinner.quotes.length; i++) {
            jQuery('.quote-dots').append("<div data-img=" + i + " class='nav-dot'></div>");
          }
          this.dots = jQuery(".nav-dot");
          jQuery(spinner.dots).first().addClass('dot-fill');
      }
    },

    dotnav: function(){
      jQuery(spinner.dots).on("click", function(){
        var currentIndex = jQuery(spinner.dots).index(this);
        spinner.auto(currentIndex);
        window.clearInterval(interval);
        interval = window.setInterval(spinner.auto, 6500);

      });
    }
}
// end text slider



jQuery(function() {

    // Text slider
 	spinner.initial();
 	spinner.dotnav();
 	interval = window.setInterval(spinner.auto, 5000);
    // end text slider

  // Fixed menu
	jQuery("#menu-full").before(jQuery("#menu-full").clone().addClass("fixed"));
	jQuery(window).scroll(function(){
		if(jQuery(window).scrollTop() >= 110){
			jQuery('.fixed').addClass('slideDown');

      jQuery('#change-bg').css({
        top       : "110px",
        transition : 'all 0.7s ease-in-out'
      });

      jQuery("#change-bg").prev("div").css({
        top       : "220px",
        transition : 'all 0.7s ease-in-out'
      });

      jQuery("#about").css({
        'margin-top'       : '50px',
        transition : 'all 0.7s ease-in-out'
      });      

			
		}
		else{
			jQuery('.fixed').removeClass('slideDown');

			jQuery('#change-bg').css({
        top       : "0px",
        transition : 'all 0.3s ease-in-out'
      });

      jQuery("#change-bg").prev("div").css({
        top       : "110px",
        transition : 'all 0.3s ease-in-out'
      });

      jQuery("#about").css({
        'margin-top'       : '0px',
        transition : 'all 0.7s ease-in-out'
      });             			
		}
	});
    // end fixed menu

    // Switch bg

    // jQuery.BgSwitcher.defineEffect("extraSlide", function($el) {
    //   $el.animate({left: $el.width()}, this.config.duration, this.config.easing);
    // });

    // var myArray = ['fade', 'blind', 'clip', 'slide', 'drop', 'hide'];
    // myArray[Math.floor(Math.random() * myArray.length)]
      

    var $el = jQuery("#change-bg").bgswitcher({ 
      images: glob_slides_img,   
      effect: glob_effect
    });    

    jQuery(".nav-dot").on("click", function() {
      $el.bgswitcher("select", jQuery(this).attr("data-img")); 
    });

    // end switch bg

    // Read more
    jQuery('#readmore').showMore({
      minheight: 435,
      buttontxtmore: glob_read_more,
      buttontxtless: glob_show_less,
      buttoncss: 'readmore-css',
      animationspeed: 500            
    });

    jQuery('#readmore-proc').showMore({
      minheight: 1720,
      buttontxtmore: glob_read_more_procc,
      buttontxtless: glob_show_less,
      buttoncss: 'btn btn-light btn-readmore-procc',
      animationspeed: 500            
    });


    // end read more        

    // effects for readmore buttons
  jQuery("#showmore-button-readmore").click(function() {
    if(jQuery("#readmore").css('opacity') == 1) {
      jQuery("#readmore").animate({opacity:0.8}, 600);
      jQuery(this).removeClass("readmore-css-hover");

    } else{
      jQuery("#readmore").animate({opacity:1}, 600);
      jQuery(this).addClass("readmore-css-hover");
    }
  });
    // end effects

    // styling input type file
  jQuery('#input-file').jfilestyle({
    text : 'add file',
    placeholder: glob_file_select,
    inputSize: '100%'
  });
  // end styling

  // Tabs to Accordion
  jQuery("#tabsToAccordion").easyResponsiveTabs({
      type: 'vertical', //Типы: default, vertical, accordion
      width: 'auto', //auto или любое значение ширины
      fit: true,   // 100% пространства занимает в контейнере
      activate: function() {} // Функция обратного вызова, используется, когда происходит переключение вкладок
  });

  // End Tabs to Accordion 

  jQuery("#why_icon").click(function() {
     jQuery("#why_text").css({
        'display'       : 'block',
        transition : 'all 0.7s ease-in-out'
      });
  });
  
});
