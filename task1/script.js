function submitForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    const statusMessage = document.getElementById("statusMessage");

    if (name && email && subject && message) {
        // Simulate a form submission (or send data to the server here)
        statusMessage.style.color = "green";
        statusMessage.textContent = "Thank you for your message! We will get back to you soon.";
        document.getElementById("contactForm").reset();
    } else {
        statusMessage.style.color = "red";
        statusMessage.textContent = "Please fill out all fields before submitting.";
    }
}
