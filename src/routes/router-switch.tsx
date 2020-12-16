import React, {
  lazy
} from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom'


const Home = lazy(() =>
  import(/* webpackChunkName: "home-route" */ '../home/Index')
)


const routes = () =>{
  return(
    <Switch>
      <Route exact path='/' component={Home}/>
    </Switch>
  );
}
export default routes;
