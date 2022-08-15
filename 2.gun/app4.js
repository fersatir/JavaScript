//Textboxlara girilen ad ve meslek değerlerine göre mesaj yazdırın.
function gonder(){
   let isim = document.querySelector("#ad").value;
   let meslek = document.querySelector("#meslek").value;
   let mesaj = document.querySelector("#mesaj");
   mesaj.style.display= "block";
//    mesaj.classList.add("d-block");
   mesaj.innerText = `Sayın ${meslek} ${isim} hoşgeldiniz.`
}
function sil(){
    mesaj.innerText="";
    // mesaj.style.display="none";
    mesaj.classList.add("d-none");
}