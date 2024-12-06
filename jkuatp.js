        // Display Greeting Based on Time
        const greeting = document.getElementById('greeting');
        const currentHour = new Date().getHours();
        
        if (currentHour < 12) {
            greeting.textContent = 'Good Morning!';
        } else if (currentHour < 18) {
            greeting.textContent = 'Good Afternoon!';
        } else {
            greeting.textContent = 'Good Evening!';
        }
        
        // "Read More" Button Functionality
        const readMoreBtn = document.getElementById('read-more-btn');
        const moreInfo = document.getElementById('more-info');
        
        readMoreBtn.addEventListener('click', function () {
            if (moreInfo.style.display === 'none') {
                moreInfo.style.display = 'block';
                readMoreBtn.textContent = 'Show Less';
            } else {
                moreInfo.style.display = 'none';
                readMoreBtn.textContent = 'Read More';
            }
        });
        
        // Form Validation
        document.getElementById('newsletter-form').addEventListener('submit', function (event) {
            event.preventDefault();
            console.log('Form submitted!'); // Debugging: Check if this is printed
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const errorMessage = document.getElementById('error-message');
        
            if (!name || !email.includes('@')) {
                errorMessage.style.display = 'block';
                console.log('Error: Missing name or invalid email'); // Debugging
            } else {
                errorMessage.style.display = 'none';
                alert('Thank you for subscribing!');
                console.log('Success: Alert displayed'); // Debugging
            }
        });
        