flatpickr("#tanggal", {
  dateFormat: "d F Y",
});

flatpickr("#masuk, #pulang", {
  enableTime: true,
  noCalendar: true,
  dateFormat: "H:i",
  time_24hr: true,
  disableMobile: true,
});

document.addEventListener("DOMContentLoaded", function () {
  const element = document.getElementById("shift");
  new Choices(element);
});

// ── Alert helpers ──────────────────────────────────────
function tampilAlert(pesan) {
  document.getElementById("alert-message").textContent = pesan;
  document.getElementById("alert-overlay").style.display = "flex";
}

function tutupAlert() {
  document.getElementById("alert-overlay").style.display = "none";
}

// ── Daftar validasi ────────────────────────────────────
const validasi = [
  {
    cek: () => document.querySelector("input[name='Nama']").value.trim() === "",
    pesan: "Nama harus diisi!",
  },
  {
    cek: () => document.querySelector("input[name='noabsen']").value.trim() === "",
    pesan: "No Absen harus diisi!",
  },
  {
    cek: () => document.getElementById("tanggal").value.trim() === "",
    pesan: "Tanggal harus diisi!",
  },
  {
    cek: () => document.getElementById("shift").value === "",
    pesan: "Shift harus dipilih!",
  },
  {
    cek: () => document.getElementById("masuk").value.trim() === "",
    pesan: "Jam masuk harus diisi!",
  },
  {
    cek: () => document.getElementById("pulang").value.trim() === "",
    pesan: "Jam pulang harus diisi!",
  },
  {
    cek: () => document.getElementById("myfile").files.length === 0,
    pesan: "Foto harus diupload!",
  },
];

// ── Submit handler ─────────────────────────────────────
document.getElementById("formabsen").addEventListener("submit", function (e) {
  for (const item of validasi) {
    if (item.cek()) {
      e.preventDefault();
      tampilAlert(item.pesan);
      return;
    }
  }
});
