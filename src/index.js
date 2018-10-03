// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import searchYouTube from './../src/lib/searchYouTube.js';
import YOUTUBE_API_KEY from './../src/config/youtube.js';

ReactDOM.render(<App searchYouTube={searchYouTube} apiKey={YOUTUBE_API_KEY}/>, document.getElementById('app'));
