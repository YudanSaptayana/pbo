// Data pendaftar
const pendaftar = [
  {
    nama: "Yudan",
    email: "yakult@gmail.com",
    jenisKelamin: "Laki-laki"
  }
];

// Simpan ke localStorage
localStorage.setItem("pendaftar", JSON.stringify(pendaftar));
console.log("Data pendaftar berhasil disimpan!");

// Ambil data kembali
const dataPendaftar = localStorage.getItem("pendaftar");
const listPendaftar = JSON.parse(dataPendaftar);

// Tampilkan data pendaftar
console.log("Daftar Pendaftar:");
listPendaftar.forEach(function (p) {
  console.log(
    p.nama + " - " + p.email + " - " + p.jenisKelamin
  );
});


// Data mahasiswa
const mahasiswa = [
  {
    nama: "Yuand",
    umur: 20,
    jurusan: "Informatika"
  },
  {
    nama: "Nazwa",
    umur: 21,
    jurusan: "Ekonomi Perbankan"
  }
];

// Simpan ke localStorage
localStorage.setItem("mahasiswa", JSON.stringify(mahasiswa));
console.log("Data mahasiswa berhasil disimpan!");

// Ambil kembali data mahasiswa
const dataMahasiswa = localStorage.getItem("mahasiswa");
const listMahasiswa = JSON.parse(dataMahasiswa);

// Tampilkan data mahasiswa
console.log("Daftar Mahasiswa:");
listMahasiswa.forEach(function (m) {
  console.log(
    m.nama + " - " + m.jurusan + " - " + m.umur + " tahun"
  );
});
