// JavaScript Document
window.onload = function(){

	$("a[href = '#']").click(function(e){
		e.preventDefault();
		return false;
	});

	

	var isMobile = false; //initiate as false
	// device detection
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|playbook|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
		isMobile = true;
	}

// // what's new 자동 슬라이드쇼 이벤트 (동작...x...)

// //slide-wrap (변수로 슬라이드랩 >> 도는 애 설정)
// var slideWrapper = document.getElementsByClassName('view_mask');

// //current slideIndexition (현재 슬라이드)
// var slideIndex = 0;

// //items (개별 슬라이드)
// var slides = document.querySelectorAll('div.view_mask > div.slides');

// //number of slides (슬라이드 수)
// var totalSlides = slides.length;

// //get the slide width (뷰 마스크 넓이)
// var sliderWidth = slideWrapper.clientWidth;

// //set width of items (개별 슬라이드 너비 각자를 배열 객체처럼 쓰는 건가? 뷰마스크값에 px 붙인 값이 개별 값이라는 것 같은데...)
// slides.forEach(function (element) {
//     element.style.width = sliderWidth + 'px'; 
// })
// //set width to be 'x' times the number of slides (슬라이드를 총 너비를 구해주는 건가? 개별 슬라이드 * 슬라이드 갯수)
// var slider = document.querySelector('div.view_mask > div.slides');
// slider.style.width = sliderWidth * totalSlides + 'px';

// // prev, next 버튼
// var prevBtn = document.getElementsByClassName('prev');
// var nextBtn = document.getElementsByClassName('next');
// prevBtn.addEventListener('click', function () {
//     plusSlides(-1);
// });
// nextBtn.addEventListener('click', function () {
//     plusSlides(1);
// });

// // 슬라이드 인덱스 하나 늘어나는 함수
// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// //현재 보이는 슬라이드 선택
// function currentSlides(n) {
//     showSlides(slideIndex = n);
// }

// //이게 본 게임인가? 보이는 슬라이드 설정하는 함수인가봄 ㅇㅇ, 슬라이드 수를 N으로 설정하고, 슬라이드 수가 -1이면(멈추면) 총 슬라이드-1을 슬라이드수에 또 대입 (왜지?)
// function showSlides(n) {
//     slideIndex = n;
//     if (slideIndex == -1) {
//         slideIndex = totalSlides - 1;
//     } else if (slideIndex === totalSlides) { // 총 슬라이드수가 슬라이드수랑 같아지면 다시 초기화인 듯?
//         slideIndex = 0;
//     }

//     slider.style.left = -(sliderWidth * slideIndex) + 'px'; //쇼 슬라이드는 이거임 슬라이드 스타일을 왼쪽으로...? 슬라이드 너비*슬라이드수 + PX 뭔지 알거 같기도 하고...?
//     pagination();
// }           

// //pagination
// slides.forEach(function () { // 또 배열을 쓰는 포이치문이 나왔는데 페이지내이션을 이걸로 설정하는군? 리스트란 이름의 엘리멘트를 넣는다함 <li></li> 이런 식으로 개소름...?
//     var li = document.createElement('li');
//     document.querySelector('#slider-pagination-wrap ul').appendChild(li); //appendChild는 부모 노드에 자식 노드를 추가하는 메서드라 함 리스트 태그를 ul 사이에 껴넣는 건가? 왜지????
// })

// function pagination() { // 또 다른 함수 등장인디...  페이지네이션 버튼을 선택하고 글케 선택한 도트들을 또 배열처럼??? 간직해서 active를 빼앗음, 슬라이드 길이만큼 active도 넣고... (순서는 왜 이모양인지 1도 모르겠음) 액티브 넣은 다음 빼는 게 아님???
//     var dots = document.querySelectorAll('.pagination button.circle');
//     dots.forEach(function (element) {
//         element.classList.remove('active');
//     });
//     dots[slideIndex].classList.add('active');
// }

// pagination(); //페이지내이션 함수는 엄... 셋 인터벌로 오토로 돌릴 검미 3초 텀이군?
// var autoSlider = setInterval(function () {
//     plusSlides(1);
// }, 3000);
    



//	모바일에서만 실행돼야하는 moreex 자동 슬라이드 이벤트(페이드인아웃 형식)...는 또 다른데서까지 됨...악


					





if(!isMobile){
		
		

}

else {



    // Tablet
    if(screen.width >= 768){

        

    }

    // Mobile
    else {


        var slideIndex = 0;
        showSubmenu();

        function showSubmenu() {
        var i;
        var subs = document.getElementsByClassName("sub"); 
        var squares = document.getElementsByClassName("square");
        for (i = 0; i < subs.length; i++) {
            subs[i].style.display = "none";  
        }
            slideIndex++;
        if (slideIndex > subs.length) {slideIndex = 1}    
            for (i = 0; i < squares.length; i++) {
                squares[i].className = squares[i].className.replace(" active", "");
            }
            subs[slideIndex-1].style.display = "block";  
            squares[slideIndex-1].className += " active";
            setTimeout(showSubmenu, 2000); 
        }       

        


    }
    
}


}