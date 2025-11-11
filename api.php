<?php
header('Content-Type: application/json');
$file = __DIR__.'/data.json';
$pdo = new PDO("mysql:host=localhost;dbname=testdb;charset=utf8", "root", "");

if(!file_exists($file))
{
    file_put_contents($file, json_encode(['forVisualizationPurposes' => []], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
}
function read_data($file)
{
    $json = file_get_contents($file);
    $data = json_decode($json, TRUE);
    if(!is_array($data) || !isset($data['forVisualizationPurposes']))
    {
        $data = ['forVisualizationPurposes' => []];
    }
    return $data;
}
function write_data($file,$data)
{
    file_put_contents($file,json_encode($data,JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
}

// Get action from URL (?action=list/add/delete/update)
$action = $_GET['action'] ?? '';

$data = read_data($file);

if ($action === 'list') {
    $stmt = $pdo->query("SELECT * FROM tests");
    echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
}
elseif ($action === 'add' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $stmt = $pdo->prepare("INSERT INTO tests (title) VALUES (?)");
    $stmt->execute([$data['title']]);
    echo json_encode(['status' => 'ok']);
}
elseif ($action === 'delete' && isset($_GET['id'])) {
    $stmt = $pdo->prepare("DELETE FROM tests WHERE id = ?");
    $stmt->execute([$_GET['id']]);
    echo json_encode(['status' => 'deleted']);
}
elseif ($action === 'deleteAll')
{
    $stmt = $pdo->prepare("DELETE * FROM tests");
    $stmt->execute();
    echo json_encode(['status' => 'deleted']);
}
else {
    echo json_encode(['error' => 'Invalid request']);
}