/* 
=========================================
calculateBill()
increasePeople()
decreasePeople()
=========================================
*/

// bill input, tip input, number of people div, and per person total div
const billInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const numberOfPeopleDiv = document.getElementById("numberOfPeople");
const perPersonTotalDiv = document.getElementById("perPersonTotal");

let numberOfPeople = Number(numberOfPeopleDiv.innerText);

const calculateBill = () => {
  //grab the bill value
  const bill = Number(billInput.value);
  //grab the tip value
  const tip = Number(tipInput.value) / 100;

  const tipAmount = bill * tip;

  const total = bill + tipAmount;

  const perPersonTotal = total / numberOfPeople;

  perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`;
};

const increasePeople = () => {
  // increment the amount of people
  numberOfPeople += 1;
  // update the DOM with the new number of people
  numberOfPeopleDiv.innerText = numberOfPeople;
  // calculate the bill based on the new number of
  calculateBill();
};

const decreasePeople = () => {
  if (numberOfPeople <= 1) {
    return;
  }

  numberOfPeople -= 1;

  numberOfPeopleDiv.innerText = numberOfPeople;

  calculateBill();
};
