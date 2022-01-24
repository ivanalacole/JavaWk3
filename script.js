//EASY
function exercise(x) {
    return "Today's exercise is " + x;
  }
  const run = exercise("Running");
  const swim = exercise("Swimming");
  console.log(run);
  console.log(swim);

  //MEDIUM
  function cutPizzaSlices(slices, people) {
    return `Each person gets ${slices / people} slices of pizza`;
  }
  console.log(cutPizzaSlices(8, 2));
  console.log(cutPizzaSlices(8, 3));
  //hard challenge
  class Person {
    #name
    #ssn
    constructor(name, ssn){
      this.#name = name;
      this.#ssn = ssn;
    }
      get name (){
        return this.#name
      }
  }
  const person3 = new Person('Ivana', 4455)
  console.log(person3.ssn)
  console.log(person3.name)
  // (
  //   ()=>{
  //   const person3 = new Person(prompt('name'), promp('ssn'))
  //   console.log(person3.ssn)
  //   console.log(person3.name)
  // }
  // )()
  //very hard challenge
  class newPerson {
      name;
      job;
      age;
      constructor(name, job, age) {
        this.name = name;
        this.job =job;
        this.age =age;
      }
      exercise(){
        console.log( `Running is fun`)
      }
      fetchJob(){
        console.log( `${this.name }is a ${this.job}`)
      }
    }
    const worker = new Person("Rashaad","software",26)
  
  
  
  
  
  
  
  
  
  
  
  
  
  