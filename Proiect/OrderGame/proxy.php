<?php 
$url = $_GET['url']; 
$content = file_get_contents($url); 
header('Access-Control-Allow-Origin: *'); 
echo $content; 
?>