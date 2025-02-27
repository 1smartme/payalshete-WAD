document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
   
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
  
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
 
    const user = users.find(u => u.username === username && u.password === password);
  
    
    if (user) {
      alert('Login successful!');
      console.log('Logged in user:', user);
      window.location.href = 'list.html'; 
    } else {
      alert('Invalid username or password. Please try again.');
    }
  });
  