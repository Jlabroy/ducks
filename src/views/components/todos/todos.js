import React, { PureComponent } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actions } from "../../../redux/modules/todos";
import withLoading from "../../enhancers/withLoading";

class Todos extends PureComponent {
  componentDidMount() {
    const { onRequestTodos, data, isLoading } = this.props;
    if (!isLoading && data.length === 0) {
      onRequestTodos();
    }
  }

  render() {
    const { data } = this.props;

    return (
      <ul>
        {data.map(({ title }) => (
          <li key={`todo-${title}`}>{title}</li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = ({ todos }) => ({
  ...todos
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    onRequestTodos: actions.requestTodos
  },
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(withLoading(Todos));
