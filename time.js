import data from "./data.js";

window.MyLib = {};
MyLib.daily = function getDaily() {
  getTime("daily");
};
MyLib.weekly = function getWeekly() {
  getTime("weekly");
};
MyLib.monthly = function getMonthly() {
  getTime("monthly");
};

function getTime(time) {
  const wrapper = document.querySelector(".wrapper");
  let Current;
  let Previous;
  let Value;
  let sections = "";
  wrapper.innerHTML = "";

  sections += '<section class="report">';
  sections += '<div class="content-large">';
  sections += '<div class="content-sup">';
  sections += '<div class="sup">';
  sections += '<img src="./images/image-jeremy.png" alt="avatar" />';
  sections += "</div>";
  sections += '<div class="inf">';
  sections += '<p class="subtitle">Report for</p>';
  sections += '<h1 class="name">Jeremy Robson</h1>';
  sections += "</div>";
  sections += "</div>";
  sections += '<div class="content-inf">';
  sections += "<p onclick='MyLib.daily()'>Daily</p>";
  sections += "<p onclick='MyLib.weekly()'>Weekly</p>";
  sections += "<p onclick='MyLib.monthly()'>Monthly</p>";
  sections += "</div>";
  sections += "</div>";
  sections += "</section>";

  data.forEach((element) => {
    if (time === "daily") {
      Current = element.timeframes.daily.current;
      Previous = element.timeframes.daily.previous;
      Value = "Day";
    } else if (time === "weekly") {
      Current = element.timeframes.weekly.current;
      Previous = element.timeframes.weekly.previous;
      Value = "Week";
    } else if (time === "monthly") {
      Current = element.timeframes.monthly.current;
      Previous = element.timeframes.monthly.previous;
      Value = "Month";
    }

    sections += '<section class="' + element.title.toLowerCase() + '">';
    sections += '<div class="content">';
    sections += '<div class="content-header">';
    sections += '<p class="title">' + element.title + "</p>";
    sections += '<img src="./images/icon-ellipsis.svg" alt="ellipsis" />';
    sections += "</div>";
    sections += '<div class="content-body">';
    sections += '<h1 class="time">' + Current + "hrs</h1>";
    sections += '<p class="last">Last ' + Value + " - " + Previous + "hrs</p>";
    sections += "</div>";
    sections += "</div>";
    sections += "</section>";
  });

  wrapper.innerHTML = sections;
}

getTime("daily");
