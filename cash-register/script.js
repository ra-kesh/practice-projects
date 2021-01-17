var billInput = document.getElementById("bill");
var cashInput = document.getElementById("cashGiven");
var submitBtn = document.getElementById("submit");

var output = document.getElementById("output");

var notesCount = document.querySelectorAll(".numberOfNotes");

const currencies = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

submitBtn.addEventListener("click", clickHandler);

function clickHandler() {
  let billAmount = billInput.value;
  let cashGiven = cashInput.value;

  let remainingAmount = cashGiven - billAmount;

  /* console.log(cashGiven);
  console.log(remainingAmount); */

  if (billAmount > 0 && cashGiven > 0 && remainingAmount > 0) {
    for (let i = 0; i < currencies.length; i++) {
      let notes = remainingAmount / currencies[i];
      let numOfNotes = Math.floor(notes);
      notesCount[i].innerText = numOfNotes;

      /* remaining balance if any */
      let newRemainingBalance =
        remainingAmount - Math.floor(notes) * currencies[i];

      remainingAmount = newRemainingBalance;

      if (newRemainingBalance === 0) {
        break;
      }
    }
  } else if (billAmount > 0 && cashGiven > 0 && remainingAmount === 0) {
    alert("Thank you! you paid the exact amount");
  } else if (billAmount === "" && cashGiven === "") {
    alert("Please enter the billed amount and cash paid by the customer");
  } else if (billAmount !== "" && cashGiven === "") {
    alert("Please enter the amount of cash paid by the customer");
  } else if (billAmount === "" && cashGiven !== "") {
    alert("Please enter the bill amount");
  } else if (billAmount === 0 || cashGiven === 0) {
    alert("Value cannot be 0");
  } else {
    alert("Cash paid is less than the billed amount");
  }
}
