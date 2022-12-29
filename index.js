//arrow as button logic

//
//
let arrowButton = document.getElementById("arrow")
let circles = document.getElementById("circles")
let ball = document.getElementById("ball")
let twirl = document.getElementById("twirl");
let description = document.getElementById("shortDescription");
let moreButton = document.getElementById("mas")
console.log(arrowButton)


function appearText() {

    description.style.display = "initial";
    //description.style.overflowX = "none";
    //description.style.overflowY = "auto";
    description.style.overflow = "auto";
    description.style.color = "white";
    description.style.background = "black";


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

langState = "english"

function setLang(lang) {
    langState = lang;
    console.log("INSETLANG")
    console.log(lang);
    console.log(texts[lang])
    description.innerHTML = texts[lang].shortDescription

}
//window.onload = setLang(langState)


let spanishButton = document.getElementById("esp")
let englishButton = document.getElementById("eng")

function setLangAndReload(event, lang) {
    console.log("ENRELOAD");
    console.log(lang)
    setLang(lang)
    var refresh = window.localStorage.getItem('refresh');
    console.log(refresh);
    if (refresh===null){
        window.location.reload();
        window.localStorage.setItem('refresh', "1");
    }

}

function showLongerDescription(){
    console.log("Showing longer asdasd ")
    console.log(texts[langState].longDescription)
    let description = document.getElementById("shortDescription");
    description.innerHTML = texts[langState].longDescription
        console.log(description)
}
spanishButton.addEventListener("click", function (e){setLangAndReload(e,"spanish")})
englishButton.addEventListener("click", function(e){setLangAndReload(e,"english")} )
moreButton.addEventListener("click",function(e){showLongerDescription()})


