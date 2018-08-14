// src/App.js

import React, { Component } from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "react-apollo";
import Pusher from 'pusher-js';

import Header from './components/Header';
import Post from './components/Post';

const client = new ApolloClient({
      uri: "http://localhost:4000/graphql"
    });



// create component
    class App extends Component{
      constructor(){
        super();
        // connect to pusher
        this.pusher = new Pusher("9f8edadd86537d115da2", {
         cluster: 'eu',
         encrypted: true
        });
      }

      render(){
        return (
          <ApolloProvider client={client}>
            <div className="App">
              <Header />
              <section className="App-main">
                {/* pass the pusher object and apollo to the posts component */}
                <Posts pusher={this.pusher} apollo_client={client}/>
              </section>
            </div>
          </ApolloProvider>
        );
      }
    }

    export default App;
