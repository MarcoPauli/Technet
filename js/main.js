//MAIN SCRIPT FILE
checkLocalStorageTheme(document.body);
let backgroundProcess = setInterval(function checkLocalStorage() {
    checkLanguage(document.body);
    checkLocalStorageTheme(document.body);
}, 200);

function checkLanguage(dom) {
    let localLanguage = localStorage.getItem("language");
    if (localLanguage === "EN") {
        dom.innerHTML = localStorage.getItem("domLanguage");
    }
}

function checkLocalStorageTheme(dom) {
    let theme = localStorage.getItem("theme");
    if (theme === "black") {
        console.log(true)
        dom.style.backgroundColor = "white";
        dom.style.color = "black";
        changeThemeBtn.innerHTML = "🌙";
        changeThemeBtn.style.backgroundColor = "black";
    } else if (theme === "white") {
        console.log(true)
        dom.style.backgroundColor = "rgb(50, 50, 50)";
        dom.style.color = "white";
        changeThemeBtn.innerHTML = "☀️";
        changeThemeBtn.style.backgroundColor = "white";
    }
}

//Danger: Language still doesn´t work for localstorage