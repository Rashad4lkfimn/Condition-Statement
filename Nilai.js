let siswa = [
    { nama: "Reja", nilai: 88 },
    { nama: "Rafi", nilai: 76 },
    { nama: "Habi", nilai: 54 },
    { nama: "Zaher", nilai: 65 }
];

for (let i = 0; i < siswa.length; i++) {
    let nama = siswa[i].nama;
    let nilai = siswa[i].nilai;
    let grade;

    switch (true) {
        case (nilai >= 85):
            grade = 'A';
            break;
        case (nilai >= 70):
            grade = 'B';
            break;
        case (nilai >= 60):
            grade = 'C';
            break;
        case (nilai >= 50):
            grade = 'D';
            break;
        default:
            grade = 'Tidak Lulus'; 
    }

    console.log(nama + " mendapatkan grade: " + grade);
}