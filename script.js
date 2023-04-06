//event listener
let help = document.getElementById("help");
if (help){
    help.addEventListener("click", function() {
        document.getElementById("help_text").innerText = "Please be constructive";
    });
}

//color changer
let night = document.getElementById("night");
night.addEventListener("click", function() {
    nightTheme();
});

let sky = document.getElementById("sky");
sky.addEventListener("click", function() {
    skyTheme();
});

let land = document.getElementById("land");
land.addEventListener("click", function() {
    landTheme();
});

/*B9E9FC/black (sky), 285430/#cfe2b1 (land), 023047/white (night) */
function nightTheme(){
    let color = document.querySelector("html"); 
    let nav = document.querySelectorAll("#page_nav > a");
    let link = document.querySelectorAll("li > a");
    let git = document.querySelector("p > a");
    if (git) {git.style.setProperty("color", "white")};
    color.style.setProperty("background-color", "#023047");
    color.style.setProperty("color", "white");
    nav.forEach(function(item){
        item.style.setProperty("color", "white");
    });
    if (link){
        link.forEach(function(item){
            item.style.setProperty("color", "white");
        });
    }
}


function skyTheme(){
    let color = document.querySelector("html"); 
    color.style.setProperty("background-color", "#B9E9FC");
    color.style.setProperty("color", "black");
}

function landTheme(){
    let color = document.querySelector("html"); 
    let nav = document.querySelectorAll("#page_nav > a");
    let link = document.querySelectorAll("li > a", "p > a");
    let git = document.querySelector("p > a");
    if (git) {git.style.setProperty("color", "white");}
    
    color.style.setProperty("background-color", "#285430");
    color.style.setProperty("color", "#cfe2b1");
    nav.forEach(function(item){
        item.style.setProperty("color", "white");
    });
    if (link){
        link.forEach(function(item){
            item.style.setProperty("color", "white");
        });
    }
}

//alert 
let fact = document.querySelector("#fact");
if (fact){
    fact.addEventListener("click", function(){
        window.alert("Notification: Rudolph the red nosed reindeer...is actually a girl?");
    });
}


//conditional - Are you older than me
let old = document.getElementById("old");
if (old){
    old.addEventListener("click", function(){
        ageCompare();
    });
}

function ageCompare() {
    let myAge = 19;
    let yourAge = document.getElementById("age").value;

    if (myAge > yourAge){
        document.getElementById("answer").innerText = "I am older";
    } else if (myAge < yourAge) {
        document.getElementById("answer").innerText = "You are older";
    } else {
        document.getElementById("answer").innerText = "We are the same!";
    }
}