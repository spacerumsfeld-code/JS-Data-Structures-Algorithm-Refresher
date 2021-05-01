// JS Classes
// //  In order to build data structures in JS, we need to utilize its classes. Classes in JS are just templates for creating objects with predefined properties and methods!

// //  More specifically, we will stick to using the ES6 method of class creation and instantiation, IE, using the keyword "new" and very simply defining methods within the class body itself, alongside a call to the constructor and definition of all class properties within said call.

// //Each section will also have a version of the data structure in pseudoclassical style as well, but I will not be building on those basic examples. ES6 for life!

// Class Construction in ES6
//To create a class with ES6 syntax, you use the keyword "class" with an uppercase classname.
//then, we need to call the "constructor" and define all properties that each instance of the class will have:

// class Car {
//   constructor (model, speed) {
//     this.model = model;
//     this.speed = speed;
//   }
// }

// //To instantiate the class, we use the keyword "new" and assign it to a variable:

// let bobito = new Car(tesla, fast);

//To add methods to an ES6 class, we simply define them within the class body and outside of the constructor function:

class Car {
  constructor (model, speed) {
    this.model = model;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 1;
  }

  slowDown() {
    this.speed -= 1;
  }

  crash() {
    return `A ${this.model} has crashed!`;
  }

  static HelloWorld() {
    return 'hello world';
  }
};

let bobito = new Car('tesla', 0);

//Each instance of the class Car will have the ability to accelerate!!!!
//to invoke a method for an instance, simply use dot notation. Direct invocation of an instance's method with dot notation sets the value of "this" in the class constructor to be that specific instance, in case you were wondering.

bobito.accelerate();
console.log(bobito.speed);
bobito.accelerate();
console.log(bobito.speed);
console.log(bobito.crash());
console.log(Car.HelloWorld());

//Vroom Vroom!

//We can also add class methods to a class; these are included in this course because presumably they will be of some use in constructing data structures later....

//A class method is one that is not invoked by any individual instance of the class, but is a broader "utility function" associated with the class itself. We shall see how this is useful a bit later.

//For now, worry about this: adding a class method to a class simply entails defining the method in the class body (just like our instanc emethods) with the keyword "static" in front of it.

//The method is then invoked

static helloworld() {
  return 'hello world';
}

Car.helloworld();

//More Resources
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
