//Aliases
var Application = PIXI.Application,
    all_textures_container = new PIXI.all_textures_container,
    pl_container = new PIXI.all_textures_container,
    pl_rocket_weapons_container = new PIXI.all_textures_container,
    mobs_container = new PIXI.all_textures_container,
    mob_rocket_weapons_all_textures_container= new PIXI.all_textures_container,
    all_textures_containerexplosion= new PIXI.all_textures_container,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite,
    Rectangle = PIXI.Rectangle,
    graphics = new PIXI.Graphics();


let app = new PIXI.Application({
        width: 256,         // default: 800
        height: 256,        // default: 600
        antialias: true,    // default: false
        transparent: false, // default: false
        resolution: 1       // default: 1
    }
);

app.renderer instanceof PIXI.WebGLRenderer            /////////////// &&&&&&&&&&&&&&&??????????????????????????????
document.body.appendChild(app.view);
app.renderer.backgroundColor = 0x061639;
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);


rectangle(marggin,marggin,numberOfrow*length+length ,numberOfcol*length+length)
app.stage.addChild(all_textures_container);
app.stage.addChild(pl_container);
app.stage.addChild(pl_rocket_weapons_container);
app.stage.addChild(mobs_container);
app.stage.addChild(mob_rocket_weapons_all_textures_container);
app.stage.addChild(all_textures_containerexplosion);



PIXI.loader
    .add([
        "images/btmp-topl.jpg",
        "images/wall.jpg",
        "images/ibn.jpg",
        "images/ibn2.jpg",
        "images/n.png",
        "images/TWeZQd9.png",


    ])
    .add('spritesheet', 'images/mc.json')
    .on("progress", loadProgressHandler)
    .load(setup);

function loadProgressHandler(loader, resource) {

}


