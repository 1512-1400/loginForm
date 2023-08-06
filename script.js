////////// selectors //////////
var $ = document;
var arrowsBox = $.querySelector(`.arrowsBox`);
var rightArrow = $.querySelector(`.rightArrow`);
var navigationCirclesBox = $.querySelector(`.navigationCirclesBox`);
var navigationCircle = $.querySelectorAll(`.navigationCircle`);
var title = $.querySelector(`.title`);
var description = $.querySelector(`.description`);
var rightImg = $.querySelector(`.rightImg`);
var leftCenterBox1 = $.querySelector(`.leftCenterBox1`);
var leftCenterBox2 = $.querySelector(`.leftCenterBox2`);
var leftCenterBox3 = $.querySelector(`.leftCenterBox3`);
var signInText = $.querySelector(`.signInText`);
var SignUpClick = $.querySelector(`.SignUpClick`);
var ForgotPasswordClick = $.querySelector(`.ForgotPasswordClick`);
var BackToLoginBtn = $.querySelector(`.BackToLoginBtn`);
var btn1 = $.querySelector(`.btn1`);
var leftCenterBox = $.querySelectorAll(`.leftCenterBox`);
var passwordInput = $.querySelectorAll(`.passwordEror`);
var erorText = $.querySelectorAll(`.erorText`);
var i = 0;
////////// selectors //////////

////////// Arrays //////////
var rightBottomTextes = [
  {
    id: 1,
    title: `Meet Our Visual Builder`,
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia dolorem vel earum, id atque iste magnam quos!`,
  },
  {
    id: 2,
    title: `Meet Our Contorol Hub`,
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia dolorem vel earum, id atque iste magnam quos!`,
  },
  {
    id: 3,
    title: `Meet Our Exchange Hub`,
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia dolorem vel earum, id atque iste magnam quos!`,
  },
];
var uperCase = `Q W E R T Y U I O P L K J H G F D S A Z X C V B N M`
var lowerCase = `q w e r t y u i o p l k j h g f d s a z x c v b n m`
var numbers = `1 2 3 4 5 6 7 8 9 0`
////////// Arrays //////////

////////// onload event //////////
window.addEventListener(`load`, () => {
  title.innerHTML = rightBottomTextes[0].title;
  description.innerHTML = rightBottomTextes[0].description;
  navigationCircle.forEach((icon) => {
    icon.style.backgroundColor = `rgb(88 88 88)`;
  });
  navigationCircle[0].style.backgroundColor = `rgb(255 255 255)`;
});
////////// onload event //////////

////////// right box fading function //////////
function fadeOut(){
  title.style.animation = `fadeOut 1s`;
  description.style.animation = `fadeOut 1s`;
  rightImg.style.animation = `fadeOut 1s`;
  leftCenterBox1.style.animation = `fadeOut 1s`;
  leftCenterBox2.style.animation = `fadeOut 1s`;
  leftCenterBox3.style.animation = `fadeOut 1s`;
}
function fadein(){
  title.style.animation = `fadeIn 1s`;
  description.style.animation = `fadeIn 1s`;
  rightImg.style.animation = `fadeIn 1s`;
  leftCenterBox1.style.animation = `fadeIn 1s`;
  leftCenterBox2.style.animation = `fadeIn 1s`;
  leftCenterBox3.style.animation = `fadeIn 1s`;
  setTimeout(() => {
    title.style.animation = ``;
    description.style.animation = ``;
    rightImg.style.animation = ``;
    leftCenterBox1.style.animation = ``;
    leftCenterBox2.style.animation = ``;
    leftCenterBox3.style.animation = ``;
  }, 500);
}
////////// right box fading function //////////

////////// navigation circles working //////////
navigationCircle.forEach((item) => {
  item.addEventListener(`click`, (click) => {
    fadeOut()
    title.innerHTML = rightBottomTextes[item.id].title;
    description.innerHTML = rightBottomTextes[item.id].description;
    i = item.id;
    leftCenterBox1.style.display = `none`;
    leftCenterBox2.style.display = `none`;
    leftCenterBox3.style.display = `none`;
    leftCenterBox[item.id].style.display = `flex`
    fadein()
    navigationCircle.forEach((icon) => {
      icon.style.backgroundColor = `rgb(88 88 88)`;
    });
    click.target.style.backgroundColor = `rgb(255 255 255)`;
  });
});
////////// navigation circles working //////////

////////// left and right arrow working //////////
var leftArrow = arrowsBox.firstElementChild;
var rightArrow = arrowsBox.lastElementChild;
leftArrow.addEventListener(`click`, () => {
  if (i > 0) {
    i--;
  } else {
    i = 2;
  }
  fadeOut()
  title.innerHTML = rightBottomTextes[i].title;
  description.innerHTML = rightBottomTextes[i].description;
  leftCenterBox1.style.display = `none`;
  leftCenterBox2.style.display = `none`;
  leftCenterBox3.style.display = `none`;
  leftCenterBox[i].style.display = `flex`
  fadein()
  navigationCircle.forEach((icon) => {
    icon.style.backgroundColor = `rgb(88 88 88)`;
  });
  navigationCircle[i].style.backgroundColor = `rgb(255 255 255)`;
});

rightArrow.addEventListener(`click`, () => {
  if (i < 2) {
    i++;
  } else {
    i = 0;
  }
  fadeOut()
  title.innerHTML = rightBottomTextes[i].title;
  description.innerHTML = rightBottomTextes[i].description;
  leftCenterBox1.style.display = `none`;
  leftCenterBox2.style.display = `none`;
  leftCenterBox3.style.display = `none`;
  leftCenterBox[i].style.display = `flex`
  fadein()
  navigationCircle.forEach((icon) => {
    icon.style.backgroundColor = `rgb(88 88 88)`;
  });
  navigationCircle[i].style.backgroundColor = `rgb(255 255 255)`;
});
////////// left and right arrow working //////////

////////// sign up btn //////////
function signUpClicking(){
  fadeOut();
  leftCenterBox1.style.display = `none`;
  leftCenterBox2.style.display = `flex`;
  leftCenterBox3.style.display = `none`;
  title.innerHTML = rightBottomTextes[1].title;
  description.innerHTML = rightBottomTextes[1].description;
  navigationCircle.forEach((icon) => {
    icon.style.backgroundColor = `rgb(88 88 88)`;
  });
  navigationCircle[1].style.backgroundColor = `rgb(255 255 255)`;
  i = 1;
  fadein();
}
SignUpClick.addEventListener(`click`, signUpClicking);
////////// sign up btn //////////

////////// sign in btn //////////
function signInClicking(){
  fadeOut();
  leftCenterBox1.style.display = `flex`;
  leftCenterBox2.style.display = `none`;
  leftCenterBox3.style.display = `none`;
  title.innerHTML = rightBottomTextes[0].title;
  description.innerHTML = rightBottomTextes[0].description;
  navigationCircle.forEach((icon) => {
    icon.style.backgroundColor = `rgb(88 88 88)`;
  });
  navigationCircle[0].style.backgroundColor = `rgb(255 255 255)`;
  i = 0;
  fadein();
}
signInText.addEventListener(`click`, signInClicking);
////////// sign in btn //////////

////////// forgot password btn //////////
function forgotClicking(){
  fadeOut();
  leftCenterBox1.style.display = `none`;
  leftCenterBox2.style.display = `none`;
  leftCenterBox3.style.display = `flex`;
  title.innerHTML = rightBottomTextes[2].title;
  description.innerHTML = rightBottomTextes[2].description;
  navigationCircle.forEach((icon) => {
    icon.style.backgroundColor = `rgb(88 88 88)`;
  });
  navigationCircle[2].style.backgroundColor = `rgb(255 255 255)`;
  i = 2;
  fadein();
}
ForgotPasswordClick.addEventListener(`click`, forgotClicking);
////////// forgot password btn //////////

////////// BackToLogin btn //////////
function BackToLoginClicking(){
  fadeOut();
  leftCenterBox1.style.display = `flex`;
  leftCenterBox2.style.display = `none`;
  leftCenterBox3.style.display = `none`;
  title.innerHTML = rightBottomTextes[0].title;
  description.innerHTML = rightBottomTextes[0].description;
  navigationCircle.forEach((icon) => {
    icon.style.backgroundColor = `rgb(88 88 88)`;
  });
  navigationCircle[0].style.backgroundColor = `rgb(255 255 255)`;
  i = 0;
  fadein();
}
BackToLoginBtn.addEventListener(`click`, BackToLoginClicking);
////////// BackToLogin btn //////////

////////// password input //////////
  passwordInput.forEach(item=>{
    item.addEventListener(`blur`, ()=>{
      checkPassArray = item.value.split(``);
      checkPassUperCaseFlag = checkPassArray.some(one=>{
        return uperCase.includes(one);
      });
      checkPassLowerCaseFlag = checkPassArray.some(one=>{
        return lowerCase.includes(one);
      })
      checkPassNuberFlag = checkPassArray.some(one=>{
        return numbers.includes(one);
      })
      if(!checkPassUperCaseFlag || !checkPassLowerCaseFlag || !checkPassNuberFlag || item.value.length < 8){
        erorText.forEach(text=>{
          text.style.display =`block`;
        })
      }
    })
    btn1.addEventListener(`click`,()=>{
      checkPassArray = item.value.split(``);
      checkPassUperCaseFlag = checkPassArray.some(one=>{
        return uperCase.includes(one);
      });
      checkPassLowerCaseFlag = checkPassArray.some(one=>{
        return lowerCase.includes(one);
      })
      checkPassNuberFlag = checkPassArray.some(one=>{
        return numbers.includes(one);
      })
      if(!checkPassUperCaseFlag || !checkPassLowerCaseFlag || !checkPassNuberFlag || item.value.length < 8){
        erorText.forEach(text=>{
          text.style.display =`block`;
        })
      }
    
    })
    })
////////// password input //////////
