function findDate() {
  const input = document.getElementById("dayInput").value;
  const result = document.getElementById("result");

  const dayNumber = parseInt(input);
  if (isNaN(dayNumber) || dayNumber < 1 || dayNumber > 999) {
    result.textContent = "Please enter a day number between 1 and 999.";
    return;
  }

  const startDate = new Date("1993-11-07T00:00:00");
  const targetDate = new Date(startDate);
  targetDate.setDate(startDate.getDate() + dayNumber - 1); 

  const options = { year: "numeric", month: "long", day: "numeric", weekday: "long" };
  const formattedDate = targetDate.toLocaleDateString("en-US", options);

  result.textContent = `Today is ${formattedDate} in Blue Prince.`;
}

function resetForm() {
  document.getElementById("dayInput").value = "";
  document.getElementById("result").textContent = "";
}
