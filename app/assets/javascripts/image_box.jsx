var $                = require('jquery');
var React            = require('react');
var ImagesCollection = require('./images_collection.es6');
var ImageList      = require('./image_list.jsx');

var ImageBox = React.createClass({
  loadImagesFromServer: function() {
    var images = new ImagesCollection;
    images.fetch({
      success: function(data) {
        this.setState({ data: images.models });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadImagesFromServer();
    setInterval(this.loadImagesFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="imagesBox">
        <h1>Images</h1>
        <ImageList data={this.state.data} />
      </div>
    );
  }
});

module.exports = ImageBox;
