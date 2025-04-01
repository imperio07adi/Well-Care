function showLoginForm(role) {
    document.querySelectorAll('.login-form').forEach(form => form.style.display = 'none');
    document.getElementById(role + '-login').style.display = 'block';
}

function login(role) {
    let email = document.getElementById(role + '-email').value;
    let password = document.getElementById(role + '-password').value;

    if (!email || !password) {
        alert('Please enter email and password.');
        return false;
    }

    window.location.href = role + "_dashboard.html"; // Redirect to the respective dashboard
    return false;
}