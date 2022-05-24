class TitleText {
  constructor(obj) {
    this._titleText = obj.text;
    this._titleTextStyle = obj.style;
  }
  get titleText() {
    return this._titleText;
  }
  set titleText(text) {
    this._titleText = text;
  }

  get titleTextStyle() {
    return this._titleTextStyle;
  }
  set titleTextStyle(obj) {
    this._titleTextStyle = obj;
  }
}

const titleTextVariant1 = new TitleText({
  text: "",
  style: {
    position: "relative",
    top: -"75px",
    "font-family": "cursive",
    "letter-spacing": "4px",
    "font-style": "italic",
    "font-weight": "800",
    "font-size": "30px",
    color: "rgb(235, 15, 195)",
  },
});

module.exports = { titleTextVariant1: titleTextVariant1 };
