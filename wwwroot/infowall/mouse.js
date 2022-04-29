window.onmousemove = function ( ev ) {
    this.document.body.style.cursor = "default";
    setTimeout( function () {
        this.document.body.style.cursor = "none";
    }, 2000 );
};