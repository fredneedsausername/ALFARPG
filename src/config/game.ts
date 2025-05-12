import Phaser from 'phaser'

export default class ALFARPG extends Phaser.Game {
    
    constructor(callbackFunctions?: Phaser.Types.Core.CallbacksConfig,
        ...scenes: Phaser.Types.Scenes.SettingsConfig[]) {

        const gameConfig: Phaser.Types.Core.GameConfig = {
            type: Phaser.WEBGL,
            scene: scenes,
            callbacks: callbackFunctions || {},
            physics: {
                default: "arcade",
                arcade: {
                    fps: 300,
                    fixedStep: false,
                    width: 1920,
                    height: 1080,
                    gravity: {
                        x: 0,
                        y: 0
                    }
                },
            },
            loader: {
                imageLoadType: "HTMLImageElement",
                path: "/assets/"
            },
            scale: {
                mode: Phaser.Scale.FIT,
                autoCenter: Phaser.Scale.CENTER_BOTH,
            },
            render: {
                pixelArt: true // Essential for proper sprite scaling on different screen resolutions
            }
        }

        super(gameConfig)

    }
}