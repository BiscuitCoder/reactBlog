import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./index.scss";


export const ArticleList = (props) => {
    let list = [1,2,3,4,5,6,7]
    return(
        <div className="articleItem">
            {list.map((v,k)=>(<Link className="ellipsis" key={k} to={`/articleDetail/${v}`}>这是文章列表{v}</Link>))}
        </div>
    )
}
// ArticleList

const Component = (props) => {
    return (
        <div className="navArticleList">
            <div className="title flex align between">
                <small>近期归档</small>
                <Link to={`/${props.path.path}`}><small>全部(1524) <b className="font13">></b></small></Link>
            </div>
            <ArticleList/>
        </div>
    );
}

export default withRouter(Component);