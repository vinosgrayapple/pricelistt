class TitleImage {
  constructor(obj) {
    this._titleImageSrc = obj.imgFile;
    this._titleImageStyle = obj.style;
  }
  get titleImageSrc() {
    return this._titleImageSrc;
  }
  set titleImageSrc(imgFile) {
    this._titleImageSrc = imgFile;
  }

  get titleImageStyle() {
    return this._titleImageStyle;
  }
  set titleImageStyle(obj) {
    this._titleImageStyle = obj;
  }
}

const titleImageVariant1 = new TitleImage({
  imgFile: "pictures/Title1.png",
  style: {
    "padding-top": "15px",
    width: "100%",
    "background-color": "transparent",
    position: "relative",
  },
});
module.exports = { titleImageVariant1: titleImageVariant1 };
