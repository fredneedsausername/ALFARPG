export default class LevelScene extends Phaser.Scene {

    protected loadBaseURL: string
    protected loadKeysAndPaths: [string, string][]

    constructor(sceneKey: string) {
        super({
            key: sceneKey,
            visible: false  
        });

        this.loadBaseURL = 'images/levels/' + sceneKey + '/'
        
        this.loadKeysAndPaths = [
            ['terrain', 'terrain'],
        ]
    }

    preload() {
        for(const keyPathLoadTuple of this.loadKeysAndPaths) {
            this.load.image(this.scene.key + '-' + keyPathLoadTuple[0], this.loadBaseURL + keyPathLoadTuple[1] + '.png')
        }
    }

    create() {
        this.add.image(0, 0, 'level-1-terrain')
        .scale = 20
    }

}