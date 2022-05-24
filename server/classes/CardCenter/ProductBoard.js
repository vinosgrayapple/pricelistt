const { currentPriceVariant1 } = require("./CurrentPrice");
const { oldPriceVariant1 } = require("./OldPrice");
const { productNameVariant1 } = require("./ProductName");
const { productDescriptionVariant1 } = require("./ProductDescription");

class ProductBoard {
  constructor(obj) {
    this._productName = obj.nameObj; // class ProductName object
    this._productDescription = obj.descriptionObj; //// class ProductDescription object
    this._currentPrice = obj.currentPriceObj; //// class CurrentPrice object
    this._oldPrice = obj.oldPriceObj; //// class OldPrice object
    this._productBoardStyle = obj.style;
  }

  get productBoardStyle() {
    return this._productBoardStyle;
  }

  set productBoardStyle(obj) {
    this._productBoardStyle = obj;
  }
}

const productBoardVariant1 = new ProductBoard({
  nameObj: productNameVariant1,
  descriptionObj: productDescriptionVariant1,
  currentPriceObj: currentPriceVariant1,
  oldPriceObj: oldPriceVariant1,
  style: {
    display: "flex",
    "flex-direction": "column",
    "background-color": "transparent",
    "justify-content": "space-between",
  },
});

module.exports = {
  productBoardVariant1: productBoardVariant1,
};
