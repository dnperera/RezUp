//Include React
var React = require("react");

// Include the Helper (for the saved recall)
var helpers = require("../utils/helpers");

// Creating the Form component
 
var DetailsPage = React.createClass({
  
  getInitialState: function () {
    return ({
      property: {}
    })
  },

  componentWillMount: function () {
    var self = this;
    helpers.getListingById(this.props.params.id).then(function (res) {
      self.setState({property: res.data})
    })
  },

  // Here we describe this component's render method
  render: function() {
    return (
      <div>
        
      </div>
    );

   
  }
});

// Export the component back for use in other files
module.exports = DetailsPage;
















 
  