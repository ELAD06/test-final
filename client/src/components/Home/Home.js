import React, { Component} from 'react';
import qs from 'query-string';
import { API_BASE_URL } from '../../utils/constants/api';
import Header from '../Header';
import List from '../List';
import './Home.css';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.fetchSearch = this.fetchSearch.bind(this);
  }

  state = {
    results: [],
    isLoading: false
  };

  componentDidMount() {
    let searchParam = 'boxers cachorros';
    if(this.props.match.path === '/items' && this.props.location.search.includes('?search=')) {
      const query = qs.parse(this.props.location.search);
      searchParam = query.search;
    }
    this.fetchSearch(searchParam);
  }

  async fetchSearch(request) {
    this.setState({ isLoading: true });
    const resp = await fetch(`${API_BASE_URL}/items?q=${request}`);
    this.setState({ isLoading: false });
    if(resp.status !== 200) return this.props.history.push('/404');
    const data = await resp.json();
    if(!data.items.length) return this.props.history.push('/404');
    this.setState({ results: data.items });
  }

  render() {
    return(
      <div className="Home-container">
        <Header onFetchApi={this.fetchSearch} />
        <List results={this.state.results} isLoading={this.state.isLoading}/> 
      </div>
    )
  }
}