// question 1

var device = "Macbook pro";

// question 2

var person = {
  gender: "male",
  age: 19
};

// question 3

var outOfStock = false;

if (outOfStock === true) {
  console.log("Out of stock");
} else {
  console.log("In stock");
}

// question 4

var numbers = [0, 1, 2, 3, 5];

for (i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// question 5

for (i = 15; i <= 25; i++) {
  console.log(i);
}

// question 6

for (var i = 15; i <= 25; i++) {
  if (i === 20) {
    console.log(i);
  }
}

// question 7

var cars = [
  {
    manufacturer: "Volvo",
    model: 2012,
    electric: false
  },
  {
    manufacturer: "Tesla",
    model: 2019,
    electric: true
  }
];

for (i = 0; i < cars.length; i++) {
  console.log(cars[i].model);
  console.log(cars[i].electric);
}

// question 8

function whatIDontLike(foodAllergy) {
  console.log("I dont like " + foodAllergy);
}

whatIDontLike("gluten");

// question 9

function subtractNumbers(numberOne, numberTwo) {
  var sum = numberTwo - numberOne;
  console.log(sum);
}

subtractNumbers(11, 7);

// question 10

var emptyArray = [];
function addToArray(name) {
  emptyArray.push(name);
}

addToArray("Stian");
