import React, { Component } from 'react';
import './App.css';
import './job.css';

class Job extends Component{
  getMetaData(){

    var jobID = this.props.jobId
    if (localStorage.getItem(jobID) === null) {
    //...
  }
  }
  render()  {

    var stopslist = this.props.stops.map(function(stop){
                     return <Stop
                     key={stop.address}
                     active={false}
                     address={stop.address}
                     type={stop.type}
                     stop={stop}
                     arrivalTime={stop.arrivalTime}
                      cargoDescription={stop.cargoDescription}/>;
                   })
    return(
      <div  className='job' >
        <div>
          <div className='Job-picture-container'>
            <img className='Job-picture' alt='genericlogo' src='http://files-asia.gbca.org.au/members/companylogo/placeholder-logo.png'/>
          </div>
          <div className='details'>
            <div>{this.props.jobDescription}</div>
            <div>Shipment ID: {this.props.jobId}</div>
          </div>
        </div>

        {stopslist}
        <div className='actions'>
        </div>
      </div>
    )}
}
export default Job;

class Stop extends Component{
  constructor(props){
    super(props)
  }
  onPhotoUpload(event){
    var reader = new FileReader();
    reader.onload = function( e ){
          console.log('mewo')
         window.localStorage.setItem( "image-base64", e.target.result );
       };
       reader.readAsDataURL( event.target.files[ 0 ] );
     var imgContainer = document.getElementById( "image-container" );
     imgContainer.src = window.localStorage.getItem( "image-base64" );

  }
  onBOLUpload(event){
    var fileList = event.target.files

  }

  render(){

    return(
      <div className='stop'  >
        <div><span>Type:</span><b> {this.props.type}</b></div>{this.props.cargoDescription ? <div><font>Contents:</font> <b>{this.props.cargoDescription}</b></div>:''}
        <div><span>Address:</span> <b>{this.props.address}</b></div>
        <div><span>Arrival time:</span><b> {timeConverter(this.props.arrivalTime)}</b></div>
        <div><span>Picked Up/Delivered:</span>
          <select>
            <option>No</option>
            <option>Yes</option>
          </select>
      </div>
        <div><span>Bill Of Landing:</span><img id="bol-container" /> <input  onChange={this.onPhotoUpload.bind(this)} type="file" name="pic" accept="image/*"/></div>
        <div><span>Cargo Picture: </span><img id="image-container" /> <input onChange={this.onPhotoUpload.bind(this)} type="file" name="pic" accept="image/*" /></div>
      </div>
    )
  }
}

function timeConverter(timestamp){
  var inputDate = new Date(timestamp)

  return inputDate.toLocaleDateString() + '    ' +  inputDate.toLocaleTimeString()

}
