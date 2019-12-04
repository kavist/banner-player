'use strict';

import { Stage } from 'konva/lib/Stage';
import { Layer } from 'konva/lib/Layer';
import { Image } from 'konva/lib/shapes/Image';
import { Tween } from 'konva/lib/Tween';

// Thanks to David Walsh (https://davidwalsh.name/javascript-debounce-function)
function debounce(func, wait, immediate) {
  var timeout;

  return function executedFunction() {
    var context = this;
    var args = arguments;

    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
};

class BannerPlayer {
  images = [];
  firstPlay = true;
  firstIndex = 0;
  frames = [];
  stage;
  layer;

  constructor(el, images) {
    this.images = images;
    this.firstIndex = images.findIndex((img) => img.first);

    this.stage = new Stage({
      container: el instanceof Node ? el : document.querySelector(el),
      width: this.dimension.width,
      height: this.dimension.height,
    });

    this.layer = new Layer();
    this.stage.add(this.layer);

    let imgLoaded = 0;
    const parent = this;
    this.images.forEach((img, i) => {
      parent.frames.push(new Image({
        width: parent.dimension.width,
        height: parent.dimension.height,
        opacity: Number(parent.firstIndex > 0 ? i <= parent.firstIndex : i === 0),
      }));
      parent.layer.add(parent.frames[i]);

      const imgObj = new window.Image;
      imgObj.onload = () => {
        parent.frames[i].image(imgObj);
        parent.layer.draw();
        imgLoaded++;
        if (imgLoaded === parent.totalImage) {
          parent.run();
        }
      }
      imgObj.src = img.src;
    });

    window.onresize = debounce(this.windowResized.bind(this), 250);
  }

  get totalImage() {
    return this.images.length;
  }

  get dimension() {
    let width = window.innerWidth;
    let height = window.innerHeight;

    if (width > height) {
      width = height;
    }
    if (width < height) {
      height = width;
    }

    return { width, height };
  }

  restart() {
    const parent = this;
    this.frames.forEach((frame, i) => {
      if (i === 0) return;
      if (!parent.images[0].fade) {
        frame.opacity(0);
        return;
      }
      const tween = new Tween({
        node: frame,
        duration: parent.images[0].tween || 0.2,
        opacity: 0,
      });
      tween.play();
    });
    if (!this.images[0].fade) {
      this.layer.draw();
    }
    this.run();
  }

  show(i) {
    if (!this.images[i].fade) {
      this.frames[i].opacity(1);
      this.layer.draw();
      return;
    }
    const tween = new Tween({
      node: this.frames[i],
      duration: this.images[i].tween || 0.2,
      opacity: 1,
    })
    tween.play();
  }

  windowResized() {
    this.stage.size(this.dimension);
    const parent = this;
    this.frames.forEach((frame) => {
      frame.size(parent.dimension);
    });
    this.layer.draw();
  }

  run() {
    let nextDuration = 0;
    const parent = this;
    this.images.forEach((img, i) => {
      if (parent.firstPlay && parent.firstIndex > 0 && i < parent.firstIndex) {
        return;
      }

      parent.firstPlay = false;
      nextDuration += img.duration * 1000;
      setTimeout(() => {
        if (i === parent.totalImage - 1) {
          parent.restart();
        } else {
          parent.show(i + 1);
        }
      }, nextDuration);
    });
  }
}

export default BannerPlayer;
module.exports = BannerPlayer;
