const txt = document.querySelector("#txtPerson");
const point = document.querySelector("#pointPerson");
const addButton = document.querySelector("#add");

// ilk önce type name tarafından giriş yapılırsa onun kontrolü yapılıyor
txt.addEventListener("input", (e) => {
  pointPerson.addEventListener("input", (t) => {
    if (
      e.target.value.length > 0 &&
      t.target.value.length > 0 &&
      isNaN(e.target.value)
    ) {
      addButton.removeAttribute("disabled");
    } else {
      addButton.setAttribute("disabled", "disabled");
    }
  });
});

// ilk önce point tarafından giriş yapılırsa onun kontrolü yapılıyor
point.addEventListener("input", (e) => {
  txtPerson.addEventListener("input", (t) => {
    if (
      e.target.value.length > 0 &&
      t.target.value.length > 0 &&
      isNaN(t.target.value)
    ) {
      addButton.removeAttribute("disabled");
    } else {
      addButton.setAttribute("disabled", "disabled");
    }
  });
});

// +Add butona tıkladıktan sonra yapılanlar
addButton.addEventListener("click", (e) => {
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");
  const td4 = document.createElement("td");
  const i1 = document.createElement("i");
  const i2 = document.createElement("i");
  const i3 = document.createElement("i");
  const i4 = document.createElement("i");

  td1.innerHTML = 1;
  td2.innerHTML = txt.value;
  td3.innerHTML = point.value;
  i1.classList.add("fa-solid", "fa-pencil", "edit");
  i2.classList.add("fa-solid", "fa-trash-can", "del");
  i3.classList.add("fa-solid", "fa-check", "ok", "d-none");
  i4.classList.add("fa-solid", "fa-xmark", "cancel", "d-none");

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  td4.appendChild(i1);
  td4.appendChild(i2);
  td4.appendChild(i3);
  td4.appendChild(i4);

  document.querySelector("#person tbody").prepend(tr);

  siralamaFunction();

  deleteIconClickFunction();

  editClickFunction();

  averageCalculate();

  //butona tıklandıktan sonra input değerleri reset button disable çekiliyor.
  txt.value = "";
  point.value = "";
  addButton.setAttribute("disabled", "disabled");
});

// liste sıralamasını yapan fonksiyon
const siralamaFunction = () => {
  const trList = document.querySelectorAll("#person tbody tr");
  for (let i = 0; i < trList.length; i++) {
    trList[i].querySelector("td:nth-child(1)").innerHTML = i + 1;
  }
};

//ortalama hesaplama fonksiyonu
const averageCalculate = () => {
  const liste = document.querySelectorAll("#person tbody tr td:nth-child(3)");
  let average = document.querySelector("#average");
  let totalPoint = 0;
  for (let i = 0; i < liste.length; i++) {
    totalPoint += Number(liste[i].innerHTML);
  }
  if (totalPoint > 0) {
    average.innerHTML = (totalPoint / liste.length).toFixed(2);
  } else average.innerHTML = "";
};

//delete icona tıklayınca satırı siliyor.
const deleteIconClickFunction = () => {
  document.querySelector(".del").addEventListener("click", (e) => {
    const parent = e.target.closest("tr");
    const result = confirm(
      `${
        parent.querySelector("td:nth-child(2)").innerHTML
      } isimli kaydı silmek istediğinize emin misiniz ?`
    );
    if (result) {
      parent.remove();
    }
    siralamaFunction();
    averageCalculate();
  });
};

//edit tıklandığında edit ve delete iconları değişiyor ve input ekleniyor
const editClickFunction = () => {
  document.querySelector(".edit").addEventListener("click", (e) => {
    const parent = e.target.closest("tr");
    const tdChild1 = parent.querySelector("td:nth-child(2)");
    const tdChild2 = parent.querySelector("td:nth-child(3)");
    const checkIcon = parent.querySelector("i:nth-child(3)");
    const markIcon = parent.querySelector("i:nth-child(4)");
    const input1 = document.createElement("input");
    const input2 = document.createElement("input");
    const val1 = tdChild1.innerHTML;
    const val2 = tdChild2.innerHTML;
    tdChild1.innerHTML = "";
    tdChild2.innerHTML = "";
    input1.value = val1;
    input2.value = val2;
    tdChild1.appendChild(input1);
    tdChild2.appendChild(input2);
    e.target.classList.add("d-none");
    checkIcon.classList.remove("d-none");
    const delIcon = parent.querySelector("i:nth-child(2)");
    delIcon.classList.add("d-none");
    markIcon.classList.remove("d-none");

    markIcon.addEventListener("click", () => {
      input1.remove();
      input2.remove();
      tdChild1.innerHTML = val1;
      tdChild2.innerHTML = val2;
      checkIcon.classList.add("d-none");
      markIcon.classList.add("d-none");
      e.target.classList.remove("d-none");
      delIcon.classList.remove("d-none");
    });

    checkIcon.addEventListener("click", () => {
      const input1Val = input1.value;
      const input2Val = input2.value;

      input1.remove();
      input2.remove();

      tdChild1.innerHTML = input1Val;
      tdChild2.innerHTML = input2Val;

      checkIcon.classList.add("d-none");
      markIcon.classList.add("d-none");
      e.target.classList.remove("d-none");
      delIcon.classList.remove("d-none");
      averageCalculate();
    });
  });
};
