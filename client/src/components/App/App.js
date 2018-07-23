import React, { Component } from 'react';
import { API_BASE_URL } from '../../utils/constants/api';
import Header from '../Header';
import List from '../List';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.fetchSearch = this.fetchSearch.bind(this);
  }

  state = {
    results: []
  };

  async fetchSearch(request) {
    const resp = await fetch(`${API_BASE_URL}/items?q=${request}`);
    debugger;
    if(resp.status !== 200 && resp.results.length < 1) return alert('Error con la API de Network');
    this.setState({ results: resp.results });
  }

  render() {
    return (
      <div className="App">
        <Header onFetchApi={this.fetchSearch} />
        <List results={this.state.results} />
      </div>
    );
  }
}

export default App;
