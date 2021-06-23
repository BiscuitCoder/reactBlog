import React from "react";
import { Link,useRouteMatch } from "react-router-dom";
import "./style.scss";

function LinkDom({to,from,type}) {
  let {url } = useRouteMatch();
  return (
    <div className="ArticleList flex align">
      <div className={`articleIcon ${type}`}></div>
      <Link to={`/articleDetail/${to}`}>
        <div className="name">【{from}】文章列表{to}</div>
        <div className="info"><small>已阅 2145 次</small> <small>2021-02-15 11:32 发布</small></div>
      </Link>
    </div>
  )
}

class Component extends React.Component {
  constructor(props) {
    super(props);
    console.log('list->',props);
    this.state = {
      dataList: [1,2,3,4,5],
    };
  }

  setType(k){
    switch (k) {
      case 0:
        return 'text'
        break;
      case 1:
        return 'music'
        break;
      case 2:
        return 'video'
        break;
      default:
        return 'text'
        break;
    }
  }

  render() {
    
    return (
      <div className="list">
         {this.state.dataList.map((v,k)=>(
            <LinkDom to={v} key={v} from={this.props.type} type={this.setType(k)} />
          ))}
      </div>
    );
  }
}

export default Component;
