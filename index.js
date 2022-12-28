//arrow as button logic

//
//
let arrowButton = document.getElementById("arrow")
let circles = document.getElementById("circles")
let ball = document.getElementById("ball")
let twirl = document.getElementById("twirl");
let description = document.getElementById("description");
console.log(arrowButton)


function appearText() {

    description.style.display = "initial";
    //description.style.overflowX = "none";
    //description.style.overflowY = "auto";
    description.style.overflow = "auto";
    description.style.background = "red";


}

function scroll() {
    arrowButton.style.display = "none";
    circles.style.display = "none";
    ball.style.display = "none";
    twirl.style.opacity = "0.3";
    appearText();

}

function addMultipleEventListener(element, events, handler) {
  events.forEach(e => element.addEventListener(e, handler))
}
addMultipleEventListener(arrowButton, ['click','touchend'], scroll)

