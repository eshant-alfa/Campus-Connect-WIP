// script.js
// Register form submission handler
document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Create a new user object
    const user = {
        username,
        email,
        password
    };

    // Simulate a server-side registration process (replace with actual API call)
    console.log('Registering user:', user);
    setTimeout(() => {
        alert('User registered successfully!');
        // Redirect to login page
        window.location.href = 'login.html';
    }, 2000);


    // Login form submission handler
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate a server-side authentication process (replace with actual API call)
    if (username === 'admin' && password === 'password') {
        // Authentication successful, redirect to home page
        window.location.href = 'home.html';
    } else {
        alert('Invalid username or password');
    }
});


// Logout page script
document.addEventListener('DOMContentLoaded', () => {
    // Send a request to the server to invalidate the user's session
    fetch('/logout', {
        method: 'POST',
        credentials: 'include'
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Clear local storage
            localStorage.clear();

            // Redirect to login page
            window.location.href = 'login.html';
        } else {
            alert('Error logging out');
        }
    })
    .catch(error => {
        console.error('Error logging out:', error);
    });
});
//Event Creation
const eventForm = document.getElementById('event-form');
const eventListings = document.getElementById('event-listings');

eventForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const eventName = document.getElementById('event-name').value;
  const eventDates = document.getElementById('event-dates').value;
  const eventVenue = document.getElementById('event-venue').value;
  const eventDescription = document.getElementById('event-description').value;

  const eventListingHTML = `
    <h4>${eventName}</h4>
    <p> Dates: ${eventDates} </p>
    <p> Venue: ${eventVenue} </p>
    <p> Description: ${eventDescription} </p>
    <hr>
  `;

  eventListings.innerHTML += eventListingHTML;
});

});
