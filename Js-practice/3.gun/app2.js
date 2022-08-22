// kullanıcının girdiği yaş ve cinsiyet bilgisine göre askere gidip gidemeyeceğini mesaj olarak bildirin.

function durum() {
  let age = document.querySelector("#age").value;
  let male = document.querySelector("#erkek");
  let female = document.querySelector("#kadin");
  let result = document.querySelector("#result");


  if (age >= 20 && male.checked) {
    result.innerHTML = "Askere Gidebilirsiniz";
    result.classList.add("yesil");
  } else if (age < 20 || female.checked) {
    result.innerHTML = "Askere gitmek için koşullarınız uygun değil";
    result.classList.add("kirmizi");
  }
}

function reset(){
 document.querySelector("#result").innerHTML = "";
 document.querySelector("#result").style.backgroundColor = "aqua";
}