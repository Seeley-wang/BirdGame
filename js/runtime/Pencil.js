import { Sprite } from "../base/Sprite.js";
import {DataStore} from "../base/DataStore.js";

export class Pencil extends Sprite {
  constructor(image, top) {
    super(
      image, 0, 0,
      image.width, image.height,
      DataStore.getInstance().canvas.width, 0,
      image.width, image.height
    );
    this.top = top;
    this.landSpeed = 2;
  }

  draw() {
    this.x = this.x - this.landSpeed;
    super.draw(
      this.img,
      this.srcx,
      this.srcy,
      this.srcw,
      this.srch,
      this.x,
      this.y,
      this.width,
      this.height
    )
  }
}