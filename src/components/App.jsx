import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
//import exampleVideoData from '/compiled/src/data/exampleVideoData.js';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentPlayer: {},
      currentList: []
    };
  }

  handleClick(video) {
    this.setState({
      currentPlayer: video
    });
  }

  handleKey(query) {
    _.debounce(() => this.getVideos(query), 500)();
  }

  getVideos(query) {
    var options = {
      query: query,
      key: this.props.apiKey
    };

    this.props.searchYouTube(options, (response) => {
      this.setState({
        currentPlayer: response[0],
        currentList: response.slice(0)
      });
    });
  }
  
  componentDidMount() {
    this.getVideos('dogs');
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleKey={this.handleKey.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentPlayer}/> 
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.currentList} handleClick={this.handleClick.bind(this)}/>
          </div>
        </div>
      </div>
    );
  } 
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
