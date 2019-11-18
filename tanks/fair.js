
var explosion

function onAssetsLoaded(x,y) {

    // create an array to store the textures
    var explosionTextures = [],
        i;

    for (i = 0; i < 26; i++) {
        var texture = PIXI.Texture.fromFrame('Explosion_Sequence_A ' + (i+1) + '.png');
        explosionTextures.push(texture);
    }


    explosion = new PIXI.extras.AnimatedSprite(explosionTextures);

    explosion.x = x;
    explosion.y = y;
    explosion.anchor.set(0.5);
    explosion.rotation = Math.random() * Math.PI;
    explosion.scale.set(0.75 + Math.random() * 0.5);
    explosion.gotoAndPlay(Math.random() * 27);
    explosion.visible = true;
    explosion.loop = false;
    explosion.onComplete = () => {

        explosion.destroy();

    };
    app.stage.addChild(explosion);


    //start animating

}
