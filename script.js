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
let number = Math.floor(Math.random() * (kelimeHavuzu.length) )


let liner;
console.log(number);

{soru = kelimeHavuzu[number]};


console.log(soru);




 elements = document.getElementsByClassName("key");

var myFunction = function() {
    var attribute = this.getAttribute("id")
    console.log(attribute);

for (let a = 1; a <31; a++) {


if
 (document.getElementById(a).innerText === "" && (checkChar<5&&checkLine==0||checkChar<10&&checkLine==1||checkChar<15&&checkLine==2||checkChar<20&&checkLine==3||checkChar<25&&checkLine==4||checkChar<30&&checkLine==5))
  
  {document.getElementById(a).innerHTML = attribute;
    
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


  
  liner = checkChar - 4;
  console.log(liner);
  checkLine = checkLine + 1;


  if (checkChar%5==0) { 
    
    deneme1 = document.getElementById(checkChar-4).innerHTML + document.getElementById(checkChar-3).innerHTML + document.getElementById(checkChar-2).innerHTML + document.getElementById(checkChar-1).innerHTML + document.getElementById(checkChar).innerHTML ;
    console.log(deneme1)
  }

 soruArray = soru.split("");
console.log(soruArray);
 deneme1array = deneme1.split("");
console.log(deneme1array);


for(i=0;i<5;i++) {if (soruArray.includes(deneme1array[i])){document.getElementById(i+(checkChar-4)).style.backgroundColor="#EDED31";console.log(i)}


else  (document.getElementById(i+(checkChar-4)).style.backgroundColor="#B5B1B2")

}

;



for(i=0;i<5;i++) {if (soruArray[i]===deneme1array[i]){document.getElementById(i+(checkChar-4)).style.backgroundColor="#86CD2A"}}
}

