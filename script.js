let kelimeHavuzu = ["sezgi","vakit","müdür","pamuk","demir"];

console.log("Merhaba");

let elements;
let a;
let checkChar = 0;
let checkLine = 0;


console.log(document.getElementById(1).innerHTML )

function write() {

  alert("Lan!")

  
}

 elements = document.getElementsByClassName("key");

var myFunction = function() {
    var attribute = this.getAttribute("id")
    console.log(attribute);

for (let a = 1; a <31; a++) {


if
 (document.getElementById(a).innerText === "" && checkChar<5)
  
  {document.getElementById(a).innerText = attribute;
    
    checkChar = checkChar+1;
    console.log(checkChar);
    break

  }

}
  
};




for (var i = 0; i < elements.length ; i++) {
    elements[i].addEventListener('click', myFunction, false);
    
}
