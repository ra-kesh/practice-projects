var currencies = [1, 5, 10, 20, 100, 500, 2000];

var billInput = document.getElementById("bill");
var cashInput = document.getElementById("cash");
tElementById("errorMsg");
var error = document.getElementById("errorMsg");

var cashGivenInput = document.getElementById("cashGivenInput");
var cashReturn = document.getElementById("return-amount");

var output = document.getElementById("output");

var nextBtn = document.querySelector("#nextBtn");
var checkBtn = document.querySelector("#checkBtn");

var numOfNotes = document.getElementById("numberOfnotes");

/* display cash input field when bill is entered */

nextBtn.addEventListener("click", () => {
  hideError();

  if (Number(billInput.value) > 0) {
    nextBtn.style.display = "none";

    cashGivenInput.style.display = "block";
  } else {
    showError("Please enter a valid bill amount!");
  }
});

/* hide and show error */
function hideError() {
  error.style.display = "none";
}

function showError(text) {
  error.style.display = "block";
  error.innerText = text;
  cashReturn.style.display = "none";
}

/* check btn handler */
checkBtn.addEventListener("click", () => {
  clearNotes();
  hideError();

  var billAmount = Number(billInput.value);
  var cashInputAmount = Number(cashInput.value);

  if (billAmount > 0 && cashInputAmount > 0) {
    if (!Number.isInteger(cashInputAmount)) {
      showError("Enter a valid cash amount!");
    } else if (billAmount > cashGivenInput) {
      showError(
        "Don't be a miser! Your cash is less than bill. Please pay either equal to bill or more."
      );
      return;
    }
    /* if a valid inputAmount, calculate no of notes to be given back */
    calculateNotes(billAmount, cashGivenInput);
  } else {
    showError("Please enter valid bill amount and cash amount");
  }
});

/* calculating the number of notes */
function calculateNotes(bill, cash) {
  var returnAmount = cash - bill;

  if (returnAmount < 1) {
    showError("No amount to be returned");
    return;
  }

  cashInput.style.display = "block";

  for (let i = 0; i < currencies.length; i++) {
    returnAmt = compare(returnAmount, currencies[i], i);
  }
}

//comparing with currency and display the number of notes
function compare(remainder, noteAmt, index) {
  if (remainder >= noteAmt) {
    let notes = Math.floor(remainder / noteAmt);
    remainder = remainder - notes * noteAmt;
    numOfNotes[index].innerText = `${notes}`;
  }
  return remainder;
}

//if check button clicked without refreshing the page, clear the number of notes values
function clearNotes() {
  for (let notes of numOfNotes) {
    notes.innerText = "";
  }
}
