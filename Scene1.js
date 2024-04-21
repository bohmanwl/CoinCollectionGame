class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }
  preload() {
    this.load.image("background", "assets/images/background.png");
    this.scene.start("playGame");
  }
}