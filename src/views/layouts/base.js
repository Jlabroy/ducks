import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

class Base extends PureComponent {
  render() {
    const { children } = this.props;

    return (
      <div style={{height: "100%"}}>
        <ul>
          <li>
            <Link to="/">Todos</Link>
          </li>
          <li>
            <Link to="/create">Create</Link>
          </li>
        </ul>  

        {children}
      </div>
    );
  }
}

export default Base;
