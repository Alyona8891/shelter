console.log('Score 100/100\n1.Вёрстка страницы Main соответствует макету при ширине экрана 1280px: +14\n2.Вёрстка страницы Main соответствует макету при ширине экрана 768px: +14\n3.Вёрстка страницы Main соответствует макету при ширине экрана 320px: +14\n4.Вёрстка страницы Pets соответствует макету при ширине экрана 1280px: +6\n5.Вёрстка страницы Pets соответствует макету при ширине экрана 768px: +6\n6.Вёрстка страницы Pets соответствует макету при ширине экрана 320px: +6\n7. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки, справа от отдельных блоков не появляются белые поля. Весь контент страницы при этом сохраняется: не обрезается и не удаляется: +20\n8.Верстка резиновая: при плавном изменении размера экрана от 1280px до 320px верстка подстраивается под этот размер, элементы верстки меняют свои размеры и расположение, не наезжают друг на друга, изображения могут менять размер, но сохраняют правильные пропорции: +8\n9.При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка бургер-меню: +4\n10. Верстка обеих страниц валидная: +8');
const hamb = document.querySelector('#hamb');
const popup = document.querySelector('#popup');
const menu = document.querySelector('#menu').cloneNode(1);
const body = document.body;
const arrPetsNames = ['Sophia', 'Freddie', 'Scarlett', 'Charly', 'Timmy', 'Woody', 'Jennifer', 'Katrine'];
const btnLeft = document.querySelector('#btn-left');
const btnRight = document.querySelector("#btn-right");
const carousel = document.querySelector("#carousel");
const itemLeft = document.querySelector("#item-left");
const itemRight = document.querySelector("#item-right");

window.addEventListener('load', (e) => {
    const carouselItemActive = createCarouselItem();
    console.log(carouselItemActive);
    carouselItemActive.id = 'carousel-item-active';
    carousel.appendChild(carouselItemActive);
    const  carouselItemLeft = createCarouselItem();
    carouselItemLeft.id = 'item-left';
    carouselItemActive.before(carouselItemLeft);
    carouselItemLeft.id = 'item-left';
    carouselItemActive.before(carouselItemLeft);
    const  carouselItemRight = createCarouselItem();
    carouselItemRight.id = 'item-right';
    carouselItemActive.after(carouselItemRight);

})
function getArrRandomNumber() {
    let newArrNumber = [];
    let randomNumber;
    while(newArrNumber.length <= 2) {
        randomNumber = Math.floor(Math.random() * 8);
        if (newArrNumber.indexOf(randomNumber) === -1) {
            newArrNumber.push(randomNumber);
        }
    }
    return newArrNumber;
}


function createCarouselItem() {
    const carouselItem = document.createElement('ul');
    carouselItem.classList.add('slider__list');
    const arrRandomNumber = getArrRandomNumber();
    carouselItem.appendChild(createSliderItem(arrPetsNames[arrRandomNumber[0]]));
    carouselItem.appendChild(createSliderItem(arrPetsNames[arrRandomNumber[1]]));
    carouselItem.appendChild(createSliderItem(arrPetsNames[arrRandomNumber[2]]));
    return carouselItem;
}
function createSliderItem(name) {
    const sliderItem = document.createElement('li');
    sliderItem.classList.add('slider__item');
    const sliderImageBlock = document.createElement('div');
    sliderImageBlock.classList.add('slider__image-block');
    const sliderImage = document.createElement('img');
    sliderImage.src = `./assets/pets/${name.toLowerCase()}.png`;
    sliderImage.alt = 'pet-photo';
    const sliderTitle = document.createElement('h3');
    sliderTitle.classList.add('slider__title');
    sliderTitle.innerText = name;
    const sliderButton = document.createElement('button');
    sliderButton.classList.add('slider__btn');
    sliderButton.innerText= 'Learn more';
    sliderItem.appendChild(sliderImageBlock);
    sliderItem.appendChild(sliderTitle);
    sliderItem.appendChild(sliderButton);
    sliderImageBlock.appendChild(sliderImage);
    return sliderItem;
}
hamb.addEventListener('click', pressHamb);
function pressHamb(e) {
    popup.classList.toggle('open');
    popup.appendChild(menu);
    hamb.classList.toggle('active');
    body.classList.toggle('noscroll');
    e.stopPropagation();
}
menu.addEventListener('click', pressHamb);
document.addEventListener('click', closeHamb);
function closeHamb() {
    if(popup.classList.contains('open')) {
        popup.classList.remove('open');
        hamb.classList.remove('active');
        body.classList.remove('noscroll');
    }
}
const moveLeft = () => {
    carousel.classList.add("transition-left");
    btnLeft.removeEventListener("click", moveLeft);
    btnRight.removeEventListener("click", moveRight);
  };

const moveRight = () => {
    carousel.classList.add("transition-right");
    btnLeft.removeEventListener("click", moveLeft);
    btnRight.removeEventListener("click", moveRight);
  };
btnLeft.addEventListener("click", moveLeft);
btnRight.addEventListener("click", moveRight);
carousel.addEventListener("animationend", (animationEvent) => {
    let changedItem;
    if (animationEvent.animationName === "move-left") {
        carousel.classList.remove("transition-left");
        document.querySelector("#carousel-item-active").innerHTML = document.querySelector("#item-left").innerHTML;
        document.querySelector("#item-left").innerHTML='';
        let  changedItemLeft = createCarouselItem();
        changedItemLeft.id = 'item-left';
        document.querySelector("#item-left").innerHTML = changedItemLeft.innerHTML;
    } else {
        carousel.classList.remove("transition-right");
        document.querySelector("#carousel-item-active").innerHTML = document.querySelector("#item-right").innerHTML;
        document.querySelector("#item-right").innerHTML='';
        let  changedItemRight = createCarouselItem();
        changedItemRight.id = 'item-right';
        document.querySelector("#item-right").innerHTML = changedItemRight.innerHTML;
    }
    /*changedItem.innerHTML = "";
    for (let i = 0; i < 3; i++) {
      const card = createCarouselItem();
      changedItem.appendChild(card);
    }*/
    btnLeft.addEventListener("click", moveLeft);
    btnRight.addEventListener("click", moveRight);
})