const rooms = [
    { roomNumber: 101, roomType: "Single", price: 100, isAvailable: true },
    { roomNumber: 102, roomType: "Double", price: 150, isAvailable: true },
    { roomNumber: 103, roomType: "Suite", price: 250, isAvailable: true }
];
function renderRooms() {
    const roomContainer = document.getElementById("roomContainer");
    roomContainer.innerHTML = ""; 

    rooms.forEach(room => {
        const roomCard = document.createElement("div");
        roomCard.classList.add("room-card");

        roomCard.innerHTML = `
            <h3>Room ${room.roomNumber} - ${room.roomType}</h3>
            <p>Price: $${room.price} per night</p>
            <p>Status: ${room.isAvailable ? "Available" : "Occupied"}</p>
            <button onclick="selectRoom('${room.roomType}')">
                ${room.isAvailable ? "Book This Room" : "Room Unavailable"}
            </button>
        `;

        roomContainer.appendChild(roomCard);
    });
}
function selectRoom(roomType) {
    document.getElementById("roomType").value = roomType;
}
function submitBooking() {
    const roomType = document.getElementById("roomType").value;
    const checkinDate = document.getElementById("checkinDate").value;
    const checkoutDate = document.getElementById("checkoutDate").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const bookingStatus = document.getElementById("bookingStatus");

    if (roomType && checkinDate && checkoutDate && name && email) {
        bookingStatus.style.color = "green";
        bookingStatus.textContent = `Thank you, ${name}. Your booking for a ${roomType} room from ${checkinDate} to ${checkoutDate} has been confirmed.`;
        document.getElementById("bookingForm").reset();
    } else {
        bookingStatus.style.color = "red";
        bookingStatus.textContent = "Please fill out all fields before submitting.";
    }
}
document.addEventListener("DOMContentLoaded", renderRooms);
