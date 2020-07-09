import {convertSecondsToHoursMins, extendObject, removeSpaces, secondsToTime} from './common.js';
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

  it(`secondsToTime func  works correctly`, () => {
    expect(secondsToTime(605)).toMatch(`00:10:05`);
  });

  it(`secondsToTime func  works correctly`, () => {
    expect(secondsToTime()).toMatch(`00:00:00`);
  });
});
