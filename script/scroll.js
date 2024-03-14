gsap.from('.content1',{
    scrollTrigger:
    {
    duration:1,
    trigger:'.content1',
    start:'0% 60%', //첫번째는 요소기준, 두번째는 윈도우기준
    end:'100% 80%',
    markers:true,  //화면에 가이드선 표시
    id:'박스5',
    // scrub:1,
    },
    y:200,
    opacity:0,
});
gsap.from('.content2',{
    scrollTrigger:
    {
    trigger:'.content2',
    start:'0% 60%', //첫번째는 요소기준, 두번째는 윈도우기준
    end:'100% 80%',
    markers:true,  //화면에 가이드선 표시
    id:'박스5',
    // scrub:1,
    },
    y:300,
    opacity:0,
});
gsap.from('.content3',{
    scrollTrigger:
    {
    trigger:'.content3',
    start:'0% 60%', //첫번째는 요소기준, 두번째는 윈도우기준
    end:'100% 80%',
    markers:true,  //화면에 가이드선 표시
    id:'박스5',
    // scrub:1,
    },
    y:200,
    opacity:0,
});
gsap.from('.content4',{
    scrollTrigger:
    {
    trigger:'.content4',
    start:'0% 60%', //첫번째는 요소기준, 두번째는 윈도우기준
    end:'100% 80%',
    markers:true,  //화면에 가이드선 표시
    id:'박스5',
    // scrub:1,
    },
    y:200,
    opacity:0,
});


const ani9 = gsap.timeline();
ani9
.from('.pinksquare>img',{scale:0})
.to('.pinksquare>img',{scale:1})

ScrollTrigger.create({
    animation:ani9,
    trigger:'.pinksquare',
    start:'0% 0%',
    end:'100% 80%', 
    // end:'+=4000', 
    // scrub:true,
    // pin:true, 
    // anticipatePin:1,
})
