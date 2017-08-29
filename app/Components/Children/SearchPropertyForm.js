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
     listings:[]
   }
  },
  
  handleChange: function(event) {
     this.setState({ [event.target.name]: event.target.value });

  },

  handleSubmit: function(e) {
    e.preventDefault();
    console.log(this.state.city);

    helpers.getListings(this.state.city)
    .then(function(res){
        console.log('data',res.data);

        //this.setState({this.state.listings.pu});
      $("#maincontainer").empty();

       var propertyStr ="<div class='container'>";

       for(var i=0; i< res.data.length;i++) {
          // console.log()
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
          "</ul></div></div><button class='btn-primary btn-md' data ='"+res.data[i]._id+"' id='details'data-toggle='modal' data-target='#myModal'>View</button></div>";
       }


      $("#maincontainer").append(propertyStr+"</div>");

      var sample ='<div class="modal" id="myModal" role="dialog">'+
                     '<div class="modal-dialog">'+
                      '<div class="modal-content">'+
                        '<div class="modal-header">'+
                          '<button type="button" class="close" data-dismiss="modal">&times;</button>'+
                            '<h4 class="modal-title">Modal Header</h4>'+
                              '</div>'+
                              '<div class="modal-body">'+
                                '<p>Some text in the modal.</p>'+
                              '</div>'+
                              '<div class="modal-footer">'+
                                '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
                              '</div>'+
                            '</div>'+
                          '</div>'
                        '</div>';
      $("#myModal").modal();             

      // var sample = '<div id="dialog-modal" title="Basic modal dialog">'+
      //                 '<p>Adding the modal overlay screen makes the dialog look more prominent because it dims          out the page content.</p>'+
      //               '</div>';
      //     $(function() {
      //       $( "#dialog-modal" ).dialog({
      //         height: 140,
      //         modal: true
      //         });
      //       });
          



       //$("#maincontainer").html(sample);
      //var modal = document.getElementById('myModal');

       // $('button').on("click" ,function(){
       //  console.log("This is data value"+$(this).attr("data"));
       //  modal.style.display = "block";
       //   var cont = "<div class='container'>"

       //  });

//        window.onclick = function(event) {
//        if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

    })
    //this.setState({city: "",dateFrom: "",dateTo: ""})

   },

  // Here we describe this component's render method
  render: function() {
    return (
    <div id="maincontainer">
      <div className="jumbotron">
        <div id="frontcontainer" className="container">
          <h2 className="text-center"> Find Exquisite Places To Host Your Event !</h2>

          <form onSubmit={this.handleSubmit} className="form-inline" action="/action">
            <div className="form-group">
              <label for="city">City:</label>
              <input type="text" value={this.state.city} onChange={this.handleChange} className="form-control" id="city" placeholder="Enter City Name" name="city"/>
            </div>
            <div className="form-group">
              <label for="date">Date:</label>
              <input type="Date" value={this.state.dateFrom} onChange={this.handleChange} className="form-control" id="date" name="date"/>
            </div>
            <div className="form-group">
              <label for="dateTo">Days:</label>
              <input type="text" value={this.state.days} onChange={this.handleChange} className="form-control" id="days" name="days"/>
            </div>
            <button type="submit" className="btn btn-success btn-xl">Search</button>
          </form>
        </div>  
      </div> 
   </div>
    );
  }
});

// Export the component back for use in other files
module.exports = SearchPropertyForm;
















 
  