const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

convertBtn.addEventListener("click", () => {
  if (!number.value) {
    output.innerText = "Please enter a valid number";
    return;
  }
  if (number.value < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
    return;
  }
  if (number.value >= 4000) {
    output.innerText = "Please enter a number less than or equal to 3999";
    return;
  }

  const outputConvertedRomanNumber = convertInputToRomanNumber(number.value);

  output.innerText = outputConvertedRomanNumber;
})

const convertInputToRomanNumber = (numberToConvert) => {
  const romanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  const arabicNumerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let romanNumber = "";
  let indexNumber = 0;
  while (numberToConvert > 0) {
    const numberOfSymbols = Math.floor(numberToConvert / arabicNumerals[indexNumber]);
    numberToConvert -= numberOfSymbols * arabicNumerals[indexNumber];
    romanNumber += romanNumerals[indexNumber].repeat(numberOfSymbols);
    indexNumber++;
  };
  return romanNumber;
}