class ActionLabelText {
  constructor(obj) {
    this._actionLabelText = obj.text;
    this._actionLabelTextStyle = obj.style;
  }
  get actionLabelText() {
    return this._actionLabelText;
  }
  set actionLabelText(text) {
    this._actionLabelText = text;
  }

  get actionLabelTextStyle() {
    return this._actionLabelTextStyle;
  }
  set actionLabelTextStyle(obj) {
    this._actionLabelTextStyle = obj;
  }
}

const actionLabelTextVariant1 = new ActionLabelText({
  text: "",
  style: {
    top: "-65%",
    left: "25%",
    position: "relative",
    "font-family":
      '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif',
    "font-style": "italic",
    "font-weight": "800",
    "font-size": "30px",
    color: "rgb(232, 232, 14)",
  },
});

module.exports = {
  actionLabelTextVariant1: actionLabelTextVariant1,
};
