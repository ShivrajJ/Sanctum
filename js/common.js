/* Settings 
------------------------------------------------------------------------*/
var $mainSlider;
var imgAspectR = 1.575; // 画像の比率　2048px/1300px
var viewAspectR;


/* readyEvent 
------------------------------------------------------------------------*/

$(function(){

	// smoothScroll ---------------------------//
	var	speed = 500,
		easing = 'swing',
		pcPosition = -0,
		tabPosition = -0,
		spPosition = -0;

	$('a').not('.noscroll').click(function(){
		var href = $(this).attr('href'),
			case1 = href.charAt(0) == '#',
			case2 = location.href.split('#')[0] == href.split('#')[0];

		if(case1 || case2) {
			if(case2)
				href = '#'+href.split('#')[1];

			$target = $(href);

			if($target.length){
				$html.add($body).not(':animated').animate({scrollTop : String($target.offset().top + (abi.pc ? pcPosition : abi.tab ? tabPosition : spPosition))},speed,easing);

				return false;
			}
		}
	});

	// outerPageAnchorLink ---------------------------//
	var $target = $('#'+window.location.href.split('#')[1]),
		adjust = (abi.pc) ? pcPosition : (abi.tab) ? tabPosition : spPosition;
		
	if($target.length) {
		$w.load(function(){
			var targetPosition = $target.offset().top;

			$html.add($body).animate({scrollTop: String(targetPosition + adjust)}, 10);
		});
	}



	//ハンバーガーメニュー
	var postion;
	$('.btn_menu').click(function(){
		if ($html.hasClass('menu_open')) {
			$html.removeClass('menu_open')
			$('#wrp_menu').fadeOut(200,function(){
				$page.fadeIn(200);
				$('html,body').animate({scrollTop: position},0);
			});
		} else {
			$html.addClass('menu_open');
			position = $w.scrollTop();
			$page.fadeOut(200,function(){
				$('html,body').animate({scrollTop: 0},0);
				$('#wrp_menu').fadeIn(200);
			});
			return false
		};
		$mainSlider.slick("slickGoTo",0);
	});

	//多言語ボタン
	$("#btn_lang").click(function() {
		if(abi.sp) $(this).next().find("li:gt(0)").stop().fadeIn();
		else $(this).next().find("li").stop().fadeIn();
	});
	$("#box_lang").mouseleave(function(){
		if(abi.sp) $(this).find("#btn_lang").next().find("li:gt(0)").stop().fadeOut();
		else $(this).find("#btn_lang").next().find("li").stop().fadeOut();
	});


	/* load & resize & scroll & firstLoad
------------------------------------------------------------------------*/
	
	$("#wrp_mainslider").css("height",abi.deviceHeight);
	$mainSlider = $('#main_slider');
	$mainSlider.slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		fade: true,
		cssEase: 'linear',
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000
	});

	$w.on({
		//load	
		'load' : function(){
			setTimeout(function(){
				$mainSlider.animate({opacity: 1},500, function() {});
				$("#wrp_mainslider").css("height","");
			},100);
		},
		//scroll	
		'scroll' : function(){

		}
	}).superResize({
		//resize
		resizeAfter : function(){
			firstView();

			//向き判定
			// $html.removeClass('portlate').removeClass('landscape');
			// if(abi.sp){
			// 	if(abi.deviceWidth < abi.deviceHeight) $html.addClass('portlate');
			// 	else $html.addClass('landscape');
			// }

		}
	}).firstLoad({
		//firstLoad
		pc_tab : function(){

		},
		sp : function(){
		}
	});




});


//ファーストビュー処理
function firstView(){
	viewAspectR = abi.deviceWidth / abi.deviceHeight;
	if(imgAspectR <= viewAspectR){
		$mainSlider.removeClass('normal').addClass('wide');
		$mainSlider.find(".slick-slide").css("paddingTop",abi.deviceHeight);
	} else {
		$mainSlider.removeClass('wide').addClass('normal');
		$mainSlider.find(".slick-slide").css("paddingTop",abi.deviceHeight);
	}
}

function matchHeight($o,m) {
    $o.css('height','auto')
    var foo_length = $o.length;
 
    for(var i = 0 ; i < Math.ceil(foo_length / m) ; i++) {
        var maxHeight = 0;
        for(var j = 0; j < m; j++){
            if ($o.eq(i * m + j).height() > maxHeight) { 
                maxHeight = $o.eq(i * m + j).height(); 
            }
        }
        for(var k = 0; k < m; k++){
            $o.eq(i * m + k).height(maxHeight); 
        }
    }
}