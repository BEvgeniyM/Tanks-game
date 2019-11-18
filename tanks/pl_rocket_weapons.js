function pl_rocket_weapons(cod) {
//
//     //app.stage.addChild(sprite);
//     all_spite.push(sprite)
//     console.log(all_textures_container.toGlobal(sprite.position));
// //Displays: Object {x: 80, y: 80...};
//     console.log(sprite.toLocal(sprite.position, sprite))
    let texture = TextureCache["images/ibn2.jpg"];

    //Create a rectangle object that defines the position and
    //size of the sub-image you want to extract from the texture
    //(`Rectangle` is an alias for `PIXI.Rectangle`)
    let rectangle = new Rectangle(450, 0, 100, 210);

    //Tell the texture to use that rectangular section
    texture.frame = rectangle;

    //Create the sprite from the texture
    let sprite = new Sprite(texture);

    //Position the sprite sprite on the canvas

    //keyboard(sprite)
    //app.stage.addChild(sprite);


    //Render the stage
    sprite.anchor.set(0.5);
    sprite.name= "pl_rocket_weapons";
    sprite.scale.set(scale);
    sprite.tint = 14006695.59382327;
    sprite.width = 5;
    sprite.height = length;
    sprite.position.set(pl_container.children[0].x, pl_container.children[0].y);
    sprite.rotation =pl_container.children[0].rotation
    // sprite.vx=pl_container.children[0].vx*velosity_weap;
    // sprite.vy=pl_container.children[0].vy*velosity_weap;
    weapon_posotion(sprite)
    sprite.HP = 1000*getRndInteger(1, 3);

    //Add the sprite to the stage
    pl_rocket_weapons_container.addChild(sprite);

   // return sprite

}

function weapon_posotion(sprite) {

    if (pl_container.children[0].rotation ==  0){
        sprite.vx=0
        sprite.vy=-1*velosity_weap;
    }
    if (pl_container.children[0].rotation ==  3.1415 * 2 / 2){
        sprite.vx=0
        sprite.vy=1*velosity_weap;
    }
    if (pl_container.children[0].rotation ==  -3.1415 / 2){
        sprite.vx=- 1*velosity_weap;
        sprite.vy=0
    }
    if (pl_container.children[0].rotation ==  3.1415 / 2){
        sprite.vx=1*velosity_weap;
        sprite.vy=0;
    }


}