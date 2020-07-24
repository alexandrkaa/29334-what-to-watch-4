import {convertSecondsToHoursMins, extendObject, removeSpaces, secondsToTime, convertMovieRateToText} from './common.js';
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

  it(`convertMovieRateToText func return awesome on 10 rating`, () => {
    expect(convertMovieRateToText(10)).toMatch(`Awesome`);
  });

  it(`convertMovieRateToText func return verygood on 8.1 rating`, () => {
    expect(convertMovieRateToText(8.1)).toMatch(`Very good`);
  });

  it(`convertMovieRateToText func return good on 6 rating`, () => {
    expect(convertMovieRateToText(6)).toMatch(`Good`);
  });

  it(`convertMovieRateToText func return normal on 4.9 rating`, () => {
    expect(convertMovieRateToText(4.9)).toMatch(`Normal`);
  });

  it(`convertMovieRateToText func return bad on 2.9 rating`, () => {
    expect(convertMovieRateToText(2.9)).toMatch(`Bad`);
  });

  it(`convertMovieRateToText func return bad as default`, () => {
    expect(convertMovieRateToText()).toMatch(`Bad`);
  });
});
