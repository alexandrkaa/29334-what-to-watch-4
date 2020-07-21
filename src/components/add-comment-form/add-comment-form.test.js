import React from 'react';
import renderer from 'react-test-renderer';
import {AddCommentForm} from './add-comment-form.jsx';

it(`<AddCommentForm /> should match snapshot without error`, () => {
  const onRadioChange = jest.fn();
  const onTextAreaChange = jest.fn();
  const onFormSubmit = jest.fn();
  const comment = `Test comment`;
  const rating = 5;
  const tree = renderer
    .create(
        <AddCommentForm
          onRadioChange={onRadioChange}
          onTextAreaChange={onTextAreaChange}
          comment={comment}
          rating={rating}
          isFormValid={true}
          onFormSubmit={onFormSubmit}
          postCommentInProgress={false}
          postCommentError={false}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it(`<AddCommentForm /> should match snapshot with error`, () => {
  const onRadioChange = jest.fn();
  const onTextAreaChange = jest.fn();
  const onFormSubmit = jest.fn();
  const comment = `Test comment`;
  const rating = 5;
  const tree = renderer
    .create(
        <AddCommentForm
          onRadioChange={onRadioChange}
          onTextAreaChange={onTextAreaChange}
          comment={comment}
          rating={rating}
          isFormValid={true}
          onFormSubmit={onFormSubmit}
          postCommentInProgress={false}
          postCommentError={true}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
