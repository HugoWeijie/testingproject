<?php
header('Content-Type: application/json');
$pdo = new PDO("mysql:host=localhost;dbname=taskmanager;charset=utf8", "root", "");

// Get action from URL (?action=list/add/delete/update)
$action = $_GET['action'] ?? '';

if ($action === 'list') {
    $stmt = $pdo->query("SELECT * FROM tasks");
    echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
}
elseif ($action === 'add' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $stmt = $pdo->prepare("INSERT INTO tasks (title) VALUES (?)");
    $stmt->execute([$data['title']]);
    echo json_encode(['status' => 'ok']);
}
elseif ($action === 'delete' && isset($_GET['id'])) {
    $stmt = $pdo->prepare("DELETE FROM tasks WHERE id = ?");
    $stmt->execute([$_GET['id']]);
    echo json_encode(['status' => 'deleted']);
}
else {
    echo json_encode(['error' => 'Invalid request']);
}