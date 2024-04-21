class Scene2 extends Phaser.Scene{
    constructor(){
      super("playGame");
    }
  
    create(){
        this.background = this.add.sprite(0, 0, "background");
        this.background.setOrigin(0, 0);
    }
  }