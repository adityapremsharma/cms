import React, { useEffect, useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "../components/layout/Navbar/Navbar";
import Cms from "../pages/Cms";
import View from "../pages/Cms/View";
import PageRender from "../pages/PageRender";
import { Context as PageContext } from "../context/pageContext";

const Routes = () => {
  const {
    state: { pages },
    getpages,
  } = useContext(PageContext);

  useEffect(() => {
    getpages();
    // eslint-disable-next-line
  }, []);

  return (
    <BrowserRouter>
      <Navbar pages={pages} />
      <div style={{ paddingTop: "5rem" }}>
        <Switch>
          <Route exact path="/cms" component={PageRender} />
          <Route exact path="/cms" component={Cms} />
          <Route exact path="/view" component={View} />
          {pages.map((page) => (
            <Route key={page.id} exact path={`/${page.name}`} component={PageRender} />
          ))}
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Routes;
