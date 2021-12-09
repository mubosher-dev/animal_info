window.addEventListener('DOMContentLoaded', () => {
    let loader = document.querySelector('.loader');//loader variable
    const menyuBtn = document.querySelector('.btn-menyu');//menyu btn
    const nav = document.querySelector('.navigation');//navigation
    const scrolBtn = document.querySelector('.scrolto');// window scrolly btn
    const header = document.querySelector('header');//header 
    const navLink = nav.querySelectorAll('a');// nav-lins

    //window scrolly = 0 header styles bg crimson
    window.addEventListener('scroll', () => {
        header.classList.toggle('fixed', window.scrollY > 0);
    })
   
    //window scrolly = 500 scrolBtn true
    window.addEventListener('scroll', () => {
        scrolBtn.classList.toggle('active', window.scrollY > 500);
    })

    // scrolBtn clickkded body scroltop = 0
    scrolBtn.addEventListener('click', () => {
        document.body.scrollTop = 0 ;
        document.documentElement.scrollTop = 0;

    })

    //menyuBtn click on navigation true
    menyuBtn.addEventListener('click', () => {
        menyuBtn.classList.toggle('active');
        nav.classList.toggle('active');
    })

    // navLink click navigation false
    navLink.forEach(navItem => {
        navItem.addEventListener('click', () => {
            menyuBtn.classList.toggle('active');
            nav.classList.remove('active');
        })
    })
   
    //loader settimeout
    setTimeout(() => {
        loader.style.opacity = 0;
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 2000);


    // btn click for browser not loading
    let btn = document.querySelector('button');
    btn.addEventListener('click', (e) => {
        e.preventDefault();
    })

})