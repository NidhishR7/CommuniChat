<?php
$username = $_['username']
$email = $_['email']
$password = $_['password']
$confirmPassword = $_['confirmPassword']

//database connection
$conn = new msqli('localhost','root','','try');
if($conn->connect_error){
    die('Connection Failed : '.$conn->connect_error);
}else{
    $stmt = $conn->prepare("insert into registration(username, email, password, confirmPassword)values(?, ?, ?, ?)");
    $esmt->bind_param("ssss",$username, $email, $password, $confirmPassword);
    $stmt->execute();
    echo "registration successfully...";
    $stmt->close();
    $conn->close();
}

?>