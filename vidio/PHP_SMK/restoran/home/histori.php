<?php

$idpelanggan = $_SESSION['idpelanggan'];  // PERBAIKAN
$jumlahdata = $db->rowCOUNT("SELECT idorder FROM tblorder WHERE idpelanggan='$idpelanggan'"); // PERBAIKAN

$banyak = 4;

$halaman = ceil($jumlahdata / $banyak);

if (isset($_GET['p'])) {
    $p=$_GET['p'];
    $mulai = ($p * $banyak) - $banyak;
} else {
    $mulai = 0;
}

$sql = "SELECT * FROM vorder WHERE idpelanggan='$idpelanggan' ORDER BY tglorder DESC LIMIT $mulai, $banyak"; // PERBAIKAN
$row = $db->getALL($sql);
$no=1+$mulai;

?>
