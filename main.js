let integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

integers = integers.sort((a, b) => a - b).filter(a => {return a < 19}).map(a => a*1.5-1)

console.log(integers)