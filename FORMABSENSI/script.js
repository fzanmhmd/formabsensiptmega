 flatpickr("#tanggal", {
    dateFormat: "d F Y",
  });

flatpickr("#masuk, #pulang", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    time_24hr: true,
    disableMobile: true 
});

document.addEventListener("DOMContentLoaded", function () {
  const element = document.getElementById("shift");
  new Choices(element);
});
