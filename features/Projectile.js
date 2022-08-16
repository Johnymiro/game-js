class Projectile {
  constructor(game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = 80;
    this.height = 45.7;
    this.speed = 3;
    this.markedForDeletion = false;
  }

  update() {
    this.x += this.speed;
    if (this.x > this.game.width * 0.8) this.markedForDeletion = true;
  }
  draw(context) {
    context.fillStyle = "yellow";
    const img = document.getElementById("gun_bullet");
    context.drawImage(img, this.x, this.y, this.width, this.height);
    //context.fillRect(this.x, this.y, this.width, this.height);
  }
}
