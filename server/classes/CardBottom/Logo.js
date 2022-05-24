class Logo {
    constructor(obj) {
      this._logoSrc = obj.logoSrc;
      this._logoStyle = obj.style;
    }
    get logoSrc() {
      return this._logoSrc;
    }
    set logoSrc(imgFile) {
      this._logoSrc = imgFile;
    }
  
    get logoStyle() {
      return this._logoStyle;
    }
    set logoStyle(obj) {
      this._logoStyle = obj;
    }
  }
  
  const logoVariant1 = new Logo({
    imgFile: "pictures/Logo1.png",
    style: {
        "position": "relative",
        "height": "60%",
        "left": "-40%",
        "top": "-25%",
    },
  });
  module.exports = { logoVariant1: logoVariant1 };
  