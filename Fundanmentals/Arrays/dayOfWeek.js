function dayOfWeek(num) {
  const days = [];
  days.push("Monday");
  days.push("Tuesday");
  days.push("Wednesday");
  days.push("Thursday");
  days.push("Friday");
  days.push("Saturday");
  days.push("Sunday");

  if (num < 1 || num > 7) {
    console.log(`Invalid day!`);
  } else {
    console.log(`${days[num - 1]}`);
  }
}

dayOfWeek(0);
