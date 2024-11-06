// Get the form and the details display section
const form = document.getElementById('contactForm');
const formDetails = document.getElementById('formDetails');

// Event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents form from submitting

    // Get the values from the form inputs
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    // Display the form data in the 'formDetails' div
    formDetails.innerHTML = `
        <h3>Submitted Details:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
    `;
});
