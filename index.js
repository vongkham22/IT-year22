let refreshButton = document.getElementById("refreshButton");

refreshButton.addEventListener("click", function() {
let randomNumber1 = Math.floor(Math.random() * 16) + 1;

let randomDiceImage = "dice" + randomNumber1 + ".jpg"; 

let randomImageSource = "images/" + randomDiceImage;

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


let imageText = document.querySelector("p");
imageText.innerText =  randomDiceImage;

if (randomDiceImage === "dice16.jpg") {
    let header = document.querySelector("p");
    header.innerText = "Phudthasone";
  }
  else if (randomDiceImage === "dice15.jpg") {
    let header = document.querySelector("p");
    header.innerText = "Phadthaya";
  }
  else if (randomDiceImage === "dice14.jpg") {
    let header = document.querySelector("p");
    header.innerText = "Khuan";
  }
  else if (randomDiceImage === "dice13.jpg") {
    let header = document.querySelector("p");
    header.innerText = "Vorlanoud";
  }
  else if (randomDiceImage === "dice12.jpg") {
    let header = document.querySelector("p");
    header.innerText = "Onta";
  }
  else if (randomDiceImage === "dice11.jpg") {
    let header = document.querySelector("p");
    header.innerText = "Nouynee";
  }
  else if (randomDiceImage === "dice10.jpg") {
    let header = document.querySelector("p");
    header.innerText = "Dommai";
  }
  else if (randomDiceImage === "dice9.jpg") {
    let header = document.querySelector("p");
    header.innerText = "Unheuon";
  }
  else if (randomDiceImage === "dice8.jpg") {
    let header = document.querySelector("p");
    header.innerText = "Nik";
  }
  else if (randomDiceImage === "dice7.jpg") {
    let header = document.querySelector("p");
    header.innerText = "Sidpasoed";
  }
  else if (randomDiceImage === "dice6.jpg") {
    let header = document.querySelector("p");
    header.innerText = "Tinoy";
  }
  else if (randomDiceImage === "dice5.jpg") {
    let header = document.querySelector("p");
    header.innerText = "Vanhmany";
  }
  else if (randomDiceImage === "dice4.jpg") {
    let header = document.querySelector("p");
    header.innerText = "Vonthasin";
  }
  else if (randomDiceImage === "dice3.jpg") {
    let header = document.querySelector("p");
    header.innerText = "Vongkham";
  }
  else if (randomDiceImage === "dice2.jpg") {
    let header = document.querySelector("p");
    header.innerText = "Mr Zam";
  }
  else if (randomDiceImage === "dice1.jpg") {
    let header = document.querySelector("p");
    header.innerText = "Pinkeo";
  }
  
});