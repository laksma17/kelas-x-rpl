<h1>login</h1>

<form action="">
    <input type="email" name="email" placeholder="email"><br>
    <input type="password" name="password" placeholder="password"><br>
    <input type="submit" value="login" name="submit">
</form>

<?php
if (isset($_POST["submit"])) {
    $email = $_POST["email"];
    $password = $_POST["password"];

   if ($email =="laksma1795@gmail.com" && $password =="laksma1795") {
        $_SESSION['email'] = $email; 
       $_SESSION["email"] = $email;
       echo "login berhasil welcome brow";
       header("Location: index.php");
    } else {
       echo "login gagal";
   }
}
?>