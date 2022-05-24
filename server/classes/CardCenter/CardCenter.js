const { actionLabelVariant1 } = require("./ActionLabel");
const { productBoardVariant1 } = require("./ProductBoard");
const { productImageVariant1 } = require("./ProductImage");

class CardCenter {
  constructor(obj) {
    this._productImage = obj.productImageObj; //class ProductImage object
    this._productBoard = obj.productBoardObj; //class ProductBoard object
    this._actionLabel = obj.actionLabelObj; //class ActionLabel object
    this._cardCenterStyle = obj.style;
  }

  get cardCenterStyle() {
    return this._cardCenterStyle;
  }

  set cardCenterStyle(obj) {
    this._cardCenterStyle = obj;
  }
}

const cardCenterVariant1 = new 
CardCenter({
  productImageObj: productImageVariant1,
  productBoardObj: productBoardVariant1,
  actionLabelObj: actionLabelVariant1,
  style: {
    display: "flex",
    "flex-direction": "column",
    "background-color": "transparent",
    "justify-content": "space-between",
  },
});

module.exports = {
  cardCenterVariant1: cardCenterVariant1,
};
