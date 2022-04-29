function createMorphClock() {
    let morphClock = document.createElement( "DIV" );
    morphClock.className = "morph-clock";

    for( let i = 0; i < 5; i++ ) {
        let morphDigit = document.createElement( "DIV" );
        morphDigit.className = "morph-digit is-0";
        if( i == 2 ) morphDigit.className = "morph-digit is-divider";

        for( let r = 1; r <= 11; r++ ) {
            morphDigit.innerHTML += `<div class="row row-${r}"><span class="line left"></span><span class="line right"></span></div>`;
        }

        morphClock.appendChild( morphDigit );
    }

    return morphClock;
}

function setMorphClockTime( clock, h, m ) {
    h = h.toString();
    if( h.length < 2 ) h = `0${h}`;
    m = m.toString();
    if( m.length < 2 ) m = `0${m}`;

    let d1 = h.split( "" )[ 0 ];
    let d2 = h.split( "" )[ 1 ];
    let d3 = m.split( "" )[ 0 ];
    let d4 = m.split( "" )[ 1 ];

    clock.children[ 0 ].className = `morph-digit is-${d1}`;
    clock.children[ 1 ].className = `morph-digit is-${d2}`;
    clock.children[ 2 ].className = "morph-digit is-divider";
    clock.children[ 3 ].className = `morph-digit is-${d3}`;
    clock.children[ 4 ].className = `morph-digit is-${d4}`;
}