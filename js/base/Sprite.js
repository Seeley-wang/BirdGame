// 精灵的基类，负责初始化精灵加载的资源和大小及位置
import {DataStore} from "./DataStore.js";

export class Sprite {
    constructor(img = null, srcx = 0, srcy = 0, srcw = 0, srch = 0, x = 0, y = 0, width = 0, height = 0) {
        this.dataStore = DataStore.getInstance();
        this.ctx = this.dataStore.ctx;
        this.img = img;
        this.srcx = srcx;
        this.srcy = srcy;
        this.srcw = srcw;
        this.srch = srch;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    static getImage(key) {
        return DataStore.getInstance().res.get(key)
    }

    /**
     * img 传入image对象
     * srcx 要裁剪的起始x坐标
     * srcy 要裁剪的起始y坐标
     * srcw 要裁剪的宽度
     * srcy 要裁剪的高度
     * x 放置的x坐标
     * y 放置的y坐标
     * width 要使用的宽度
     * height 要使用的高度
     */

    draw(img = this.img,
         srcx = this.srcx,
         srcy = this.srcy,
         srcw = this.srcw,
         srch = this.srch,
         x = this.x,
         y = this.y,
         width = this.width,
         height = this.height,) {
        this.ctx.drawImage(
            img,
            srcx,
            srcy,
            srcw,
            srch,
            x,
            y,
            width,
            height,
        )
    }

}