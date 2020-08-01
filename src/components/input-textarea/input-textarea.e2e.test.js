import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import InputTextarea from './input-textarea.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should textarea change will be handled correctly`, () => {
  const onTextAreaChange = jest.fn();
  const comment = `Some text`;
  const postCommentInProgress = false;
  const main = shallow(
      <InputTextarea
        onTextAreaChange={onTextAreaChange}
        isDisabled={postCommentInProgress}
        comment={comment}
      />
  );

  const textAreaField = main.find(`.add-review__textarea`);
  expect(textAreaField).toHaveLength(1);

  textAreaField.simulate(`change`, {
    target: {
      value: comment + `!`
    },
    preventDefault: jest.fn()
  });
  expect(onTextAreaChange).toHaveBeenCalledTimes(1);
});
