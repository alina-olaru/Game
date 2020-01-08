<?php 
    $var1 = $_POST['name'];
    $var2 = $_POST['value'];
  
    $url = 'https://development.m75.ro/test_mts/public/highscore/';

    // what post fields?
    $fields = array(
       'name' => $var1,
       'value' => $var2,
    );

    // build the urlencoded data
    $postvars = http_build_query($fields);

    // open connection
    $ch = curl_init();

    // set the url, number of POST vars, POST data
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, count($fields));
    curl_setopt($ch, CURLOPT_POSTFIELDS, $postvars);

    // execute post
    $result = curl_exec($ch);

    // close connection
    curl_close($ch);
?>