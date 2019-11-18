
function mobs_f() {
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
    // sprite.x = 420;
    // sprite.y = 32;

    //keyboard(sprite)
    //app.stage.addChild(sprite);


    //Render the stage
    sprite.anchor.set(0.5);
    sprite.name= "mob";
    sprite.move=true
    sprite.HP= 10000;
    sprite.scale.set(scale);
    sprite.tint = 14006695.59382327;
    sprite.width = length;
    sprite.height = length;
    // sprite.x = 100;
    // sprite.y = 100;

    //sprite.position.set(all_textures_container.children[all_textures_container.children.length-1].x,all_textures_container.children[all_textures_container.children.length-1].y+length/2);  // 300,40
    sprite.position.set( 200, marggin + length * (numberOfcol)+length/2);  // 300,40

    sprite.vx=getRndInteger(-1, 1);
    //исключам диаганальное движение
    // if (sprite.vx != 0) {
    //     sprite.vy = 0
    //
    // } else {
    //     sprite.vy = getRndInteger(-1, 1)
    //     sprite.vy == 0 ? sprite.vy = 1 : true;
    // }

    mobrondommove (sprite)
    sprite.HP = 10000;

    //Add the sprite to the stage
    mobs_container.addChild(sprite);

    return sprite

}

function mobrondommove (sprite) {
    if (sprite.vx != 0) {
        sprite.vy = 0

    } else {
        sprite.vy = getRndInteger(-1, 1)
        sprite.vy == 0 ? sprite.vy = 1 : true;
    }
}