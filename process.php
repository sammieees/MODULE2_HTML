<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "cv_database");

if ($conn->connect_error) {
    echo json_encode([
        "message" => "Connection failed: " . $conn->connect_error
    ]);
    exit();
}

$data = json_decode(file_get_contents("php://input"), true);

if (json_last_error() !== JSON_ERROR_NONE) {
    echo json_encode([
        "message" => "Invalid JSON input"
    ]);
    exit();
}

if (empty($data['name'])) {
    echo json_encode([
        "message" => "Name is required"
    ]);
    exit();
}


$name = $conn->real_escape_string($data['name']);

$sql = "INSERT INTO contacts (name) VALUES ('$name')";


if ($conn->query($sql) === TRUE) {
    echo json_encode([
        "message" => "Data saved successfully"
    ]);
} else {
    echo json_encode([
        "message" => "Error saving data: " . $conn->error
    ]);
}

$conn->close();
?>