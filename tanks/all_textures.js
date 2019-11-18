function all_textures_block(type) {

    textures_that_not_destructible (type)

    //action area, textures can be destroyed
    for (let j = 1; j <= numberOfcol-1; j++) {

        for (let i = 0; i <= numberOfrow; i++) {

            dude = new Sprite(resources["images/TWeZQd9.png"].texture);
            dude.anchor.set(0.5);
            dude.name = type;
            dude.scale.set(scale);
            dude.tint = Math.random() * 0xFFFFFF;  //14006695.593823273
            dude.HP = 3000;
            dude.x = marggin + length * i+length/2;
            dude.y = marggin + length * j+length/2;
            dude.height = length;
            dude.width = length;
            all_textures_container.addChild(dude);

        }
    }
}

function  textures_that_not_destructible(type) {
    //passive zone, textures can not be destroyed
    for (let j = -1; j <= numberOfcol+1; j++) {

        for (let i = -1; i <= numberOfrow+1; i++) {

            if ( i==-1 ||i==numberOfrow+1 || j==-1||j==numberOfcol+1) {
                dude = new Sprite(resources["images/TWeZQd9.png"].texture);
                dude.anchor.set(0.5);
                dude.name = type;
                dude.scale.set(scale);
                dude.tint = 14006695.593823273
                dude.HP = 1000000;
                dude.x = marggin + length * i+length/2;   ///marggin + length * (numberOfrow+1)+length/2
                dude.y = marggin + length * j+length/2;    //marggin + length * (numberOfcol+1)+length/2
                dude.height = length;
                dude.width = length;
                all_textures_container.addChild(dude);
            }
        }
    }
}

function rectangle(x0,y0,x1,y1) {
    // zon with game action rectangle
    graphics.lineStyle(2,  0x000000, 1);
    graphics.beginFill( 0x000000, 1 );
    graphics.drawRoundedRect(x0,y0,x1,y1, 1);
    graphics.endFill();
    app.stage.addChild(graphics);
}
