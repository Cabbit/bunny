var React   = require('react');
var Image = require('./image.jsx');

var ImageList = React.createClass({
  render: function() {
    var imageNodes = this.props.data.map(function(image) {
      return (
        <Image name={image.name} key={image.id}>
          {image.id}
        </Image>
      );
    });
    return (
      <div className="imageList">
        {imageNodes}
      </div>
    );
  }
});

module.exports = ImageList;
