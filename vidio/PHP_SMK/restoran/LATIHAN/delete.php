<?php 

    require_once "../function.php";



    $sql = "DELETE FROM tblkategori WHERE idkategori = $id";

    $result = mysqli_query($koneksi, $sql);

    echo $sql;
    echo '<br>'; // **
    echo "Data dengan ID: $id berhasil dihapus !"; // **

    header("location:http://localhost/phpsmk/restoran/kategori/select.php");

?>