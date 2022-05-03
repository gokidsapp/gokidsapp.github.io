BasicGame.Preloader = function (game) {
    cargado = false;
    creditos = 0;

};
BasicGame.Preloader.prototype = {
    preload: function () {

        this.game.stage.disableVisibilityChange = true;
        this.game.stage.backgroundColor = '#ffffff';
        this.fondo = this.add.sprite(this.game.width / 2 - 1200, 0, 'fondo');
        this.fondo = this.add.sprite(this.game.width / 2 + 400, 0, 'fondo');
        this.fondo = this.add.sprite(this.game.width / 2 - 400, 0, 'fondo');
        this.elementos_logo = this.add.sprite(this.game.width / 2, this.game.height / 2 - 80, 'elementos_logo');
        this.elementos_logo.anchor.set(0.5);
        this.preloadBg = this.add.sprite(this.game.width / 2, this.game.height / 2 + 160, 'preloader1');
        this.preloadBg.x -= this.preloadBg.width / 2;
        this.preloadBar = this.add.sprite(this.game.width / 2, this.game.height / 2 + 160, 'preloader2');
        this.preloadBar.x -= this.preloadBar.width / 2;
        this.load.setPreloadSprite(this.preloadBar);


        this.load.image('fondo_sombra', 'assets/fondo_sombra.png');
        this.load.image('piano1', 'assets/piano1.png');
        this.load.image('piano2', 'assets/piano2.png');
        this.load.spritesheet('mix_btn', 'assets/mix_btn.png', 176, 170);
        this.load.spritesheet('teclas', 'assets/teclas.png', 87, 336);
        this.load.spritesheet('animales_btn', 'assets/animales_btn.png', 160, 160);
        this.load.spritesheet('teclas_btn_esp', 'assets/teclas_btn_esp.png', 87, 336);
        this.load.spritesheet('teclas_btn_ing', 'assets/teclas_btn_ing.png', 87, 336);
        this.load.spritesheet('animales_peq', 'assets/animales_peq.png', 67, 66);
        this.load.spritesheet('piano_btn', 'assets/piano_btn.png', 165, 156);
        this.load.spritesheet('play_btn', 'assets/play_btn.png', 64, 66);
        this.load.spritesheet('rec_btn', 'assets/rec_btn.png', 163 / 2, 68);
        this.load.spritesheet('stop_btn', 'assets/stop_btn.png', 64, 66);
        this.load.spritesheet('espanol_btn', 'assets/espanol_btn.png', 64, 66);
        this.load.spritesheet('ingles_btn', 'assets/ingles_btn.png', 64, 66);

        /*
         this.load.bitmapFont('creditos', 'credit/credit.png', 'credit/credit.fnt');
         
         */

        /* if (!isExplorer)
         {*/
        this.game.load.audio('musica', ['audio/musica.ogg', 'audio/musica.mp3']);
        for (var i = 0; i < 8; i++) {
            var cad = 'duck' + i;
            this.game.load.audio(cad, ['audio/' + cad + '.mp3', 'audio/' + cad + '.mp3']);
            var piano = 'piano' + i;
            this.game.load.audio(piano, ['audio/' + piano + '.mp3', 'audio/' + piano + '.mp3']);
            cad = 'sheep' + i;
            this.game.load.audio(cad, ['audio/' + cad + '.mp3', 'audio/' + cad + '.mp3']);
            cad = 'cat' + i;
            this.game.load.audio(cad, ['audio/' + cad + '.mp3', 'audio/' + cad + '.mp3']);
            cad = 'monkey' + i;
            this.game.load.audio(cad, ['audio/' + cad + '.mp3', 'audio/' + cad + '.mp3']);
            cad = 'pig' + i;
            this.game.load.audio(cad, ['audio/' + cad + '.mp3', 'audio/' + cad + '.mp3']);
            cad = 'dog' + i;
            this.game.load.audio(cad, ['audio/' + cad + '.mp3', 'audio/' + cad + '.mp3']);
            cad = 'hen' + i;
            this.game.load.audio(cad, ['audio/' + cad + '.mp3', 'audio/' + cad + '.mp3']);
            cad = 'horse' + i;
            this.game.load.audio(cad, ['audio/' + cad + '.mp3', 'audio/' + cad + '.mp3']);
        }

        // }

    },
    create: function () {
        //  this.game.state.start('Game');
    },
    update: function () {
        if (!cargado) {
            if (!isExplorer && this.cache.isSoundDecoded('horse7'))
            {
                cargado = true;

                this.game.time.events.add(1000, this.irJuego, this);

            }
            else if (isExplorer) {
                cargado = true;
                this.game.time.events.add(1000, this.irJuego, this);
            }
        }
    },
    irJuego: function () {
      /*  tweenpreloadBg = this.game.add.tween(this.preloadBg).to({y: 900}, 300, "Linear", true);
        tweenpreloadBar = this.game.add.tween(this.preloadBar).to({y: 900}, 300, "Linear", true);
        tweenprelogor = this.game.add.tween(this.elementos_logo).to({y: -600}, 200, "Linear", true);
        tweenprelogor.onComplete.add(function () {*/
            this.game.state.start('Game');
     //   }, this);

    }


};