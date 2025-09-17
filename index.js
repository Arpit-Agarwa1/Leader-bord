let first = document.querySelector(".first-name");
let last = document.querySelector(".last-name");
let country = document.querySelector(".country-name");
let score = document.querySelector(".player-score");
let add = document.querySelector(".add");
let tbody = document.querySelector("tbody");

add.addEventListener("click", submitDetails);
add.addEventListener("click", SortingScore);

let data = [];

// submit function for gathering input values

function submitDetails() {
  let obj = {
    name: first.value + " " + last.value,
    country: country.value,
    score: score.value,
  };

  first.value = "";
  last.value = "";
  country.value = "";
  score.value = "";
  console.log(obj);

  data.push(obj);
  displayDetails();
}

function displayDetails() {
  tbody.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    //creating element for name
    let tr = document.createElement("tr");
    let name = document.createElement("td");
    name.innerText = data[i].name;

    //creating element for country
    let country = document.createElement("td");

    country.innerText = data[i].country;

    //creating element for score
    let score = document.createElement("td");

    score.innerText = data[i].score;

    //creating element for modification

    let modify = document.createElement("td");
    let inc = document.createElement("span");
    let dec = document.createElement("span");

    inc.innerText = "+5";
    dec.innerText = "-5";

    inc.addEventListener("click", incFun);
    dec.addEventListener("click", decFun);
    modify.append(inc, dec);

    //creating element for delete
    let deleted = document.createElement("td");
    deleted.innerText = "DELETE";
    deleted.addEventListener("click", eraseTR);
    deleted.addEventListener("click", SortingScore);
    //append child for tr an tbody
    tr.append(name, country, score, modify, deleted);

    tbody.append(tr);
  }
}

function eraseTR(e) {
  e.target.parentElement.remove();
}

function SortingScore() {
  data.sort((a, b) => b.score - a.score);
  console.log(data);
}

function incFun(e) {
  let scoreTarget = e.target.parentElement.previousElementSibling;

  let currentScore = Number(scoreTarget.innerText);
  scoreTarget.innerText = currentScore + 5;
}
function decFun(e) {
  let scoreTarget = e.target.parentElement.previousElementSibling;

  let currentScore = Number(scoreTarget.innerText);
  scoreTarget.innerText = currentScore - 5;
}
