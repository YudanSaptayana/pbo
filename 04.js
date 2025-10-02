class Mahasiswa {
  constructor(nama, nim, kelas, jurusan, alamat) {
    this.nama = nama;
    this.nim = nim;
    this.kelas = kelas;
    this.jurusan = jurusan;

    let _alamat = alamat;

    this.getAlamat = function() {
      return _alamat;
    };

    this.setAlamat = function(alamatBaru) {
      if (alamatBaru.length > 0) {
        _alamat = alamatBaru;
      } else {
        console.log("Alamat tidak valid!");
      }
    };

    this.getInfo = function() {
      return `Nama    : ${this.nama}
Kelas   : ${this.kelas}
NIM     : ${this.nim}
Jurusan : ${this.jurusan}
Alamat  : ${_alamat}
--------------------------`;
    };
  }
}

let m1 = new Mahasiswa("Yuand", "202401110051", "IP241", "Informatika", "Jl. Bukit Jaya No. 99");
let m2 = new Mahasiswa("Yudan", "202401110052", "IP245", "Rekayasa Perangkat Lunak", "Jl. Griya No. 01");
let m3 = new Mahasiswa("Nazwa", "202401110078", "IP244", "Teknik Informatika", "Jl. Nanas No. 05");

console.log("=== Akses Private (Alamat) ===");
console.log("Alamat Yudan sebelum:", m2.getAlamat());
m2.setAlamat("Jl. Durian No. 99");
console.log("Alamat Yudan sesudah:", m2.getAlamat());
m2.setAlamat("");

console.log("--------------------------");

console.log("=== Data Mahasiswa ===");
console.log(m1.getInfo());
console.log(m2.getInfo());
console.log(m3.getInfo());
