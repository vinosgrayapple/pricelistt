const { actionLabelTextVariant1 } = require("../CardCenter/ActionLabelText");
const { actionLabelImageVariant1 } = require("./ActionLabelImage");

class ActionLabel {
  constructor(obj) {
    this._labelText = obj.labelTextObj; //class ActionLabelText object
    this._labelImage = obj.labelImageObj; //class ActionLabelImage object
    this._actionLabelStile = obj.style;
  }

  get actionLabelStile() {
    return this._actionLabelStile;
  }
  set actionLabelStile(obj) {
    this._actionLabelStile = obj;
  }
}

const actionLabelVariant1 = new ActionLabel({
  labelTextObj: actionLabelTextVariant1,
  labelImageObj: actionLabelImageVariant1,
  style: {
    display: "flex",
    "flex-direction": "column",
    height: "40%",
    top: "50%",
    left: " -20%",
    "justify-content": "space-between",
    position: "relative",
    "background-color": "transparent",
  },
});

module.exports = {
  actionLabelVariant1: actionLabelVariant1,
};
