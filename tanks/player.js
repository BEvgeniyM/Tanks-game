function player(cod) {
//
//     //app.stage.addChild(sprite);
//     all_spite.push(sprite)
//     console.log(all_textures_container.toGlobal(sprite.position));
// //Displays: Object {x: 80, y: 80...};
//     console.log(sprite.toLocal(sprite.position, sprite))
    let texture = TextureCache["images/ibn.jpg"];

    //Create a rectangle object that defines the position and
    //size of the sub-image you want to extract from the texture
    //(`Rectangle` is an alias for `PIXI.Rectangle`)
    let rectangle = new  Rectangle(650, 220, 50, 120);

    //Tell the texture to use that rectangular section
    texture.frame = rectangle;

    //Create the sprite from the texture
    let sprite = new Sprite(texture);

    //Position the sprite sprite on the canvas
    // sprite.x = 420;
    // sprite.y = 32;

    //keyboard(sprite)
    //app.stage.addChild(sprite);


    //Render the stage
    sprite.anchor.set(0.5);
    sprite.name= "player";
    sprite.scale.set(scale);
    sprite.tint = 14006695.59382327;
    sprite.width = pl_length;
    sprite.height = pl_length;
    // sprite.x = 100;
    // sprite.y = 100;
    sprite.position.set(200, marggin+length/2);
    sprite.vx=0;
    sprite.vy=0;
    sprite.HP = 10000;

    //Add the sprite to the stage
    pl_container.addChild(sprite);

    return sprite

}