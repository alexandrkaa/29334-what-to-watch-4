import {convertSecondsToHoursMins, extendObject, removeSpaces} from './common.js';
describe(`Common utils works correctly`, () => {
  it(`convertSecondsToHoursMins func  works correctly`, () => {
    expect(convertSecondsToHoursMins(4200)).toMatch(`1h 10m`);
  });

  it(`extendObject func works correctly`, () => {
    expect(extendObject({a: 1}, {b: 1})).toMatchObject({a: 1, b: 1});
  });

  it(`removeSpaces func  works correctly`, () => {
    expect(removeSpaces(`One Two Three`)).toMatch(`OneTwoThree`);
  });
});
