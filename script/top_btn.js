addEventListener('scroll',function(){
    let winY=this.scrollY;
    if(winY>500){
        document.querySelector('.top_btn').classList.add('on');

    }
    else{
        document.querySelector('.top_btn').classList.remove('on');

    }
})


document.querySelector('.top_btn').addEventListener('click',()=>{
    e.preventDefault();
    document.querySelector('html,body').scrollTo({top:0,behavior:'smooth'});
})