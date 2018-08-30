(function($){
	"use strict";
	
	$(document).ready(function(){
		$(this).scrollTop(0);
	}); 
	//height & height
	$(window).height(function () {
		$('.header').height($(window).height());
	});
	
	$(window).height(function () {
		$('.header').height($(window).height());
	});
	
	//typed header
	$(".info .welcom").typed({
		strings: [" WEB DEVELOPER "],
		startDelay: 900,
		backDelay: 1000,
		loop: true,
		showCursor: true,
		cursorChar: " "
	});	


	//fitText header
	$(".info h2").fitText(0.9, { minFontSize: '38px', maxFontSize: '98px' });
	$(".info p").fitText(2, { minFontSize: '16px', maxFontSize: '38px' });

	
	//progress skills 
	$(".progress-skills").loading();
	$('input').on('click', function () {
		$(".progress-skills").loading();
	});

	//protfolio
	$('#gallery').mixItUp();
	
	//protfolio magnific Popup 
	$('.protfolio').magnificPopup({
		delegate: 'a',
		type: 'image'
	});
	
	//clients  Slider  
	$('.slider').bxSlider({
			mode: 'horizontal',
			speed: 600,
			infiniteLoop: true,
			auto: true,
			autoHover:true,
			hideControlOnEnd:true,
			pager:false,
			nextText:'>',
			prevText:'<'

	});
	

	//scroll navbar
	$('a.page-scroll').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: ($($anchor.attr('href')).offset().top - 50)
			}, 1250, 'easeInOutExpo');
			event.preventDefault();
	});
    
    //Contact form 
    $(document).ready(function() {

      var form = $('#form'),
	      name = $('#name'),
          email = $('#email'),
          subject = $('#subject'),
          message = $('#message'),
          info = $('#info'),
          submit = $("#submit");

      form.on('input', '#name, #email, #subject, #message', function() {
        $(this).css('border-color', '');
        info.html('').slideUp();
      });

      submit.on('click', function(e) {
        e.preventDefault();
        if(validate()) {
          $.ajax({
            type: "POST",
            url: "mailer.php",
            data: form.serialize(),
            dataType: "json"
          }).done(function(data) {
            if(data.success) {
			  name.val('');
              email.val('');
              subject.val('');
              message.val('');
              info.html('Message sent!').css('color', 'green').slideDown();
            } else {
              info.html('Could not send mail! Sorry!').css('color', 'red').slideDown();
            }
          });
        }
      });

      function validate() {
        var valid = true;
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
          
        if($.trim(name.val()) === "") {
          name.css('border-color', 'red');
          valid = false;
        }
		
        if(!regex.test(email.val())) {
          email.css('border-color', 'red');
          valid = false;
        }
        if($.trim(subject.val()) === "") {
          subject.css('border-color', 'red');
          valid = false;
        }
        if($.trim(message.val()) === "") {
          message.css('border-color', 'red');
          valid = false;
        }

        return valid;
      }

    });
})(jQuery);

