import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

class Base extends PureComponent {
  render() {
    const { children } = this.props;

    return (
      <div>
        <Link to="/">Todos</Link>
        <Link to="/welcome">Welcome</Link>

        {children}
      </div>
    );
  }
}

export default Base;
