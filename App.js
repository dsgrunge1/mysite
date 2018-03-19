import React from "react";
import { Router, Route, browserHistory } from "react-router";
import { createApp } from "@phenomic/preset-react-app/lib/client";
import { WikiPageContainer } from "./WikiPage";
import {Home} from "./Home";
import {ReviewPageContainer} from "./ReviewPage";

export default createApp(() => (
    <Router history={browserHistory}>
        <Route path="/" component={Home} />
        <Route path="/wiki/*" component={WikiPageContainer} />
        <Route path="/review/*" component={ReviewPageContainer} />
    </Router>
));