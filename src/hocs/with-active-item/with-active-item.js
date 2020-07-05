import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withActiveItem = (Component) => {
  class WithActiveItemHoc extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: this.props.activeItem,
      };
      this._handleActiveItemChange = props.onActiveItemChange || this._handleActiveItemChange.bind(this);
    }

    _handleActiveItemChange(newItem) {
      this.setState({
        activeItem: newItem,
      });
    }

    render() {

      const activeItem = this.props.activeItem || this.state.activeItem;

      return (
        <Component
          {...this.props}
          activeItem={activeItem}
          onActiveItemChange={this._handleActiveItemChange}
        />
      );
    }
  }

  WithActiveItemHoc.defaultProps = {
    activeItem: null,
  };

  WithActiveItemHoc.propTypes = {
    activeItem: PropTypes.string,
    onActiveItemChange: PropTypes.func,
  };

  return WithActiveItemHoc;
};

export default withActiveItem;
