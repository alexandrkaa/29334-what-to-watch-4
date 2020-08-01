import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import InputRadioStar from './input-radio-star.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should input change will be handled correctly`, () => {
  const idx = 1;
  const postCommentInProgress = false;
  const onRadioChange = jest.fn();
  const main = shallow(
      <InputRadioStar
        isDisabled={postCommentInProgress}
        key={idx}
        id={idx + 1}
        isChecked={false}
        onRadioChange={onRadioChange}
      />
  );

  const inputField = main.find(`.rating__input`);
  expect(inputField).toHaveLength(1);

  inputField.simulate(`change`);
  expect(onRadioChange).toHaveBeenCalledTimes(1);
});
