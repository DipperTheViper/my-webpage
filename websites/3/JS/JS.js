var elem1 = document.getElementById("1");
var elem2 = document.getElementById("2");

function screenlock() {
    setTimeout(function() {
        elem1.classList.add("hide");
    }, 100);
    setTimeout(function() {
        elem2.classList.remove("hide");
    }, 100);

}

function screenunlock() {
    setTimeout(function() {
        elem2.classList.add("hide");
    }, 500);
    setTimeout(function() {
        elem1.classList.remove("hide");
    }, 500);
}

function timer() {
    var dt = new Date();
    document.getElementById("t").innerHTML = (("0" + dt.getHours()).slice(-2)) + ":" + (("0" + dt.getMinutes()).slice(-2));
    document.getElementById("d").innerHTML = (("0" + dt.getDate()).slice(-2)) + "." + (("0" + (dt.getMonth() + 1)).slice(-2));
}

setInterval(function() { timer() }, 1000);