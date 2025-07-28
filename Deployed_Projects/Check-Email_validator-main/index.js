function validateEmail(email) {
    // Regex to allow domains without TLD (e.g., 'localhost')
    const emailRegex = /^[^\s@]+@[^\s@]+(\.[^\s@]+)?$/;

    // Check if the email matches the pattern
    if (!email || typeof email !== 'string') {
        return false; // Ensure input is a valid string
    }

    // Test the email against the regex pattern
    return emailRegex.test(email);
}

// Export the function for use in other files or by other developers
module.exports = { validateEmail };

// Simple check to test the function
const testEmail = 'test@example.com'; // Change this to test different emails
console.log(`Is "${testEmail}" a valid email? ${validateEmail(testEmail)}`);