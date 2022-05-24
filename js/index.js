// JavaScript Document
$(document).ready(function(){
    $("a[href = '#']").click(function(e){
        e.preventDefault();
        return false;
    });

        

    var isMobile = false; //initiate as false
    // device detection
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|playbook|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
        isMobile = true;
    }



    //whats new 자동 슬라이드, 양쪽 버튼과 인디케이터 (드래그 미비하여 폐기)
    // var autoplay = true; 
    // var autoplay_Delay = 3000; // ms
    // var autoplayId;
    // var intervalId;
    
    // var slider;
    // var slider_item_container;
    // var slider_items;
    // var indicator_container;
    
    // var slider_item_width;
    // var curIndex = 0;
    
 
    // initElement();
    // initEvent();

    //   if (autoplay) {
    //       startAnimation(slider_item_container);
    //   }
  
    
    // function initElement() {
    //     slider = document.getElementById("slider");
    //     slider_items = slider.getElementsByTagName("li"); 
        // slider_item_container = slider.getElementsByClassName("slides_wrap")[0];
        // indicator_container = slider.getElementsByClassName("pagination")[0];
        
    //     var firstItem = slider_items[0].cloneNode(true);
    //     slider_item_container.appendChild(firstItem);
        
    //     slider_item_width = slider_items[0].offsetWidth;
    // }
    
    // function initEvent() {
    //     slider.addEventListener("mouseover", function () {
    //         clearTimeout(autoplayId);
    //         autoplay = false;
    //     });
    //     slider.addEventListener("mouseout", function () {
    //         autoplay = true;
    //         startAnimation(slider_item_container);
    //     });
        
        // var indicators = indicator_container.children;
        // for (var i = 0; i < indicators.length; i++) {
        //     indicators[i].setAttribute("index", i);
        //     indicators[i].addEventListener("click", function () {
        //         var index = parseInt(this.getAttribute("index"));
        //         next(index);
        //     });
        // }
        
    //     var left_arrow = slider.getElementsByClassName("prev")[0];
    //     var right_arrow = slider.getElementsByClassName("next")[0];
    //     left_arrow.addEventListener("click", function () {
    //         prev();
    //     });
    //     right_arrow.addEventListener("click", function () {
    //         next();
    //     });
    // }
    
    // function animate(element, target) {
    //     var step = 10;
    //     var time = 10;
    //     var gap = (Math.abs(target - element.offsetLeft) / slider_item_width);//Math.abs() 절대값 구하기
    //     if (gap > 1) {
    //         step = step * gap;
    //         time = time / gap;
    //     }
    //     if (element) {
    //         step = (element.offsetLeft > target) ? -step : step;
    //         clearInterval(intervalId);
    //         setCurrentActiveIndicator(curIndex);
    //         intervalId = setInterval(function () {
    //             if ((step < 0) && (Math.abs(element.offsetLeft + step) < Math.abs(target))) { // Math.abs() 숫자 절대값 반환
    //                 element.style.left = element.offsetLeft + step + "px";
    //             } else {
    //                 if (Math.abs(target - element.offsetLeft) > Math.abs(step)) {
    //                     element.style.left = element.offsetLeft + step + "px";
    //                 } else {
    //                     clearInterval(intervalId);
    //                     intervalId = -1;
    //                     element.style.left = target + "px";
    //                     if (autoplay) {
    //                         startAnimation(element);
    //                     }
    //                 }
    //             }
    //         }, time);
    //     }
    // }
    
    // function prev() {
    //     var element = slider_item_container;
    //     var li = element.children;
    //     curIndex = curIndex - 1;
    //     if (curIndex < 0) {
    //         element.style.left = -((li.length-1)*slider_item_width) + "px";
    //         curIndex = li.length-2;
    //     }
    //     animate(element, -(curIndex*slider_item_width));
    // }
    
    // function next(nextIndex) {
    //     var element = slider_item_container;
    //     var li = element.children;
    //     if ((nextIndex != null) && (typeof(nextIndex) != "undefined")) {
    //         curIndex = nextIndex;
    //     } else {
    //         curIndex = curIndex + 1;
    //         if (curIndex > (li.length-1)) {
    //             element.style.left = 0 + "px";
    //             curIndex = 1;
    //         }
    //     }
    //     animate(element, -(curIndex*slider_item_width));
    // }
    
    // function startAnimation(element) {
    //     if (autoplayId) {
    //         clearTimeout(autoplayId);
    //     }
    //     autoplayId = setTimeout(function () {
    //         next();
    //     }, autoplay_Delay);
    // }
    
    // function setCurrentActiveIndicator(index) {
    //     var indicators = indicator_container.children;
    //     if (index == indicators.length) {
    //         index = 0;
    //     }
    //     for (var i = 0; i < indicators.length; i++) {
    //         if (i == index) {
    //             indicators[i].className = "circle active";
    //         } else {
    //             indicators[i].className = "circle";
    //         }
    //     }
    // }



    // auto_slide, drag, touch action
    function rolling_slide(_targetWrap, _view_ea_D, _view_ea_T, _view_ea_M, _add_opacity){
		console.log("done");
		var $wrap = _targetWrap;
		var $inner = $($wrap +" div.view_mask");
		var $inner_ul = $($wrap +" div.view_mask > ul");
		var $inner_ul_li = $($wrap +" div.view_mask > ul > li");
		var $btn_prev = $($wrap +" button.prev");
		var $btn_next = $($wrap +" button.next");
		var $pn_btns = $($wrap +" .pagination > .circle");
		var view_ea = (function(){
			var result;
			if(!isMobile) result = _view_ea_D;
			else {
				if(screen.width >= 768) result = _view_ea_T;
				else if(screen.width < 768) result = _view_ea_M;
			}
			return result;
		})();
		var li_width = $inner.outerWidth() / view_ea;
		var move_cnt = 1; //prev, next
		var duration = 200; 
		var click_Event = true;
		var si_switch = 0;
		var cnt = 0;
		var add_opa = _add_opacity;
		var li_sort = [];

		(function init(){
			for(var i = 1; i <= move_cnt; i++){
				$inner_ul_li.last().prependTo($inner_ul);
			}
			$inner_ul_li.css("width", li_width +"px");
			if(add_opa){
				$inner_ul_li.css("opacity", "0.5");
				$inner_ul_li.eq(0).css("opacity", "1");
			}
			$inner_ul.css("width", li_width * $inner_ul_li.length +"px").css("margin-left", -li_width * move_cnt +"px").css("position", "relative");
			pagination_change(cnt);
		})();

		$btn_prev.on("click", function(){
			move_ul("prev");
		});
		$btn_next.on("click", function(){
			console.log($wrap);
			move_ul("next");
		});

		$pn_btns.on("click", function(e){
			e.preventDefault();
			stop_si();
			var cur_num = $(this).index();
			console.log(cur_num); 
			var length = $($wrap +" div.view_mask > ul > li").length; 
			for(var i = 0; i <= $($wrap +" div.view_mask > ul > li").length - 1; i++){
				li_sort[i] = $("li[data-index='"+ cur_num +"']"); 
				cur_num = cur_num == length - 1 ? 0 : cur_num + 1;
			}
			console.log(li_sort);
			$($wrap +" div.view_mask > ul").empty(); // .empty() 선택 요소의 내용 지우기
			for(var i = 0; i <= length - 1; i++){
				li_sort[i].appendTo($wrap +" div.view_mask > ul");
			}
			$($wrap +" div.view_mask > ul > li").last().prependTo($wrap +" div.view_mask > ul");
			cnt = Number(cur_num);
			pagination_change(cnt);
			start_si();
		});

		function pagination_change(num){
			$pn_btns.removeClass("active");
			for(var i = 1; i <= view_ea; i++){
				$pn_btns.eq($($wrap +" div.view_mask > ul > li").eq(i).attr("data-index")).addClass("active"); 
                //data-index 추가 및 active 클래스 붙이기
			}
			
		}

		var pos_X1 = 0;
		var pos_X2 = 0
		var pos_Initial;
		var pos_Final;
		var threshold = $inner.outerWidth() / 3;

		$inner_ul.on('touchstart', function(){ dragStart(); });
		$inner_ul.on('touchend', function(){ dragEnd(); });
		$inner_ul.on('touchmove', function(){ dragAction(); });

		function dragStart (e) {
			e = e || window.event;
			e.preventDefault();
			stop_si();
			pos_Initial = parseInt($inner_ul.css("left"));

			if (e.type == 'touchstart') {
				pos_X1 = e.touches[0].clientX;
			} else {
				pos_X1 = e.clientX;
				$inner_ul.onmouseup = dragEnd;
				$inner_ul.onmousemove = dragAction;
			}
			console.log("start");
		}

		function dragAction (e) {
			e = e || window.event;
			e.preventDefault();
			if (e.type == 'touchmove') {
				pos_X2 = pos_X1 - e.touches[0].clientX;
				pos_X1 = e.touches[0].clientX;
			} else {
				pos_X2 = pos_X1 - e.clientX;
				pos_X1 = e.clientX;
			}
			$inner_ul.css("left", (parseInt($inner_ul.css("left")) - pos_X2) + "px");
			console.log(parseInt($inner_ul.css("left")) - pos_X2);
		}

		function dragEnd (e) {
			e = e || window.event;
			e.preventDefault();
			pos_Final = parseInt($inner_ul.css("left"));
			if (pos_Final - pos_Initial < -threshold) {
				console.log("swipe(right)");
				move_ul("next");
			} else if (pos_Final - pos_Initial > threshold) {
				console.log("swipe(left)");
				move_ul("prev");
			} else {
				$inner_ul.animate({ left: (pos_Initial) + "px" }, 200, function(){
					start_si();
				});
			}
			$inner_ul.onmouseup = null;
			$inner_ul.onmousemove = null;
			console.log("end");
		}

		function move_ul(_direction){
			var _dir = _direction == "prev" ? 1 : -1;
			if(click_Event){
				stop_si();
				click_Event = false;
				$inner_ul.animate({ left: (li_width * _dir) * move_cnt +"px" }, duration, function(){
					for(var i = 1; i <= move_cnt; i++){
						if(_direction == "prev"){
							$($wrap +" div.view_mask > ul > li").last().prependTo($wrap +" div.view_mask > ul");
							cnt = cnt == 0 ? $pn_btns.length - 1 : cnt - 1;
							pagination_change(cnt);
						}
						else if(_direction == "next"){
							$($wrap +" div.view_mask > ul > li").first().appendTo($wrap +" div.view_mask > ul");
							cnt = cnt == $pn_btns.length - 1 ? 0 : cnt + 1;
							pagination_change(cnt);
						}
					}
					$inner_ul.css("left", "0px"); 
					if(add_opa){
						$($wrap +" div.view_mask > ul > li").css("opacity", "0.5");
						$($wrap +" div.view_mask > ul > li:eq(1)").css("opacity", "1");
					}
					click_Event = true;
					start_si();
				});
			}
			else { return false; }
		}

		function start_si(){
			if(si_switch != 0){
				clearInterval(si_switch);
			}
			si_switch = setInterval(function(){ move_ul("next"); }, 5000);
		}
		function stop_si(){
			if(si_switch != 0){
				clearInterval(si_switch);
			}
			si_switch = 0;
		}
		start_si();

	}
    



    if(!isMobile){
            
            

    }

    else {



        // Tablet
        if(screen.width >= 768){



        }

        // Mobile
        else {


            //moreex slides
            let idx_lgth = $(".sub_ex > .sub").length;
            let idx_init = 1;
            
            $(".pagination > .square").click(function(){
              var idx = $(this).index();
              idx_init = idx;
              $(this).addClass('active').siblings().removeClass('active');
              $(".sub_ex > .sub").eq(idx).addClass('on').siblings().removeClass('on');
            });
            
          setInterval(AutoRun, 3000);
            
          function AutoRun(){
            if(idx_init == idx_lgth){
                idx_init = 0;  
            }
            $(".pagination > .square").eq(idx_init).addClass('active').siblings().removeClass('active');
            $(".sub_ex > .sub").eq(idx_init).addClass('on').siblings().removeClass('on');
            idx_init++;  
          }



            var swiper01 = new Swiper(".mySwiper01", {
              // 768 이하에서 출력될 설정값
              slidesPerView: 1, 
              spaceBetween : 5, 
              loop: false, // 무한 루프 없음
              pagination: {
                el: '.swiper-pagination',
                type: "progressbar",
              }
            });


 

        }

    }

    var rolling_slide = rolling_slide(".whatsnew", 1, 1, 1, false);

});