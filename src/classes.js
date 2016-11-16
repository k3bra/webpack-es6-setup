
//stati (.) c , syntax sugar // operatores

class User {

  constructor(username, name) {
      this.username = username;
      this.name = name
  }

  getUser() {
    return `
      Username: ${this.username}
      Name:${this.name}`;
  }
}

var user = new User('e.domingues', 'Eduardo');
console.log(user.getUser());
