<?php
    $menu =['profil',"kontak","kegiatan","jadwal"];
    $berita = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolores, mollitia possimus doloremque eius aliquam et. Libero commodi rerum soluta, dolore consequuntur, neque labore enim placeat similique voluptates corporis. Asperiores vero blanditiis nulla labore necessitatibus amet laboriosam quod provident qui.";
    $img = "img/spendasi.png";
    $profile = "SMP NEGERI 2 SIDOARJO merupakan salah satu sekolah jenjang SMP berstatus Negeri yang berada di wilayah Kec. Sidoarjo, Kab. Sidoarjo, Jawa Timur. SMP NEGERI 2 SIDOARJO didirikan pada tanggal 1 Januari 1970 dengan Nomor SK Pendirian yang berada dalam naungan Kementerian Pendidikan dan Kebudayaan. Dalam kegiatan pembelajaran, sekolah yang memiliki 1101 siswa ini dibimbing oleh 55 guru yang profesional di bidangnya. Kepala Sekolah SMP NEGERI 2 SIDOARJO saat ini adalah Drs. Qodim. Operator yang bertanggung jawab adalah Supriyono.";
    $sda = "Jl,Ponti, Magersari, Kec. Sidoarjo, Kab. Sidoarjo, Jawa Timur ";
    $smp = "SMPN 2 SIDOARJO";
    $indo = "indonesia 513426";
    $imgt =  "img/isi.jpeg";
    $kegiatan = " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem voluptatem aliquid possimus dolorem, aliquam molestias ipsum! Error optio suscipit illo accusamus eius quam officiis quo repudiandae dolorem dolores ullam ad voluptatum, quae nam cum provident? Veniam necessitatibus facilis rem, vero accusamus ipsa voluptatum tempora? Cupiditate eum enim vero deleniti autem?";
   $menu = ['profil','kegiatan','jadwal','08198291829','kontak','program'];
   $jadwal = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure non deserunt eum rem dolore, esse quisquam temporibus nam corrupti voluptatibus.";
  $program = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt adipisci sed ea nisi placeat, laborum maxime, itaque accusamus modi exercitationem, animi laudantium magni a similique velit libero. Earum veritatis ad mollitia distinctio nemo officiis. Quia, omnis voluptatum! Fugiat, ullam, voluptate neque aliquam odit minus saepe cum rem nostrum eligendi perferendis."

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SMP NEGERI 2 SIDOARJO</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
  </head>
<body>
    <nav class="navbar navbar-light bg-dark fixed-top">
  <div class="container-fluid">
     <img src="<?=$img?>"  width="70" heigth="70" alt="">
    <a class="navbar-brand text-white" href="#">SMP NEGERI 2 SIDOARJO</a>
    <button class="navbar-toggler">
    </button>
  </div>
</nav>

<nav class="navbar mt-5">
    <div class="container-fluid">
        <div class="mt-5">
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
          <ul>
            <li><p><h2><?=$menu[5]?></h2></p></li>
          </ul>
          <p><?= $program ?></p>
        </div>
    </div>
  </nav>

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