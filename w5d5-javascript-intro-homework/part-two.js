// phase 2 - additional js problems

function titleize(names_arr, printCallback) {
  var result = names_arr.map(name => `Mx. ${name} Jingleheimer Schmidt`);
  printCallback(result)
}

titleize(["Mary", "Brian", "Leo"], (names_arr) => {
  names_arr.forEach(str => console.log(str));
});

console.log(titleize(["Mary", "Brian", "Leo"], printCallback));

// elephant object

function Elephant(name, heightInInches, tricks) {
  this.name = name;
  this.heightInInches = heightInInches;
  this.tricks = tricks;
}

function Elephant.prototype.trumpet = function () {
  console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`);
}

function Elephant.prototype.grow = function () {
  this.heightInInches = this.heightInInches + 12;
}

function Elephant.prototype.addTrick(trick) = function () {
  this.tricks.push(trick);
}

function Elephant.prototype.play = function () {
  randomTrick = this.tricks[Math.floor(Math.random() * this.tricks.length)]
  console.log(`${this.name} is ${randomTrick}!!`)
}
