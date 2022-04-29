var morphClock;

function init_clock() {
    morphClock = createMorphClock();
    document.getElementById( "container" ).appendChild( morphClock );

    set_clock_size();

    setInterval( draw_clock, 1000 );
    draw_clock();
}

function set_clock_size() {
    let fontSize = floor( width * 0.016 / 2 ) * 2;
    morphClock.parentNode.style.fontSize = `${fontSize}px`;
}

function draw_clock() {
    if( CICLE < 0.15 )
        morphClock.parentNode.className = "night";
    else
        morphClock.parentNode.className = "day";

    let moment = dayjs().add( OFFSET_MS, "millisecond" );
    setMorphClockTime( morphClock, moment.hour(), moment.minute() );
}