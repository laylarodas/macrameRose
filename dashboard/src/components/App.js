import React from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import LastProductInDb from './LastProductInDb';
import CategoriesInDb from './CategoriesInDb';
import NotFound from './NotFound';
import Product from './Product';
import {Route,Switch} from 'react-router-dom';
import UserInDb from './UserInDb';


function App() {
  return (
    <React.Fragment>
      	<div id="wrapper">
          <SideBar />
          <Switch>
            <Route path="/" exact>
                <ContentWrapper />
            </Route>
            <Route path="/products" component={Product}></Route>
            <Route path="/LastProductInDb" component={LastProductInDb}></Route>
            <Route path="/CategoriesInDb" component={CategoriesInDb}></Route>
            <Route path="/users" component={UserInDb}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </div>
    </React.Fragment>
  );
}

export default App;