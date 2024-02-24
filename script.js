let jam = document.getElementById("jam")
let menit = document.getElementById("menit")
let detik = document.getElementById("detik")

setInterval(() => {
    let waktuSekarang = new Date();
    jam.innerHTML = (waktuSekarang.getHours()<10?"0":"") + waktuSekarang.getHours();
    menit.innerHTML = (waktuSekarang.getHours()<10?"":"") + waktuSekarang.getMinutes();
    detik.innerHTML = (waktuSekarang.getHours()<10?"":"") + waktuSekarang.getSeconds();
}, 1000)