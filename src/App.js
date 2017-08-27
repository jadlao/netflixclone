import React from 'react';
import Logo from './Logo';
import Navigation from './components/Navigation';
import UserProfile from './components/UserProfile';
import Hero from './components/Hero';
import TitleList from './components/TitleList';
import './App.css';

var App = React.createClass({
  apiKey: '87dfa1c669eea853da609d4968d294be',
  
  getInitialState: function(){
    return {
      searchTerm: "",
      searchUrl: ""
    };
  },
  
  // Event handlers
  handleKeyUp: function(e){
    // if you press Enter and the searchTerm is not empty
    if (e.key === 'Enter' && this.state.searchTerm !== '') {
      // concatenate url
      var searchUrl = "search/multi?query=" + this.state.searchTerm + "&api_key=" + this.apiKey;
      // set state to store concatenated url
      this.setState({searchUrl: searchUrl});
    }
  },

  handleChange: function(e){
    // set state to store input value from search box
    this.setState({searchTerm: e.target.value});
  },
  
  // notes: 
  // ES5 onChange={this.handleChange}
  // ES6 would have: onChange={this.handleChange.bind(this)}
  // value in input makes it controlled input
  render: function() {
    return (
      <div>
        <header className="Header">
          <Logo />
          <Navigation />

          <div id="search" className="Search">
            <input onKeyUp={this.handleKeyUp} onChange={this.handleChange} 
            type="search" placeholder="Search for a title..." value={this.state.searchTerm} />
          </div>
          <UserProfile />
        </header>
        <Hero />
        <TitleList title="Search Results" url={this.state.searchUrl} />
        <TitleList title="Top TV picks for Jack" url="discover/tv?sort_by=popularity.desc&page=1" />
        <TitleList title="Trending now" url="discover/movie?sort_by=popularity.desc&page=1" />
        <TitleList title="Most watched in Horror" url="genre/27/movies?sort_by=popularity.desc&page=1" />
        <TitleList title="Sci-Fi greats" url="genre/878/movies?sort_by=popularity.desc&page=1" />
        <TitleList title="Comedy magic" url="genre/35/movies?sort_by=popularity.desc&page=1" />
      </div>
    );
  }
});



export default App;
