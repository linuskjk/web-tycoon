<?php
$leaderboardFile = __DIR__ . '/../data/leaderboard.json';
if (file_exists($leaderboardFile)) {
    $data = json_decode(file_get_contents($leaderboardFile), true);
    if (!is_array($data)) $data = [];
    usort($data, function($a, $b) { return $b['money'] - $a['money']; });
    echo json_encode($data);
} else {
    echo json_encode([]);
}
?>