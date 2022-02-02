<?php
$nums = range(1,49);
shuffle($nums);
$output = array();
for($i = 0; $i < 6; $i++) {
    $output["Number" . ($i + 1)] = $nums[$i];
}
$output["BonusNumber"] = $nums[6];
echo json_encode($output);
?>
