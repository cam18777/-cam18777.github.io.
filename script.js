function submitForm() {
    var email = document.getElementById('email').value;

    // Send the email data to a server using AJAX or another method
    // Example using fetch API:
    fetch('/submit-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
    })
    .then(response => response.json())
    .then(data => {
        // Handle the server response if needed
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

    // Clear the input field after submission (optional)
    document.getElementById('email').value = '';
}
