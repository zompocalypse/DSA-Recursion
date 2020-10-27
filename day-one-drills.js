// 1. Counting Sheep

function countSheep(number) {
  if (number === 0) {
    return 'All sheep jumped over the fence';
  }
  console.log(`${number}:Another sheep jumps over the fence`);
  countSheep(number - 1);
}

console.log(countSheep(5));

// 2. Power Calculator

function powerCalculator(base, exponent) {
  if (exponent < 0) return 'should return exponent should be >= 0';
  if (exponent === 0) return 1;

  return base * powerCalculator(base, exponent - 1);
}

console.log(powerCalculator(10, 3));

//3. Reverse String

function reverseString(string) {
  if (string === '') {
    return '';
  }

  return reverseString(string.slice(1)) + string[0];
}

console.log(reverseString('hello'));

// 4. nth Triangluar Number

function nthTriangleNumber(number) {
  if (number === 1) {
    return 1;
  }

  return number + nthTriangleNumber(number - 1);
}

console.log(nthTriangleNumber(5));

// 5. String Splitter

function stringSplitter(string, splitter, result = ['']) {
  if (string.length === 0) {
    return result;
  }

  if (string[0] === splitter) {
    result.push('');
  } else {
    result[result.length - 1] += string[0];
  }
  return stringSplitter(string.slice(1), splitter, result);
}

console.log(stringSplitter('02/20/2020', '/'));

// 6. Fibonacci

function fibonacci(number, result = ['']) {
  if (number === 1) {
    return [0, 1];
  } else {
    result = fibonacci(number - 1);
    result.push(result[number - 1] + result[number - 2]);
    return result;
  }
}

console.log(fibonacci(7)); // 13

// 7. Factorial

function factorial(number) {
  if (number === 1) {
    return 1;
  }
  return number * factorial(number - 1);
}

console.log(factorial(5));

// 8. Find a way out of the maze

function findAWayOut(maze, x = 0, y = 0, path = '', paths = []) {
  if (x < 0 || y < 0 || x >= maze.length || y >= maze[x].length) {
    return false;
  }

  let value = maze[x][y];
  maze[x][y] = 'v';
  if (value === '*' || value === 'v') {
    return false;
  }
  if (value === 'e') {
    paths.push(path);
    return paths;
  }

  let up = findAWayOut(maze, x - 1, y, path + 'u', paths);
  let down = findAWayOut(maze, x + 1, y, path + 'd', paths);
  let left = findAWayOut(maze, x, y - 1, path + 'l', paths);
  let right = findAWayOut(maze, x, y + 1, path + 'r', paths);

  return paths;
}

let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e'],
];

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e'],
];

console.log(findAWayOut(maze));

// 9. Find ALL the ways out of the maze - Needs updating

function findAWayOut(maze, x = 0, y = 0, path = '', paths = []) {
  if (x < 0 || y < 0 || x >= maze.length || y >= maze[x].length) {
    return false;
  }

  let value = maze[x][y];
  maze[x][y] = 'v';
  if (value === '*' || value === 'v') {
    return false;
  }
  if (value === 'e') {
    paths.push(path);
    return paths;
  }

  let up = findAWayOut(maze, x - 1, y, path + 'u', paths);
  let down = findAWayOut(maze, x + 1, y, path + 'd', paths);
  let left = findAWayOut(maze, x, y - 1, path + 'l', paths);
  let right = findAWayOut(maze, x, y + 1, path + 'r', paths);

  return paths;
}

let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e'],
];

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e'],
];

// 10. Anagrams - O(!n)

function getAnagrams(string, results = []) {
  if (string.length === 1) {
    results.push(string);
    return results;
  }

  for (let i = 0; i < string.length; i++) {
    let firstCharacter = string[i];
    let remainingCharacters = string.substring(0, i) + string.substring(i + 1);
    let permutations = getAnagrams(remainingCharacters);
    for (let j = 0; j < permutations.length; j++) {
      results.push(firstCharacter + permutations[j]);
    }
  }
  return results;
}

console.log(getAnagrams('east'));

// 11. Organization Chart

const organization = {
  Zuckerberg: {
    Schroepfer: {
      Bosworth: {
        Steve: {},
        Kyle: {},
        Andra: {},
      },
      Zhao: {
        Richie: {},
        Sofia: {},
        Jen: {},
      },
      Badros: {
        John: {},
        Mike: {},
        Pat: {},
      },
      Parikh: {
        Zach: {},
        Ryan: {},
        Tes: {},
      },
    },
    Schrage: {
      VanDyck: {
        Sabrina: {},
        Michelle: {},
        Josh: {},
      },
      Swain: {
        Blanch: {},
        Tom: {},
        Joe: {},
      },
      Frankovsky: {
        Jasee: {},
        Brian: {},
        Margaret: {},
      },
    },
    Sandberg: {
      Goler: {
        Eddie: {},
        Julie: {},
        Annie: {},
      },
      Hernandez: {
        Rowi: {},
        Inga: {},
        Morgan: {},
      },
      Moissinac: {
        Amy: {},
        Chuck: {},
        Vinni: {},
      },
      Kelley: {
        Eric: {},
        Ana: {},
        Wes: {},
      },
    },
  },
};

function printOrganization(array, indent = 0) {
  for (let key in array) {
    console.log(' '.repeat(indent), key);
    printOrganization(array[key], indent + 4);
  }
}

console.log(printOrganization(organization));

// 12. Binary Representation

function convertToBinary(num) {
  if (num > 0) {
    let binary = Math.floor(num % 2);
    return convertToBinary(Math.floor(num / 2)) + binary;
  } else {
    return '';
  }
}
console.log(convertToBinary(25));
