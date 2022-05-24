const { cardBottomVariant1 } = require("./CardBottom/CardBottoom");
const { cardCenterVariant1 } = require("./CardCenter/CardCenter");
const { cardTitleVariant1 } = require("./CardTitle/CardTitle");

class ComplitedCard {
  constructor(obj) {
    this._cardBottom = obj.cardBottomObj;
    this._cardCenter = obj.cardCenterObj;
    this._cardTitle = obj.cardTitleObj;
    this._cardStyle = obj.style;
  }
  get cardStyle() {
    return this._cardStyle;
  }
  set cardStyle(obj) {
    this._cardStyle = obj;
  }
  get cardTitle() {
    return this._cardTitle;
  }

  set cardTitle(obj) {
    this._cardTitle = obj;
  }
}

const copmlitedCardVariant1 = new ComplitedCard({
  cardBottomObj: cardBottomVariant1,
  cardCenterObj: cardCenterVariant1,
  cardTitleObj: cardTitleVariant1,
  style: {
    overflow: "hidden",
    display: "flex",
    "flex-direction": "column",
    "margin-top": "25px",
    width: "600px",
    height: "600px",
    "background-color": "transparent",
    padding: "5px 10px 10px 5px",
    "border-radius": "10px",
    "box-shadow": "5px 5px 15px rgb(128, 128, 128)",
    "border-style": "5px",
  },
});

module.exports = {
  copmlitedCardVariant1: copmlitedCardVariant1,
};
