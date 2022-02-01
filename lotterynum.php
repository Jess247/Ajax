<?php
$zahlen = range(1,49);
shuffle($zahlen);
for($i = 0; $i < 6; $i++) {
    echo $zahlen[$i] . " ";
}
?>