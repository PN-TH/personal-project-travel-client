import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import history from './history';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import ArticleContextProvider from './_contexts/ArticleContextProvider';
import ProductsDetail from './components/pages/ProductsDetail';
import { ToastProvider } from 'react-toast-notifications';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Profile from './components/pages/Profile';
import LoginProvider from './_contexts/LoginContextProvider';

function App() {
  return (
    <>
      <ToastProvider placement='top-center'>
        <LoginProvider>
          <ArticleContextProvider>
            <Router history={history}>
              <Navbar />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/services' component={Services} />
                <Route exact path='/products' component={Products} />
                <Route path='/products/:id' component={ProductsDetail} />
                <Route path='/login' component={Login} />
                <Route path='/profile' component={Profile} />
                <Route exact path='/register' component={Register} />
              </Switch>
            </Router>
          </ArticleContextProvider>
        </LoginProvider>
      </ToastProvider>
    </>
  );
}

export default App;
