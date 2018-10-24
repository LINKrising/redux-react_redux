import Loadable from 'react-loadable'
const loadable = (filename) => Loadable({
    loader:() => import(`@/page/${filename}`),
    loading:() => ('')
});


//路由配置对象
const routers = [
    {
        path:'/view0',
        exact:true,
        component:loadable('view0')
    },
    {
        path:'/view1',
        component:loadable('view1')
    },
    {
        path:'/view2',
        component:loadable('view2')
    },
];

export default routers;


import React from 'react';
import { hot } from 'react-hot-loader'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
} from 'react-router-dom'

import routers from '@/router/router'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
            <main>
              <Switch>
                  {
                      routers.map((route,index) => {
                          return(
                              <Route 
                              key={index}
                              path={route.path}
                              exact={route.exact}
                              component={route.component}/>
                          )
                      })
                  }
              </Switch>
            </main>
        </Router>
      </div>
    );
  }
}

export default hot(module)(App)
