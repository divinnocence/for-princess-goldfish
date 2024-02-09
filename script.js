const yes = document.querySelector(".yes")
const no = document.querySelector(".no")
const que = document.querySelector(".que")
const huggif = document.querySelector(".huggif")
var div = document.getElementById("x");

var img = document.createElement("img");
img.src = "kissgif.gif";


let allstringsforno =
  ["Are you sure?",
    "Are you really sure?",
    "Are you really really sure?",
    "Pakka?",
    "Pakku?",
    "100% Pakku?",
    "110% Pakku?",
    "Mai jaa raha hu :(",
    "Yaar aise karoge?",
    "Not fair :((",
    "Jaao aap",
    "Hmph no kissu for you >:(",
    "Click no again I dare you <3"
  ];
let index = 0;


function FunctionToExecute() {
  no.innerText = allstringsforno[index];
  index = (index + 1);
  if (index == 14) {
    no.remove();
    yes.setAttribute("style", "font-size: 50px; left: 41%;");
  }
}


yes.addEventListener("click", function() {
  que.textContent = "Muahhhhh I love you so much princess <33";
  yes.remove();
  no.remove();
  huggif.remove();
  div.appendChild(img);
  div.setAttribute("style", "text-align:center");
});
