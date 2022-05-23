const wraperElem = document.querySelector(".wraper");
const cardElem = document.querySelector(".card");
const cardTitleElem = document.querySelector(".cardTitle");
// const titleImageElem  = document.querySelector('.titleImage')
const titleTextElem = document.querySelector(".titleText");
// const cardCenterElem  = document.querySelector('.cardCenter')
const productImageElem = document.querySelector(".productImage");
const labelElem = document.querySelector(".label");
// const labelImageElem  = document.querySelector('.labelImage')
// const labelTextElem  = document.querySelector('.labelText')
const descriptionFieldElem = document.querySelector(".descriptionField");
const productNameTextElem = document.querySelector(".productNameText");
const productDescriptionTextElem = document.querySelector(
  ".productDescriptionText"
);
const currentPriceElem = document.querySelector(".currentPrice");
const oldPriceElem = document.querySelector(".oldPrice");
const cardBottomElem = document.querySelector(".cardBottom");
// const bottomImageElem  = document.querySelector('.bottomImage')
const bottomTextElem  = document.querySelector('.bottomText')

const btnElem = document.querySelector(".btn");


const getDataFromServer = async(URL)=>{
  try {
    const data = await fetch ()
  }catch(err){
    console.log(err.message)
  }
}

bottomTextElem.innerHTML="сть блок, ширина в нем установлена 300px. Помещаемый в него текст вытягивается в одну строчку и выходит далеко за границы блока. Как перенести текст по словам таким, образом, чтобы он не выходил за правую границу блока? Пробовалось word-wrap, overflow-wrap со значением break-word - не помогло."
const startAnimation = () => {
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
   scale:[0,1],
   rotate: 340,
   duration:3000,
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
startAnimation();
