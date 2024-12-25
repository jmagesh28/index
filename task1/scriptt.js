// Function to submit feedback
function submitFeedback() {
    const name = document.getElementById("name").value;
    const rating = document.getElementById("rating").value;
    const comment = document.getElementById("comment").value;
    const feedbackStatus = document.getElementById("feedbackStatus");

    // Validate inputs
    if (name && rating && comment) {
        // Create review card
        const reviewCard = document.createElement("div");
        reviewCard.classList.add("review-card");

        // Add review details
        reviewCard.innerHTML = `
            <h3>${name}</h3>
            <p class="rating">Rating: ${"⭐".repeat(rating)} (${rating}/5)</p>
            <p>${comment}</p>
        `;

        // Add the review card to the reviews container
        const reviewsContainer = document.getElementById("reviewsContainer");
        reviewsContainer.prepend(reviewCard); // Add new reviews at the top

        // Reset the form
        document.getElementById("feedbackForm").reset();

        // Show confirmation message
        feedbackStatus.style.color = "green";
        feedbackStatus.textContent = "Thank you for your feedback!";
    } else {
        feedbackStatus.style.color = "red";
        feedbackStatus.textContent = "Please fill out all fields before submitting.";
    }
}
