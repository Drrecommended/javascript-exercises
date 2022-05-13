const sumAll = function (...args) {
  let fullArr = []
  let sum = 0
  const reducer = (accumulator, currentValue) => accumulator + currentValue
  args.sort((a, b) => {
    return a - b
  })
  if (
    args[0] < 0 ||
    typeof args[0] !== 'number' ||
    typeof args[1] !== 'number'
  ) {
    return 'ERROR'
  } else {
    for (let i = args[0]; i <= args[1]; i++) {
      fullArr.push(i)
    }

    sum = fullArr.reduce(reducer)
    return sum
  }
}

// Do not edit below this line
module.exports = sumAll
