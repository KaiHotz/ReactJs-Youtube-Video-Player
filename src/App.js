import _ from 'lodash';
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from '@/src/components/SearchBar';
import VideoList from '@/src/components/VideoList';
import VideoDetail from '@/src/components/VideoDetail';
import '@/styles/styles.scss'

const API_KEY = 'AIzaSyBS3in9BrturquUE6yZEU9OoOibdgPb_ow';

class App extends Component{

  state = {
    videos: [],
    selectedVideo: null
  }

  componentDidMount() {
    this.videoSearch('surfboards')
  }

  videoSearch = (term) => {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState ({
        videos: videos,
        selectedVideo: videos[0],
      });
    });
  }

  render(){
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={ videoSearch }/>
        <VideoDetail video={ this.state.selectedVideo } />
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) }
          videos={ this.state.videos }
        />
      </div>
    )
  }
}

export default App
