document.addEventListener('DOMContentLoaded', function() {
    // Booking modal functionality
    const bookingModal = document.getElementById('bookingModal');
    const closeModal = document.getElementById('closeModal');
    const confirmBooking = document.getElementById('confirmBooking');
    const loginModal = document.getElementById('loginModal');
    const closeLoginModal = document.getElementById('closeLoginModal');
    const loginButton = document.getElementById('loginButton');
    const loginForm = document.getElementById('loginForm');
    
    // Doctor data for the modal
    const doctors = {
        "Dr. Sharman Joshi": {
            image: "https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg",
            specialty: "Cardiologist",
            rating: "4.9 (128 reviews)"
        },
        "Dr. Mohan Mishra": {
            image: "https://img.freepik.com/free-photo/young-doctor-with-stethoscope-around-his-neck_1303-17817.jpg",
            specialty: "Neurologist",
            rating: "4.8 (97 reviews)"
        },
        "Dr. Rehna Mehta": {
            image: "https://img.freepik.com/free-photo/portrait-confident-mature-doctor-man_1262-6206.jpg",
            specialty: "Orthopedic Surgeon",
            rating: "4.9 (142 reviews)"
        }
    };
    
    // Function to open booking modal with doctor data
    function openBookingModal(doctorName) {
        const doctor = doctors[doctorName];
        if (doctor) {
            document.getElementById('modalDoctorImage').src = doctor.image;
            document.getElementById('modalDoctorName').textContent = doctorName;
            document.getElementById('modalDoctorSpecialty').textContent = doctor.specialty;
            document.querySelector('.flex.items-center.mb-4 span').textContent = doctor.rating;
        }
        bookingModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
    
    // Close booking modal
    function closeBookingModal() {
        bookingModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
    
    // Open login modal
    function openLoginModal() {
        loginModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // Close login modal
    function closeLoginModalFunc() {
        loginModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    // Event listeners for booking buttons
    document.querySelectorAll('.book-doctor').forEach(button => {
        button.addEventListener('click', function() {
            const doctorName = this.getAttribute('data-doctor');
            openBookingModal(doctorName);
        });
    });
    
    // Close modal when X is clicked
    closeModal.addEventListener('click', closeBookingModal);
    
    // Close modal when clicking outside
    bookingModal.addEventListener('click', function(e) {
        if (e.target === bookingModal) {
            closeBookingModal();
        }
    });
    
    // Confirm booking button
    confirmBooking.addEventListener('click', function() {
        alert('Appointment booked successfully!');
        closeBookingModal();
    });
    
    // Time slot selection
    const timeSlots = document.querySelectorAll('.time-slot');
    timeSlots.forEach(slot => {
        slot.addEventListener('click', function() {
            timeSlots.forEach(s => s.classList.remove('selected-slot'));
            this.classList.add('selected-slot');
        });
    });
    
    // Login modal functionality
    loginButton.addEventListener('click', openLoginModal);
    closeLoginModal.addEventListener('click', closeLoginModalFunc);
    
    // Close login modal when clicking outside
    loginModal.addEventListener('click', function(e) {
        if (e.target === loginModal) {
            closeLoginModalFunc();
        }
    });
    
    // Login form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Simple validation
        if (email && password) {
            alert('Login successful!');
            closeLoginModalFunc();
        } else {
            alert('Please fill in all fields');
        }
    });
    
    // Connect all "Book Now" buttons to open the booking modal
    document.querySelectorAll('#bookNowHeader, #bookNowCta, #findDoctorHero, #searchDoctors').forEach(button => {
        button.addEventListener('click', function() {
            openBookingModal("Dr. Sharman Joshi");
        });
    });
    
    // Virtual visit button
    document.getElementById('virtualVisitHero').addEventListener('click', function() {
        alert('Redirecting to virtual visit page...');
    });
    
    // Call us button
    document.getElementById('callUsCta').addEventListener('click', function() {
        alert('Calling (800) 555-1234...');
    });
    
    // Mobile menu button (placeholder)
    document.getElementById('mobileMenuButton').addEventListener('click', function() {
        alert('Mobile menu would open here in a full implementation');
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});