class ProductDescription {
  constructor(obj) {
    this._productDescription = obj.text;
    this._productDescriptionStyle = obj.style;
  }
  get productDescription() {
    return this._productDescription;
  }
  set productDescription(text) {
    this._productDescription = text;
  }

  get productDescriptionStyle() {
    return this._productDescriptionStyle;
  }
  set productDescriptionStyle(obj) {
    this._productDescriptionStyle = obj;
  }
}

const productDescriptionVariant1 = ProductDescription({
  text: "",
  style: {
    position: "relative",
    left: "-20%",
    "font-family":
      '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif',
    "font-style": "italic",
    "font-weight": "800",
    "font-size": "25px",
    color: "black",
  },
});

module.exports = {
  productDescriptionVariant1: productDescriptionVariant1,
};
