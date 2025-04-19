var overlay = document.getElementById("overlay")


function hide_element() {
    //fuck you youre not getting fade out
    overlay.style.display = "none";
}

function show_element() {
    overlay.style.display = "unset";
    overlay.style.animationName = "test";
    overlay.style.animationDuration = "0.2s";

}


