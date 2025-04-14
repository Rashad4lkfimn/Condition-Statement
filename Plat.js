let platKendaraan = ["B 1234 ABC", "D 5678 XYZ", "F 9101 QWE", "T 2345 RTY", "B 6789 UIO"];

for (let i = 0; i < platKendaraan.length; i++) {
    let plat = platKendaraan[i];
    let nomor = parseInt(plat.match(/\d+/)[0]); // Mengambil angka dari plat

    switch (nomor % 2) {
        case 0:
            console.log(plat + " memiliki nomor genap.");
            break;
        case 1:
            console.log(plat + " memiliki nomor ganjil.");
            break;
        default:
            console.log(plat + " memiliki nomor tidak valid.");
    }
}