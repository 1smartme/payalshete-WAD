// Fetch user data from localStorage
document.addEventListener('DOMContentLoaded', function () {
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    const userTableBody = document.querySelector('#userTable tbody');
    userTableBody.innerHTML = ''; // Clear existing data
  
    // Loop through the users and add each user as a new row in the table
    users.forEach(user => {
      const row = document.createElement('tr');
  
      const usernameCell = document.createElement('td');
      usernameCell.textContent = user.username;
      row.appendChild(usernameCell);
  
      const emailCell = document.createElement('td');
      emailCell.textContent = user.email;
      row.appendChild(emailCell);
  
      const genderCell = document.createElement('td');
      genderCell.textContent = user.gender;
      row.appendChild(genderCell);
  
      const addressCell = document.createElement('td');
      addressCell.textContent = user.address;
      row.appendChild(addressCell);
  
      userTableBody.appendChild(row);
    });
  });
  