<?php
 
declare(strict_types=1);
error_reporting(E_ALL);
 
if (isset($_POST['count']) && (int)$_POST['count'] === 1):
 try {
  
  $file1 = "dislike.txt";
  $data1 = (int)file_get_contents($file1);
  $data1++;
  $fh1 = fopen($file1,'w');
  fwrite($fh1, (string)$data1);
  fclose($fh1);
  echo json_encode($data1);
 } catch (Exception $e) {
  echo $e->getMessage();
 }
endif;