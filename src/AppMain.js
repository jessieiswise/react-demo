import React from 'react';
import './App.css';
import {AppHeader} from './dressing.js';
import Job from './view1.js';
import {jobs} from './Constants.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

function createStorage(){
  if (localStorage.getItem("jobs") === null) {
    localStorage.setItem('jobs', JSON.stringify(jobs));
  }
}
function getJobs(){
  var jobs = localStorage.getItem('jobs');
  return(JSON.parse(jobs))
}
//main entry for the app
var App = React.createClass ({
  getInitialState() {return { mounted: false };},
  componentDidMount() {  this.setState({ mounted: true }); },
  render() {
    createStorage();
    var jobsData = getJobs();
    var jobslist = jobsData.map(function(job){
       return <Job key={job.referenceId} jobDescription={job.title}
              jobId={job.referenceId} stops={job.stops} />;
       })
    var child = this.state.mounted ? jobslist : null;
    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"></link>
        <AppHeader/>
        <div className='content'>
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={1100}
            transitionEnterTimeout={1100}
            transitionLeaveTimeout={300}>
                   {child}
          </ReactCSSTransitionGroup>
        </div>
    </div>
    )
  }
});
export default App;
