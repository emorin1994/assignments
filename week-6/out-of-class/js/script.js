"use strict";

function renderOutput(output) {
    let output_element = document.getElementById("output");
    output_element.innerHTML += "<div>" + output + "</div>"
}
function dailyHours(hours) 
 hours = [
    "Monday: 9a - 9p",
    "Tuesday: 9a - 9p",
    "Wednesday: 9a - 9p",
    "Thursday: 9a - 9p",
    "Friday: 9a - 5p",
    "Saturday: 9a - 5p",
    "Sunday: closed"
]

let original_name = 
    "Monday: 9a - 9p",
    "Tuesday: 9a - 9p",
    "Wednesday: 9a - 9p",
    "Thursday: 9a - 9p",
    "Friday: 9a - 5p",
    "Saturday: 9a - 5p",
    "Sunday: closed";
let parts_of_name = original_string.split(":");
console.log(parts_of_string[0], parts_of_string[1]);
if (dailyHours[1] == "closed") {
    renderOutput ("On " + dailyHours[0] + " the library is " + dailyHours[1]);
 }
 else {
  renderOutput ("On " + dailyHours[0] + " the hours are " + dailyHours[1]);
  }