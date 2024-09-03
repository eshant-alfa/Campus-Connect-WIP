// Get the create group form
const createGroupForm = document.getElementById('create-group-form');

// Get the groups list
const groupsList = document.getElementById('groups-list');

// Get the joined groups list
const joinedGroupsList = document.getElementById('joined-groups');

// Create an array to store the groups
let groups = [];

// Create an array to store the joined groups
let joinedGroups = [];

// Function to create a new group
function createGroup(event) {
  event.preventDefault();
  const groupName = document.getElementById('groupName').value;
  const groupDescription = document.getElementById('groupDescription').value;
  const newGroup = {
    name: groupName,
    description: groupDescription,
    members: []
  };
  groups.push(newGroup);
  displayGroups();
  createGroupForm.reset();
}

// Function to display all groups
function displayGroups() {
  groupsList.innerHTML = '';
  groups.forEach((group) => {
    const groupHTML = `
      <li>
        <h3>${group.name}</h3>
        <p>${group.description}</p>
        <button class="join-group-btn">Join Group</button>
      </li>
    `;
    groupsList.insertAdjacentHTML('beforeend', groupHTML);
  });
}

// Function to join a group
function joinGroup(event) {
  if (event.target.classList.contains('join-group-btn')) {
    const groupName = event.target.parentNode.querySelector('h3').textContent;
    const group = groups.find((group) => group.name === groupName);
    if (group) {
      joinedGroups.push(group);
      displayJoinedGroups();
    }
  }
}

// Function to display joined groups
function displayJoinedGroups() {
  joinedGroupsList.innerHTML = '';
  joinedGroups.forEach((group) => {
    const groupHTML = `
      <li>
        <h3>${group.name}</h3>
        <p>${group.description}</p>
        <button class="leave-group-btn">Leave Group</button>
      </li>
    `;
    joinedGroupsList.insertAdjacentHTML('beforeend', groupHTML);
  });
}

// Function to leave a group
function leaveGroup(event) {
  if (event.target.classList.contains('leave-group-btn')) {
    const groupName = event.target.parentNode.querySelector('h3').textContent;
    const group = joinedGroups.find((group) => group.name === groupName);
    if (group) {
      joinedGroups = joinedGroups.filter((group) => group.name !== groupName);
      displayJoinedGroups();
    }
  }
}

// Add event listeners
createGroupForm.addEventListener('submit', createGroup);
groupsList.addEventListener('click', joinGroup);
joinedGroupsList.addEventListener('click', leaveGroup);

// Initialize the groups and joined groups arrays
groups = [
  {
    name: 'Example Group',
    description: 'This is an example group',
    members: []
  }
];
joinedGroups = [];

// Display the initial groups and joined groups
displayGroups();
displayJoinedGroups();