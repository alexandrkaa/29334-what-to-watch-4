import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export const withTimeOut = (Component) => {
  class TimeOutHoc extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isCanStart: false,
      };

      this._handleStart = this._handleStart.bind(this);
      this._handleStop = this._handleStop.bind(this);
      this._timerId = null;
    }

    _handleStart(cb) {
      const {timeOutDelay} = this.props;
      this._timerId = setTimeout(() => {
        this.setState({
          isCanStart: true,
        });
        cb();
      }, timeOutDelay);
    }

    _handleStop() {
      if (!this.state.isCanStart) {
        clearTimeout(this._timerId);
      }
    }

    componentWillUnmount() {
      clearTimeout(this._timerId);
      this._timerId = null;
    }

    render() {
      const props = this.props;
      return (
        <Component onStart={this._handleStart} isCanStart={this.state.isCanStart} onStop={this._handleStop} {...props} />
      );
    }
  }

  TimeOutHoc.propTypes = {
    timeOutDelay: PropTypes.number.isRequired,
  };

  return TimeOutHoc;
};

export default withTimeOut;
