class CurrentPrice {
  constructor(obj) {
    this._currentPrice = obj.text;
    this._currentPriceStyle = obj.style;
  }
  get currentPrice() {
    return this._currentPrice;
  }
  set currentPrice(text) {
    this._currentPrice = text;
  }

  get currentPriceStyle() {
    return this._currentPriceStyle;
  }
  set currentPriceStyle(obj) {
    this._currentPriceStyle = obj;
  }
}

const currentPriceVariant1 = new CurrentPrice({
  text: "",
  style: {
    position: "relative",
    left: "-20%",
    "font-family":
      '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif',
    "font-style": "italic",
    "font-weight": "800",
    "font-size": "60px",
    color: "rgb(28, 77, 183)",
  },
});

module.exports = {
  currentPriceVariant1: currentPriceVariant1,
};
