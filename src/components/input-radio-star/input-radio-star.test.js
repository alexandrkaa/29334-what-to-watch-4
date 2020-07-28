import React from 'react';
import renderer from 'react-test-renderer';
import InputRadioStar from './input-radio-star.jsx';

const idx = 1;
const onRadioChange = jest.fn();
describe(`<InputRadioStar /> should match snapshot`, () => {
  it(`<InputRadioStar /> should match snapshot (enabled)`, () => {
    const postCommentInProgress = false;
    const tree = renderer
      .create(
          <InputRadioStar
            isDisabled={postCommentInProgress}
            key={idx}
            id={idx + 1}
            isChecked={false}
            onRadioChange={onRadioChange}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`<InputRadioStar /> should match snapshot (disabled)`, () => {
    const postCommentInProgress = true;
    const tree = renderer
      .create(
          <InputRadioStar
            isDisabled={postCommentInProgress}
            key={idx}
            id={idx + 1}
            isChecked={false}
            onRadioChange={onRadioChange}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
