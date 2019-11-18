function gameover() {

    if (pl_container.children[0].HP<=0){

        basicText = new PIXI.Text('Game Over');
        basicText.x = window.innerWidth/2;
        basicText.y = window.innerHeight/2;
        basicText1.text = "HP" +  0

        graphics.lineStyle(2, 14006695.593823273, 1);
        graphics.beginFill(14006695.593823273, 1);
        graphics.drawRect(marggin, marggin, marggin + length * (numberOfrow-1)+length/2, marggin + length * (numberOfcol-1)+length/2);
        app.stage.addChild(graphics);


        app.stage.removeChild(pl_rocket_weapons_container)
        all_textures_container =[];
        app.stage.removeChild(mobs_container)
        app.stage.removeChild(mob_rocket_weapons_all_textures_container)
        app.stage.addChild(basicText);
        textures_that_not_destructible ("texture")
    }
}
