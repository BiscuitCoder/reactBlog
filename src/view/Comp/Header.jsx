import React from "react";
import { Link } from "react-router-dom";

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: null, //定时器
      dateStr: this.getDate(),
    };
  }

  //设置当前时间
  getDate(){
    const now = new Date();
    let weeks = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
    let week = weeks[now.getDay()];
    return `${week} / ${now.toLocaleTimeString()}`;
  }//getDate

  //组件已进入
  componentDidMount() {
    this.state.timerID = setInterval(() => {
      this.setState({
        dateStr: this.getDate(),
      });
    }, 1000);
  } //componentDidMount

  //组件销毁
  componentWillUnmount() {
    clearInterval(this.state.timer);
  } //componentWillUnmount

  render() {
    return (
      <div className="flex align between">
        <Link className="header" to="/">
          <h1>海饼干的壳子空间</h1>
          <h2>感受发生 / 记录观察</h2>
        </Link>
        {/* header */}

        <div className="today">
          <b>Today</b>
          <div>{this.state.dateStr}</div>
        </div>
        {/* today */}
      </div>
    );
  }
}

export default Component;
