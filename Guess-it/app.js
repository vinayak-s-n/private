var min = 0;
var max = 2000;
var random = 0;
var myelement = document.getElementById("myOut");
var highButton = document.getElementById("high");
var lowButton = document.getElementById("low");
var add = document.getElementById("add");

function randomIntFromInterval() {
  // min and max included
  random = Math.floor(Math.random() * (max - min + 1) + min);
  document.querySelector(".num").innerHTML = `${random}`;
  showFunc();
  add.style.display = "none";
}
add.addEventListener("click", randomIntFromInterval);

function minimum() {
  max = random;

  randomIntFromInterval();
}
lowButton.addEventListener("click", minimum);

function maximum() {
  min = random;

  randomIntFromInterval();
}
highButton.addEventListener("click", maximum);

let gameComp = document.querySelectorAll(".game");

// To hide all the game comps
for (all of gameComp) {
  all.style.display = "none";
}

// To show all game comps
const showFunc = () => {
  for (all of gameComp) {
    all.style.display = "block";
  }
};

let end = document.querySelector("#yes");

end.addEventListener("click", () => {
  for (all of gameComp) {
    all.style.display = "none";
  }

  myelement.innerHTML = `
  <h5>Told You!!!</h5>
  <div class="num">${random}</div> 
        <button id="play-again">Play Again</button>
  `;
  let playAgain = document.querySelector("#play-again");
  playAgain.addEventListener("click", () => {
    window.location.reload();
  });
});
