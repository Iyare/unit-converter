/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const metersToFeet = 3.281;
const feetsToMeters = (1 / metersToFeet).toPrecision(4);
const litersToGallons = 0.264;
const gallonsToLiters = (1 / litersToGallons).toPrecision(4);
const kilogramsToPounds = 2.204;
const poundsToKilograms = (1 / kilogramsToPounds).toPrecision(4);

const userInput = document.querySelector("#userInput");
const convertBtn = document.querySelector("#convertBtn");
const lengthResults = document.querySelector("#lengthResults");
const weightResults = document.querySelector("#weightResults");
const volumeResults = document.querySelector("#volumeResults");
let inputedValue = 0;

userInput.addEventListener("change", (e) => {
  inputedValue = Number(e.target.value);
  const metrics = convertMetrics(inputedValue);
  renderResults(metrics);
});

userInput.addEventListener("keypress", (e) => {
  const keyName = e.key;
  if (keyName === "Enter") {
    inputedValue = userInput.value;
    const metrics = convertMetrics(inputedValue);
    renderResults(metrics);
  }
});

convertBtn.addEventListener("click", function () {
  inputedValue = userInput.value;

  const metrics = convertMetrics(inputedValue);
  renderResults(metrics);
});

// conversion of metrics
function convertMetrics(input) {
    const inputedValue = Number(input);

  if (typeof inputedValue !== "number" || inputedValue === 0 || isNaN(inputedValue) ) {
      alert("Enter a valid number");    
      userInput.value = "";
  }  else {
    const feetValue = roundNumber(inputedValue * metersToFeet);
    const meterValue = roundNumber(inputedValue * feetsToMeters);
    const gallonValue = roundNumber(inputedValue * litersToGallons);
    const litersValue = roundNumber(inputedValue * gallonsToLiters);
    const poundValue = roundNumber(inputedValue * kilogramsToPounds);
    const kilogramValue = roundNumber(inputedValue * poundsToKilograms);
      return {
        feetValue: feetValue,
        meterValue: meterValue,
        gallonValue: gallonValue,
        litersValue: litersValue,
        poundValue: poundValue,
        kilogramValue: kilogramValue,
    };
  }
 
}

function renderResults(metrics) {
    if (inputedValue === 1) {
        lengthResults.textContent = `${inputedValue} meter = ${metrics.feetValue} feet | ${inputedValue} feet = ${metrics.meterValue} meters`;
        volumeResults.textContent = `${inputedValue} liters = ${metrics.gallonValue} gallons | ${inputedValue} gallon = ${metrics.litersValue} liters`;
        weightResults.textContent = `${inputedValue} kilos = ${metrics.poundValue} pounds | ${inputedValue} pound = ${metrics.kilogramValue} kilos`;
    } else {
        lengthResults.textContent = `${inputedValue} meters = ${metrics.feetValue} feet | ${inputedValue} feets = ${metrics.meterValue} meters`;
        volumeResults.textContent = `${inputedValue} liters = ${metrics.gallonValue} gallons | ${inputedValue} gallons = ${metrics.litersValue} liters`;
        weightResults.textContent = `${inputedValue} kilos = ${metrics.poundValue} pounds | ${inputedValue} pounds = ${metrics.kilogramValue} kilos`;
    }
 
}
// round result to 3 decimal places
function roundNumber(number) {
  return number.toFixed(3);
}

// function checkInput(input) {
//     const number = Number(input);
//     if (typeof number !== "number") {
//         alert("Enter a valid number");
//     } else {
//         return number;
//     }
// }
