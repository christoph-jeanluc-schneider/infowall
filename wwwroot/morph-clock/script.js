var morphClock = createMorphClock();
document.getElementById( "container" ).appendChild( morphClock );

function setTime() {
    let date = new Date();
    // setMorphClockTime( morphClock, date.getHours(), date.getMinutes() );
    setMorphClockTime( morphClock, date.getMinutes(), date.getSeconds() );
}

setInterval( setTime, 500 );
setTime();