import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
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

