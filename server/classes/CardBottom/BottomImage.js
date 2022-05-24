class BottomImage {
  constructor(obj) {
    this._bottomImageSrc = obj.bottomImageSrc;
    this._bottomImageStyle = obj.style;
  }
  get bottomImageSrc() {
    return this._bottomImageSrc;
  }
  set bottomImageSrc(imgFile) {
    this._bottomImageSrc = imgFile;
  }

  get bottomImageStyle() {
    return this._bottomImageStyle;
  }
  set bottomImageStyle(obj) {
    this._bottomImageStyle = obj;
  }
}

const bottomImageVariant1 = new BottomImage({
  imgFile: "pictures/Bottom1.png",
  style: {
    "width": "104%",
    "background-color": "transparent",
    "position": "relative",
    "top": "73%",
    "left": "0%",
  },
});
module.exports = { bottomImageVariant1: bottomImageVariant1 };
