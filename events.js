const createEventButton = document.querySelector('#create-event-button');
const createEventForm = document.querySelector('#create-event');
const eventListUl = document.querySelector('#event-list-ul');

createEventButton.addEventListener('click', () => {
    createEventForm.classList.toggle('hidden');
});

document.querySelector('#create-event-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const eventType = document.querySelector('#event-type').value;
    const eventName = document.querySelector('#event-name').value;
    const eventDate = document.querySelector('#event-date').value;
    const eventTime = document.querySelector('#event-time').value;
    const eventDescription = document.querySelector('#event-description').value;
    const eventPrivacy = document.querySelector('#event-privacy').value;

    const newEvent = document.createElement('li');
    newEvent.innerHTML = `
        <h3>${eventName}</h3>
        <p>Type: ${eventType}</p>
        <p>Date: ${eventDate}</p>
        <p>Time: ${eventTime}</p>
        <p>${eventDescription}</p>
        <p>Privacy: ${eventPrivacy}</p>
        <button class="join-event-button">Join the event</button>
    `;

    eventListUl.appendChild(newEvent);

    // Clear form fields
    document.querySelector('#event-type').value = '';
    document.querySelector('#event-name').value = '';
    document.querySelector('#event-date').value = '';
    document.querySelector('#event-time').value = '';
    document.querySelector('#event-description').value = '';
    document.querySelector('#event-privacy').value = '';
});

// Add event listener to the join event button
eventListUl.addEventListener('click', (e) => {
    if (e.target.classList.contains('join-event-button')) {
        // Get the event details from the list item
        const eventListItem = e.target.parentNode;
        const eventName = eventListItem.querySelector('h3').textContent;
        const eventType = eventListItem.querySelector('p:nth-child(2)').textContent;
        const eventDate = eventListItem.querySelector('p:nth-child(3)').textContent;
        const eventTime = eventListItem.querySelector('p:nth-child(4)').textContent;
        const eventDescription = eventListItem.querySelector('p:nth-child(5)').textContent;
        const eventPrivacy = eventListItem.querySelector('p:nth-child(6)').textContent;

        // Display a confirmation message
        alert(`You have joined the event: ${eventName} (${eventType}) on ${eventDate} at ${eventTime}.`);
    }
});