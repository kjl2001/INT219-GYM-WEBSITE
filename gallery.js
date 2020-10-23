let pics = [{
  name: '',
  picture: 'image/gym1.jpg',
  number: 1
},
{
  name: '',
  picture: 'image/banner3.jpg',
  number: 2
},
{
  name: '',
  picture: 'image/banner2.jpg',
  number: 3
},
{
  name: '',
  picture: 'image/banner4.jpg',
  number: 4
},
{
  name: '',
  picture: 'image/bg.png',
  number: 5
},
{
  name: '',
  picture: 'image/gym2.jpg',
  number: 6
},
{
  name: '',
  picture: 'image/gym1.jpg',
  number: 7
},
{
  name: '',
  picture: 'image/diet1.jpg',
  number: 8
},
{
  name: '',
  picture: 'image/banner2.jpg',
  number: 9
},
{
  name: '',
  picture: 'image/ng.jpg',
  number: 10
}
];


let createGalleryMeny = () => {
  let nav = document.querySelector('#nav');

  for (let i = 0; i < pics.length; i++) {
    let img = document.createElement('DIV');
    img.style.backgroundImage = "url('" + pics[i].picture + "')";
    img.className = 'pic';
    nav.appendChild(img)
  }
}


function loopPics() {
  let number = 0;
  let display = document.querySelector('#display');

  display.style.backgroundImage = "url('" + pics[pics.length - 1].picture + "')";

  setInterval(function() {
    display.style.backgroundImage = "url('" + pics[number].picture + "')";
    number++

    if (number === pics.length) {
      number = 0
    }
  }, 2000)
}


(function init() {
  createGalleryMeny();
  loopPics();
})();
  
    
    
    
  
 

var mainImage = document.querySelector('#img-main');
var thumbGallery = document.querySelectorAll('#img-thumbs');
var thumb;
var selectedThumb = document.querySelector('.selected');
var arrowRight = document.querySelector('#right-btn');
var arrowLeft = document.querySelector('#left-btn');
var arrows = document.querySelectorAll('material-icons');


arrowRight.addEventListener('click', scrollRight);
arrowLeft.addEventListener('click', scrollLeft);

function scrollRight(){
    selectedThumb.nextElementSibling.click();
}

function scrollLeft(){
    selectedThumb.previousElementSibling.click();
}


for(var i = 0; i < thumbGallery.length; i++){
    thumb = thumbGallery[i];
    thumb.addEventListener('click', borderBig);
}


function borderBig(evt){
    mainImage.src = evt.target.src.replace('img-main');
    selectedThumb.classList.remove('selected');
    selectedThumb = evt.target;
    selectedThumb.classList.add('selected');
}






    
    
    