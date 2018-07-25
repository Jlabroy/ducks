import React, { PureComponent } from "react";
import "./styles.css";

class Input extends PureComponent {

  static defaultProps = {
    state: "ready"
  };

  render() {
    const { state, placeholder } = this.props;

    return (
      <div className={`input input--state-${state}`}>
        <input required className="input__input" />
        <div className="input__placeholder">{placeholder}</div>
        <div className="input__border" />
      </div>
    );
  }
}

export default Input;
