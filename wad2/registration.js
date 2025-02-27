document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
  
    // Retrieve values from form fields
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    const gender = document.getElementById('gender').value;
    const address = document.getElementById('address').value.trim();

  
    // Create user object
    const user = { username, email, password, gender, address };
  
    // Save to localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  
    // Simulate server request
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function () {
      if (xhr.status === 201) {
        alert('Registration successful!');
        console.log('Server Response:', JSON.parse(xhr.responseText));
        window.location.href = 'login.html'; // Redirect to login page
      } else {
        alert('Error occurred during registration.');
      }
    };
    xhr.onerror = function () {
      alert('Network error. Please try again later.');
    };
    xhr.send(JSON.stringify(user));
  });

  