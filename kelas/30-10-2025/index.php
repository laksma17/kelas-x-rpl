<form action="" method="post">
    tanggal: <br>
    <input type="number" name="tanggal" placeholder="Masukkan tanggal"><br>
    bulan: <br>
    <input type="number" name="bulan" placeholder="Masukkan bulan">
    <br>
    <input type="submit" name="kirim" value="zodiak anda">
</form>

<form action="" method="post">
Angka pertama: <br>
<input type="number" name="angkapertama"><br>
Angka kedua: <br>
<input type="number" name="angkakedua">
<br>
<input type="submit" name="tambah" value="tambah">
<input type="submit" name="kurang" value="kurang">
<input type="submit" name="kali" value="kali">
<input type="submit" name="bagi" value="bagi">
</form>





<?php

   if (isset($_POST['tambah'])) {
    $a = (float)$_POST['angkapertama'];
    $b = (float)$_POST['angkakedua'];
    echo "Hasil Penjumlahan: ". tambah($a, $b);
   }

   if (isset($_POST['kurang'])) {
    $a = (float)$_POST['angkapertama'];
    $b = (float)$_POST['angkakedua'];
    echo "Hasil Pengurangan: ". kurang($a, $b);
   }

   if (isset($_POST['kali'])) {
    $a = (float)$_POST['angkapertama'];
    $b = (float)$_POST['angkakedua'];
    echo "Hasil Perkalian: ". kali($a, $b);
   }

   if (isset($_POST['bagi'])) {
    $a = (float)$_POST['angkapertama'];
    $b = (float)$_POST['angkakedua'];
    echo "Hasil Pembagian: ". bagi($a, $b);
   }
   

    // if (isset($_POST['kirim'])) {
    //     $tanggal = $_POST['tanggal'];
    //     $bulan = $_POST['bulan'];
    //     zodiak($bulan, $tanggal);
    // }

    function belajar() {
      echo 'Hari ini saya belajar function';  
    }

    // memanggil function
    
    // function cekTanggal($tanggal){
        
    //     if ($tanggal > 0 && $tanggal < 32) {
    //     echo 'tanggal benar';
    //     }
    //     else{
    //     echo 'tanggal salah';
    //     }    
    // }

    // cekTanggal(1);                          
    // cekTanggal(0);
    // cekTanggal(100);

    $tanggal = 17;
    $bulan = 11;

    function zodiak($bulan, $tanggal) {
         if ($tanggal > 0 && $tanggal < 32 && $bulan > 0 && $bulan < 13) {

        if ($bulan == 1) {
            if ($tanggal > 0 && $tanggal < 20) {
               echo 'zodiak anda Capricorn ';
            }else {
                echo 'zodiak anda Aquarius ';
            }
        }

        if ($bulan == 2) {
            if ($tanggal > 0 && $tanggal < 20) {
                echo 'zodiak anda Aquarius ';
            }else {
                echo 'zodiak anda pisces ';
            }
        }

        if ($bulan == 3) {
            if ($tanggal > 0 && $tanggal < 20) {
                echo 'zodiak anda pisces ';
            }else {
                echo 'zodiak anda aries ';
            }
        }

        if ($bulan == 4) {
            if ($tanggal > 0 && $tanggal < 20) {
                echo 'zodiak anda aries ';
            }else {
                echo 'zodiak anda taurus ';
            }
        }

        if ($bulan == 5) {
            if ($tanggal > 0 && $tanggal < 20) {
                echo 'zodiak anda taurus ';
            }else {
                echo 'zodiak anda gemini ';
            }
        }

        if ($bulan == 6) {
            if ($tanggal > 0 && $tanggal < 20) {
                echo 'zodiak anda gemini ';
            }else {
                echo 'zodiak anda cancer ';
            }
        }

        if ($bulan == 7) {
            if ($tanggal > 0 && $tanggal < 20) {
                echo 'zodiak anda cancer  ';
            }else {
                echo 'zodiak anda leo ';
            }
        }

        if ($bulan == 8) {
            if ($tanggal > 0 && $tanggal < 20) {
                echo 'zodiak anda leo ';
            }else {
                echo 'zodiak anda virgo ';
            }
        }

        if ($bulan == 9) {
           if ($tanggal > 0 && $tanggal < 20) {
                echo 'zodiak anda leo ';
           }else {
            echo 'zodiak anda Libra ';
           }
        }

        if ($bulan == 10) {
            if ($tanggal > 0 && $tanggal < 20) {
               echo 'zodiak anda Libra ';
            }else {
                echo 'zodiak anda scorpio ';
            }
        }

        if ($bulan == 11) {
            if ($tanggal > 0 && $tanggal < 20) {
                echo 'zodiak anda scorpio ';
            }else {
                echo 'zodiak anda sagitarius ';
            }
        }

        if ($bulan == 12) {
            if ($tanggal > 0 && $tanggal < 20) {
                echo 'zodiak anda sagitarius ';
            }else {
                echo'zodiak anda capicorn ';
            }
        }

    }else{
        echo 'tanggal atau bulan salah';
    }
    }
   
    // function cekBulan($bulan){
    //     if ($bulan > 0 && $bulan < 13) {
    //         return true;
    //     }else {
    //         return false;
    //     }
    // }
    // cekBulan(bulan: 1);{
    //     if (cekBulan(bulan: 1)) {
    //         echo 'bulan atau tanggal benar ';
    //     }else {
    //         echo 'bulan atau tamggal salah ';
    //     }
    // }

    $p= 10;
    $l= 20;
    $t= 15;

    // function  luasPersegiPanjang($p, $l){
    //     $luas = $p * $l;
    //     return $luas;
    // }
    // echo 'volume balok adalah p=5, l=3, dan tinggi 15 adalah;';
    // echo luasPersegiPanjang($p,$l) * $t;

    function tambah($a, $b){
        return $a + $b;
    }
    function kurang($a, $b){
        return $a - $b;
    }
    function kali($a, $b){
        return $a * $b;
    }
    function bagi($a, $b){
        return $a / $b;
    }


?>