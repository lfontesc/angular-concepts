const jestPreset = require('jest-preset-angular/jest-preset');
const { globals } = jestPreset;
const tsjest = globals['ts-jest'];
// set the correct path to the spect ts-config file
// the default for the jest-preset-angular package
// points to an incorrect path:
// <rootDir/src/tsconfig.spec.js
const tsjestOverrides = {
  ...tsjest,
  tsConfig: '<rootDir>/tsconfig.spec.json',
};
const globalOverrides = {
  ...globals,
  'ts-jest': { ...tsjestOverrides },
};
// make sure to add in the required 