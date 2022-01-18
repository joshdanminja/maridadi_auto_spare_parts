(function ($) {
    "use strict";
    


    /*--
		Header Sticky
    -----------------------------------*/
    $(window).on('scroll', function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll <= 200) {
            $(".header-main").removeClass("sticky");
        } else{
            $(".header-main").addClass("sticky");
        }
	});


    /*--
		Menu Active
    -----------------------------------*/
    $(function () {
        var url = window.location.pathname; 
        var activePage = url.substring(url.lastIndexOf('/') + 1); 
            $('.nav-menu li a').each(function () { 
                var linkPage = this.href.substring(this.href.lastIndexOf('/') + 1); 
        
            if (activePage == linkPage) { 
                $(this).closest("li").addClass("active"); 
            }
        });
    });


    /*--
		Menu Script
	-----------------------------------*/
        
    /*Variables*/
    var $offCanvasNav = $('.mobile-menu-items'),
    $offCanvasNavSubMenu = $offCanvasNav.find('.sub-menu');

    /*Add Toggle Button With Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.parent().prepend('<span class="mobile-menu-expand"></span>');

    /*Close Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.slideUp();

    /*Category Sub Menu Toggle*/
    $offCanvasNav.on('click', 'li a, li .mobile-menu-expand, li .menu-title', function(e) {
        var $this = $(this);
        if($this.parent().attr('class')){
            if (($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('mobile-menu-expand'))) {
                e.preventDefault();
                if ($this.siblings('ul:visible').length) {
                    $this.parent('li').removeClass('active-expand');
                    $this.siblings('ul').slideUp();
                } else {
                    $this.parent('li').addClass('active-expand');
                    $this.closest('li').siblings('li').find('ul:visible').slideUp();
                    $this.closest('li').siblings('li').removeClass('active-expand');
                    $this.siblings('ul').slideDown();
                }
            }
        }
    });

    $( ".sub-menu" ).parent( "li" ).addClass( "menu-item-has-children" );
    


    /*--
        Testimonial
    -----------------------------------*/

	var swiper = new Swiper(".testimonial-active .swiper-container", {
		speed: 600,
        pagination: {
            el: '.testimonial-active .swiper-pagination',
            clickable: true,
        },
	});


    /*--
        Brand
    -----------------------------------*/
    var edule = new Swiper('.brand-active .swiper-container', {
        speed: 600,
        spaceBetween: 30,
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 20,
            },  
            576: {
                slidesPerView: 3,
            },  
            768: {
                slidesPerView: 3,
            },            
            992: {
                slidesPerView: 4,
            },            
            1200: {
                slidesPerView: 4,
                spaceBetween: 110,
            }
        },
        autoplay: {
            delay: 8000,
        },
    });
    

    /*--
        Product Details
    -----------------------------------*/

	var swiper = new Swiper(".product-details-active .swiper-container", {
		speed: 600,
        loop: true,
        navigation: {
            nextEl: '.product-details-active .swiper-button-next',
            prevEl: '.product-details-active .swiper-button-prev',
        },
	});
    

    /*--
        Product Quick View
    -----------------------------------*/

	var swiper = new Swiper(".product-quickview-active .swiper-container", {
		speed: 600,
        loop: true,
        navigation: {
            nextEl: '.product-quickview-active .swiper-button-next',
            prevEl: '.product-quickview-active .swiper-button-prev',
        },
	});


    /*--
		Back to top Script
	-----------------------------------*/
    // Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });

    //Animate the scroll to yop
    $('.back-to-top').on('click', function (event) {
    event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });
    
    
    /*--
        tooltipList
    -----------------------------------*/
	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-tooltip="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })


    /*--
        Price Range Activation
    -----------------------------------*/
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 700,
        values: [ 20, 500 ],
        slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.values[ 0 ] + "- $" + ui.values[ 1 ] );
        }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) + "- $" + $( "#slider-range" ).slider( "values", 1 ) );


    /*--
        Product Quantity Activation
    -----------------------------------*/
    $('.add').on('click', function () {
        if ($(this).prev().val()) {
            $(this).prev().val(+$(this).prev().val() + 1);
        }
    });
    $('.sub').on('click', function () {
        if ($(this).next().val() > 1) {
            if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
        }
    });


    /*--
		Rating Script
	-----------------------------------*/

	$("#rating li").on('mouseover', function(){
		var onStar = parseInt($(this).data('value'), 10);
		var siblings = $(this).parent().children('li.star');
		Array.from(siblings, function(item){
			var value = item.dataset.value;
			var child = item.firstChild;
			if(value <= onStar){
				child.classList.add('hover')
			} else {
				child.classList.remove('hover')
			}
		})
	})

	$("#rating").on('mouseleave', function(){
		var child = $(this).find('li.star i');
		Array.from(child, function(item){
			item.classList.remove('hover');
		})
	})

	
	$('#rating li').on('click', function(e) {
		var onStar = parseInt($(this).data('value'), 10);
		var siblings = $(this).parent().children('li.star');
		Array.from(siblings, function(item){
			var value = item.dataset.value;
			var child = item.firstChild;
			if(value <= onStar){
				child.classList.remove('hover', 'hover');
				child.classList.add('star')
			} else {
				child.classList.remove('star');
				child.classList.add('hover')
			}
		})
	}) 


    /*--
        select2
    -----------------------------------*/
    $(".select2").select2({
        tags: true
    }); 


    /*--
        Checkout Account Active
    -----------------------------------*/
    $('#account').on('click', function () {
        if ($('#account:checked').length > 0) {
          $('.checkout-account').slideDown();
        } else {
          $('.checkout-account').slideUp();
        }
    });
      
  
    /*--
        Checkout Shipping Active
    -----------------------------------*/
    $('#shipping').on('click', function () {
        if ($('#shipping:checked').length > 0) {
          $('.checkout-shipping').slideDown();
        } else {
          $('.checkout-shipping').slideUp();
        }
    });
      
  
    /*--
        Checkout Payment Active
    -----------------------------------*/
    var checked = $('.payment-radio input:checked')
    if (checked) {
        $(checked).siblings('.payment-details').slideDown(500);
    };
    $('.payment-radio input').on('change', function() {
        $('.payment-details').slideUp(500);
        $(this).siblings('.payment-details').slideToggle(500);
    });


    /*--
		AOS Scroll Animation
	-----------------------------------*/
	AOS.init({
		once: true,
		duration: 1500,
	});


	
	
    
    
})(jQuery);