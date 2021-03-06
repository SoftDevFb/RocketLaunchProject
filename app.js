/*
    Developer:  Frankie Barrios
    Date:       11/09/2018
    Purpose:    Rocket Launch Project
*/

var ourRequest = new XMLHttpRequest();
var launchInfoRow = document.getElementById("launchRow");
var counterRow = document.getElementById("timerRow");
var bannerLaunch = document.getElementById("underTitle");
var btn1 = document.getElementById("allBtn");
var btn2 = document.getElementById("falconBtn");
var btn3 = document.getElementById("arianeBtn");
var btn4 = document.getElementById("launcherOneBtn");
var x;

//Get next 5 launches function linking to correct button
btn1.addEventListener("click", function() {
  launchInfoRow.innerHTML = "";
  bannerLaunch.innerHTML = "";
  ourRequest.open("get", "https://launchlibrary.net/1.4/launch?next=5?");
  ourRequest.onload = function() {
    allData = JSON.parse(ourRequest.responseText);
    renderHTML(allData);
  };
  ourRequest.send();
});

//Get next 5 falcon launches function linking to correct button
btn2.addEventListener("click", function() {
  launchInfoRow.innerHTML = "";
  bannerLaunch.innerHTML = "";
  ourRequest.open(
    "get",
    "https://launchlibrary.net/1.4/launch?next=5?&name=falcon"
  );
  ourRequest.onload = function() {
    falconData = JSON.parse(ourRequest.responseText);
    renderHTML(falconData);
  };
  ourRequest.send();
});

//Get next 5 ariane launches function linking to correct button
btn3.addEventListener("click", function() {
  launchInfoRow.innerHTML = "";
  bannerLaunch.innerHTML = "";
  ourRequest.open(
    "get",
    "https://launchlibrary.net/1.4/launch?next=5?&name=ariane"
  );
  ourRequest.onload = function() {
    arianeData = JSON.parse(ourRequest.responseText);
    renderHTML(arianeData);
  };
  ourRequest.send();
});

//Get next 5 launcherone launches function linking to correct button
btn4.addEventListener("click", function() {
  launchInfoRow.innerHTML = "";
  bannerLaunch.innerHTML = "";
  ourRequest.open(
    "get",
    "https://launchlibrary.net/1.4/launch?next=5?&name=launcherone"
  );
  ourRequest.onload = function() {
    launcherOneData = JSON.parse(ourRequest.responseText);
    renderHTML(launcherOneData);
  };
  ourRequest.send();
});


//Send our data to the html page
function renderHTML(data) {
  var htmlString = "";

  for (i = 0; i < data.launches.length; i++) {
    htmlString += "<p>" + data.launches[i].net + data.launches[i].name + "</p>";
  } //end of for
  //Places "Next Launch:"" under Page Header
  launchInfoRow.insertAdjacentHTML("beforeend", htmlString);

  //Countdown Timer
  bannerLaunch.insertAdjacentHTML("beforeend", 
  "<p>" + "Next Launch: " + data.launches[0].net + data.launches[0].name + "</p>");
  
  //Countdown Timer
    clearInterval(x);
    x = setInterval(function() {
    var countDownDate = new Date(data.launches[0].net).getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById(
      "timerRow"
    ).innerHTML = `<b>Countdown to Launch: </b> ${days} Days: ${hours} Hours: ${minutes} Min: ${seconds} Seconds:`;

    //clearInterval(x);
  }, 1000);
}

