var BasicGame = {};
BasicGame.Boot = function (game) {
};
BasicGame.Boot.prototype = {
    preload: function () {
        // this.game.forceSingleUpdate = true;
        //this.game.time.desiredFps =60;
        //this.game.time.advancedTiming=true;
        this.load.image('elementos_logo', 'assets/elementos_logo.png');
        this.load.image('preloader1', 'assets/preloader1.png');
        this.load.image('preloader2', 'assets/preloader2.png');
         this.load.image('fondo', 'assets/fondo.png');
    },
    create: function () {
        //this.game.stage.smoothed = false;
        this.game.input.maxPointers = 8;
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        //this.game.scale.setScreenSize(true);


        this.game.state.start('Preloader');
    }
};