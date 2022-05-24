const { titleTextVariant1 } = require("./TitleText");
const { titleImageVariant1 } = require("./TitleImage");

class CardTitle {
  constructor(obj) {
    this.titleText = obj.titleTextObj; //class TitltText object
    this.titleImage = obj.titleImageObj; //class TitltImage object
    this._cardTitleStyle = obj.style;
  }

  get cardTitleStyle() {
    return this._cardTitleStyle;
  }

  set cardTitleStyle(obj) {
    this._cardTitleStyle = obj;
  }
}

const cardTitleVariant1 = new CardTitle({
  titleTextObj: titleTextVariant1,
  titleImageObj: titleImageVariant1,
  style: {
    height: "20%",
    width: "100%",
    display: "flex",
    "flex-direction": "column",
    "justify-content": "center",
    "align-items": "center",
  },
});

module.exports = {
  cardTitleVariant1: cardTitleVariant1,
};
