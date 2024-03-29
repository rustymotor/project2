gsap.from('.c1h',{
    scrollTrigger:
    {
    duration:0.1,
    trigger:'.c1h',
    start:'0% 60%',
    end:'100% 80%',
    ease:'expo',
    id:'박스5',
    scrub:1,
    },
    y:200,
    opacity:0,
});

gsap.from('.content1',{
    scrollTrigger:
    {
    duration:1,
    trigger:'.content1',
    start:'0% 0%', 
    end:'100% 80%',
    id:'박스5',
    // scrub:1,
    },
    y:200,
    opacity:0,
});


gsap.set('.content2 .ani2', { y: 100, opacity: 0 });
gsap.to('.content2 .ani2', {
	y: 0,
	opacity: 1,
	duration: 1,
	stagger: 0.5,
	scrollTrigger: {
		trigger: '.content2',
		start: '0% 30%',
		end: '60% 40%',
		scrub: true,
		// pin:true, //화면고정

		markers: true,
		id: 'content2',
	},
});

gsap.set('.content3 .ani3', { x: 100, opacity: 0 });
gsap.to('.content3 .ani3', {
	x: 0,
	opacity: 1,
	duration: 1,
	stagger: 0.5,
	scrollTrigger: {
		trigger: '.content3',
		start: '0% 30%',
		end: '60% 40%',
		scrub: true,
		// pin:true, //화면고정

		markers: true,
		id: 'content3',
	},
});
gsap.from('.content4',{
    scrollTrigger:
    {
    trigger:'.content4',
    start:'0% 60%', //첫번째는 요소기준, 두번째는 윈도우기준
    end:'100% 80%',
   //markers:true,  //화면에 가이드선 표시
    id:'박스5',
    scrub:1,
    },
    y:200,
    opacity:0,
});


const ani9 = gsap.timeline({ toggleActions: 'play none reset play ', /* duration: 1 */ });
//ani9
//.from('.pinksquare>img',{scale:0})
//.to('.pinksquare>img',{scale:1})
ani9.fromTo('.pinksquare>img', { scale: 0, autoAlpha: 0 }, { scale: 1.3, autoAlpha: 1 });
ScrollTrigger.create({
	animation: ani9,
	trigger: '.content4',
	start: '0% 60%',
	end: '100% 80%',
    id:'핑크박스',
	// end:'+=4000',
	 scrub:true,
	// pin:true,
	// anticipatePin:1,
});
//숫자 세기
var counted = 0;
$(window).scroll(function() {

  var oTop = $('#count').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('#count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },
        {
          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }

});