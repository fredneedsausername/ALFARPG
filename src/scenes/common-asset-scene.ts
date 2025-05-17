/**
 * @remarks class to keep common assets loaded
 */
export default class CommonAssetScene extends Phaser.Scene {


    constructor() {
        super({
            'key': 'common-asset-scene'
        })
    }

    preload() {

        const loadedImages: {key: string, path: string}[] = [
            {key: 'player', path: 'player-test'}
        ]

        const loadImages = () => {
            for(let loadedImage of loadedImages) {
                this.load.image(loadedImage.key, 'images/' + loadedImage.path + '.png')
            }
        }

        loadImages()
        
    }

}