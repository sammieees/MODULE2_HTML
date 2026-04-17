<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "cv_database");

if ($conn->connect_error) {
    echo json_encode([
        "error" => "Connection failed: " . $conn->connect_error
    ]);
    exit();
}

$sql = "SELECT * FROM contacts ORDER BY id DESC";
$result = $conn->query($sql);

if (!$result) {
    echo json_encode([
        "error" => "Query failed: " . $conn->error
    ]);
    exit();
}

$contacts = [];

while ($row = $result->fetch_assoc()) {
    $contacts[] = $row;
}

echo json_encode($contacts);

$conn->close();
?>