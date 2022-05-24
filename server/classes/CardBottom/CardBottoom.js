const { bottomImageVariant1 } = require("./BottomImage");
const { bottomTextVariant1 } = require("./BottomText");
const { logoVariant1 } = require("./Logo");

class CardBottom {
  constructor(obj) {
    this._bottomImage = obj.bottomImage; //class BottomImage object
    this._bottomText = obj.bottomText; //class BottomText object
    this._logo = obj.logo; //class Logo object
    this._cardBottomStyle = obj.style;
  }
  get cardBottomStyle() {
    return this._cardBottomStyle;
  }
  set cardBottomStyle(obj) {
    this._cardBottomStyle = obj;
  }
}

const cardBottomVariant1 = new CardBottom({
    bottomImage:bottomImageVariant1,
    bottomText:bottomTextVariant1,
    logo:logoVariant1,
    style:{
        "height": "20%",
        "display": "flex",
        "flex-direction": "column",
        "justify-content": "center",
        "align-items": "center",
    }
})

module.exports= {
    cardBottomVariant1:cardBottomVariant1
}