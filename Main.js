// 初始化整个游戏精灵，作为游戏的开始入口
import { ResourceLoader } from "./js/base/ResourceLoader.js";
import { BackGround } from "./js/runtime/BackGround.js";
import { DataStore } from "./js/base/DataStore.js";
import { Director } from "./js/Director.js";
import { Land } from "./js/runtime/Land.js";
import { Birds } from "./js/player/Birds.js";
import { StartButton } from "./js/player/StartButton.js";
import { Score } from "./js/player/Score.js";

export class Main {
  constructor() {
    this.canvas = wx.createCanvas();
    this.ctx = this.canvas.getContext('2d');
    const loader = ResourceLoader.create();
    this.dataStore = DataStore.getInstance();
    this.director = Director.getInstance();
    loader.onloaded(map => this.onResourceFirstLoader(map));
  }

  createBackGroundMusic(){
    const bgm = wx.createInnerAudioContext();
    bgm.autoplay = true;
    bgm.loop = true;
    bgm.src = 'audios/bgm.mp3';
  }

  onResourceFirstLoader(map) {
    this.dataStore.canvas = this.canvas
    this.dataStore.ctx = this.ctx;
    this.dataStore.res = map;
    // this.createBackGroundMusic()
    this.init();
  }

  init() {
    this.director.isGameOver = false;
    this.dataStore
      .put('background', BackGround)
      .put('land', Land)
      .put('pencils', [])
      .put('birds', Birds)
      .put('startButton', StartButton)
      .put('score', Score);
    this.registerEvent();
    this.director.createPencil();
    this.director.run()
  }

  registerEvent() {
    wx.onTouchStart(() => {
      if (this.director.isGameOver) {
        console.log('重新开始');
        this.init()
      } else {
        this.director.birdsEvent()
      }
    })
  }
}