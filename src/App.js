import Header from "@/view/Comp/Header";
// import Footer from "@/view/Comp/Footer";

import About from "@/view/About";
import Media from "@/view/Media";
import Life from "@/view/Life";
import Work from "@/view/Work";
import Menu from "@/view/Menu";
import ArticleDetail from "@/view/ArticleDetail";

import React from "react";
import { BrowserRouter as Router, Switch, Route, useHistory,Redirect } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      routeArr: [
        {
          path: "life",
          name: "暗中观察",
          comp: Life,
        },
        {
          path: "work",
          name: "凑合过呗",
          comp: Work,
        },
        {
          path: "media",
          name: "精神文明",
          comp: Media,
        },
        {
          path: "about",
          name: "这不重要",
          comp: About,
        },
      ],
    };
  } //state

  getRouteComp(path) {
    //获取配置组件
    // console.log(path);
    const Comp = this.state.routeArr.find((x) => x.path === path).comp;
    return (
      <div>
        <Comp />
      </div>
    );
  } //getRouteComp
  

  render() {
    return (
      <Router>
        <div className="app">
          <Header />

          <div className="mainBox">

            <Switch>
              {this.state.routeArr.map((v, k) => (
                <Route path={`/${v.path}`} key={k}>
                  {this.getRouteComp(v.path)}
                </Route>
              ))}

              <Route path="/articleDetail/:id">
                <ArticleDetail/>
              </Route>

              <Route  exact  path="/">
                <Menu routeArr={this.state.routeArr}/>
              </Route>

              <Route  exact  path="/404">
                <div style={{fontSize:'300px',textAlign:'center'}}>404</div>
              </Route>

              <Redirect to="/404" />

            </Switch>

          </div>
          {/* mainBox */}

          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;
