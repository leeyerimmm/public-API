document.addEventListener("DOMContentLoaded", () => {
  const currentMonthElem = document.querySelector(".current-month");
  const daysContainer = document.querySelector(".days");
  const prevMonthBtn = document.querySelector(".prev-month");
  const nextMonthBtn = document.querySelector(".next-month");
  let currentDate = new Date();
  
  const today = new Date();

  const renderCalendar = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();

    currentMonthElem.textContent = `${date.toLocaleString('default', { month: 'long' })} ${year}`;

    const firstDayIndex = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    daysContainer.innerHTML = '';

    Array.from({ length: firstDayIndex }).forEach(() => {
      daysContainer.appendChild(document.createElement('div')).classList.add('prev-month-day');
    });

    Array.from({ length: daysInMonth }, (_, i) => {
      const dayElem = document.createElement('div');
      dayElem.textContent = i + 1;

      if (year === today.getFullYear() && month === today.getMonth() && (i + 1) === today.getDate()) {
        dayElem.classList.add('current-day');
      }

      daysContainer.appendChild(dayElem);
    });
  };

  prevMonthBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
  });

  nextMonthBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
  });

  renderCalendar(currentDate);
});