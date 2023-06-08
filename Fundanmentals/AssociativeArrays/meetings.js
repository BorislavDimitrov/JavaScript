function solve(arr) {
  let meetings = {};

  for (let i = 0; i < arr.length; i++) {
    let info = arr[i].split(" ");
    let day = info[0];
    let name = info[1];

    if (meetings.hasOwnProperty(day)) {
      console.log(`Conflict on ${day}`);
    } else {
      meetings[day] = name;
      console.log(`Scheduled for ${day}`);
    }
  }

  for (let key in meetings) {
    console.log(`${key} -> ${meetings[key]}`);
  }
}

solve(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
