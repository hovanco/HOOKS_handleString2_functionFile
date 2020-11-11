// find perfect number
const handlePerfectNumber = (arrString) => {
  var arrPerfectNum = [];
  var total = 0;

  for (let j of arrString) {
    total = 0;
    for (let i = 1; i <= j / 2; i++) {
      if (j % i === 0) {
        total = total + i;
      }
    }
    if (total == j) {
      arrPerfectNum.push(j);
      console.log(arrPerfectNum);
    }
  }
  return arrPerfectNum.join();
};

// find prime number
const handlePrimeNumber = (arrString) => {
  var arrPrimeNum = [];
  let isT = 0;
  for (let j of arrString) {
    isT = 0;
    for (var i = 2; i <= j / 2; i++) {
      if (j % i === 0) {
        isT++;
        break;
      }
    }
    if (isT == 0) {
      arrPrimeNum.push(j);
    }
  }
  return arrPrimeNum.join();
};

// for one number
const fibonacciNumber = (index) => {
  if (index > 30) return 999999; //
  if (index === 1) return 0;
  if (index === 2) return 1;
  return fibonacciNumber(index - 1) + fibonacciNumber(index - 2); // recursive function (ham de quy)
};

const handleFibonacciNumber = (arrString) => {
  var arrFibonacciNum = [];
  for (let j of arrString) {
    arrFibonacciNum.push(fibonacciNumber(+j));
  }
  return arrFibonacciNum.join();
};

// for one number
const factorialNumber = (index) => {
  if (index > 30) return 999999;
  if (index === 1) return 1;
  if (index === 0) return 1;
  return factorialNumber(index - 1) * index;
};

const handleFactorialNumber = (arrString) => {
  var arrFactorialNum = [];
  for (let j of arrString) {
    arrFactorialNum.push(factorialNumber(+j));
  }
  return arrFactorialNum.join();
};

export {
  handlePerfectNumber,
  handlePrimeNumber,
  fibonacciNumber,
  handleFibonacciNumber,
  factorialNumber,
  handleFactorialNumber,
};
