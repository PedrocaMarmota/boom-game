const buttonInitGame = document.querySelector(".btn-init-game");
const buttonEasy = document.querySelector("#facil");
const buttonMedium = document.querySelector("#medio");
const buttonHard = document.querySelector("#dificil");
const labelEasy = document.querySelector("#labelFacil");
const labelMedium = document.querySelector("#labelMedio");
const labelDificil = document.querySelector("#labelDificil");

buttonEasy.addEventListener('change', function () {
  if (this.checked) {
    toggleAnimationButtonsON(labelEasy);
    if (buttonMedium.checked) {
      buttonMedium.checked = "false";
      toggleAnimationButtonsOFF(labelMedium);
    }
    if (buttonHard.checked) {
      buttonHard.checked = "false";
      toggleAnimationButtonsOFF(labelDificil);
    }
  }
  else {
    toggleAnimationButtonsOFF(labelEasy);
  }
})
buttonMedium.addEventListener('change', function () {
  if (this.checked) {
    toggleAnimationButtonsON(labelMedium);
    if (buttonEasy.checked) {
      buttonEasy.checked = false;
      toggleAnimationButtonsOFF(labelEasy);
    }
    if (buttonHard.checked) {
      buttonHard.checked = false;
      toggleAnimationButtonsOFF(labelDificil);
    }
  }
  else {
    toggleAnimationButtonsOFF(labelMedium);
  }
})
buttonHard.addEventListener('change', function () {
  if (this.checked) {
    toggleAnimationButtonsON(labelDificil);
    if (buttonMedium.checked) {
      buttonMedium.checked = false;
      toggleAnimationButtonsOFF(labelMedium);
    }
    if (buttonEasy.checked) {
      buttonEasy.checked = false;
      toggleAnimationButtonsOFF(labelEasy);
    }
  }
})

buttonInitGame.addEventListener("click", function () {
  buttonInitGame.remove();
  initGame();
});



function initGame() {
  setInterval(createBalloon, 1000);
}

const balloonsContainer = document.querySelector(".container-balloons");

function createBalloon() {
  const elementImg = document.createElement("img");

  elementImg.setAttribute("src", "./assets/baloon.png");
  elementImg.setAttribute("class", "balloon");

  const positionLeft = Math.round(Math.random() * 90);
  const positionTop = Math.round(Math.random() * 90);

  elementImg.style.left = positionLeft + "vw";
  elementImg.style.top = positionTop + "vh";

  elementImg.addEventListener("click", function () {
    removeBalloon(this);
  });

  balloonsContainer.appendChild(elementImg);
}

function removeBalloon(element) {
  const boomSound = new Audio("./assets/boom.mpeg");
  boomSound.play();
  boomSound.volume = 0.1;
  element.remove();
}

function toggleAnimationButtonsON(buttonLabel) {
  buttonLabel.style.animation = "toggleAnimationON 1s ease-in";
  buttonLabel.style.backgroundColor = "#266648";
}

function toggleAnimationButtonsOFF(buttonLabel) {
  buttonLabel.style.animation = "toggleAnimationOFF 1s 0s ease-out";
  buttonLabel.style.backgroundColor = "#81caa8";
}