

const hourTxt = document.querySelector(".hour-txt");
const minutTxt = document.querySelector(".minute-txt");
const secondTxt = document.querySelector(".second-txt");
const ampmTxt = document.querySelector(".ampm");

function timeFunc() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  hourTxt.innerText = h;
  minutTxt.innerText = m;
  secondTxt.innerText = s;
  ampmTxt.innerText = ampm;
  setTimeout(() => {
    timeFunc();
  }, 1000);
}
timeFunc();
