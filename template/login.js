loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    try {
        const response = await axios.post('http://localhost:8000/login', {
            account_name: username,
            password: password
        });
        alert(response.data.message);
        // Redirect to index page after successful login
        window.location.href = '/index.html';

        // Change button text to username
        const userBtn = document.getElementById('userBtn');
        userBtn.innerText = username; // Change button text to username
    } catch (error) {
        alert('Failed to login. Invalid username or password.');
    }
});
