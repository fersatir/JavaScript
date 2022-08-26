const elHour = document.querySelector("#clock li:nth-child(1)");
const elMinute = document.querySelector("#clock li:nth-child(3)");
const elSecond = document.querySelector("#clock li:nth-child(2)");

const tick = ()=>{
  const date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  elHour.innerHTML = hour;
  elMinute.innerHTML = minute;
  

  hour = String(hour).length == 1 ? "0" + hour : hour;
  minute = String(minute).length == 1 ? "0" + minute : minute;

  elHour.innerText = hour;
  elMinute.innerText = minute;

  elSecond.classList.toggle("hidden");

  /* elSecond.style.opacity =
    elSecond.style.opacity == 1
      ? (elSecond.style.opacity = 0)
      : (elSecond.style.opacity = 1); */
};

setInterval(tick, 1000);