class ProductName {
  constructor(obj) {
    this._productName = obj.text;
    this._productNameStyle = obj.style;
  }
  get productName() {
    return this._productName;
  }
  set productName(text) {
    this._productName = text;
  }

  get productNameStyle() {
    return this._productNameStyle;
  }
  set productNameStyle(obj) {
    this._productNameStyle = obj;
  }
}

const productNameVariant1 = new ProductName({
  text: "",
  style: {
    position: "relative",
    left: "-20%",
    "font-family":
      '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif',
    "font-style": "italic",
    "font-weight": "800",
    "font-size": "45px",
    color: "rgb(0, 0, 0)",
  },
});

module.exports = {
  productNameVariant1: productNameVariant1,
};
