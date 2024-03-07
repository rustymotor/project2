$(document).ready(function(){
    $('.marquee').marquee({
        speed: 80, // 속도
        gap: 100, // 간격
        delayBeforeStart: 0, // 시작 delay값
        direction: 'left', // 방향
        duplicated: true, // 선택 영역 복제
        startVisible:true
        
    });
});