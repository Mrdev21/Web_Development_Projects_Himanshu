document.addEventListener('DOMContentLoaded', () => {
    const profileForm = document.getElementById('profileForm');
    const messageDiv = document.getElementById('message');

    profileForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        // Form validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const bio = document.getElementById('bio').value.trim();

        if (!name || !email || !phone || !bio) {
            alert('Please fill out all fields.');
            return;
        }

        // Display success message
        messageDiv.textContent = 'Profile updated successfully!';
        messageDiv.classList.remove('hidden');
        messageDiv.style.display = 'block';

        // Clear form fields (optional)
        profileForm.reset();

        // Hide the message after 3 seconds
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 3000);
    });
});
