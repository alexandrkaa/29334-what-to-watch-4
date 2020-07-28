import React from 'react';
import renderer from 'react-test-renderer';
import InputTextarea from './input-textarea.jsx';

describe(`<InputTextarea /> should match snapshot`, () => {
  const onTextAreaChange = jest.fn();
  const comment = `Some text`;
  it(`<InputTextarea /> should match snapshot (enabled)`, () => {
    const postCommentInProgress = false;
    const tree = renderer
      .create(
          <InputTextarea
            onTextAreaChange={onTextAreaChange}
            isDisabled={postCommentInProgress}
            comment={comment}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`<InputTextarea /> should match snapshot (disabled)`, () => {
    const postCommentInProgress = true;
    const tree = renderer
      .create(
          <InputTextarea
            onTextAreaChange={onTextAreaChange}
            isDisabled={postCommentInProgress}
            comment={comment}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
