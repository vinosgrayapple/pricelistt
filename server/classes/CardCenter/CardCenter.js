const { actionLabelVariant1 } = require("./ActionLabel");
const { productBoardVariant1 } = require("./ProductBoard");
const { productImageVariant1 } = require("./ProductImage");

class CardCenter {
  constructor(obj) {
    this._productImage = obj.productImageObj;//class ProductImage object
    this._productBoard = obj.productBoardObj;//class ProductBoard object
    this._actionLabel = obj.actionLabelObj;//class ActionLabel object
    this._cardCenterStyle = obj.style;
  }
}

console.log(actionLabelVariant1);
