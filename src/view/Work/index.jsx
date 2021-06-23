import React from "react";
import ArticleList from '@/view/Comp/ArticleList/index';
import { withRouter } from "react-router-dom";

class Component extends React.Component {

  constructor(props) {
    console.log('work->',props)
    super(props);
  }

  render() {
    return (
      <div className="articleBox">
        <ArticleList type="搬砖系列"/>
      </div>
    );
  }
}

export default withRouter(Component);
