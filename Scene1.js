import "./geolocation.js";
class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }
    preload(){

    this.load.image("background", "assets/images/background1.jpg");
    this.load.image("ship", "assets/images/coin2.png");
    this.load.image("ship2", "assets/images/coin2.png");
    this.load.image("ship3", "assets/images/coin2.png");
    this.load.image("power-up", "assets/images/monster2.png");

    this.load.spritesheet("explosion", "assets/spritesheets/explosion.png",{
      frameWidth: 16,
      frameHeight: 16
    });
    this.load.spritesheet("player", "assets/spritesheets/player.png",{
      frameWidth: 16,
      frameHeight: 24
    });
    this.load.spritesheet("beam", "assets/spritesheets/beam.png",{
      frameWidth: 16,
      frameHeight: 16
    });

    this.load.bitmapFont("pixelFont", "assets/font/font.png", "assets/font/font.xml");

    this.load.audio("audio_damage", "assets/sounds/damage.mp3");
    this.load.audio("audio_explosion", ["assets/sounds/explosion.ogg", "assets/sounds/explosion.mp3"]);
    this.load.audio("audio_pickup", ["assets/sounds/pickup.ogg", "assets/sounds/pickup.mp3"]);
    this.load.audio("music", ["assets/sounds/sci-fi_platformer12.ogg", "assets/sounds/sci-fi_platformer12.mp3"]);
  }

  create() {
    const imageKey = this.getBackgroundImageKey(); // Get initial background image key
    this.updateBackground(imageKey);
    this.add.text(20, 20, "Loading game...");
    this.scene.start("playGame");
 
  }
  getBackgroundImageKey() {
    let imageKey = "background"; // Default key

    // Logic to determine image key based on latitude
    const latitude = parseFloat(document.querySelector("#latitude").textContent);
    if (latitude > 30) {
      imageKey = "hot.jpg";
    } else if (latitude >= 10 && latitude <= 30) {
      imageKey = "warm.jpg";
    } else {
      imageKey = "cold.jpg";
    }

    return imageKey;
  }
  updateBackground(imageKey) {
    this.add.image(0, 0, imageKey).setOrigin(0); // Add the background image
  }
}
export default Scene1;