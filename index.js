let addBtn = document.querySelector(".add");
let firstName = document.querySelector(".first-name");
let lastName = document.querySelector(".last-name");
let countryName = document.querySelector(".country-name");
let score = document.querySelector(".player-score");
let table = document.querySelector(".tab");

// variable section

let data = [];

//xxxxxxxxx

//adding addevent listner
addBtn.addEventListener("click", submitDetails);
addBtn.addEventListener("click", SortingScore);

//creating function for saving the details
function submitDetails() {
  const obj = {
    // fullName: firstName.value + " " + lastName.value,
    firstName: firstName.value,
    lastName: lastName.value,
    countryName: countryName.value,
    score: Number(score.value),
    fullname: function () {
      return this.firstName + " " + this.lastName;
    },
  };

  //pushing obj in data

  data.push(obj);

  firstName.value = "";
  lastName.value = "";
  countryName.value = "";
  score.value = "";

  console.log(data);

  showData(obj);
}

// function fullname(first, last) {
//   let full = first + " " + last;

//   return full;
// }

function showData(obj) {
  let tr = document.createElement("tr");

  const name = document.createElement("td");
  name.innerText = obj.fullname();

  const country = document.createElement("td");
  country.innerText = obj.countryName;

  let score = document.createElement("td");
  score.innerText = obj.score;
  score.classList.add("score");

  //   score.addEventListener("click", SortingScore); ///

  let modify = document.createElement("td");
  let inc = document.createElement("span");
  let dec = document.createElement("span");

  inc.addEventListener("click", incFun);
  dec.addEventListener("click", decFun);

  inc.innerText = "+5";
  dec.innerText = "-5";

  let deleted = document.createElement("td");
  deleted.innerText = "delete";

  deleted.addEventListener("click", Erase);

  deleted.addEventListener("click", SortingScore);

  tr.append(name, country, score, modify, deleted);
  modify.append(inc, dec);

  table.appendChild(tr);
}

function Erase(e) {
  e.target.parentElement.remove();
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

function SortingScore() {
  data.sort((a, b) => b.score - a.score);
  console.log(data);
}
