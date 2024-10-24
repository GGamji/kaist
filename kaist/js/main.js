// * main.js를 head 태그에서 연결한 경우 body 요소가 생성 전이라 js가 실행되지 않음
// * 아래의 3가지 방법 중 1가지 방법을 사용하면 head에 연결해도 실행됨

// window.onload = function() {// js 실행문} => js
// $(document).ready(function() {// js 실행문})   ex : $(document).ready(function() {$(h1).hide()}) =>jQuery
// script 태그에 defer 속성을 추가

$('#popup').draggable();

$('#popup').hide(); //문서 완성 후 삭제

$('.btn_popup_close').click(function() {
	$('#popup').hide();
});




/* header language */
$('.lang_wrap button').click(function() {
	/*
		$('.lang_wrap ul').css({
			'display':'flex',
			'opacity': '1'
		})
		$('.lang_wrap button i').css({
			'transform':'rotate(180deg)'
		})
	*/
	$('.lang_wrap button, .lang_wrap ul').toggleClass('open')

});

/* 전체 메뉴 */
$('.btn_allmenu_open').click(function() {
	$('.allmenu_popup').css({'display':'flex'})
	$('html, body').css({'overflow':'hidden'})
});
$('.btn_allmenu_close').click(function() {
	$('.allmenu_popup').hide()
	$('html, body').css({'overflow':'auto'})
});


/* header 스타일 추가 */
$('header .btn_search_open').click(function() {
	// 헤더에 on 클래스 추가 / 제거
	$('header').toggleClass('on');
	//.search_popup을 보였다 안 보였다
	$('header .search_popup').toggle();
});

/* #gnb .dep1의 직접 자손 li에게 마우스가 오버 되었을 때*/
/*
$('#gnb .dep1>li').mouseover(function() {
	// #gnb의 .dep2를 보임
	$('#gnb .dep2').show()
})
$('#gnb .dep1>li').mouseout(function() {
	// #gnb의 .dep2를 보임
	$('#gnb .dep2').hide()
})
*/

// method(parameter, parameter, ...)
// hover() <= jQuery 이벤트메소드 : mouseover + mouseout
// click(function() {}), mouseover(function() {})
// hover(function() {}, function() {})
$('#gnb .dep1>li').hover(function() { //over
	// $(this).children('.dep2_wrap').stop().slideDown();
	$(this).children('.dep2_wrap').stop().show();
	$('header').addClass('on')
}, function() { //out
	$('#gnb .dep2_wrap').stop().slideUp();
	$('header').removeClass('on')
});


// footer

//패밀리사이트 버튼(.family_wrap>button)을
// 클릭하면 => 이벤트
// 패밀리 리스트(.family_wrap>ul)
// 보였다 안 보였다 toggle()
// 위쪽으로 늘었따가 줄어들었다 애니메이션 animate({})
// 보였다(true) 안 보였다(false)

/* 30이라는 숫자를 s라는 상자에 넣으라는 뜻 */
let s = false;
$('.family_wrap>button').click(function() {
	// $('.family_wrap>ul').toggle(500)
	if(s == false) { // s가 false이면 true로 바껴라
		$('.family_wrap>ul').animate({'height' : '11.5em'});
		s = true;
	}
	else { // s가 true이면 다시 false로 바껴라
		$('.family_wrap>ul').animate({'height' : '0'});
		s = false;
	}


	console.log(s)
})

