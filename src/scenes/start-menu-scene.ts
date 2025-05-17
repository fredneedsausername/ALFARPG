
export default class StartMenu extends Phaser.Scene {
    constructor() {
        super({
            key: 'start-menu'
        });
    }

    preload() {
        this.load.image('backgroundImage', 'https://images.unsplash.com/photo-1616128515374-179585460555?q=80&w=3282&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'); // Replace with your image URL
    }

    create() {
        const canvas = this.sys.game.canvas;

        // Add the background image, scaled to fill the entire canvas
        const bg: Phaser.GameObjects.Image = this.add.image(canvas.width / 2, canvas.height / 2, 'backgroundImage');
        bg.setDisplaySize(canvas.width, canvas.height);
        bg.setOrigin(0.5); //center the image

        // Create a graphics object to apply the filter.  This is necessary for applying the blur.
        const graphics: Phaser.GameObjects.Graphics = this.add.graphics();
        graphics.x = canvas.width / 2;
        graphics.y = canvas.height / 2;

        // Apply a blur filter to the graphics object.  The higher the value, the stronger the blur.
        const blurFilter = new Phaser.Display.Masks.Blur(10); // Adjust the blur amount here
        graphics.setMask(blurFilter.createGeometryMask());

        // Draw a rectangle over the entire canvas to apply the filter.
        graphics.fillStyle(0x000000, 0.5); // Semi-transparent black rectangle
        graphics.fillRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);


        // ---  Button functionality ---
        const playButton = document.getElementById('playButton');
        const loadButton = document.getElementById('loadButton');
        const menuButton = document.getElementById('menuButton');

        playButton.addEventListener('click', () => {
            console.log('Play button clicked!');
            // Start your game scene here (e.g., this.scene.start('GameScene'));
            this.scene.start('GameScene'); // Example: Start a scene named 'GameScene'
        });

        loadButton.addEventListener('click', () => {
            console.log('Load button clicked!');
            // Load game data here
        });

        menuButton.addEventListener('click', () => {
            console.log('Menu button clicked!');
            // Go to the menu scene
        });

        // --- Text Styles (applied directly to HTML elements) ---
        //  No need to create Phaser text objects.  We'll style the existing HTML elements.
        playButton.style.fontFamily = 'Inter, sans-serif';
        loadButton.style.fontFamily = 'Inter, sans-serif';
        menuButton.style.fontFamily = 'Inter, sans-serif';
    }
}