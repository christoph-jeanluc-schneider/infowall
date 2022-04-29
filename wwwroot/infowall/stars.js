var STAR_AMOUNT = 700;
var METEOR_P = 0.9999;

var stars = [];
function init_stars() {
    stars = [];
    for( let i = 0; i < STAR_AMOUNT; i++ ) {
        stars.push( {
            pos: createVector( random( -20, width + 20 ), random( height ) ),
            size: abs( randomGaussian( 0, 1 ) )
        } );
    }
}

var meteor;

function draw_stars() {
    // NIGHT
    if( CICLE < 0.3 ) {

        // STARS
        var COLOR_STAR = color( 255, 255, 245, map( CICLE, 0.3, 0, 0, 255 ) );
        stars.forEach( star => {
            fill( COLOR_STAR );
            noStroke();
            circle( star.pos.x, star.pos.y, star.size );

            star.pos.x += 0.01;
            if( star.pos.x > width + 10 ) {
                star.pos = createVector( -20, random( height ) )
            }
        } );


        // METEORID
        if( meteor ) {
            // update
            if( !meteor.growing && meteor.size < 0.2 ) {
                meteor = null;
                return;
            }

            if( meteor.growing )
                meteor.size += meteor.weight / 20;
            else
                meteor.size -= meteor.weight / 20;

            if( meteor.size >= meteor.weight )
                meteor.growing = false;

            if( meteor.trail.length > meteor.weight * 6 ) meteor.trail.pop();
            meteor.trail.splice( 0, 0, createVector( meteor.pos.x, meteor.pos.y ) );
            meteor.pos.add( meteor.dir );

            noFill();
            stroke( 255, 255, 255, map( meteor.size, 0, 2, 0, 255 ) );
            strokeWeight( meteor.weight );
            beginShape();
            meteor.trail.forEach( p => vertex( p.x, p.y ) );
            endShape();

        } else if( random() > METEOR_P ) {
            // create new
            create_meteor();
        }

    }
}

function create_meteor( weight ) {
    meteor = {
        pos: createVector( random( -20, width + 20 ), random( height ) ),
        dir: p5.Vector.random2D().mult( random( 10, 30 ) ),
        trail: [],
        weight: weight ? weight : abs( randomGaussian( 0.1, 0.6 ) ),
        size: 0,
        growing: true
    };
}