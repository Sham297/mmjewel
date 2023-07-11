
function sendWhatsAppMessage() {
    var messageInput = document.getElementById("message-input");
    var message = messageInput.value;

    if (message) {
        // Format the message as needed (e.g., adding WhatsApp API parameters)
        var formattedMessage = encodeURIComponent(message);

        // Set your WhatsApp phone number
        var phoneNumber = "+91 83101 04411"; // Replace with your phone number or WhatsApp account link

        // Construct the WhatsApp API URL with the formatted message and phone number
        var whatsappUrl = "https://api.whatsapp.com/send?text=" + formattedMessage + "&phone=" + phoneNumber;

        // Open the WhatsApp API URL in a new window or redirect the user
        window.open(whatsappUrl, "_blank");
    }
}
