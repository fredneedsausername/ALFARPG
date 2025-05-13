export default class LevelScene extends Phaser.Scene {

    constructor(sceneKey: string) {
        super({
            'key': sceneKey,
            'visible': false,
        })
    }

    // An image in images/levels/level-1/soulings/souling1.png will have a key in the loader of:
    // levels-level-1-soulings-souling1
    private loadImages() {
        
        // Use Vite's `import.meta.glob()` to scan all PNG files inside /images/ and its subfolders.
        // The pattern '**/*.png' means: "match any .png file in this folder or any subfolder"
        // The { as: 'url' } option tells Vite to give us the final URL to the image.
        const images = import.meta.glob('/images/**/*.png', { as: 'url' });

        for (const path in images) {
            
            const loader = images[path]; // Loader returns a Promise that resolves to the path of the image
            if (!loader) continue; // Otherwise TypeScript laments that images[path] could be undefined

            const name = path
            .replace('/images/', '')  // Remove the base folder prefix
            .replace('.png', '')      // Remove the file extension
            .replace(/\//g, '-');     // Replace any remaining slashes with dashes (so folders become part of the key)

            loader().then(url => {
                this.load.image(name, url);
            });

        }
    }

    preload() {
        this.loadImages()
    }

    create() {
        this.add.image(0, 0, 'terrain')
    }

}