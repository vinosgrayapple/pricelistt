class OldPrice {
  constructor(obj) {
    this._oldPrice = obj.text;
    this._oldPriceStyle = obj.style;
  }
  get oldPrice() {
    return this._oldPrice;
  }
  set oldPrice(text) {
    this._oldPrice = text;
  }

  get oldPriceStyle() {
    return this._oldPriceStyle;
  }
  set oldPriceStyle(obj) {
    this._oldPriceStyle = obj;
  }
}

const oldPriceVariant1 = new OldPrice({
  text: "",
  style: {},
});

module.exports = {
  oldPriceVariant1: oldPriceVariant1,
};
