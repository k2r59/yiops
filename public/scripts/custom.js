
$(window).load(function() {

	"use strict";


//------------------------------------------------------------------------
//						PRELOADER SCRIPT
//------------------------------------------------------------------------   
    $('#preloader').delay(400).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('#preloader .loading-data').fadeOut(); // will first fade out the loading animation



//------------------------------------------------------------------------
//						WOW ANIMATION SETTINGS
//------------------------------------------------------------------------ 	
	var wow = new WOW({
    	offset:100,        // distance to the element when triggering the animation (default is 0)
    	mobile:false       // trigger animations on mobile devices (default is true)
  	});
	wow.init();
	

	
//------------------------------------------------------------------------
//								MASONRY GRID
//------------------------------------------------------------------------	
	
    var $container = $('.item-grid');
    $container.isotope({
        filter: '*',
		itemSelector: '.item_container',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        },
		masonry: {
  			columnWidth: '.grid-sizer',
 			gutter: '.gutter-sizer'
		}
    });
 
    $('.filter a').click(function(){
        $('.filter .active').removeClass('active');
        $(this).addClass('active');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    });
	
	
	
//------------------------------------------------------------------------
//						COUNTER SCRIPT
//------------------------------------------------------------------------
   $('.timer').counterUp({
            delay: 20,
            time: 2500
        });



//------------------------------------------------------------------------
//						NAVBAR SLIDE SCRIPT
//------------------------------------------------------------------------ 		
	$(window).scroll(function () {
        if ($(window).scrollTop() > $("nav").height()) {
            $("nav.navbar-slide").addClass("show-menu");
        } else {
            $("nav.navbar-slide").removeClass("show-menu");
			$(".navbar-slide .navMenuCollapse").collapse({toggle: false});
			$(".navbar-slide .navMenuCollapse").collapse("hide");
			$(".navbar-slide .navbar-toggle").addClass("collapsed");
        }
    });
	
//------------------------------------------------------------------------
//						NAVBAR HIDE ON CLICK (COLLAPSED) SCRIPT
//------------------------------------------------------------------------ 		
    $('.nav a').on('click', function(){
        if($('.navbar-toggle').css('display') !='none'){
            $(".navbar-toggle").click()
        }
    });
	
})




$(document).ready(function(){



    $('#griser').on('click', function(){
       close();
    });

	"use strict";

	
	
//------------------------------------------------------------------------
//						ANCHOR SMOOTHSCROLL SETTINGS
//------------------------------------------------------------------------
	// $('a.goto, .navbar .nav a').smoothScroll({speed: 1200});




//------------------------------------------------------------------------	
//                    MAGNIFIC POPUP(LIGHTBOX) SETTINGS
//------------------------------------------------------------------------  
	          
    $('.portfolio-block .item-grid, .portfolio-block .owl-carousel').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
		
		
		
	
//------------------------------------------------------------------------
//					SUBSCRIBE FORM VALIDATION'S SETTINGS
//------------------------------------------------------------------------          
    $('#subscribe_form').validate({
        onfocusout: false,
        onkeyup: false,
        rules: {
            email: {
                required: true,
                email: true
            }
        },
        errorPlacement: function(error, element) {
            error.appendTo( element.closest("form"));
        },
        messages: {
            email: {
                required: "We need your email address to contact you",
                email: "Please, enter a valid email"
            }
        },
					
        highlight: function(element) {
            $(element)
        },                    
					
        success: function(element) {
            element
            .text('').addClass('valid')
        }
    }); 
	

		
				
//------------------------------------------------------------------------------------
//						SUBSCRIBE FORM MAILCHIMP INTEGRATIONS SCRIPT
//------------------------------------------------------------------------------------		
    $('#subscribe_form').submit(function() {
        $('.error').hide();
        $('.error').fadeIn();
        // submit the form
        if($(this).valid()){
            $('#subscribe_submit').button('loading'); 
            var action = $(this).attr('action');
            $.ajax({
                url: action,
                type: 'POST',
                data: {
                    newsletter_email: $('#subscribe_email').val()
                },
                success: function(data) {
                    $('#subscribe_submit').button('reset');
					
					//Use modal popups to display messages
					$('#modalMessage .modal-title').html('<i class="icon icon-envelope-open"></i>' + data);
					$('#modalMessage').modal('show');
					
                },
                error: function() {
                    $('#subscribe_submit').button('reset');
					
					//Use modal popups to display messages
					$('#modalMessage .modal-title').html('<i class="icon icon-ban"></i>Oops!<br>Something went wrong!');
					$('#modalMessage').modal('show');
					
                }
            });
        }
        return false; 
    });
	  
	  
	  
	  
//------------------------------------------------------------------------------------
//						CONTACT FORM VALIDATION'S SETTINGS
//------------------------------------------------------------------------------------		  
    $('#contact_form').validate({
        onfocusout: false,
        onkeyup: false,
        rules: {
            name: "required",
            message: "required",
            email: {
                required: true,
                email: true
            }
        },
        errorPlacement: function(error, element) {
            error.insertAfter(element);
        },
        messages: {
            name: "What's your name?",
            message: "Type your message",
            email: {
                required: "What's your email?",
                email: "Please, enter a valid email"
            }
        },
					
        highlight: function(element) {
            $(element)
            .text('').addClass('error')
        },                    
					
        success: function(element) {
            element
            .text('').addClass('valid')
        }
    });   




//------------------------------------------------------------------------------------
//								CONTACT FORM SCRIPT
//------------------------------------------------------------------------------------	
	
    $('#contact_form').submit(function() {
        // submit the form
        if($(this).valid()){
            $('#contact_submit').button('loading'); 
            var action = $(this).attr('action');
            $.ajax({
                url: action,
                type: 'POST',
                data: {
                    contactname: $('#contact_name').val(),
                    contactemail: $('#contact_email').val(),
                    contactmessage: $('#contact_message').val()
                },
                success: function() {
                    $('#contact_submit').button('reset');
					$('#modalContact').modal('hide');
					
					//Use modal popups to display messages
					$('#modalMessage .modal-title').html('<i class="icon icon-envelope-open"></i>Well done!<br>Your message has been successfully sent!');
					$('#modalMessage').modal('show');
                },
                error: function() {
                    $('#contact_submit').button('reset');
					$('#modalContact').modal('hide');
					
					//Use modal popups to display messages
					$('#modalMessage .modal-title').html('<i class="icon icon-ban"></i>Oops!<br>Something went wrong!');
					$('#modalMessage').modal('show');
                }
            });
        } else {
            $('#contact_submit').button('reset')
        }
        return false; 
    });	    	  

});

function affiValid() {
   $("#griser").css('display', 'block');
   var htm = connectURI('valide.html');
   $("#infos").html(htm);
   $("#infos").css('display', 'block');
}

function trim(myString) {
      return myString.replace(/^\s+/g,'').replace(/\s+$/g,'')
     }

     
function sendCallBack() {
        var valid=true;
        var named = $("input[name='named']").val();
        var tele = trim($("input[name='tele']").val());

        var regexp = new RegExp("^[a-zA-Z0-9_\\-\\.]{2,}@[a-zA-Z0-9\\-_]{2,}\\.[a-zA-Z]{2,4}$", "g");
        var regtel = new RegExp(/^[0-9\.() +-]+$/gi);
         // control du nom
        if(valid == true) {
        if(named == '') {
            $("input[name='named']").addClass("input-error");
            $("input[name='named']").val("NOM ABSENT");
            $("input[name='named']").fadeOut(1000).fadeIn(800);
            valid=false;
        }}

        // control du tel
        if(valid == true) {
        if(tele == '' || !regtel.test(tele)) {
            $("input[name='tele']").addClass("input-error");
            $("input[name='tele']").val("TELEPHONE INVALIDE");
            $("input[name='tele']").fadeOut(1000).fadeIn(800);
            valid=false;
        }}

        if(valid == true) {
             document.forms["sendBack"].submit();
        }

}


function close() {
   $("#griser").css('display', 'none');
   $("#infos").css('display', 'none');
}

function connectURI(uri) {
                             
     var html = $.ajax({
                url: uri,
                async: false
                }).responseText;

     return html;
     }

