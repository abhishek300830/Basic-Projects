let sec = document.getElementById("sec");
let min = document.getElementById("min");
let hours = document.getElementById("hours");
let ampm = document.getElementById("ampm");

const datefun = () => {
  var time = new Date();
  console.log("time", time);
  var s = time.getSeconds();
  var m = time.getMinutes();
  var h = time.getHours();
  if (h < 12) {
    ampm.innerText = "AM";
  }
  if (h >= 12) {
    ampm.innerText = "PM";
    h = h - 12;
  }
  sec.innerText = s;
  min.innerHTML = m;
  hours.innerText = h;
  setTimeout(() => {
    datefun();
  }, 1000);
};
datefun();
