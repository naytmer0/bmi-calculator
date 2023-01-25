'use strict';
const closeWindow = function () {
  document.querySelector('.modal').classList.add('hidden');
  document.querySelector('.overlay').classList.add('hidden');
};
const stan = document.querySelector('.stan');

document.querySelector('.btn').addEventListener('click', function () {
  const waga = Number(document.querySelector('.waga').value);
  const wzrost = Number(document.querySelector('.wzrost').value);
  const bmi = waga / ((wzrost / 100) * (wzrost / 100));
  if (waga && wzrost) {
    document.querySelector('.modal').classList.remove('hidden');
    document.querySelector('.overlay').classList.remove('hidden');
    document.querySelector('.bmi').textContent = bmi.toFixed(2);
  }
  if (bmi < 16) {
    stan.textContent = 'Wygłodzenie';
  } else if (bmi > 16 && bmi < 16.99) {
    stan.textContent = 'Wychudzenie';
  } else if (bmi > 17 && bmi < 18.49) {
    stan.textContent = 'Niedowaga';
  } else if (bmi > 18.5 && bmi < 24.99) {
    stan.textContent = 'Wartość prawidłowa';
  } else if (bmi > 25 && bmi < 29.99) {
    stan.textContent = 'Nadwaga';
  } else if (bmi > 30 && bmi < 34.99) {
    stan.textContent = 'I stopień otyłości';
  } else if (bmi > 35 && bmi < 39.99) {
    stan.textContent = 'II stopień otyłości';
  } else if (bmi > 40) {
    stan.textContent = 'Otyłość skrajna';
  }
});
document.querySelector('.close').addEventListener('click', closeWindow);
document.querySelector('.overlay').addEventListener('click', closeWindow);
