/* HEADER */
window.onload = function() {scrollFunction()};
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let header = document.getElementById('header');

    if (document.documentElement.scrollTop > 70) {
        if (!header.classList.contains('navbar-fixed')) {
            header.classList.add('navbar-fixed');
            document.getElementsByTagName('body')[0].style.marginTop = '70px';
            header.style.display = 'none';
            setTimeout(function () {
                header.style.display = 'block';
            }, 40);
        }
    } else {
        if (header.classList.contains('navbar-fixed')) {
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
let imageSlideIndex = 1;

showImageSlides(imageSlideIndex);

function imageSlideTimer() { //타이머
    plusImageSlides(1);
}

let imageTimer = setInterval(imageSlideTimer, 3000); //1초 == 1000

function plusImageSlides(n) {
    clearInterval(imageTimer);
    imageTimer = setInterval(imageSlideTimer, 3000);

    showImageSlides(imageSlideIndex += n); //인자를 더한값을 전달
}

function currentImageSlide(n) {
    clearInterval(imageTimer);
    imageTimer = setInterval(imageSlideTimer, 3000);

    showImageSlides(imageSlideIndex = n); //인자를 전달한 n값으로 초기화하여
}

function showImageSlides(n) {
    let i;
    let slides = document.getElementsByClassName('image-slide');
    let dots = document.getElementsByClassName('dot');
    if (n > slides.length) {
        imageSlideIndex = 1
    }
    if (n < 1) {
        imageSlideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[imageSlideIndex - 1].style.display = 'block';
    dots[imageSlideIndex - 1].className += ' active';
}

document.getElementById('imagePrev').addEventListener('click', plusImageSlides.bind(null, -1)); //바로 넘기면 함수가 실행되게때문에 bind로 인자를 null처리 후 1을 넘겨줌)
document.getElementById('imageNext').addEventListener('click', plusImageSlides.bind(null, 1));

document.getElementById('firstDOt').addEventListener('click', currentImageSlide.bind(null, 1));
document.getElementById('secondDOt').addEventListener('click', currentImageSlide.bind(null, 2));
document.getElementById('thirdDOt').addEventListener('click', currentImageSlide.bind(null, 3));
document.getElementById('forthDOt').addEventListener('click', currentImageSlide.bind(null, 4));


/*PORTFOLIO AREA*/

filterSelection('all'); //이거 안넣어서 한참 삽질함..

function filterSelection(id) {
    let x, i;

    x = document.getElementsByClassName('listItem');
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], 'active');
    }
    addClass(document.getElementById(id), 'active');

    x = document.getElementsByClassName('filterItem');
    if (id == 'all') id = '';
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], 'show');
        if (x[i].className.indexOf(id) > -1)
            addClass(x[i], 'show');
    }
}

function addClass(element, name) {
    if(element.className.indexOf(name) == -1) {
      element.className += " " + name;
    }
}

function removeClass(element, name) {
  let arr;
  arr = element.className.split(" ");

 while(arr.indexOf(name) > -1){
   arr.splice(arr.indexOf(name), 1);
 }

    element.className = arr.join(" ");  //join() : 배열의 원소들을 연결해서 하나의 값으로 만드는 함수
}

document.getElementById('all').addEventListener('click', filterSelection.bind(null, 'all'));
document.getElementById('uiux').addEventListener('click', filterSelection.bind(null, 'uiux'));
document.getElementById('java').addEventListener('click', filterSelection.bind(null, 'java'));
document.getElementById('db').addEventListener('click', filterSelection.bind(null, 'db'));

function viewPortfolio(event) {
    let polyNode = event.target;

    if (polyNode.tagName.toLowerCase() == 'i') {
        polyNode = polyNode.parentNode;
    } //사용자가 이미지를 클릭했을때 div태그부분 클릭했을때와 i태그 클릭했을때 다른 걸 보완해주는 코드

    let overlayNode = polyNode;
    let imageNode = overlayNode.nextElementSibling;

    let itemNode = overlayNode.parentNode;
    let mainNode = itemNode.nextElementSibling;
    let subNode = mainNode.nextElementSibling;
    let textNode = subNode.nextElementSibling;

    document.getElementById('modalImage').scc = imageNode.src;
    document.getElementById('modalMain').scc = mainNode.innerHTML;
    document.getElementById('modalSub').scc = subNode.innerHTML;
    document.getElementById('modalText').scc = textNode.innerHTML;

    document.getElementById('portfolioModal').style.display = 'block'
}

    document.getElementById('modalClose').addEventListener('click', function () {
    document.getElementById('portfolioModal').style.display = 'none';
}); //모달창 닫기

let filterItems = document.getElementsByClassName('overlay');

for (let i = 0; i < filterItems.length; i++) {
    filterItems[i].addEventListener('click', viewPortfolio);
}


/*REVIEW AREA*/
let reviewSlideIndex = 0;

function reviewSlideTimer() {
    plusReviewSlides(1);
}

let reviewTImer = setInterval(reviewSlideTimer, 3000);

function plusReviewSlides(n) {
    clearInterval(reviewTImer);
    reviewTImer = setInterval(reviewSlideTimer, 3000);
    showReviewSlides(reviewSlideIndex += n);
}

function showReviewSlides(n) {
    let i;
    let review_slides = document.getElementsByClassName('review-slide');

    if (n > review_slides.length - 3) {
        reviewSlideIndex = 0;
    }

    if (n < 0) {
        reviewSlideIndex = review_slides.length - 3;
    }

    for (i = 0; i < review_slides.length; i++) {
        removeClass(review_slides[i], 'show');
        removeClass(review_slides[i], 'res-show');
        addClass(review_slides[i], 'hide');
    }

    removeClass(review_slides[reviewSlideIndex], 'hide');
    addClass(review_slides[reviewSlideIndex], 'res-show');
    removeClass(review_slides[reviewSlideIndex + 1], 'hide');
    addClass(review_slides[reviewSlideIndex + 1], 'show');
    removeClass(review_slides[reviewSlideIndex + 2], 'hide');
    addClass(review_slides[reviewSlideIndex + 2], 'show');
}

document.getElementById('reviewPrev').addEventListener('click', plusReviewSlides.bind(null, -1));
document.getElementById('reviewNext').addEventListener('click', plusReviewSlides.bind(null, 1));


/*NAVBAR ANCHOR*/
function moveTo(id) {
    if (id == 'brand') {
        window.scrollTo(0, 0);
    } else {
        window.scrollTo(0, document.getElementById(id).offsetTop - 70);
    }

    document.getElementById('menu').classList.remove('show'); //메뉴바 클릭후에 사라지게 하는 코드
}

document.getElementById('navbarBrand').addEventListener('click', moveTo.bind(null, 'brand'));
document.getElementById('navbarAbout').addEventListener('click', moveTo.bind(null, 'about'));
document.getElementById('navbarService').addEventListener('click', moveTo.bind(null, 'service'));
document.getElementById('navbarPortfolio').addEventListener('click', moveTo.bind(null, 'portfolio'));
document.getElementById('navbarReview').addEventListener('click', moveTo.bind(null, 'review'));