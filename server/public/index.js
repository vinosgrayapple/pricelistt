const wraperElem = document.querySelector(".wraper");
const cardElem = document.querySelector(".card");
const cardTitleElem = document.querySelector(".cardTitle");
const titleImageElem = document.querySelector(".titleImage");
const titleTextElem = document.querySelector(".titleText");
const cardCenterElem = document.querySelector(".cardCenter");
const productImageElem = document.querySelector(".productImage");
const labelElem = document.querySelector(".label");
const labelImageElem = document.querySelector(".labelImage");
const labelTextElem = document.querySelector(".labelText");
const descriptionFieldElem = document.querySelector(".descriptionField");
const productNameTextElem = document.querySelector(".productNameText");
const productDescriptionTextElem = document.querySelector(
  ".productDescriptionText"
);
const currentPriceElem = document.querySelector(".currentPrice");
const oldPriceElem = document.querySelector(".oldPrice");
const cardBottomElem = document.querySelector(".cardBottom");
const bottomImageElem = document.querySelector(".bottomImage");
const bottomTextElem = document.querySelector(".bottomText");
const bottomLogoElem = document.querySelector(".bottomLogo");
const btnElem = document.querySelector(".btn");

const updateStile = (elem, loadedStyle) => {
  
  const keyArr = Object.keys(loadedStyle);
  const camelCasedKeyArr = keyArr.map((el) => {
    do {
      const index = el.indexOf("-");
      if (index > 0) {
        const replasedFragment = el[index] + el[index + 1];
        const newChar = el[index + 1].toUpperCase();
        el = el.replace(replasedFragment, newChar);
      }
    } while (el.indexOf("-") > 0);
    return el
  });

  camelCasedKeyArr.forEach((el,index)=>{
    elem.style[el]=loadedStyle[keyArr[index]]
  })
  
};

const updateCard = async (data) => {
  const url = "http://127.0.0.1:7000/";

  titleImageElem.src = url + data.titleImage;
  titleTextElem.innerHTML = data.titleText;
  productImageElem.src = url + data.productImage;
  labelImageElem.src = url + data.labelImage;
  labelTextElem.innerHTML = data.labelText;

  productNameTextElem.innerHTML = data.productNameText;
  productDescriptionTextElem.innerHTML = data.productDescriptionText;
  currentPriceElem.innerHTML = data.currentPrice;
  oldPriceElem.innerHTML = data.oldPrice;
  bottomImageElem.src = url + data.bottomImage;
  bottomTextElem.innerHTML = data.bottomText;
  bottomLogoElem.src = url + data.bottomLogo;
  updateStile(cardElem, data.card.style);
};
const startAnimation = () => {
  movingIn();
  setTimeout(movingOut, 5000);
};

const getDataFromServer = async (
  url,
  method = "GET",
  body = null,
  headers = {}
) => {
  try {
    headers["Content-Type"] = "application/json";
    const data = await fetch(url, { method, body, headers }).then((res) => {
      return res.json();
    }); //.then(data=>console.log(data));
    await updateCard(data);
  } catch (err) {
    console.log(err);
  }
};

const movingIn = () => {
  anime({
    targets: cardTitleElem,
    translateY: [-500, 0],
    autopay: false,
    duration: 1000,
  });

  anime({
    targets: productImageElem,
    translateX: [600, 0],
    autopay: false,
    duration: 800,
    easing: "linear",
    delay: 1000,
  });

  anime({
    targets: labelElem,
    scale: [0, 1],
    rotate: 340,
    duration: 3000,
    autopay: false,
    delay: 3000,
  });

  anime({
    targets: productNameTextElem,
    translateX: [-800, 0],
    autopay: false,
    duration: 1000,
    easing: "linear",
    delay: 1000,
  });

  anime({
    targets: productDescriptionTextElem,
    translateX: [600, 0],
    autopay: false,
    duration: 1000,
    delay: 2300,
  });

  anime({
    targets: currentPriceElem,
    translateX: [1000, 0],
    autopay: false,
    duration: 1000,
    delay: 2000,
  });

  anime({
    targets: oldPriceElem,
    translateX: [1000, 0],
    autopay: false,
    duration: 1000,
    // easing:'linear',
    delay: 2300,
  });

  anime({
    targets: cardBottomElem,
    translateY: [200, 0],
    autopay: false,
    duration: 500,
    easing: "linear",
  });
};
const movingOut = () => {
  anime({
    targets: cardTitleElem,
    translateY: [0, -500],
    autopay: false,
    duration: 1000,
    delay: 4000,
  });

  anime({
    targets: productImageElem,
    translateX: [0, 600],
    autopay: false,
    duration: 800,
    easing: "linear",
    delay: 3000,
  });

  anime({
    targets: labelElem,
    scale: [1, 0],
    rotate: 340,
    duration: 2000,
    autopay: false,
    delay: 4000,
  });

  anime({
    targets: productNameTextElem,
    translateX: [0, -800],
    autopay: false,
    duration: 1000,
    easing: "linear",
    delay: 3000,
  });

  anime({
    targets: productDescriptionTextElem,
    translateX: [0, 600],
    autopay: false,
    duration: 1000,
    delay: 700,
  });

  anime({
    targets: currentPriceElem,
    translateX: [0, 1000],
    autopay: false,
    duration: 1000,
    delay: 2700,
  });

  anime({
    targets: oldPriceElem,
    translateX: [0, 1000],
    autopay: false,
    duration: 500,
    // easing:'linear',
    delay: 700,
  });

  anime({
    targets: cardBottomElem,
    translateY: [0, 200],
    autopay: false,
    duration: 500,
    easing: "linear",
    delay: 4000,
  });
};
// document.addEventListener("DOMContentLoaded", () => {
//   startAnimation();
// });

getDataFromServer("http://127.0.0.1:7000/page/1");
