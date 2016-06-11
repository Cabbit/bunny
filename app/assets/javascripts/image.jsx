var React = require('react');

var Image = React.createClass({
  render: function() {
    return (
      <div className="image">
        <img src={ '/images/' + this.props.children + '/thumb' } />
      </div>
    );
  }
});

module.exports = Image;
