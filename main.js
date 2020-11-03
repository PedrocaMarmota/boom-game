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
      buttonMedium.checked = false;
      toggleAnimationButtonsOFF(labelMedium);
    }
    if (buttonHard.checked) {
      buttonHard.checked = false;
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
  initGame();
});



function initGame() {
  if (buttonEasy.checked) {
    initInterval = setInterval(createBalloon, 1000);
    document.querySelector('#difficultyContainer').remove();
    buttonInitGame.remove();
  }
  else if (buttonMedium.checked) {
    initInterval = setInterval(createBalloon, 800);
    document.querySelector('#difficultyContainer').remove();
    buttonInitGame.remove();
  }
  else if (buttonHard.checked) {
    initInterval = setInterval(createBalloon, 500);
    document.querySelector('#difficultyContainer').remove();
    buttonInitGame.remove();
  }
  else {
    alert('Selecione a dificuldade antes de inciar!');
  }
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
  balloonCounter();

}

function removeBalloon(element) {
  const boomSound = new Audio("./assets/boom.mpeg");
  boomSound.play();
  boomSound.volume = 0.1;
  element.remove();
}

function toggleAnimationButtonsON(buttonLabel) {
  buttonLabel.style.animation = "toggleAnimationON 0.5s ease-in";
  buttonLabel.style.backgroundColor = "#266648";
}

function toggleAnimationButtonsOFF(buttonLabel) {
  buttonLabel.style.animation = "toggleAnimationOFF 0.5s 0s ease-out";
  buttonLabel.style.backgroundColor = "#81caa8";
}

function balloonCounter(counter) {
  const imgList = document.querySelectorAll("img");
  if (imgList.length > 30) {
    imgList.forEach(function (element) {
      element.remove();
    })
    alert('Perdeu mané kkkkkj')
    clearInterval(initInterval);
  }
}