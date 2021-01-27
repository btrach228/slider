let btn1 = document.querySelector(".btn1");
let item1 = document.querySelector(".item1");

let btn2 = document.querySelector(".btn2");
let item2 = document.querySelector(".item2");

let btn3 = document.querySelector(".btn3");
let item3 = document.querySelector(".item3");

let list = document.querySelector(".list");

btn1.onclick = () => {
  item1.style.zIndex = "999";
  item2.style.zIndex = "0";
  item3.style.zIndex = "0";

  list.list.transition = "1s";
};

btn2.onclick = () => {
  item1.style.zIndex = "0";
  item2.style.zIndex = "999";
  item3.style.zIndex = "0";

  list.style.transition = "1s";
};

btn3.onclick = () => {
  item1.style.zIndex = "0";
  item2.style.zIndex = "0";
  item3.style.zIndex = "999";

  list.style.transition = "1s";
};
