class Scene1 extends Phaser.Scene {
  
  constructor() {
    super("bootGame");
  }
    preload(){
    if(imageKey =='hot'){
      this.load.image("background", "assets/images/hot.jpg");
    }
    else if (imageKey =='warm'){
      this.load.image("background", "assets/images/warm.jpg");
    }
    else if (imageKey =='cold'){
      this.load.image("background", "assets/images/cold.jpg");
    }
    else{
      this.load.image("background", "assets/images/background1.jpg");
    }
    
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
    this.add.text(20, 20, "Loading game...");
    this.scene.start("playGame");
    function geoFindMe() {
      const status = document.querySelector("#status");
      const mapLink = document.querySelector("#map-link");

      mapLink.href = "";
      mapLink.textContent = "";
      let imageKey = "";

      function success(position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          status.textContent = "";
          if (latitude > 30) {
              temperatureText = "hot";
              imageKey = "hot";
          } else if (latitude >= 10 && latitude <= 30) {
              temperatureText = "warm";
               imageKey = "warm";
          } else {
              temperatureText = "cold";
              imageKey = "cold";
          }
          mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
          mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} ° , ${temperatureText}`;
      }

      function error() {
          status.textContent = "Unable to retrieve your location";
      }

      if (!navigator.geolocation) {
          status.textContent = "Geolocation is not supported by your browser";
      } else {
          status.textContent = "Locating…";
          navigator.geolocation.getCurrentPosition(success, error);
      }
  }

  document.querySelector("#find-me").addEventListener("click", geoFindMe);
  }
}
