//please contact me son.caothanh88@gmail.com
//website http://thuthiemcity.info/golf-view-tan-binh-gia-re-website-chu-dau-tu

(function($) {
    $.fn.linhnguyen = function(options) {        
        var defaults = {  
	    	animation: 'fadeAndPop', //fade, fadeAndPop, none
		    animationspeed: 300, //how fast animtions are
		    closeonbackgroundclick: true, //if you click background will modal close?
		    dismissmodalclass: 'close-linhnguyen-modal' //the class of a button or element that will close an open modal
    	}; 

        var options = $.extend({}, defaults, options); 
	
        return this.each(function() {
        	var modal = $(this),
        		topMeasure  = parseInt(modal.css('top')),
				topOffset = modal.height() + topMeasure,
          		locked = false,
				modalBG = $('.linhnguyen-modal-bg');

			if(modalBG.length == 0) {
				modalBG = $('<div class="linhnguyen-modal-bg" />').insertAfter(modal);
			}		    
			modal.bind('linhnguyen:open', function () {
			  modalBG.unbind('click.modalEvent');
				$('.' + options.dismissmodalclass).unbind('click.modalEvent');
				if(!locked) {
					lockModal();
					if(options.animation == "fadeAndPop") {
						modal.css({'top': $(document).scrollTop()-topOffset, 'opacity' : 0, 'visibility' : 'visible'});
						modalBG.fadeIn(options.animationspeed/2);
						modal.delay(options.animationspeed/2).animate({
							"top": $(document).scrollTop()+topMeasure + 'px',
							"opacity" : 1
						}, options.animationspeed,unlockModal());					
					}
					if(options.animation == "fade") {
						modal.css({'opacity' : 0, 'visibility' : 'visible', 'top': $(document).scrollTop()+topMeasure});
						modalBG.fadeIn(options.animationspeed/2);
						modal.delay(options.animationspeed/2).animate({
							"opacity" : 1
						}, options.animationspeed,unlockModal());					
					} 
					if(options.animation == "none") {
						modal.css({'visibility' : 'visible', 'top':$(document).scrollTop()+topMeasure});
						modalBG.css({"display":"block"});	
						unlockModal()				
					}
				}
				modal.unbind('linhnguyen:open');
			}); 	

			modal.bind('linhnguyen:close', function () {
			  if(!locked) {
					lockModal();
					if(options.animation == "fadeAndPop") {
						modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
						modal.animate({
							"top":  $(document).scrollTop()-topOffset + 'px',
							"opacity" : 0
						}, options.animationspeed/2, function() {
							modal.css({'top':topMeasure, 'opacity' : 1, 'visibility' : 'hidden'});
							unlockModal();
						});					
					}  	
					if(options.animation == "fade") {
						modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
						modal.animate({
							"opacity" : 0
						}, options.animationspeed, function() {
							modal.css({'opacity' : 1, 'visibility' : 'hidden', 'top' : topMeasure});
							unlockModal();
						});					
					}  	
					if(options.animation == "none") {
						modal.css({'visibility' : 'hidden', 'top' : topMeasure});
						modalBG.css({'display' : 'none'});	
					}		
				}
				modal.unbind('linhnguyen:close');
			});     
   	
    	modal.trigger('linhnguyen:open')
			
			//Close Modal Listeners
			var closeButton = $('.' + options.dismissmodalclass).bind('click.modalEvent', function () {
			  modal.trigger('linhnguyen:close')
			});
			
			if(options.closeonbackgroundclick) {
				modalBG.css({"cursor":"pointer"})
				modalBG.bind('click.modalEvent', function () {
				  modal.trigger('linhnguyen:close')
				});
			}
			$('body').keyup(function(e) {
        		if(e.which===27){ modal.trigger('linhnguyen:close'); } // 27 is the keycode for the Escape key
			});
			
			function unlockModal() { 
				locked = false;
			}
			function lockModal() {
				locked = true;
			}	
			
        });//each call
    }//orbit plugin call
})(jQuery);
        
$(window).load(function() {
		if(document.cookie.indexOf("adf") == -1)
		{
			document.cookie = "adfpopunder1=adf";
			var divpopup = document.createElement("div");
			$(divpopup).attr('id', 'myModal');
			$(divpopup).attr('class', 'linhnguyen-modal');
			$( "body" ).append(divpopup);
			$("#myModal").html("<a href='http://thuthiemcity.info/' target='_blank'><img src='https://lh3.googleusercontent.com/Aa-mtlkP3RoS2hC8Yo9fmljPSjbnwYWxE3IE4_IRz0_NEnMBi1U8thNW2VW18erfdAoaurm08k2gNhU-dHorKfVYbfJy_G3HuFSI2xPN-4vDqv0yLo1tzkwslYQm6AVtvWPjAbG8b0-NR9OTpSIlr1sGR4-QBZcnRzQg_V_kUykyIsD-mHgxWfmt-ecRn_yTqoXUfzUtjP3z9IGsEWunjjnf3oGRaD5zS6HkoMnQuqyw3O7NisYgeTKBwKr8tFKoyAj0jO2AYJ-0UPsxbwgqODVQvIpeU3-ozOEKM8ih2jxLXzRsL0nEz6zdASiEfIsBbYQjskg8UN1GAYS2x5EdVtHlajpj_VluQ9QC0R6du1wVaPmLtAQRkuSfIVIlWd6r_0uvnmp45WcUkxY54TO5psHwmiSI7oCV_uIHEnIKsxTDtCVuwPPkyD4YaIEencnCM1e652CKLgILBbLMnwAGmZQ2uAqma6KcTAzCN2X852SNu1-b23UpvC3RxQftfCpnOqWrcHdysFBn28tEumY79HrYhNTkYs5qdEar8QukErv8ScDkejTuRq1Lu2z_DCseZfo95jeo5lOVB2lEboncFPilTrB1fHw=w518-h665-no' width='500px'/><br/>Căn Hộ Của Bạn</a>. Hotline 093 206 33 18. <h2><a class='close-linhnguyen-modal'>X</a></h2>");
			$('#myModal').linhnguyen($('#myModal').data());
		}
});
