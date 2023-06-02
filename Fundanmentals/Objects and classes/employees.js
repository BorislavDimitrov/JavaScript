function solve(arr) {
  let employees = [];

  for (let i = 0; i < arr.length; i++) {
    let currentEmployee = arr[i];
    let employee = {
      name: currentEmployee,
      number: currentEmployee.length,
    };

    employees.push(employee);
  }

  for (const employee of employees) {
    console.log(
      `Name: ${employee.name} -- Personal number: ${employee.number}`
    );
  }
}

solve([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
