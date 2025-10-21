// Native JavaScript untuk Validasi Form TUI
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    if(form) {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const successMessage = document.getElementById('success-message');

        const showError = (input) => {
            // Find the associated error message paragraph
            let error = null;
            if (input.tagName === 'TEXTAREA') {
                error = input.nextElementSibling;
            } else {
                error = input.closest('div').nextElementSibling;
            }
            
            input.classList.add('error');
            if (error && error.classList.contains('error-message')) {
                error.classList.remove('hidden');
            }
        };

        const hideError = (input) => {
            // Find the associated error message paragraph
            let error = null;
            if (input.tagName === 'TEXTAREA') {
                error = input.nextElementSibling;
            } else {
                error = input.closest('div').nextElementSibling;
            }

            input.classList.remove('error');
            if (error && error.classList.contains('error-message')) {
                error.classList.add('hidden');
            }
        };

        const isEmailValid = (email) => {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        };

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;

            // Validate Name
            if (nameInput.value.trim() === '') { 
                showError(nameInput); 
                isValid = false; 
            } else { 
                hideError(nameInput); 
            }

            // Validate Email
            if (emailInput.value.trim() === '' || !isEmailValid(emailInput.value.trim())) { 
                showError(emailInput); 
                isValid = false; 
            } else { 
                hideError(emailInput); 
            }

            // Validate Message
            if (messageInput.value.trim() === '') { 
                showError(messageInput); 
                isValid = false; 
            } else { 
                hideError(messageInput); 
            }
            
            if (isValid) {
                successMessage.classList.remove('hidden');
                form.reset();
                setTimeout(() => { 
                    successMessage.classList.add('hidden'); 
                }, 3000);
            }
        });
    }
});