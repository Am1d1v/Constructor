


function User(name, id){
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function(){
    console.log(`Hello, ${this.name}`);
  };

}

let Dima = new User("Dima", 20);

User.prototype.exit = function(){
  console.log(`User "${this.name}" leave`);
}


//let Dima = new User("Dima", 20);
let Anna = new User("Anna", 20);

console.log(Dima);
console.log(Anna);
//console.log(typeof(Dima));

//Dima.hello();
//Anna.hello();

Dima.exit();