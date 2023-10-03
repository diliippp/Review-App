const reviews = [
  {
    id: 1,
    name: "Susan Smith",
    job: "Web developer",
    img: "https://images.pexels.com/photos/3714743/pexels-photo-3714743.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "Susun Smith is a web developer. Lorem ipsum dolor sit, amet consectetur adipisicing eliyt doing fugiat doloremque est vero, quidem minima ratione quod at",
  },
  {
    id: 2,
    name: "Anna Johnson",
    job: "Ux designer",
    img: "https://images.pexels.com/photos/6203795/pexels-photo-6203795.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "I am a developer. culpa aspernatur recusandae consectetur aut dolorum. Harum. ratione quo quisquam odit error veritatis eius explicabo quia",
  },
  {
    id: 3,
    name: "John Boggle",
    job: "Data Scientist",
    img: "https://images.pexels.com/photos/1586996/pexels-photo-1586996.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "My name is John! reprehenderit odio repellendus voluptatibus sunt voluptatum. Necessitatibus illo quae repellat quo unde debitis! Consequatur",
  },
  {
    id: 4,
    name: "Harry Lase",
    job: "Blockchain Developer",
    img: "https://images.pexels.com/photos/6801867/pexels-photo-6801867.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "Blockchain development is an interesting field to work on! Repellendus explicabo nostrum soluta quibusdam modi accusantium.",
  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");
const randomBtn = document.getElementById("randomBtn");

const container = document.getElementById("container");

let currentItem = 1;

window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

leftBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = 3;
  }
  showPerson();
});

rightBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

randomBtn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandom()];
  }
  container.style.backgroundColor = hexColor;
  console.log(hexColor);
});

function getRandom() {
  return Math.floor(Math.random() * hex.length);
}
