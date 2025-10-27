#include <iostream>
#include <string>
using namespace std;

int main() {
    string nama;
    int tgl, bln;

    cout << "PROGRAM MENENTUKAN ZODIAK BERDASARKAN TANGGAL LAHIR\n";
    cout << "---------------------------------------------------\n";

    // Input
    cout << "Masukkan Nama Anda        : ";
    getline(cin, nama);
    cout << "Tanggal Lahir (1-31)      : ";
    cin >> tgl;
    cout << "Bulan Lahir (1-12)        : ";
    cin >> bln;

    // Validasi tanggal & bulan
    if (tgl < 1 || tgl > 31 || bln < 1 || bln > 12) {
        cout << "\nInput tanggal atau bulan tidak valid.\n";
        return 1;
    }

    // Menentukan Zodiak
    string zodiak;

    if ((bln == 3 && tgl >= 21) || (bln == 4 && tgl <= 19))
        zodiak = "Aries";
    else if ((bln == 4 && tgl >= 20) || (bln == 5 && tgl <= 20))
        zodiak = "Taurus";
    else if ((bln == 5 && tgl >= 21) || (bln == 6 && tgl <= 20))
        zodiak = "Gemini";
    else if ((bln == 6 && tgl >= 21) || (bln == 7 && tgl <= 22))
        zodiak = "Cancer";
    else if ((bln == 7 && tgl >= 23) || (bln == 8 && tgl <= 22))
        zodiak = "Leo";
    else if ((bln == 8 && tgl >= 23) || (bln == 9 && tgl <= 22))
        zodiak = "Virgo";
    else if ((bln == 9 && tgl >= 23) || (bln == 10 && tgl <= 22))
        zodiak = "Libra";
    else if ((bln == 10 && tgl >= 23) || (bln == 11 && tgl <= 21))
        zodiak = "Scorpio";
    else if ((bln == 11 && tgl >= 22) || (bln == 12 && tgl <= 21))
        zodiak = "Sagitarius";
    else if ((bln == 12 && tgl >= 22) || (bln == 1 && tgl <= 19))
        zodiak = "Capricorn";
    else if ((bln == 1 && tgl >= 20) || (bln == 2 && tgl <= 18))
        zodiak = "Aquarius";
    else if ((bln == 2 && tgl >= 19) || (bln == 3 && tgl <= 20))
        zodiak = "Pisces";
    else
        zodiak = "Tidak diketahui";

    // Output
    cout << "\n------------------------------\n";
    cout << "Halo, " << nama << "!\n";
    cout << "Zodiak kamu adalah: " << zodiak << endl;
    cout << "------------------------------\n";

    return 0;
}
