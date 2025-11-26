#include <iostream>
using namespace std;

int main() {
    int tgl, bln;

    string zodiak[12] = {
        "Capricorn",  // 0
        "Aquarius",   // 1
        "Pisces",     // 2
        "Aries",      // 3
        "Taurus",     // 4
        "Gemini",     // 5
        "Cancer",     // 6
        "Leo",        // 7
        "Virgo",      // 8
        "Libra",      // 9
        "Scorpio",    // 10
        "Sagitarius"  // 11
    };

    cout << "=== PROGRAM ZODIAK ANDA ===\n";
    cout << "Masukkan Bulan Lahir Anda (1-12): ";
    cin >> bln;
    cout << "Masukkan Tanggal Lahir Anda: ";
    cin >> tgl;

    if (bln < 1 || bln > 12 || tgl < 1 || tgl > 31) {
        cout << "Input tidak valid!\n";
        return 0;
    }

    string hasil;

    switch (bln) {
        case 1:
            hasil = (tgl <= 19) ? zodiak[0] : zodiak[1];
            break;
        case 2:
            hasil = (tgl <= 18) ? zodiak[1] : zodiak[2];
            break;
        case 3:
            hasil = (tgl <= 20) ? zodiak[2] : zodiak[3];
            break;
        case 4:
            hasil = (tgl <= 19) ? zodiak[3] : zodiak[4];
            break;
        case 5:
            hasil = (tgl <= 20) ? zodiak[4] : zodiak[5];
            break;
        case 6:
            hasil = (tgl <= 20) ? zodiak[5] : zodiak[6];
            break;
        case 7:
            hasil = (tgl <= 22) ? zodiak[6] : zodiak[7];
            break;
        case 8:
            hasil = (tgl <= 22) ? zodiak[7] : zodiak[8];
            break;
        case 9:
            hasil = (tgl <= 22) ? zodiak[8] : zodiak[9];
            break;
        case 10:
            hasil = (tgl <= 22) ? zodiak[9] : zodiak[10];
            break;
        case 11:
            hasil = (tgl <= 21) ? zodiak[10] : zodiak[11];
            break;
        case 12:
            hasil = (tgl <= 21) ? zodiak[11] : zodiak[0];
            break;
        default:
            hasil = "Tidak diketahui";
            break;
    }

    cout << "\nZodiak Anda adalah: " << hasil << "\n";

    // Pesan ramalan berdasarkan zodiak (gunakan indeks modulo)
    string pesan[5] = {
        "Hari ini suasana hati Anda sedang cerah!",
        "Waspada, ada orang yang ingin menguji kesabaran Anda.",
        "Kesempatan baru akan datang, jangan ragu untuk mencoba!",
        "Percaya diri Anda membawa keberuntungan.",
        "Jangan lupa istirahat dan jaga kesehatan."
    };

    cout << "Pesan hari ini: " << pesan[bln % 5] << endl;

    return 0;
}
