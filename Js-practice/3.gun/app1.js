//kullanıcıdan alınan yaş ve ürün fiyat bilgilerine göre 65 yaştan büyük olanlara %50 indirim diğerlerine %10 indirim uygulayarak bunu mesaj ile gösterelim.

/* function calculate(){
 let age = document.querySelector("#age").value;
 let price = document.querySelector("#price").value;
 //let discount;

 let discount = age > 065 ? price * 0.5 : price * 0.9;
 
 document.querySelector("#result").innerHTML = discount;
} */

document.querySelector("#calculate").addEventListener("click",()=>{
 let age = document.querySelector("#age").value;
 let price = document.querySelector("#price").value;
 //let discount;

 let discount = age > 065 ? price * 0.5 : price * 0.9;

 document.querySelector("#result").innerHTML = discount;
});

