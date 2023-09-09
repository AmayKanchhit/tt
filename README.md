<!DOCTYPE html>
<html>
<head>
    <title>Hotel Booking Registration Form</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
    <script src="script.js"></script>
</head>
<body>
    <div class="container">
        <form id="registration-form" onsubmit="event.preventDefault(); registerHotel();">
            <h1>Hotel Booking Registration</h1>
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" required>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" required>
            </div>
            <div class="form-group">
                <label for="phone">Phone:</label>
                <input type="tel" id="phone" pattern="[0-9]{10}" required>
            </div>
            <div class="form-group">
                <label for="checkin">Check-in Date:</label>
                <input type="date" id="checkin" required>
            </div>
            <div class="form-group">
                <label for="checkout">Check-out Date:</label>
                <input type="date" id="checkout" required>
            </div>
            <div class="form-group">
                <button type="submit">Register</button>
            </div>
        </form>
    </div>
</body>
</html>
.container {
    width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

h1 {
    text-align: center;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    font-weight: bold;
}

input[type="text"],
input[type="email"],
input[type="tel"],
input[type="date"] {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
}

button:hover {
    background-color: #45a049;
}

button:disabled {
    background-color: #cccccc;
    opacity: 0.6;
    cursor: default;
}
function registerHotel() {
    // Get input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var checkin = document.getElementById('checkin').value;
    var checkout = document.getElementById('checkout').value;

    // Perform validation or further logic if needed
    console.log('Name: ' + name);
    console.log('Email: ' + email);
    console.log('Phone: ' + phone);
    console.log('Check-in: ' + checkin);
    console.log('Check-out: ' + checkout);

    // Show success message or perform other actions
    alert('Hotel registration successful!');
}

