import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import logo from './logo.svg';
//import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'


class App extends Component {
  render() {
    return (
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol size="12">
            <BrowserRouter>
              <MDBRow>
                <MDBCol size="12">
                  <Header />
                  <Switch >
                    <Route path="/" exact component={Home} />
                  </Switch  >
                </MDBCol>
              </MDBRow>
            </BrowserRouter>
            <Footer />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default App;
