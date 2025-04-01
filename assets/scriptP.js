function showAppointmentSection() {
    document.querySelector('.appointment-section').style.display = 'block';
}

function showAppointmentForm(doctor) {
    document.querySelector('.appointment-form').style.display = 'block';
    document.querySelector('.appointment-form').setAttribute('data-doctor', doctor);
}

function bookAppointment() {
    let name = document.getElementById('patient-name').value;
    let age = document.getElementById('patient-age').value;
    let time = document.getElementById('appointment-time').value;
    let doctor = document.querySelector('.appointment-form').getAttribute('data-doctor');

    if (!name || !age || !time) {
        alert('Please fill in all fields.');
        return false;
    }

    document.querySelector('.confirmation').style.display = 'block';
    document.getElementById('confirmation-details').innerHTML = `Doctor: ${doctor} <br> Name: ${name} <br> Age: ${age} <br> Appointment Time: ${time}`;
    alert('Appointment booked!');

    window.opener.showAppointment(name, time);  // Sends data to Doctor Dashboard
    return false;
}