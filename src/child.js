import React from 'react';
import styles from "./app.less";
import CSSModules from "react-css-modules";

@CSSModules(styles)
class Child extends React.Component {
  render() {
    return (
      <div styleName="bgTest">
        test
      </div>
    );
  }
}

export default Child;
