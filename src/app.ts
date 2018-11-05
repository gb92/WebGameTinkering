import * as PIXI from 'pixi.js';
import {keyboard} from './modules/keyboard'

keyboard.registerMovementHandler()

let app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight
});

app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight)
document.body.appendChild(app.view);

