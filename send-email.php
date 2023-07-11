<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  // Retrieve form data
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Set up email parameters
  $to = "amarnathsham297@gmail.com"; // Replace with your own email address
  $subject = "New Message from Contact Form";
  $body = "Name: $name\nEmail: $email\nMessage: $message";
  $headers = "From: $email";

  // Send the email
  if (mail($to, $subject, $body, $headers)) {
    http_response_code(200); // Set response status code
  } else {
    http_response_code(500); // Set response status code for error
  }
}
?>
