let dawn_alpha = 0;
let img;

function init_sky() {
    img = loadImage( "/infowall/gradient.png" );
}

function draw_sky() {
    var COLOR_DAY = color( 130, 220, 255 );
    var COLOR_NIGHT = color( 8, 16, 34 );
    var COLOR_SKY = lerpColor( COLOR_NIGHT, COLOR_DAY, CICLE );
    background( COLOR_SKY );

    if( CICLE < 1 && CICLE > 0 ) {
        if( CICLE >= 0.6 ) dawn_alpha = 0;
        else if( CICLE >= 0.4 ) dawn_alpha = map( CICLE, 0.6, 0.4, 0, 1 );
        else if( CICLE >= 0.2 ) dawn_alpha = map( CICLE, 0.4, 0.2, 1, 0 );
        else dawn_alpha = 0;

        if( dawn_alpha > 1 ) dawn_alpha = 1;
        if( dawn_alpha < 0 ) dawn_alpha = 0;

        tint( 255, dawn_alpha * 160 );
        image( img, 0, 0, width, height );
        noTint();
    }
}
