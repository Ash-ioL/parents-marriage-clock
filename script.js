function changePage() {
    let topButton = document.getElementById("top-arrow-container");
    let bottomButton = document.getElementById("bottom-arrow-container");
    let clockWindow = document.getElementById("clock-container");

    topButton.addEventListener("click", (event) => {
        clockWindow.classList.add("active");
    });
    bottomButton.addEventListener("click", (event) => {
        clockWindow.classList.remove("active");
    });
}

function updateTime(metric, time) {
    let element = document.getElementById(metric);
    element.textContent = time;
}

const originalDate = 1279685700;
const originalMetrics = {
    year: 2010,
    month: 6,
    day: 21,
    hour: 9,
    minute: 45,
    second: 0
}

let lastSeenMetrics = {
    years: 2010,
    months: 6,
    days: 21,
    hours: 9,
    minutes: 45,
    seconds: 0
}

function clock() {
    let now = Math.floor(Date.now()/1000);
    now -= originalDate;
    let currentMetrics = {
        seconds : now,
        minutes : Math.floor((now/60)*100)/100,
        hours : Math.floor((now/3600)*1000)/1000,
        days : Math.floor((now/86400)*10000)/10000,
        months : Math.floor((now/2629800)*100000)/100000,
        years : Math.floor((now/31557600)*1000000)/1000000 // 365.25 days
    }

    for (const key in currentMetrics) {
        if (currentMetrics[key] != lastSeenMetrics[key]) {
            lastSeenMetrics[key] = currentMetrics[key];
            updateTime(key, currentMetrics[key]);
        }
    }
}

setInterval(clock, 100);
changePage();