let currentItem;
let time = 0;
let timer;
let bourdonItems;
let paused = false;
let results = [];
class BourdonResult {
    constructor(mistakes, blanks, corrections, time) {
        this.mistakes = mistakes;
        this.blanks = blanks;
        this.corrections = corrections;
        this.time = time;
    }
}
let initBourdon = function () {
    // qs("#bourdon25").addEventListener("click", setConfig);
    // qs("#bourdon33").addEventListener("click", setConfig);
    // qs("#bourdon50").addEventListener("click", setConfig);
    qsa("#bourdon25, #bourdon33, #bourdon50").forEach(item => item.addEventListener("click", setConfig));

    qs("#dropdown").addEventListener('click', collapseOptions);
    qs("#start").addEventListener('click', startNext);
    qs("#pause").addEventListener('click', pause);
    qs("#clear").addEventListener('click', clear);
    qs("#next").addEventListener('click', next);
    qs("#restart").addEventListener('click', restart);

    qs("#finish").addEventListener('click', finish);


    qs(".doAction").addEventListener('click', function () {
        window.location.reload()
    });
    qs(".cancelAction").addEventListener('click', restart);

    generateBourdon();
}

let finish = function () {
    qsa(".bourdon-item").forEach(element => {
        results.push(new BourdonResult(element.childNodes[1].value, element.childNodes[2].value, element.childNodes[3].value, element.childNodes[6].value));
    });
    log(results);
}
let restart = function () {
    qs(".dialog-ovelay").classList.toggle('dialog-hidden');
}
let next = function () {
    clearInterval(timer);
    time = 0;
    if (currentItem < bourdonItems.length) {
        currentItem++;
        highlightActive();
        setText(qs("#pause"), "Start");
        paused = true;
    }
}
let clear = function () {
    clearInterval(timer);
    time = 0;
    stopwatch();
    log(bourdonItems);
    currentItem -= 1;
    highlightActive();

}
let generateBourdon = function () {
    qs("#bourdon-items").innerHTML = "";
    let amount = parseInt(qs(".btn-active").innerHTML);
    let item = '<div class="bourdon-item"><em>';
    let item2 = '</em><input type="text" class="bourdon-field" placeholder="fouten"/><input type="text" class="bourdon-field" placeholder="weglatingen"/><input type="text" class="bourdon-field" placeholder="zelfcorrectie"/><input type="text" class="bourdon-field" value="00:00:00" disabled/><i class="clear fas fa-times"></i><input ="msTime" type="hidden" ></div>'
    for (let i = 1; i <= amount; i++) {
        qs("#bourdon-items").innerHTML += item + i + item2;
    }
    bourdonItems = qsa(".bourdon-item");
    currentItem = -1;
}
let startNext = function (e) {
    e.preventDefault();
    if (currentItem < bourdonItems.length) {
        currentItem += 1
    }
    paused = false;
    changeButtonState();
    time = 0;
    clearInterval(timer);
    setText(qs("#pause"), "Pauze");
    if (currentItem < bourdonItems.length) {
        timer = setInterval("stopwatch()", 10);
        highlightActive();
    }
    log(currentItem);
}
let setConfig = function (e) {
    qs(".btn-active").classList.toggle("btn-active");
    e.target.classList.toggle("btn-active");
    generateBourdon();
}
let stopwatch = function () {
    log(time);
    if (currentItem == bourdonItems.length) {
        bourdonItems[currentItem - 1].childNodes[4].value = beautifyTime(time);
        bourdonItems[currentItem - 1].childNodes[6].value = time;
        setText(qs("#pause"), "Start");
        paused = true;
    } else {
        bourdonItems[currentItem].childNodes[4].value = beautifyTime(time);
        bourdonItems[currentItem].childNodes[6].value = time;
    }
    time++;
}
let matchTimeFormat = function (value) {
    if (value < 10) {
        return ("0" + value);
    } else {
        return value;
    }
}
let beautifyTime = function () {
    let m = Math.floor(time / 6000);
    let s = Math.floor(time / 100 % 60);
    let ms = Math.floor(time % 100);

    return (matchTimeFormat(m) + ":" + matchTimeFormat(s) + ":" + matchTimeFormat(ms));
}
let highlightActive = function () {
    qsa(".highlight").forEach(element => {
        element.classList.toggle("highlight")
    })
    bourdonItems[currentItem].classList.toggle("highlight");
}
let pause = function () {
    let buttonPause = qs("#pause");
    if (!paused) {
        clearInterval(timer);
        paused = true;
        setText(buttonPause, "Start");
    } else {
        if (currentItem < bourdonItems.length) {
            timer = setInterval("stopwatch()", 10);
        }
        paused = false;
        setText(buttonPause, "Pauze");
    };
}
let setText = function (object, text) {
    object.innerText = text;
}
let changeButtonState = function () {
    qsa(".configButton").forEach(element => {
        element.disabled = true;
    });
}