class LevelScene extends Phaser.Scene {

    private assetsPath: string

    constructor(assetsPath: string) {
        super()
        this.assetsPath = assetsPath
    }

    preload(): void {
        this.load.image('terrain', `${this.assetsPath}/terrain.png`)
    }

    create() {
        this.add.image(400, 300, 'terrain')
    }

}