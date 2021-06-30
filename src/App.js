import logo from './logo.svg';
import './App.css';
import { Suspense } from 'react';
import {BrowserRouter,Switch,Link,Route, Redirect} from 'react-router-dom'
import React from 'react';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header'
const Photo = React.lazy(() =>import('./features/Photo'))
function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
        {/* <ul>
          <li><Link to="/pictures">Go to photo page</Link></li>
          <li><Link to="/pictures/add">Go to add new photo page</Link></li>
          <li><Link to="/pictures/123">Go to Edit photo page</Link></li>
        </ul> */}
        <Header></Header>

        <Switch>
          <Redirect exact from="/" to="/pictures"></Redirect>
         <Route path="/pictures" component={Photo} ></Route> 
         <Route component={NotFound} ></Route> 
        </Switch>
        
        </BrowserRouter>


      </Suspense>


    </div>
  );
}

export default App;
