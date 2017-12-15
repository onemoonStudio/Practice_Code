import config from '../my_config';

import _ from 'lodash';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const youtube_API_KEY = config.youtube_api_key;


class App extends Component {
  constructor(props){
    super(props);
  
    this.state = {
      videos : [] ,
      selectedVideo : null
    };

    this.youtubeSearch('apple iphoneX');
  }

  youtubeSearch = (term) =>{
    YTSearch({key : youtube_API_KEY , term : term },(videos) => {
      this.setState({
        videos : videos,
        selectedVideo : videos[0]
      });
    })
  }


  render(){
    const videoSaerch = _.debounce ((term) => {this.youtubeSearch(term)} , 300)

    return (
      <div>
        <SearchBar onChangeSearchTerm={ videoSaerch } />
        <VideoDetail video={ this.state.selectedVideo }/>
        <VideoList 
          onClickVideo = { selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} 
        />
      </div>
    );
  }
}

ReactDOM.render(<App/>,document.querySelector('.container'));
// getElementsByClassname 안된다. ( 중복이 될 수 있기 때문인가?? )
// getelementbyid 는 가능하다 !
