class PreloadScene extends Phaser.Scene {
    constructor() {
      super("bootGame");
    }

    preload(){
        this.load.image("background", "assets/images/background.png");
    }
}