//메인메뉴의 움직이는 바
$('.gnb li a').mouseenter(function(){
    let bar=$(this).position().left;
    //.position() : jquery 메서드 중 하나로, 요소의 위치정보(top, left)를 반환한다.
    console.log(bar)
    let widnum=$(this).width();
    //$('.bar').animate({실행문},시간) >> jquery 메서드 중 하나
    $('.bar').animate({
        'left':bar + "px",
        'width':widnum + "px",
        'opacity':1,
    },300)
})

// 전체 애니메이션
$('.animate').scrolla({
    // default
    mobile: false, // 모바일 버전에서 활성화
    once: false, // 스크롤시 한번 또는 여러번 실행을 설정
    animateCssVersion: 4 // used animate.css 버전 실행
});


// path의 총길이(px단위)를 알아내기
let pathH=document.querySelector('.st0')
let pathHeight=pathH.getTotalLength();

console.log(pathHeight)

// menuOpen - jquery문법
//$('.menuOpen .open').on("click",function(){}) >> javaScript로 적는다면

$('.menuOpen .open').click(function(e){
    e.preventDefault();
    $('.menuOpen .menuWrap').addClass('on')
})

$('.menuOpen .close').click(function(e){
    e.preventDefault();
    $('.menuOpen .menuWrap').removeClass('on')
})

// service 영역시 배경컬러 바꾸기 - jquery문법
$(window).scroll(function(){
    //$(this) >> window자체를 말한다
    let scrollTop = $(this).scrollTop();
    console.log(scrollTop);

    let offset = $('.service').offset().top; // >> service영역의 top이 viewport의 top에 위치하는 지점(화면의 top) >> 전체문서에서 .service영역 전까지의 높이값을 추출
    
    if(scrollTop>offset){ // >> scrollTop값이 offset보다 크면~ 이라는 뜻 = 스크롤을 내리면
        $('body').addClass('on')
    }else{
        $('body').removeClass('on')
    }
})