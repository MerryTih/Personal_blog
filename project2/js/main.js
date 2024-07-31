window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const header = document.getElementById('header');
    const scrollStart = 50;
    
    if(window.scrollY > scrollStart) {
        header.classList.add('header-active');
    } else{
        header.classList.remove('header-active');
    }
}