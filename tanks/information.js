function infa () {
    var style = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: 26,
        fontStyle: 'italic',
        fontWeight: 'bold',
        fill: ['#ffffff', '#00ff99'], // gradient
        stroke: '#4a1850',
        strokeThickness: 5,
        dropShadow: true,
        dropShadowColor: '#000000',
        dropShadowBlur: 4,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 6,
        wordWrap: true,
        wordWrapWidth: 440
    });
    basicText1 = new PIXI.Text(pl_container.children[0].HP, style);

    basicText1.x = marggin;
    basicText1.y = 10;
    app.stage.addChild(basicText1);
}