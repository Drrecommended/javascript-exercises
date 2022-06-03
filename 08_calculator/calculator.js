const add = function(...nums) {
	const num1 = nums[0]
  const num2 = nums[1]
  return num1 + num2
};

const subtract = function(...nums) {
  const num1 = nums[0]
  const num2 = nums[1]
  return num1 - num2
};

const sum = function(nums) {
  return nums.reduce((a, b) => a + b, 0)
};

const multiply = function(nums) {
  return nums.reduce((a, b) => a * b, 1)
};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
