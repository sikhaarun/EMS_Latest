import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// eslint-disable-next-line
import App from './App';
import Login from './Components/Login'
import NavBar from './Components/NavBar'
import Enquiries from './Components/Enquiries'
import CreateEnquiry from './Components/CreateEnquiry'
import UpdateEnquiry from './Components/UpdateEnquiry'



import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './Reducers/rootReducer'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from 'react-router-dom'

const store = createStore(rootReducer);



ReactDOM.render(
<Provider store={store}>
<BrowserRouter>
<NavBar></NavBar>
<Route exact path="/CreateEnquiry" component={CreateEnquiry}/>
<Route exact path="/UpdateEnquiry/:id" component={UpdateEnquiry}/>

<Route exact path="/Login" component={Login}/>
<Route exact path="/" component={Enquiries}/>
</BrowserRouter>
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
