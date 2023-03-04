function addNumbers(num1, num2) {
  let carryString = "";
  let sumString = "";

  // Reverse the numbers to start from the unit place
  num1 = num1.toString().split("").reverse().join("");
  num2 = num2.toString().split("").reverse().join("");

  // Get the length of the longer number
  const max_len = Math.max(num1.length, num2.length);

  // Pad the shorter number with zeros to make them the same length
  num1 = num1.padEnd(max_len, "0");
  num2 = num2.padEnd(max_len, "0");

  const steps = {};

  let carry = 0;
  for (let i = 0; i < max_len; i++) {
    const digit1 = parseInt(num1[i]);
    const digit2 = parseInt(num2[i]);

    // Add the digits and carry from the previous step
    let sum = digit1 + digit2 + carry;

    if (i === max_len - 1) {
      // Add the current step to the steps array and Reverse the strings to get the correct order
      steps[`step${i+1}`] = {
        carryString: carryString.split("").reverse().join(""),
        sumString: sum.toString() + sumString.split("").reverse().join("")
      };
      break;
    }

    // If the sum is greater than 9, set carry to 1 and subtract 10 from sum
    if (sum > 9) {
      carry = 1;
      sum -= 10;
    } else {
      carry = 0;
    }

    if (i === 0) {
      carryString += '_';
    }

    // Append the sum to the sumString
    sumString += sum.toString();
    // If there is carry from this step, append it to the carryString
    carryString += carry.toString();

    // Add the current step to the steps array and Reverse the strings to get the correct order
    steps[`step${i+1}`] = {
      carryString: carryString.split("").reverse().join(""),
      sumString: sumString.split("").reverse().join("")
    };
  }

  return steps;
}

module.exports = {
  addNumbers,
}