// question 1

for (i = 15; i <= 25; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// question 2

function robot() {
  console.log("I am a function");
}

var innerFunction = robot();

function outerFunction(human) {
  outerFunction(human);
}

outerFunction(robot);
