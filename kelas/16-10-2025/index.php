<?php
$status = ['active', '', '', '', '', ''];

if(isset($_GET['menu'])){
    $menu = $_GET['menu'];

    switch($menu){
        case 'profil':
            $status = ['active', '', '', '', '', ''];
            break;
        case 'jurusan':
            $status = ['', 'active', '', '', '', ''];
            break;
        case 'kegiatan':
            $status = ['', '', 'active', '', '', ''];
            break;
        case 'prestasi':
            $status = ['', '', '', 'active', '', ''];
            break;
        case 'sejarah':
            $status = ['', '', '', '', 'active', ''];
            break;
        case 'kontak':
            $status = ['', '', '', '', '', 'active'];
            break;
        default:
            $status = ['active', '', '', '', '', ''];
            break;
    }
}




?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SMKN 2 BUDURAN</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
</head>

<body>
    <nav class="navbar navbar-expand-lg bg-info">
  <div class="container-fluid">
    <img src="img/logosmk.png" width="80" height="80" alt="">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link <?php echo $status[0]; ?>" href="index.php?menu=profil">Profil</a>
        <a class="nav-link <?php echo $status[1]; ?>" href="index.php?menu=jurusan">Jurusan</a>
        <a class="nav-link <?php echo $status[2]; ?>" href="index.php?menu=kegiatan">Kegiatan</a>
        <a class="nav-link <?php echo $status[3]; ?>" href="index.php?menu=prestasi">Prestasi</a>
        <a class="nav-link <?php echo $status[4]; ?>" href="index.php?menu=sejarah">Sejarah</a>
        <a class="nav-link <?php echo $status[5]; ?>" href="index.php?menu=kontak">Kontak</a>
      </div>
    </div>
  </div>
</nav>


<div>
        <section>
            <?php
            if (isset($_GET['menu'])) {
            $isi = $_GET['menu'];


            if ($isi == "sejarah") {
              require "pages/sejarah.php";
            }
            if ($isi == "prestasi") {
              require "pages/prestasi.php";
            }
            if ($isi == "kegiatan") {
              require "pages/kegiatan.php";
            }
            if ($isi == "profil") {
              require "pages/profil.php";

            }
            if ($isi == "jurusan") {
              require "pages/jurusan.php";
            }
            if ($isi == "kontak") {
              require "pages/kontak.php";

            }
            
            }
            else {
              require_once "pages/profil.php";
            } 
            

            if (isset($_POST['tombol'])) {
                $nama = $_POST['nama'];
                $pesan = $_POST['pesan'];
                $email = $_POST['email'];

                echo $nama;
                echo "<br>";
                echo $email;
                echo "<br>";
                echo $pesan;
            }
            ?>
        </section>

        <footer>
        <p>web ini dibuat oleh Laksma Raditya Soediandoro</p>
        </footer>
    </div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
</body>
</html>