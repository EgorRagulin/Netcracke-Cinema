export class User {
  id: number;
  picture: string;
  firstName: string;
  secondName: string;
  role: string;

  constructor(id: number, firstName: string, secondName: string, role: string) {
    this.id = id;
    this.firstName = firstName;
    this.secondName = secondName;
    this.role = role;
  }
}
