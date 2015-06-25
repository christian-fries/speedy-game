var EdubookGame = {};

EdubookGame.Boot = function(game) {};

EdubookGame.Boot.prototype = {

    preload: function() {
        this.load.image('loadingScreen', 'assets/images/loading_screen.png');
        this.load.image('preloaderBar', 'assets/images/loader_bar.png');
        this.game.time.advancedTiming = true;
    },

    create: function() {
        this.stage.disableVisibilityChange = false;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.minWidth = 480;
        this.scale.minHeight = 320;
        /*this.scale.maxWidth = 800;
        this.scale.maxHeight = 600;*/
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.setScreenSize(true);
        this.stage.backgroundColor = '#92bc00';

        this.state.start('Preloader');
    }
}