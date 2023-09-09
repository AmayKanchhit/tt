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
