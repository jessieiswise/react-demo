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





class StopImages extends Component{
  getImages(inputArray){
    return inputArray.map(function(pic){
      var picData = window.localStorage.getItem(pic)
      var picSrc = "data:image/png;base64" + picData
      return(<img className='stop-pic' src={picSrc} alt='img' key={picSrc}/>)
    })
  }
  render(){
    var imageList = this.getImages(this.props.data)
    return(<k>
      {imageList}
    </k>)
  }
}








class Stop extends Component{
  constructor(props){
    super(props)
    var stopHash = hashCode(this.props.address)
    var parent = this.getParentObj()
    var stop = parent.children[stopHash].stopmade
    this.state = {
      done: stop
    }
  }

  getParentObj(){
    var parent = window.localStorage.getItem(this.props.parent)
    return(JSON.parse(parent))
  }
  setParentObj(input){
      input.status = 'wip'
      var json_data = JSON.stringify(input)
      window.localStorage.setItem(this.props.parent,json_data)
  }
  onDelivery(event){
    var stopHash = hashCode(this.props.address)
    var parent = this.getParentObj()
    var stop = parent.children[stopHash]
    if (event.target.value === 'true'){
      stop.stopmade = true
    }
    if (event.target.value === 'false'){
      stop.stopmade = false
    }
    this.setParentObj(parent)
    this.setState({done: stop.stopmade})

  }
  onPhotoUpload(event){
    var ndate = new Date()
    var fileHash = hashCode(event.target.value )
    var parent = this.getParentObj()
    var stopHash = hashCode(this.props.address)
    var reader = new FileReader()
    var context = this

    reader.onload = function( e ){
          window.localStorage.setItem(fileHash,e.target.result)
          parent.children[stopHash].cargopic.push(fileHash)
          context.setParentObj(parent)
       };
         reader.readAsDataURL( event.target.files[ 0 ] );
  }
  uploadCargo(){
    document.getElementById('pic-upload').click();
  }

  onBOLUpload(event){
    var fileHash = hashCode(event.target.value + Date.toString())
    var parent = this.getParentObj()
    var stopHash = hashCode(this.props.address)
    var context = this
    var reader = new FileReader()
    reader.onload = function( e ){
          window.localStorage.setItem(this.fileHash,e.target.result)
          parent.children[stopHash].bolpic.push(fileHash)
          context.setParentObj(parent)
       };
        reader.readAsDataURL( event.target.files[ 0 ] );
  }
  uploadBol(){
    document.getElementById('bol-upload').click();
  }
  render(){
    var parent = this.getParentObj()
    var stopHash = hashCode(this.props.address)
    var stop = parent.children[stopHash]

    return(
      <div className='stop'  >
        <div className='stop-details'>
          <div><span>Type:</span><b> {this.props.type}</b></div>{this.props.cargoDescription ? <div><font>Contents:</font> <b>{this.props.cargoDescription}</b></div>:''}
          <div><span>Address:</span> <b>{this.props.address}</b></div>
          <div><span>Arrival time:</span><b> {timeConverter(this.props.arrivalTime)}</b></div>
          <div><span>Picked Up/Delivered:</span>
            <select onChange={this.onDelivery.bind(this)} value={this.state.done}>
              <option value='false' id='false'>No</option>
              <option value='true' id='true'>Yes</option>
            </select>
          </div>
          <div  className='upload-container'> <input id='pic-upload' onChange={this.onPhotoUpload.bind(this)} type="file" name="pic" accept="image/*"/>
           <input id='bol-upload' onChange={this.onPhotoUpload.bind(this)} type="file" name="pic" accept="image/*" /></div>
        </div>
        <div className='stop-pics'>
          <div className='cargo-pics'>
            <div className='pic-header'>
              <span>Cargo Pictures</span>
              <StopImages data={stop.cargopic} />
              <img onClick={this.uploadCargo} alt='add image' src='https://cdn2.iconfinder.com/data/icons/UII_Icons/80x80/attachment_add.png'/>
            </div>
          </div>
          <div className='bol-pics'>
            <div  className='pic-header'>
              <span>BOL Picture</span>
              <img onClick={this.uploadBol} alt='add image' src='https://cdn2.iconfinder.com/data/icons/UII_Icons/80x80/attachment_add.png'/>
            </div>
          </div>
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
