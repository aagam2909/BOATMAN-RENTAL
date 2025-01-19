document.getElementById('numMembers').addEventListener('input', function() {
    const numMembers = parseInt(this.value);
    const membersContainer = document.getElementById('membersContainer');
    membersContainer.innerHTML = ''; // Clear previous inputs

    for (let i = 0; i < numMembers; i++) {
        const memberInput = document.createElement('input');
        memberInput.type = 'text';
        memberInput.placeholder = `Member ${i + 1} Name`;
        memberInput.required = true;
        membersContainer.appendChild(memberInput);
    }
});

document.getElementById('boatBookingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const numMembers = document.getElementById('numMembers').value;
    const rentalDate = document.getElementById('rentalDate').value;
    const memberNames = Array.from(document.querySelectorAll('#membersContainer input')).map(input => input.value);

    const summaryDetails = `You have booked for ${numMembers} members on ${rentalDate}: ${memberNames.join(', ')}`;
    document.getElementById('summaryDetails').innerText = summaryDetails;

    document.getElementById('bookingSummary').style.display = 'block';
    document.getElementById('boatBookingForm').reset();
});

document.getElementById('proceedToPayment').addEventListener('click', function() {
    document.getElementById('bookingSummary').style.display = 'none';
    document.getElementById('paymentSection').style.display = 'block';
});

document.getElementById('paymentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Simulate payment processing
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;

    // Here you would typically call your payment gateway API
    // For this example, we will just simulate a successful payment
    if (cardNumber && expiryDate && cvv) {
        // Simulate a successful payment
        setTimeout(() => {
            document.getElementById('paymentSection').style.display = 'none';
            document.getElementById('confirmationModal').style.display = 'block';
        }, 1000);
    }
});

// Close modal functionality
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('confirmationModal').style.display = 'none';
});

document.getElementById('cancelBooking').addEventListener('click', function() {
    document.getElementById('bookingSummary').style.display = 'none';
    document.getElementById('boatBookingForm').reset();
});