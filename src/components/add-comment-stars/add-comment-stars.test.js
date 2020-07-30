import React from 'react';
import renderer from 'react-test-renderer';
import AddCommentStars from './add-comment-stars.jsx';

describe(`<AddCommentStars /> should match snapshot`, () => {
  const onRadioChange = jest.fn();
  const rating = 1;
  it(`<AddCommentForm /> should match snapshot not disabled`, () => {
    const tree = renderer
      .create(
          <AddCommentStars
            starsNumber={3}
            rating={rating}
            isDisabled={false}
            onRadioChange={onRadioChange}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`<AddCommentStars /> should match snapshot disabled`, () => {
    const tree = renderer
      .create(
          <AddCommentStars
            starsNumber={3}
            rating={rating}
            isDisabled={true}
            onRadioChange={onRadioChange}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
