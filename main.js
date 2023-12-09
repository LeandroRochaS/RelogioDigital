

function getHours() {
    let date = new Date();
    let hours = date.getHours();
    let minuts = date.getMinutes();
    let secunds = date.getSeconds();

    if (hours > 12 && hours < 23) {
        document.getElementById("am").innerText = "PM";
    } else {
        document.getElementById("am").innerText = "AM";

    }

    hours = hours < 10 ? `0${hours}` : hours;
    minuts = minuts < 10 ? `0${minuts}` : minuts;
    secunds = secunds < 10 ? `0${secunds}` : secunds;
    hoursComplet = `${hours}:${minuts}`;
    return hoursComplet;

}

function getDateString() {
    let date = new Date();
    date = date.toString()
    let dates = date.split(" ");
    dateInString = `${dates[2]} ${dates[1]}, ${dates[3]}`
    return dateInString;


}




setInterval(() => {
    document.getElementById("time").innerText = getHours();
}, 1000);

setInterval(() => {
    document.getElementById("clock-date").innerText = getDateString();
}, 1000);



