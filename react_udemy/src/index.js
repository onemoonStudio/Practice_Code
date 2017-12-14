import config from '../my_config';

import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const youtube_API_KEY = config.youtube_api_key;


class App extends Component {
  constructor(props){
    super(props);
  
    this.state = {videos : [] };

    YTSearch({key : youtube_API_KEY , term : 'surfboards'},(videos) => {
      this.setState({videos});
    })    
    
  }


  render(){
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App/>,document.querySelector('.container'));
// getElementsByClassname 안된다. ( 중복이 될 수 있기 때문인가?? )
// getelementbyid 는 가능하다 !
