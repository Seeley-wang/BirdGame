// 不断移动的陆地
import {Sprite} from "../base/Sprite.js";
import {Director} from "../Director.js";
import {DataStore} from "../base/DataStore.js";

export class Land extends Sprite{
    constructor(){
        const image = Sprite.getImage('land');
        super(
            image,
            0,0,
            image.width,image.height,
            0,DataStore.getInstance().canvas.height-image.height,
            image.width,image.height
        );
        this.landx = 0;
        this.landSpeed = Director.getInstance().landSpeed;
    }

    draw(){
        this.landx = this.landx + this.landSpeed;
        if (this.landx > (this.img.width-DataStore.getInstance().canvas.width)){
            this.landx=0;
        }
        super.draw(
            this.img,
            this.srcx,
            this.srcy,
            this.srcw,
            this.srch,
            -this.landx,
            this.y,
            this.width,
            this.height
        )
    }
}