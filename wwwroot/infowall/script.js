var DRAW_FRAMERATE = false;
var DRAW_CICLE = false;
var DRAW_DAWN = false;

function setup() {
    createCanvas( windowWidth, windowHeight );
    frameRate( 60 );

    init_stars();
    init_clock();
    init_sky();
    init_cicle();
}

function draw() {
    background( 0 );
    update_cicle();
    
    draw_sky();
    draw_stars();
    draw_clock();

    if( DRAW_FRAMERATE ) draw_framerate();
    if( DRAW_CICLE ) draw_cicle();
    if( DRAW_DAWN ) draw_dawn();
}

function windowResized() {
    resizeCanvas( windowWidth, windowHeight );
    init_stars();
    set_clock_size();
}

function mouseReleased() {
    create_meteor( 0.8 );
}

function draw_framerate() {
    fill( 255 );
    textFont( 'Helvetica' );
    textSize( 24 );
    textAlign( RIGHT );
    text( frameRate(), width - 20, 20 );
}

function draw_cicle() {
    fill( 255 );
    textFont( 'Helvetica' );
    textSize( 24 );
    textAlign( LEFT );
    text( CICLE, 20, 20 );
}

function draw_dawn() {
    fill( 255 );
    textFont( 'Helvetica' );
    textSize( 24 );
    textAlign( LEFT );
    text( dawn_alpha, 20, 50 );
}