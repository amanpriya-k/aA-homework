// mystery scoping - copied from hw

function mysteryScoping1() {
  var x = 'out of block';
  if (true) {
    var x = 'in block';
    console.log(x);
  }
  console.log(x);
}

function mysteryScoping2() {
  const x = 'out of block';
  if (true) {
    const x = 'in block';
    console.log(x);
  }
  console.log(x);
}

function mysteryScoping3() {
  const x = 'out of block';
  if (true) {
    var x = 'in block';
    console.log(x);
  }
  console.log(x);
}

function mysteryScoping4() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';
    console.log(x);
  }
  console.log(x);
}

function mysteryScoping5() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';
    console.log(x);
  }
  let x = 'out of block again';
  console.log(x);
}

// mad lib

function madLib(verb, adj, noun) {
  var str = `We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}.`
  return str
}
console.log(madLib('make', 'best', 'guac'));


// is substring

function isSubstring(searchString, subString) {
  if (searchString.includes(subString)) {
    return true
  }
  return false
}

console.log(isSubstring('time to program', 'time'))
console.log(isSubstring("Jump for joy", "joys"))


// js looping constructs

function fizzBuzz(arr) {
  var x = [];
  arr.forEach(el => {
    if (((el % 3 === 0) || (el % 5 === 0)) && !((el % 3 === 0) && (el % 5 === 0))) {
      arr.push(el);
    }
  });
}

console.log([3, 5, 15, 9, 10])

function isPrime(num) {
  for(i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(3))
console.log(isPrime(7))
console.log(isPrime(4))
console.log(isPrime(12))

function sumOfPrimes(n) {
  var num = 0;
  var sum = 0;
  var counter = 2;
  while (num < n) {
    if (isPrime(counter)) {
      sum = sum + counter;
      num = num + 1;
    }
    counter = counter + 1;
  }
  return sum
}

console.log(sumOfPrimes(2)) // 2 + 3
console.log(sumOfPrimes(3)) // 2 + 3 + 5
console.log(sumOfPrimes(4)) // 2 + 3 + 5 + 7
console.log(sumOfPrimes(5)) // 2 + 3 + 5 + 7 + 11
