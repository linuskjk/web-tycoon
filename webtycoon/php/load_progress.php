<?php
session_start();
$name = $_GET['name'] ?? '';
$playerFile = __DIR__ . '/../data/players/' . preg_replace('/[^a-zA-Z0-9_\-]/', '', $name) . '.json';
if ($name && file_exists($playerFile)) {
    $data = json_decode(file_get_contents($playerFile), true);
    echo json_encode([
        'money' => $data['money'] ?? 0,
        'unlocked' => $data['unlocked'] ?? [
            'html'=>false,'css'=>false,'css2'=>false,'js'=>false,'js2'=>false,
            'music'=>false,'favicon'=>false,'seo'=>false,'analytics'=>false
        ]
    ]);
} else {
    echo json_encode([
        'money' => 0,
        'unlocked' => [
            'html'=>false,'css'=>false,'css2'=>false,'js'=>false,'js2'=>false
        ]
    ]);
}
?>