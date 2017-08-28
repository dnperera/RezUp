//Include React
var React = require("react");
import $ from 'jquery';

// Include the Helper (for the saved recall)
var helpers = require("../utils/helpers");

// Creating the Form component
 
var SearchPropertyForm = React.createClass({
  
 
  handleSubmit: function(e) {
    e.preventDefault();
 

    helpers.getListings(this.state.city)
    .then(function(res){
        console.log('data',res.data);

           
    return this.renderContainer();

        //this.setState({this.state.listings.pu});
  renderContainer: function(){


       var propertyStr ="<div class='container'>";

       for(var i=0; i< res.data.length;i++) {
          propertyStr = propertyStr +
          "<div class='row' id='each_row'>"+
          "<div class='col-md-3'>"+
          "<img src='"+JSON.parse(res.data[i].images)[0]['url']+"' class= 'img-thumbnail w3-hover-opacity'></div>"+
          "<div class='col-md-9'>"+
          "<div><h3>"+res.data[i].venueName+"</h3></div>"+
          "<div>"+
          "<ul>"+
          "<li>Venue Type: "+res.data[i].venueType+"</li>"+
          "<li>Occupancy: "+res.data[i].occupancy+"</li>"+
          "<li>Amenities: "+res.data[i].amenities[0]+" | "+res.data[i].amenities[1]+" </li>"+
          "</ul></div></div></div>";
       }

   },

  // Here we describe this component's render method
  render: function() {
    return (
    <div id="maincontainer">
      <div className="jumbotron">
       <div className="form-group">
            <div className="col-sm-10 col-sm-offset-2">
              <button className="btn btn-primary " name="submit" type="submit" onSubmit={this.handleSubmit}>
                View
              </button>
            </div>
          </div>
      </div> 
   </div>
    );

   
  }
});

// Export the component back for use in other files
module.exports = SearchPropertyForm;
















 
  