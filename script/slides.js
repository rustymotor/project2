$(()=>{
    const slide=$('.slides>div');
    let current = 0;
    let setIntervalID;
    //이거 멈추려면 clearInterval(setIntervalID) 써야 된다.
    function timer(){
        setIntervalID=setInterval(()=>{
            slideFn();
        },2000);
    }
 
    //슬라이드 인덱스번호계산함수
    function slideFn(){
        let prev=slide.eq(current);
        move(prev,'0','-100%');
        current++;
        if(current>=slide.length){
            current=0;
        }
   
        let next=slide.eq(current);
        move(next,'100%','0')
        //어차피 next 때문에 2.3 페어가 2,0으로 되기만해도 자동적으로 1이 오른쪽에 위치하게 된다.left:100%이 되니까.    
      
    }
    //움직이는 함수 tg:대상start 시작점end 어디까지가냐
    function move(tg,start,end){
        tg.css('left',start).animate({left:end},500,'easeOutCubic');
        //{left:end} 객체라서 중괄호다.
    }

    //정지,실행하기
    $('header').on({
        mouseenter:function(){
            clearInterval(setIntervalID);
        },
        mouseleave:function(){
            timer();
        }
    })
    




})//jquery