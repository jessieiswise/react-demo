import React, { Component } from 'react';
import './App.css';
import './job.css';

class Job extends Component{
  getMetaData(){
    var jobID = this.props.jobId
    if (localStorage.getItem(jobID) === null) {
    var jobObj = {
        id: jobID,
        status: "new",
        children:{}
      }
    this.props.stops.map(function(stop){
      var stopHash = hashCode(stop.address)
      jobObj.children[stopHash] = {
        stopmade:false,
        bolpic:[],
        cargopic:[]
      }
    })
    window.localStorage.setItem(this.props.jobId,JSON.stringify(jobObj))
  }
  }
  render()  {
    var parent = this
    this.getMetaData();
    var stopslist = this.props.stops.map(function(stop){
                     return <Stop
                     key={stop.address}
                     active={false}
                     address={stop.address}
                     type={stop.type}
                     stop={stop}
                     parent={parent.props.jobId}
                     arrivalTime={stop.arrivalTime}
                      cargoDescription={stop.cargoDescription}/>;
                   })
    return(
      <div  className='job' >
        <div className='details-container'>
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

  getParentObj(){
    var parent = window.localStorage.getItem(this.props.parent)
    return(JSON.parse(parent))
  }
  setParentObj(input){
      input.status = 'wip'
      var json_data = JSON.stringify(input)
      console.log(json_data)
      window.localStorage.setItem(this.props.parent,json_data)
  }
  onPhotoUpload(event){
    var fileHash = hashCode(event.target.value + Date.toString())
    var parent = this.getParentObj()
    var stopHash = hashCode(this.props.address)
    var reader = new FileReader();
    var context = this
    reader.onload = function( e ){
          window.localStorage.setItem(this.fileHash,e.target.result)
          parent.children[stopHash].cargopic.push(fileHash)
          context.setParentObj(parent)
       };
       reader.readAsDataURL( event.target.files[ 0 ] );
     var imgContainer = document.getElementById( "image-container" );
     imgContainer.src = window.localStorage.getItem( "image-base64" );

  }
  onBOLUpload(event){
    var fileHash = hashCode(event.target.value + Date.toString())
    var parent = this.getParentObj()
    var stopHash = hashCode(this.props.address)
    var reader = new FileReader();
    var context = this
    reader.onload = function( e ){
          window.localStorage.setItem(this.fileHash,e.target.result)
          parent.children[stopHash].bolpic.push(fileHash)
          context.setParentObj(parent)
       };
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
        <div><span>Bill Of Landing:</span> <input  onChange={this.onPhotoUpload.bind(this)} type="file" name="pic" accept="image/*"/></div>
        <div><span>Cargo Picture: </span> <input onChange={this.onPhotoUpload.bind(this)} type="file" name="pic" accept="image/*" /></div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>

    )
  }
}

function hashCode (str){
    var hash = 0;
    if (str.length === 0) return hash;
    for (var i = 0; i < str.length; i++) {
        var char = str.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

function timeConverter(timestamp){
  var inputDate = new Date(timestamp)
  return inputDate.toLocaleDateString() + '    ' +  inputDate.toLocaleTimeString()
}
