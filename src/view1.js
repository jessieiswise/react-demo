import React, { Component } from 'react';
import './App.css';
import './job.css';




//for the sake of this exercise, i will extract to and from from title
class Job extends Component{
  render()  {
    var stopslist = this.props.stops.map(function(stop){
                     return <Stop
                     key={stop.address}
                     address={stop.address}
                     type={stop.type}
                     arrivalTime={stop.arrivalTime}
                      cargoDescription={stop.cargoDescription}/>;
                   })
    return(
      <div className='job'>
        <div className='Job-picture-container'>
          <img className='Job-picture' alt='genericlogo' src='http://files-asia.gbca.org.au/members/companylogo/placeholder-logo.png'/>
        </div>
        <div className='details'>
          <div>{this.props.jobDescription}</div>
          <div>Shipment ID: {this.props.jobId}</div>
        </div>
        {stopslist}
        <div className='actions'>
        </div>
      </div>
    )}
}
export default Job;


class Stop extends Component{
  render(){
    return(
      <div className='stop'>
        <div><font>Type:</font><b> {this.props.type}</b></div>
        <div><font>Address:</font> <b>{this.props.address}</b></div>
        {this.props.cargoDescription ? <div><font>Contents:</font> <b>{this.props.cargoDescription}</b></div>:''}
        <div><font>Arrival time:</font><b> {timeConverter(this.props.arrivalTime)}</b></div>
      </div>
    )
  }
}

function timeConverter(timestamp){
  var inputDate = new Date(timestamp)

  return inputDate.toString()

}
