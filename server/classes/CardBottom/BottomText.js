class BottomText {
  constructor(obj) {
    this._bottomText = obj.bottomText;
    this._bottomTextStyle = obj.style;
  }
  get bottomText() {
    return this._bottomText;
  }
  set bottomText(imgFile) {
    this._bottomText = imgFile;
  }

  get bottomTextStyle() {
    return this._bottomTextStyle;
  }
  set bottomTextStyle(obj) {
    this._bottomTextStyle = obj;
  }
}

const bottomTextVariant1 = new BottomText({
  bottomText: "",
  style: {
    position: "relative",
    top: "-80%",
    left: "10%",
    width: "75%",
    "font-family":
      '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif',
    "font-style": "italic",
    "font-weight": "100",
    "font-size": "15px",
    color: "rgb(0, 0, 0)",
    "text-align": "justify",
  },
});
module.exports = { bottomTextVariant1: bottomTextVariant1 };
