/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const metersToFeet = 3.281;
const feetsToMeters = 1 / metersToFeet;
const litersToGallons = 0.264;
const gallonsToLiters = 1 / litersToGallons;
const kilogramsToPounds = 2.204;
const poundsToKilograms = 1 / kilogramsToPounds;

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
})

userInput.addEventListener("keypress", (e)=> {
    const keyName = e.key;
    if(keyName === "Enter"){
        inputedValue = userInput.value;
        const metrics = convertMetrics(inputedValue);
        renderResults(metrics);
    }
})

convertBtn.addEventListener("click", function () {
  inputedValue = userInput.value;
  const metrics = convertMetrics(inputedValue);
  renderResults(metrics);
});


// conversion
function convertMetrics(input) {
  const inputedValue = input;
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


function renderResults(metrics) {
    lengthResults.textContent = `${inputedValue} meters = ${metrics.feetValue} feet | ${inputedValue} feet = ${metrics.meterValue} meters`;
    volumeResults.textContent = `${inputedValue} liters = ${metrics.gallonValue} gallons | ${inputedValue} gallons = ${metrics.litersValue} liters`;
    weightResults.textContent = `${inputedValue} kilos = ${metrics.poundValue} pounds | ${inputedValue} pounds = ${metrics.kilogramValue} kilos`;
  }
  // round result to 3 decimal places
function roundNumber(number) {
  return number.toFixed(3);
}

function checkInput(input) {
    
}