<!-- belajar php
<h1>saya belajar php</h1> -->
<?php
    // echo '<h1>saya belajar php</h1>';
    // echo 'saya kelas';
    // echo 12;
    // echo '<br>';

    $nama = 'Laksma Raditya S';
    $umur = 15;
    $kelas = 'X-RPL';
    $alamat = 'sidokare';
    $hobi = 'badminton dan futsal';
    $enter = '<br>';

    echo $nama;
    echo $enter;

    echo $umur;
    echo $enter;

    echo $kelas;
    echo $enter;

    echo $alamat;
    echo $enter;

    echo $hobi;
    

    // echo 'Nama: Laksma Raditya S <br>';
    // echo 'Umur: 15 tahun <br>';
    // echo 'Kelas: X-RPL <br>';
    // echo 'Alamat: sidoarjo sidokare asri RW 06 RT 23 BLOK AQ-04 <br>';
    // echo 'Hobi: futsal dan badminton <br>';


    
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>web laksma</title>
</head>
<body>
    <div>
        <h1>identitas</h1>
        <table>
            <tbody>
                <tr>
                    <td>nama</td>
                    <td><?= $nama ?></td>
                </tr>
                <tr>
                    <td>Umur</td>
                    <td><?= $umur ?></td>
                </tr>
                <tr>
                    <td>kelas</td>
                    <td><?= $kelas ?></td>
                </tr>
                <tr>
                    <td>alamat</td>
                    <td><?= $alamat ?></td>
                </tr>
                <tr>
                    <td>Hobi</td>
                    <td><?= $hobi ?></td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
</html>