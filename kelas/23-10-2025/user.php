<?php

    if (isset($_SESSION["email"])) {
        header("Location: index.php");
    }
?>

<h1>selamat datang brow <?= $_SESSION ['email']?></h1>