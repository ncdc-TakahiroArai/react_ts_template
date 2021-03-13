import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { HomePage } from "@Pages/Home/Home";

// CSS読み込み
import "sanitize.css";
import "./reset.css";

// カラーテーマ

ReactDOM.render(
  <RecoilRoot>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route exact path="/about" component={About} /> */}
      </Switch>
    </BrowserRouter>
  </RecoilRoot>,
  document.getElementById("app")
);
