const sum = require('./sum');

test('adds 2 + 3 to equal 5', () => {
  expect(sum(2, 3)).toBe(5);
});


// PS C:\Users\momst\OneDrive\Learning\ElevenFiftyProjects\WD83A\red-badge\TDD-session> npm run test

// > tdd-session@1.0.0 test
// > jest

//  PASS  math/sum.test.js
//   √ adds 1 + 2 to equal 3 (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.644 s, estimated 1 s
// Ran all test suites.

// jest --collect-coverage
//  PASS  math/sum.test.js
//   √ adds 2 + 3 to equal 5 (1 ms)

// -|---------|----------|---------|---------|------------------- | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
// -|---------|----------|---------|---------|------------------- |     100 |      100 |     100 |     100 |                   
//   |     100 |      100 |     100 |     100 | 

// -|---------|----------|---------|---------|-------------------Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.655 s, estimated 1 s
// Ran all test suites.
// PS C:\Users\momst\OneDrive\Learning\ElevenFiftyProjects\WD83A\red-badge\TDD-session> jest --collectCoverage