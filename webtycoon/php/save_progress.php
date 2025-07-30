<?php
session_start();
$data = json_decode(file_get_contents('php://input'), true);
if ($data && isset($data['name'])) {
    $playerFile = __DIR__ . '/../data/players/' . preg_replace('/[^a-zA-Z0-9_\-]/', '', $data['name']) . '.json';
    file_put_contents($playerFile, json_encode([
        'money' => $data['money'],
        'unlocked' => $data['unlocked'] ?? [
            'html'=>false,'css'=>false,'css2'=>false,'js'=>false,'js2'=>false,
            'music'=>false,'favicon'=>false,'seo'=>false,'analytics'=>false
        ]
    ]));

    // Update leaderboard with current money (not max ever)
    $leaderboardFile = __DIR__ . '/../data/leaderboard.json';
    $leaderboard = file_exists($leaderboardFile) ? json_decode(file_get_contents($leaderboardFile), true) : [];
    $found = false;
    foreach ($leaderboard as &$entry) {
        if ($entry['name'] === $data['name']) {
            $entry['money'] = $data['money'];
            $found = true;
            break;
        }
    }
    if (!$found) {
        $leaderboard[] = ['name' => $data['name'], 'money' => $data['money']];
    }
    usort($leaderboard, function($a, $b) { return $b['money'] - $a['money']; });
    file_put_contents($leaderboardFile, json_encode($leaderboard));
    echo json_encode(['status' => 'ok']);
} else {
    echo json_encode(['status' => 'error']);
}
?>