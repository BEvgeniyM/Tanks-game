function hitTestRectangle(r1, r2) {

    //Define the variables we'll need to calculate
    let hit, combinedHalfWidths, combinedHalfHeights, vx, vy;

    //collision will determine whether there's a collision
    hit = false;

       //Find the center points of each sprite
    r1.centerX = r1.x //+ r1.width / 2;
    r1.centerY = r1.y //+ r1.height / 2;
    r2.centerX = r2.x //+ r2.width / 2;
    r2.centerY = r2.y //+ r2.height / 2;

    //Find the half-widths and half-heights of each sprite
    r1.halfWidth = r1.width / 2;
    r1.halfHeight = r1.height / 2;
    r2.halfWidth = r2.width / 2;
    r2.halfHeight = r2.height / 2;

    // толко для оружия , спрайт имет прамоугольную форму поэтому нужна коректеровка ширины и длины при повороте  спрайта

    if ( r1.name=="pl_rocket_weapons" && ( r1.rotation== (-3.1415 / 2) || r1.rotation== (3.1415 / 2) )){
        //Find the center points of each sprite
        r1.centerX = r1.x + r1.height / 2;
        r1.centerY = r1.y +  r1.width / 2;

        //Find the half-widths and half-heights of each sprite
        r1.halfWidth = r1.height / 2;
        r1.halfHeight =  r1.width / 2;

    }

    //Calculate the distance vector between the sprites
    vx = r1.centerX - r2.centerX;
    vy = r1.centerY - r2.centerY;

    //Figure out the combined half-widths and half-heights
    combinedHalfWidths = r1.halfWidth + r2.halfWidth;
    combinedHalfHeights = r1.halfHeight + r2.halfHeight;

    //Check for a collision on the x axis
    if (Math.abs(vx) < combinedHalfWidths) {

        //A collision might be occurring. Check for a collision on the y axis
        if (Math.abs(vy) < combinedHalfHeights) {

            //There's definitely a collision happening
            hit = true;
        } else {

            //There's no collision on the y axis
            hit = false;
        }
    } else {

        //There's no collision on the x axis
        hit = false;
    }

    //`collision` will be either `true` or `false`
    return hit;
};

function collision() {
    //console.log(all_textures_container.children)
    //console.log(all_spite)
    let hit = false;
    pl_container.children.forEach(function (value, index, array) {
        all_textures_container.children.forEach(function (value2, index2, array) {
           // console.log(value2)
            if ( hitTestRectangle(value, value2)) {
                //console.log("true")
                hit = true;
            }

        })
    })
    pl_container.children.forEach(function (value, index, array) {
        mobs_container.children.forEach(function (value2, index2, array) {
            // console.log(value2)
            if ( hitTestRectangle(value, value2)) {
                //console.log("true")
                hit = true;
            }

        })
    })

    return hit
}

function hit_weap_mob() {

    let hit = false;
    mob_rocket_weapons_all_textures_container.children.forEach(function (value, index, array) {
        all_textures_container.children.forEach(function (value2, index2, array) {

            if ( hitTestRectangle(value, value2)) {

                hit = true;
                hitTestRectangle(value, value2)
                mob_rocket_weapons_all_textures_container.removeChild(value)

                value2.HP -= value.HP
                if (value2.HP<=0) all_textures_container.removeChild(value2)

            }
        })
    })

    mob_rocket_weapons_all_textures_container.children.forEach(function (value, index, array) {
        pl_container.children.forEach(function (value2, index2, array) {

            if ( hitTestRectangle(value, value2)) {
                //console.log("true")
                hit = true;
                hitTestRectangle(value, value2)
                mob_rocket_weapons_all_textures_container.removeChild(value)
               // console.log("mobs_container.HP"+value2.HP)
                value2.HP -= +value.HP
                if (value2.HP<=0){
                    gameover()
                    pl_container.removeChild(value2)
                }


                onAssetsLoaded(value.x,value.y)


            }
        })
    })

    mob_rocket_weapons_all_textures_container.children.forEach(function (value, index, array) {
        pl_rocket_weapons_container.children.forEach(function (value2, index2, array) {

            if ( hitTestRectangle(value, value2)) {
                //console.log("true")
                hit = true;
                hitTestRectangle(value, value2)
                mob_rocket_weapons_all_textures_container.removeChild(value)
                // console.log("mobs_container.HP"+value2.HP)
                value2.HP -= +value.HP
                if (value2.HP<=0) pl_rocket_weapons_container.removeChild(value2)


                onAssetsLoaded(value.x,value.y)


            }
        })
    })
    return hit
}


function hit_weap() {
    //console.log(all_textures_container.children)
    //console.log(all_spite)
    let hit = false;
    pl_rocket_weapons_container.children.forEach(function (value, index, array) {
        all_textures_container.children.forEach(function (value2, index2, array) {

            if ( hitTestRectangle(value, value2)) {
                //console.log("true")
                hit = true;
                hitTestRectangle(value, value2)
                pl_rocket_weapons_container.removeChild(value)

                value2.HP -= value.HP
                if (value2.HP<=0) all_textures_container.removeChild(value2)
                //all_textures_container.removeChild(value2)



                onAssetsLoaded(value.x,value.y)






            }

        })
    })
    pl_rocket_weapons_container.children.forEach(function (value, index, array) {
        mobs_container.children.forEach(function (value2, index2, array) {

            if ( hitTestRectangle(value, value2)) {
                //console.log("true")
                hit = true;
                hitTestRectangle(value, value2)
                pl_rocket_weapons_container.removeChild(value)
                console.log("mobs_container.HP"+value2.HP)
                value2.HP -= +value.HP
                if (value2.HP<=0) mobs_container.removeChild(value2)



                onAssetsLoaded(value.x,value.y)






            }

        })
    })
    return hit
}


function hitmob() {
    //console.log(all_textures_container.children)
    //console.log(all_spite)
    let hit = false;
    // mobs_container.children.forEach(function (value, index, array) {
    //     mobs_container.children.forEach(function (value2, index2, array) {
    //         // console.log(value2)
    //         if ( value2.name=="mob" && value.name=="mob"&& hitTestRectangle(value, value2)) {
    //             console.log("true")
    //             collision = true;
    //         }
    //
    //     })
    // })
    pl_container.children.forEach(function (value, index, array) {
        mobs_container.children.forEach(function (value2, index2, array) {
            // console.log(value2)
            if ( hitTestRectangle(value, value2)) {
                //console.log("true")
                hit = true;
                value2.move =false

            }
        })
    })
    all_textures_container.children.forEach(function (value, index, array) {
        mobs_container.children.forEach(function (value2, index2, array) {
            // console.log(value2)
            if ( hitTestRectangle(value, value2)) {
                //console.log("true")
                hit = true;
                value2.move =false
            }

        })
    })


    return hit
}

