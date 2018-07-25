import React, { createRef, PureComponent } from "react";
import "./styles.css";

class Button extends PureComponent {
  state = {
    top: 0,
    left: 0,
    isAnimating: false
  };

  constructor(props) {
    super(props);
    this.ref = createRef();
  }

  static defaultProps = {
    colour: "default",
    onClick: null
  };

  handleClick = ({ clientX, clientY }) => {
    const { onClick } = this.props;
    const { left, top } = this.ref.current.getBoundingClientRect();

    const x = clientX - left;
    const y = clientY - top;

    this.setState({ top: y, left: x, isAnimating: true });
    setTimeout(() => {
      this.setState({ isAnimating: false });
    }, 1000);

    if (onClick) {
      onClick();
    }
  };

  render() {
    const { top, left, isAnimating } = this.state;
    const { children, colour, onClick, ...rest } = this.props;

    return (
      <button
        ref={this.ref}
        className={`button button--colour-${colour}`}
        onClick={this.handleClick}
        {...rest}
      >
        <span className="button__text">
          {children}
        </span>
        <div
          className={`button__wave ${isAnimating ? "button__wave--state-animating" : ""}`}
          style={{ top: `${top}px`, left: `${left}px` }}
        />
      </button>
    );
  }
}

export default Button;
