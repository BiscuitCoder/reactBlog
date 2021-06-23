import React from "react";
import { useParams,withRouter } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { render } from "react-dom";
import gfm from "remark-gfm";
import "./style.scss";

function DetailDom() {
  let { id } = useParams();

  const markdown = `A paragraph with *emphasis* and **strong importance**.

  > A block quote with ~strikethrough~ and a URL: https://reactjs.org.
  
  * Lists
  * [ ] todo
  * [x] done
  
  A table:
  |  表头   | 表头  |
  |  ----  | ----  |
  | 单元格  | 单元格 |
  | 单元格  | 单元格 |
  `;

  return (
    <div className="articleDetail">
      <div className="title">
        <div className="name">文章列表</div>
        <div className="info">
          <small>已阅 2145 次</small> <small>2021-02-15 11:32 发布</small>
        </div>
      </div>
      {/* ArticleList */}

      <ReactMarkdown remarkPlugins={[gfm]} children={markdown} />
      <div>文章详情{id}</div>
    </div>
  );
}

class Component extends React.Component {
  constructor(props) {
    console.log('文章详情->',props)
    super(props);
    this.state = {};
  }

  render() {
    return <DetailDom />;
  }
}

export default withRouter(Component);
