class Person {
  constructor(firstName, lastName, age, email) {
    this.firstName = firstName;
    (this.lastName = lastName), (this.age = age), (this.email = email);
  }

  toString() {
    return `${this.firstName} ${this.lastName} (age: ${this.age} email: ${this.email})`;
  }
}

function usePerson() {
  const person = new Person("Ivan", "Ivanov", 25, "ivanivanov@gmail.com");
  console.log(person.toString());
}

usePerson();
