import React from 'react';
import { Redirect, 
   Route, 
   BrowserRouter as Router, 
   Switch } from 'react-router-dom';
import { FooterComponent } from '../footer/FooterComponent';
import { HeaderComponent } from '../header/HeaderComponent';
import { HomeComponent } from '../home/HomeComponent';
import { NavComponent } from '../nav/NavComponent';
import { path } from '../path';


export const DashboardRoutes = () => {
   return (
      <div>
         <HeaderComponent/>
         <Router>
            <div className="container mt-4">
               <Switch>
                  <Route exact path={`${path}/`} component={HomeComponent}/>
                  <Route exact path={`${path}/maternidad-segura`} component={NavComponent}/>
                  <Redirect to={`${path}`}/>
               </Switch>
            </div>
         </Router>
         <FooterComponent/>
      </div>
   )
}
