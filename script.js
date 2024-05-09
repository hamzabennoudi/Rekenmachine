// De gegevens bijhouden
let display = document.getElementById('display');
let number1 = null; // Eerste getal
let number2 = null; // Tweede getal
let operator = null; // Geselecteerde bewerking
let result = null; // Uitkomst

// Functie om een getal aan het huidige getal toe te voegen
function appendNumber(number) {
  if (operator === null) {
    // Als er nog geen bewerking is geselecteerd, voeg het getal toe aan het eerste getal
    if (number1 === null) {
      number1 = number.toString();
    } else {
      number1 += number;
    }
    display.textContent = number1;
  } else {
    // Als er al een bewerking is geselecteerd, voeg het getal toe aan het tweede getal
    if (number2 === null) {
      number2 = number.toString();
    } else {
      number2 += number;
    }
    display.textContent = number2;
  }
}

// Functie om de geselecteerde bewerking in te stellen
function setOperator(op) {
  operator = op;
}

// Functie om de berekening uit te voeren
function calculate() {
  if (number1 !== null && number2 !== null && operator !== null) {
    // Voer de juiste berekening uit op basis van de geselecteerde bewerking
    switch (operator) {
      case '+':
        result = parseInt(number1) + parseInt(number2);
        break;
      case '-':
        result = parseInt(number1) - parseInt(number2);
        break;
      case '*':
        result = parseInt(number1) * parseInt(number2);
        break;
      case '/':
        result = parseInt(number1) / parseInt(number2);
        break;
      default:
        return;
    }
    // Toon het resultaat op het display
    display.textContent = result;
    // Update het eerste getal met het resultaat voor verdere berekeningen
    number1 = result.toString();
    // Reset het tweede getal en de bewerking
    number2 = null;
    operator = null;
  }
}

// Functie om de rekenmachine te resetten
function reset() {
  number1 = null;
  number2 = null;
  operator = null;
  result = null;
  display.textContent = '0';
}