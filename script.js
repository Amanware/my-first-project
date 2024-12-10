document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display the submitted information
    document.getElementById('displayName').innerText = 'Name: ' + name;
    document.getElementById('displayEmail').innerText = 'Email: ' + email;
    document.getElementById('displayMessage').innerText = 'Message: ' + message;

    // Show the result section
    document.getElementById('result').style.display = 'block';

    // Log the submitted information to the console
    console.log('Submitted Information:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Optionally, you can clear the form fields
    // document.getElementById('contactForm').reset();
});