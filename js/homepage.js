
/* Settings 
------------------------------------------------------------------------*/
var $con_link;
var $con_bnr;

/* Functions
------------------------------------------------------------------------*/




/* readyEvent 
------------------------------------------------------------------------*/

$(function(){


	$(".room_nav ul li").click(function(event) {
		// alert("a");
		var clickNum = $(".room_nav ul li").index(this);
		$("#roo_slider .slick-dots li:eq("+clickNum+") button").trigger('click')
	});

	$(".box_menu a").click(function() {
		$html.removeClass('menu_open')

		$page.fadeIn(200);
		var targetPosition = $($(this).attr('href')).offset().top;
		$html.add($body).animate({scrollTop: String(targetPosition)}, 10);

		$('#wrp_menu').fadeOut(200,function(){});

	});



/* load & resize & scroll & firstLoad
------------------------------------------------------------------------*/
	
	$w.on({
		//load
		'load' : function(){

			$con_link = $("#con_link");
			$con_bnr = $('#con_bnr');
			
			$con_bnr.slick({
				infinite: true,
				slidesToShow: 3,
				slidesToScroll: 1,
				dots: false,
				arrows: true,
				autoplay: false,
				autoplaySpeed: 2000,
				prevArrow: "<p class='btn_prev over'></p>",
				nextArrow: "<p class='btn_next over'></p>",
				responsive: [
				{
					breakpoint: 1000,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 751,
					settings: {
						slidesToShow: 1,
					}
				},
				]
			});

			$con_bnr.find(".box_bnr").each(function() {
				$(this).find(".txt").height($(this).width()*250/620).width($(this).width())
			});

		},
		//scroll	
		'scroll' : function(){

		}
	}).superResize({
		//resize
		resizeAfter : function(){

			$con_bnr.find(".box_bnr").each(function() {
				$(this).find(".txt").height($(this).width()*250/620).width($(this).width())
			});

			//リンク
			if(abi.pc) $con_link.find(".box_link a").height($con_link.find(".box_link").width()*(519/2048));
			else if(abi.tab) $con_link.find(".box_link a").height($con_link.find(".box_link").width()*0.32);
			else $con_link.find(".box_link a").height($con_link.find(".box_link").width()*(400/750)).find("> div").height("");
		}
	}).firstLoad({
		//firstLoad
		pc_tab : function(){

		},
		sp : function(){
		}
	});

});
