import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withActiveTab = (Component) => {
  class WithActiveTabHoc extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: this.props.activeTab,
      };

      this._handleActiveTabChange = this._handleActiveTabChange.bind(this);
    }

    _handleActiveTabChange(newTab) {
      this.setState({
        activeTab: newTab,
      });
    }

    render() {
      const {activeTab} = this.state;

      return (
        <Component
          {...this.props}
          activeTab={activeTab}
          onActiveTabChange={this._handleActiveTabChange}
        />
      );
    }
  }

  WithActiveTabHoc.propTypes = {
    activeTab: PropTypes.string.isRequired,
  };

  return WithActiveTabHoc;
};

export default withActiveTab;