document.querySelector("#frmLogin").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  try {
    if (!isEmail(email)) throw "Lütfen Geçerli Email Adresi Giriniz";

    if (!password) throw "Lütfen Geçerli Parola Giriniz";

    //e.target.submit();
  } catch (error) {
    alert(error);
  }


});

const isEmail = (email) => {

 const regex = /\S+@\S+\.\S{2,5}$/;
 // reqular expression -> https://regexr.com/

 return regex.test(email);
 
};
