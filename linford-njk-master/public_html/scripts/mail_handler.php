<?php
	if(isset($_POST['submit'])){
		$email=$_POST['email'];
		$msg=$_POST['msg'];

		$to='eriko96@hotmail.com'; // Receiver Email ID, Replace with your email ID
		$subject='Linford kontakt';
		$message="".$msg;
		$headers = "From: ".$email;

		if(mail($to, $subject, $message, $headers)){
			header("Location: /index.html");
 			exit;
		}
		else{
			echo "Something went wrong!";
		}
	}
?>