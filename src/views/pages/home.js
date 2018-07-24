import React, { PureComponent } from "react";
import Todos from "../components/todos";

class Home extends PureComponent {
  render() {
    return (
      <div>
        Todo app
        <Todos />
      </div>
    );
  }
}

export default Home;
