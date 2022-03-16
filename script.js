let kelimeHavuzu = ["sezgi","vakit","müdür","pamuk","demir"];


let elements;
let a;
let checkChar = 0;
let checkLine = 0;
let deneme1;
let deneme2;
let deneme3;
let deneme4;
let deneme5;
let deneme6;
let soru = "";
let soruArray;
let deneme1array;




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
    console.log(soru);
    break

  }

}



};




for (var i = 0; i < elements.length ; i++) {
    elements[i].addEventListener('click', myFunction, false);
    
}


function enter() {


if (soru==="") {soru = kelimeHavuzu[Math.floor(Math.random() * (kelimeHavuzu.length+ 1) )]};


console.log(soru);


  if (checkChar%5==0) { 
  
    deneme1 = document.getElementById(1).innerHTML + document.getElementById(2).innerHTML + document.getElementById(3).innerHTML + document.getElementById(4).innerHTML + document.getElementById(5).innerHTML ;
    console.log(deneme1)
  }

 soruArray = soru.split("");
console.log(soruArray);
 deneme1array = deneme1.split("");
console.log(deneme1array);

for(i=0;i<5;i++) {if (soruArray[i]===deneme1array[i]){document.getElementById(i+1).style.backgroundColor="green"}}
}

