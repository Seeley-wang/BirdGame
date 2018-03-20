// 下半部分的铅笔
import {Pencil} from "./Pencil.js";
import {Sprite} from "../base/Sprite.js";
import {DataStore} from "../base/DataStore.js";

export class DownPencil extends Pencil {
    constructor(top) {
        const image = Sprite.getImage('pie_down');
        super(image, top)
    }

    draw() {
        this.gap = DataStore.getInstance().canvas.height / 5;
        this.y = this.top + this.gap;
        super.draw();
    }
}