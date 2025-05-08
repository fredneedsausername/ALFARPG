class Player extends Phaser.Physics.Sprite{

    protected initMovement(): void
    {
        this.setCollideWorldBounds(true);
    }
    
    public Player()
    {

    }

}