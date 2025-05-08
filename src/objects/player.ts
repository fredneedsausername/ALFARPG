class Player extends Phaser.Physics.Arcade.Sprite{

    protected initMovement(): void
    {
        this.setCollideWorldBounds(true);
    }
    
    public Player()
    {

    }

}