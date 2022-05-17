<?php 
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $selectOption = $_POST['klapbar'];
    $subject = $_POST['subject'];

    $email_from = 'thomaswwpedersen@gmail.com';
    $email_subject = "Ny portfolio besked";
    $email_body = "Fra: $firstname\n". 
                  "Efternavn: $lastname\n".
                  "Email: $email\n".
                  "Besked: $subject\n".
                  "Klapbar: $selectOption\n";

                  $to = "thomaswpedersen@hotmail.com";
                  $headers = "From: $email_from \r\n";
                  $headers .= "Reply-To: $visitor_email \r\n";
                  mail($to,$email_subject,$email_body,$headers);

                  header("Location: index.html");

    ?>