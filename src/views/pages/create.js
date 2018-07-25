import React, { PureComponent } from "react";
import Button from "../components/button";
import Input from "../components/input";

class Welcome extends PureComponent {
  state = {
    button: false
  };

  handleClick = () => {
    this.setState({ button: true });
  };

  render() {
    const { button } = this.state;

    return (
      <div>
        <p>
          Create a to do
        </p>

        <div style={{width:"300px",margin:"30px 0"}}>
          <Input placeholder="Enter your first name" />
          <Input
            placeholder="Enter your last name"
            state={button ? "error" : "ready"}
          />
        </div>
        <Button colour="blue" onClick={this.handleClick}>
          Create
        </Button>
      </div>
    );
  }
}

export default Welcome;
