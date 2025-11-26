<h3>Registrasi Pelanggan</h3>

<div class="form-group">

    <form action="" method="post">
        <div class="form-group w-50">
            <label for="">Pelanggan:</label>
            <input type="text" name="pelanggan" required placeholder="Isi pelanggan" class="form-control"><br>

        </div>
        <div class="form-group w-50">
            <label for="">Alamat</label>
            <input type="text" name="alamat" required placeholder="Isi alamat" class="form-control"><br>

        </div>
        <div class="form-group w-50">
            <label for="">Telepon:</label>
            <input type="text" name="telp" required placeholder="Isi telepon" class="form-control"><br>

        </div>
        <div class="form-group w-50">
            <label for="">Email:</label>
            <input type="emaik" name="email" required placeholder="Isi email" class="form-control"><br>

        </div>
        <div class="form-group w-50">
            <label for="">Password:</label>
            <input type="password" name="password" required placeholder="Password" class="form-control"><br>

        </div>
        <div class="form-group w-50">
            <label for="">Konfirmasi Password:</label>
            <input type="password" name="konfirmasi" required placeholder="Password" class="form-control"><br>

        </div>

        <div>

            <input class="btn btn-success mt-3" type="submit" name="simpan" value="Registrasi">

        </div>
    </form>
    

</div>

<?php 

    if (isset($_POST['simpan'])) {
        $pelanggan = $_POST['pelanggan'];
        $alamat = $_POST['alamat'];
        $telp = $_POST['telp'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $konfirmasi = $_POST['konfirmasi'];
        

        if ($password === $konfirmasi) {
            $sql = "INSERT INTO tblpelanggan VALUES ('','$pelanggan','$alamat','$telp','$email','$password',1)";
            // echo $sql;
            $db->runSQL($sql);
            header("location:?f=home&m=info");
        } else {
            echo "<h3 style='color:red;'>Password tidak sama dengan konfirmasi !</h3>";
        }
    
    }

?>