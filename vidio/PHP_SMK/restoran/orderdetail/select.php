<h3>Detail Pembelian Makanan Minuman</h3>

<div class="form-group">

    <form action="" method="post">
        <div class="form-group w-50 float-start">
            <label for="">Tanggal Awal:</label>
            <input type="date" name="tawal" required class="form-control">
        </div>

        <div class="form-group w-50 float-start">
            <label for="">Tanggal Akhir:</label>
            <input type="date" name="takhir" required class="form-control">
        </div>

        <div>

            <input class="btn btn-warning mt-3" type="submit" name="simpan" value="Cari">

        </div>
    </form>
</div>

<?php

$jumlahdata = $db->rowCOUNT("SELECT idorderdetail FROM vorderdetail");
$banyak = 3;

$halaman = ceil($jumlahdata / $banyak);

if (isset($_GET['p'])) {
    $p=$_GET['p'];
    $mulai = ($p * $banyak) - $banyak;
} else {
    $mulai = 0;
}

$sql = "SELECT * FROM vorderdetail ORDER BY idorderdetail DESC LIMIT $mulai, $banyak";

if (isset($_POST['simpan'])) {
    $tawal = $_POST['tawal'];
    $takhir = $_POST['takhir'];
    $sql = "SELECT * FROM vorderdetail WHERE tglorder BETWEEN '$tawal' AND '$takhir'";
}

$row = $db->getALL($sql);

$no=1+$mulai;

?>


<table class="table table-bordered mt-4" style="text-align: center;">
    <thead>
        <tr>
            <th>No</th>
            <th>Pelanggan</th>
            <th>Tanggal</th>
            <th>Menu</th>
            <th>Harga</th>
            <th>Jumlah</th>
            <th>Total</th>
            <th>Alamat</th>
        </tr>
    </thead>
    <tbody>
        <?php if(!empty($row)) { ?>
        <?php foreach($row as $r): ?>

        <tr>
            <td><?php echo $no++ ?></td>
            <td><?php echo $r['pelanggan'] ?></td>
            <td><?php echo $r['tglorder'] ?></td>
            <td><?php echo $r['menu'] ?></td>
            <td><?php echo $r['harga'] ?></td>
            <td><?php echo $r['jumlah'] ?></td>
            <td><?php echo $r['jumlah'] * $r['harga'] ?></td>
            <td><?php echo $r['alamat'] ?></td>

            <?php 

                // $total = $r['jumlah'] * $r['harga'];
                $total += $r['jumlah'] * $r['harga'];
            
            ?>

        </tr>
        <?php endforeach ?>
        <?php } ?>

    <tr>
        <td colspan="6"><h3>Total Semua: </h3></td>

        <td colspan="2"><h4><?php echo $total; ?></h4></td>
    </tr>

    </tbody>
</table>

<?php 

    for ($i=1; $i <= $halaman; $i++) { 
        echo '<a href="?f=orderdetail&m=select&p='.$i.'">' . $i . '</a>';
        echo '&nbsp &nbsp &nbsp';
    }

?>