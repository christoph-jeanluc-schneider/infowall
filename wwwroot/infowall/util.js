function inMillisecods( date ) {
    return ( date.getHours() * 3600000 )
        + ( date.getMinutes() * 60000 )
        + ( date.getSeconds() * 1000 )
        + date.getMilliseconds();
}

function setTime( h, m, s ) {
    let wish = ( h * 3600000 )
        + ( m * 60000 )
        + ( s * 1000 );
    let current = inMillisecods( new Date() );
    OFFSET_MS = wish - current;
}

function resetTime() {
    OFFSET_MS = 0;
}