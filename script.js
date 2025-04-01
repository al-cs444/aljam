// Fungsi untuk memperbarui jam
function updateClock() {
    const hourElement = document.getElementById('hour');
    const minuteElement = document.getElementById('minute');
    const secondElement = document.getElementById('second');
    const timeDisplay = document.getElementById('time');

    const now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    // Mengatur derajat rotasi untuk jarum jam
    let hourDegree = (hour % 12) * 30 + (minute / 60) * 30; // 30 derajat per jam
    let minuteDegree = minute * 6; // 6 derajat per menit
    let secondDegree = second * 6; // 6 derajat per detik

    // Mengatur posisi rotasi jarum
    hourElement.style.transform = `rotate(${hourDegree}deg)`;
    minuteElement.style.transform = `rotate(${minuteDegree}deg)`;
    secondElement.style.transform = `rotate(${secondDegree}deg)`;

    // Update waktu digital
    timeDisplay.textContent = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}:${String(second).padStart(2, '0')}`;
}

// Memanggil updateClock setiap detik
setInterval(updateClock, 1000);
updateClock(); // Memanggil sekali untuk memulai jam
