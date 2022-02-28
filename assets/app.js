

function myFunction() {
    var light = document.getElementById("light");
    var btn = document.getElementById("btn");
    light.classList.toggle("light");
    btn.classList.toggle("red");
};

function myText() {
    var btn = document.querySelector('button');
    if (btn.innerHTML === "ON") {
        btn.innerHTML = "OFF";
    } else {
        btn.innerHTML = "ON";
    }
}
