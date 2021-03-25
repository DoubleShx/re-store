import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './components/app';
import ErrorBoundry from './components/error-boundry'
import BookStoreService from './services/bookstore-service'
import { BookstoreServiceProvider } from './components/bookstore-service-context' 

import store from './store'
import BookListContainer from './components/book-list';
import ShoppingCartTable from './components/shopping-cart-table';

const bookstoreService = new BookStoreService();



ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>  
    <ErrorBoundry>
      <BookstoreServiceProvider value={bookstoreService}>
        <Router>
          <App/>
          <Route path='/books' render={() => {
            return(
              <React.Fragment>
              <BookListContainer />
              <ShoppingCartTable/>
              </React.Fragment>
            )
          }
          }></Route>
        </Router>
      </BookstoreServiceProvider>      
    </ErrorBoundry>    
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

