let last = performance.now(),
    fps = 60,
    slomo = 1, // slow motion multiplier
    step = 1 / fps,
    slowStep = slomo * step,
    dt = 0,
    now;

let frame = () => {
    now = performance.now();
    dt = dt + Math.min(1, (now - last) / 1000);
    while(dt > slowStep) {
        dt = dt - slowStep;
        //console.log("dt" + dt)
        update(step);
    }
    last = now;

    render(dt / slomo * fps);
    requestAnimationFrame(frame);
}

function  update(dt){
    //explosion.visible = false;
    basicText1.text = "HP = " + pl_container.children[0].HP

    //app.stage.removeChild(explosion)
    //только игрок проверка на пересечение с текстурами
    if (!collision()) {
        pl_container.children[0].lx=pl_container.children[0].x
        pl_container.children[0].ly=pl_container.children[0].y
        pl_container.children[0].x += pl_container.children[0].vx
        pl_container.children[0].y += pl_container.children[0].vy

    } else {
        pl_container.children[0].x  =pl_container.children[0].lx
        pl_container.children[0].y = pl_container.children[0].ly
    }


    // оружие  движение
    pl_rocket_weapons_container.children.forEach(function (value, index2, array) {
        value.x += value.vx
        value.y += value.vy

    })

    // движение поворот  мобов
    hitmob()
    mobs_container.children.forEach(function (value, index2, array) {

        if (getRndInteger(-1, 50)==0){
            mobweapon(value)
        }

        if (value.vy == 1 && value.vx == 0) {
            value.rotation = 3.1415 * 2 / 2;
        } // S

        if (value.vy == -1 && value.vx == 0) {
            value.rotation = 0;
        } // W
        if (value.vy == 0 && value.vx == -1) {
            value.rotation = -3.1415 / 2;
        } // A
        if (value.vy == 0 && value.vx == 1) {
            value.rotation = 3.1415 / 2;
        } // D

        if ( value.move!=true ||getRndInteger(-1, 50)==0) {
            //console.log("true")
            mobweapon(value)
            value.x = value.lx
            value.y = value.ly
            value.move =true
            value.vx=getRndInteger(-1, 1);
            // //исключам диаганальное движение
            // if ( value.vx != 0) {
            //     value.vy = 0
            //
            // } else {
            //     value.vy = getRndInteger(-1, 1)
            //     value.vy == 0 ?  value.vy = 1 : true;
            // }
            mobrondommove (value)

        } else {
            value.lx = value.x
            value.ly = value.y
            value.x += value.vx
            value.y += value.vy
        }

    })

    // оружие мобв движение
    mob_rocket_weapons_all_textures_container.children.forEach(function (value, index2, array) {
        value.x += value.vx
        value.y += value.vy

    })


    // //текстуры и мобы пересечение
    // if (!hitmob()) {
    //     pl_container.children[0].lx=pl_container.children[0].x
    //     pl_container.children[0].ly=pl_container.children[0].y
    //     pl_container.children[0].x += pl_container.children[0].vx
    //     pl_container.children[0].y += pl_container.children[0].vy
    //
    // } else {
    //     pl_container.children[0].x  =pl_container.children[0].lx
    //     pl_container.children[0].y = pl_container.children[0].ly
    // }

    hit_weap()
    hit_weap_mob()
}

function render(dt){
   // console.log("key.key")

}