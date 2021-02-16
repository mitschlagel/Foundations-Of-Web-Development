Thanks for your message!

<?php

    $userName       = $_POST['Name'];
    $userEmail      = $_POST['Email'];
    $userMessage    = $_POST['Message'];

    $to             = "spencerjones@creighton.edu";
    $subject        = "Hello";
    $body           = "Message: ";

    $body .= "\r\n Name: " . $userName;
    $body .= "\r\n Email: " . $userEmail;
    $body .= "\r\n Message: " . $userMessage;

    mail($to, $subject, $body);

?>