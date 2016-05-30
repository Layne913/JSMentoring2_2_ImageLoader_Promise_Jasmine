export class Person {
  constructor (firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
    //able to call let p = new Person(); p.getName() without any error
    this.getName = this.getName.bind(this);


  //arrow function will keep this, not have super, prototype

  //this is not defined in this function
    setTimeout(function() {
      console.log(this._firstName);
    }, 200);

  //this is defined in arrow function
    setTimeout(()=>{
      console.log(this.firstName)
    }, 300);

  }

  getName() {
    console.log(this._firstName);
  }

}

//inheritence
class Student extends Person {

  constructor() {
    super();
  }
}

//arrow function will keep this, not have super, prototype
let p = new Person();
setTimeOut(p.getName, 1000);

//export
export const PI =3.14

//import
import {Person, PI} from './People'


//default export
export default class Person {

}
import Person from './People'
