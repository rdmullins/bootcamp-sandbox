/*let boardState = [
    'X','O','X',
    'X','X','O',
    '','','',
];
let winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,8],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
];*/
let container = document.createElement ("container");
container.setAttribute("class", "container text-center");
document.getElementById("app").appendChild(container);
for (var i = 0; i < 3; i++) {
    let row = document.createElement ("div")
    row.setAttribute("class", "row")
    container.appendChild(row)
    for (var j = 0; j < 3; j++) {
    let col1 = document.createElement("div");
    col1.setAttribute("class", "col");
    row.appendChild(col1);
const buttonId = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"];
let btnSomething = buttonId[3*i+j];
let buttonInput1 = document.createElement("button");
buttonInput1.setAttribute("class", "btn btn-primary mb-2");
buttonInput1.innerText = "";
buttonInput1.setAttribute("id", btnSomething);
let parameterString = "buttonClicked(" + buttonId[3*i+j] + ")";
buttonInput1.setAttribute("onclick", parameterString);

col1.appendChild(buttonInput1);
//

function buttonClicked(whichButton) {

    console.log("Button clicked!");
    console.log("You clicked ", whichButton);

var whosTurn = "X";
console.log(btnSomething)
function getGame(pushButton) {
    let btnPush = document.getElementById(pushButton)
    if (btnPush.innerHTML != "") {
        return;
    }
    btnPush.innerHTML = whosTurn;
    if ((document.getElementById ("a1").innerHTML == whosTurn)
     && (document.getElementById ("a2").innerHTML == whosTurn)
      && (document.getElementById("a3").innerHTML == whosTurn)) {
        console.log ("Winner: " + " " + whosTurn);
    } else if ((document.getElementById ("b1").innerHTML == whosTurn)
    && (document.getElementById ("b2").innerHTML == whosTurn)
    && (document.getElementById("b3").innerHTML == whosTurn)) {
      console.log ("Winner" + " " + whosTurn);
   } else if ((document.getElementById ("c1").innerHTML == whosTurn)
   && (document.getElementById ("c2").innerHTML == whosTurn)
   && (document.getElementById("c3").innerHTML == whosTurn)) {
       console.log ("Winner" + " " + whosTurn);
    } else if ((document.getElementById ("a1").innerHTML == whosTurn)
    && (document.getElementById ("b1").innerHTML == whosTurn)
    && (document.getElementById("c1").innerHTML == whosTurn)) {
       console.log ("Winner" + " " + whosTurn);
    } else if ((document.getElementById ("a2").innerHTML == whosTurn)
    && (document.getElementById ("b2").innerHTML == whosTurn)
    && (document.getElementById("c2").innerHTML == whosTurn)) {
       console.log ("Winner" + " " + whosTurn);
    } else if ((document.getElementById ("a3").innerHTML == whosTurn)
    && (document.getElementById ("b3").innerHTML == whosTurn)
    && (document.getElementById("c3").innerHTML == whosTurn)) {
       console.log ("Winner" + " " + whosTurn);
    }else if ((document.getElementById ("a1").innerHTML == whosTurn)
    && (document.getElementById ("b2").innerHTML == whosTurn)
    && (document.getElementById("c3").innerHTML == whosTurn)) {
       console.log ("Winner" + " " + whosTurn);
    } else if ((document.getElementById ("a3").innerHTML == whosTurn)
     && (document.getElementById ("b2").innerHTML == whosTurn) && (document.getElementById("c1").innerHTML == whosTurn)) {
       console.log ("Winner" + " " + whosTurn);
     } else  {
         console.log ("Draw")
     }
// when whos turn is x next action is O
    if (whosTurn == "X") {
        whosTurn = "O"
    } else {
        whosTurn = "X"
    }
//onclick should populate x
   //onclick.document.getElementById("btnSomething").innerHTML = whosTurn;
    let e = document.getElementById("btnSomething");
    e.onclick(console.log("Button click!"));
  }
 }
}
}