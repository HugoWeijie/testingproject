<?php
echo phpversion();
$p = 1;
$isntthisaglobal = "th";
if($p ==1 )
    {
        echo "huh";
    }
$cars = array("this","is","not","a","car");
foreach($cars as $x)
    {
        echo $_SERVER['PHP_SELF'];
    }
?>