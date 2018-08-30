import React, { PureComponent } from "react";
import Todos from "../components/todos";

class Home extends PureComponent {
  state = {
    colour: 'blue'
  };

  handleClick = () => {
    this.setState({ colour: "animate" });

  };

  render() {
    const { colour } = this.state;

    return (
      <div
          onClick={this.handleClick}
          className={`gradient ${colour}`}
      >
        Todo app
        <Todos />
      </div>
    );
  }
}

export default Home;
