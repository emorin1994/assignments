// "use strict" tells the browser to enforce some rules about what can be in our JavaScript.
"use strict";

let my_name = "Emily";
let your_name = "Ben";
if (my_name === "Emily") {
    renderOutput( "That's me!");
    } else if (your_name === "Ben") {
      renderOutput ("That's Ben")
    }

else {
      renderOutput("I must be someone else")
    }

function helloWorld() {
  renderOutput("Hello World");
}

helloWorld();

function helloName(name) {
  renderOutput("hello " + name);
  
}

helloName( "Ben");

function todaysHours(days_hours) {
  renderOutput( days_hours);
}

//todaysHours("Tuesday: 9a -5p");

hours.forEach(todaysHours);



