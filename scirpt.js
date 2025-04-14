let nomorKendaraan = [1234, 5678, 9101, 2345, 6789];
for (let i = 0; i < nomorKendaraan.length; i++) {
    let nomor = nomorKendaraan[i]; 
    switch (nomor % 2) {
        case 0:
            console.log(nomor + " adalah nomor genap.");
            break; 
        case 1:
            console.log(nomor + " adalah nomor ganjil.");
            break; 
        default:
            console.log(nomor + " tidak valid."); 
    }
}


let nilai = [95, 85, 75, 65, 55, 45];

for (let i = 0; i < nilai.length; i++) {
    let score = nilai[i]; 
    let grade;
    switch (true) {
        case (score >= 90):
            grade = 'A';
            break;
        case (score >= 80):
            grade = 'B';
            break;
        case (score >= 70):
            grade = 'C';
            break;
        case (score >= 60):
            grade = 'D';
            break;
        default:
            grade = 'F';
    }
    console.log("Nilai: " + score + " - Grade: " + grade);
}