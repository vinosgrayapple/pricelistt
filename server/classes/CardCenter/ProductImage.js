class ProductImage {
  constructor(obj) {
    this._productImageSrc = obj.productImageSrc;
    this._productImageStyle = obj.style;
  }
  get productImageSrc() {
    return this._productImageSrc;
  }
  set productImageSrc(imgFile) {
    this._productImageSrc = imgFile;
  }

  get productImageStyle() {
    return this._productImageStyle;
  }
  set productImageStyle(obj) {
    this._productImageStyle = obj;
  }
}

const productImageVariant1 = new ProductImage({
  productImageSrc: "pictures/ice_cream1.png",
  style: {
    "padding-top": "15px",
    width: "100%",
    "background-color": "transparent",
    position: "relative",
  },
});
module.exports = { productImageVariant1: productImageVariant1 };
