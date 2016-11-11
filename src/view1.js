import React, { Component } from 'react';
import './App.css';
import './job.css';




//for the sake of this exercise, i will extract to and from from title
class Job extends Component{

  constructor(props){
    super(props)
    this.state= {
      showComponent: false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
    this.handleChildUnmount = this.handleChildUnmount.bind(this);
  }
  handleChildUnmount(){
      console.log(this)
      this.setState({showComponent: false});
  }
  _onButtonClick() {
    console.log(this)
    this.setState({
      showComponent: true,
      });
  }
  render()  {
    var job = this
    var stopslist = this.props.stops.map(function(stop){
                     return <Stop
                     click={job._onButtonClick}
                     key={stop.address}
                     active={false}
                     address={stop.address}
                     type={stop.type}
                     stop={stop}
                     arrivalTime={stop.arrivalTime}
                      cargoDescription={stop.cargoDescription}/>;
                   })
    return(
    <div className='job'>
      {this.state.showComponent ?
            <JobDetail unmountMe={this.handleChildUnmount} key={this.props.jobId}  /> :
        <div  className='job' onClick={this._onButtonClick}>

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
     }
    </div>

    )}
}
export default Job;

class JobDetail extends Component{
  constructor(props){
    super(props)

    this.dismiss = this.dismiss.bind(this);
  }
  dismiss() {
      this.props.unmountMe();
  }
  render(){
      return(
        <div className='job-detail'>
          <div className='detail-back'>
            <a className='back-action' onClick={this.dismiss} href='#'>{"<< BACK"}</a>
          </div>
          <div>
            <span>CHECKLIST</span>
          </div>
          <div>
            <div>
              <span>DETAILS</span>
              <span>Type:{ this.props.stop}</span>
              <span>Address:  </span>
              <span>Contents: </span>
              <span>Delivery Time:</span>
            </div>
            <div>
              <span>ACTIONS</span>
              <span>Upload Photo(s)</span>
              <span>Upload Bill Of Landing</span>
              <span>Confirm Pickup/Dropoff</span>
            </div>
          </div>
        </div>
      )
  }
}

  // {this.props.cargoDescription ? <div><font>Contents:</font> <b>{this.props.cargoDescription}</b></div>:''}
class Stop extends Component{
  constructor(props){
    super(props)
  }
  render(){

    return(
      <div className='stop'  >
        <div><font>Type:</font><b> {this.props.type}</b></div>
        <div><font>Address:</font> <b>{this.props.address}</b></div>

        <div><font>Arrival time:</font><b> {timeConverter(this.props.arrivalTime)}</b></div>
      </div>
    )
  }
}

function timeConverter(timestamp){
  var inputDate = new Date(timestamp)

  return inputDate.toLocaleDateString() + '    ' +  inputDate.toLocaleTimeString()

}
