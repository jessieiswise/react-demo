import React, { Component } from 'react';
import Job from './view1.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
function getJobs(){
  var jobs = localStorage.getItem('jobs');
  return(JSON.parse(jobs))
}

var Content = React.createClass({
  getInitialState() {
    return { mounted: false };
  },
  componentDidMount() {
    this.setState({ mounted: true });
  },
  render(){
    var jobs = getJobs();
    var jobslist = jobs.map(function(job){
                       return <Job
                       key={job.referenceId}
                       jobDescription={job.title}
                       jobId={job.referenceId}
                       stops={job.stops}
                       />;
                     })
   var child = this.state.mounted ?
        jobslist :
      null;

    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={5000}
          transitionLeaveTimeout={500}>
                 {child}
        </ReactCSSTransitionGroup>

      </div>
    )
  }
})

export default Content;
