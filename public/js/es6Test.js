class User {
  // constructor
  constructor(firstname, lastname, type) {
    this.firstname = firstname
    this.lastname = lastname
    this.type = type
  }

  // méthode
  sayName() {
   return `${this.firstname}  ${this.lastname}`
  }

  // getter
  get role() {
    return this.type
  }

  // setter
  set role(value) {
    return this.type = value
  }
}

// le `new` est obligatoire pour appeler une classe
const user = new User("John", "Doe", "Contributor")

console.log(user.sayName()) // John Doe
console.log(user.role) // Contributor
user.role = "heh"
console.log(user.role) // Owner

module.exports = User;
