<?php
session_start();
unset($_SESSION['money']);
unset($_SESSION['income']);
echo json_encode(['status' => 'reset']);
?>