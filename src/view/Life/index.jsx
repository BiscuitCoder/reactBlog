import React from "react";
import ArticleList from '@/view/Comp/ArticleList/index';
import { withRouter,Switch,Route,useRouteMatch } from "react-router-dom";

class Component extends React.Component {

  constructor(props) {
    console.log('文章详情->',props)
    super(props);
  }

  render() {
    return (
      <div className="articleBox">
        <ArticleList type="随想系列"/>
      </div>
    );
  }
}

export default withRouter(Component);
