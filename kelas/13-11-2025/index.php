<form action="" method="post">
    <input type="number" name="nis" id="nis" required placeholder="NIS"><br>
    <input type="text" name="nama" id="nama" required placeholder="Nama Siswa"><br>
    <input type="text" name="alamat" id="alamat" placeholder="Alamat"><br>
    <input type="text" name="telepon" id="telepon" placeholder="No Telepon"><br>
    <input type="submit" name="simpan" value="Simpan">
</form>

<?php

    $host = 'localhost';
    $user = 'root';
    $password = '';
    $db = 'dbsekolah';

    $koneksi = mysqli_connect($host, $user, $password, $db);

    if (isset($_POST['simpan'])) {
        $nis = $_POST['nis'];
        $nama = $_POST['nama'];
        $alamat = $_POST['alamat'];
        $telepon = $_POST['telepon'];

        // echo $nis,'<br>',$nama,'<br>',$alamat,'<br>',$telepon;

        $sql = "INSERT INTO tblsiswa (nis, nama, alamat, telepon) VALUES ('$nis', '$nama', '$alamat', '$telepon')";
        echo $sql;
        // $query = mysqli_query($koneksi, $sql);

        $sql = "SELECT * FROM tblsiswa";
        $query = mysqli_query($koneksi, $sql);

        // while ($siswa = mysqli_fetch_array($query)) {
        //     echo "NIS: ".$siswa['nis']."<br>";
        //     echo "Nama: ".$siswa['nama']."<br>";
        //     echo "Alamat: ".$siswa['alamat']."<br>";
        //     echo "Telepon: ".$siswa['telepon']."<br><hr>";
        // }


    }

    

?>

<table border="1">
        <thead>
            <tr>
                <th>NIS</th>
                <th>Nama</th>
                <th>Alamat</th>
                <th>Telepon</th>
            </tr>
        </thead>

        <tbody>
            <?php while ($siswa = mysqli_fetch_array($query)) { ?>
                <tr>
                    <td><?php echo $siswa['nis']; ?></td>
                    <td><?php echo $siswa['nama']; ?></td>
                    <td><?php echo $siswa['alamat']; ?></td>
                    <td><?php echo $siswa['telepon']; ?></td>
                </tr>
            <?php } ?>
        </tbody>    
    </table>