
let myImage = document.querySelector('img');
//<img src="images/firefox-icon.png" alt="The Firefox logo: a flaming fox surrounding the Earth.">

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    //mySrc = "images/firefox-icon.png"

    if (mySrc === "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/firefox2.png");
    } else {
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
}

let myButton = document.querySelector("button") // <button>Change User</button>
let myHeading = document.querySelector("h1") // <h1>Mozilla is cool</h1>


function setUserName() {
    let myName = prompt("Please enter your name.");
    if (! myName) {
        setUserName();
    }
    localStorage.setItem("name", myName)

    myHeading.textContent = "Mozilla is cool, " + myName;
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla is cool, " + storedName;
}

myButton.onclick = function() {
    setUserName();
}