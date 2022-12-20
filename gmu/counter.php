<?php
 
declare(strict_types=1);
error_reporting(E_ALL);
 
if (isset($_POST['count']) && (int)$_POST['count'] === 1):
 try {
  
  $file = "like.txt";
  $data = (int)file_get_contents($file);
  $data++;
  $fh = fopen($file,'w');
  fwrite($fh, (string)$data);
  fclose($fh);
  echo json_encode($data);
 } catch (Exception $e) {
  echo $e->getMessage();
 }
endif;