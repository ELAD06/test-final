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
    results: [],
    isLoading: false
  };

  async fetchSearch(request) {
    this.setState({ isLoading: true });
    const resp = await fetch(`${API_BASE_URL}/items?q=${request}`);
    const data = await resp.json();
    this.setState({ isLoading: false });
    if(resp.status !== 200 && data.results.length < 1) return alert('Error con la API de Network');
    this.setState({ results: data.results });
  }

  render() {
    return (
      <div className="App">
        <Header onFetchApi={this.fetchSearch} />
        <List results={this.state.results} isLoading={this.state.isLoading}/>
      </div>
    );
  }
}

export default App;
