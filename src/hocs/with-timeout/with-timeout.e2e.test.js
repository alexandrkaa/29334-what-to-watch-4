import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withTimeOut from './with-timeout.js';
import PropTypes from 'prop-types';

Enzyme.configure({
  adapter: new Adapter(),
});

const MockComponent = (props) => {
  return (<h1 onClick={props.onStart}>Text</h1>);
};

MockComponent.propTypes = {
  onStart: PropTypes.func.isRequired,
};

const MockComponentWrapped = withTimeOut(MockComponent);

it(`Should withTimeOut state will be changed`, () => {
  const main = mount(
      <MockComponentWrapped timeOutDelay={100} />
  );

  const element = main.find(`h1`).at(0);
  expect(element).toHaveLength(1);
  element.simulate(`click`);
  jest.useFakeTimers();
  jest.runAllTimers();
  setTimeout(() => {
    expect(main.state(`isCanStart`)).toBe(true);
  }, 200);
});
