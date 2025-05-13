export default class LevelScene extends Phaser.Scene {

    constructor(sceneKey: string) {
        super({
            'key': sceneKey,
            'visible': false,
        })
    }

    private loadImages() {
        
        // Get all "resource" entries from the Performance API
        const allResources = performance.getEntriesByType('resource');

        // Filter only entries that are PerformanceResourceTiming
        const typedResources: PerformanceResourceTiming[] = allResources.filter(
        (entry): entry is PerformanceResourceTiming =>
            'initiatorType' in entry
        );

        // Further filter to only images from the /images/ folder ending in .png
        const imageResources = typedResources.filter(entry =>
        entry.initiatorType === 'img' &&
        entry.name.includes('/images/') &&
        entry.name.endsWith('.png')
        );

        // Extract URLs
        const imageUrls = imageResources.map(entry => entry.name);

        // Log result
        console.log('✅ Loaded images from /images/:', imageUrls);
    }

    preload() {
        this.loadImages()
    }

    create() {
        this.add.image(0, 0, 'terrain')
    }

}