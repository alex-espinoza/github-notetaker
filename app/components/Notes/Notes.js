var React = require('react');

var Notes = React.createClass({
  render: function() {
    console.log(this.props);
    return (
      <div>
      <p>NOOTEESS</p>
      <p>NOTES: {this.props.notes}</p>
      </div>
    )
  }
});

module.exports = Notes;