const sum = (...numbers: Array<number>) => {
  return numbers.reduce((current, total) => total * current, 1)
}

export default sum
