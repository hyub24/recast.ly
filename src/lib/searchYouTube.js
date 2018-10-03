var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      maxResults: options.max || 5,
      q: options.query,
      type: 'video',
      part: 'snippet',
      videoEmbeddable: true,
      key: options.key
    },

    success: function(response) { callback(response.items); },
    error: function() { console.log('error'); }
  });
};

export default searchYouTube;
