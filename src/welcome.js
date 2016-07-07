export class Welcome {
  heading = 'Welcome to Aurelia!';
  firstName = 'Helder';
  lastName = 'Gomes';

  get fullName() {
  	return `${this.firstName} ${this.lastName}`;
  }

  submit() {
  	alert(`Welcome, ${this.fullName}!`);
  }
}