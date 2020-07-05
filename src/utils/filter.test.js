import {isEqual} from './filters.js';

describe(`Filter utils works correctly`, () => {
  it(`isEqual func works correctly`, () => {
    expect(isEqual(`One Two`, `one two`)).toBe(true);
  });
});
