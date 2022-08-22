document.addEventListener("DOMContentLoaded", init);

function init() {
    changeSelected("nav-" + window.location.href.split("/")[3]);

    addSw();

    initBourdon();
}

let collapseOptions = function () {
    let chevron = qs("#chevron");
    let style = qs("#options").style.display;
    if (style == "none") {
        qs("#options").style.display = "flex"
        chevron.classList.remove("fa-chevron-down");
        chevron.classList.add("fa-chevron-up");
    } else {
        qs("#options").style.display = "none"
        chevron.classList.remove("fa-chevron-up");
        chevron.classList.add("fa-chevron-down");
    }
}

let changeSelected = function (sel) {
    log(sel)
    let items = qs("#navList").getElementsByTagName("li");

    for (let i = 0; i <= 3; i++) {
        items[i].classList.remove("selected");
        if (items[i].id == sel) {
            items[i].classList.add("selected");
        }
    }

    log(items)
}

let addSw = () => {
    console.log("adding serviceworkes");
    if('serviceWorker' in navigator) {
        navigator.serviceWorker.register("/sw.js").then(function(res) {
            console.log("Successfully registered ServiceWorker with scope: " + res.scope);
        }).catch(function(err){
            console.log("Error Registering service worker: " + err);
        })
    } else {
        console.log("Something's wrong")
    }   
}

