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




    //헤더 햄버거 열면 스크롤 막기, 닫으면 다시 스크롤 활성화& 열어뒀던 세부 메뉴 닫히게 하기
	var header = document.getElementsByTagName("header")[0];
	var body = document.getElementsByTagName("body")[0];
	var btn_menu = document.getElementById("btn_menu");
	var sub_ul = $('.first, .second');
	

	btn_menu.onclick = function(){
		header.classList.toggle("on");
			if (header.classList.contains("on")){
				body.classList.add('scroll_disable');
				$('.sub_menu button').removeClass('change');
				
			} else {
				$(sub_ul).removeClass('active'); 
				body.classList.remove('scroll_disable');			
		}
	}


	//서치 인풋 열기
		$("#btn_search").on("click", function(){
			$('#search_wrap').toggleClass('inp');
			$(this).prev().focus();
				});


	//오픈웨더 api (폰트어썸 연계) 
		let weatherIcon = { 
			'01' : 'fas fa-sun',
			'02' : 'fas fa-cloud-sun',
			'03' : 'fas fa-cloud',
			'04' : 'fas fa-cloud-meatball',
			'09' : 'fas fa-cloud-sun-rain',
			'10' : 'fas fa-cloud-showers-heavy',
			'11' : 'fas fa-poo-storm',
			'13' : 'fas fa-snowflake',
			'50' : 'fas fa-smog'
		};
		$.ajax({
			url:'https://api.openweathermap.org/data/2.5/weather?q=seoul&APPID=7ae7464d8a7e7545d82a9074909f8b92&units=metric',
			dataType:'json',
			type:'GET',
			success:function(data){
				var $Icon = (data.weather[0].icon).substr(0,2);
				var $Temp = Math.floor(data.main.temp) + 'º';
				var $city = data.name;
				$('.CurrIcon').append('<i class="' + weatherIcon[$Icon] +'"></i>');
				$('.CurrTemp').prepend($Temp);
				$('.City').append($city);
				}
			})



	//화면 어느 정도 내려가면 위로 올리는 버튼 생성하기
			var up = document.getElementById('arrow'),
			docElem = document.documentElement, //html문서를 변수에 담기
			offset,
			scrollPos,//스크롤로 도큐먼트가 올라간 길이
			docHeight; 
			
			//높이계산
			docHeight = Math.max(docElem.scrollHeight, docElem.offsetHeight); // 문서높이계산(둘중 큰값으로 높이값 지정)

			if(docHeight != 'undefined'){
				offset = docHeight / 15;
			}

			//스크롤 내릴 때 이벤트
			window.addEventListener('scroll', function(){
				scrollPos = docElem.scrollTop; //현재 스크롤탑 값 측정
				console.log('scrollPos');
				up.className = (scrollPos > offset)? 
					'visible' : ''; //삼항조건 이용, 스크롤탑 값이 어떤 높이보다 크면(참이면) 보이게 아니면(거짓일시) 공란
			})
			//스크롤 올라올 때 세부 조정
			up.addEventListener('click', function(e){
				e.preventDefault(); //링크 본연의 기능 막기
				scrollTop();
			})
			// 스크롤 올라올 때 바로 안 올라오게 속도조정
			function scrollTop(){
				var scrollInterval = setInterval(function(){
					if(scrollPos!=0) {
						window.scrollBy(0, -65);
					} else {
						clearInterval(scrollInterval);
					}
				}, 10);		
			}






    

if(!isMobile){
		
		

}

else {



    // Tablet
    if(screen.width >= 768){

        

    }

    // Mobile
    else {

        
	
	//내비 세부 메뉴 열기(새로운 세부 메뉴 열면 사용하지 않는 건 닫히게)
	$('.sub_title').on('click', function(e){ //버튼을 누르면 일어날 일

		var ul = $(this).next('ul'); // 일단 바뀌는 버튼의 넥스트 ul (클래스 붙였다 떼는 애)
			
			if( e.target == this ){ //지금 누르는 버튼이 동일한데~
				
				if (ul.hasClass('active') && ul.prev('.sub_title').hasClass('change')) { //ul 이 이미 액티브 가졌으면 액티브 없애고, 버튼에 체인지 떼고,
					ul.removeClass('active')
					ul.prev('.sub_title').removeClass('change');
	
				} else { //ul이 액티브가 안가진 상태면 누른애만 액티브 넣고, 버튼도 누른 애만 체인지도 넣고
					$('.sub_title').siblings('ul').removeClass('active');
					ul.addClass('active');
					$('.sub_menu button').removeClass('change');
					$(this).addClass('change');
				}
			} 
		});

    }
    
}


});