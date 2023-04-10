let pets = [
    {
      "name": "Jennifer",
      "img": "../../assets/images/jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../../assets/images/sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "../../assets/images/woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "../../assets/images/scarlett.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "../../assets/images/katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "../../assets/images/timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "../../assets/images/freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "../../assets/images/charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
]
const hamb = document.querySelector('#hamb');
const popup = document.querySelector('#popup');
const menu = document.querySelector('#menu').cloneNode(1);
const body = document.body;
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
function generateNumber(maxNum) {
    let result = Math.floor(Math.random() * maxNum);
    return result;
}
function fullArr(len) {
    const result = [];
    while(result.length <= (len - 1)) {
        let randomNumber = generateNumber(len);
        if (result.indexOf(randomNumber) === -1) {
            result.push(randomNumber);
        }
    } 
    return result;
}

/*console.log(resultArr);
async function getArrPets() {  
    const pets = `pets.json`;
    const res = await fetch(pets);
    const data = await res.json();
    const arrPets = [];
    while(arrPets.length <= 7) {
        randomNumber = Math.floor(Math.random() * 8);
        if (arrPets.indexOf(data[randomNumber]) === -1) {
            arrPets.push(data[randomNumber]);
        }
    } 
    return arrPets;
}*/
const commonArr = [].concat(fullArr(8)).concat(fullArr(8)).concat(fullArr(8)).concat(fullArr(8)).concat(fullArr(8)).concat(fullArr(8));
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
function createSlider() {
    const carouselItem = document.createElement('ul');
    carouselItem.classList.add('slider__list');
    carouselItem.id = 'slider-list';
    commonArr.forEach((el, index) => {
        carouselItem.appendChild(createSliderItem(pets[el].name))
    })
    return carouselItem;
}
const slider = document.querySelector('#slider');

window.addEventListener('load', (e) => {
    slider.appendChild(createSlider());
})
const moveLeft = () => {
    carousel.classList.add("transition-left");
    btnLeft.removeEventListener("click", moveLeft);
    btnRight.removeEventListener("click", moveRight);
};
const moveRight = () => {
    carousel.classList.add("transition-right");
    btnLeft.removeEventListener("click", moveLeft);
    /*btnRight.removeEventListener("click", moveRight);*/
  };
const btnStart =  document.querySelector('#btn-start');
const btnNum =  document.querySelector('#btn-num');
const btnPrev =  document.querySelector('#btn-prev');
const btnNext =  document.querySelector('#btn-next');
const btnEnd =  document.querySelector('#btn-end');

/*const moveTop = () => {
    const sl = document.querySelector("#slider-list");
    sl.classList.add("transition-top");
    btnNext.removeEventListener("click", moveTop);
    /*btnRight.removeEventListener("click", moveRight);
};
btnNext.addEventListener("click", moveTop);*/
/**--------------pagination */
let currentStep = 0;
const updateBtn = () => {
    if (currentStep === 5) {
      btnEnd.disabled = true;
      btnNext.disabled = true;
    } else if (currentStep === 0) {
      btnStart.disabled = true;
      btnPrev.disabled = true;
    } else {
        btnEnd.disabled = false;
        btnNext.disabled = false;
        btnStart.disabled = false;
        btnPrev.disabled = false;
    }
};
btnNext.addEventListener("click", (e) => {
    currentStep += 1;
    /*btnNum.insertAdjacentText.classList.toggle("active", numIndex === currentStep);*/
    btnNum.innerText = currentStep + 1 ;
    console.log(currentStep);
    const sl = document.querySelector("#slider-list");
    sl.style.top = `-${currentStep*930}px`;
    updateBtn(); // Update the button states
});

btnPrev.addEventListener("click", (e) => {
    currentStep += -1;
    console.log(currentStep);
    btnNum.innerText = currentStep + 1;
    const sl = document.querySelector("#slider-list");
    sl.style.top = `-${(currentStep)*930}px`;
    updateBtn(); // Update the button states
});
btnStart.addEventListener("click", () => {
    currentStep = 0;
    updateBtn(); 
    btnNum.innerText = currentStep + 1;
    btnEnd.disabled = false;
    btnNext.disabled = false;
    const sl = document.querySelector("#slider-list");
    sl.style.top = `0`;
  });
  
  // Add event listener to the "End" button
btnEnd.addEventListener("click", () => {
    
    currentStep = 5;
    updateBtn(); // Update the button states
    btnNum.innerText = currentStep + 1;
    btnStart.disabled = false;
    btnPrev.disabled = false;
    const sl = document.querySelector("#slider-list");
    sl.style.top = `-${(currentStep)*930}px`;
  });
   