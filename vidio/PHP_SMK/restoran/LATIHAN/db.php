<?php 

    class DB{

        // Properti - Objek pada class
        public $host = "127.0.0.1";
        private $user = "root";
        private $password = "";
        private $database = "dbrestoran";

        public function __construct()
        {
            echo "Function Construct";
        }

        // Method - function didalam class
        public function selectData()
        {
            echo "Select data";
        }

        public function getDatabase()
        {
            return $this->database;
        }

        public function tampil()
        {
            $this->selectData();
        }

        public static function insertData()
        {
            echo "Static Function";
        }

    }

    DB::insertData(); // Memanggil 'public static'

    $db = new DB; // Memanggil 'function __construct'

    // echo "<br>";

    // $db->selectData();

    // echo '<br>';

    // echo $db->host;

    // echo '<br>';

    // echo $db->getDatabase(). '<br>';

    // $db->tampil();

?>