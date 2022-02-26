import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from "react-router-dom"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";



const client = new ApolloClient({
  uri: "http://3.108.42.194:4000",
  cache: new InMemoryCache()
});
ReactDOM.render(
  <ApolloProvider client={client}>
  <BrowserRouter>
  <App />
</BrowserRouter>
</ApolloProvider>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
