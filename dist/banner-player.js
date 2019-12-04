(function () {
var $parcel$global = this;
// ASSET: banner-player.js
var $fYEm$exports = {};
// ASSET: node_modules/konva/lib/Global.js
var $bIDB$exports = {};
Object.defineProperty($bIDB$exports, "__esModule", {
  value: true
});
var $bIDB$var$PI_OVER_180 = Math.PI / 180;

function $bIDB$var$detectBrowser() {
  return typeof window !== 'undefined' && ({}.toString.call(window) === '[object Window]' || {}.toString.call(window) === '[object global]');
}

var $bIDB$var$_detectIE = function (ua) {
  var msie = ua.indexOf('msie ');

  if (msie > 0) {
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('trident/');

  if (trident > 0) {
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('edge/');

  if (edge > 0) {
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  return false;
};

var $bIDB$export$_parseUA = function (userAgent) {
  var ua = userAgent.toLowerCase(),
      match = /(chrome)[ /]([\w.]+)/.exec(ua) || /(webkit)[ /]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ /]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf('compatible') < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [],
      mobile = !!userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i),
      ieMobile = !!userAgent.match(/IEMobile/i);
  return {
    browser: match[1] || '',
    version: match[2] || '0',
    isIE: $bIDB$var$_detectIE(ua),
    mobile: mobile,
    ieMobile: ieMobile
  };
};

$bIDB$exports._parseUA = $bIDB$export$_parseUA;
var $bIDB$export$glob = typeof $parcel$global !== 'undefined' ? $parcel$global : typeof window !== 'undefined' ? window : typeof WorkerGlobalScope !== 'undefined' ? self : {};
$bIDB$exports.glob = $bIDB$export$glob;
var $bIDB$export$Konva = {
  _global: $bIDB$export$glob,
  version: '4.0.18',
  isBrowser: $bIDB$var$detectBrowser(),
  isUnminified: /param/.test(function (param) {}.toString()),
  dblClickWindow: 400,
  getAngle: function (angle) {
    return $bIDB$export$Konva.angleDeg ? angle * $bIDB$var$PI_OVER_180 : angle;
  },
  enableTrace: false,
  _pointerEventsEnabled: false,
  hitOnDragEnabled: false,
  captureTouchEventsEnabled: false,
  listenClickTap: false,
  inDblClickWindow: false,
  pixelRatio: undefined,
  dragDistance: 3,
  angleDeg: true,
  showWarnings: true,
  dragButtons: [0, 1],
  isDragging: function () {
    return $bIDB$export$Konva['DD'].isDragging;
  },
  isDragReady: function () {
    return !!$bIDB$export$Konva['DD'].node;
  },
  UA: $bIDB$export$_parseUA($bIDB$export$glob.navigator && $bIDB$export$glob.navigator.userAgent || ''),
  document: $bIDB$export$glob.document,
  _injectGlobal: function (Konva) {
    $bIDB$export$glob.Konva = Konva;
  },
  _parseUA: $bIDB$export$_parseUA
};
$bIDB$exports.Konva = $bIDB$export$Konva;
var $bIDB$export$_NODES_REGISTRY = {};
$bIDB$exports._NODES_REGISTRY = $bIDB$export$_NODES_REGISTRY;

var $bIDB$export$_registerNode = function (NodeClass) {
  $bIDB$export$_NODES_REGISTRY[NodeClass.prototype.getClassName()] = NodeClass;
  $bIDB$export$Konva[NodeClass.prototype.getClassName()] = NodeClass;
};

$bIDB$exports._registerNode = $bIDB$export$_registerNode;
// ASSET: node_modules/konva/lib/Util.js
var $XIcS$exports = {};
Object.defineProperty($XIcS$exports, "__esModule", {
  value: true
});

var $XIcS$var$Collection = function () {
  function Collection() {}

  Collection.toCollection = function (arr) {
    var collection = new Collection(),
        len = arr.length,
        n;

    for (n = 0; n < len; n++) {
      collection.push(arr[n]);
    }

    return collection;
  };

  Collection._mapMethod = function (methodName) {
    Collection.prototype[methodName] = function () {
      var len = this.length,
          i;
      var args = [].slice.call(arguments);

      for (i = 0; i < len; i++) {
        this[i][methodName].apply(this[i], args);
      }

      return this;
    };
  };

  Collection.mapMethods = function (constructor) {
    var prot = constructor.prototype;

    for (var methodName in prot) {
      Collection._mapMethod(methodName);
    }
  };

  return Collection;
}();

var $XIcS$export$Collection = $XIcS$var$Collection;
$XIcS$exports.Collection = $XIcS$export$Collection;
$XIcS$var$Collection.prototype = [];

$XIcS$var$Collection.prototype.each = function (func) {
  for (var n = 0; n < this.length; n++) {
    func(this[n], n);
  }
};

$XIcS$var$Collection.prototype.toArray = function () {
  var arr = [],
      len = this.length,
      n;

  for (n = 0; n < len; n++) {
    arr.push(this[n]);
  }

  return arr;
};

var $XIcS$var$Transform = function () {
  function Transform(m) {
    if (m === void 0) {
      m = [1, 0, 0, 1, 0, 0];
    }

    this.m = m && m.slice() || [1, 0, 0, 1, 0, 0];
  }

  Transform.prototype.copy = function () {
    return new Transform(this.m);
  };

  Transform.prototype.point = function (point) {
    var m = this.m;
    return {
      x: m[0] * point.x + m[2] * point.y + m[4],
      y: m[1] * point.x + m[3] * point.y + m[5]
    };
  };

  Transform.prototype.translate = function (x, y) {
    this.m[4] += this.m[0] * x + this.m[2] * y;
    this.m[5] += this.m[1] * x + this.m[3] * y;
    return this;
  };

  Transform.prototype.scale = function (sx, sy) {
    this.m[0] *= sx;
    this.m[1] *= sx;
    this.m[2] *= sy;
    this.m[3] *= sy;
    return this;
  };

  Transform.prototype.rotate = function (rad) {
    var c = Math.cos(rad);
    var s = Math.sin(rad);
    var m11 = this.m[0] * c + this.m[2] * s;
    var m12 = this.m[1] * c + this.m[3] * s;
    var m21 = this.m[0] * -s + this.m[2] * c;
    var m22 = this.m[1] * -s + this.m[3] * c;
    this.m[0] = m11;
    this.m[1] = m12;
    this.m[2] = m21;
    this.m[3] = m22;
    return this;
  };

  Transform.prototype.getTranslation = function () {
    return {
      x: this.m[4],
      y: this.m[5]
    };
  };

  Transform.prototype.skew = function (sx, sy) {
    var m11 = this.m[0] + this.m[2] * sy;
    var m12 = this.m[1] + this.m[3] * sy;
    var m21 = this.m[2] + this.m[0] * sx;
    var m22 = this.m[3] + this.m[1] * sx;
    this.m[0] = m11;
    this.m[1] = m12;
    this.m[2] = m21;
    this.m[3] = m22;
    return this;
  };

  Transform.prototype.multiply = function (matrix) {
    var m11 = this.m[0] * matrix.m[0] + this.m[2] * matrix.m[1];
    var m12 = this.m[1] * matrix.m[0] + this.m[3] * matrix.m[1];
    var m21 = this.m[0] * matrix.m[2] + this.m[2] * matrix.m[3];
    var m22 = this.m[1] * matrix.m[2] + this.m[3] * matrix.m[3];
    var dx = this.m[0] * matrix.m[4] + this.m[2] * matrix.m[5] + this.m[4];
    var dy = this.m[1] * matrix.m[4] + this.m[3] * matrix.m[5] + this.m[5];
    this.m[0] = m11;
    this.m[1] = m12;
    this.m[2] = m21;
    this.m[3] = m22;
    this.m[4] = dx;
    this.m[5] = dy;
    return this;
  };

  Transform.prototype.invert = function () {
    var d = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]);
    var m0 = this.m[3] * d;
    var m1 = -this.m[1] * d;
    var m2 = -this.m[2] * d;
    var m3 = this.m[0] * d;
    var m4 = d * (this.m[2] * this.m[5] - this.m[3] * this.m[4]);
    var m5 = d * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
    this.m[0] = m0;
    this.m[1] = m1;
    this.m[2] = m2;
    this.m[3] = m3;
    this.m[4] = m4;
    this.m[5] = m5;
    return this;
  };

  Transform.prototype.getMatrix = function () {
    return this.m;
  };

  Transform.prototype.setAbsolutePosition = function (x, y) {
    var m0 = this.m[0],
        m1 = this.m[1],
        m2 = this.m[2],
        m3 = this.m[3],
        m4 = this.m[4],
        m5 = this.m[5],
        yt = (m0 * (y - m5) - m1 * (x - m4)) / (m0 * m3 - m1 * m2),
        xt = (x - m4 - m2 * yt) / m0;
    return this.translate(xt, yt);
  };

  return Transform;
}();

var $XIcS$export$Transform = $XIcS$var$Transform;
$XIcS$exports.Transform = $XIcS$export$Transform;
var $XIcS$var$OBJECT_ARRAY = '[object Array]',
    $XIcS$var$OBJECT_NUMBER = '[object Number]',
    $XIcS$var$OBJECT_STRING = '[object String]',
    $XIcS$var$OBJECT_BOOLEAN = '[object Boolean]',
    $XIcS$var$PI_OVER_DEG180 = Math.PI / 180,
    $XIcS$var$DEG180_OVER_PI = 180 / Math.PI,
    $XIcS$var$HASH = '#',
    $XIcS$var$EMPTY_STRING = '',
    $XIcS$var$ZERO = '0',
    $XIcS$var$KONVA_WARNING = 'Konva warning: ',
    $XIcS$var$KONVA_ERROR = 'Konva error: ',
    $XIcS$var$RGB_PAREN = 'rgb(',
    $XIcS$var$COLORS = {
  aliceblue: [240, 248, 255],
  antiquewhite: [250, 235, 215],
  aqua: [0, 255, 255],
  aquamarine: [127, 255, 212],
  azure: [240, 255, 255],
  beige: [245, 245, 220],
  bisque: [255, 228, 196],
  black: [0, 0, 0],
  blanchedalmond: [255, 235, 205],
  blue: [0, 0, 255],
  blueviolet: [138, 43, 226],
  brown: [165, 42, 42],
  burlywood: [222, 184, 135],
  cadetblue: [95, 158, 160],
  chartreuse: [127, 255, 0],
  chocolate: [210, 105, 30],
  coral: [255, 127, 80],
  cornflowerblue: [100, 149, 237],
  cornsilk: [255, 248, 220],
  crimson: [220, 20, 60],
  cyan: [0, 255, 255],
  darkblue: [0, 0, 139],
  darkcyan: [0, 139, 139],
  darkgoldenrod: [184, 132, 11],
  darkgray: [169, 169, 169],
  darkgreen: [0, 100, 0],
  darkgrey: [169, 169, 169],
  darkkhaki: [189, 183, 107],
  darkmagenta: [139, 0, 139],
  darkolivegreen: [85, 107, 47],
  darkorange: [255, 140, 0],
  darkorchid: [153, 50, 204],
  darkred: [139, 0, 0],
  darksalmon: [233, 150, 122],
  darkseagreen: [143, 188, 143],
  darkslateblue: [72, 61, 139],
  darkslategray: [47, 79, 79],
  darkslategrey: [47, 79, 79],
  darkturquoise: [0, 206, 209],
  darkviolet: [148, 0, 211],
  deeppink: [255, 20, 147],
  deepskyblue: [0, 191, 255],
  dimgray: [105, 105, 105],
  dimgrey: [105, 105, 105],
  dodgerblue: [30, 144, 255],
  firebrick: [178, 34, 34],
  floralwhite: [255, 255, 240],
  forestgreen: [34, 139, 34],
  fuchsia: [255, 0, 255],
  gainsboro: [220, 220, 220],
  ghostwhite: [248, 248, 255],
  gold: [255, 215, 0],
  goldenrod: [218, 165, 32],
  gray: [128, 128, 128],
  green: [0, 128, 0],
  greenyellow: [173, 255, 47],
  grey: [128, 128, 128],
  honeydew: [240, 255, 240],
  hotpink: [255, 105, 180],
  indianred: [205, 92, 92],
  indigo: [75, 0, 130],
  ivory: [255, 255, 240],
  khaki: [240, 230, 140],
  lavender: [230, 230, 250],
  lavenderblush: [255, 240, 245],
  lawngreen: [124, 252, 0],
  lemonchiffon: [255, 250, 205],
  lightblue: [173, 216, 230],
  lightcoral: [240, 128, 128],
  lightcyan: [224, 255, 255],
  lightgoldenrodyellow: [250, 250, 210],
  lightgray: [211, 211, 211],
  lightgreen: [144, 238, 144],
  lightgrey: [211, 211, 211],
  lightpink: [255, 182, 193],
  lightsalmon: [255, 160, 122],
  lightseagreen: [32, 178, 170],
  lightskyblue: [135, 206, 250],
  lightslategray: [119, 136, 153],
  lightslategrey: [119, 136, 153],
  lightsteelblue: [176, 196, 222],
  lightyellow: [255, 255, 224],
  lime: [0, 255, 0],
  limegreen: [50, 205, 50],
  linen: [250, 240, 230],
  magenta: [255, 0, 255],
  maroon: [128, 0, 0],
  mediumaquamarine: [102, 205, 170],
  mediumblue: [0, 0, 205],
  mediumorchid: [186, 85, 211],
  mediumpurple: [147, 112, 219],
  mediumseagreen: [60, 179, 113],
  mediumslateblue: [123, 104, 238],
  mediumspringgreen: [0, 250, 154],
  mediumturquoise: [72, 209, 204],
  mediumvioletred: [199, 21, 133],
  midnightblue: [25, 25, 112],
  mintcream: [245, 255, 250],
  mistyrose: [255, 228, 225],
  moccasin: [255, 228, 181],
  navajowhite: [255, 222, 173],
  navy: [0, 0, 128],
  oldlace: [253, 245, 230],
  olive: [128, 128, 0],
  olivedrab: [107, 142, 35],
  orange: [255, 165, 0],
  orangered: [255, 69, 0],
  orchid: [218, 112, 214],
  palegoldenrod: [238, 232, 170],
  palegreen: [152, 251, 152],
  paleturquoise: [175, 238, 238],
  palevioletred: [219, 112, 147],
  papayawhip: [255, 239, 213],
  peachpuff: [255, 218, 185],
  peru: [205, 133, 63],
  pink: [255, 192, 203],
  plum: [221, 160, 203],
  powderblue: [176, 224, 230],
  purple: [128, 0, 128],
  rebeccapurple: [102, 51, 153],
  red: [255, 0, 0],
  rosybrown: [188, 143, 143],
  royalblue: [65, 105, 225],
  saddlebrown: [139, 69, 19],
  salmon: [250, 128, 114],
  sandybrown: [244, 164, 96],
  seagreen: [46, 139, 87],
  seashell: [255, 245, 238],
  sienna: [160, 82, 45],
  silver: [192, 192, 192],
  skyblue: [135, 206, 235],
  slateblue: [106, 90, 205],
  slategray: [119, 128, 144],
  slategrey: [119, 128, 144],
  snow: [255, 255, 250],
  springgreen: [0, 255, 127],
  steelblue: [70, 130, 180],
  tan: [210, 180, 140],
  teal: [0, 128, 128],
  thistle: [216, 191, 216],
  transparent: [255, 255, 255, 0],
  tomato: [255, 99, 71],
  turquoise: [64, 224, 208],
  violet: [238, 130, 238],
  wheat: [245, 222, 179],
  white: [255, 255, 255],
  whitesmoke: [245, 245, 245],
  yellow: [255, 255, 0],
  yellowgreen: [154, 205, 5]
},
    $XIcS$var$RGB_REGEX = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/,
    $XIcS$var$animQueue = [];
var $XIcS$export$Util = {
  _isElement: function (obj) {
    return !!(obj && obj.nodeType == 1);
  },
  _isFunction: function (obj) {
    return !!(obj && obj.constructor && obj.call && obj.apply);
  },
  _isPlainObject: function (obj) {
    return !!obj && obj.constructor === Object;
  },
  _isArray: function (obj) {
    return Object.prototype.toString.call(obj) === $XIcS$var$OBJECT_ARRAY;
  },
  _isNumber: function (obj) {
    return Object.prototype.toString.call(obj) === $XIcS$var$OBJECT_NUMBER && !isNaN(obj) && isFinite(obj);
  },
  _isString: function (obj) {
    return Object.prototype.toString.call(obj) === $XIcS$var$OBJECT_STRING;
  },
  _isBoolean: function (obj) {
    return Object.prototype.toString.call(obj) === $XIcS$var$OBJECT_BOOLEAN;
  },
  isObject: function (val) {
    return val instanceof Object;
  },
  isValidSelector: function (selector) {
    if (typeof selector !== 'string') {
      return false;
    }

    var firstChar = selector[0];
    return firstChar === '#' || firstChar === '.' || firstChar === firstChar.toUpperCase();
  },
  _sign: function (number) {
    if (number === 0) {
      return 0;
    }

    if (number > 0) {
      return 1;
    } else {
      return -1;
    }
  },
  requestAnimFrame: function (callback) {
    $XIcS$var$animQueue.push(callback);

    if ($XIcS$var$animQueue.length === 1) {
      requestAnimationFrame(function () {
        var queue = $XIcS$var$animQueue;
        $XIcS$var$animQueue = [];
        queue.forEach(function (cb) {
          cb();
        });
      });
    }
  },
  createCanvasElement: function () {
    var canvas = document.createElement('canvas');

    try {
      canvas.style = canvas.style || {};
    } catch (e) {}

    return canvas;
  },
  createImageElement: function () {
    return document.createElement('img');
  },
  _isInDocument: function (el) {
    while (el = el.parentNode) {
      if (el == document) {
        return true;
      }
    }

    return false;
  },
  _simplifyArray: function (arr) {
    var retArr = [],
        len = arr.length,
        util = $XIcS$export$Util,
        n,
        val;

    for (n = 0; n < len; n++) {
      val = arr[n];

      if (util._isNumber(val)) {
        val = Math.round(val * 1000) / 1000;
      } else if (!util._isString(val)) {
        val = val.toString();
      }

      retArr.push(val);
    }

    return retArr;
  },
  _urlToImage: function (url, callback) {
    var imageObj = new $bIDB$export$glob.Image();

    imageObj.onload = function () {
      callback(imageObj);
    };

    imageObj.src = url;
  },
  _rgbToHex: function (r, g, b) {
    return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  },
  _hexToRgb: function (hex) {
    hex = hex.replace($XIcS$var$HASH, $XIcS$var$EMPTY_STRING);
    var bigint = parseInt(hex, 16);
    return {
      r: bigint >> 16 & 255,
      g: bigint >> 8 & 255,
      b: bigint & 255
    };
  },
  getRandomColor: function () {
    var randColor = (Math.random() * 0xffffff << 0).toString(16);

    while (randColor.length < 6) {
      randColor = $XIcS$var$ZERO + randColor;
    }

    return $XIcS$var$HASH + randColor;
  },
  get: function (val, def) {
    if (val === undefined) {
      return def;
    } else {
      return val;
    }
  },
  getRGB: function (color) {
    var rgb;

    if (color in $XIcS$var$COLORS) {
      rgb = $XIcS$var$COLORS[color];
      return {
        r: rgb[0],
        g: rgb[1],
        b: rgb[2]
      };
    } else if (color[0] === $XIcS$var$HASH) {
      return this._hexToRgb(color.substring(1));
    } else if (color.substr(0, 4) === $XIcS$var$RGB_PAREN) {
      rgb = $XIcS$var$RGB_REGEX.exec(color.replace(/ /g, ''));
      return {
        r: parseInt(rgb[1], 10),
        g: parseInt(rgb[2], 10),
        b: parseInt(rgb[3], 10)
      };
    } else {
      return {
        r: 0,
        g: 0,
        b: 0
      };
    }
  },
  colorToRGBA: function (str) {
    str = str || 'black';
    return $XIcS$export$Util._namedColorToRBA(str) || $XIcS$export$Util._hex3ColorToRGBA(str) || $XIcS$export$Util._hex6ColorToRGBA(str) || $XIcS$export$Util._rgbColorToRGBA(str) || $XIcS$export$Util._rgbaColorToRGBA(str) || $XIcS$export$Util._hslColorToRGBA(str);
  },
  _namedColorToRBA: function (str) {
    var c = $XIcS$var$COLORS[str.toLowerCase()];

    if (!c) {
      return null;
    }

    return {
      r: c[0],
      g: c[1],
      b: c[2],
      a: 1
    };
  },
  _rgbColorToRGBA: function (str) {
    if (str.indexOf('rgb(') === 0) {
      str = str.match(/rgb\(([^)]+)\)/)[1];
      var parts = str.split(/ *, */).map(Number);
      return {
        r: parts[0],
        g: parts[1],
        b: parts[2],
        a: 1
      };
    }
  },
  _rgbaColorToRGBA: function (str) {
    if (str.indexOf('rgba(') === 0) {
      str = str.match(/rgba\(([^)]+)\)/)[1];
      var parts = str.split(/ *, */).map(Number);
      return {
        r: parts[0],
        g: parts[1],
        b: parts[2],
        a: parts[3]
      };
    }
  },
  _hex6ColorToRGBA: function (str) {
    if (str[0] === '#' && str.length === 7) {
      return {
        r: parseInt(str.slice(1, 3), 16),
        g: parseInt(str.slice(3, 5), 16),
        b: parseInt(str.slice(5, 7), 16),
        a: 1
      };
    }
  },
  _hex3ColorToRGBA: function (str) {
    if (str[0] === '#' && str.length === 4) {
      return {
        r: parseInt(str[1] + str[1], 16),
        g: parseInt(str[2] + str[2], 16),
        b: parseInt(str[3] + str[3], 16),
        a: 1
      };
    }
  },
  _hslColorToRGBA: function (str) {
    if (/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.test(str)) {
      var _a = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(str),
          _ = _a[0],
          hsl = _a.slice(1);

      var h = Number(hsl[0]) / 360;
      var s = Number(hsl[1]) / 100;
      var l = Number(hsl[2]) / 100;
      var t2 = void 0;
      var t3 = void 0;
      var val = void 0;

      if (s === 0) {
        val = l * 255;
        return {
          r: Math.round(val),
          g: Math.round(val),
          b: Math.round(val),
          a: 1
        };
      }

      if (l < 0.5) {
        t2 = l * (1 + s);
      } else {
        t2 = l + s - l * s;
      }

      var t1 = 2 * l - t2;
      var rgb = [0, 0, 0];

      for (var i = 0; i < 3; i++) {
        t3 = h + 1 / 3 * -(i - 1);

        if (t3 < 0) {
          t3++;
        }

        if (t3 > 1) {
          t3--;
        }

        if (6 * t3 < 1) {
          val = t1 + (t2 - t1) * 6 * t3;
        } else if (2 * t3 < 1) {
          val = t2;
        } else if (3 * t3 < 2) {
          val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
        } else {
          val = t1;
        }

        rgb[i] = val * 255;
      }

      return {
        r: Math.round(rgb[0]),
        g: Math.round(rgb[1]),
        b: Math.round(rgb[2]),
        a: 1
      };
    }
  },
  haveIntersection: function (r1, r2) {
    return !(r2.x > r1.x + r1.width || r2.x + r2.width < r1.x || r2.y > r1.y + r1.height || r2.y + r2.height < r1.y);
  },
  cloneObject: function (obj) {
    var retObj = {};

    for (var key in obj) {
      if (this._isPlainObject(obj[key])) {
        retObj[key] = this.cloneObject(obj[key]);
      } else if (this._isArray(obj[key])) {
        retObj[key] = this.cloneArray(obj[key]);
      } else {
        retObj[key] = obj[key];
      }
    }

    return retObj;
  },
  cloneArray: function (arr) {
    return arr.slice(0);
  },
  _degToRad: function (deg) {
    return deg * $XIcS$var$PI_OVER_DEG180;
  },
  _radToDeg: function (rad) {
    return rad * $XIcS$var$DEG180_OVER_PI;
  },
  _capitalize: function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  },
  throw: function (str) {
    throw new Error($XIcS$var$KONVA_ERROR + str);
  },
  error: function (str) {
    console.error($XIcS$var$KONVA_ERROR + str);
  },
  warn: function (str) {
    if (!$bIDB$export$Konva.showWarnings) {
      return;
    }

    console.warn($XIcS$var$KONVA_WARNING + str);
  },
  extend: function (child, parent) {
    function Ctor() {
      this.constructor = child;
    }

    Ctor.prototype = parent.prototype;
    var oldProto = child.prototype;
    child.prototype = new Ctor();

    for (var key in oldProto) {
      if (oldProto.hasOwnProperty(key)) {
        child.prototype[key] = oldProto[key];
      }
    }

    child.__super__ = parent.prototype;
    child.super = parent;
  },
  _getControlPoints: function (x0, y0, x1, y1, x2, y2, t) {
    var d01 = Math.sqrt(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2)),
        d12 = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)),
        fa = t * d01 / (d01 + d12),
        fb = t * d12 / (d01 + d12),
        p1x = x1 - fa * (x2 - x0),
        p1y = y1 - fa * (y2 - y0),
        p2x = x1 + fb * (x2 - x0),
        p2y = y1 + fb * (y2 - y0);
    return [p1x, p1y, p2x, p2y];
  },
  _expandPoints: function (p, tension) {
    var len = p.length,
        allPoints = [],
        n,
        cp;

    for (n = 2; n < len - 2; n += 2) {
      cp = $XIcS$export$Util._getControlPoints(p[n - 2], p[n - 1], p[n], p[n + 1], p[n + 2], p[n + 3], tension);
      allPoints.push(cp[0]);
      allPoints.push(cp[1]);
      allPoints.push(p[n]);
      allPoints.push(p[n + 1]);
      allPoints.push(cp[2]);
      allPoints.push(cp[3]);
    }

    return allPoints;
  },
  each: function (obj, func) {
    for (var key in obj) {
      func(key, obj[key]);
    }
  },
  _inRange: function (val, left, right) {
    return left <= val && val < right;
  },
  _getProjectionToSegment: function (x1, y1, x2, y2, x3, y3) {
    var x, y, dist;
    var pd2 = (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);

    if (pd2 == 0) {
      x = x1;
      y = y1;
      dist = (x3 - x2) * (x3 - x2) + (y3 - y2) * (y3 - y2);
    } else {
      var u = ((x3 - x1) * (x2 - x1) + (y3 - y1) * (y2 - y1)) / pd2;

      if (u < 0) {
        x = x1;
        y = y1;
        dist = (x1 - x3) * (x1 - x3) + (y1 - y3) * (y1 - y3);
      } else if (u > 1.0) {
        x = x2;
        y = y2;
        dist = (x2 - x3) * (x2 - x3) + (y2 - y3) * (y2 - y3);
      } else {
        x = x1 + u * (x2 - x1);
        y = y1 + u * (y2 - y1);
        dist = (x - x3) * (x - x3) + (y - y3) * (y - y3);
      }
    }

    return [x, y, dist];
  },
  _getProjectionToLine: function (pt, line, isClosed) {
    var pc = $XIcS$export$Util.cloneObject(pt);
    var dist = Number.MAX_VALUE;
    line.forEach(function (p1, i) {
      if (!isClosed && i === line.length - 1) {
        return;
      }

      var p2 = line[(i + 1) % line.length];

      var proj = $XIcS$export$Util._getProjectionToSegment(p1.x, p1.y, p2.x, p2.y, pt.x, pt.y);

      var px = proj[0],
          py = proj[1],
          pdist = proj[2];

      if (pdist < dist) {
        pc.x = px;
        pc.y = py;
        dist = pdist;
      }
    });
    return pc;
  },
  _prepareArrayForTween: function (startArray, endArray, isClosed) {
    var n,
        start = [],
        end = [];

    if (startArray.length > endArray.length) {
      var temp = endArray;
      endArray = startArray;
      startArray = temp;
    }

    for (n = 0; n < startArray.length; n += 2) {
      start.push({
        x: startArray[n],
        y: startArray[n + 1]
      });
    }

    for (n = 0; n < endArray.length; n += 2) {
      end.push({
        x: endArray[n],
        y: endArray[n + 1]
      });
    }

    var newStart = [];
    end.forEach(function (point) {
      var pr = $XIcS$export$Util._getProjectionToLine(point, start, isClosed);

      newStart.push(pr.x);
      newStart.push(pr.y);
    });
    return newStart;
  },
  _prepareToStringify: function (obj) {
    var desc;
    obj.visitedByCircularReferenceRemoval = true;

    for (var key in obj) {
      if (!(obj.hasOwnProperty(key) && obj[key] && typeof obj[key] == 'object')) {
        continue;
      }

      desc = Object.getOwnPropertyDescriptor(obj, key);

      if (obj[key].visitedByCircularReferenceRemoval || $XIcS$export$Util._isElement(obj[key])) {
        if (desc.configurable) {
          delete obj[key];
        } else {
          return null;
        }
      } else if ($XIcS$export$Util._prepareToStringify(obj[key]) === null) {
        if (desc.configurable) {
          delete obj[key];
        } else {
          return null;
        }
      }
    }

    delete obj.visitedByCircularReferenceRemoval;
    return obj;
  },
  _assign: function (target, source) {
    for (var key in source) {
      target[key] = source[key];
    }

    return target;
  },
  _getFirstPointerId: function (evt) {
    if (!evt.touches) {
      return 999;
    } else {
      return evt.changedTouches[0].identifier;
    }
  }
};
$XIcS$exports.Util = $XIcS$export$Util;
// ASSET: node_modules/konva/lib/Validators.js
var $tgRR$exports = {};
Object.defineProperty($tgRR$exports, "__esModule", {
  value: true
});

function $tgRR$var$_formatValue(val) {
  if ($XIcS$export$Util._isString(val)) {
    return '"' + val + '"';
  }

  if (Object.prototype.toString.call(val) === '[object Number]') {
    return val;
  }

  if ($XIcS$export$Util._isBoolean(val)) {
    return val;
  }

  return Object.prototype.toString.call(val);
}

function $tgRR$var$RGBComponent(val) {
  if (val > 255) {
    return 255;
  } else if (val < 0) {
    return 0;
  }

  return Math.round(val);
}

var $tgRR$export$RGBComponent = $tgRR$var$RGBComponent;
$tgRR$exports.RGBComponent = $tgRR$export$RGBComponent;

function $tgRR$var$alphaComponent(val) {
  if (val > 1) {
    return 1;
  } else if (val < 0.0001) {
    return 0.0001;
  }

  return val;
}

var $tgRR$export$alphaComponent = $tgRR$var$alphaComponent;
$tgRR$exports.alphaComponent = $tgRR$export$alphaComponent;

function $tgRR$var$getNumberValidator() {
  if ($bIDB$export$Konva.isUnminified) {
    return function (val, attr) {
      if (!$XIcS$export$Util._isNumber(val)) {
        $XIcS$export$Util.warn($tgRR$var$_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a number.');
      }

      return val;
    };
  }
}

var $tgRR$export$getNumberValidator = $tgRR$var$getNumberValidator;
$tgRR$exports.getNumberValidator = $tgRR$export$getNumberValidator;

function $tgRR$var$getNumberOrAutoValidator() {
  if ($bIDB$export$Konva.isUnminified) {
    return function (val, attr) {
      var isNumber = $XIcS$export$Util._isNumber(val);

      var isAuto = val === 'auto';

      if (!(isNumber || isAuto)) {
        $XIcS$export$Util.warn($tgRR$var$_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a number or "auto".');
      }

      return val;
    };
  }
}

var $tgRR$export$getNumberOrAutoValidator = $tgRR$var$getNumberOrAutoValidator;
$tgRR$exports.getNumberOrAutoValidator = $tgRR$export$getNumberOrAutoValidator;

function $tgRR$var$getStringValidator() {
  if ($bIDB$export$Konva.isUnminified) {
    return function (val, attr) {
      if (!$XIcS$export$Util._isString(val)) {
        $XIcS$export$Util.warn($tgRR$var$_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a string.');
      }

      return val;
    };
  }
}

var $tgRR$export$getStringValidator = $tgRR$var$getStringValidator;
$tgRR$exports.getStringValidator = $tgRR$export$getStringValidator;

function $tgRR$var$getFunctionValidator() {
  if ($bIDB$export$Konva.isUnminified) {
    return function (val, attr) {
      if (!$XIcS$export$Util._isFunction(val)) {
        $XIcS$export$Util.warn($tgRR$var$_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a function.');
      }

      return val;
    };
  }
}

var $tgRR$export$getFunctionValidator = $tgRR$var$getFunctionValidator;
$tgRR$exports.getFunctionValidator = $tgRR$export$getFunctionValidator;

function $tgRR$var$getNumberArrayValidator() {
  if ($bIDB$export$Konva.isUnminified) {
    return function (val, attr) {
      if (!$XIcS$export$Util._isArray(val)) {
        $XIcS$export$Util.warn($tgRR$var$_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a array of numbers.');
      } else {
        val.forEach(function (item) {
          if (!$XIcS$export$Util._isNumber(item)) {
            $XIcS$export$Util.warn('"' + attr + '" attribute has non numeric element ' + item + '. Make sure that all elements are numbers.');
          }
        });
      }

      return val;
    };
  }
}

var $tgRR$export$getNumberArrayValidator = $tgRR$var$getNumberArrayValidator;
$tgRR$exports.getNumberArrayValidator = $tgRR$export$getNumberArrayValidator;

function $tgRR$var$getBooleanValidator() {
  if ($bIDB$export$Konva.isUnminified) {
    return function (val, attr) {
      var isBool = val === true || val === false;

      if (!isBool) {
        $XIcS$export$Util.warn($tgRR$var$_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a boolean.');
      }

      return val;
    };
  }
}

var $tgRR$export$getBooleanValidator = $tgRR$var$getBooleanValidator;
$tgRR$exports.getBooleanValidator = $tgRR$export$getBooleanValidator;

function $tgRR$var$getComponentValidator(components) {
  if ($bIDB$export$Konva.isUnminified) {
    return function (val, attr) {
      if (!$XIcS$export$Util.isObject(val)) {
        $XIcS$export$Util.warn($tgRR$var$_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be an object with properties ' + components);
      }

      return val;
    };
  }
}

var $tgRR$export$getComponentValidator = $tgRR$var$getComponentValidator;
$tgRR$exports.getComponentValidator = $tgRR$export$getComponentValidator;
// ASSET: node_modules/konva/lib/Factory.js
var $cgGB$exports = {};
Object.defineProperty($cgGB$exports, "__esModule", {
  value: true
});
var $cgGB$var$GET = 'get',
    $cgGB$var$SET = 'set';
var $cgGB$export$Factory = {
  addGetterSetter: function (constructor, attr, def, validator, after) {
    this.addGetter(constructor, attr, def);
    this.addSetter(constructor, attr, validator, after);
    this.addOverloadedGetterSetter(constructor, attr);
  },
  addGetter: function (constructor, attr, def) {
    var method = $cgGB$var$GET + $XIcS$export$Util._capitalize(attr);

    constructor.prototype[method] = constructor.prototype[method] || function () {
      var val = this.attrs[attr];
      return val === undefined ? def : val;
    };
  },
  addSetter: function (constructor, attr, validator, after) {
    var method = $cgGB$var$SET + $XIcS$export$Util._capitalize(attr);

    if (!constructor.prototype[method]) {
      $cgGB$export$Factory.overWriteSetter(constructor, attr, validator, after);
    }
  },
  overWriteSetter: function (constructor, attr, validator, after) {
    var method = $cgGB$var$SET + $XIcS$export$Util._capitalize(attr);

    constructor.prototype[method] = function (val) {
      if (validator && val !== undefined && val !== null) {
        val = validator.call(this, val, attr);
      }

      this._setAttr(attr, val);

      if (after) {
        after.call(this);
      }

      return this;
    };
  },
  addComponentsGetterSetter: function (constructor, attr, components, validator, after) {
    var len = components.length,
        capitalize = $XIcS$export$Util._capitalize,
        getter = $cgGB$var$GET + capitalize(attr),
        setter = $cgGB$var$SET + capitalize(attr),
        n,
        component;

    constructor.prototype[getter] = function () {
      var ret = {};

      for (n = 0; n < len; n++) {
        component = components[n];
        ret[component] = this.getAttr(attr + capitalize(component));
      }

      return ret;
    };

    var basicValidator = $tgRR$export$getComponentValidator(components);

    constructor.prototype[setter] = function (val) {
      var oldVal = this.attrs[attr],
          key;

      if (validator) {
        val = validator.call(this, val);
      }

      if (basicValidator) {
        basicValidator.call(this, val, attr);
      }

      for (key in val) {
        if (!val.hasOwnProperty(key)) {
          continue;
        }

        this._setAttr(attr + capitalize(key), val[key]);
      }

      this._fireChangeEvent(attr, oldVal, val);

      if (after) {
        after.call(this);
      }

      return this;
    };

    this.addOverloadedGetterSetter(constructor, attr);
  },
  addOverloadedGetterSetter: function (constructor, attr) {
    var capitalizedAttr = $XIcS$export$Util._capitalize(attr),
        setter = $cgGB$var$SET + capitalizedAttr,
        getter = $cgGB$var$GET + capitalizedAttr;

    constructor.prototype[attr] = function () {
      if (arguments.length) {
        this[setter](arguments[0]);
        return this;
      }

      return this[getter]();
    };
  },
  addDeprecatedGetterSetter: function (constructor, attr, def, validator) {
    $XIcS$export$Util.error('Adding deprecated ' + attr);

    var method = $cgGB$var$GET + $XIcS$export$Util._capitalize(attr);

    var message = attr + ' property is deprecated and will be removed soon. Look at Konva change log for more information.';

    constructor.prototype[method] = function () {
      $XIcS$export$Util.error(message);
      var val = this.attrs[attr];
      return val === undefined ? def : val;
    };

    this.addSetter(constructor, attr, validator, function () {
      $XIcS$export$Util.error(message);
    });
    this.addOverloadedGetterSetter(constructor, attr);
  },
  backCompat: function (constructor, methods) {
    $XIcS$export$Util.each(methods, function (oldMethodName, newMethodName) {
      var method = constructor.prototype[newMethodName];

      var oldGetter = $cgGB$var$GET + $XIcS$export$Util._capitalize(oldMethodName);

      var oldSetter = $cgGB$var$SET + $XIcS$export$Util._capitalize(oldMethodName);

      function deprecated() {
        method.apply(this, arguments);
        $XIcS$export$Util.error('"' + oldMethodName + '" method is deprecated and will be removed soon. Use ""' + newMethodName + '" instead.');
      }

      constructor.prototype[oldMethodName] = deprecated;
      constructor.prototype[oldGetter] = deprecated;
      constructor.prototype[oldSetter] = deprecated;
    });
  },
  afterSetFilter: function () {
    this._filterUpToDate = false;
  }
};
$cgGB$exports.Factory = $cgGB$export$Factory;
// ASSET: node_modules/konva/lib/Context.js
var $pIAY$exports = {};

var $pIAY$var$__extends = $pIAY$exports && $pIAY$exports.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty($pIAY$exports, "__esModule", {
  value: true
});
var $pIAY$var$COMMA = ',',
    $pIAY$var$OPEN_PAREN = '(',
    $pIAY$var$CLOSE_PAREN = ')',
    $pIAY$var$OPEN_PAREN_BRACKET = '([',
    $pIAY$var$CLOSE_BRACKET_PAREN = '])',
    $pIAY$var$SEMICOLON = ';',
    $pIAY$var$DOUBLE_PAREN = '()',
    $pIAY$var$EQUALS = '=',
    $pIAY$var$CONTEXT_METHODS = ['arc', 'arcTo', 'beginPath', 'bezierCurveTo', 'clearRect', 'clip', 'closePath', 'createLinearGradient', 'createPattern', 'createRadialGradient', 'drawImage', 'ellipse', 'fill', 'fillText', 'getImageData', 'createImageData', 'lineTo', 'moveTo', 'putImageData', 'quadraticCurveTo', 'rect', 'restore', 'rotate', 'save', 'scale', 'setLineDash', 'setTransform', 'stroke', 'strokeText', 'transform', 'translate'];
var $pIAY$var$CONTEXT_PROPERTIES = ['fillStyle', 'strokeStyle', 'shadowColor', 'shadowBlur', 'shadowOffsetX', 'shadowOffsetY', 'lineCap', 'lineDashOffset', 'lineJoin', 'lineWidth', 'miterLimit', 'font', 'textAlign', 'textBaseline', 'globalAlpha', 'globalCompositeOperation', 'imageSmoothingEnabled'];
var $pIAY$var$traceArrMax = 100;

var $pIAY$var$Context = function () {
  function Context(canvas) {
    this.canvas = canvas;
    this._context = canvas._canvas.getContext('2d');

    if ($bIDB$export$Konva.enableTrace) {
      this.traceArr = [];

      this._enableTrace();
    }
  }

  Context.prototype.fillShape = function (shape) {
    if (shape.getFillEnabled()) {
      this._fill(shape);
    }
  };

  Context.prototype._fill = function (shape) {};

  Context.prototype.strokeShape = function (shape) {
    if (shape.getStrokeEnabled()) {
      this._stroke(shape);
    }
  };

  Context.prototype._stroke = function (shape) {};

  Context.prototype.fillStrokeShape = function (shape) {
    if (shape.getFillEnabled()) {
      this._fill(shape);
    }

    if (shape.getStrokeEnabled()) {
      this._stroke(shape);
    }
  };

  Context.prototype.getTrace = function (relaxed) {
    var traceArr = this.traceArr,
        len = traceArr.length,
        str = '',
        n,
        trace,
        method,
        args;

    for (n = 0; n < len; n++) {
      trace = traceArr[n];
      method = trace.method;

      if (method) {
        args = trace.args;
        str += method;

        if (relaxed) {
          str += $pIAY$var$DOUBLE_PAREN;
        } else {
          if ($XIcS$export$Util._isArray(args[0])) {
            str += $pIAY$var$OPEN_PAREN_BRACKET + args.join($pIAY$var$COMMA) + $pIAY$var$CLOSE_BRACKET_PAREN;
          } else {
            str += $pIAY$var$OPEN_PAREN + args.join($pIAY$var$COMMA) + $pIAY$var$CLOSE_PAREN;
          }
        }
      } else {
        str += trace.property;

        if (!relaxed) {
          str += $pIAY$var$EQUALS + trace.val;
        }
      }

      str += $pIAY$var$SEMICOLON;
    }

    return str;
  };

  Context.prototype.clearTrace = function () {
    this.traceArr = [];
  };

  Context.prototype._trace = function (str) {
    var traceArr = this.traceArr,
        len;
    traceArr.push(str);
    len = traceArr.length;

    if (len >= $pIAY$var$traceArrMax) {
      traceArr.shift();
    }
  };

  Context.prototype.reset = function () {
    var pixelRatio = this.getCanvas().getPixelRatio();
    this.setTransform(1 * pixelRatio, 0, 0, 1 * pixelRatio, 0, 0);
  };

  Context.prototype.getCanvas = function () {
    return this.canvas;
  };

  Context.prototype.clear = function (bounds) {
    var canvas = this.getCanvas();

    if (bounds) {
      this.clearRect(bounds.x || 0, bounds.y || 0, bounds.width || 0, bounds.height || 0);
    } else {
      this.clearRect(0, 0, canvas.getWidth() / canvas.pixelRatio, canvas.getHeight() / canvas.pixelRatio);
    }
  };

  Context.prototype._applyLineCap = function (shape) {
    var lineCap = shape.getLineCap();

    if (lineCap) {
      this.setAttr('lineCap', lineCap);
    }
  };

  Context.prototype._applyOpacity = function (shape) {
    var absOpacity = shape.getAbsoluteOpacity();

    if (absOpacity !== 1) {
      this.setAttr('globalAlpha', absOpacity);
    }
  };

  Context.prototype._applyLineJoin = function (shape) {
    var lineJoin = shape.getLineJoin();

    if (lineJoin) {
      this.setAttr('lineJoin', lineJoin);
    }
  };

  Context.prototype.setAttr = function (attr, val) {
    this._context[attr] = val;
  };

  Context.prototype.arc = function (a0, a1, a2, a3, a4, a5) {
    this._context.arc(a0, a1, a2, a3, a4, a5);
  };

  Context.prototype.arcTo = function (a0, a1, a2, a3, a4) {
    this._context.arcTo(a0, a1, a2, a3, a4);
  };

  Context.prototype.beginPath = function () {
    this._context.beginPath();
  };

  Context.prototype.bezierCurveTo = function (a0, a1, a2, a3, a4, a5) {
    this._context.bezierCurveTo(a0, a1, a2, a3, a4, a5);
  };

  Context.prototype.clearRect = function (a0, a1, a2, a3) {
    this._context.clearRect(a0, a1, a2, a3);
  };

  Context.prototype.clip = function () {
    this._context.clip();
  };

  Context.prototype.closePath = function () {
    this._context.closePath();
  };

  Context.prototype.createImageData = function (a0, a1) {
    var a = arguments;

    if (a.length === 2) {
      return this._context.createImageData(a0, a1);
    } else if (a.length === 1) {
      return this._context.createImageData(a0);
    }
  };

  Context.prototype.createLinearGradient = function (a0, a1, a2, a3) {
    return this._context.createLinearGradient(a0, a1, a2, a3);
  };

  Context.prototype.createPattern = function (a0, a1) {
    return this._context.createPattern(a0, a1);
  };

  Context.prototype.createRadialGradient = function (a0, a1, a2, a3, a4, a5) {
    return this._context.createRadialGradient(a0, a1, a2, a3, a4, a5);
  };

  Context.prototype.drawImage = function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
    var a = arguments,
        _context = this._context;

    if (a.length === 3) {
      _context.drawImage(a0, a1, a2);
    } else if (a.length === 5) {
      _context.drawImage(a0, a1, a2, a3, a4);
    } else if (a.length === 9) {
      _context.drawImage(a0, a1, a2, a3, a4, a5, a6, a7, a8);
    }
  };

  Context.prototype.ellipse = function (a0, a1, a2, a3, a4, a5, a6, a7) {
    this._context.ellipse(a0, a1, a2, a3, a4, a5, a6, a7);
  };

  Context.prototype.isPointInPath = function (x, y) {
    return this._context.isPointInPath(x, y);
  };

  Context.prototype.fill = function () {
    this._context.fill();
  };

  Context.prototype.fillRect = function (x, y, width, height) {
    this._context.fillRect(x, y, width, height);
  };

  Context.prototype.strokeRect = function (x, y, width, height) {
    this._context.strokeRect(x, y, width, height);
  };

  Context.prototype.fillText = function (a0, a1, a2) {
    this._context.fillText(a0, a1, a2);
  };

  Context.prototype.measureText = function (text) {
    return this._context.measureText(text);
  };

  Context.prototype.getImageData = function (a0, a1, a2, a3) {
    return this._context.getImageData(a0, a1, a2, a3);
  };

  Context.prototype.lineTo = function (a0, a1) {
    this._context.lineTo(a0, a1);
  };

  Context.prototype.moveTo = function (a0, a1) {
    this._context.moveTo(a0, a1);
  };

  Context.prototype.rect = function (a0, a1, a2, a3) {
    this._context.rect(a0, a1, a2, a3);
  };

  Context.prototype.putImageData = function (a0, a1, a2) {
    this._context.putImageData(a0, a1, a2);
  };

  Context.prototype.quadraticCurveTo = function (a0, a1, a2, a3) {
    this._context.quadraticCurveTo(a0, a1, a2, a3);
  };

  Context.prototype.restore = function () {
    this._context.restore();
  };

  Context.prototype.rotate = function (a0) {
    this._context.rotate(a0);
  };

  Context.prototype.save = function () {
    this._context.save();
  };

  Context.prototype.scale = function (a0, a1) {
    this._context.scale(a0, a1);
  };

  Context.prototype.setLineDash = function (a0) {
    if (this._context.setLineDash) {
      this._context.setLineDash(a0);
    } else if ('mozDash' in this._context) {
      this._context['mozDash'] = a0;
    } else if ('webkitLineDash' in this._context) {
      this._context['webkitLineDash'] = a0;
    }
  };

  Context.prototype.getLineDash = function () {
    return this._context.getLineDash();
  };

  Context.prototype.setTransform = function (a0, a1, a2, a3, a4, a5) {
    this._context.setTransform(a0, a1, a2, a3, a4, a5);
  };

  Context.prototype.stroke = function () {
    this._context.stroke();
  };

  Context.prototype.strokeText = function (a0, a1, a2, a3) {
    this._context.strokeText(a0, a1, a2, a3);
  };

  Context.prototype.transform = function (a0, a1, a2, a3, a4, a5) {
    this._context.transform(a0, a1, a2, a3, a4, a5);
  };

  Context.prototype.translate = function (a0, a1) {
    this._context.translate(a0, a1);
  };

  Context.prototype._enableTrace = function () {
    var that = this,
        len = $pIAY$var$CONTEXT_METHODS.length,
        _simplifyArray = $XIcS$export$Util._simplifyArray,
        origSetter = this.setAttr,
        n,
        args;

    var func = function (methodName) {
      var origMethod = that[methodName],
          ret;

      that[methodName] = function () {
        args = _simplifyArray(Array.prototype.slice.call(arguments, 0));
        ret = origMethod.apply(that, arguments);

        that._trace({
          method: methodName,
          args: args
        });

        return ret;
      };
    };

    for (n = 0; n < len; n++) {
      func($pIAY$var$CONTEXT_METHODS[n]);
    }

    that.setAttr = function () {
      origSetter.apply(that, arguments);
      var prop = arguments[0];
      var val = arguments[1];

      if (prop === 'shadowOffsetX' || prop === 'shadowOffsetY' || prop === 'shadowBlur') {
        val = val / this.canvas.getPixelRatio();
      }

      that._trace({
        property: prop,
        val: val
      });
    };
  };

  Context.prototype._applyGlobalCompositeOperation = function (node) {
    var globalCompositeOperation = node.getGlobalCompositeOperation();

    if (globalCompositeOperation !== 'source-over') {
      this.setAttr('globalCompositeOperation', globalCompositeOperation);
    }
  };

  return Context;
}();

var $pIAY$export$Context = $pIAY$var$Context;
$pIAY$exports.Context = $pIAY$export$Context;
$pIAY$var$CONTEXT_PROPERTIES.forEach(function (prop) {
  Object.defineProperty($pIAY$var$Context.prototype, prop, {
    get: function () {
      return this._context[prop];
    },
    set: function (val) {
      this._context[prop] = val;
    }
  });
});

var $pIAY$var$SceneContext = function (_super) {
  $pIAY$var$__extends(SceneContext, _super);

  function SceneContext() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  SceneContext.prototype._fillColor = function (shape) {
    var fill = shape.fill();
    this.setAttr('fillStyle', fill);

    shape._fillFunc(this);
  };

  SceneContext.prototype._fillPattern = function (shape) {
    var fillPatternX = shape.getFillPatternX(),
        fillPatternY = shape.getFillPatternY(),
        fillPatternRotation = $bIDB$export$Konva.getAngle(shape.getFillPatternRotation()),
        fillPatternOffsetX = shape.getFillPatternOffsetX(),
        fillPatternOffsetY = shape.getFillPatternOffsetY(),
        fillPatternScaleX = shape.getFillPatternScaleX(),
        fillPatternScaleY = shape.getFillPatternScaleY();

    if (fillPatternX || fillPatternY) {
      this.translate(fillPatternX || 0, fillPatternY || 0);
    }

    if (fillPatternRotation) {
      this.rotate(fillPatternRotation);
    }

    if (fillPatternScaleX || fillPatternScaleY) {
      this.scale(fillPatternScaleX, fillPatternScaleY);
    }

    if (fillPatternOffsetX || fillPatternOffsetY) {
      this.translate(-1 * fillPatternOffsetX, -1 * fillPatternOffsetY);
    }

    this.setAttr('fillStyle', shape._getFillPattern());

    shape._fillFunc(this);
  };

  SceneContext.prototype._fillLinearGradient = function (shape) {
    var grd = shape._getLinearGradient();

    if (grd) {
      this.setAttr('fillStyle', grd);

      shape._fillFunc(this);
    }
  };

  SceneContext.prototype._fillRadialGradient = function (shape) {
    var grd = shape._getRadialGradient();

    if (grd) {
      this.setAttr('fillStyle', grd);

      shape._fillFunc(this);
    }
  };

  SceneContext.prototype._fill = function (shape) {
    var hasColor = shape.fill(),
        fillPriority = shape.getFillPriority();

    if (hasColor && fillPriority === 'color') {
      this._fillColor(shape);

      return;
    }

    var hasPattern = shape.getFillPatternImage();

    if (hasPattern && fillPriority === 'pattern') {
      this._fillPattern(shape);

      return;
    }

    var hasLinearGradient = shape.getFillLinearGradientColorStops();

    if (hasLinearGradient && fillPriority === 'linear-gradient') {
      this._fillLinearGradient(shape);

      return;
    }

    var hasRadialGradient = shape.getFillRadialGradientColorStops();

    if (hasRadialGradient && fillPriority === 'radial-gradient') {
      this._fillRadialGradient(shape);

      return;
    }

    if (hasColor) {
      this._fillColor(shape);
    } else if (hasPattern) {
      this._fillPattern(shape);
    } else if (hasLinearGradient) {
      this._fillLinearGradient(shape);
    } else if (hasRadialGradient) {
      this._fillRadialGradient(shape);
    }
  };

  SceneContext.prototype._strokeLinearGradient = function (shape) {
    var start = shape.getStrokeLinearGradientStartPoint(),
        end = shape.getStrokeLinearGradientEndPoint(),
        colorStops = shape.getStrokeLinearGradientColorStops(),
        grd = this.createLinearGradient(start.x, start.y, end.x, end.y);

    if (colorStops) {
      for (var n = 0; n < colorStops.length; n += 2) {
        grd.addColorStop(colorStops[n], colorStops[n + 1]);
      }

      this.setAttr('strokeStyle', grd);
    }
  };

  SceneContext.prototype._stroke = function (shape) {
    var dash = shape.dash(),
        strokeScaleEnabled = shape.getStrokeScaleEnabled();

    if (shape.hasStroke()) {
      if (!strokeScaleEnabled) {
        this.save();
        var pixelRatio = this.getCanvas().getPixelRatio();
        this.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      }

      this._applyLineCap(shape);

      if (dash && shape.dashEnabled()) {
        this.setLineDash(dash);
        this.setAttr('lineDashOffset', shape.dashOffset());
      }

      this.setAttr('lineWidth', shape.strokeWidth());

      if (!shape.getShadowForStrokeEnabled()) {
        this.setAttr('shadowColor', 'rgba(0,0,0,0)');
      }

      var hasLinearGradient = shape.getStrokeLinearGradientColorStops();

      if (hasLinearGradient) {
        this._strokeLinearGradient(shape);
      } else {
        this.setAttr('strokeStyle', shape.stroke());
      }

      shape._strokeFunc(this);

      if (!strokeScaleEnabled) {
        this.restore();
      }
    }
  };

  SceneContext.prototype._applyShadow = function (shape) {
    var util = $XIcS$export$Util,
        color = util.get(shape.getShadowRGBA(), 'black'),
        blur = util.get(shape.getShadowBlur(), 5),
        offset = util.get(shape.getShadowOffset(), {
      x: 0,
      y: 0
    }),
        scale = shape.getAbsoluteScale(),
        ratio = this.canvas.getPixelRatio(),
        scaleX = scale.x * ratio,
        scaleY = scale.y * ratio;
    this.setAttr('shadowColor', color);
    this.setAttr('shadowBlur', blur * Math.min(Math.abs(scaleX), Math.abs(scaleY)));
    this.setAttr('shadowOffsetX', offset.x * scaleX);
    this.setAttr('shadowOffsetY', offset.y * scaleY);
  };

  return SceneContext;
}($pIAY$var$Context);

var $pIAY$export$SceneContext = $pIAY$var$SceneContext;
$pIAY$exports.SceneContext = $pIAY$export$SceneContext;

var $pIAY$var$HitContext = function (_super) {
  $pIAY$var$__extends(HitContext, _super);

  function HitContext() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  HitContext.prototype._fill = function (shape) {
    this.save();
    this.setAttr('fillStyle', shape.colorKey);

    shape._fillFuncHit(this);

    this.restore();
  };

  HitContext.prototype._stroke = function (shape) {
    if (shape.hasHitStroke()) {
      var strokeScaleEnabled = shape.getStrokeScaleEnabled();

      if (!strokeScaleEnabled) {
        this.save();
        var pixelRatio = this.getCanvas().getPixelRatio();
        this.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      }

      this._applyLineCap(shape);

      var hitStrokeWidth = shape.hitStrokeWidth();
      var strokeWidth = hitStrokeWidth === 'auto' ? shape.strokeWidth() : hitStrokeWidth;
      this.setAttr('lineWidth', strokeWidth);
      this.setAttr('strokeStyle', shape.colorKey);

      shape._strokeFuncHit(this);

      if (!strokeScaleEnabled) {
        this.restore();
      }
    }
  };

  return HitContext;
}($pIAY$var$Context);

var $pIAY$export$HitContext = $pIAY$var$HitContext;
$pIAY$exports.HitContext = $pIAY$export$HitContext;
// ASSET: node_modules/konva/lib/Canvas.js
var $KydS$exports = {};

var $KydS$var$__extends = $KydS$exports && $KydS$exports.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty($KydS$exports, "__esModule", {
  value: true
});
var $KydS$var$_pixelRatio;

function $KydS$var$getDevicePixelRatio() {
  if ($KydS$var$_pixelRatio) {
    return $KydS$var$_pixelRatio;
  }

  var canvas = $XIcS$export$Util.createCanvasElement();
  var context = canvas.getContext('2d');

  $KydS$var$_pixelRatio = function () {
    var devicePixelRatio = $bIDB$export$Konva._global.devicePixelRatio || 1,
        backingStoreRatio = context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;
    return devicePixelRatio / backingStoreRatio;
  }();

  return $KydS$var$_pixelRatio;
}

var $KydS$var$Canvas = function () {
  function Canvas(config) {
    this.pixelRatio = 1;
    this.width = 0;
    this.height = 0;
    this.isCache = false;
    var conf = config || {};
    var pixelRatio = conf.pixelRatio || $bIDB$export$Konva.pixelRatio || $KydS$var$getDevicePixelRatio();
    this.pixelRatio = pixelRatio;
    this._canvas = $XIcS$export$Util.createCanvasElement();
    this._canvas.style.padding = '0';
    this._canvas.style.margin = '0';
    this._canvas.style.border = '0';
    this._canvas.style.background = 'transparent';
    this._canvas.style.position = 'absolute';
    this._canvas.style.top = '0';
    this._canvas.style.left = '0';
  }

  Canvas.prototype.getContext = function () {
    return this.context;
  };

  Canvas.prototype.getPixelRatio = function () {
    return this.pixelRatio;
  };

  Canvas.prototype.setPixelRatio = function (pixelRatio) {
    var previousRatio = this.pixelRatio;
    this.pixelRatio = pixelRatio;
    this.setSize(this.getWidth() / previousRatio, this.getHeight() / previousRatio);
  };

  Canvas.prototype.setWidth = function (width) {
    this.width = this._canvas.width = width * this.pixelRatio;
    this._canvas.style.width = width + 'px';

    var pixelRatio = this.pixelRatio,
        _context = this.getContext()._context;

    _context.scale(pixelRatio, pixelRatio);
  };

  Canvas.prototype.setHeight = function (height) {
    this.height = this._canvas.height = height * this.pixelRatio;
    this._canvas.style.height = height + 'px';

    var pixelRatio = this.pixelRatio,
        _context = this.getContext()._context;

    _context.scale(pixelRatio, pixelRatio);
  };

  Canvas.prototype.getWidth = function () {
    return this.width;
  };

  Canvas.prototype.getHeight = function () {
    return this.height;
  };

  Canvas.prototype.setSize = function (width, height) {
    this.setWidth(width);
    this.setHeight(height);
  };

  Canvas.prototype.toDataURL = function (mimeType, quality) {
    try {
      return this._canvas.toDataURL(mimeType, quality);
    } catch (e) {
      try {
        return this._canvas.toDataURL();
      } catch (err) {
        $XIcS$export$Util.error('Unable to get data URL. ' + err.message);
        return '';
      }
    }
  };

  return Canvas;
}();

var $KydS$export$Canvas = $KydS$var$Canvas;
$KydS$exports.Canvas = $KydS$export$Canvas;
$cgGB$export$Factory.addGetterSetter($KydS$var$Canvas, 'pixelRatio', undefined, $tgRR$export$getNumberValidator());

var $KydS$var$SceneCanvas = function (_super) {
  $KydS$var$__extends(SceneCanvas, _super);

  function SceneCanvas(config) {
    if (config === void 0) {
      config = {
        width: 0,
        height: 0
      };
    }

    var _this = _super.call(this, config) || this;

    _this.context = new $pIAY$export$SceneContext(_this);

    _this.setSize(config.width, config.height);

    return _this;
  }

  return SceneCanvas;
}($KydS$var$Canvas);

var $KydS$export$SceneCanvas = $KydS$var$SceneCanvas;
$KydS$exports.SceneCanvas = $KydS$export$SceneCanvas;

var $KydS$var$HitCanvas = function (_super) {
  $KydS$var$__extends(HitCanvas, _super);

  function HitCanvas(config) {
    if (config === void 0) {
      config = {
        width: 0,
        height: 0
      };
    }

    var _this = _super.call(this, config) || this;

    _this.hitCanvas = true;
    _this.context = new $pIAY$export$HitContext(_this);

    _this.setSize(config.width, config.height);

    return _this;
  }

  return HitCanvas;
}($KydS$var$Canvas);

var $KydS$export$HitCanvas = $KydS$var$HitCanvas;
$KydS$exports.HitCanvas = $KydS$export$HitCanvas;
// ASSET: node_modules/konva/lib/DragAndDrop.js
var $XvfD$exports = {};
Object.defineProperty($XvfD$exports, "__esModule", {
  value: true
});
var $XvfD$export$DD = {
  get isDragging() {
    var flag = false;

    $XvfD$export$DD._dragElements.forEach(function (elem) {
      if (elem.dragStatus === 'dragging') {
        flag = true;
      }
    });

    return flag;
  },

  justDragged: false,

  get node() {
    var node;

    $XvfD$export$DD._dragElements.forEach(function (elem) {
      node = elem.node;
    });

    return node;
  },

  _dragElements: new Map(),
  _drag: function (evt) {
    $XvfD$export$DD._dragElements.forEach(function (elem, key) {
      var node = elem.node;
      var stage = node.getStage();
      stage.setPointersPositions(evt);

      if (elem.pointerId === undefined) {
        elem.pointerId = $XIcS$export$Util._getFirstPointerId(evt);
      }

      var pos = stage._changedPointerPositions.find(function (pos) {
        return pos.id === elem.pointerId;
      });

      if (!pos) {
        return;
      }

      if (elem.dragStatus !== 'dragging') {
        var dragDistance = node.dragDistance();
        var distance = Math.max(Math.abs(pos.x - elem.startPointerPos.x), Math.abs(pos.y - elem.startPointerPos.y));

        if (distance < dragDistance) {
          return;
        }

        node.startDrag({
          evt: evt
        });

        if (!node.isDragging()) {
          return;
        }
      }

      node._setDragPosition(evt, elem);

      node.fire('dragmove', {
        type: 'dragmove',
        target: node,
        evt: evt
      }, true);
    });
  },
  _endDragBefore: function (evt) {
    $XvfD$export$DD._dragElements.forEach(function (elem, key) {
      var node = elem.node;
      var stage = node.getStage();

      if (evt) {
        stage.setPointersPositions(evt);
      }

      var pos = stage._changedPointerPositions.find(function (pos) {
        return pos.id === elem.pointerId;
      });

      if (!pos) {
        return;
      }

      if (elem.dragStatus === 'dragging' || elem.dragStatus === 'stopped') {
        $XvfD$export$DD.justDragged = true;
        $bIDB$export$Konva.listenClickTap = false;
        elem.dragStatus = 'stopped';
      }

      var drawNode = elem.node.getLayer() || elem.node instanceof $bIDB$export$Konva['Stage'] && elem.node;

      if (drawNode) {
        drawNode.draw();
      }
    });
  },
  _endDragAfter: function (evt) {
    $XvfD$export$DD._dragElements.forEach(function (elem, key) {
      if (elem.dragStatus === 'stopped') {
        elem.node.fire('dragend', {
          type: 'dragend',
          target: elem.node,
          evt: evt
        }, true);
      }

      if (elem.dragStatus !== 'dragging') {
        $XvfD$export$DD._dragElements.delete(key);
      }
    });
  }
};
$XvfD$exports.DD = $XvfD$export$DD;

if ($bIDB$export$Konva.isBrowser) {
  window.addEventListener('mouseup', $XvfD$export$DD._endDragBefore, true);
  window.addEventListener('touchend', $XvfD$export$DD._endDragBefore, true);
  window.addEventListener('mousemove', $XvfD$export$DD._drag);
  window.addEventListener('touchmove', $XvfD$export$DD._drag);
  window.addEventListener('mouseup', $XvfD$export$DD._endDragAfter, false);
  window.addEventListener('touchend', $XvfD$export$DD._endDragAfter, false);
}

// ASSET: node_modules/konva/lib/Node.js
var $pBWF$exports = {};
Object.defineProperty($pBWF$exports, "__esModule", {
  value: true
});
var $pBWF$export$ids = {};
$pBWF$exports.ids = $pBWF$export$ids;
var $pBWF$export$names = {};
$pBWF$exports.names = $pBWF$export$names;

var $pBWF$var$_addId = function (node, id) {
  if (!id) {
    return;
  }

  $pBWF$export$ids[id] = node;
};

var $pBWF$export$_removeId = function (id, node) {
  if (!id) {
    return;
  }

  if ($pBWF$export$ids[id] !== node) {
    return;
  }

  delete $pBWF$export$ids[id];
};

$pBWF$exports._removeId = $pBWF$export$_removeId;

var $pBWF$export$_addName = function (node, name) {
  if (name) {
    if (!$pBWF$export$names[name]) {
      $pBWF$export$names[name] = [];
    }

    $pBWF$export$names[name].push(node);
  }
};

$pBWF$exports._addName = $pBWF$export$_addName;

var $pBWF$export$_removeName = function (name, _id) {
  if (!name) {
    return;
  }

  var nodes = $pBWF$export$names[name];

  if (!nodes) {
    return;
  }

  for (var n = 0; n < nodes.length; n++) {
    var no = nodes[n];

    if (no._id === _id) {
      nodes.splice(n, 1);
    }
  }

  if (nodes.length === 0) {
    delete $pBWF$export$names[name];
  }
};

$pBWF$exports._removeName = $pBWF$export$_removeName;
var $pBWF$var$ABSOLUTE_OPACITY = 'absoluteOpacity',
    $pBWF$var$ABSOLUTE_TRANSFORM = 'absoluteTransform',
    $pBWF$var$ABSOLUTE_SCALE = 'absoluteScale',
    $pBWF$var$CANVAS = 'canvas',
    $pBWF$var$CHANGE = 'Change',
    $pBWF$var$CHILDREN = 'children',
    $pBWF$var$KONVA = 'konva',
    $pBWF$var$LISTENING = 'listening',
    $pBWF$var$MOUSEENTER = 'mouseenter',
    $pBWF$var$MOUSELEAVE = 'mouseleave',
    $pBWF$var$NAME = 'name',
    $pBWF$var$SET = 'set',
    $pBWF$var$SHAPE = 'Shape',
    $pBWF$var$SPACE = ' ',
    $pBWF$var$STAGE = 'stage',
    $pBWF$var$TRANSFORM = 'transform',
    $pBWF$var$UPPER_STAGE = 'Stage',
    $pBWF$var$VISIBLE = 'visible',
    $pBWF$var$CLONE_BLACK_LIST = ['id'],
    $pBWF$var$TRANSFORM_CHANGE_STR = ['xChange.konva', 'yChange.konva', 'scaleXChange.konva', 'scaleYChange.konva', 'skewXChange.konva', 'skewYChange.konva', 'rotationChange.konva', 'offsetXChange.konva', 'offsetYChange.konva', 'transformsEnabledChange.konva'].join($pBWF$var$SPACE),
    $pBWF$var$SCALE_CHANGE_STR = ['scaleXChange.konva', 'scaleYChange.konva'].join($pBWF$var$SPACE);
var $pBWF$var$emptyChildren = new $XIcS$export$Collection();
var $pBWF$var$idCounter = 1;

var $pBWF$var$Node = function () {
  function Node(config) {
    var _this = this;

    this._id = $pBWF$var$idCounter++;
    this.eventListeners = {};
    this.attrs = {};
    this.index = 0;
    this.parent = null;
    this._cache = new Map();
    this._lastPos = null;
    this._filterUpToDate = false;
    this._isUnderCache = false;
    this.children = $pBWF$var$emptyChildren;
    this._dragEventId = null;
    this.setAttrs(config);
    this.on($pBWF$var$TRANSFORM_CHANGE_STR, function () {
      _this._clearCache($pBWF$var$TRANSFORM);

      _this._clearSelfAndDescendantCache($pBWF$var$ABSOLUTE_TRANSFORM);
    });
    this.on($pBWF$var$SCALE_CHANGE_STR, function () {
      _this._clearSelfAndDescendantCache($pBWF$var$ABSOLUTE_SCALE);
    });
    this.on('visibleChange.konva', function () {
      _this._clearSelfAndDescendantCache($pBWF$var$VISIBLE);
    });
    this.on('listeningChange.konva', function () {
      _this._clearSelfAndDescendantCache($pBWF$var$LISTENING);
    });
    this.on('opacityChange.konva', function () {
      _this._clearSelfAndDescendantCache($pBWF$var$ABSOLUTE_OPACITY);
    });
  }

  Node.prototype.hasChildren = function () {
    return false;
  };

  Node.prototype.getChildren = function () {
    return $pBWF$var$emptyChildren;
  };

  Node.prototype._clearCache = function (attr) {
    if (attr) {
      this._cache.delete(attr);
    } else {
      this._cache.clear();
    }
  };

  Node.prototype._getCache = function (attr, privateGetter) {
    var cache = this._cache.get(attr);

    if (cache === undefined) {
      cache = privateGetter.call(this);

      this._cache.set(attr, cache);
    }

    return cache;
  };

  Node.prototype._getCanvasCache = function () {
    return this._cache.get($pBWF$var$CANVAS);
  };

  Node.prototype._clearSelfAndDescendantCache = function (attr) {
    this._clearCache(attr);

    if (this.isCached()) {
      return;
    }

    if (this.children) {
      this.children.each(function (node) {
        node._clearSelfAndDescendantCache(attr);
      });
    }
  };

  Node.prototype.clearCache = function () {
    this._cache.delete($pBWF$var$CANVAS);

    this._clearSelfAndDescendantCache();

    return this;
  };

  Node.prototype.cache = function (config) {
    var conf = config || {};
    var rect = {};

    if (conf.x === undefined || conf.y === undefined || conf.width === undefined || conf.height === undefined) {
      rect = this.getClientRect({
        skipTransform: true,
        relativeTo: this.getParent()
      });
    }

    var width = conf.width || rect.width,
        height = conf.height || rect.height,
        pixelRatio = conf.pixelRatio,
        x = conf.x === undefined ? rect.x : conf.x,
        y = conf.y === undefined ? rect.y : conf.y,
        offset = conf.offset || 0,
        drawBorder = conf.drawBorder || false;

    if (!width || !height) {
      $XIcS$export$Util.error('Can not cache the node. Width or height of the node equals 0. Caching is skipped.');
      return;
    }

    width += offset * 2;
    height += offset * 2;
    x -= offset;
    y -= offset;
    var cachedSceneCanvas = new $KydS$export$SceneCanvas({
      pixelRatio: pixelRatio,
      width: width,
      height: height
    }),
        cachedFilterCanvas = new $KydS$export$SceneCanvas({
      pixelRatio: pixelRatio,
      width: width,
      height: height
    }),
        cachedHitCanvas = new $KydS$export$HitCanvas({
      pixelRatio: 1,
      width: width,
      height: height
    }),
        sceneContext = cachedSceneCanvas.getContext(),
        hitContext = cachedHitCanvas.getContext();
    cachedHitCanvas.isCache = true;

    this._cache.delete('canvas');

    this._filterUpToDate = false;

    if (conf.imageSmoothingEnabled === false) {
      cachedSceneCanvas.getContext()._context.imageSmoothingEnabled = false;
      cachedFilterCanvas.getContext()._context.imageSmoothingEnabled = false;
      cachedHitCanvas.getContext()._context.imageSmoothingEnabled = false;
    }

    sceneContext.save();
    hitContext.save();
    sceneContext.translate(-x, -y);
    hitContext.translate(-x, -y);
    this._isUnderCache = true;

    this._clearSelfAndDescendantCache($pBWF$var$ABSOLUTE_OPACITY);

    this._clearSelfAndDescendantCache($pBWF$var$ABSOLUTE_SCALE);

    this.drawScene(cachedSceneCanvas, this, true);
    this.drawHit(cachedHitCanvas, this, true);
    this._isUnderCache = false;
    sceneContext.restore();
    hitContext.restore();

    if (drawBorder) {
      sceneContext.save();
      sceneContext.beginPath();
      sceneContext.rect(0, 0, width, height);
      sceneContext.closePath();
      sceneContext.setAttr('strokeStyle', 'red');
      sceneContext.setAttr('lineWidth', 5);
      sceneContext.stroke();
      sceneContext.restore();
    }

    this._cache.set($pBWF$var$CANVAS, {
      scene: cachedSceneCanvas,
      filter: cachedFilterCanvas,
      hit: cachedHitCanvas,
      x: x,
      y: y
    });

    return this;
  };

  Node.prototype.isCached = function () {
    return this._cache.has('canvas');
  };

  Node.prototype.getClientRect = function (config) {
    throw new Error('abstract "getClientRect" method call');
  };

  Node.prototype._transformedRect = function (rect, top) {
    var points = [{
      x: rect.x,
      y: rect.y
    }, {
      x: rect.x + rect.width,
      y: rect.y
    }, {
      x: rect.x + rect.width,
      y: rect.y + rect.height
    }, {
      x: rect.x,
      y: rect.y + rect.height
    }];
    var minX, minY, maxX, maxY;
    var trans = this.getAbsoluteTransform(top);
    points.forEach(function (point) {
      var transformed = trans.point(point);

      if (minX === undefined) {
        minX = maxX = transformed.x;
        minY = maxY = transformed.y;
      }

      minX = Math.min(minX, transformed.x);
      minY = Math.min(minY, transformed.y);
      maxX = Math.max(maxX, transformed.x);
      maxY = Math.max(maxY, transformed.y);
    });
    return {
      x: minX,
      y: minY,
      width: maxX - minX,
      height: maxY - minY
    };
  };

  Node.prototype._drawCachedSceneCanvas = function (context) {
    context.save();

    context._applyOpacity(this);

    context._applyGlobalCompositeOperation(this);

    var canvasCache = this._getCanvasCache();

    context.translate(canvasCache.x, canvasCache.y);

    var cacheCanvas = this._getCachedSceneCanvas();

    var ratio = cacheCanvas.pixelRatio;
    context.drawImage(cacheCanvas._canvas, 0, 0, cacheCanvas.width / ratio, cacheCanvas.height / ratio);
    context.restore();
  };

  Node.prototype._drawCachedHitCanvas = function (context) {
    var canvasCache = this._getCanvasCache(),
        hitCanvas = canvasCache.hit;

    context.save();
    context.translate(canvasCache.x, canvasCache.y);
    context.drawImage(hitCanvas._canvas, 0, 0);
    context.restore();
  };

  Node.prototype._getCachedSceneCanvas = function () {
    var filters = this.filters(),
        cachedCanvas = this._getCanvasCache(),
        sceneCanvas = cachedCanvas.scene,
        filterCanvas = cachedCanvas.filter,
        filterContext = filterCanvas.getContext(),
        len,
        imageData,
        n,
        filter;

    if (filters) {
      if (!this._filterUpToDate) {
        var ratio = sceneCanvas.pixelRatio;

        try {
          len = filters.length;
          filterContext.clear();
          filterContext.drawImage(sceneCanvas._canvas, 0, 0, sceneCanvas.getWidth() / ratio, sceneCanvas.getHeight() / ratio);
          imageData = filterContext.getImageData(0, 0, filterCanvas.getWidth(), filterCanvas.getHeight());

          for (n = 0; n < len; n++) {
            filter = filters[n];

            if (typeof filter !== 'function') {
              $XIcS$export$Util.error('Filter should be type of function, but got ' + typeof filter + ' insted. Please check correct filters');
              continue;
            }

            filter.call(this, imageData);
            filterContext.putImageData(imageData, 0, 0);
          }
        } catch (e) {
          $XIcS$export$Util.error('Unable to apply filter. ' + e.message);
        }

        this._filterUpToDate = true;
      }

      return filterCanvas;
    }

    return sceneCanvas;
  };

  Node.prototype.on = function (evtStr, handler) {
    if (arguments.length === 3) {
      return this._delegate.apply(this, arguments);
    }

    var events = evtStr.split($pBWF$var$SPACE),
        len = events.length,
        n,
        event,
        parts,
        baseEvent,
        name;

    for (n = 0; n < len; n++) {
      event = events[n];
      parts = event.split('.');
      baseEvent = parts[0];
      name = parts[1] || '';

      if (!this.eventListeners[baseEvent]) {
        this.eventListeners[baseEvent] = [];
      }

      this.eventListeners[baseEvent].push({
        name: name,
        handler: handler
      });
    }

    return this;
  };

  Node.prototype.off = function (evtStr, callback) {
    var events = (evtStr || '').split($pBWF$var$SPACE),
        len = events.length,
        n,
        t,
        event,
        parts,
        baseEvent,
        name;

    if (!evtStr) {
      for (t in this.eventListeners) {
        this._off(t);
      }
    }

    for (n = 0; n < len; n++) {
      event = events[n];
      parts = event.split('.');
      baseEvent = parts[0];
      name = parts[1];

      if (baseEvent) {
        if (this.eventListeners[baseEvent]) {
          this._off(baseEvent, name, callback);
        }
      } else {
        for (t in this.eventListeners) {
          this._off(t, name, callback);
        }
      }
    }

    return this;
  };

  Node.prototype.dispatchEvent = function (evt) {
    var e = {
      target: this,
      type: evt.type,
      evt: evt
    };
    this.fire(evt.type, e);
    return this;
  };

  Node.prototype.addEventListener = function (type, handler) {
    this.on(type, function (evt) {
      handler.call(this, evt.evt);
    });
    return this;
  };

  Node.prototype.removeEventListener = function (type) {
    this.off(type);
    return this;
  };

  Node.prototype._delegate = function (event, selector, handler) {
    var stopNode = this;
    this.on(event, function (evt) {
      var targets = evt.target.findAncestors(selector, true, stopNode);

      for (var i = 0; i < targets.length; i++) {
        evt = $XIcS$export$Util.cloneObject(evt);
        evt.currentTarget = targets[i];
        handler.call(targets[i], evt);
      }
    });
  };

  Node.prototype.remove = function () {
    if (this.isDragging()) {
      this.stopDrag();
    }

    $XvfD$export$DD._dragElements.delete(this._id);

    this._remove();

    return this;
  };

  Node.prototype._remove = function () {
    this._clearSelfAndDescendantCache($pBWF$var$STAGE);

    this._clearSelfAndDescendantCache($pBWF$var$ABSOLUTE_TRANSFORM);

    this._clearSelfAndDescendantCache($pBWF$var$VISIBLE);

    this._clearSelfAndDescendantCache($pBWF$var$LISTENING);

    this._clearSelfAndDescendantCache($pBWF$var$ABSOLUTE_OPACITY);

    var parent = this.getParent();

    if (parent && parent.children) {
      parent.children.splice(this.index, 1);

      parent._setChildrenIndices();

      this.parent = null;
    }
  };

  Node.prototype.destroy = function () {
    $pBWF$export$_removeId(this.id(), this);
    var names = (this.name() || '').split(/\s/g);

    for (var i = 0; i < names.length; i++) {
      var subname = names[i];
      $pBWF$export$_removeName(subname, this._id);
    }

    this.remove();
    return this;
  };

  Node.prototype.getAttr = function (attr) {
    var method = 'get' + $XIcS$export$Util._capitalize(attr);

    if ($XIcS$export$Util._isFunction(this[method])) {
      return this[method]();
    }

    return this.attrs[attr];
  };

  Node.prototype.getAncestors = function () {
    var parent = this.getParent(),
        ancestors = new $XIcS$export$Collection();

    while (parent) {
      ancestors.push(parent);
      parent = parent.getParent();
    }

    return ancestors;
  };

  Node.prototype.getAttrs = function () {
    return this.attrs || {};
  };

  Node.prototype.setAttrs = function (config) {
    var key, method;

    if (!config) {
      return this;
    }

    for (key in config) {
      if (key === $pBWF$var$CHILDREN) {
        continue;
      }

      method = $pBWF$var$SET + $XIcS$export$Util._capitalize(key);

      if ($XIcS$export$Util._isFunction(this[method])) {
        this[method](config[key]);
      } else {
        this._setAttr(key, config[key]);
      }
    }

    return this;
  };

  Node.prototype.isListening = function () {
    return this._getCache($pBWF$var$LISTENING, this._isListening);
  };

  Node.prototype._isListening = function () {
    var listening = this.listening(),
        parent = this.getParent();

    if (listening === 'inherit') {
      if (parent) {
        return parent.isListening();
      } else {
        return true;
      }
    } else {
      return listening;
    }
  };

  Node.prototype.isVisible = function () {
    return this._getCache($pBWF$var$VISIBLE, this._isVisible);
  };

  Node.prototype._isVisible = function (relativeTo) {
    var visible = this.visible(),
        parent = this.getParent();

    if (visible === 'inherit') {
      if (parent && parent !== relativeTo) {
        return parent._isVisible(relativeTo);
      } else {
        return true;
      }
    } else if (relativeTo && relativeTo !== parent) {
      return visible && parent._isVisible(relativeTo);
    } else {
      return visible;
    }
  };

  Node.prototype.shouldDrawHit = function () {
    var layer = this.getLayer();
    return !layer && this.isListening() && this.isVisible() || layer && layer.hitGraphEnabled() && this.isListening() && this.isVisible();
  };

  Node.prototype.show = function () {
    this.visible(true);
    return this;
  };

  Node.prototype.hide = function () {
    this.visible(false);
    return this;
  };

  Node.prototype.getZIndex = function () {
    return this.index || 0;
  };

  Node.prototype.getAbsoluteZIndex = function () {
    var depth = this.getDepth(),
        that = this,
        index = 0,
        nodes,
        len,
        n,
        child;

    function addChildren(children) {
      nodes = [];
      len = children.length;

      for (n = 0; n < len; n++) {
        child = children[n];
        index++;

        if (child.nodeType !== $pBWF$var$SHAPE) {
          nodes = nodes.concat(child.getChildren().toArray());
        }

        if (child._id === that._id) {
          n = len;
        }
      }

      if (nodes.length > 0 && nodes[0].getDepth() <= depth) {
        addChildren(nodes);
      }
    }

    if (that.nodeType !== $pBWF$var$UPPER_STAGE) {
      addChildren(that.getStage().getChildren());
    }

    return index;
  };

  Node.prototype.getDepth = function () {
    var depth = 0,
        parent = this.parent;

    while (parent) {
      depth++;
      parent = parent.parent;
    }

    return depth;
  };

  Node.prototype.setPosition = function (pos) {
    this.x(pos.x);
    this.y(pos.y);
    return this;
  };

  Node.prototype.getPosition = function () {
    return {
      x: this.x(),
      y: this.y()
    };
  };

  Node.prototype.getAbsolutePosition = function (top) {
    var haveCachedParent = false;
    var parent = this.parent;

    while (parent) {
      if (parent.isCached()) {
        haveCachedParent = true;
        break;
      }

      parent = parent.parent;
    }

    if (haveCachedParent && !top) {
      top = true;
    }

    var absoluteMatrix = this.getAbsoluteTransform(top).getMatrix(),
        absoluteTransform = new $XIcS$export$Transform(),
        offset = this.offset();
    absoluteTransform.m = absoluteMatrix.slice();
    absoluteTransform.translate(offset.x, offset.y);
    return absoluteTransform.getTranslation();
  };

  Node.prototype.setAbsolutePosition = function (pos) {
    var origTrans = this._clearTransform(),
        it;

    this.attrs.x = origTrans.x;
    this.attrs.y = origTrans.y;
    delete origTrans.x;
    delete origTrans.y;
    it = this.getAbsoluteTransform();
    it.invert();
    it.translate(pos.x, pos.y);
    pos = {
      x: this.attrs.x + it.getTranslation().x,
      y: this.attrs.y + it.getTranslation().y
    };
    this.setPosition({
      x: pos.x,
      y: pos.y
    });

    this._setTransform(origTrans);

    return this;
  };

  Node.prototype._setTransform = function (trans) {
    var key;

    for (key in trans) {
      this.attrs[key] = trans[key];
    }

    this._clearCache($pBWF$var$TRANSFORM);

    this._clearSelfAndDescendantCache($pBWF$var$ABSOLUTE_TRANSFORM);
  };

  Node.prototype._clearTransform = function () {
    var trans = {
      x: this.x(),
      y: this.y(),
      rotation: this.rotation(),
      scaleX: this.scaleX(),
      scaleY: this.scaleY(),
      offsetX: this.offsetX(),
      offsetY: this.offsetY(),
      skewX: this.skewX(),
      skewY: this.skewY()
    };
    this.attrs.x = 0;
    this.attrs.y = 0;
    this.attrs.rotation = 0;
    this.attrs.scaleX = 1;
    this.attrs.scaleY = 1;
    this.attrs.offsetX = 0;
    this.attrs.offsetY = 0;
    this.attrs.skewX = 0;
    this.attrs.skewY = 0;

    this._clearCache($pBWF$var$TRANSFORM);

    this._clearSelfAndDescendantCache($pBWF$var$ABSOLUTE_TRANSFORM);

    return trans;
  };

  Node.prototype.move = function (change) {
    var changeX = change.x,
        changeY = change.y,
        x = this.x(),
        y = this.y();

    if (changeX !== undefined) {
      x += changeX;
    }

    if (changeY !== undefined) {
      y += changeY;
    }

    this.setPosition({
      x: x,
      y: y
    });
    return this;
  };

  Node.prototype._eachAncestorReverse = function (func, top) {
    var family = [],
        parent = this.getParent(),
        len,
        n;

    if (top && top._id === this._id) {
      func(this);
      return;
    }

    family.unshift(this);

    while (parent && (!top || parent._id !== top._id)) {
      family.unshift(parent);
      parent = parent.parent;
    }

    len = family.length;

    for (n = 0; n < len; n++) {
      func(family[n]);
    }
  };

  Node.prototype.rotate = function (theta) {
    this.rotation(this.rotation() + theta);
    return this;
  };

  Node.prototype.moveToTop = function () {
    if (!this.parent) {
      $XIcS$export$Util.warn('Node has no parent. moveToTop function is ignored.');
      return false;
    }

    var index = this.index;
    this.parent.children.splice(index, 1);
    this.parent.children.push(this);

    this.parent._setChildrenIndices();

    return true;
  };

  Node.prototype.moveUp = function () {
    if (!this.parent) {
      $XIcS$export$Util.warn('Node has no parent. moveUp function is ignored.');
      return false;
    }

    var index = this.index,
        len = this.parent.getChildren().length;

    if (index < len - 1) {
      this.parent.children.splice(index, 1);
      this.parent.children.splice(index + 1, 0, this);

      this.parent._setChildrenIndices();

      return true;
    }

    return false;
  };

  Node.prototype.moveDown = function () {
    if (!this.parent) {
      $XIcS$export$Util.warn('Node has no parent. moveDown function is ignored.');
      return false;
    }

    var index = this.index;

    if (index > 0) {
      this.parent.children.splice(index, 1);
      this.parent.children.splice(index - 1, 0, this);

      this.parent._setChildrenIndices();

      return true;
    }

    return false;
  };

  Node.prototype.moveToBottom = function () {
    if (!this.parent) {
      $XIcS$export$Util.warn('Node has no parent. moveToBottom function is ignored.');
      return false;
    }

    var index = this.index;

    if (index > 0) {
      this.parent.children.splice(index, 1);
      this.parent.children.unshift(this);

      this.parent._setChildrenIndices();

      return true;
    }

    return false;
  };

  Node.prototype.setZIndex = function (zIndex) {
    if (!this.parent) {
      $XIcS$export$Util.warn('Node has no parent. zIndex parameter is ignored.');
      return this;
    }

    if (zIndex < 0 || zIndex >= this.parent.children.length) {
      $XIcS$export$Util.warn('Unexpected value ' + zIndex + ' for zIndex property. zIndex is just index of a node in children of its parent. Expected value is from 0 to ' + (this.parent.children.length - 1) + '.');
    }

    var index = this.index;
    this.parent.children.splice(index, 1);
    this.parent.children.splice(zIndex, 0, this);

    this.parent._setChildrenIndices();

    return this;
  };

  Node.prototype.getAbsoluteOpacity = function () {
    return this._getCache($pBWF$var$ABSOLUTE_OPACITY, this._getAbsoluteOpacity);
  };

  Node.prototype._getAbsoluteOpacity = function () {
    var absOpacity = this.opacity();
    var parent = this.getParent();

    if (parent && !parent._isUnderCache) {
      absOpacity *= parent.getAbsoluteOpacity();
    }

    return absOpacity;
  };

  Node.prototype.moveTo = function (newContainer) {
    if (this.getParent() !== newContainer) {
      this._remove();

      newContainer.add(this);
    }

    return this;
  };

  Node.prototype.toObject = function () {
    var obj = {},
        attrs = this.getAttrs(),
        key,
        val,
        getter,
        defaultValue,
        nonPlainObject;
    obj.attrs = {};

    for (key in attrs) {
      val = attrs[key];
      nonPlainObject = $XIcS$export$Util.isObject(val) && !$XIcS$export$Util._isPlainObject(val) && !$XIcS$export$Util._isArray(val);

      if (nonPlainObject) {
        continue;
      }

      getter = typeof this[key] === 'function' && this[key];
      delete attrs[key];
      defaultValue = getter ? getter.call(this) : null;
      attrs[key] = val;

      if (defaultValue !== val) {
        obj.attrs[key] = val;
      }
    }

    obj.className = this.getClassName();
    return $XIcS$export$Util._prepareToStringify(obj);
  };

  Node.prototype.toJSON = function () {
    return JSON.stringify(this.toObject());
  };

  Node.prototype.getParent = function () {
    return this.parent;
  };

  Node.prototype.findAncestors = function (selector, includeSelf, stopNode) {
    var res = [];

    if (includeSelf && this._isMatch(selector)) {
      res.push(this);
    }

    var ancestor = this.parent;

    while (ancestor) {
      if (ancestor === stopNode) {
        return res;
      }

      if (ancestor._isMatch(selector)) {
        res.push(ancestor);
      }

      ancestor = ancestor.parent;
    }

    return res;
  };

  Node.prototype.isAncestorOf = function (node) {
    return false;
  };

  Node.prototype.findAncestor = function (selector, includeSelf, stopNode) {
    return this.findAncestors(selector, includeSelf, stopNode)[0];
  };

  Node.prototype._isMatch = function (selector) {
    if (!selector) {
      return false;
    }

    if (typeof selector === 'function') {
      return selector(this);
    }

    var selectorArr = selector.replace(/ /g, '').split(','),
        len = selectorArr.length,
        n,
        sel;

    for (n = 0; n < len; n++) {
      sel = selectorArr[n];

      if (!$XIcS$export$Util.isValidSelector(sel)) {
        $XIcS$export$Util.warn('Selector "' + sel + '" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".');
        $XIcS$export$Util.warn('If you have a custom shape with such className, please change it to start with upper letter like "Triangle".');
        $XIcS$export$Util.warn('Konva is awesome, right?');
      }

      if (sel.charAt(0) === '#') {
        if (this.id() === sel.slice(1)) {
          return true;
        }
      } else if (sel.charAt(0) === '.') {
        if (this.hasName(sel.slice(1))) {
          return true;
        }
      } else if (this.className === sel || this.nodeType === sel) {
        return true;
      }
    }

    return false;
  };

  Node.prototype.getLayer = function () {
    var parent = this.getParent();
    return parent ? parent.getLayer() : null;
  };

  Node.prototype.getStage = function () {
    return this._getCache($pBWF$var$STAGE, this._getStage);
  };

  Node.prototype._getStage = function () {
    var parent = this.getParent();

    if (parent) {
      return parent.getStage();
    } else {
      return undefined;
    }
  };

  Node.prototype.fire = function (eventType, evt, bubble) {
    evt = evt || {};
    evt.target = evt.target || this;

    if (bubble) {
      this._fireAndBubble(eventType, evt);
    } else {
      this._fire(eventType, evt);
    }

    return this;
  };

  Node.prototype.getAbsoluteTransform = function (top) {
    if (top) {
      return this._getAbsoluteTransform(top);
    } else {
      return this._getCache($pBWF$var$ABSOLUTE_TRANSFORM, this._getAbsoluteTransform);
    }
  };

  Node.prototype._getAbsoluteTransform = function (top) {
    var at = new $XIcS$export$Transform();

    this._eachAncestorReverse(function (node) {
      var transformsEnabled = node.getTransformsEnabled();

      if (transformsEnabled === 'all') {
        at.multiply(node.getTransform());
      } else if (transformsEnabled === 'position') {
        at.translate(node.getX() - node.getOffsetX(), node.getY() - node.getOffsetY());
      }
    }, top);

    return at;
  };

  Node.prototype.getAbsoluteScale = function (top) {
    if (top) {
      return this._getAbsoluteScale(top);
    } else {
      return this._getCache($pBWF$var$ABSOLUTE_SCALE, this._getAbsoluteScale);
    }
  };

  Node.prototype._getAbsoluteScale = function (top) {
    var parent = this;

    while (parent) {
      if (parent._isUnderCache) {
        top = parent;
      }

      parent = parent.getParent();
    }

    var scaleX = 1,
        scaleY = 1;

    this._eachAncestorReverse(function (node) {
      scaleX *= node.scaleX();
      scaleY *= node.scaleY();
    }, top);

    return {
      x: scaleX,
      y: scaleY
    };
  };

  Node.prototype.getTransform = function () {
    return this._getCache($pBWF$var$TRANSFORM, this._getTransform);
  };

  Node.prototype._getTransform = function () {
    var m = new $XIcS$export$Transform(),
        x = this.x(),
        y = this.y(),
        rotation = $bIDB$export$Konva.getAngle(this.rotation()),
        scaleX = this.scaleX(),
        scaleY = this.scaleY(),
        skewX = this.skewX(),
        skewY = this.skewY(),
        offsetX = this.offsetX(),
        offsetY = this.offsetY();

    if (x !== 0 || y !== 0) {
      m.translate(x, y);
    }

    if (rotation !== 0) {
      m.rotate(rotation);
    }

    if (skewX !== 0 || skewY !== 0) {
      m.skew(skewX, skewY);
    }

    if (scaleX !== 1 || scaleY !== 1) {
      m.scale(scaleX, scaleY);
    }

    if (offsetX !== 0 || offsetY !== 0) {
      m.translate(-1 * offsetX, -1 * offsetY);
    }

    return m;
  };

  Node.prototype.clone = function (obj) {
    var attrs = $XIcS$export$Util.cloneObject(this.attrs),
        key,
        allListeners,
        len,
        n,
        listener;

    for (var i in $pBWF$var$CLONE_BLACK_LIST) {
      var blockAttr = $pBWF$var$CLONE_BLACK_LIST[i];
      delete attrs[blockAttr];
    }

    for (key in obj) {
      attrs[key] = obj[key];
    }

    var node = new this.constructor(attrs);

    for (key in this.eventListeners) {
      allListeners = this.eventListeners[key];
      len = allListeners.length;

      for (n = 0; n < len; n++) {
        listener = allListeners[n];

        if (listener.name.indexOf($pBWF$var$KONVA) < 0) {
          if (!node.eventListeners[key]) {
            node.eventListeners[key] = [];
          }

          node.eventListeners[key].push(listener);
        }
      }
    }

    return node;
  };

  Node.prototype._toKonvaCanvas = function (config) {
    config = config || {};
    var box = this.getClientRect();
    var stage = this.getStage(),
        x = config.x !== undefined ? config.x : box.x,
        y = config.y !== undefined ? config.y : box.y,
        pixelRatio = config.pixelRatio || 1,
        canvas = new $KydS$export$SceneCanvas({
      width: config.width || box.width || (stage ? stage.width() : 0),
      height: config.height || box.height || (stage ? stage.height() : 0),
      pixelRatio: pixelRatio
    }),
        context = canvas.getContext();
    context.save();

    if (x || y) {
      context.translate(-1 * x, -1 * y);
    }

    this.drawScene(canvas);
    context.restore();
    return canvas;
  };

  Node.prototype.toCanvas = function (config) {
    return this._toKonvaCanvas(config)._canvas;
  };

  Node.prototype.toDataURL = function (config) {
    config = config || {};
    var mimeType = config.mimeType || null,
        quality = config.quality || null;

    var url = this._toKonvaCanvas(config).toDataURL(mimeType, quality);

    if (config.callback) {
      config.callback(url);
    }

    return url;
  };

  Node.prototype.toImage = function (config) {
    if (!config || !config.callback) {
      throw 'callback required for toImage method config argument';
    }

    var callback = config.callback;
    delete config.callback;

    $XIcS$export$Util._urlToImage(this.toDataURL(config), function (img) {
      callback(img);
    });
  };

  Node.prototype.setSize = function (size) {
    this.width(size.width);
    this.height(size.height);
    return this;
  };

  Node.prototype.getSize = function () {
    return {
      width: this.width(),
      height: this.height()
    };
  };

  Node.prototype.getClassName = function () {
    return this.className || this.nodeType;
  };

  Node.prototype.getType = function () {
    return this.nodeType;
  };

  Node.prototype.getDragDistance = function () {
    if (this.attrs.dragDistance !== undefined) {
      return this.attrs.dragDistance;
    } else if (this.parent) {
      return this.parent.getDragDistance();
    } else {
      return $bIDB$export$Konva.dragDistance;
    }
  };

  Node.prototype._off = function (type, name, callback) {
    var evtListeners = this.eventListeners[type],
        i,
        evtName,
        handler;

    for (i = 0; i < evtListeners.length; i++) {
      evtName = evtListeners[i].name;
      handler = evtListeners[i].handler;

      if ((evtName !== 'konva' || name === 'konva') && (!name || evtName === name) && (!callback || callback === handler)) {
        evtListeners.splice(i, 1);

        if (evtListeners.length === 0) {
          delete this.eventListeners[type];
          break;
        }

        i--;
      }
    }
  };

  Node.prototype._fireChangeEvent = function (attr, oldVal, newVal) {
    this._fire(attr + $pBWF$var$CHANGE, {
      oldVal: oldVal,
      newVal: newVal
    });
  };

  Node.prototype.setId = function (id) {
    var oldId = this.id();
    $pBWF$export$_removeId(oldId, this);
    $pBWF$var$_addId(this, id);

    this._setAttr('id', id);

    return this;
  };

  Node.prototype.setName = function (name) {
    var oldNames = (this.name() || '').split(/\s/g);
    var newNames = (name || '').split(/\s/g);
    var subname, i;

    for (i = 0; i < oldNames.length; i++) {
      subname = oldNames[i];

      if (newNames.indexOf(subname) === -1 && subname) {
        $pBWF$export$_removeName(subname, this._id);
      }
    }

    for (i = 0; i < newNames.length; i++) {
      subname = newNames[i];

      if (oldNames.indexOf(subname) === -1 && subname) {
        $pBWF$export$_addName(this, subname);
      }
    }

    this._setAttr($pBWF$var$NAME, name);

    return this;
  };

  Node.prototype.addName = function (name) {
    if (!this.hasName(name)) {
      var oldName = this.name();
      var newName = oldName ? oldName + ' ' + name : name;
      this.setName(newName);
    }

    return this;
  };

  Node.prototype.hasName = function (name) {
    if (!name) {
      return false;
    }

    var fullName = this.name();

    if (!fullName) {
      return false;
    }

    var names = (fullName || '').split(/\s/g);
    return names.indexOf(name) !== -1;
  };

  Node.prototype.removeName = function (name) {
    var names = (this.name() || '').split(/\s/g);
    var index = names.indexOf(name);

    if (index !== -1) {
      names.splice(index, 1);
      this.setName(names.join(' '));
    }

    return this;
  };

  Node.prototype.setAttr = function (attr, val) {
    var func = this[$pBWF$var$SET + $XIcS$export$Util._capitalize(attr)];

    if ($XIcS$export$Util._isFunction(func)) {
      func.call(this, val);
    } else {
      this._setAttr(attr, val);
    }

    return this;
  };

  Node.prototype._setAttr = function (key, val) {
    var oldVal = this.attrs[key];

    if (oldVal === val && !$XIcS$export$Util.isObject(val)) {
      return;
    }

    if (val === undefined || val === null) {
      delete this.attrs[key];
    } else {
      this.attrs[key] = val;
    }

    this._fireChangeEvent(key, oldVal, val);
  };

  Node.prototype._setComponentAttr = function (key, component, val) {
    var oldVal;

    if (val !== undefined) {
      oldVal = this.attrs[key];

      if (!oldVal) {
        this.attrs[key] = this.getAttr(key);
      }

      this.attrs[key][component] = val;

      this._fireChangeEvent(key, oldVal, val);
    }
  };

  Node.prototype._fireAndBubble = function (eventType, evt, compareShape) {
    if (evt && this.nodeType === $pBWF$var$SHAPE) {
      evt.target = this;
    }

    var shouldStop = (eventType === $pBWF$var$MOUSEENTER || eventType === $pBWF$var$MOUSELEAVE) && (compareShape && (this === compareShape || this.isAncestorOf && this.isAncestorOf(compareShape)) || this.nodeType === 'Stage' && !compareShape);

    if (!shouldStop) {
      this._fire(eventType, evt);

      var stopBubble = (eventType === $pBWF$var$MOUSEENTER || eventType === $pBWF$var$MOUSELEAVE) && compareShape && compareShape.isAncestorOf && compareShape.isAncestorOf(this) && !compareShape.isAncestorOf(this.parent);

      if ((evt && !evt.cancelBubble || !evt) && this.parent && this.parent.isListening() && !stopBubble) {
        if (compareShape && compareShape.parent) {
          this._fireAndBubble.call(this.parent, eventType, evt, compareShape.parent);
        } else {
          this._fireAndBubble.call(this.parent, eventType, evt);
        }
      }
    }
  };

  Node.prototype._fire = function (eventType, evt) {
    var events = this.eventListeners[eventType],
        i;

    if (events) {
      evt = evt || {};
      evt.currentTarget = this;
      evt.type = eventType;

      for (i = 0; i < events.length; i++) {
        events[i].handler.call(this, evt);
      }
    }
  };

  Node.prototype.draw = function () {
    this.drawScene();
    this.drawHit();
    return this;
  };

  Node.prototype._createDragElement = function (evt) {
    var pointerId = evt ? evt.pointerId : undefined;
    var stage = this.getStage();
    var ap = this.getAbsolutePosition();
    var pos = stage._getPointerById(pointerId) || stage._changedPointerPositions[0] || ap;

    $XvfD$export$DD._dragElements.set(this._id, {
      node: this,
      startPointerPos: pos,
      offset: {
        x: pos.x - ap.x,
        y: pos.y - ap.y
      },
      dragStatus: 'ready',
      pointerId: pointerId
    });
  };

  Node.prototype.startDrag = function (evt) {
    if (!$XvfD$export$DD._dragElements.has(this._id)) {
      this._createDragElement(evt);
    }

    var elem = $XvfD$export$DD._dragElements.get(this._id);

    elem.dragStatus = 'dragging';
    this.fire('dragstart', {
      type: 'dragstart',
      target: this,
      evt: evt && evt.evt
    }, true);
  };

  Node.prototype._setDragPosition = function (evt, elem) {
    var pos = this.getStage()._getPointerById(elem.pointerId);

    if (!pos) {
      return;
    }

    var newNodePos = {
      x: pos.x - elem.offset.x,
      y: pos.y - elem.offset.y
    };
    var dbf = this.dragBoundFunc();

    if (dbf !== undefined) {
      var bounded = dbf.call(this, newNodePos, evt);

      if (!bounded) {
        $XIcS$export$Util.warn('dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc.');
      } else {
        newNodePos = bounded;
      }
    }

    if (!this._lastPos || this._lastPos.x !== newNodePos.x || this._lastPos.y !== newNodePos.y) {
      this.setAbsolutePosition(newNodePos);

      if (this.getLayer()) {
        this.getLayer().batchDraw();
      } else if (this.getStage()) {
        this.getStage().batchDraw();
      }
    }

    this._lastPos = newNodePos;
  };

  Node.prototype.stopDrag = function (evt) {
    var elem = $XvfD$export$DD._dragElements.get(this._id);

    if (elem) {
      elem.dragStatus = 'stopped';
    }

    $XvfD$export$DD._endDragBefore(evt);

    $XvfD$export$DD._endDragAfter(evt);
  };

  Node.prototype.setDraggable = function (draggable) {
    this._setAttr('draggable', draggable);

    this._dragChange();
  };

  Node.prototype.isDragging = function () {
    var elem = $XvfD$export$DD._dragElements.get(this._id);

    return elem ? elem.dragStatus === 'dragging' : false;
  };

  Node.prototype._listenDrag = function () {
    this._dragCleanup();

    this.on('mousedown.konva touchstart.konva', function (evt) {
      var _this = this;

      var shouldCheckButton = evt.evt['button'] !== undefined;
      var canDrag = !shouldCheckButton || $bIDB$export$Konva.dragButtons.indexOf(evt.evt['button']) >= 0;

      if (!canDrag) {
        return;
      }

      if (this.isDragging()) {
        return;
      }

      var hasDraggingChild = false;

      $XvfD$export$DD._dragElements.forEach(function (elem) {
        if (_this.isAncestorOf(elem.node)) {
          hasDraggingChild = true;
        }
      });

      if (!hasDraggingChild) {
        this._createDragElement(evt);
      }
    });
  };

  Node.prototype._dragChange = function () {
    if (this.attrs.draggable) {
      this._listenDrag();
    } else {
      this._dragCleanup();

      var stage = this.getStage();

      if (stage && $XvfD$export$DD._dragElements.has(this._id)) {
        this.stopDrag();
      }
    }
  };

  Node.prototype._dragCleanup = function () {
    this.off('mousedown.konva');
    this.off('touchstart.konva');
  };

  Node.create = function (data, container) {
    if ($XIcS$export$Util._isString(data)) {
      data = JSON.parse(data);
    }

    return this._createNode(data, container);
  };

  Node._createNode = function (obj, container) {
    var className = Node.prototype.getClassName.call(obj),
        children = obj.children,
        no,
        len,
        n;

    if (container) {
      obj.attrs.container = container;
    }

    if (!$bIDB$export$_NODES_REGISTRY[className]) {
      $XIcS$export$Util.warn('Can not find a node with class name "' + className + '". Fallback to "Shape".');
      className = 'Shape';
    }

    var Class = $bIDB$export$_NODES_REGISTRY[className];
    no = new Class(obj.attrs);

    if (children) {
      len = children.length;

      for (n = 0; n < len; n++) {
        no.add(Node._createNode(children[n]));
      }
    }

    return no;
  };

  return Node;
}();

var $pBWF$export$Node = $pBWF$var$Node;
$pBWF$exports.Node = $pBWF$export$Node;
$pBWF$var$Node.prototype.nodeType = 'Node';
$pBWF$var$Node.prototype._attrsAffectingSize = [];
$cgGB$export$Factory.addGetterSetter($pBWF$var$Node, 'zIndex');
$cgGB$export$Factory.addGetterSetter($pBWF$var$Node, 'absolutePosition');
$cgGB$export$Factory.addGetterSetter($pBWF$var$Node, 'position');
$cgGB$export$Factory.addGetterSetter($pBWF$var$Node, 'x', 0, $tgRR$export$getNumberValidator());
$cgGB$export$Factory.addGetterSetter($pBWF$var$Node, 'y', 0, $tgRR$export$getNumberValidator());
$cgGB$export$Factory.addGetterSetter($pBWF$var$Node, 'globalCompositeOperation', 'source-over', $tgRR$export$getStringValidator());
$cgGB$export$Factory.addGetterSetter($pBWF$var$Node, 'opacity', 1, $tgRR$export$getNumberValidator());
$cgGB$export$Factory.addGetterSetter($pBWF$var$Node, 'name', '', $tgRR$export$getStringValidator());
$cgGB$export$Factory.addGetterSetter($pBWF$var$Node, 'id', '', $tgRR$export$getStringValidator());
$cgGB$export$Factory.addGetterSetter($pBWF$var$Node, 'rotation', 0, $tgRR$export$getNumberValidator());
$cgGB$export$Factory.addComponentsGetterSetter($pBWF$var$Node, 'scale', ['x', 'y']);
$cgGB$export$Factory.addGetterSetter($pBWF$var$Node, 'scaleX', 1, $tgRR$export$getNumberValidator());
$cgGB$export$Factory.addGetterSetter($pBWF$var$Node, 'scaleY', 1, $tgRR$export$getNumberValidator());
$cgGB$export$Factory.addComponentsGetterSetter($pBWF$var$Node, 'skew', ['x', 'y']);
$cgGB$export$Factory.addGetterSetter($pBWF$var$Node, 'skewX', 0, $tgRR$export$getNumberValidator());
$cgGB$export$Factory.addGetterSetter($pBWF$var$Node, 'skewY', 0, $tgRR$export$getNumberValidator());
$cgGB$export$Factory.addComponentsGetterSetter($pBWF$var$Node, 'offset', ['x', 'y']);
$cgGB$export$Factory.addGetterSetter($pBWF$var$Node, 'offsetX', 0, $tgRR$export$getNumberValidator());
$cgGB$export$Factory.addGetterSetter($pBWF$var$Node, 'offsetY', 0, $tgRR$export$getNumberValidator());
$cgGB$export$Factory.addGetterSetter($pBWF$var$Node, 'dragDistance', null, $tgRR$export$getNumberValidator());
$cgGB$export$Factory.addGetterSetter($pBWF$var$Node, 'width', 0, $tgRR$export$getNumberValidator());
$cgGB$export$Factory.addGetterSetter($pBWF$var$Node, 'height', 0, $tgRR$export$getNumberValidator());
$cgGB$export$Factory.addGetterSetter($pBWF$var$Node, 'listening', 'inherit', function (val) {
  var isValid = val === true || val === false || val === 'inherit';

  if (!isValid) {
    $XIcS$export$Util.warn(val + ' is a not valid value for "listening" attribute. The value may be true, false or "inherit".');
  }

  return val;
});
$cgGB$export$Factory.addGetterSetter($pBWF$var$Node, 'preventDefault', true, $tgRR$export$getBooleanValidator());
$cgGB$export$Factory.addGetterSetter($pBWF$var$Node, 'filters', null, function (val) {
  this._filterUpToDate = false;
  return val;
});
$cgGB$export$Factory.addGetterSetter($pBWF$var$Node, 'visible', 'inherit', function (val) {
  var isValid = val === true || val === false || val === 'inherit';

  if (!isValid) {
    $XIcS$export$Util.warn(val + ' is a not valid value for "visible" attribute. The value may be true, false or "inherit".');
  }

  return val;
});
$cgGB$export$Factory.addGetterSetter($pBWF$var$Node, 'transformsEnabled', 'all', $tgRR$export$getStringValidator());
$cgGB$export$Factory.addGetterSetter($pBWF$var$Node, 'size');
$cgGB$export$Factory.addGetterSetter($pBWF$var$Node, 'dragBoundFunc');
$cgGB$export$Factory.addGetterSetter($pBWF$var$Node, 'draggable', false, $tgRR$export$getBooleanValidator());
$cgGB$export$Factory.backCompat($pBWF$var$Node, {
  rotateDeg: 'rotate',
  setRotationDeg: 'setRotation',
  getRotationDeg: 'getRotation'
});
$XIcS$export$Collection.mapMethods($pBWF$var$Node);
// ASSET: node_modules/konva/lib/Container.js
var $Eysw$exports = {};

var $Eysw$var$__extends = $Eysw$exports && $Eysw$exports.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty($Eysw$exports, "__esModule", {
  value: true
});

var $Eysw$var$Container = function (_super) {
  $Eysw$var$__extends(Container, _super);

  function Container() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.children = new $XIcS$export$Collection();
    return _this;
  }

  Container.prototype.getChildren = function (filterFunc) {
    if (!filterFunc) {
      return this.children;
    }

    var results = new $XIcS$export$Collection();
    this.children.each(function (child) {
      if (filterFunc(child)) {
        results.push(child);
      }
    });
    return results;
  };

  Container.prototype.hasChildren = function () {
    return this.getChildren().length > 0;
  };

  Container.prototype.removeChildren = function () {
    var child;

    for (var i = 0; i < this.children.length; i++) {
      child = this.children[i];
      child.parent = null;
      child.index = 0;
      child.remove();
    }

    this.children = new $XIcS$export$Collection();
    return this;
  };

  Container.prototype.destroyChildren = function () {
    var child;

    for (var i = 0; i < this.children.length; i++) {
      child = this.children[i];
      child.parent = null;
      child.index = 0;
      child.destroy();
    }

    this.children = new $XIcS$export$Collection();
    return this;
  };

  Container.prototype.add = function (child) {
    if (arguments.length > 1) {
      for (var i = 0; i < arguments.length; i++) {
        this.add(arguments[i]);
      }

      return this;
    }

    if (child.getParent()) {
      child.moveTo(this);
      return this;
    }

    var children = this.children;

    this._validateAdd(child);

    child.index = children.length;
    child.parent = this;
    children.push(child);

    this._fire('add', {
      child: child
    });

    return this;
  };

  Container.prototype.destroy = function () {
    if (this.hasChildren()) {
      this.destroyChildren();
    }

    _super.prototype.destroy.call(this);

    return this;
  };

  Container.prototype.find = function (selector) {
    return this._generalFind(selector, false);
  };

  Container.prototype.get = function (selector) {
    $XIcS$export$Util.warn('collection.get() method is deprecated. Please use collection.find() instead.');
    return this.find(selector);
  };

  Container.prototype.findOne = function (selector) {
    var result = this._generalFind(selector, true);

    return result.length > 0 ? result[0] : undefined;
  };

  Container.prototype._generalFind = function (selector, findOne) {
    var retArr = [];

    this._descendants(function (node) {
      var valid = node._isMatch(selector);

      if (valid) {
        retArr.push(node);
      }

      if (valid && findOne) {
        return true;
      }

      return false;
    });

    return $XIcS$export$Collection.toCollection(retArr);
  };

  Container.prototype._descendants = function (fn) {
    var shouldStop = false;

    for (var i = 0; i < this.children.length; i++) {
      var child = this.children[i];
      shouldStop = fn(child);

      if (shouldStop) {
        return true;
      }

      if (!child.hasChildren()) {
        continue;
      }

      shouldStop = child._descendants(fn);

      if (shouldStop) {
        return true;
      }
    }

    return false;
  };

  Container.prototype.toObject = function () {
    var obj = $pBWF$export$Node.prototype.toObject.call(this);
    obj.children = [];
    var children = this.getChildren();
    var len = children.length;

    for (var n = 0; n < len; n++) {
      var child = children[n];
      obj.children.push(child.toObject());
    }

    return obj;
  };

  Container.prototype._getDescendants = function (arr) {
    var retArr = [];
    var len = arr.length;

    for (var n = 0; n < len; n++) {
      var node = arr[n];

      if (this.isAncestorOf(node)) {
        retArr.push(node);
      }
    }

    return retArr;
  };

  Container.prototype.isAncestorOf = function (node) {
    var parent = node.getParent();

    while (parent) {
      if (parent._id === this._id) {
        return true;
      }

      parent = parent.getParent();
    }

    return false;
  };

  Container.prototype.clone = function (obj) {
    var node = $pBWF$export$Node.prototype.clone.call(this, obj);
    this.getChildren().each(function (no) {
      node.add(no.clone());
    });
    return node;
  };

  Container.prototype.getAllIntersections = function (pos) {
    var arr = [];
    this.find('Shape').each(function (shape) {
      if (shape.isVisible() && shape.intersects(pos)) {
        arr.push(shape);
      }
    });
    return arr;
  };

  Container.prototype._setChildrenIndices = function () {
    this.children.each(function (child, n) {
      child.index = n;
    });
  };

  Container.prototype.drawScene = function (can, top, caching) {
    var layer = this.getLayer(),
        canvas = can || layer && layer.getCanvas(),
        context = canvas && canvas.getContext(),
        cachedCanvas = this._getCanvasCache(),
        cachedSceneCanvas = cachedCanvas && cachedCanvas.scene;

    if (this.isVisible() || caching) {
      if (!caching && cachedSceneCanvas) {
        context.save();

        layer._applyTransform(this, context, top);

        this._drawCachedSceneCanvas(context);

        context.restore();
      } else {
        this._drawChildren(canvas, 'drawScene', top, false, caching, caching);
      }
    }

    return this;
  };

  Container.prototype.drawHit = function (can, top, caching) {
    var layer = this.getLayer(),
        canvas = can || layer && layer.hitCanvas,
        context = canvas && canvas.getContext(),
        cachedCanvas = this._getCanvasCache(),
        cachedHitCanvas = cachedCanvas && cachedCanvas.hit;

    if (this.shouldDrawHit(canvas) || caching) {
      if (!caching && cachedHitCanvas) {
        context.save();

        layer._applyTransform(this, context, top);

        this._drawCachedHitCanvas(context);

        context.restore();
      } else {
        this._drawChildren(canvas, 'drawHit', top, false, caching, caching);
      }
    }

    return this;
  };

  Container.prototype._drawChildren = function (canvas, drawMethod, top, caching, skipBuffer, skipComposition) {
    var layer = this.getLayer(),
        context = canvas && canvas.getContext(),
        clipWidth = this.clipWidth(),
        clipHeight = this.clipHeight(),
        clipFunc = this.clipFunc(),
        hasClip = clipWidth && clipHeight || clipFunc,
        clipX,
        clipY;

    if (hasClip && layer) {
      context.save();
      var transform = this.getAbsoluteTransform(top);
      var m = transform.getMatrix();
      context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
      context.beginPath();

      if (clipFunc) {
        clipFunc.call(this, context, this);
      } else {
        clipX = this.clipX();
        clipY = this.clipY();
        context.rect(clipX, clipY, clipWidth, clipHeight);
      }

      context.clip();
      m = transform.copy().invert().getMatrix();
      context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
    }

    var hasComposition = this.globalCompositeOperation() !== 'source-over' && !skipComposition && drawMethod === 'drawScene';

    if (hasComposition && layer) {
      context.save();

      context._applyGlobalCompositeOperation(this);
    }

    this.children.each(function (child) {
      child[drawMethod](canvas, top, caching, skipBuffer);
    });

    if (hasComposition && layer) {
      context.restore();
    }

    if (hasClip && layer) {
      context.restore();
    }
  };

  Container.prototype.shouldDrawHit = function (canvas) {
    if (canvas && canvas.isCache) {
      return true;
    }

    var layer = this.getLayer();
    var layerUnderDrag = false;

    $XvfD$export$DD._dragElements.forEach(function (elem) {
      if (elem.dragStatus === 'dragging' && elem.node.getLayer() === layer) {
        layerUnderDrag = true;
      }
    });

    var dragSkip = !$bIDB$export$Konva.hitOnDragEnabled && layerUnderDrag;
    return layer && layer.hitGraphEnabled() && this.isVisible() && !dragSkip;
  };

  Container.prototype.getClientRect = function (attrs) {
    attrs = attrs || {};
    var skipTransform = attrs.skipTransform;
    var relativeTo = attrs.relativeTo;
    var minX, minY, maxX, maxY;
    var selfRect = {
      x: Infinity,
      y: Infinity,
      width: 0,
      height: 0
    };
    var that = this;
    this.children.each(function (child) {
      if (!child.visible()) {
        return;
      }

      var rect = child.getClientRect({
        relativeTo: that,
        skipShadow: attrs.skipShadow,
        skipStroke: attrs.skipStroke
      });

      if (rect.width === 0 && rect.height === 0) {
        return;
      }

      if (minX === undefined) {
        minX = rect.x;
        minY = rect.y;
        maxX = rect.x + rect.width;
        maxY = rect.y + rect.height;
      } else {
        minX = Math.min(minX, rect.x);
        minY = Math.min(minY, rect.y);
        maxX = Math.max(maxX, rect.x + rect.width);
        maxY = Math.max(maxY, rect.y + rect.height);
      }
    });
    var shapes = this.find('Shape');
    var hasVisible = false;

    for (var i = 0; i < shapes.length; i++) {
      var shape = shapes[i];

      if (shape._isVisible(this)) {
        hasVisible = true;
        break;
      }
    }

    if (hasVisible && minX !== undefined) {
      selfRect = {
        x: minX,
        y: minY,
        width: maxX - minX,
        height: maxY - minY
      };
    } else {
      selfRect = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    }

    if (!skipTransform) {
      return this._transformedRect(selfRect, relativeTo);
    }

    return selfRect;
  };

  return Container;
}($pBWF$export$Node);

var $Eysw$export$Container = $Eysw$var$Container;
$Eysw$exports.Container = $Eysw$export$Container;
$cgGB$export$Factory.addComponentsGetterSetter($Eysw$var$Container, 'clip', ['x', 'y', 'width', 'height']);
$cgGB$export$Factory.addGetterSetter($Eysw$var$Container, 'clipX', undefined, $tgRR$export$getNumberValidator());
$cgGB$export$Factory.addGetterSetter($Eysw$var$Container, 'clipY', undefined, $tgRR$export$getNumberValidator());
$cgGB$export$Factory.addGetterSetter($Eysw$var$Container, 'clipWidth', undefined, $tgRR$export$getNumberValidator());
$cgGB$export$Factory.addGetterSetter($Eysw$var$Container, 'clipHeight', undefined, $tgRR$export$getNumberValidator());
$cgGB$export$Factory.addGetterSetter($Eysw$var$Container, 'clipFunc');
$XIcS$export$Collection.mapMethods($Eysw$var$Container);
// ASSET: node_modules/konva/lib/PointerEvents.js
var $Gfsp$exports = {};
Object.defineProperty($Gfsp$exports, "__esModule", {
  value: true
});
var $Gfsp$var$Captures = new Map();
var $Gfsp$var$SUPPORT_POINTER_EVENTS = $bIDB$export$Konva._global['PointerEvent'] !== undefined;

function $Gfsp$var$getCapturedShape(pointerId) {
  return $Gfsp$var$Captures.get(pointerId);
}

var $Gfsp$export$getCapturedShape = $Gfsp$var$getCapturedShape;
$Gfsp$exports.getCapturedShape = $Gfsp$export$getCapturedShape;

function $Gfsp$var$createEvent(evt) {
  return {
    evt: evt,
    pointerId: evt.pointerId
  };
}

var $Gfsp$export$createEvent = $Gfsp$var$createEvent;
$Gfsp$exports.createEvent = $Gfsp$export$createEvent;

function $Gfsp$var$hasPointerCapture(pointerId, shape) {
  return $Gfsp$var$Captures.get(pointerId) === shape;
}

var $Gfsp$export$hasPointerCapture = $Gfsp$var$hasPointerCapture;
$Gfsp$exports.hasPointerCapture = $Gfsp$export$hasPointerCapture;

function $Gfsp$var$setPointerCapture(pointerId, shape) {
  $Gfsp$var$releaseCapture(pointerId);
  var stage = shape.getStage();
  if (!stage) return;
  $Gfsp$var$Captures.set(pointerId, shape);

  if ($Gfsp$var$SUPPORT_POINTER_EVENTS) {
    shape._fire('gotpointercapture', $Gfsp$var$createEvent(new PointerEvent('gotpointercapture')));
  }
}

var $Gfsp$export$setPointerCapture = $Gfsp$var$setPointerCapture;
$Gfsp$exports.setPointerCapture = $Gfsp$export$setPointerCapture;

function $Gfsp$var$releaseCapture(pointerId, target) {
  var shape = $Gfsp$var$Captures.get(pointerId);
  if (!shape) return;
  var stage = shape.getStage();

  if (stage && stage.content) {}

  $Gfsp$var$Captures.delete(pointerId);

  if ($Gfsp$var$SUPPORT_POINTER_EVENTS) {
    shape._fire('lostpointercapture', $Gfsp$var$createEvent(new PointerEvent('lostpointercapture')));
  }
}

var $Gfsp$export$releaseCapture = $Gfsp$var$releaseCapture;
$Gfsp$exports.releaseCapture = $Gfsp$export$releaseCapture;
// ASSET: node_modules/konva/lib/Stage.js
var $inLU$exports = {};

var $inLU$var$__extends = $inLU$exports && $inLU$exports.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty($inLU$exports, "__esModule", {
  value: true
});
var $inLU$var$STAGE = 'Stage',
    $inLU$var$STRING = 'string',
    $inLU$var$PX = 'px',
    $inLU$var$MOUSEOUT = 'mouseout',
    $inLU$var$MOUSELEAVE = 'mouseleave',
    $inLU$var$MOUSEOVER = 'mouseover',
    $inLU$var$MOUSEENTER = 'mouseenter',
    $inLU$var$MOUSEMOVE = 'mousemove',
    $inLU$var$MOUSEDOWN = 'mousedown',
    $inLU$var$MOUSEUP = 'mouseup',
    $inLU$var$POINTERMOVE = 'pointermove',
    $inLU$var$POINTERDOWN = 'pointerdown',
    $inLU$var$POINTERUP = 'pointerup',
    $inLU$var$POINTERCANCEL = 'pointercancel',
    $inLU$var$LOSTPOINTERCAPTURE = 'lostpointercapture',
    $inLU$var$CONTEXTMENU = 'contextmenu',
    $inLU$var$CLICK = 'click',
    $inLU$var$DBL_CLICK = 'dblclick',
    $inLU$var$TOUCHSTART = 'touchstart',
    $inLU$var$TOUCHEND = 'touchend',
    $inLU$var$TAP = 'tap',
    $inLU$var$DBL_TAP = 'dbltap',
    $inLU$var$TOUCHMOVE = 'touchmove',
    $inLU$var$WHEEL = 'wheel',
    $inLU$var$CONTENT_MOUSEOUT = 'contentMouseout',
    $inLU$var$CONTENT_MOUSEOVER = 'contentMouseover',
    $inLU$var$CONTENT_MOUSEMOVE = 'contentMousemove',
    $inLU$var$CONTENT_MOUSEDOWN = 'contentMousedown',
    $inLU$var$CONTENT_MOUSEUP = 'contentMouseup',
    $inLU$var$CONTENT_CONTEXTMENU = 'contentContextmenu',
    $inLU$var$CONTENT_CLICK = 'contentClick',
    $inLU$var$CONTENT_DBL_CLICK = 'contentDblclick',
    $inLU$var$CONTENT_TOUCHSTART = 'contentTouchstart',
    $inLU$var$CONTENT_TOUCHEND = 'contentTouchend',
    $inLU$var$CONTENT_DBL_TAP = 'contentDbltap',
    $inLU$var$CONTENT_TAP = 'contentTap',
    $inLU$var$CONTENT_TOUCHMOVE = 'contentTouchmove',
    $inLU$var$CONTENT_WHEEL = 'contentWheel',
    $inLU$var$RELATIVE = 'relative',
    $inLU$var$KONVA_CONTENT = 'konvajs-content',
    $inLU$var$UNDERSCORE = '_',
    $inLU$var$CONTAINER = 'container',
    $inLU$var$MAX_LAYERS_NUMBER = 5,
    $inLU$var$EMPTY_STRING = '',
    $inLU$var$EVENTS = [$inLU$var$MOUSEENTER, $inLU$var$MOUSEDOWN, $inLU$var$MOUSEMOVE, $inLU$var$MOUSEUP, $inLU$var$MOUSEOUT, $inLU$var$TOUCHSTART, $inLU$var$TOUCHMOVE, $inLU$var$TOUCHEND, $inLU$var$MOUSEOVER, $inLU$var$WHEEL, $inLU$var$CONTEXTMENU, $inLU$var$POINTERDOWN, $inLU$var$POINTERMOVE, $inLU$var$POINTERUP, $inLU$var$POINTERCANCEL, $inLU$var$LOSTPOINTERCAPTURE],
    $inLU$var$eventsLength = $inLU$var$EVENTS.length;

function $inLU$var$addEvent(ctx, eventName) {
  ctx.content.addEventListener(eventName, function (evt) {
    ctx[$inLU$var$UNDERSCORE + eventName](evt);
  }, false);
}

var $inLU$var$NO_POINTERS_MESSAGE = "Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);";
var $inLU$export$stages = [];
$inLU$exports.stages = $inLU$export$stages;

function $inLU$var$checkNoClip(attrs) {
  if (attrs === void 0) {
    attrs = {};
  }

  if (attrs.clipFunc || attrs.clipWidth || attrs.clipHeight) {
    $XIcS$export$Util.warn('Stage does not support clipping. Please use clip for Layers or Groups.');
  }

  return attrs;
}

var $inLU$var$Stage = function (_super) {
  $inLU$var$__extends(Stage, _super);

  function Stage(config) {
    var _this = _super.call(this, $inLU$var$checkNoClip(config)) || this;

    _this._pointerPositions = [];
    _this._changedPointerPositions = [];

    _this._buildDOM();

    _this._bindContentEvents();

    $inLU$export$stages.push(_this);

    _this.on('widthChange.konva heightChange.konva', _this._resizeDOM);

    _this.on('visibleChange.konva', _this._checkVisibility);

    _this.on('clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva', function () {
      $inLU$var$checkNoClip(_this.attrs);
    });

    _this._checkVisibility();

    return _this;
  }

  Stage.prototype._validateAdd = function (child) {
    var isLayer = child.getType() === 'Layer';
    var isFastLayer = child.getType() === 'FastLayer';
    var valid = isLayer || isFastLayer;

    if (!valid) {
      $XIcS$export$Util.throw('You may only add layers to the stage.');
    }
  };

  Stage.prototype._checkVisibility = function () {
    var style = this.visible() ? '' : 'none';
    this.content.style.display = style;
  };

  Stage.prototype.setContainer = function (container) {
    if (typeof container === $inLU$var$STRING) {
      if (container.charAt(0) === '.') {
        var className = container.slice(1);
        container = document.getElementsByClassName(className)[0];
      } else {
        var id;

        if (container.charAt(0) !== '#') {
          id = container;
        } else {
          id = container.slice(1);
        }

        container = document.getElementById(id);
      }

      if (!container) {
        throw 'Can not find container in document with id ' + id;
      }
    }

    this._setAttr($inLU$var$CONTAINER, container);

    if (this.content) {
      if (this.content.parentElement) {
        this.content.parentElement.removeChild(this.content);
      }

      container.appendChild(this.content);
    }

    return this;
  };

  Stage.prototype.shouldDrawHit = function () {
    return true;
  };

  Stage.prototype.clear = function () {
    var layers = this.children,
        len = layers.length,
        n;

    for (n = 0; n < len; n++) {
      layers[n].clear();
    }

    return this;
  };

  Stage.prototype.clone = function (obj) {
    if (!obj) {
      obj = {};
    }

    obj.container = document.createElement('div');
    return $Eysw$export$Container.prototype.clone.call(this, obj);
  };

  Stage.prototype.destroy = function () {
    _super.prototype.destroy.call(this);

    var content = this.content;

    if (content && $XIcS$export$Util._isInDocument(content)) {
      this.container().removeChild(content);
    }

    var index = $inLU$export$stages.indexOf(this);

    if (index > -1) {
      $inLU$export$stages.splice(index, 1);
    }

    return this;
  };

  Stage.prototype.getPointerPosition = function () {
    var pos = this._pointerPositions[0] || this._changedPointerPositions[0];

    if (!pos) {
      $XIcS$export$Util.warn($inLU$var$NO_POINTERS_MESSAGE);
      return null;
    }

    return {
      x: pos.x,
      y: pos.y
    };
  };

  Stage.prototype._getPointerById = function (id) {
    return this._pointerPositions.find(function (p) {
      return p.id === id;
    });
  };

  Stage.prototype.getPointersPositions = function () {
    return this._pointerPositions;
  };

  Stage.prototype.getStage = function () {
    return this;
  };

  Stage.prototype.getContent = function () {
    return this.content;
  };

  Stage.prototype._toKonvaCanvas = function (config) {
    config = config || {};

    var x = config.x || 0,
        y = config.y || 0,
        canvas = new $KydS$export$SceneCanvas({
      width: config.width || this.width(),
      height: config.height || this.height(),
      pixelRatio: config.pixelRatio || 1
    }),
        _context = canvas.getContext()._context,
        layers = this.children;

    if (x || y) {
      _context.translate(-1 * x, -1 * y);
    }

    layers.each(function (layer) {
      if (!layer.isVisible()) {
        return;
      }

      var layerCanvas = layer._toKonvaCanvas(config);

      _context.drawImage(layerCanvas._canvas, x, y, layerCanvas.getWidth() / layerCanvas.getPixelRatio(), layerCanvas.getHeight() / layerCanvas.getPixelRatio());
    });
    return canvas;
  };

  Stage.prototype.getIntersection = function (pos, selector) {
    if (!pos) {
      return null;
    }

    var layers = this.children,
        len = layers.length,
        end = len - 1,
        n,
        shape;

    for (n = end; n >= 0; n--) {
      shape = layers[n].getIntersection(pos, selector);

      if (shape) {
        return shape;
      }
    }

    return null;
  };

  Stage.prototype._resizeDOM = function () {
    if (this.content) {
      var width = this.width(),
          height = this.height(),
          layers = this.getChildren(),
          len = layers.length,
          n,
          layer;
      this.content.style.width = width + $inLU$var$PX;
      this.content.style.height = height + $inLU$var$PX;
      this.bufferCanvas.setSize(width, height);
      this.bufferHitCanvas.setSize(width, height);

      for (n = 0; n < len; n++) {
        layer = layers[n];
        layer.setSize({
          width: width,
          height: height
        });
        layer.draw();
      }
    }
  };

  Stage.prototype.add = function (layer) {
    if (arguments.length > 1) {
      for (var i = 0; i < arguments.length; i++) {
        this.add(arguments[i]);
      }

      return this;
    }

    _super.prototype.add.call(this, layer);

    var length = this.children.length;

    if (length > $inLU$var$MAX_LAYERS_NUMBER) {
      $XIcS$export$Util.warn('The stage has ' + length + ' layers. Recommended maximin number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group.');
    }

    layer._setCanvasSize(this.width(), this.height());

    layer.draw();

    if ($bIDB$export$Konva.isBrowser) {
      this.content.appendChild(layer.canvas._canvas);
    }

    return this;
  };

  Stage.prototype.getParent = function () {
    return null;
  };

  Stage.prototype.getLayer = function () {
    return null;
  };

  Stage.prototype.hasPointerCapture = function (pointerId) {
    return $Gfsp$export$hasPointerCapture(pointerId, this);
  };

  Stage.prototype.setPointerCapture = function (pointerId) {
    $Gfsp$export$setPointerCapture(pointerId, this);
  };

  Stage.prototype.releaseCapture = function (pointerId) {
    $Gfsp$export$releaseCapture(pointerId, this);
  };

  Stage.prototype.getLayers = function () {
    return this.getChildren();
  };

  Stage.prototype._bindContentEvents = function () {
    if (!$bIDB$export$Konva.isBrowser) {
      return;
    }

    for (var n = 0; n < $inLU$var$eventsLength; n++) {
      $inLU$var$addEvent(this, $inLU$var$EVENTS[n]);
    }
  };

  Stage.prototype._mouseenter = function (evt) {
    this.setPointersPositions(evt);

    this._fire($inLU$var$MOUSEENTER, {
      evt: evt,
      target: this,
      currentTarget: this
    });
  };

  Stage.prototype._mouseover = function (evt) {
    this.setPointersPositions(evt);

    this._fire($inLU$var$CONTENT_MOUSEOVER, {
      evt: evt
    });

    this._fire($inLU$var$MOUSEOVER, {
      evt: evt,
      target: this,
      currentTarget: this
    });
  };

  Stage.prototype._mouseout = function (evt) {
    this.setPointersPositions(evt);
    var targetShape = this.targetShape;
    var eventsEnabled = !$XvfD$export$DD.isDragging || $bIDB$export$Konva.hitOnDragEnabled;

    if (targetShape && eventsEnabled) {
      targetShape._fireAndBubble($inLU$var$MOUSEOUT, {
        evt: evt
      });

      targetShape._fireAndBubble($inLU$var$MOUSELEAVE, {
        evt: evt
      });

      this.targetShape = null;
    } else if (eventsEnabled) {
      this._fire($inLU$var$MOUSELEAVE, {
        evt: evt,
        target: this,
        currentTarget: this
      });

      this._fire($inLU$var$MOUSEOUT, {
        evt: evt,
        target: this,
        currentTarget: this
      });
    }

    this.pointerPos = undefined;
    this._pointerPositions = [];

    this._fire($inLU$var$CONTENT_MOUSEOUT, {
      evt: evt
    });
  };

  Stage.prototype._mousemove = function (evt) {
    if ($bIDB$export$Konva.UA.ieMobile) {
      return this._touchmove(evt);
    }

    this.setPointersPositions(evt);

    var pointerId = $XIcS$export$Util._getFirstPointerId(evt);

    var shape;
    var eventsEnabled = !$XvfD$export$DD.isDragging || $bIDB$export$Konva.hitOnDragEnabled;

    if (eventsEnabled) {
      shape = this.getIntersection(this.getPointerPosition());

      if (shape && shape.isListening()) {
        var differentTarget = !this.targetShape || this.targetShape !== shape;

        if (eventsEnabled && differentTarget) {
          if (this.targetShape) {
            this.targetShape._fireAndBubble($inLU$var$MOUSEOUT, {
              evt: evt,
              pointerId: pointerId
            }, shape);

            this.targetShape._fireAndBubble($inLU$var$MOUSELEAVE, {
              evt: evt,
              pointerId: pointerId
            }, shape);
          }

          shape._fireAndBubble($inLU$var$MOUSEOVER, {
            evt: evt,
            pointerId: pointerId
          }, this.targetShape);

          shape._fireAndBubble($inLU$var$MOUSEENTER, {
            evt: evt,
            pointerId: pointerId
          }, this.targetShape);

          shape._fireAndBubble($inLU$var$MOUSEMOVE, {
            evt: evt,
            pointerId: pointerId
          });

          this.targetShape = shape;
        } else {
          shape._fireAndBubble($inLU$var$MOUSEMOVE, {
            evt: evt,
            pointerId: pointerId
          });
        }
      } else {
        if (this.targetShape && eventsEnabled) {
          this.targetShape._fireAndBubble($inLU$var$MOUSEOUT, {
            evt: evt,
            pointerId: pointerId
          });

          this.targetShape._fireAndBubble($inLU$var$MOUSELEAVE, {
            evt: evt,
            pointerId: pointerId
          });

          this._fire($inLU$var$MOUSEOVER, {
            evt: evt,
            target: this,
            currentTarget: this,
            pointerId: pointerId
          });

          this.targetShape = null;
        }

        this._fire($inLU$var$MOUSEMOVE, {
          evt: evt,
          target: this,
          currentTarget: this,
          pointerId: pointerId
        });
      }

      this._fire($inLU$var$CONTENT_MOUSEMOVE, {
        evt: evt
      });
    }

    if (evt.cancelable) {
      evt.preventDefault();
    }
  };

  Stage.prototype._mousedown = function (evt) {
    if ($bIDB$export$Konva.UA.ieMobile) {
      return this._touchstart(evt);
    }

    this.setPointersPositions(evt);

    var pointerId = $XIcS$export$Util._getFirstPointerId(evt);

    var shape = this.getIntersection(this.getPointerPosition());
    $XvfD$export$DD.justDragged = false;
    $bIDB$export$Konva.listenClickTap = true;

    if (shape && shape.isListening()) {
      this.clickStartShape = shape;

      shape._fireAndBubble($inLU$var$MOUSEDOWN, {
        evt: evt,
        pointerId: pointerId
      });
    } else {
      this._fire($inLU$var$MOUSEDOWN, {
        evt: evt,
        target: this,
        currentTarget: this,
        pointerId: pointerId
      });
    }

    this._fire($inLU$var$CONTENT_MOUSEDOWN, {
      evt: evt
    });
  };

  Stage.prototype._mouseup = function (evt) {
    if ($bIDB$export$Konva.UA.ieMobile) {
      return this._touchend(evt);
    }

    this.setPointersPositions(evt);

    var pointerId = $XIcS$export$Util._getFirstPointerId(evt);

    var shape = this.getIntersection(this.getPointerPosition()),
        clickStartShape = this.clickStartShape,
        clickEndShape = this.clickEndShape,
        fireDblClick = false;

    if ($bIDB$export$Konva.inDblClickWindow) {
      fireDblClick = true;
      clearTimeout(this.dblTimeout);
    } else if (!$XvfD$export$DD.justDragged) {
      $bIDB$export$Konva.inDblClickWindow = true;
      clearTimeout(this.dblTimeout);
    }

    this.dblTimeout = setTimeout(function () {
      $bIDB$export$Konva.inDblClickWindow = false;
    }, $bIDB$export$Konva.dblClickWindow);

    if (shape && shape.isListening()) {
      this.clickEndShape = shape;

      shape._fireAndBubble($inLU$var$MOUSEUP, {
        evt: evt,
        pointerId: pointerId
      });

      if ($bIDB$export$Konva.listenClickTap && clickStartShape && clickStartShape._id === shape._id) {
        shape._fireAndBubble($inLU$var$CLICK, {
          evt: evt,
          pointerId: pointerId
        });

        if (fireDblClick && clickEndShape && clickEndShape === shape) {
          shape._fireAndBubble($inLU$var$DBL_CLICK, {
            evt: evt,
            pointerId: pointerId
          });
        }
      }
    } else {
      this._fire($inLU$var$MOUSEUP, {
        evt: evt,
        target: this,
        currentTarget: this,
        pointerId: pointerId
      });

      if ($bIDB$export$Konva.listenClickTap) {
        this._fire($inLU$var$CLICK, {
          evt: evt,
          target: this,
          currentTarget: this,
          pointerId: pointerId
        });
      }

      if (fireDblClick) {
        this._fire($inLU$var$DBL_CLICK, {
          evt: evt,
          target: this,
          currentTarget: this,
          pointerId: pointerId
        });
      }
    }

    this._fire($inLU$var$CONTENT_MOUSEUP, {
      evt: evt
    });

    if ($bIDB$export$Konva.listenClickTap) {
      this._fire($inLU$var$CONTENT_CLICK, {
        evt: evt
      });

      if (fireDblClick) {
        this._fire($inLU$var$CONTENT_DBL_CLICK, {
          evt: evt
        });
      }
    }

    $bIDB$export$Konva.listenClickTap = false;

    if (evt.cancelable) {
      evt.preventDefault();
    }
  };

  Stage.prototype._contextmenu = function (evt) {
    this.setPointersPositions(evt);
    var shape = this.getIntersection(this.getPointerPosition());

    if (shape && shape.isListening()) {
      shape._fireAndBubble($inLU$var$CONTEXTMENU, {
        evt: evt
      });
    } else {
      this._fire($inLU$var$CONTEXTMENU, {
        evt: evt,
        target: this,
        currentTarget: this
      });
    }

    this._fire($inLU$var$CONTENT_CONTEXTMENU, {
      evt: evt
    });
  };

  Stage.prototype._touchstart = function (evt) {
    var _this = this;

    this.setPointersPositions(evt);
    var triggeredOnShape = false;

    this._changedPointerPositions.forEach(function (pos) {
      var shape = _this.getIntersection(pos);

      $bIDB$export$Konva.listenClickTap = true;
      $XvfD$export$DD.justDragged = false;
      var hasShape = shape && shape.isListening();

      if (!hasShape) {
        return;
      }

      if ($bIDB$export$Konva.captureTouchEventsEnabled) {
        shape.setPointerCapture(pos.id);
      }

      _this.tapStartShape = shape;

      shape._fireAndBubble($inLU$var$TOUCHSTART, {
        evt: evt,
        pointerId: pos.id
      }, _this);

      triggeredOnShape = true;

      if (shape.isListening() && shape.preventDefault() && evt.cancelable) {
        evt.preventDefault();
      }
    });

    if (!triggeredOnShape) {
      this._fire($inLU$var$TOUCHSTART, {
        evt: evt,
        target: this,
        currentTarget: this,
        pointerId: this._changedPointerPositions[0].id
      });
    }

    this._fire($inLU$var$CONTENT_TOUCHSTART, {
      evt: evt
    });
  };

  Stage.prototype._touchmove = function (evt) {
    var _this = this;

    this.setPointersPositions(evt);
    var eventsEnabled = !$XvfD$export$DD.isDragging || $bIDB$export$Konva.hitOnDragEnabled;

    if (eventsEnabled) {
      var triggeredOnShape = false;
      var processedShapesIds = {};

      this._changedPointerPositions.forEach(function (pos) {
        var shape = $Gfsp$export$getCapturedShape(pos.id) || _this.getIntersection(pos);

        var hasShape = shape && shape.isListening();

        if (!hasShape) {
          return;
        }

        if (processedShapesIds[shape._id]) {
          return;
        }

        processedShapesIds[shape._id] = true;

        shape._fireAndBubble($inLU$var$TOUCHMOVE, {
          evt: evt,
          pointerId: pos.id
        });

        triggeredOnShape = true;

        if (shape.isListening() && shape.preventDefault() && evt.cancelable) {
          evt.preventDefault();
        }
      });

      if (!triggeredOnShape) {
        this._fire($inLU$var$TOUCHMOVE, {
          evt: evt,
          target: this,
          currentTarget: this,
          pointerId: this._changedPointerPositions[0].id
        });
      }

      this._fire($inLU$var$CONTENT_TOUCHMOVE, {
        evt: evt
      });
    }

    if ($XvfD$export$DD.isDragging && $XvfD$export$DD.node.preventDefault() && evt.cancelable) {
      evt.preventDefault();
    }
  };

  Stage.prototype._touchend = function (evt) {
    var _this = this;

    this.setPointersPositions(evt);
    var clickEndShape = this.clickEndShape,
        fireDblClick = false;

    if ($bIDB$export$Konva.inDblClickWindow) {
      fireDblClick = true;
      clearTimeout(this.dblTimeout);
    } else if (!$XvfD$export$DD.justDragged) {
      $bIDB$export$Konva.inDblClickWindow = true;
      clearTimeout(this.dblTimeout);
    }

    this.dblTimeout = setTimeout(function () {
      $bIDB$export$Konva.inDblClickWindow = false;
    }, $bIDB$export$Konva.dblClickWindow);
    var triggeredOnShape = false;
    var processedShapesIds = {};
    var tapTriggered = false;
    var dblTapTriggered = false;

    this._changedPointerPositions.forEach(function (pos) {
      var shape = $Gfsp$export$getCapturedShape(pos.id) || _this.getIntersection(pos);

      if (shape) {
        shape.releaseCapture(pos.id);
      }

      var hasShape = shape && shape.isListening();

      if (!hasShape) {
        return;
      }

      if (processedShapesIds[shape._id]) {
        return;
      }

      processedShapesIds[shape._id] = true;
      _this.clickEndShape = shape;

      shape._fireAndBubble($inLU$var$TOUCHEND, {
        evt: evt,
        pointerId: pos.id
      });

      triggeredOnShape = true;

      if ($bIDB$export$Konva.listenClickTap && shape === _this.tapStartShape) {
        tapTriggered = true;

        shape._fireAndBubble($inLU$var$TAP, {
          evt: evt,
          pointerId: pos.id
        });

        if (fireDblClick && clickEndShape && clickEndShape === shape) {
          dblTapTriggered = true;

          shape._fireAndBubble($inLU$var$DBL_TAP, {
            evt: evt,
            pointerId: pos.id
          });
        }
      }

      if (shape.isListening() && shape.preventDefault() && evt.cancelable) {
        evt.preventDefault();
      }
    });

    if (!triggeredOnShape) {
      this._fire($inLU$var$TOUCHEND, {
        evt: evt,
        target: this,
        currentTarget: this,
        pointerId: this._changedPointerPositions[0].id
      });
    }

    if ($bIDB$export$Konva.listenClickTap && !tapTriggered) {
      this._fire($inLU$var$TAP, {
        evt: evt,
        target: this,
        currentTarget: this,
        pointerId: this._changedPointerPositions[0].id
      });
    }

    if (fireDblClick && !dblTapTriggered) {
      this._fire($inLU$var$DBL_TAP, {
        evt: evt,
        target: this,
        currentTarget: this,
        pointerId: this._changedPointerPositions[0].id
      });
    }

    this._fire($inLU$var$CONTENT_TOUCHEND, {
      evt: evt
    });

    if ($bIDB$export$Konva.listenClickTap) {
      this._fire($inLU$var$CONTENT_TAP, {
        evt: evt
      });

      if (fireDblClick) {
        this._fire($inLU$var$CONTENT_DBL_TAP, {
          evt: evt
        });
      }
    }

    $bIDB$export$Konva.listenClickTap = false;
  };

  Stage.prototype._wheel = function (evt) {
    this.setPointersPositions(evt);
    var shape = this.getIntersection(this.getPointerPosition());

    if (shape && shape.isListening()) {
      shape._fireAndBubble($inLU$var$WHEEL, {
        evt: evt
      });
    } else {
      this._fire($inLU$var$WHEEL, {
        evt: evt,
        target: this,
        currentTarget: this
      });
    }

    this._fire($inLU$var$CONTENT_WHEEL, {
      evt: evt
    });
  };

  Stage.prototype._pointerdown = function (evt) {
    if (!$bIDB$export$Konva._pointerEventsEnabled) {
      return;
    }

    this.setPointersPositions(evt);
    var shape = $Gfsp$export$getCapturedShape(evt.pointerId) || this.getIntersection(this.getPointerPosition());

    if (shape) {
      shape._fireAndBubble($inLU$var$POINTERDOWN, $Gfsp$export$createEvent(evt));
    }
  };

  Stage.prototype._pointermove = function (evt) {
    if (!$bIDB$export$Konva._pointerEventsEnabled) {
      return;
    }

    this.setPointersPositions(evt);
    var shape = $Gfsp$export$getCapturedShape(evt.pointerId) || this.getIntersection(this.getPointerPosition());

    if (shape) {
      shape._fireAndBubble($inLU$var$POINTERMOVE, $Gfsp$export$createEvent(evt));
    }
  };

  Stage.prototype._pointerup = function (evt) {
    if (!$bIDB$export$Konva._pointerEventsEnabled) {
      return;
    }

    this.setPointersPositions(evt);
    var shape = $Gfsp$export$getCapturedShape(evt.pointerId) || this.getIntersection(this.getPointerPosition());

    if (shape) {
      shape._fireAndBubble($inLU$var$POINTERUP, $Gfsp$export$createEvent(evt));
    }

    $Gfsp$export$releaseCapture(evt.pointerId);
  };

  Stage.prototype._pointercancel = function (evt) {
    if (!$bIDB$export$Konva._pointerEventsEnabled) {
      return;
    }

    this.setPointersPositions(evt);
    var shape = $Gfsp$export$getCapturedShape(evt.pointerId) || this.getIntersection(this.getPointerPosition());

    if (shape) {
      shape._fireAndBubble($inLU$var$POINTERUP, $Gfsp$export$createEvent(evt));
    }

    $Gfsp$export$releaseCapture(evt.pointerId);
  };

  Stage.prototype._lostpointercapture = function (evt) {
    $Gfsp$export$releaseCapture(evt.pointerId);
  };

  Stage.prototype.setPointersPositions = function (evt) {
    var _this = this;

    var contentPosition = this._getContentPosition(),
        x = null,
        y = null;

    evt = evt ? evt : window.event;

    if (evt.touches !== undefined) {
      this._pointerPositions = [];
      this._changedPointerPositions = [];
      $XIcS$export$Collection.prototype.each.call(evt.touches, function (touch) {
        _this._pointerPositions.push({
          id: touch.identifier,
          x: touch.clientX - contentPosition.left,
          y: touch.clientY - contentPosition.top
        });
      });
      $XIcS$export$Collection.prototype.each.call(evt.changedTouches || evt.touches, function (touch) {
        _this._changedPointerPositions.push({
          id: touch.identifier,
          x: touch.clientX - contentPosition.left,
          y: touch.clientY - contentPosition.top
        });
      });

      if (evt.touches.length > 0) {
        var touch = evt.touches[0];
        x = touch.clientX - contentPosition.left;
        y = touch.clientY - contentPosition.top;
      }
    } else {
      x = evt.clientX - contentPosition.left;
      y = evt.clientY - contentPosition.top;
      this.pointerPos = {
        x: x,
        y: y
      };
      this._pointerPositions = [{
        x: x,
        y: y,
        id: $XIcS$export$Util._getFirstPointerId(evt)
      }];
      this._changedPointerPositions = [{
        x: x,
        y: y,
        id: $XIcS$export$Util._getFirstPointerId(evt)
      }];
    }
  };

  Stage.prototype._setPointerPosition = function (evt) {
    $XIcS$export$Util.warn('Method _setPointerPosition is deprecated. Use "stage.setPointersPositions(event)" instead.');
    this.setPointersPositions(evt);
  };

  Stage.prototype._getContentPosition = function () {
    var rect = this.content.getBoundingClientRect ? this.content.getBoundingClientRect() : {
      top: 0,
      left: 0
    };
    return {
      top: rect.top,
      left: rect.left
    };
  };

  Stage.prototype._buildDOM = function () {
    this.bufferCanvas = new $KydS$export$SceneCanvas();
    this.bufferHitCanvas = new $KydS$export$HitCanvas({
      pixelRatio: 1
    });

    if (!$bIDB$export$Konva.isBrowser) {
      return;
    }

    var container = this.container();

    if (!container) {
      throw 'Stage has no container. A container is required.';
    }

    container.innerHTML = $inLU$var$EMPTY_STRING;
    this.content = document.createElement('div');
    this.content.style.position = $inLU$var$RELATIVE;
    this.content.style.userSelect = 'none';
    this.content.className = $inLU$var$KONVA_CONTENT;
    this.content.setAttribute('role', 'presentation');
    container.appendChild(this.content);

    this._resizeDOM();
  };

  Stage.prototype.cache = function () {
    $XIcS$export$Util.warn('Cache function is not allowed for stage. You may use cache only for layers, groups and shapes.');
    return this;
  };

  Stage.prototype.clearCache = function () {
    return this;
  };

  Stage.prototype.batchDraw = function () {
    this.children.each(function (layer) {
      layer.batchDraw();
    });
    return this;
  };

  return Stage;
}($Eysw$export$Container);

var $inLU$export$Stage = $inLU$var$Stage;
$inLU$exports.Stage = $inLU$export$Stage;
$inLU$var$Stage.prototype.nodeType = $inLU$var$STAGE;
$bIDB$export$_registerNode($inLU$var$Stage);
$cgGB$export$Factory.addGetterSetter($inLU$var$Stage, 'container');
// ASSET: node_modules/konva/lib/BaseLayer.js
var $VIlJ$exports = {};

var $VIlJ$var$__extends = $VIlJ$exports && $VIlJ$exports.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty($VIlJ$exports, "__esModule", {
  value: true
});

var $VIlJ$var$BaseLayer = function (_super) {
  $VIlJ$var$__extends(BaseLayer, _super);

  function BaseLayer(config) {
    var _this = _super.call(this, config) || this;

    _this.canvas = new $KydS$export$SceneCanvas();
    _this._waitingForDraw = false;

    _this.on('visibleChange', _this._checkVisibility);

    _this._checkVisibility();

    _this.on('imageSmoothingEnabledChange', _this._checkSmooth);

    _this._checkSmooth();

    return _this;
  }

  BaseLayer.prototype.createPNGStream = function () {
    var c = this.canvas._canvas;
    return c.createPNGStream();
  };

  BaseLayer.prototype.getCanvas = function () {
    return this.canvas;
  };

  BaseLayer.prototype.getHitCanvas = function () {
    return this.hitCanvas;
  };

  BaseLayer.prototype.getContext = function () {
    return this.getCanvas().getContext();
  };

  BaseLayer.prototype.clear = function (bounds) {
    this.getContext().clear(bounds);
    return this;
  };

  BaseLayer.prototype.setZIndex = function (index) {
    _super.prototype.setZIndex.call(this, index);

    var stage = this.getStage();

    if (stage) {
      stage.content.removeChild(this.getCanvas()._canvas);

      if (index < stage.getChildren().length - 1) {
        stage.content.insertBefore(this.getCanvas()._canvas, stage.getChildren()[index + 1].getCanvas()._canvas);
      } else {
        stage.content.appendChild(this.getCanvas()._canvas);
      }
    }

    return this;
  };

  BaseLayer.prototype.moveToTop = function () {
    $pBWF$export$Node.prototype.moveToTop.call(this);
    var stage = this.getStage();

    if (stage) {
      stage.content.removeChild(this.getCanvas()._canvas);
      stage.content.appendChild(this.getCanvas()._canvas);
    }

    return true;
  };

  BaseLayer.prototype.moveUp = function () {
    var moved = $pBWF$export$Node.prototype.moveUp.call(this);

    if (!moved) {
      return false;
    }

    var stage = this.getStage();

    if (!stage) {
      return false;
    }

    stage.content.removeChild(this.getCanvas()._canvas);

    if (this.index < stage.getChildren().length - 1) {
      stage.content.insertBefore(this.getCanvas()._canvas, stage.getChildren()[this.index + 1].getCanvas()._canvas);
    } else {
      stage.content.appendChild(this.getCanvas()._canvas);
    }

    return true;
  };

  BaseLayer.prototype.moveDown = function () {
    if ($pBWF$export$Node.prototype.moveDown.call(this)) {
      var stage = this.getStage();

      if (stage) {
        var children = stage.getChildren();
        stage.content.removeChild(this.getCanvas()._canvas);
        stage.content.insertBefore(this.getCanvas()._canvas, children[this.index + 1].getCanvas()._canvas);
      }

      return true;
    }

    return false;
  };

  BaseLayer.prototype.moveToBottom = function () {
    if ($pBWF$export$Node.prototype.moveToBottom.call(this)) {
      var stage = this.getStage();

      if (stage) {
        var children = stage.getChildren();
        stage.content.removeChild(this.getCanvas()._canvas);
        stage.content.insertBefore(this.getCanvas()._canvas, children[1].getCanvas()._canvas);
      }

      return true;
    }

    return false;
  };

  BaseLayer.prototype.getLayer = function () {
    return this;
  };

  BaseLayer.prototype.hitGraphEnabled = function () {
    return true;
  };

  BaseLayer.prototype.remove = function () {
    var _canvas = this.getCanvas()._canvas;

    $pBWF$export$Node.prototype.remove.call(this);

    if (_canvas && _canvas.parentNode && $XIcS$export$Util._isInDocument(_canvas)) {
      _canvas.parentNode.removeChild(_canvas);
    }

    return this;
  };

  BaseLayer.prototype.getStage = function () {
    return this.parent;
  };

  BaseLayer.prototype.setSize = function (_a) {
    var width = _a.width,
        height = _a.height;
    this.canvas.setSize(width, height);
    return this;
  };

  BaseLayer.prototype._toKonvaCanvas = function (config) {
    config = config || {};
    config.width = config.width || this.getWidth();
    config.height = config.height || this.getHeight();
    config.x = config.x !== undefined ? config.x : this.x();
    config.y = config.y !== undefined ? config.y : this.y();
    return $pBWF$export$Node.prototype._toKonvaCanvas.call(this, config);
  };

  BaseLayer.prototype._checkVisibility = function () {
    var visible = this.visible();

    if (visible) {
      this.canvas._canvas.style.display = 'block';
    } else {
      this.canvas._canvas.style.display = 'none';
    }
  };

  BaseLayer.prototype._checkSmooth = function () {
    this.getContext()._context.imageSmoothingEnabled = this.imageSmoothingEnabled();
  };

  BaseLayer.prototype.getWidth = function () {
    if (this.parent) {
      return this.parent.width();
    }
  };

  BaseLayer.prototype.setWidth = function () {
    $XIcS$export$Util.warn('Can not change width of layer. Use "stage.width(value)" function instead.');
  };

  BaseLayer.prototype.getHeight = function () {
    if (this.parent) {
      return this.parent.height();
    }
  };

  BaseLayer.prototype.setHeight = function () {
    $XIcS$export$Util.warn('Can not change height of layer. Use "stage.height(value)" function instead.');
  };

  BaseLayer.prototype.getIntersection = function (pos, selector) {
    return null;
  };

  BaseLayer.prototype.batchDraw = function () {
    var _this = this;

    if (!this._waitingForDraw) {
      this._waitingForDraw = true;
      $XIcS$export$Util.requestAnimFrame(function () {
        _this.draw();

        _this._waitingForDraw = false;
      });
    }

    return this;
  };

  BaseLayer.prototype._applyTransform = function (shape, context, top) {
    var m = shape.getAbsoluteTransform(top).getMatrix();
    context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
  };

  return BaseLayer;
}($Eysw$export$Container);

var $VIlJ$export$BaseLayer = $VIlJ$var$BaseLayer;
$VIlJ$exports.BaseLayer = $VIlJ$export$BaseLayer;
$VIlJ$var$BaseLayer.prototype.nodeType = 'BaseLayer';
$cgGB$export$Factory.addGetterSetter($VIlJ$var$BaseLayer, 'imageSmoothingEnabled', true);
$cgGB$export$Factory.addGetterSetter($VIlJ$var$BaseLayer, 'clearBeforeDraw', true);
$XIcS$export$Collection.mapMethods($VIlJ$var$BaseLayer);
// ASSET: node_modules/konva/lib/Shape.js
var $JWag$exports = {};

var $JWag$var$__extends = $JWag$exports && $JWag$exports.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty($JWag$exports, "__esModule", {
  value: true
});
var $JWag$var$HAS_SHADOW = 'hasShadow';
var $JWag$var$SHADOW_RGBA = 'shadowRGBA';
var $JWag$var$patternImage = 'patternImage';
var $JWag$var$linearGradient = 'linearGradient';
var $JWag$var$radialGradient = 'radialGradient';
var $JWag$var$dummyContext;

function $JWag$var$getDummyContext() {
  if ($JWag$var$dummyContext) {
    return $JWag$var$dummyContext;
  }

  $JWag$var$dummyContext = $XIcS$export$Util.createCanvasElement().getContext('2d');
  return $JWag$var$dummyContext;
}

var $JWag$export$shapes = {};
$JWag$exports.shapes = $JWag$export$shapes;

function $JWag$var$_fillFunc(context) {
  context.fill();
}

function $JWag$var$_strokeFunc(context) {
  context.stroke();
}

function $JWag$var$_fillFuncHit(context) {
  context.fill();
}

function $JWag$var$_strokeFuncHit(context) {
  context.stroke();
}

function $JWag$var$_clearHasShadowCache() {
  this._clearCache($JWag$var$HAS_SHADOW);
}

function $JWag$var$_clearGetShadowRGBACache() {
  this._clearCache($JWag$var$SHADOW_RGBA);
}

function $JWag$var$_clearFillPatternCache() {
  this._clearCache($JWag$var$patternImage);
}

function $JWag$var$_clearLinearGradientCache() {
  this._clearCache($JWag$var$linearGradient);
}

function $JWag$var$_clearRadialGradientCache() {
  this._clearCache($JWag$var$radialGradient);
}

var $JWag$var$Shape = function (_super) {
  $JWag$var$__extends(Shape, _super);

  function Shape(config) {
    var _this = _super.call(this, config) || this;

    var key;

    while (true) {
      key = $XIcS$export$Util.getRandomColor();

      if (key && !(key in $JWag$export$shapes)) {
        break;
      }
    }

    _this.colorKey = key;
    $JWag$export$shapes[key] = _this;

    _this.on('shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva', $JWag$var$_clearHasShadowCache);

    _this.on('shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva', $JWag$var$_clearGetShadowRGBACache);

    _this.on('fillPriorityChange.konva fillPatternImageChange.konva fillPatternRepeatChange.konva fillPatternScaleXChange.konva fillPatternScaleYChange.konva', $JWag$var$_clearFillPatternCache);

    _this.on('fillPriorityChange.konva fillLinearGradientColorStopsChange.konva fillLinearGradientStartPointXChange.konva fillLinearGradientStartPointYChange.konva fillLinearGradientEndPointXChange.konva fillLinearGradientEndPointYChange.konva', $JWag$var$_clearLinearGradientCache);

    _this.on('fillPriorityChange.konva fillRadialGradientColorStopsChange.konva fillRadialGradientStartPointXChange.konva fillRadialGradientStartPointYChange.konva fillRadialGradientEndPointXChange.konva fillRadialGradientEndPointYChange.konva fillRadialGradientStartRadiusChange.konva fillRadialGradientEndRadiusChange.konva', $JWag$var$_clearRadialGradientCache);

    return _this;
  }

  Shape.prototype.getContext = function () {
    return this.getLayer().getContext();
  };

  Shape.prototype.getCanvas = function () {
    return this.getLayer().getCanvas();
  };

  Shape.prototype.getSceneFunc = function () {
    return this.attrs.sceneFunc || this['_sceneFunc'];
  };

  Shape.prototype.getHitFunc = function () {
    return this.attrs.hitFunc || this['_hitFunc'];
  };

  Shape.prototype.hasShadow = function () {
    return this._getCache($JWag$var$HAS_SHADOW, this._hasShadow);
  };

  Shape.prototype._hasShadow = function () {
    return this.shadowEnabled() && this.shadowOpacity() !== 0 && !!(this.shadowColor() || this.shadowBlur() || this.shadowOffsetX() || this.shadowOffsetY());
  };

  Shape.prototype._getFillPattern = function () {
    return this._getCache($JWag$var$patternImage, this.__getFillPattern);
  };

  Shape.prototype.__getFillPattern = function () {
    if (this.fillPatternImage()) {
      var ctx = $JWag$var$getDummyContext();
      var pattern = ctx.createPattern(this.fillPatternImage(), this.fillPatternRepeat() || 'repeat');
      return pattern;
    }
  };

  Shape.prototype._getLinearGradient = function () {
    return this._getCache($JWag$var$linearGradient, this.__getLinearGradient);
  };

  Shape.prototype.__getLinearGradient = function () {
    var colorStops = this.fillLinearGradientColorStops();

    if (colorStops) {
      var ctx = $JWag$var$getDummyContext();
      var start = this.fillLinearGradientStartPoint();
      var end = this.fillLinearGradientEndPoint();
      var grd = ctx.createLinearGradient(start.x, start.y, end.x, end.y);

      for (var n = 0; n < colorStops.length; n += 2) {
        grd.addColorStop(colorStops[n], colorStops[n + 1]);
      }

      return grd;
    }
  };

  Shape.prototype._getRadialGradient = function () {
    return this._getCache($JWag$var$radialGradient, this.__getRadialGradient);
  };

  Shape.prototype.__getRadialGradient = function () {
    var colorStops = this.fillRadialGradientColorStops();

    if (colorStops) {
      var ctx = $JWag$var$getDummyContext();
      var start = this.fillRadialGradientStartPoint();
      var end = this.fillRadialGradientEndPoint();
      var grd = ctx.createRadialGradient(start.x, start.y, this.fillRadialGradientStartRadius(), end.x, end.y, this.fillRadialGradientEndRadius());

      for (var n = 0; n < colorStops.length; n += 2) {
        grd.addColorStop(colorStops[n], colorStops[n + 1]);
      }

      return grd;
    }
  };

  Shape.prototype.getShadowRGBA = function () {
    return this._getCache($JWag$var$SHADOW_RGBA, this._getShadowRGBA);
  };

  Shape.prototype._getShadowRGBA = function () {
    if (this.hasShadow()) {
      var rgba = $XIcS$export$Util.colorToRGBA(this.shadowColor());
      return 'rgba(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ',' + rgba.a * (this.shadowOpacity() || 1) + ')';
    }
  };

  Shape.prototype.hasFill = function () {
    return !!(this.fill() || this.fillPatternImage() || this.fillLinearGradientColorStops() || this.fillRadialGradientColorStops());
  };

  Shape.prototype.hasStroke = function () {
    return this.strokeEnabled() && this.strokeWidth() && !!(this.stroke() || this.strokeLinearGradientColorStops());
  };

  Shape.prototype.hasHitStroke = function () {
    var width = this.hitStrokeWidth();
    return this.strokeEnabled() && (width || this.strokeWidth() && width === 'auto');
  };

  Shape.prototype.intersects = function (point) {
    var stage = this.getStage(),
        bufferHitCanvas = stage.bufferHitCanvas,
        p;
    bufferHitCanvas.getContext().clear();
    this.drawHit(bufferHitCanvas);
    p = bufferHitCanvas.context.getImageData(Math.round(point.x), Math.round(point.y), 1, 1).data;
    return p[3] > 0;
  };

  Shape.prototype.destroy = function () {
    $pBWF$export$Node.prototype.destroy.call(this);
    delete $JWag$export$shapes[this.colorKey];
    delete this.colorKey;
    return this;
  };

  Shape.prototype._useBufferCanvas = function (caching) {
    return !!((!caching || this.hasShadow()) && this.perfectDrawEnabled() && this.getAbsoluteOpacity() !== 1 && this.hasFill() && this.hasStroke() && this.getStage());
  };

  Shape.prototype.setStrokeHitEnabled = function (val) {
    if (val) {
      this.hitStrokeWidth('auto');
    } else {
      this.hitStrokeWidth(0);
    }
  };

  Shape.prototype.getStrokeHitEnabled = function () {
    if (this.hitStrokeWidth() === 0) {
      return false;
    } else {
      return true;
    }
  };

  Shape.prototype.getSelfRect = function () {
    var size = this.size();
    return {
      x: this._centroid ? Math.round(-size.width / 2) : 0,
      y: this._centroid ? Math.round(-size.height / 2) : 0,
      width: size.width,
      height: size.height
    };
  };

  Shape.prototype.getClientRect = function (attrs) {
    attrs = attrs || {};
    var skipTransform = attrs.skipTransform;
    var relativeTo = attrs.relativeTo;
    var fillRect = this.getSelfRect();
    var applyStroke = !attrs.skipStroke && this.hasStroke();
    var strokeWidth = applyStroke && this.strokeWidth() || 0;
    var fillAndStrokeWidth = fillRect.width + strokeWidth;
    var fillAndStrokeHeight = fillRect.height + strokeWidth;
    var applyShadow = !attrs.skipShadow && this.hasShadow();
    var shadowOffsetX = applyShadow ? this.shadowOffsetX() : 0;
    var shadowOffsetY = applyShadow ? this.shadowOffsetY() : 0;
    var preWidth = fillAndStrokeWidth + Math.abs(shadowOffsetX);
    var preHeight = fillAndStrokeHeight + Math.abs(shadowOffsetY);
    var blurRadius = applyShadow && this.shadowBlur() || 0;
    var width = preWidth + blurRadius * 2;
    var height = preHeight + blurRadius * 2;
    var roundingOffset = 0;

    if (Math.round(strokeWidth / 2) !== strokeWidth / 2) {
      roundingOffset = 1;
    }

    var rect = {
      width: width + roundingOffset,
      height: height + roundingOffset,
      x: -Math.round(strokeWidth / 2 + blurRadius) + Math.min(shadowOffsetX, 0) + fillRect.x,
      y: -Math.round(strokeWidth / 2 + blurRadius) + Math.min(shadowOffsetY, 0) + fillRect.y
    };

    if (!skipTransform) {
      return this._transformedRect(rect, relativeTo);
    }

    return rect;
  };

  Shape.prototype.drawScene = function (can, top, caching, skipBuffer) {
    var layer = this.getLayer(),
        canvas = can || layer.getCanvas(),
        context = canvas.getContext(),
        cachedCanvas = this._getCanvasCache(),
        drawFunc = this.sceneFunc(),
        hasShadow = this.hasShadow(),
        hasStroke = this.hasStroke(),
        stage,
        bufferCanvas,
        bufferContext;

    if (!this.isVisible() && !caching) {
      return this;
    }

    if (cachedCanvas) {
      context.save();

      layer._applyTransform(this, context, top);

      this._drawCachedSceneCanvas(context);

      context.restore();
      return this;
    }

    if (!drawFunc) {
      return this;
    }

    context.save();

    if (this._useBufferCanvas(caching) && !skipBuffer) {
      stage = this.getStage();
      bufferCanvas = stage.bufferCanvas;
      bufferContext = bufferCanvas.getContext();
      bufferContext.clear();
      bufferContext.save();

      bufferContext._applyLineJoin(this);

      if (!caching) {
        if (layer) {
          layer._applyTransform(this, bufferContext, top);
        } else {
          var m = this.getAbsoluteTransform(top).getMatrix();
          context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
        }
      }

      drawFunc.call(this, bufferContext, this);
      bufferContext.restore();
      var ratio = bufferCanvas.pixelRatio;

      if (hasShadow && !canvas.hitCanvas) {
        context.save();

        context._applyShadow(this);

        context._applyOpacity(this);

        context._applyGlobalCompositeOperation(this);

        context.drawImage(bufferCanvas._canvas, 0, 0, bufferCanvas.width / ratio, bufferCanvas.height / ratio);
        context.restore();
      } else {
        context._applyOpacity(this);

        context._applyGlobalCompositeOperation(this);

        context.drawImage(bufferCanvas._canvas, 0, 0, bufferCanvas.width / ratio, bufferCanvas.height / ratio);
      }
    } else {
      context._applyLineJoin(this);

      if (!caching) {
        if (layer) {
          layer._applyTransform(this, context, top);
        } else {
          var o = this.getAbsoluteTransform(top).getMatrix();
          context.transform(o[0], o[1], o[2], o[3], o[4], o[5]);
        }
      }

      if (hasShadow && hasStroke && !canvas.hitCanvas) {
        context.save();

        if (!caching) {
          context._applyOpacity(this);

          context._applyGlobalCompositeOperation(this);
        }

        context._applyShadow(this);

        drawFunc.call(this, context, this);
        context.restore();

        if (this.hasFill() && this.shadowForStrokeEnabled()) {
          drawFunc.call(this, context, this);
        }
      } else if (hasShadow && !canvas.hitCanvas) {
        context.save();

        if (!caching) {
          context._applyOpacity(this);

          context._applyGlobalCompositeOperation(this);
        }

        context._applyShadow(this);

        drawFunc.call(this, context, this);
        context.restore();
      } else {
        if (!caching) {
          context._applyOpacity(this);

          context._applyGlobalCompositeOperation(this);
        }

        drawFunc.call(this, context, this);
      }
    }

    context.restore();
    return this;
  };

  Shape.prototype.drawHit = function (can, top, caching) {
    var layer = this.getLayer(),
        canvas = can || layer.hitCanvas,
        context = canvas && canvas.getContext(),
        drawFunc = this.hitFunc() || this.sceneFunc(),
        cachedCanvas = this._getCanvasCache(),
        cachedHitCanvas = cachedCanvas && cachedCanvas.hit;

    if (!this.colorKey) {
      console.log(this);
      $XIcS$export$Util.warn('Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. See the shape in logs above. If you want to reuse shape you should call remove() instead of destroy()');
    }

    if (!this.shouldDrawHit() && !caching) {
      return this;
    }

    if (cachedHitCanvas) {
      context.save();

      layer._applyTransform(this, context, top);

      this._drawCachedHitCanvas(context);

      context.restore();
      return this;
    }

    if (!drawFunc) {
      return this;
    }

    context.save();

    context._applyLineJoin(this);

    if (!caching) {
      if (layer) {
        layer._applyTransform(this, context, top);
      } else {
        var o = this.getAbsoluteTransform(top).getMatrix();
        context.transform(o[0], o[1], o[2], o[3], o[4], o[5]);
      }
    }

    drawFunc.call(this, context, this);
    context.restore();
    return this;
  };

  Shape.prototype.drawHitFromCache = function (alphaThreshold) {
    if (alphaThreshold === void 0) {
      alphaThreshold = 0;
    }

    var cachedCanvas = this._getCanvasCache(),
        sceneCanvas = this._getCachedSceneCanvas(),
        hitCanvas = cachedCanvas.hit,
        hitContext = hitCanvas.getContext(),
        hitWidth = hitCanvas.getWidth(),
        hitHeight = hitCanvas.getHeight(),
        hitImageData,
        hitData,
        len,
        rgbColorKey,
        i,
        alpha;

    hitContext.clear();
    hitContext.drawImage(sceneCanvas._canvas, 0, 0, hitWidth, hitHeight);

    try {
      hitImageData = hitContext.getImageData(0, 0, hitWidth, hitHeight);
      hitData = hitImageData.data;
      len = hitData.length;
      rgbColorKey = $XIcS$export$Util._hexToRgb(this.colorKey);

      for (i = 0; i < len; i += 4) {
        alpha = hitData[i + 3];

        if (alpha > alphaThreshold) {
          hitData[i] = rgbColorKey.r;
          hitData[i + 1] = rgbColorKey.g;
          hitData[i + 2] = rgbColorKey.b;
          hitData[i + 3] = 255;
        } else {
          hitData[i + 3] = 0;
        }
      }

      hitContext.putImageData(hitImageData, 0, 0);
    } catch (e) {
      $XIcS$export$Util.error('Unable to draw hit graph from cached scene canvas. ' + e.message);
    }

    return this;
  };

  Shape.prototype.hasPointerCapture = function (pointerId) {
    return $Gfsp$export$hasPointerCapture(pointerId, this);
  };

  Shape.prototype.setPointerCapture = function (pointerId) {
    $Gfsp$export$setPointerCapture(pointerId, this);
  };

  Shape.prototype.releaseCapture = function (pointerId) {
    $Gfsp$export$releaseCapture(pointerId, this);
  };

  return Shape;
}($pBWF$export$Node);

var $JWag$export$Shape = $JWag$var$Shape;
$JWag$exports.Shape = $JWag$export$Shape;
$JWag$var$Shape.prototype._fillFunc = $JWag$var$_fillFunc;
$JWag$var$Shape.prototype._strokeFunc = $JWag$var$_strokeFunc;
$JWag$var$Shape.prototype._fillFuncHit = $JWag$var$_fillFuncHit;
$JWag$var$Shape.prototype._strokeFuncHit = $JWag$var$_strokeFuncHit;
$JWag$var$Shape.prototype._centroid = false;
$JWag$var$Shape.prototype.nodeType = 'Shape';
$bIDB$export$_registerNode($JWag$var$Shape);
$cgGB$export$Factory.addGetterSetter($JWag$var$Shape, 'stroke', undefined, $tgRR$export$getStringValidator());
$cgGB$export$Factory.addGetterSetter($JWag$var$Shape, 'strokeWidth', 2, $tgRR$export$getNumberValidator());
$cgGB$export$Factory.addGetterSetter($JWag$var$Shape, 'hitStrokeWidth', 'auto', $tgRR$export$getNumberOrAutoValidator());
$cgGB$export$Factory.addGetterSetter($JWag$var$Shape, 'strokeHitEnabled', true, $tgRR$export$getBooleanValidator());
$cgGB$export$Factory.addGetterSetter($JWag$var$Shape, 'perfectDrawEnabled', true, $tgRR$export$getBooleanValidator());
$cgGB$export$Factory.addGetterSetter($JWag$var$Shape, 'shadowForStrokeEnabled', true, $tgRR$export$getBooleanValidator());
$cgGB$export$Factory.addGetterSetter($JWag$var$Shape, 'lineJoin');
$cgGB$export$Factory.addGetterSetter($JWag$var$Shape, 'lineCap');
$cgGB$export$Factory.addGetterSetter($JWag$var$Shape, 'sceneFunc');
$cgGB$export$Factory.addGetterSetter($JWag$var$Shape, 'hitFunc');
$cgGB$export$Factory.addGetterSetter($JWag$var$Shape, 'dash');
$cgGB$export$Factory.addGetterSetter($JWag$var$Shape, 'dashOffset', 0, $tgRR$export$getNumberValidator());
$cgGB$export$Factory.addGetterSetter($JWag$var$Shape, 'shadowColor', undefined, $tgRR$export$getStringValidator());
$cgGB$export$Factory.addGetterSetter($JWag$var$Shape, 'shadowBlur', 0, $tgRR$export$getNumberValidator());
$cgGB$export$Factory.addGetterSetter($JWag$var$Shape, 'shadowOpacity', 1, $tgRR$export$getNumberValidator());
$cgGB$export$Factory.addComponentsGetterSetter($JWag$var$Shape, 'shadowOffset', ['x', 'y']);
$cgGB$export$Factory.addGetterSetter($JWag$var$Shape, 'shadowOffsetX', 0, $tgRR$export$getNumberValidator());
$cgGB$export$Factory.addGetterSetter($JWag$var$Shape, 'shadowOffsetY', 0, $tgRR$export$getNumberValidator());
$cgGB$export$Factory.addGetterSetter($JWag$var$Shape, 'fillPatternImage');
$cgGB$export$Factory.addGetterSetter($JWag$var$Shape, 'fill', undefined, $tgRR$export$getStringValidator());
$cgGB$export$Factory.addGetterSetter($JWag$var$Shape, 'fillPatternX', 0, $tgRR$export$getNumberValidator());
$cgGB$export$Factory.addGetterSetter($JWag$var$Shape, 'fillPatternY', 0, $tgRR$export$getNumberValidator());
$cgGB$export$Factory.addGetterSetter($JWag$var$Shape, 'fillLinearGradientColorStops');
$cgGB$export$Factory.addGetterSetter($JWag$var$Shape, 'strokeLinearGradientColorStops');
$cgGB$export$Factory.addGetterSetter($JWag$var$Shape, 'fillRadialGradientStartRadius', 0);
$cgGB$export$Factory.addGetterSetter($JWag$var$Shape, 'fillRadialGradientEndRadius', 0);
$cgGB$export$Factory.addGetterSetter($JWag$var$Shape, 'fillRadialGradientColorStops');
$cgGB$export$Factory.addGetterSetter($JWag$var$Shape, 'fillPatternRepeat', 'repeat');
$cgGB$export$Factory.addGetterSetter($JWag$var$Shape, 'fillEnabled', true);
$cgGB$export$Factory.addGetterSetter($JWag$var$Shape, 'strokeEnabled', true);
$cgGB$export$Factory.addGetterSetter($JWag$var$Shape, 'shadowEnabled', true);
$cgGB$export$Factory.addGetterSetter($JWag$var$Shape, 'dashEnabled', true);
$cgGB$export$Factory.addGetterSetter($JWag$var$Shape, 'strokeScaleEnabled', true);
$cgGB$export$Factory.addGetterSetter($JWag$var$Shape, 'fillPriority', 'color');
$cgGB$export$Factory.addComponentsGetterSetter($JWag$var$Shape, 'fillPatternOffset', ['x', 'y']);
$cgGB$export$Factory.addGetterSetter($JWag$var$Shape, 'fillPatternOffsetX', 0, $tgRR$export$getNumberValidator());
$cgGB$export$Factory.addGetterSetter($JWag$var$Shape, 'fillPatternOffsetY', 0, $tgRR$export$getNumberValidator());
$cgGB$export$Factory.addComponentsGetterSetter($JWag$var$Shape, 'fillPatternScale', ['x', 'y']);
$cgGB$export$Factory.addGetterSetter($JWag$var$Shape, 'fillPatternScaleX', 1, $tgRR$export$getNumberValidator());
$cgGB$export$Factory.addGetterSetter($JWag$var$Shape, 'fillPatternScaleY', 1, $tgRR$export$getNumberValidator());
$cgGB$export$Factory.addComponentsGetterSetter($JWag$var$Shape, 'fillLinearGradientStartPoint', ['x', 'y']);
$cgGB$export$Factory.addComponentsGetterSetter($JWag$var$Shape, 'strokeLinearGradientStartPoint', ['x', 'y']);
$cgGB$export$Factory.addGetterSetter($JWag$var$Shape, 'fillLinearGradientStartPointX', 0);
$cgGB$export$Factory.addGetterSetter($JWag$var$Shape, 'strokeLinearGradientStartPointX', 0);
$cgGB$export$Factory.addGetterSetter($JWag$var$Shape, 'fillLinearGradientStartPointY', 0);
$cgGB$export$Factory.addGetterSetter($JWag$var$Shape, 'strokeLinearGradientStartPointY', 0);
$cgGB$export$Factory.addComponentsGetterSetter($JWag$var$Shape, 'fillLinearGradientEndPoint', ['x', 'y']);
$cgGB$export$Factory.addComponentsGetterSetter($JWag$var$Shape, 'strokeLinearGradientEndPoint', ['x', 'y']);
$cgGB$export$Factory.addGetterSetter($JWag$var$Shape, 'fillLinearGradientEndPointX', 0);
$cgGB$export$Factory.addGetterSetter($JWag$var$Shape, 'strokeLinearGradientEndPointX', 0);
$cgGB$export$Factory.addGetterSetter($JWag$var$Shape, 'fillLinearGradientEndPointY', 0);
$cgGB$export$Factory.addGetterSetter($JWag$var$Shape, 'strokeLinearGradientEndPointY', 0);
$cgGB$export$Factory.addComponentsGetterSetter($JWag$var$Shape, 'fillRadialGradientStartPoint', ['x', 'y']);
$cgGB$export$Factory.addGetterSetter($JWag$var$Shape, 'fillRadialGradientStartPointX', 0);
$cgGB$export$Factory.addGetterSetter($JWag$var$Shape, 'fillRadialGradientStartPointY', 0);
$cgGB$export$Factory.addComponentsGetterSetter($JWag$var$Shape, 'fillRadialGradientEndPoint', ['x', 'y']);
$cgGB$export$Factory.addGetterSetter($JWag$var$Shape, 'fillRadialGradientEndPointX', 0);
$cgGB$export$Factory.addGetterSetter($JWag$var$Shape, 'fillRadialGradientEndPointY', 0);
$cgGB$export$Factory.addGetterSetter($JWag$var$Shape, 'fillPatternRotation', 0);
$cgGB$export$Factory.backCompat($JWag$var$Shape, {
  dashArray: 'dash',
  getDashArray: 'getDash',
  setDashArray: 'getDash',
  drawFunc: 'sceneFunc',
  getDrawFunc: 'getSceneFunc',
  setDrawFunc: 'setSceneFunc',
  drawHitFunc: 'hitFunc',
  getDrawHitFunc: 'getHitFunc',
  setDrawHitFunc: 'setHitFunc'
});
$XIcS$export$Collection.mapMethods($JWag$var$Shape);
// ASSET: node_modules/konva/lib/Layer.js
var $Xvvm$exports = {};

var $Xvvm$var$__extends = $Xvvm$exports && $Xvvm$exports.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty($Xvvm$exports, "__esModule", {
  value: true
});
var $Xvvm$var$HASH = '#',
    $Xvvm$var$BEFORE_DRAW = 'beforeDraw',
    $Xvvm$var$DRAW = 'draw',
    $Xvvm$var$INTERSECTION_OFFSETS = [{
  x: 0,
  y: 0
}, {
  x: -1,
  y: -1
}, {
  x: 1,
  y: -1
}, {
  x: 1,
  y: 1
}, {
  x: -1,
  y: 1
}],
    $Xvvm$var$INTERSECTION_OFFSETS_LEN = $Xvvm$var$INTERSECTION_OFFSETS.length;

var $Xvvm$var$Layer = function (_super) {
  $Xvvm$var$__extends(Layer, _super);

  function Layer() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.hitCanvas = new $KydS$export$HitCanvas({
      pixelRatio: 1
    });
    return _this;
  }

  Layer.prototype._setCanvasSize = function (width, height) {
    this.canvas.setSize(width, height);
    this.hitCanvas.setSize(width, height);

    this._checkSmooth();
  };

  Layer.prototype._validateAdd = function (child) {
    var type = child.getType();

    if (type !== 'Group' && type !== 'Shape') {
      $XIcS$export$Util.throw('You may only add groups and shapes to a layer.');
    }
  };

  Layer.prototype.getIntersection = function (pos, selector) {
    var obj, i, intersectionOffset, shape;

    if (!this.hitGraphEnabled() || !this.isVisible()) {
      return null;
    }

    var spiralSearchDistance = 1;
    var continueSearch = false;

    while (true) {
      for (i = 0; i < $Xvvm$var$INTERSECTION_OFFSETS_LEN; i++) {
        intersectionOffset = $Xvvm$var$INTERSECTION_OFFSETS[i];
        obj = this._getIntersection({
          x: pos.x + intersectionOffset.x * spiralSearchDistance,
          y: pos.y + intersectionOffset.y * spiralSearchDistance
        });
        shape = obj.shape;

        if (shape && selector) {
          return shape.findAncestor(selector, true);
        } else if (shape) {
          return shape;
        }

        continueSearch = !!obj.antialiased;

        if (!obj.antialiased) {
          break;
        }
      }

      if (continueSearch) {
        spiralSearchDistance += 1;
      } else {
        return null;
      }
    }
  };

  Layer.prototype._getIntersection = function (pos) {
    var ratio = this.hitCanvas.pixelRatio;
    var p = this.hitCanvas.context.getImageData(Math.round(pos.x * ratio), Math.round(pos.y * ratio), 1, 1).data,
        p3 = p[3],
        colorKey,
        shape;

    if (p3 === 255) {
      colorKey = $XIcS$export$Util._rgbToHex(p[0], p[1], p[2]);
      shape = $JWag$export$shapes[$Xvvm$var$HASH + colorKey];

      if (shape) {
        return {
          shape: shape
        };
      }

      return {
        antialiased: true
      };
    } else if (p3 > 0) {
      return {
        antialiased: true
      };
    }

    return {};
  };

  Layer.prototype.drawScene = function (can, top) {
    var layer = this.getLayer(),
        canvas = can || layer && layer.getCanvas();

    this._fire($Xvvm$var$BEFORE_DRAW, {
      node: this
    });

    if (this.clearBeforeDraw()) {
      canvas.getContext().clear();
    }

    $Eysw$export$Container.prototype.drawScene.call(this, canvas, top);

    this._fire($Xvvm$var$DRAW, {
      node: this
    });

    return this;
  };

  Layer.prototype.drawHit = function (can, top) {
    var layer = this.getLayer(),
        canvas = can || layer && layer.hitCanvas;

    if (layer && layer.clearBeforeDraw()) {
      layer.getHitCanvas().getContext().clear();
    }

    $Eysw$export$Container.prototype.drawHit.call(this, canvas, top);
    return this;
  };

  Layer.prototype.clear = function (bounds) {
    $VIlJ$export$BaseLayer.prototype.clear.call(this, bounds);
    this.getHitCanvas().getContext().clear(bounds);
    return this;
  };

  Layer.prototype.enableHitGraph = function () {
    this.hitGraphEnabled(true);
    return this;
  };

  Layer.prototype.disableHitGraph = function () {
    this.hitGraphEnabled(false);
    return this;
  };

  Layer.prototype.toggleHitCanvas = function () {
    if (!this.parent) {
      return;
    }

    var parent = this.parent;
    var added = !!this.hitCanvas._canvas.parentNode;

    if (added) {
      parent.content.removeChild(this.hitCanvas._canvas);
    } else {
      parent.content.appendChild(this.hitCanvas._canvas);
    }
  };

  Layer.prototype.setSize = function (_a) {
    var width = _a.width,
        height = _a.height;

    _super.prototype.setSize.call(this, {
      width: width,
      height: height
    });

    this.hitCanvas.setSize(width, height);
    return this;
  };

  return Layer;
}($VIlJ$export$BaseLayer);

var $Xvvm$export$Layer = $Xvvm$var$Layer;
$Xvvm$exports.Layer = $Xvvm$export$Layer;
$Xvvm$var$Layer.prototype.nodeType = 'Layer';
$bIDB$export$_registerNode($Xvvm$var$Layer);
$cgGB$export$Factory.addGetterSetter($Xvvm$var$Layer, 'hitGraphEnabled', true, $tgRR$export$getBooleanValidator());
$XIcS$export$Collection.mapMethods($Xvvm$var$Layer);
// ASSET: node_modules/konva/lib/shapes/Image.js
var $Vhl9$exports = {};

var $Vhl9$var$__extends = $Vhl9$exports && $Vhl9$exports.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty($Vhl9$exports, "__esModule", {
  value: true
});

var $Vhl9$var$Image = function (_super) {
  $Vhl9$var$__extends(Image, _super);

  function Image() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Image.prototype._useBufferCanvas = function () {
    return !!((this.hasShadow() || this.getAbsoluteOpacity() !== 1) && this.hasStroke() && this.getStage());
  };

  Image.prototype._sceneFunc = function (context) {
    var width = this.width(),
        height = this.height(),
        image = this.image(),
        cropWidth,
        cropHeight,
        params;

    if (image) {
      cropWidth = this.cropWidth();
      cropHeight = this.cropHeight();

      if (cropWidth && cropHeight) {
        params = [image, this.cropX(), this.cropY(), cropWidth, cropHeight, 0, 0, width, height];
      } else {
        params = [image, 0, 0, width, height];
      }
    }

    if (this.hasFill() || this.hasStroke()) {
      context.beginPath();
      context.rect(0, 0, width, height);
      context.closePath();
      context.fillStrokeShape(this);
    }

    if (image) {
      context.drawImage.apply(context, params);
    }
  };

  Image.prototype._hitFunc = function (context) {
    var width = this.width(),
        height = this.height();
    context.beginPath();
    context.rect(0, 0, width, height);
    context.closePath();
    context.fillStrokeShape(this);
  };

  Image.prototype.getWidth = function () {
    var image = this.image();
    return this.attrs.width || (image ? image.width : 0);
  };

  Image.prototype.getHeight = function () {
    var image = this.image();
    return this.attrs.height || (image ? image.height : 0);
  };

  Image.fromURL = function (url, callback) {
    var img = $XIcS$export$Util.createImageElement();

    img.onload = function () {
      var image = new Image({
        image: img
      });
      callback(image);
    };

    img.crossOrigin = 'Anonymous';
    img.src = url;
  };

  return Image;
}($JWag$export$Shape);

var $Vhl9$export$Image = $Vhl9$var$Image;
$Vhl9$exports.Image = $Vhl9$export$Image;
$Vhl9$var$Image.prototype.className = 'Image';
$bIDB$export$_registerNode($Vhl9$var$Image);
$cgGB$export$Factory.addGetterSetter($Vhl9$var$Image, 'image');
$cgGB$export$Factory.addComponentsGetterSetter($Vhl9$var$Image, 'crop', ['x', 'y', 'width', 'height']);
$cgGB$export$Factory.addGetterSetter($Vhl9$var$Image, 'cropX', 0, $tgRR$export$getNumberValidator());
$cgGB$export$Factory.addGetterSetter($Vhl9$var$Image, 'cropY', 0, $tgRR$export$getNumberValidator());
$cgGB$export$Factory.addGetterSetter($Vhl9$var$Image, 'cropWidth', 0, $tgRR$export$getNumberValidator());
$cgGB$export$Factory.addGetterSetter($Vhl9$var$Image, 'cropHeight', 0, $tgRR$export$getNumberValidator());
$XIcS$export$Collection.mapMethods($Vhl9$var$Image);
// ASSET: node_modules/konva/lib/Animation.js
var $axDI$exports = {};
Object.defineProperty($axDI$exports, "__esModule", {
  value: true
});

var $axDI$var$now = function () {
  if ($bIDB$export$glob.performance && $bIDB$export$glob.performance.now) {
    return function () {
      return $bIDB$export$glob.performance.now();
    };
  }

  return function () {
    return new Date().getTime();
  };
}();

var $axDI$var$Animation = function () {
  function Animation(func, layers) {
    this.id = Animation.animIdCounter++;
    this.frame = {
      time: 0,
      timeDiff: 0,
      lastTime: $axDI$var$now(),
      frameRate: 0
    };
    this.func = func;
    this.setLayers(layers);
  }

  Animation.prototype.setLayers = function (layers) {
    var lays = [];

    if (!layers) {
      lays = [];
    } else if (layers.length > 0) {
      lays = layers;
    } else {
      lays = [layers];
    }

    this.layers = lays;
    return this;
  };

  Animation.prototype.getLayers = function () {
    return this.layers;
  };

  Animation.prototype.addLayer = function (layer) {
    var layers = this.layers,
        len = layers.length,
        n;

    for (n = 0; n < len; n++) {
      if (layers[n]._id === layer._id) {
        return false;
      }
    }

    this.layers.push(layer);
    return true;
  };

  Animation.prototype.isRunning = function () {
    var a = Animation,
        animations = a.animations,
        len = animations.length,
        n;

    for (n = 0; n < len; n++) {
      if (animations[n].id === this.id) {
        return true;
      }
    }

    return false;
  };

  Animation.prototype.start = function () {
    this.stop();
    this.frame.timeDiff = 0;
    this.frame.lastTime = $axDI$var$now();

    Animation._addAnimation(this);

    return this;
  };

  Animation.prototype.stop = function () {
    Animation._removeAnimation(this);

    return this;
  };

  Animation.prototype._updateFrameObject = function (time) {
    this.frame.timeDiff = time - this.frame.lastTime;
    this.frame.lastTime = time;
    this.frame.time += this.frame.timeDiff;
    this.frame.frameRate = 1000 / this.frame.timeDiff;
  };

  Animation._addAnimation = function (anim) {
    this.animations.push(anim);

    this._handleAnimation();
  };

  Animation._removeAnimation = function (anim) {
    var id = anim.id,
        animations = this.animations,
        len = animations.length,
        n;

    for (n = 0; n < len; n++) {
      if (animations[n].id === id) {
        this.animations.splice(n, 1);
        break;
      }
    }
  };

  Animation._runFrames = function () {
    var layerHash = {},
        animations = this.animations,
        anim,
        layers,
        func,
        n,
        i,
        layersLen,
        layer,
        key,
        needRedraw;

    for (n = 0; n < animations.length; n++) {
      anim = animations[n];
      layers = anim.layers;
      func = anim.func;

      anim._updateFrameObject($axDI$var$now());

      layersLen = layers.length;

      if (func) {
        needRedraw = func.call(anim, anim.frame) !== false;
      } else {
        needRedraw = true;
      }

      if (!needRedraw) {
        continue;
      }

      for (i = 0; i < layersLen; i++) {
        layer = layers[i];

        if (layer._id !== undefined) {
          layerHash[layer._id] = layer;
        }
      }
    }

    for (key in layerHash) {
      if (!layerHash.hasOwnProperty(key)) {
        continue;
      }

      layerHash[key].draw();
    }
  };

  Animation._animationLoop = function () {
    var Anim = Animation;

    if (Anim.animations.length) {
      Anim._runFrames();

      requestAnimationFrame(Anim._animationLoop);
    } else {
      Anim.animRunning = false;
    }
  };

  Animation._handleAnimation = function () {
    if (!this.animRunning) {
      this.animRunning = true;
      requestAnimationFrame(this._animationLoop);
    }
  };

  Animation.animations = [];
  Animation.animIdCounter = 0;
  Animation.animRunning = false;
  return Animation;
}();

var $axDI$export$Animation = $axDI$var$Animation;
$axDI$exports.Animation = $axDI$export$Animation;
// ASSET: node_modules/konva/lib/Tween.js
var $Rq7v$exports = {};
Object.defineProperty($Rq7v$exports, "__esModule", {
  value: true
});
var $Rq7v$var$blacklist = {
  node: 1,
  duration: 1,
  easing: 1,
  onFinish: 1,
  yoyo: 1
},
    $Rq7v$var$PAUSED = 1,
    $Rq7v$var$PLAYING = 2,
    $Rq7v$var$REVERSING = 3,
    $Rq7v$var$idCounter = 0,
    $Rq7v$var$colorAttrs = ['fill', 'stroke', 'shadowColor'];

var $Rq7v$var$TweenEngine = function () {
  function TweenEngine(prop, propFunc, func, begin, finish, duration, yoyo) {
    this.prop = prop;
    this.propFunc = propFunc;
    this.begin = begin;
    this._pos = begin;
    this.duration = duration;
    this._change = 0;
    this.prevPos = 0;
    this.yoyo = yoyo;
    this._time = 0;
    this._position = 0;
    this._startTime = 0;
    this._finish = 0;
    this.func = func;
    this._change = finish - this.begin;
    this.pause();
  }

  TweenEngine.prototype.fire = function (str) {
    var handler = this[str];

    if (handler) {
      handler();
    }
  };

  TweenEngine.prototype.setTime = function (t) {
    if (t > this.duration) {
      if (this.yoyo) {
        this._time = this.duration;
        this.reverse();
      } else {
        this.finish();
      }
    } else if (t < 0) {
      if (this.yoyo) {
        this._time = 0;
        this.play();
      } else {
        this.reset();
      }
    } else {
      this._time = t;
      this.update();
    }
  };

  TweenEngine.prototype.getTime = function () {
    return this._time;
  };

  TweenEngine.prototype.setPosition = function (p) {
    this.prevPos = this._pos;
    this.propFunc(p);
    this._pos = p;
  };

  TweenEngine.prototype.getPosition = function (t) {
    if (t === undefined) {
      t = this._time;
    }

    return this.func(t, this.begin, this._change, this.duration);
  };

  TweenEngine.prototype.play = function () {
    this.state = $Rq7v$var$PLAYING;
    this._startTime = this.getTimer() - this._time;
    this.onEnterFrame();
    this.fire('onPlay');
  };

  TweenEngine.prototype.reverse = function () {
    this.state = $Rq7v$var$REVERSING;
    this._time = this.duration - this._time;
    this._startTime = this.getTimer() - this._time;
    this.onEnterFrame();
    this.fire('onReverse');
  };

  TweenEngine.prototype.seek = function (t) {
    this.pause();
    this._time = t;
    this.update();
    this.fire('onSeek');
  };

  TweenEngine.prototype.reset = function () {
    this.pause();
    this._time = 0;
    this.update();
    this.fire('onReset');
  };

  TweenEngine.prototype.finish = function () {
    this.pause();
    this._time = this.duration;
    this.update();
    this.fire('onFinish');
  };

  TweenEngine.prototype.update = function () {
    this.setPosition(this.getPosition(this._time));
  };

  TweenEngine.prototype.onEnterFrame = function () {
    var t = this.getTimer() - this._startTime;

    if (this.state === $Rq7v$var$PLAYING) {
      this.setTime(t);
    } else if (this.state === $Rq7v$var$REVERSING) {
      this.setTime(this.duration - t);
    }
  };

  TweenEngine.prototype.pause = function () {
    this.state = $Rq7v$var$PAUSED;
    this.fire('onPause');
  };

  TweenEngine.prototype.getTimer = function () {
    return new Date().getTime();
  };

  return TweenEngine;
}();

var $Rq7v$var$Tween = function () {
  function Tween(config) {
    var that = this,
        node = config.node,
        nodeId = node._id,
        duration,
        easing = config.easing || $Rq7v$export$Easings.Linear,
        yoyo = !!config.yoyo,
        key;

    if (typeof config.duration === 'undefined') {
      duration = 0.3;
    } else if (config.duration === 0) {
      duration = 0.001;
    } else {
      duration = config.duration;
    }

    this.node = node;
    this._id = $Rq7v$var$idCounter++;
    var layers = node.getLayer() || (node instanceof $bIDB$export$Konva['Stage'] ? node.getLayers() : null);

    if (!layers) {
      $XIcS$export$Util.error('Tween constructor have `node` that is not in a layer. Please add node into layer first.');
    }

    this.anim = new $axDI$export$Animation(function () {
      that.tween.onEnterFrame();
    }, layers);
    this.tween = new $Rq7v$var$TweenEngine(key, function (i) {
      that._tweenFunc(i);
    }, easing, 0, 1, duration * 1000, yoyo);

    this._addListeners();

    if (!Tween.attrs[nodeId]) {
      Tween.attrs[nodeId] = {};
    }

    if (!Tween.attrs[nodeId][this._id]) {
      Tween.attrs[nodeId][this._id] = {};
    }

    if (!Tween.tweens[nodeId]) {
      Tween.tweens[nodeId] = {};
    }

    for (key in config) {
      if ($Rq7v$var$blacklist[key] === undefined) {
        this._addAttr(key, config[key]);
      }
    }

    this.reset();
    this.onFinish = config.onFinish;
    this.onReset = config.onReset;
  }

  Tween.prototype._addAttr = function (key, end) {
    var node = this.node,
        nodeId = node._id,
        start,
        diff,
        tweenId,
        n,
        len,
        trueEnd,
        trueStart,
        endRGBA;
    tweenId = Tween.tweens[nodeId][key];

    if (tweenId) {
      delete Tween.attrs[nodeId][tweenId][key];
    }

    start = node.getAttr(key);

    if ($XIcS$export$Util._isArray(end)) {
      diff = [];
      len = Math.max(end.length, start.length);

      if (key === 'points' && end.length !== start.length) {
        if (end.length > start.length) {
          trueStart = start;
          start = $XIcS$export$Util._prepareArrayForTween(start, end, node.closed());
        } else {
          trueEnd = end;
          end = $XIcS$export$Util._prepareArrayForTween(end, start, node.closed());
        }
      }

      if (key.indexOf('fill') === 0) {
        for (n = 0; n < len; n++) {
          if (n % 2 === 0) {
            diff.push(end[n] - start[n]);
          } else {
            var startRGBA = $XIcS$export$Util.colorToRGBA(start[n]);
            endRGBA = $XIcS$export$Util.colorToRGBA(end[n]);
            start[n] = startRGBA;
            diff.push({
              r: endRGBA.r - startRGBA.r,
              g: endRGBA.g - startRGBA.g,
              b: endRGBA.b - startRGBA.b,
              a: endRGBA.a - startRGBA.a
            });
          }
        }
      } else {
        for (n = 0; n < len; n++) {
          diff.push(end[n] - start[n]);
        }
      }
    } else if ($Rq7v$var$colorAttrs.indexOf(key) !== -1) {
      start = $XIcS$export$Util.colorToRGBA(start);
      endRGBA = $XIcS$export$Util.colorToRGBA(end);
      diff = {
        r: endRGBA.r - start.r,
        g: endRGBA.g - start.g,
        b: endRGBA.b - start.b,
        a: endRGBA.a - start.a
      };
    } else {
      diff = end - start;
    }

    Tween.attrs[nodeId][this._id][key] = {
      start: start,
      diff: diff,
      end: end,
      trueEnd: trueEnd,
      trueStart: trueStart
    };
    Tween.tweens[nodeId][key] = this._id;
  };

  Tween.prototype._tweenFunc = function (i) {
    var node = this.node,
        attrs = Tween.attrs[node._id][this._id],
        key,
        attr,
        start,
        diff,
        newVal,
        n,
        len,
        end;

    for (key in attrs) {
      attr = attrs[key];
      start = attr.start;
      diff = attr.diff;
      end = attr.end;

      if ($XIcS$export$Util._isArray(start)) {
        newVal = [];
        len = Math.max(start.length, end.length);

        if (key.indexOf('fill') === 0) {
          for (n = 0; n < len; n++) {
            if (n % 2 === 0) {
              newVal.push((start[n] || 0) + diff[n] * i);
            } else {
              newVal.push('rgba(' + Math.round(start[n].r + diff[n].r * i) + ',' + Math.round(start[n].g + diff[n].g * i) + ',' + Math.round(start[n].b + diff[n].b * i) + ',' + (start[n].a + diff[n].a * i) + ')');
            }
          }
        } else {
          for (n = 0; n < len; n++) {
            newVal.push((start[n] || 0) + diff[n] * i);
          }
        }
      } else if ($Rq7v$var$colorAttrs.indexOf(key) !== -1) {
        newVal = 'rgba(' + Math.round(start.r + diff.r * i) + ',' + Math.round(start.g + diff.g * i) + ',' + Math.round(start.b + diff.b * i) + ',' + (start.a + diff.a * i) + ')';
      } else {
        newVal = start + diff * i;
      }

      node.setAttr(key, newVal);
    }
  };

  Tween.prototype._addListeners = function () {
    var _this = this;

    this.tween.onPlay = function () {
      _this.anim.start();
    };

    this.tween.onReverse = function () {
      _this.anim.start();
    };

    this.tween.onPause = function () {
      _this.anim.stop();
    };

    this.tween.onFinish = function () {
      var node = _this.node;
      var attrs = Tween.attrs[node._id][_this._id];

      if (attrs.points && attrs.points.trueEnd) {
        node.setAttr('points', attrs.points.trueEnd);
      }

      if (_this.onFinish) {
        _this.onFinish.call(_this);
      }
    };

    this.tween.onReset = function () {
      var node = _this.node;
      var attrs = Tween.attrs[node._id][_this._id];

      if (attrs.points && attrs.points.trueStart) {
        node.points(attrs.points.trueStart);
      }

      if (_this.onReset) {
        _this.onReset();
      }
    };
  };

  Tween.prototype.play = function () {
    this.tween.play();
    return this;
  };

  Tween.prototype.reverse = function () {
    this.tween.reverse();
    return this;
  };

  Tween.prototype.reset = function () {
    this.tween.reset();
    return this;
  };

  Tween.prototype.seek = function (t) {
    this.tween.seek(t * 1000);
    return this;
  };

  Tween.prototype.pause = function () {
    this.tween.pause();
    return this;
  };

  Tween.prototype.finish = function () {
    this.tween.finish();
    return this;
  };

  Tween.prototype.destroy = function () {
    var nodeId = this.node._id,
        thisId = this._id,
        attrs = Tween.tweens[nodeId],
        key;
    this.pause();

    for (key in attrs) {
      delete Tween.tweens[nodeId][key];
    }

    delete Tween.attrs[nodeId][thisId];
  };

  Tween.attrs = {};
  Tween.tweens = {};
  return Tween;
}();

var $Rq7v$export$Tween = $Rq7v$var$Tween;
$Rq7v$exports.Tween = $Rq7v$export$Tween;

$pBWF$export$Node.prototype.to = function (params) {
  var onFinish = params.onFinish;
  params.node = this;

  params.onFinish = function () {
    this.destroy();

    if (onFinish) {
      onFinish();
    }
  };

  var tween = new $Rq7v$var$Tween(params);
  tween.play();
};

var $Rq7v$export$Easings = {
  BackEaseIn: function (t, b, c, d) {
    var s = 1.70158;
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
  },
  BackEaseOut: function (t, b, c, d) {
    var s = 1.70158;
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
  },
  BackEaseInOut: function (t, b, c, d) {
    var s = 1.70158;

    if ((t /= d / 2) < 1) {
      return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
    }

    return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
  },
  ElasticEaseIn: function (t, b, c, d, a, p) {
    var s = 0;

    if (t === 0) {
      return b;
    }

    if ((t /= d) === 1) {
      return b + c;
    }

    if (!p) {
      p = d * 0.3;
    }

    if (!a || a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(c / a);
    }

    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
  },
  ElasticEaseOut: function (t, b, c, d, a, p) {
    var s = 0;

    if (t === 0) {
      return b;
    }

    if ((t /= d) === 1) {
      return b + c;
    }

    if (!p) {
      p = d * 0.3;
    }

    if (!a || a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(c / a);
    }

    return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
  },
  ElasticEaseInOut: function (t, b, c, d, a, p) {
    var s = 0;

    if (t === 0) {
      return b;
    }

    if ((t /= d / 2) === 2) {
      return b + c;
    }

    if (!p) {
      p = d * (0.3 * 1.5);
    }

    if (!a || a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(c / a);
    }

    if (t < 1) {
      return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    }

    return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
  },
  BounceEaseOut: function (t, b, c, d) {
    if ((t /= d) < 1 / 2.75) {
      return c * (7.5625 * t * t) + b;
    } else if (t < 2 / 2.75) {
      return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
    } else if (t < 2.5 / 2.75) {
      return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
    } else {
      return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
    }
  },
  BounceEaseIn: function (t, b, c, d) {
    return c - $Rq7v$export$Easings.BounceEaseOut(d - t, 0, c, d) + b;
  },
  BounceEaseInOut: function (t, b, c, d) {
    if (t < d / 2) {
      return $Rq7v$export$Easings.BounceEaseIn(t * 2, 0, c, d) * 0.5 + b;
    } else {
      return $Rq7v$export$Easings.BounceEaseOut(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
    }
  },
  EaseIn: function (t, b, c, d) {
    return c * (t /= d) * t + b;
  },
  EaseOut: function (t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b;
  },
  EaseInOut: function (t, b, c, d) {
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t + b;
    }

    return -c / 2 * (--t * (t - 2) - 1) + b;
  },
  StrongEaseIn: function (t, b, c, d) {
    return c * (t /= d) * t * t * t * t + b;
  },
  StrongEaseOut: function (t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
  },
  StrongEaseInOut: function (t, b, c, d) {
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t * t * t * t + b;
    }

    return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
  },
  Linear: function (t, b, c, d) {
    return c * t / d + b;
  }
};
$Rq7v$exports.Easings = $Rq7v$export$Easings;

function $fYEm$var$_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function $fYEm$var$_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function $fYEm$var$_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) $fYEm$var$_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) $fYEm$var$_defineProperties(Constructor, staticProps);
  return Constructor;
}

function $fYEm$var$_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
} // Thanks to David Walsh (https://davidwalsh.name/javascript-debounce-function)


function $fYEm$var$debounce(func, wait, immediate) {
  var timeout;
  return function executedFunction() {
    var context = this;
    var args = arguments;

    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

;

var $fYEm$export$default =
/*#__PURE__*/
function () {
  function BannerPlayer(el, images) {
    $fYEm$var$_classCallCheck(this, BannerPlayer);
    $fYEm$var$_defineProperty(this, "images", []);
    $fYEm$var$_defineProperty(this, "firstPlay", true);
    $fYEm$var$_defineProperty(this, "firstIndex", 0);
    $fYEm$var$_defineProperty(this, "frames", []);
    $fYEm$var$_defineProperty(this, "stage", void 0);
    $fYEm$var$_defineProperty(this, "layer", void 0);
    this.images = images;
    this.firstIndex = images.findIndex(function (img) {
      return img.first;
    });
    this.stage = new $inLU$export$Stage({
      container: el instanceof Node ? el : document.querySelector(el),
      width: this.dimension.width,
      height: this.dimension.height
    });
    this.layer = new $Xvvm$export$Layer();
    this.stage.add(this.layer);
    var imgLoaded = 0;
    var parent = this;
    this.images.forEach(function (img, i) {
      parent.frames.push(new $Vhl9$export$Image({
        width: parent.dimension.width,
        height: parent.dimension.height,
        opacity: Number(parent.firstIndex > 0 ? i <= parent.firstIndex : i === 0)
      }));
      parent.layer.add(parent.frames[i]);
      var imgObj = new window.Image();

      imgObj.onload = function () {
        parent.frames[i].image(imgObj);
        parent.layer.draw();
        imgLoaded++;

        if (imgLoaded === parent.totalImage) {
          parent.run();
        }
      };

      imgObj.src = img.src;
    });
    window.onresize = $fYEm$var$debounce(this.windowResized.bind(this), 250);
  }

  $fYEm$var$_createClass(BannerPlayer, [{
    key: "restart",
    value: function restart() {
      var parent = this;
      this.frames.forEach(function (frame, i) {
        if (i === 0) return;

        if (!parent.images[0].fade) {
          frame.opacity(0);
          return;
        }

        var tween = new $Rq7v$export$Tween({
          node: frame,
          duration: parent.images[0].tween || 0.2,
          opacity: 0
        });
        tween.play();
      });

      if (!this.images[0].fade) {
        this.layer.draw();
      }

      this.run();
    }
  }, {
    key: "show",
    value: function show(i) {
      if (!this.images[i].fade) {
        this.frames[i].opacity(1);
        this.layer.draw();
        return;
      }

      var tween = new $Rq7v$export$Tween({
        node: this.frames[i],
        duration: this.images[i].tween || 0.2,
        opacity: 1
      });
      tween.play();
    }
  }, {
    key: "windowResized",
    value: function windowResized() {
      this.stage.size(this.dimension);
      var parent = this;
      this.frames.forEach(function (frame) {
        frame.size(parent.dimension);
      });
      this.layer.draw();
    }
  }, {
    key: "run",
    value: function run() {
      var nextDuration = 0;
      var parent = this;
      this.images.forEach(function (img, i) {
        if (parent.firstPlay && parent.firstIndex > 0 && i < parent.firstIndex) {
          return;
        }

        parent.firstPlay = false;
        nextDuration += img.duration * 1000;
        setTimeout(function () {
          if (i === parent.totalImage - 1) {
            parent.restart();
          } else {
            parent.show(i + 1);
          }
        }, nextDuration);
      });
    }
  }, {
    key: "totalImage",
    get: function get() {
      return this.images.length;
    }
  }, {
    key: "dimension",
    get: function get() {
      var width = window.innerWidth;
      var height = window.innerHeight;

      if (width > height) {
        width = height;
      }

      if (width < height) {
        height = width;
      }

      return {
        width: width,
        height: height
      };
    }
  }]);
  return BannerPlayer;
}();

$fYEm$exports.default = $fYEm$export$default;
$fYEm$exports = $fYEm$export$default;

if (typeof exports === "object" && typeof module !== "undefined") {
  // CommonJS
  module.exports = $fYEm$exports;
} else if (typeof define === "function" && define.amd) {
  // RequireJS
  define(function () {
    return $fYEm$exports;
  });
} else {
  // <script>
  this["BannerPlayer"] = $fYEm$exports;
}
})();