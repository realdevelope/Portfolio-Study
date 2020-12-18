/* HEADER */
window.onload = function() {scrollFunction()};
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var header = document.getElementById('header');

    if(document.documentElement.scrollTop > 70) {
        if(!header.classList.contains('navbar-fixed')) {
            header.classList.add('navbar-fixed');
            document.getElementsByTagName('body')[0].style.marginTop = '70px';
            header.style.display = 'none';
            setTimeout(function(){
                header.style.display = 'block';
            }, 40);
        }
    } else {
        if(header.classList.contains('navbar-fixed')) {
            header.classList.remove('navbar-fixed');
            document.getElementsByTagName('body')[0].style.marginTop = '0';
        }
    }
}

function menuToggle() {
    document.getElementById('menu').classList.toggle('show');
}

document.getElementById('toggleBtn').addEventListener('click', menuToggle);


/*WELCOME AREA*/
var imageSlideIndex = 1;

showImageSlides(imageSlideIndex);

function imageSlideTimer(){     //타이머
    plusImageSlides(1);
}

var imageTimer = setInterval(imageSlideTimer, 3000);    //1초 == 1000

function plusImageSlides(n){   
    clearInterval(imageTimer);
    imageTimer = setInterval(imageSlideTimer, 3000);
    
    showImageSlides(imageSlideIndex += n);  /*인자를 더한값을 전달*/
}

function currentImageSlide(n){
    clearInterval(imageTimer);
    imageTimer = setInterval(imageSlideTimer, 3000);

    showImageSlides(imageSlideIndex = n);   /*인자를 전달한 n값으로 초기화하여 */
}

function showImageSlides(n) {
    var i;
    var slides = document.getElementsByClassName('image-slide');
    var dots = document.getElementsByClassName('dot');
    if (n > slides.length) {imageSlideIndex = 1}    
    if (n < 1) {imageSlideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[imageSlideIndex-1].style.display = 'block';  
    dots[imageSlideIndex-1].className += ' active';
  }

document.getElementById('imagePrev').addEventListener('click', plusImageSlides.bind(null,-1));    //바로 넘기면 함수가 실행되게때문에 bind로 인자를 null처리 후 1을 넘겨줌)
document.getElementById('imageNext').addEventListener('click', plusImageSlides.bind(null,1));

document.getElementById('firstDOt').addEventListener('click', currentImageSlide.bind(null,1));
document.getElementById('secondDOt').addEventListener('click', currentImageSlide.bind(null,2));
document.getElementById('thirdDOt').addEventListener('click', currentImageSlide.bind(null,3));
document.getElementById('forthDOt').addEventListener('click', currentImageSlide.bind(null,4));