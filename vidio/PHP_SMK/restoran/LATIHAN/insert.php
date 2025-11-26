<h1>Insert Data</h1>
<form action="" method="post">
    kategori:
    <input type="text" name="kategori">
    <br>
    <input type="submit" name="simpan" value="simpan">
</form>

<?php 

    require_once "../function.php";

    if (isset($_POST['simpan'])) {
        $kategori = $_POST['kategori'];
        $sql = "INSERT INTO tblkategori (idkategori, kategori) VALUES (30,'$kategori')";
        $result = mysqli_query($koneksi, $sql);

        echo "$kategori telah berhasil ditambahkan !";
        header("location:http://localhost/phpsmk/restoran/kategori/select.php");
    }

    

    // echo $sql;

?>