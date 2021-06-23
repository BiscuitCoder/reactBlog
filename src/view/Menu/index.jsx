import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import "./index.scss";
import NavArticleList from "./navArticleList";

const Component = (props) => {

    let history = useHistory();

    function goLink({ path, name }) {//跳转逻辑
        history.push(`/${path}`);
    } //goLink

    return (
        <nav className="navBox flex align between">
            {props.routeArr.map((v, k) => (
            <div
                className={`linkBox ${v.path}`}
                to={`/${v.path}`}
                key={k}
                // onClick={goLink.bind(this,v)}
            >
                <div className="text">{v.name}</div>

                <NavArticleList path={v}/>
            </div>
            ))}
        </nav>
    );
}

export default withRouter(Component);
