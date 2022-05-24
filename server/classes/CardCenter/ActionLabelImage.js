class ActionLabelImage {
  constructor(obj) {
    this._actionLabelImage = obj.src;
    this._actionLabelImageStyle = obj.style;
  }
  get actionLabelImage() {
    return this._actionLabelImage;
  }
  set actionLabelImage(Image) {
    this._actionLabelImage = Image;
  }

  get actionLabelImageStyle() {
    return this._actionLabelImageStyle;
  }
  set actionLabelImageStyle(obj) {
    this._actionLabelImageStyle = obj;
  }
}

const actionLabelImageVariant1 = new ActionLabelImage({
  src: "pictures/Label1.png",
  style: {
    height: "100%",
    position: "relative",
  },
});

module.exports = {
  actionLabelImageVariant1: actionLabelImageVariant1,
};
