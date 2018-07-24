import React, { PureComponent } from "react";

const withLoading = Component =>
  class extends PureComponent {

    render() {
      const { isLoading } = this.props;

      return (isLoading ?
        <div>Loading...</div> :
        <Component {...this.props} />
      );
    }
  }

export default withLoading;
