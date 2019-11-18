function plmove(sprate) {
    //console.log(sprate)
    let key = {
        UP: false,
        DOWN: false,
        LEFT: false,
        RIGHT: false,
        ROTATE: false,
    };

    downHandler = (key) => {

        //this.keys[e.which] = true
        //console.log(key.key)
        if (key.key == "w") {
            sprate.vy =-1*velosity;
            sprate.vx = 0;
            sprate.rotation = 0;
        } // W
        if (key.key == "s") {
            sprate.vy = 1*velosity;
            sprate.vx = 0;
            sprate.rotation = 3.1415 * 2 / 2;
        } // S
        if (key.key == "a") {
            sprate.vx =- 1*velosity;
            sprate.vy = 0;
            sprate.rotation = -3.1415 / 2;
        } // A
        if (key.key == "d") {
            console.log(collision())
            sprate.vx = 1*velosity;
            sprate.vy = 0;
            sprate.rotation = 3.1415 / 2;
        } // D
        if (key.key == "q") {
            console.log(collision())
            sprate.vx = 0;
            sprate.vy = 0;
        } // D
        if (key.key == "r") {
            pl_rocket_weapons()
            //weapon_posotion()
        } //this.angle++; // R
        if (key.keyCode == 27) ; // this.game.setScene(MenuScene); // Back to menu
    };


    const downListener = downHandler.bind(key);
    const upListener = downHandler.bind(key);


    document.addEventListener(
        "keydown", downListener, false
    );


}
