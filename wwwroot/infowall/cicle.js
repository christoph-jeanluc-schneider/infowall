var SW_DAY = 6.00 * 60 * 60 * 1000;
var SW_NIGHT = 18.00 * 60 * 60 * 1000;
var TRANSITION_DURATION_MS = 60 * 60 * 1000; // 1h

var CICLE = 0;

function init_cicle() {
    let times = SunCalc.getTimes( new Date(), 46.947922, 7.444608 );
    SW_DAY = inMillisecods( times.nightEnd );
    SW_NIGHT = inMillisecods( times.sunset );
    console.log(
        dayjs( times.nightEnd ).format( "HH:mm" ), "/",
        dayjs( times.sunset ).format( "HH:mm" ) );
}

let current_ms;
let offset_day;
let offset_night;
let OFFSET_MS = 0;

function update_cicle() {
    // CURRENT TIME IN MS
    current_ms = inMillisecods( new Date() ) + OFFSET_MS;

    // OFFSETS
    offset_day = current_ms - SW_DAY;
    offset_night = current_ms - SW_NIGHT;

    // SET DEFAULT
    CICLE = 0;

    // CLEARY DAY
    if( offset_day > TRANSITION_DURATION_MS && offset_night < 0 ) {
        CICLE = 1;
        return;
    }

    // CLEARY NIGHT
    if( offset_night > TRANSITION_DURATION_MS ) {
        CICLE = 0;
        return;
    }

    // DAWN
    if( offset_night > 0 ) {
        CICLE = map( offset_night, 0, TRANSITION_DURATION_MS, 1, 0 );
    }

    // DUSK
    else if( offset_day > 0 ) {
        CICLE = map( offset_day, 0, TRANSITION_DURATION_MS, 0, 1 );
    }

    // CICLE must be between 0 and 1
    CICLE = constrain( CICLE, 0, 1 );
}
