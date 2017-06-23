<?php
 
// get the HTTP method, path and body of the request
$method = $_SERVER['REQUEST_METHOD'];
//$request = explode('/', trim($_SERVER['PATH_INFO'],'/'));
$input = json_decode(file_get_contents('php://input'),true);

$request = substr($_SERVER['PATH_INFO'], 1);


      echo isDomainAvailible('http://'.$request);


       //returns true, if domain is availible, false if not
       function isDomainAvailible($domain)
       {
         //check, if a valid url is provided
         if(!filter_var($domain, FILTER_VALIDATE_URL))
         {
          echo 'Not a valid url';
          return false;
         }

         //initialize curl
         $curlInit = curl_init($domain);
         curl_setopt($curlInit,CURLOPT_CONNECTTIMEOUT,10);
         curl_setopt($curlInit,CURLOPT_HEADER,true);
         curl_setopt($curlInit,CURLOPT_NOBODY,true);
         curl_setopt($curlInit,CURLOPT_RETURNTRANSFER,true);

         //get answer
         $response = curl_exec($curlInit);

         curl_close($curlInit);

$myarray=array();
$data=explode("\n",$response);
$status=$data[0];
if($status) {
  return $status;
} else {
  return '*********000';
}

       }
?>