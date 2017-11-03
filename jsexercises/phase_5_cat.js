function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function(){
  console.log(`${this.owner} loves ${this.name}`);
  return `${this.owner} loves ${this.name}`;
};

let cat1 = new Cat("josh", "kevin");
let cat2 = new Cat("socrates", "plato");

cat1.cuteStatement();
cat2.cuteStatement();
