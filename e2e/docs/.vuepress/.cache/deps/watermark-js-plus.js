// ../node_modules/.pnpm/watermark-js-plus@1.5.1/node_modules/watermark-js-plus/dist/index.esm.js
function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;
  if (typeof document === "undefined") {
    return;
  }
  var head = document.head || document.getElementsByTagName("head")[0];
  var style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}
var css_248z = "@keyframes watermark{0%{background-position:0 0}25%{background-position:100% 100%}50%{background-position:0 0}75%{background-position:100% -100%}to{background-position:0 0}}";
styleInject(css_248z);
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return { value: op[1], done: false };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
var convertImage = function(canvas) {
  return canvas.toDataURL("image/png", 1);
};
var isFunction = function(value) {
  return typeof value === "function";
};
var isUndefined = function(value) {
  return value === void 0;
};
var isString = function(value) {
  return typeof value === "string";
};
var createSVGElement = function(tagName, attrs, namespaceURI) {
  if (attrs === void 0) {
    attrs = {};
  }
  if (namespaceURI === void 0) {
    namespaceURI = "http://www.w3.org/2000/svg";
  }
  var element = document.createElementNS(namespaceURI, tagName);
  for (var attr in attrs) {
    element.setAttribute(attr, attrs[attr]);
  }
  return element;
};
var getMultiLineData = function(ctx, text, maxWidth) {
  var result = [];
  var str = "";
  for (var i = 0, len = text.length; i < len; i++) {
    str += text.charAt(i);
    if (ctx.measureText(str).width > maxWidth) {
      result.push(str.substring(0, str.length - 1));
      str = "";
      i--;
    }
  }
  result.push(str);
  return result;
};
var createCustomContentSVG = function(ctx, options) {
  return __awaiter(void 0, void 0, void 0, function() {
    var svgElement, bodyElement, _a, offsetHeight, offsetWidth, width, height, foreignObjectElement;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          svgElement = createSVGElement("svg", {
            xmlns: "http://www.w3.org/2000/svg"
          });
          bodyElement = document.createElement("div");
          bodyElement.setAttribute("xmlns", "http://www.w3.org/1999/xhtml");
          bodyElement.style.cssText = "\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  font: ".concat(ctx.font, ";\n  color: ").concat(options.fontColor, ";\n");
          bodyElement.innerHTML = "<div class='rich-text-content'>".concat(options.content, "</div>");
          document.body.appendChild(bodyElement);
          return [4, convertImgToBase64(bodyElement)];
        case 1:
          _b.sent();
          _a = bodyElement.querySelector(".rich-text-content"), offsetHeight = _a.offsetHeight, offsetWidth = _a.offsetWidth;
          document.body.removeChild(bodyElement);
          width = options.richTextWidth || offsetWidth || options.width;
          height = options.richTextHeight || offsetHeight || options.height;
          svgElement.setAttribute("width", width.toString());
          svgElement.setAttribute("height", height.toString());
          foreignObjectElement = createSVGElement("foreignObject", {
            width: width.toString(),
            height: height.toString()
          });
          foreignObjectElement.appendChild(bodyElement);
          svgElement.appendChild(foreignObjectElement);
          return [2, {
            element: svgElement,
            width,
            height
          }];
      }
    });
  });
};
function convertImgToBase64(bodyElement) {
  return __awaiter(this, void 0, void 0, function() {
    var imgElements, _loop_1, _i, _a, img;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          imgElements = bodyElement.querySelectorAll("img");
          _loop_1 = function(img2) {
            var src, response, blob_1, imgData, error_1;
            return __generator(this, function(_c) {
              switch (_c.label) {
                case 0:
                  src = img2.getAttribute("src");
                  if (!src) return [3, 6];
                  _c.label = 1;
                case 1:
                  _c.trys.push([1, 5, , 6]);
                  return [4, fetch(src)];
                case 2:
                  response = _c.sent();
                  return [4, response.blob()];
                case 3:
                  blob_1 = _c.sent();
                  return [4, new Promise(function(resolve, reject) {
                    var reader = new FileReader();
                    reader.onloadend = function() {
                      return resolve(reader.result);
                    };
                    reader.onerror = reject;
                    reader.readAsDataURL(blob_1);
                  })];
                case 4:
                  imgData = _c.sent();
                  if (isString(imgData)) {
                    img2.setAttribute("src", imgData);
                  }
                  return [3, 6];
                case 5:
                  error_1 = _c.sent();
                  console.error("Error converting ".concat(src, " to base64:"), error_1);
                  return [3, 6];
                case 6:
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          };
          _i = 0, _a = Array.from(imgElements);
          _b.label = 1;
        case 1:
          if (!(_i < _a.length)) return [3, 4];
          img = _a[_i];
          return [5, _loop_1(img)];
        case 2:
          _b.sent();
          _b.label = 3;
        case 3:
          _i++;
          return [3, 1];
        case 4:
          return [
            2
            /*return*/
          ];
      }
    });
  });
}
var convertSVGToImage = function(svg) {
  var richContent = svg.outerHTML.replace(/<img(.*?)>/g, "<img$1/>").replace(/\n/g, "").replace(/\t/g, "").replace(/#/g, "%23");
  return "data:image/svg+xml;charset=utf-8,".concat(richContent);
};
var getValue = function(v1, v2) {
  if (isUndefined(v1)) {
    return v2;
  } else {
    return v1;
  }
};
var loadImage = function(url, width, height) {
  if (width === void 0) {
    width = void 0;
  }
  if (height === void 0) {
    height = void 0;
  }
  var image = new Image();
  image.setAttribute("crossOrigin", "Anonymous");
  !isUndefined(width) && (image.width = width);
  !isUndefined(height) && (image.height = height);
  image.src = url;
  return new Promise(function(resolve) {
    image.onload = function() {
      resolve(image);
    };
  });
};
var generateMatrix = function(rows, columns, value) {
  return Array.from({ length: rows }, function() {
    return new Array(columns).fill(value);
  });
};
var initialOptions = {
  width: 300,
  height: 300,
  rotate: 45,
  layout: "default",
  auxiliaryLine: false,
  translatePlacement: "middle",
  contentType: "text",
  content: "hello watermark-js-plus",
  textType: "fill",
  imageWidth: 0,
  imageHeight: 0,
  lineHeight: 30,
  zIndex: 2147483647,
  backgroundPosition: "0 0",
  backgroundRepeat: "repeat",
  fontSize: "20px",
  fontFamily: "sans-serif",
  fontStyle: "",
  fontVariant: "",
  fontColor: "#000",
  fontWeight: "normal",
  filter: "none",
  letterSpacing: "0px",
  wordSpacing: "0px",
  globalAlpha: 0.5,
  mode: "default",
  mutationObserve: true,
  movable: false,
  parent: "body",
  onSuccess: function() {
  },
  onBeforeDestroy: function() {
  },
  onDestroyed: function() {
  },
  onObserveError: function() {
  }
};
var generateRecommendOptions = function(canvas, options, args) {
  var ctx = canvas.getContext("2d");
  if (ctx === null) {
    throw new Error("get context error");
  }
  ctx.font = "".concat(options.fontStyle, " ").concat(options.fontVariant, " ").concat(options.fontWeight, " ").concat(options.fontSize, " ").concat(options.fontFamily);
  ctx.filter = options.filter;
  ctx.letterSpacing = options.letterSpacing;
  ctx.wordSpacing = options.wordSpacing;
  if (options === null || options === void 0 ? void 0 : options.rotate) {
    options.rotate = (360 - options.rotate % 360) * (Math.PI / 180);
  }
  if (isUndefined(args.textRowMaxWidth)) {
    options.textRowMaxWidth = options.width;
  }
  var result = {
    image: {
      rect: {
        width: options.imageWidth,
        height: options.imageHeight
      },
      position: {
        x: 0,
        y: 0
      }
    },
    textLine: {
      data: [],
      yOffsetValue: 0
    },
    advancedStyleParams: {
      linear: {
        x0: 0,
        x1: 0
      },
      radial: {
        x0: 0,
        y0: 0,
        r0: 0,
        x1: 0,
        y1: 0,
        r1: 0
      },
      conic: {
        x: 0,
        y: 0,
        startAngle: 0
      },
      pattern: {}
    }
  };
  switch (options.contentType) {
    case "text":
      result.textLine.data = [options.content];
      break;
    case "multi-line-text":
      result.textLine.data = getMultiLineData(ctx, options.content, options.textRowMaxWidth);
      break;
  }
  var translateX = options.width / 2;
  var translateY = options.height / 2;
  var textBaseline = "middle";
  var textAlign = "center";
  if (!isUndefined(args === null || args === void 0 ? void 0 : args.translateX) && !isUndefined(args === null || args === void 0 ? void 0 : args.translateY)) {
    translateX = args === null || args === void 0 ? void 0 : args.translateX;
    translateY = args === null || args === void 0 ? void 0 : args.translateY;
    textBaseline = "top";
    textAlign = "left";
  } else {
    result.advancedStyleParams.linear.x0 = -options.width / 2;
    result.advancedStyleParams.linear.x1 = options.width / 2;
    result.advancedStyleParams.radial.r0 = 0;
    result.advancedStyleParams.radial.r1 = options.width / 2;
  }
  switch (args.translatePlacement) {
    case "top":
      translateX = options.width / 2;
      translateY = 0;
      textBaseline = "top";
      result.advancedStyleParams.linear.x0 = -options.width / 2;
      result.advancedStyleParams.linear.x1 = options.width / 2;
      result.advancedStyleParams.radial.y0 = result.textLine.data.length * options.lineHeight / 2;
      result.advancedStyleParams.radial.y1 = result.textLine.data.length * options.lineHeight / 2;
      result.advancedStyleParams.conic.y = result.textLine.data.length * options.lineHeight / 2;
      break;
    case "top-start":
      translateX = 0;
      translateY = 0;
      textBaseline = "top";
      textAlign = "start";
      result.advancedStyleParams.linear.x0 = 0;
      result.advancedStyleParams.linear.x1 = options.width;
      result.advancedStyleParams.radial.x0 = options.width / 2;
      result.advancedStyleParams.radial.y0 = result.textLine.data.length * options.lineHeight / 2;
      result.advancedStyleParams.radial.x1 = options.width / 2;
      result.advancedStyleParams.radial.y1 = result.textLine.data.length * options.lineHeight / 2;
      result.advancedStyleParams.conic.x = options.width / 2;
      result.advancedStyleParams.conic.y = result.textLine.data.length * options.lineHeight / 2;
      break;
    case "top-end":
      translateX = options.width;
      translateY = 0;
      textBaseline = "top";
      textAlign = "end";
      result.advancedStyleParams.linear.x0 = 0;
      result.advancedStyleParams.linear.x1 = -options.width;
      result.advancedStyleParams.radial.x0 = -options.width / 2;
      result.advancedStyleParams.radial.y0 = result.textLine.data.length * options.lineHeight / 2;
      result.advancedStyleParams.radial.x1 = -options.width / 2;
      result.advancedStyleParams.radial.y1 = result.textLine.data.length * options.lineHeight / 2;
      result.advancedStyleParams.conic.x = -options.width / 2;
      result.advancedStyleParams.conic.y = result.textLine.data.length * options.lineHeight / 2;
      break;
    case "bottom":
      translateX = options.width / 2;
      translateY = options.height;
      textBaseline = "bottom";
      result.advancedStyleParams.linear.x0 = -options.width / 2;
      result.advancedStyleParams.linear.x1 = options.width / 2;
      result.advancedStyleParams.radial.y0 = -result.textLine.data.length * options.lineHeight / 2;
      result.advancedStyleParams.radial.y1 = -result.textLine.data.length * options.lineHeight / 2;
      result.advancedStyleParams.conic.x = 0;
      result.advancedStyleParams.conic.y = -result.textLine.data.length * options.lineHeight / 2;
      break;
    case "bottom-start":
      translateX = 0;
      translateY = options.height;
      textBaseline = "bottom";
      textAlign = "start";
      result.advancedStyleParams.linear.x0 = 0;
      result.advancedStyleParams.linear.x1 = options.width;
      result.advancedStyleParams.radial.x0 = options.width / 2;
      result.advancedStyleParams.radial.y0 = -result.textLine.data.length * options.lineHeight / 2;
      result.advancedStyleParams.radial.x1 = options.width / 2;
      result.advancedStyleParams.radial.y1 = -result.textLine.data.length * options.lineHeight / 2;
      result.advancedStyleParams.conic.x = options.width / 2;
      result.advancedStyleParams.conic.y = -result.textLine.data.length * options.lineHeight / 2;
      break;
    case "bottom-end":
      translateX = options.width;
      translateY = options.height;
      textBaseline = "bottom";
      textAlign = "end";
      result.advancedStyleParams.linear.x0 = 0;
      result.advancedStyleParams.linear.x1 = -options.width;
      result.advancedStyleParams.radial.x0 = -options.width / 2;
      result.advancedStyleParams.radial.y0 = -result.textLine.data.length * options.lineHeight / 2;
      result.advancedStyleParams.radial.x1 = -options.width / 2;
      result.advancedStyleParams.radial.y1 = -result.textLine.data.length * options.lineHeight / 2;
      result.advancedStyleParams.conic.x = -options.width / 2;
      result.advancedStyleParams.conic.y = -result.textLine.data.length * options.lineHeight / 2;
      break;
    case "left":
      translateX = 0;
      translateY = options.height / 2;
      textAlign = "start";
      result.advancedStyleParams.linear.x0 = 0;
      result.advancedStyleParams.linear.x1 = options.width;
      result.advancedStyleParams.radial.x0 = options.width / 2;
      result.advancedStyleParams.radial.x1 = options.width / 2;
      result.advancedStyleParams.conic.x = options.width / 2;
      result.advancedStyleParams.conic.y = 0;
      break;
    case "right":
      translateX = options.width;
      translateY = options.height / 2;
      textAlign = "end";
      result.advancedStyleParams.linear.x0 = 0;
      result.advancedStyleParams.linear.x1 = -options.width;
      result.advancedStyleParams.radial.x0 = -options.width / 2;
      result.advancedStyleParams.radial.x1 = -options.width / 2;
      result.advancedStyleParams.conic.x = -options.width / 2;
      result.advancedStyleParams.conic.y = 0;
      break;
  }
  options.translateX = translateX;
  options.translateY = translateY;
  isUndefined(args === null || args === void 0 ? void 0 : args.textBaseline) && (options.textBaseline = textBaseline);
  isUndefined(args === null || args === void 0 ? void 0 : args.textAlign) && (options.textAlign = textAlign);
  if (["text", "multi-line-text"].includes(options.contentType)) {
    switch (options.textBaseline) {
      case "middle":
        result.textLine.yOffsetValue = (result.textLine.data.length - 1) * options.lineHeight / 2;
        break;
      case "bottom":
      case "alphabetic":
      case "ideographic":
        result.textLine.yOffsetValue = (result.textLine.data.length - 1) * options.lineHeight + (options.lineHeight - parseInt(options.fontSize)) / 2;
        break;
      case "top":
      case "hanging":
        result.textLine.yOffsetValue = -options.lineHeight / 2 + parseInt(options.fontSize) / 2;
        break;
    }
  }
  return result;
};
var bootstrap = function() {
  if (typeof window !== "undefined") {
    Object.defineProperty(window, "MutationObserver", {
      writable: false,
      configurable: false
    });
    Object.defineProperty(window, "requestAnimationFrame", {
      writable: false,
      configurable: false
    });
  }
};
var WatermarkCanvas = (
  /** @class */
  function() {
    function WatermarkCanvas2(args, options) {
      this.props = args;
      this.options = options;
      this.canvas = WatermarkCanvas2.createCanvas(this.options.width, this.options.height);
      this.recommendOptions = generateRecommendOptions(this.canvas, this.options, this.props);
    }
    WatermarkCanvas2.createCanvas = function(width, height) {
      var _a;
      var ratio = window.devicePixelRatio || 1;
      var canvas = document.createElement("canvas");
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = "".concat(width, "px");
      canvas.style.height = "".concat(height, "px");
      (_a = canvas.getContext("2d")) === null || _a === void 0 ? void 0 : _a.setTransform(ratio, 0, 0, ratio, 0, 0);
      return canvas;
    };
    WatermarkCanvas2.clearCanvas = function(canvas) {
      var ctx = canvas.getContext("2d");
      if (ctx === null) {
        throw new Error("get context error");
      }
      ctx.restore();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
    WatermarkCanvas2.prototype.getCanvas = function() {
      return this.canvas;
    };
    WatermarkCanvas2.prototype.clear = function() {
      WatermarkCanvas2.clearCanvas(this.canvas);
    };
    WatermarkCanvas2.prototype.draw = function() {
      var _this = this;
      var ctx = this.canvas.getContext("2d");
      if (ctx === null) {
        throw new Error("get context error");
      }
      if (this.options.auxiliaryLine) {
        ctx.beginPath();
        ctx.rect(0, 0, this.options.width, this.options.height);
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#000";
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.rect(this.options.translateX, this.options.translateY, 1, 1);
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#f00";
        ctx.stroke();
        ctx.closePath();
      }
      this.setStyle(ctx);
      ctx.save();
      ctx.translate(this.options.translateX, this.options.translateY);
      ctx.rotate(this.options.rotate);
      return new Promise(function(resolve) {
        switch (_this.options.contentType) {
          case "text":
            _this.drawText(ctx, resolve);
            break;
          case "image":
            _this.drawImage(ctx, resolve);
            break;
          case "multi-line-text":
            _this.drawMultiLineText(ctx, resolve);
            break;
          case "rich-text":
            _this.drawRichText(ctx, resolve);
            break;
        }
      });
    };
    WatermarkCanvas2.prototype.setStyle = function(ctx) {
      var _a;
      var propName = "fillStyle";
      if (this.options.textType === "stroke") {
        propName = "strokeStyle";
      }
      var style = this.options.fontColor;
      if ((_a = this.options) === null || _a === void 0 ? void 0 : _a.advancedStyle) {
        switch (this.options.advancedStyle.type) {
          case "linear":
            style = this.createLinearGradient(ctx);
            break;
          case "radial":
            style = this.createRadialGradient(ctx);
            break;
          case "conic":
            style = this.createConicGradient(ctx);
            break;
          case "pattern":
            style = this.createPattern(ctx);
            break;
        }
      }
      ctx[propName] && style && (ctx[propName] = style);
      this.options.textAlign && (ctx.textAlign = this.options.textAlign);
      this.options.textBaseline && (ctx.textBaseline = this.options.textBaseline);
      ctx.globalAlpha = this.options.globalAlpha;
      if (this.options.shadowStyle) {
        ctx.shadowBlur = getValue(this.options.shadowStyle.shadowBlur, 0);
        ctx.shadowColor = getValue(this.options.shadowStyle.shadowColor, "#00000000");
        ctx.shadowOffsetX = getValue(this.options.shadowStyle.shadowOffsetX, 0);
        ctx.shadowOffsetY = getValue(this.options.shadowStyle.shadowOffsetY, 0);
      }
      if (isFunction(this.options.extraDrawFunc)) {
        this.options.extraDrawFunc(ctx);
      }
    };
    WatermarkCanvas2.prototype.createLinearGradient = function(ctx) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
      var gradient = ctx.createLinearGradient(getValue((_c = (_b = (_a = this.options.advancedStyle) === null || _a === void 0 ? void 0 : _a.params) === null || _b === void 0 ? void 0 : _b.linear) === null || _c === void 0 ? void 0 : _c.x0, this.recommendOptions.advancedStyleParams.linear.x0), getValue((_f = (_e = (_d = this.options.advancedStyle) === null || _d === void 0 ? void 0 : _d.params) === null || _e === void 0 ? void 0 : _e.linear) === null || _f === void 0 ? void 0 : _f.y0, 0), getValue((_j = (_h = (_g = this.options.advancedStyle) === null || _g === void 0 ? void 0 : _g.params) === null || _h === void 0 ? void 0 : _h.linear) === null || _j === void 0 ? void 0 : _j.x1, this.recommendOptions.advancedStyleParams.linear.x1), getValue((_m = (_l = (_k = this.options.advancedStyle) === null || _k === void 0 ? void 0 : _k.params) === null || _l === void 0 ? void 0 : _l.linear) === null || _m === void 0 ? void 0 : _m.y1, 0));
      (_q = (_p = (_o = this.options) === null || _o === void 0 ? void 0 : _o.advancedStyle) === null || _p === void 0 ? void 0 : _p.colorStops) === null || _q === void 0 ? void 0 : _q.forEach(function(item) {
        gradient.addColorStop(item.offset, item.color);
      });
      return gradient;
    };
    WatermarkCanvas2.prototype.createConicGradient = function(ctx) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
      var gradient = ctx.createConicGradient(getValue((_d = (_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.advancedStyle) === null || _b === void 0 ? void 0 : _b.params) === null || _c === void 0 ? void 0 : _c.conic) === null || _d === void 0 ? void 0 : _d.startAngle, 0), getValue((_h = (_g = (_f = (_e = this.options) === null || _e === void 0 ? void 0 : _e.advancedStyle) === null || _f === void 0 ? void 0 : _f.params) === null || _g === void 0 ? void 0 : _g.conic) === null || _h === void 0 ? void 0 : _h.x, this.recommendOptions.advancedStyleParams.conic.x), getValue((_m = (_l = (_k = (_j = this.options) === null || _j === void 0 ? void 0 : _j.advancedStyle) === null || _k === void 0 ? void 0 : _k.params) === null || _l === void 0 ? void 0 : _l.conic) === null || _m === void 0 ? void 0 : _m.y, this.recommendOptions.advancedStyleParams.conic.y));
      (_q = (_p = (_o = this.options) === null || _o === void 0 ? void 0 : _o.advancedStyle) === null || _p === void 0 ? void 0 : _p.colorStops) === null || _q === void 0 ? void 0 : _q.forEach(function(item) {
        gradient.addColorStop(item.offset, item.color);
      });
      return gradient;
    };
    WatermarkCanvas2.prototype.createRadialGradient = function(ctx) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2;
      var gradient = ctx.createRadialGradient(getValue((_d = (_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.advancedStyle) === null || _b === void 0 ? void 0 : _b.params) === null || _c === void 0 ? void 0 : _c.radial) === null || _d === void 0 ? void 0 : _d.x0, this.recommendOptions.advancedStyleParams.radial.x0), getValue((_h = (_g = (_f = (_e = this.options) === null || _e === void 0 ? void 0 : _e.advancedStyle) === null || _f === void 0 ? void 0 : _f.params) === null || _g === void 0 ? void 0 : _g.radial) === null || _h === void 0 ? void 0 : _h.y0, this.recommendOptions.advancedStyleParams.radial.y0), getValue((_m = (_l = (_k = (_j = this.options) === null || _j === void 0 ? void 0 : _j.advancedStyle) === null || _k === void 0 ? void 0 : _k.params) === null || _l === void 0 ? void 0 : _l.radial) === null || _m === void 0 ? void 0 : _m.r0, this.recommendOptions.advancedStyleParams.radial.r0), getValue((_r = (_q = (_p = (_o = this.options) === null || _o === void 0 ? void 0 : _o.advancedStyle) === null || _p === void 0 ? void 0 : _p.params) === null || _q === void 0 ? void 0 : _q.radial) === null || _r === void 0 ? void 0 : _r.x1, this.recommendOptions.advancedStyleParams.radial.x1), getValue((_v = (_u = (_t = (_s = this.options) === null || _s === void 0 ? void 0 : _s.advancedStyle) === null || _t === void 0 ? void 0 : _t.params) === null || _u === void 0 ? void 0 : _u.radial) === null || _v === void 0 ? void 0 : _v.y1, this.recommendOptions.advancedStyleParams.radial.y1), getValue((_z = (_y = (_x = (_w = this.options) === null || _w === void 0 ? void 0 : _w.advancedStyle) === null || _x === void 0 ? void 0 : _x.params) === null || _y === void 0 ? void 0 : _y.radial) === null || _z === void 0 ? void 0 : _z.r1, this.recommendOptions.advancedStyleParams.radial.r1));
      (_2 = (_1 = (_0 = this.options) === null || _0 === void 0 ? void 0 : _0.advancedStyle) === null || _1 === void 0 ? void 0 : _1.colorStops) === null || _2 === void 0 ? void 0 : _2.forEach(function(item) {
        gradient.addColorStop(item.offset, item.color);
      });
      return gradient;
    };
    WatermarkCanvas2.prototype.createPattern = function(ctx) {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      return ctx.createPattern((_d = (_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.advancedStyle) === null || _b === void 0 ? void 0 : _b.params) === null || _c === void 0 ? void 0 : _c.pattern) === null || _d === void 0 ? void 0 : _d.image, ((_h = (_g = (_f = (_e = this.options) === null || _e === void 0 ? void 0 : _e.advancedStyle) === null || _f === void 0 ? void 0 : _f.params) === null || _g === void 0 ? void 0 : _g.pattern) === null || _h === void 0 ? void 0 : _h.repetition) || "");
    };
    WatermarkCanvas2.prototype.setText = function(ctx, params) {
      var methodName = "fillText";
      if (this.options.textType === "stroke") {
        methodName = "strokeText";
      }
      ctx[methodName] && ctx[methodName](params.text, params.x, params.y, params.maxWidth);
    };
    WatermarkCanvas2.prototype.drawText = function(ctx, resolve) {
      this.setText(ctx, {
        text: this.options.content,
        x: 0,
        y: 0 - this.recommendOptions.textLine.yOffsetValue,
        maxWidth: this.options.textRowMaxWidth || this.options.width
      });
      resolve(ctx.canvas);
    };
    WatermarkCanvas2.prototype.drawImage = function(ctx, resolve) {
      var _this = this;
      loadImage(this.options.image).then(function(image) {
        var _a = _this.getImageRect(image), imageWidth = _a.width, imageHeight = _a.height;
        var imagePosition = _this.getDrawImagePosition(imageWidth, imageHeight);
        ctx.drawImage(image, imagePosition.x, imagePosition.y, imageWidth, imageHeight);
        resolve(ctx.canvas);
      });
    };
    WatermarkCanvas2.prototype.drawMultiLineText = function(ctx, resolve) {
      var _this = this;
      var lines = this.recommendOptions.textLine.data;
      var yOffsetValue = this.recommendOptions.textLine.yOffsetValue;
      lines.forEach(function(text, index) {
        _this.setText(ctx, { text, x: 0, y: _this.options.lineHeight * index - yOffsetValue });
      });
      resolve(ctx.canvas);
    };
    WatermarkCanvas2.prototype.drawRichText = function(ctx, resolve) {
      return __awaiter(this, void 0, void 0, function() {
        var obj;
        var _this = this;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, createCustomContentSVG(ctx, this.options)];
            case 1:
              obj = _a.sent();
              loadImage(convertSVGToImage(obj.element), obj.width, obj.height).then(function(image) {
                var imagePosition = _this.getDrawImagePosition(image.width, image.height);
                ctx.drawImage(image, imagePosition.x, imagePosition.y, image.width, image.height);
                resolve(ctx.canvas);
              });
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    WatermarkCanvas2.prototype.getImageRect = function(image) {
      var rect = { width: this.options.imageWidth || 0, height: this.options.imageHeight || 0 };
      switch (true) {
        case (rect.width !== 0 && rect.height === 0):
          rect.height = rect.width * image.height / image.width;
          break;
        case (rect.width === 0 && rect.height !== 0):
          rect.width = rect.height * image.width / image.height;
          break;
        case (rect.width === 0 && rect.height === 0):
          rect.width = image.width;
          rect.height = image.height;
          break;
      }
      return rect;
    };
    WatermarkCanvas2.prototype.getDrawImagePosition = function(imageWidth, imageHeight) {
      var _a, _b;
      var result = {
        x: -imageWidth / 2,
        y: -imageHeight / 2
      };
      switch (this.options.translatePlacement) {
        case "top":
          result.x = -imageWidth / 2;
          result.y = 0;
          break;
        case "top-start":
          result.x = 0;
          result.y = 0;
          break;
        case "top-end":
          result.x = -imageWidth;
          result.y = 0;
          break;
        case "bottom":
          result.x = -imageWidth / 2;
          result.y = -imageHeight;
          break;
        case "bottom-start":
          result.x = 0;
          result.y = -imageHeight;
          break;
        case "bottom-end":
          result.x = -imageWidth;
          result.y = -imageHeight;
          break;
        case "left":
          result.x = 0;
          result.y = -imageHeight / 2;
          break;
        case "right":
          result.x = -imageWidth;
          result.y = -imageHeight / 2;
          break;
      }
      !isUndefined((_a = this.props) === null || _a === void 0 ? void 0 : _a.translateX) && (result.x = 0);
      !isUndefined((_b = this.props) === null || _b === void 0 ? void 0 : _b.translateY) && (result.y = 0);
      return result;
    };
    return WatermarkCanvas2;
  }()
);
var GridLayout = (
  /** @class */
  function() {
    function GridLayout2(args, partialCanvas) {
      var _a, _b, _c, _d;
      this.options = args;
      this.partialWidth = this.options.width;
      this.partialHeight = this.options.height;
      this.rows = ((_a = this.options.gridLayoutOptions) === null || _a === void 0 ? void 0 : _a.rows) || 1;
      this.cols = ((_b = this.options.gridLayoutOptions) === null || _b === void 0 ? void 0 : _b.cols) || 1;
      this.matrix = ((_c = this.options.gridLayoutOptions) === null || _c === void 0 ? void 0 : _c.matrix) || generateMatrix(this.rows, this.cols, 1);
      this.gap = ((_d = this.options.gridLayoutOptions) === null || _d === void 0 ? void 0 : _d.gap) || [0, 0];
      this.partialCanvas = partialCanvas;
    }
    GridLayout2.prototype.draw = function() {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      var layoutCanvas = WatermarkCanvas.createCanvas(((_a = this.options.gridLayoutOptions) === null || _a === void 0 ? void 0 : _a.width) || this.partialWidth * this.cols + this.gap[0] * this.cols, ((_b = this.options.gridLayoutOptions) === null || _b === void 0 ? void 0 : _b.height) || this.partialHeight * this.rows + this.gap[1] * this.rows);
      var layoutContext = layoutCanvas.getContext("2d");
      if ((_c = this.options.gridLayoutOptions) === null || _c === void 0 ? void 0 : _c.backgroundImage) {
        layoutContext === null || layoutContext === void 0 ? void 0 : layoutContext.drawImage((_d = this.options.gridLayoutOptions) === null || _d === void 0 ? void 0 : _d.backgroundImage, 0, 0, (_e = this.options.gridLayoutOptions) === null || _e === void 0 ? void 0 : _e.width, (_f = this.options.gridLayoutOptions) === null || _f === void 0 ? void 0 : _f.height);
      }
      for (var rowIndex = 0; rowIndex < this.rows; rowIndex++) {
        for (var colIndex = 0; colIndex < this.cols; colIndex++) {
          if (!((_h = (_g = this.matrix) === null || _g === void 0 ? void 0 : _g[rowIndex]) === null || _h === void 0 ? void 0 : _h[colIndex])) {
            continue;
          }
          layoutContext === null || layoutContext === void 0 ? void 0 : layoutContext.drawImage(this.partialCanvas, this.partialWidth * colIndex + this.gap[0] * colIndex, this.partialHeight * rowIndex + this.gap[1] * rowIndex, this.partialWidth, this.partialHeight);
        }
      }
      return layoutCanvas;
    };
    return GridLayout2;
  }()
);
var renderLayout = function(options, partialCanvas) {
  switch (options.layout) {
    case "grid":
      return new GridLayout(options, partialCanvas).draw();
    default:
      return partialCanvas;
  }
};
var generateBackgroundSize = function(options) {
  var _a, _b, _c;
  switch (options.layout) {
    case "grid": {
      var cols = ((_a = options.gridLayoutOptions) === null || _a === void 0 ? void 0 : _a.cols) || 1;
      var rows = ((_b = options.gridLayoutOptions) === null || _b === void 0 ? void 0 : _b.rows) || 1;
      var gap = ((_c = options.gridLayoutOptions) === null || _c === void 0 ? void 0 : _c.gap) || [0, 0];
      return [
        options.width * cols + gap[0] * cols,
        options.height * rows + gap[1] * rows
      ];
    }
    default:
      return [
        options.width,
        options.height
      ];
  }
};
var Watermark = (
  /** @class */
  function() {
    function Watermark2(args) {
      if (args === void 0) {
        args = {};
      }
      this.parentElement = document.body;
      this.props = args;
      this.options = Object.assign({}, initialOptions, args);
      this.changeParentElement(this.options.parent);
      this.watermarkCanvas = new WatermarkCanvas(this.props, this.options);
      bootstrap();
    }
    Watermark2.prototype.changeOptions = function() {
      return __awaiter(this, arguments, void 0, function(args, mode, redraw) {
        if (args === void 0) {
          args = {};
        }
        if (mode === void 0) {
          mode = "overwrite";
        }
        if (redraw === void 0) {
          redraw = true;
        }
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              this.initConfigData(args, mode);
              if (!redraw) return [3, 2];
              this.remove();
              return [4, this.create()];
            case 1:
              _a.sent();
              _a.label = 2;
            case 2:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    Watermark2.prototype.create = function() {
      return __awaiter(this, void 0, void 0, function() {
        var firstDraw, image, watermarkInnerDom, parentElementType, backgroundSize;
        var _a, _b, _c, _d, _e, _f, _g;
        return __generator(this, function(_h) {
          switch (_h.label) {
            case 0:
              if (!this.validateUnique()) {
                return [
                  2
                  /*return*/
                ];
              }
              if (!this.validateContent()) {
                return [
                  2
                  /*return*/
                ];
              }
              firstDraw = isUndefined(this.watermarkDom);
              return [4, (_a = this.watermarkCanvas) === null || _a === void 0 ? void 0 : _a.draw()];
            case 1:
              _h.sent();
              this.layoutCanvas = renderLayout(this.options, (_b = this.watermarkCanvas) === null || _b === void 0 ? void 0 : _b.getCanvas());
              image = convertImage(this.layoutCanvas);
              (_c = this.watermarkCanvas) === null || _c === void 0 ? void 0 : _c.clear();
              this.watermarkDom = document.createElement("div");
              watermarkInnerDom = document.createElement("div");
              this.watermarkDom.__WATERMARK__ = "watermark";
              this.watermarkDom.__WATERMARK__INSTANCE__ = this;
              parentElementType = this.checkParentElementType();
              this.watermarkDom.style.cssText = "\n      z-index:".concat(this.options.zIndex, "!important;display:block!important;visibility:visible!important;transform:none!important;scale:none!important;\n      ").concat(parentElementType === "custom" ? "top:0!important;bottom:0!important;left:0!important;right:0!important;height:100%!important;pointer-events:none!important;position:absolute!important;" : "position:relative!important;", "\n    ");
              backgroundSize = generateBackgroundSize(this.options);
              watermarkInnerDom.style.cssText = "\n      display:block!important;visibility:visible!important;pointer-events:none;top:0;bottom:0;left:0;right:0;transform:none!important;scale:none!important;\n      position:".concat(parentElementType === "root" ? "fixed" : "absolute", "!important;-webkit-print-color-adjust:exact!important;width:100%!important;height:100%!important;\n      z-index:").concat(this.options.zIndex, "!important;background-image:url(").concat(image, ")!important;background-repeat:").concat(this.options.backgroundRepeat, "!important;\n      background-size:").concat(backgroundSize[0], "px ").concat(backgroundSize[1], "px!important;background-position:").concat(this.options.backgroundPosition, ";\n      ").concat(this.options.movable ? "animation: 200s ease 0s infinite normal none running watermark !important;" : "", "\n    ");
              this.watermarkDom.append(watermarkInnerDom);
              this.parentElement.appendChild(this.watermarkDom);
              if (this.options.mutationObserve) {
                try {
                  this.bindMutationObserve();
                } catch (e) {
                  (_e = (_d = this.options).onObserveError) === null || _e === void 0 ? void 0 : _e.call(_d);
                }
              }
              firstDraw && ((_g = (_f = this.options).onSuccess) === null || _g === void 0 ? void 0 : _g.call(_f));
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    Watermark2.prototype.destroy = function() {
      this.remove();
      this.watermarkDom = void 0;
    };
    Watermark2.prototype.check = function() {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (!!this.parentElement.contains(this.watermarkDom)) return [3, 2];
              this.remove();
              return [4, this.create()];
            case 1:
              _a.sent();
              _a.label = 2;
            case 2:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    Watermark2.prototype.remove = function() {
      var _a, _b, _c, _d, _e, _f, _g;
      (_b = (_a = this.options).onBeforeDestroy) === null || _b === void 0 ? void 0 : _b.call(_a);
      (_c = this.observer) === null || _c === void 0 ? void 0 : _c.disconnect();
      (_d = this.parentObserve) === null || _d === void 0 ? void 0 : _d.disconnect();
      this.unbindCheckWatermarkElementEvent();
      (_e = this.watermarkDom) === null || _e === void 0 ? void 0 : _e.remove();
      (_g = (_f = this.options).onDestroyed) === null || _g === void 0 ? void 0 : _g.call(_f);
    };
    Watermark2.prototype.initConfigData = function(args, mode) {
      var _this = this;
      if (mode === void 0) {
        mode = "overwrite";
      }
      if (mode === "append") {
        Object.keys(args).forEach(function(key) {
          _this.props && (_this.props[key] = args[key]);
        });
      } else {
        this.props = args;
      }
      this.options = Object.assign({}, initialOptions, this.props);
      this.changeParentElement(this.options.parent);
      this.watermarkCanvas = new WatermarkCanvas(this.props, this.options);
    };
    Watermark2.prototype.changeParentElement = function(parent) {
      if (typeof parent === "string") {
        var parentElement = document.querySelector(parent);
        parentElement && (this.parentElement = parentElement);
      } else {
        this.parentElement = parent;
      }
    };
    Watermark2.prototype.validateUnique = function() {
      var result = true;
      this.parentElement.childNodes.forEach(function(node) {
        if (!result) {
          return;
        }
        if (Object.hasOwnProperty.call(node, "__WATERMARK__")) {
          result = false;
        }
      });
      return result;
    };
    Watermark2.prototype.validateContent = function() {
      switch (this.options.contentType) {
        case "image":
          return Object.hasOwnProperty.call(this.options, "image");
        case "multi-line-text":
        case "rich-text":
        case "text":
          return this.options.content.length > 0;
      }
      return false;
    };
    Watermark2.prototype.checkParentElementType = function() {
      if (["html", "body"].includes(this.parentElement.tagName.toLocaleLowerCase())) {
        return "root";
      }
      return "custom";
    };
    Watermark2.prototype.checkWatermarkElement = function() {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (!!this.parentElement.contains(this.watermarkDom)) return [3, 2];
              this.remove();
              return [4, this.create()];
            case 1:
              _a.sent();
              _a.label = 2;
            case 2:
              this.bindCheckWatermarkElementEvent();
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    Watermark2.prototype.bindMutationObserve = function() {
      var _this = this;
      if (!this.watermarkDom) {
        return;
      }
      this.bindCheckWatermarkElementEvent();
      this.observer = new MutationObserver(function(mutationsList) {
        return __awaiter(_this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                if (!(mutationsList.length > 0)) return [3, 2];
                this.remove();
                return [4, this.create()];
              case 1:
                _a.sent();
                _a.label = 2;
              case 2:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      });
      this.observer.observe(this.watermarkDom, {
        attributes: true,
        // 属性的变动
        childList: true,
        // 子节点的变动（指新增，删除或者更改）
        subtree: true,
        // 布尔值，表示是否将该观察器应用于该节点的所有后代节点。
        characterData: true
        // 节点内容或节点文本的变动。
      });
      this.parentObserve = new MutationObserver(function(mutationsList) {
        return __awaiter(_this, void 0, void 0, function() {
          var _i, mutationsList_1, item;
          var _a;
          return __generator(this, function(_b) {
            switch (_b.label) {
              case 0:
                _i = 0, mutationsList_1 = mutationsList;
                _b.label = 1;
              case 1:
                if (!(_i < mutationsList_1.length)) return [3, 4];
                item = mutationsList_1[_i];
                if (!((item === null || item === void 0 ? void 0 : item.target) === this.watermarkDom || ((_a = item === null || item === void 0 ? void 0 : item.removedNodes) === null || _a === void 0 ? void 0 : _a[0]) === this.watermarkDom || item.type === "childList" && item.target === this.parentElement && item.target.lastChild !== this.watermarkDom)) return [3, 3];
                this.remove();
                return [4, this.create()];
              case 2:
                _b.sent();
                _b.label = 3;
              case 3:
                _i++;
                return [3, 1];
              case 4:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      });
      this.parentObserve.observe(this.parentElement, {
        attributes: true,
        // 属性的变动
        childList: true,
        // 子节点的变动（指新增，删除或者更改）
        subtree: true,
        // 布尔值，表示是否将该观察器应用于该节点的所有后代节点。
        characterData: true
        // 节点内容或节点文本的变动。
      });
    };
    Watermark2.prototype.bindCheckWatermarkElementEvent = function() {
      this.unbindCheckWatermarkElementEvent();
      this.checkWatermarkElementRequestID = requestAnimationFrame(this.checkWatermarkElement.bind(this));
    };
    Watermark2.prototype.unbindCheckWatermarkElementEvent = function() {
      if (!isUndefined(this.checkWatermarkElementRequestID)) {
        cancelAnimationFrame(this.checkWatermarkElementRequestID);
      }
    };
    return Watermark2;
  }()
);
var BlindWatermark = (
  /** @class */
  function(_super) {
    __extends(BlindWatermark2, _super);
    function BlindWatermark2(props) {
      if (props === void 0) {
        props = {};
      }
      var defaultProps = {
        globalAlpha: 5e-3,
        mode: "blind"
      };
      return _super.call(this, __assign(__assign({}, props), defaultProps)) || this;
    }
    BlindWatermark2.decode = function(props) {
      var _a = props.url, url = _a === void 0 ? "" : _a, _b = props.fillColor, fillColor = _b === void 0 ? "#000" : _b, _c = props.compositeOperation, compositeOperation = _c === void 0 ? "color-burn" : _c, _d = props.mode, mode = _d === void 0 ? "canvas" : _d, _e = props.compositeTimes, compositeTimes = _e === void 0 ? 3 : _e, onSuccess = props.onSuccess;
      if (!url) {
        return;
      }
      if (mode === "canvas") {
        var img_1 = new Image();
        img_1.src = url;
        img_1.addEventListener("load", function() {
          var width = img_1.width, height = img_1.height;
          var canvas = WatermarkCanvas.createCanvas(width, height);
          var ctx = canvas.getContext("2d");
          if (!ctx) {
            throw new Error("get context error");
          }
          ctx.drawImage(img_1, 0, 0, width, height);
          ctx.globalCompositeOperation = compositeOperation;
          ctx.fillStyle = fillColor;
          for (var i = 0; i < compositeTimes; i++) {
            ctx.fillRect(0, 0, width, height);
          }
          var resultImage = convertImage(canvas);
          if (isFunction(onSuccess)) {
            onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess(resultImage);
          }
        });
      }
    };
    return BlindWatermark2;
  }(Watermark)
);
var ImageWatermark = (
  /** @class */
  function() {
    function ImageWatermark2(args) {
      if (args === void 0) {
        args = {};
      }
      var _a;
      this.drew = false;
      this.props = args;
      this.options = Object.assign({}, initialOptions, args);
      this.watermarkCanvas = new WatermarkCanvas(this.props, this.options);
      this.originalSrc = (_a = this.props.dom) === null || _a === void 0 ? void 0 : _a.src;
      this.backgroundImage = this.getBackgroundImage();
    }
    ImageWatermark2.prototype.create = function() {
      return __awaiter(this, void 0, void 0, function() {
        var _a, _b, _c, _d, _e;
        return __generator(this, function(_f) {
          switch (_f.label) {
            case 0:
              if (this.drew) {
                return [
                  2
                  /*return*/
                ];
              }
              return [4, (_a = this.watermarkCanvas) === null || _a === void 0 ? void 0 : _a.draw()];
            case 1:
              _f.sent();
              this.options.layout = "grid";
              this.options.gridLayoutOptions = __assign(__assign({}, this.options.gridLayoutOptions), { width: (_b = this.backgroundImage) === null || _b === void 0 ? void 0 : _b.width, height: (_c = this.backgroundImage) === null || _c === void 0 ? void 0 : _c.height, backgroundImage: this.backgroundImage });
              this.layoutCanvas = renderLayout(this.options, (_d = this.watermarkCanvas) === null || _d === void 0 ? void 0 : _d.getCanvas());
              this.options.dom.src = convertImage(this.layoutCanvas);
              (_e = this.watermarkCanvas) === null || _e === void 0 ? void 0 : _e.clear();
              this.drew = true;
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    ImageWatermark2.prototype.destroy = function() {
      this.options.dom.src = this.originalSrc;
      this.drew = false;
    };
    ImageWatermark2.prototype.getBackgroundImage = function() {
      if (this.options.dom) {
        return this.options.dom;
      }
    };
    return ImageWatermark2;
  }()
);
export {
  BlindWatermark,
  ImageWatermark,
  Watermark
};
/*! Bundled license information:

watermark-js-plus/dist/index.esm.js:
  (*!
   * watermark-js-plus v1.5.1
   * (c) 2022-2024 Michael Sun
   * Released under the MIT License.
   *)
*/
//# sourceMappingURL=watermark-js-plus.js.map
