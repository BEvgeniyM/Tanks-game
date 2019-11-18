function setup() {
    console.log( "setup")

    all_textures_block ("texture")
    plmove(player())

    for (let i = 1 ; i<=mob ; i++){
        mobs_f ()
    }
    infa ()


    requestAnimationFrame(frame);


}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}