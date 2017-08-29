//Include React
var React = require("react");
import $ from 'jquery';

// Include the Helper (for the saved recall)
var helpers = require("../utils/helpers");

// Creating the Form component
 
var SearchPropertyForm = React.createClass({
  getInitialState: function() {
   return {
     city: "",
     date: "",
     days: "",
     show_listings: false,
     listings:[]
   }
  },
  
  handleChange: function(event) {
     this.setState({ [event.target.name]: event.target.value });

  },
 
  handleSubmit: function(e) {
    e.preventDefault();
    
    helpers.getListings(this.state.city)
    .then(res => {
      let listings = [];
      listings = listings.concat(res.data);

      this.setState({
        show_listings: true,
        listings: listings
      });
    });
   },

   showJumbo: function() {
     return( 
       <div className="jumbotron">
         <div id="frontcontainer" className="container">
           <h2 className="text-center"> Find Exquisite Places To Host Your Event !</h2>
           <form onSubmit={this.handleSubmit} className="form-inline" action="/action">
             <div className="form-group">
               <label htmlFor="city">City:</label>
               <input type="text" value={this.state.city} onChange={this.handleChange} className="form-control" id="city" placeholder="Enter City Name" name="city"/>
             </div>
             <div className="form-group">
               <label htmlFor="date">Date:</label>
               <input type="Date" value={this.state.dateFrom} onChange={this.handleChange} className="form-control" id="date" name="date"/>
             </div>
             <div className="form-group">
               <label htmlFor="dateTo">Days:</label>
               <input type="text" value={this.state.days} onChange={this.handleChange} className="form-control" id="days" name="days"/>
             </div>
             <button type="submit" className="btn btn-success btn-xl">Search</button>
           </form>
         </div>  
       </div> 
     );
   },

  // Here we describe this component's render method
  render: function() {

        const listings = this.state.listings.map((listing, i) => {
        const image_src = JSON.parse(listing.images)[0]["url"];
        console.log('img path',image_src);
        return(

          <div key={i} className="row" id="each_row">
            <div className="col-md-3">
              <img src={image_src} className="img-thumbnail w3-hover-opacity" />
            </div>
            <div className="col-md-9">
              <div>
                <h3>{ listing.venueName }</h3>
              </div>
              <div>
                <ul>
                  <li>Venue Type: { listing.venueType }</li>
                  <li>Occupancy: { listing.occupancy }</li>
                  <li>Amenities: { listing.amenities[0] } | { listing.amenities[1] } </li>
                </ul>
              </div>
            </div>
            <button className="btn-primary btn-md" data ="{listing._id}" id="details">View</button>
          </div>

        );

    });
    // console.log(listings);
    return (
      <div id="maincontainer">

        { !this.state.show_listings ? this.showJumbo() : null }
      
        { this.state.show_listings ? listings : null }
      </div>
      
    );
  }
});

// Export the component back for use in other files
module.exports = SearchPropertyForm;
















 
  