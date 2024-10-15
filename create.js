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



// // for button color change (it for the donation button)
document.getElementById('colorButton1').addEventListener('click', function() {
    this.classList.remove('btn-warning');
    this.classList.add('bg-red-500');
});
document.getElementById('colorButton2').addEventListener('click', function() {
    this.classList.remove('btn-warning');
    this.classList.add('bg-red-500');
});
