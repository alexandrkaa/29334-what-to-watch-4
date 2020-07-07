import {isSameText} from './filters.js';

describe(`Filter utils works correctly`, () => {
  it(`isSameText func works correctly`, () => {
    expect(isSameText(`One Two`, `one two`)).toBe(true);
  });
});
