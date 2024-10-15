//  banner section two button one click after another click
function toggleInfo(infoId) {
    const info1 = document.getElementById('info1');
    const info2 = document.getElementById('info2');

    if (infoId === 'info1') {
        info1.style.display = 'block';
        info2.style.display = 'none';
    } else {
        info1.style.display = 'none';
        info2.style.display = 'block';
    }
}


// donation button added to the donation amount 
// Get DOM elements
const totalFundsElement = document.getElementById('total-funds');
const donatedAmountElement = document.getElementById('donated-amount');
const donationInput = document.getElementById('donation-input');
const donateButton = document.getElementById('donate-btn');
// Convert string BDT values to numbers
function getBDTValue(element) {
    return parseInt(element.textContent.replace(' BDT', ''));
}
// Update the element to display the new BDT value
function updateBDTValue(element, newAmount) {
    element.textContent = `${newAmount} BDT`;
}
// Validate input: Only allow positive integers
function isValidDonation(input) {
    const donationAmount = parseInt(input);
    return !isNaN(donationAmount) && donationAmount > 0;
}
// Event listener for donation button
donateButton.addEventListener('click', function (event) {
    event.preventDefault();
    const donationAmount = donationInput.value;
    // Validate donation input
    if (!isValidDonation(donationAmount)) {
        alert("Please enter a valid positive number for the donation.");
        return;
    }
    const donationAmountInt = parseFloat(donationAmount);
    // Get current values for total funds and donated amount
    const currentTotalFunds = getBDTValue(totalFundsElement);
    const currentDonatedAmount = getBDTValue(donatedAmountElement);
    // Ensure there are enough funds to donate
    if (donationAmountInt > currentTotalFunds) {
        alert("Not enough funds available for this donation.");
        return;
    }
    // Update amount
    const newDonatedAmount = currentDonatedAmount + donationAmountInt;
    updateBDTValue(donatedAmountElement, newDonatedAmount);
    // reduce from total funds
    const newTotalFunds = currentTotalFunds - donationAmountInt;
    updateBDTValue(totalFundsElement, newTotalFunds);
    donationInput.value = '';
});



// donated-amount
//donation-input
//donate-btn



// // donation button added to the donation amount 
// // Get DOM elements
const totalFundsElement2 = document.getElementById('total-funds');
const donatedAmountElement2 = document.getElementById('donated-amount2');
const donationInput2 = document.getElementById('donation-input2');
const donateButton2 = document.getElementById('donate-btn2');
function getBDTValue(element) {
    return parseInt(element.textContent.replace(' BDT', ''));
}
function updateBDTValue(element, newAmount) {
    element.textContent = `${newAmount} BDT`;
}
function isValidDonation(input) {
    const donationAmount2 = parseInt(input);
    return !isNaN(donationAmount2) && donationAmount2 > 0;
}
donateButton2.addEventListener('click', function (event) {
    event.preventDefault();
    const donationAmount2 = donationInput2.value;
    if (!isValidDonation(donationAmount2)) {
        alert("Please enter a valid positive number for the donation.");
        return;
    }
    const donationAmount2Int = parseFloat(donationAmount2);
    const currentTotalFunds2 = getBDTValue(totalFundsElement2);
    const currentDonatedAmount2 = getBDTValue(donatedAmountElement2);
    if (donationAmount2Int > currentTotalFunds2) {
        alert("Not enough funds available for this donation.");
        return;
    }
    const newDonatedAmount2 = currentDonatedAmount2 + donationAmount2Int;
    updateBDTValue(donatedAmountElement2, newDonatedAmount2);
    const newTotalFunds2 = currentTotalFunds2 - donationAmount2Int;
    updateBDTValue(totalFundsElement2, newTotalFunds2);
    donationInput2.value = '';
});



const totalFundsElement3 = document.getElementById('total-funds');
const donatedAmountElement3 = document.getElementById('donated-amount3');
const donationInput3 = document.getElementById('donation-input3');
const donateButton3 = document.getElementById('donate-btn3');
function getBDTValue(element) {
    return parseInt(element.textContent.replace(' BDT', ''));
}
function updateBDTValue(element, newAmount) {
    element.textContent = `${newAmount} BDT`;
}
function isValidDonation(input) {
    const donationAmount3 = parseInt(input);
    return !isNaN(donationAmount3) && donationAmount3 > 0;
}
donateButton3.addEventListener('click', function (event) {
    event.preventDefault();
    const donationAmount3 = donationInput3.value;
    if (!isValidDonation(donationAmount3)) {
        alert("Please enter a valid positive number for the donation.");
        return;
    }
    const donationAmount3Int = parseFloat(donationAmount3);
    const currentTotalFunds3 = getBDTValue(totalFundsElement3);
    const currentDonatedAmount3 = getBDTValue(donatedAmountElement3);
    if (donationAmount3Int > currentTotalFunds3) {
        alert("Not enough funds available for this donation.");
        return;
    }
    const newDonatedAmount3 = currentDonatedAmount3 + donationAmount3Int;
    updateBDTValue(donatedAmountElement3, newDonatedAmount3);
    const newTotalFunds3 = currentTotalFunds3 - donationAmount3Int;
    updateBDTValue(totalFundsElement3, newTotalFunds3);
    donationInput3.value = '';
});


// // for button color change (it for the donation button)
document.getElementById('colorButton1').addEventListener('click', function() {
    this.classList.remove('btn-warning');
    this.classList.add('bg-red-500');
});
document.getElementById('colorButton2').addEventListener('click', function() {
    this.classList.remove('btn-warning');
    this.classList.add('bg-red-500');
});