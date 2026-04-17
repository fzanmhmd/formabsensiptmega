 flatpickr("#tanggal", {
    dateFormat: "d F Y",
  });

flatpickr("#jam", {
  enableTime: true,
  noCalendar: true,
  dateFormat: "H:i",
  time_24hr: true
});

document.addEventListener("DOMContentLoaded", function () {
  const element = document.getElementById("shift");
  new Choices(element);
});
