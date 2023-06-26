/*THIS SCRIPT FILE LET THE USER SET THE THEME OF THIS WEBSITE*/
let changeThemeBtn = document.getElementById("changeThemeBtn");

changeThemeBtn.addEventListener("click", () => {
    console.log("aadd")
    checkTheme();
});

function checkTheme() {
    console.log("aafefwdd")
    changeThemeBtn = document.getElementById("changeThemeBtn");
    if (changeThemeBtn.innerHTML == "☀️") {
        changeIntoXMode("🌙", "black");
    } else if (changeThemeBtn.innerHTML == "🌙") {
        changeIntoXMode("☀️", "white");
    }
}

function changeIntoXMode(theme, x) {
    setLocalStorageTheme(x);
}

function setLocalStorageTheme(theme) {
    console.log(theme)
    localStorage.setItem("theme", theme);
}