let  state;
function keyboard(value) {
    let key = {};
    key.value = value;
    key.isDown = false;
    key.isUp = true;
    key.press = undefined;
    key.release = undefined;
    //The `downHandler`
    key.downHandler = event => {
        if (event.key === key.value) {
            if (key.isUp && key.press) key.press();
            key.isDown = true;
            key.isUp = false;
            event.preventDefault();
        }
    };

    //The `upHandler`
    key.upHandler = event => {
        if (event.key === key.value) {
            if (key.isDown && key.release) key.release();
            key.isDown = false;
            key.isUp = true;
            event.preventDefault();
        }
    };

    //Attach event listeners
    const downListener = key.downHandler.bind(key);
    const upListener = key.upHandler.bind(key);

    window.addEventListener(
        "keydown",downListener, false
    );
    window.addEventListener(
        "keyup", upListener, false
    );


    // Detach event listeners
    key.unsubscribe = () => {
        window.removeEventListener("keydown", downListener);
        window.removeEventListener("keyup", upListener);
    };

    return key;
}

function keyboardstart( cat) {
 //console.log ("========================"+cat )

//Capture the keyboard arrow keys
    let left = keyboard("ArrowLeft"),
        up = keyboard("ArrowUp"),
        right = keyboard("ArrowRight"),
        down = keyboard("ArrowDown"),
        tab = keyboard("Tab");

    // if (this.keys['87']) console.log("sDDD"); // W
    // if (this.keys['83']) console.log("sDDD");// S
    // if (this.keys['65']) console.log("sDDD"); // A
    // if (this.keys['68']) this.posX++; // D
    // if (this.keys['82']) this.angle++; // R
    // if (this.keys['27']) this.game.setScene(MenuScene); // Back to menu

// Left arrow key `press` method
    tab.press = () => {
        console.log ("========================")
        my_wiper.visible = true;
        my_wiper.x=my_tank.x
        my_wiper.y=my_tank.y
        my_wiper.vx = my_tank.vx*5
        my_wiper.vy= my_tank.vy*5
        my_wiper.rotation = my_tank.rotation


    };
    tab.release = () => {
       // explosion.visible = false;
    };

//Left arrow key `press` method
    left.press = () => {
        cat.rotation = -3.1415/2;
        cat.vx = -1;
        cat.x -=1
        cat.vy = 0;
        //console.log ("========================key")
    };

//Left arrow key `release` method
//     left.release = () => {
//        // cat.x -= 5;
//         cat.vx = -1;
//         cat.vy = 0;
//         if (!right.isDown && cat.vy === 0) {
//            // console.log ("========================left.release" )
//         }
//     };

//Up
    up.press = () => {
        cat.rotation = 0;
        cat.vy = -1;
        cat.y -=1
        cat.vx = 0;
        //cat.y -= 1;
    };
    up.release = () => {
        if (!down.isDown && cat.vx === 0) {
        //    cat.vy = -1;
          //  console.log ("========================up.release " )
        }
    };

//Right
    right.press = () => {
        cat.rotation = 3.1415/2;
        // cat.x += 1;
        cat.vx = 1;
        cat.x += 1;
        cat.vy = 0;
    };
    right.release = () => {
        if (!left.isDown && cat.vy === 0) {

        }
    };

//Down
    down.press = () => {
        cat.rotation = 3.1415*2/2;
        // cat.y += 5;
        cat.vy = 1;
        cat.y += 1;
        cat.vx = 0;
    };
    down.release = () => {
        if (!up.isDown && cat.vx === 0) {
            // cat.vy = +1;
        }
    };

//Set the game state
    //state = play;

//Start the game loop
    app.ticker.add(delta => gameLoop(delta));
}


function gameLoop(delta){
    //Update the current game state:

    app.renderer.resize(window.innerWidth, window.innerHeight);


    all_spite.forEach(function (value, index, array) {
        all_spite.forEach(function (value2, index2, array) {

                chack(value)
                 if ( index2!=index && hitTestRectangle(value, value2)){
                     //console.log("true")
                     //value.tint = Math.random() * 0xFFFFFF;

                     // if ( value.name=="my_wiper" && value2.name=="textute" && value.visible != false){
                     //      explosion.visible = true;
                     //      explosion.x = value.x;
                     //      explosion.y = value.y;
                     //      value.visible = false;
                     //      value2.visible = false;
                     //      my_wiper.x=my_tank.x
                     //      my_wiper.y=my_tank.y
                     //      all_spite.splice(index2, 1);
                     // }
                     //
                     if ( value.name =="pla" &&  value2.name =="textute"  ){

                         value.vx = 0;
                         value.vy = 0;

                     }
                     if ( value.name=="my_wiper" && value2.name=="textute"  ){
                         //explosion.visible = true;
                         explosion.x = value.x;
                         explosion.y = value.y;
                         value.visible = false;
                         value2.visible = false;
                         my_wiper.x = my_tank.x
                         my_wiper.y = my_tank.y
                         my_wiper.vx =0
                         my_wiper.vy=0
                         //app.stage.removeChild(value2)
                         all_spite.splice(index2, 1);
                     }


                 }
            // if ( index2!=index && value.name !="textute" && value.name =="my_wiper" && hitTestRectangle(value, value2)){
            //     //console.log("true")
            //     value.tint = Math.random() * 0xFFFFFF;
            //
            //     if ( value.name=="my_wiper" && value2.name=="textute" && value.visible != false){
            //         explosion.visible = true;
            //         explosion.x = value.x;
            //         explosion.y = value.y;
            //         value.visible = false;
            //         value2.visible = false;
            //         my_wiper.x=my_tank.x
            //         my_wiper.y=my_tank.y
            //         all_spite.splice(index2, 1);
            //     }
            //
            //     if ( value.name =="pla" &&  value2.name =="textute"  ){
            //
            //         value.vx = 0;
            //         value.vy = 0;
            //
            //     }
            //
            //
            // }
            //



        })

        if (value.name!="textute") {
            value.x += value.vx;
            value.y += value.vy

        }


    })

}

function chack (cat){
    if (cat.x>=window.innerWidth-marggin-cat.width/2){
        cat.x = window.innerWidth-marggin-cat.width/2
        //console.log(" cat.vx " + cat.vx + "cat.x "+ cat.x +"window.innerWidth*2-marggin"+window.innerWidth*2-marggin)
    }
    if (cat.x<=marggin+cat.width/2){
        cat.x = marggin+cat.width/2
        //  console.log(" cat.vx " + cat.vx + "cat.x "+ cat.x +"window.innerWidth*2-marggin"+window.innerWidth*2-marggin)
    }
    if (cat.y<=marggin+cat.width/2){
        cat.y = marggin+cat.width/2
        //  console.log(" cat.vx " + cat.vx + "cat.x "+ cat.x +"window.innerWidth*2-marggin"+window.innerWidth*2-marggin)
    }
    if (cat.y>=window.innerHeight-marggin-cat.width/2){
        cat.y = window.innerHeight-marggin-cat.width/2
        //  console.log(" cat.vx " + cat.vx + "cat.x "+ cat.x +"window.innerWidth*2-marggin"+window.innerWidth*2-marggin)
    }
}
function chack_mob (spr,arra) {

    direction_mob(spr, arra)

}

function direction_mob(spr,arra) {

    arra.forEach(function (value, index, array) {
       if ( value!=0 && spr.vx==0){
           spr.vx=Math.random()<0.5?1:-1;
       }
        if ( value!=0 && spr.vy==0){
            spr.vy=Math.random()<0.5?1:-1;
        }
    })

    return {}
}