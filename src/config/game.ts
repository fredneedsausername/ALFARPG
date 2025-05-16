import Phaser from 'phaser'
import LevelScene from '@/scenes/levelscene'

export default class ALFARPG extends Phaser.Game {
    
    constructor(levelsCount: number, ...scenes: Phaser.Scene[]) {

        const levels: LevelScene[] = []
        
        for(let i = 1; i < levelsCount + 1; i++) {
            levels.push(new LevelScene('level-' + i))
        }

        const gameConfig: Phaser.Types.Core.GameConfig = {
            type: Phaser.WEBGL,
            scene: [...scenes, ...levels], // Scenes before levels so that the main scene can come before the first level
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
                path: "assets/"
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