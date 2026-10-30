const barang = {
    kode: "INV-001",
    nama: "Laptop",
    stok: 10,
    harga: 75000000
};

console.log(`nama = ${barang.nama}`);
console.log(`stok = ${barang.stok}`);

const stok = 5;
const status = "habiss";

if (stok === 5 && status !== "habis") {
    console.log("stok barang habis");
} else {
    console.log("stok barang tersedia");
}

const stok = 3;

if (stok === 0) {
    console.log("habis");
} else if (stok <5) {
    console.log("stok menipis");
} else {
    console.log("stok aman");
}

for (let i = 10; i >= 1; i--) {
    console.log("perulangan ke-", i);
}

for (let i = 10; i >= 1; i--) {
    if (i % 2 === 0) {
        console.log("Perulangan ke-", i, "ini angka genap");
    } else {
        console.log("Perulangan ke-", i, "ini angka ganjil");
    }
}

const daftarBarang = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Monitor"
]


for (let i = 0; i < daftarBarang.length; i++) {
    console.log(daftarBarang[i]);
}

function tentukanStatusStok(stok) {
    if (stok === 0) {
        return "Habis";
    } else if (stok < 5) {
        return "Menipis";
    } else {
        return "Aman";
    } 
}

console.log(tentukanStatusStok(0));
console.log(tentukanStatusStok(3));
console.log(tentukanStatusStok(15));

const hitungLuas = function (panjang, lebar) {
    return panjang * lebar;
};

console.log(hitungLuas(5, 3));