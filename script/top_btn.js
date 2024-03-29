addEventListener('scroll',function(){
    let winY=this.scrollY;
    if(winY>500){
        document.querySelector('.top_btn').classList.add('on');

    }
    else{
        document.querySelector('.top_btn').classList.remove('on');

    }
})


$('.top_btn').on('click',function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop:0},500,'easeOutQuart');

  })