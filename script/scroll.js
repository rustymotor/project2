gsap.from('.content1',{
    scrollTrigger:
    {
    trigger:'.content1',
    start:'0% 60%', //첫번째는 요소기준, 두번째는 윈도우기준
    end:'100% 80%',
    markers:true,  //화면에 가이드선 표시
    id:'박스5',
    scrub:1,
    },
    y:200,
    opacity:0,
});
gsap.from('.content2',{
    scrollTrigger:
    {
    trigger:'.content1',
    start:'0% 60%', //첫번째는 요소기준, 두번째는 윈도우기준
    end:'100% 80%',
    markers:true,  //화면에 가이드선 표시
    id:'박스5',
    scrub:1,
    },
    y:200,
    opacity:0,
});
gsap.from('.content3',{
    scrollTrigger:
    {
    trigger:'.content1',
    start:'0% 30%', //첫번째는 요소기준, 두번째는 윈도우기준
    end:'100% 80%',
    markers:true,  //화면에 가이드선 표시
    id:'박스5',
    scrub:1,
    },
    y:200,
    opacity:0,
});
gsap.from('.content4',{
    scrollTrigger:
    {
    trigger:'.content1',
    start:'0% 60%', //첫번째는 요소기준, 두번째는 윈도우기준
    end:'100% 80%',
    markers:true,  //화면에 가이드선 표시
    id:'박스5',
    scrub:1,
    },
    y:200,
    opacity:0,
});
