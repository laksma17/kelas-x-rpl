<?php
    $menu =['profil',"kontak","kegiatan","jadwal"];
    $berita = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolores, mollitia possimus doloremque eius aliquam et. Libero commodi rerum soluta, dolore consequuntur, neque labore enim placeat similique voluptates corporis. Asperiores vero blanditiis nulla labore necessitatibus amet laboriosam quod provident qui.";
    $img = "img/spendasi.jpeg";
    $profile = "SMP NEGERI 2 SIDOARJO merupakan salah satu sekolah jenjang SMP berstatus Negeri yang berada di wilayah Kec. Sidoarjo, Kab. Sidoarjo, Jawa Timur. SMP NEGERI 2 SIDOARJO didirikan pada tanggal 1 Januari 1970 dengan Nomor SK Pendirian yang berada dalam naungan Kementerian Pendidikan dan Kebudayaan. Dalam kegiatan pembelajaran, sekolah yang memiliki 1101 siswa ini dibimbing oleh 55 guru yang profesional di bidangnya. Kepala Sekolah SMP NEGERI 2 SIDOARJO saat ini adalah Drs. Qodim. Operator yang bertanggung jawab adalah Supriyono.";
    $sda = "SIDOARJO PONTI ";
    $smp = "SMPN 2 SIDOARJO";
    $indo = "indonesia 513426";
    $imgt =  "img/isi.jpeg";
    $kegiatan = " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem voluptatem aliquid possimus dolorem, aliquam molestias ipsum! Error optio suscipit illo accusamus eius quam officiis quo repudiandae dolorem dolores ullam ad voluptatum, quae nam cum provident? Veniam necessitatibus facilis rem, vero accusamus ipsa voluptatum tempora? Cupiditate eum enim vero deleniti autem?";
   $menu = ['profil','kegiatan','jadwal','08198291829','kontak'];
   $jadwal = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure non deserunt eum rem dolore, esse quisquam temporibus nam corrupti voluptatibus.";

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>web sekolah spendasi</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
</head>
<body>
    <nav class="navbar navbar-light bg-primary fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">SMPN 2 SIDOARJO</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>
<br>
<br>
<br>
    <div>
        <div>
            <img src="<?=$img?>" alt="">
            <img src="<?= $imgt ?>" alt="">
        </div>>
        <div>
          <ul>
            <li><h2><?= $menu[0] ?></h2></li>
          </ul>
          <p><?= $profile ?></p>
        </div>
        <br>
        <div>
          <ul>
            <li><h2><?= $menu[1] ?></h2></li>
          </ul>
          <p><?= $kegiatan ?></p>
        </div>
        <div>
          <ul>
            <li><h2><?= $menu[2] ?></h2></li>
          </ul>
          <p><?= $jadwal ?></p> 
        </div>
        <div>
        </div>
    </div>

    <div class="jumbotron mt-3 jumbotron-fluid bg-dark text-light" id="tentang">
    <div class="container">
      <div class="row-">
        <div class="col-lg-4">
          <p> <strong><?= $smp ?></strong> <br> <p><?= $sda ?></p> <br> <?= $indo ?></p>
        </div>
        <div class="col-lg-4">
          <p> <strong></strong> 
           <br>  <?= $menu[4] ?> </p>
            <p><?= $menu[3] ?></p>

        </div>
      </div>
    </div>
  </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
</body>
</html>