var opacity = 0;
var fadeInterval = setInterval(fadeIn, 1);

function fadeIn() {
    if (opacity < 0.5) {
        opacity += 0.005;
    }
    else if (opacity < 1) {
        opacity += 0.0025;
    }
    else {
        clearInterval(fadeInterval)
    }
    document.body.style.opacity = opacity;
}