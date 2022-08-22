let bdy = document.querySelector("body");
let renklerArr = ["Yellow","Blue","Green","Gray","Orange","Pink"];
let renk = document.querySelector("#renk");
let button = document.querySelector("#renkDegistir");

const renkDegistir = ()=>{
 let randomRenk = Math.floor(Math.random() * renklerArr.length);
 bdy.style.backgroundColor = renklerArr[randomRenk];
 renk.innerText = renklerArr[randomRenk];
 button.innerText = renklerArr[randomRenk];

 


}