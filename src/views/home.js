import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { actions } from "../redux/modules/todos";

class Home extends PureComponent {

  componentDidMount() {
    const { onRequestTodos } = this.props;
    onRequestTodos();
  }

  render() {
    return (
      <div>
        home
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => ({
  onRequestTodos: () => dispatch(actions.requestTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
