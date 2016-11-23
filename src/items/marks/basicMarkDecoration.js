/* eslint-disable react/prop-types */
import React, {Component, PropTypes} from 'react';
import {marks, utils} from 'slate-plugins';
const {toggleMark} = marks;
const {haveMarks} = utils.have;

export default (type, defaultIcon) => Mark => {
  return class toggleMarkDecoration extends Component {
    constructor(props) {
      super(props);
      this.onClick = this.onClick.bind(this);
    }

    displayName = this.props.type || type;
    static propTypes = {
      state: PropTypes.object.isRequired,
      onChange: PropTypes.func.isRequired,
      type: PropTypes.string
    };

    onClick(e) {
      let {state, onChange} = this.props;
      e.preventDefault();
      onChange(toggleMark(state, this.displayName));
    }

    render() {
      const {state, icon, ...rest} = this.props;
      const onClick = e => this.onClick(e);
      return (
        <Mark
          type={this.displayName}
          icon={icon || defaultIcon}
          onClick={onClick}
          isActive={haveMarks(state, this.displayName)}
          {...rest}
        />
      );
    }
  };
};
