const yearI = document.getElementById("yearI");
const monthI = document.getElementById("monthI");
const dayI = document.getElementById("dateI");

const submit = document.getElementById("submit");

const year = document.getElementById("year");
const month = document.getElementById("month");
const day = document.getElementById("date");

const currentDate = new Date();
console.log(currentDate.getFullYear());
console.log(currentDate.getDate());

submit.addEventListener("click", () => {
  console.log(dayI);
  console.log(dayI.value);

  year.textContent = month.textContent = day.textContent = "--";

  if (dayI.value) {
    const entered_date = dayI.value;
    const new_date = currentDate.getDate() - entered_date;
    day.textContent = new_date;
    dayI.value = "";
  } else if (monthI.value) {
    const entered_month = monthI.value;
    const new_month = 12 - entered_month;
    month.textContent = new_month;
    monthI.value = "";
  } else if (yearI.value) {
    const entered_year = yearI.value;
    const new_year = currentDate.getFullYear() - entered_year;
    year.textContent = new_year;
    yearI.value = "";
  }
});
