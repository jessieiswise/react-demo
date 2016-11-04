import React from 'react';
import './App.css';
import AppHeader from './wrapper.js';
import Job from './view1.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

//design principle here is to build a 'onion'. There should be a wrapper which renders all other content, and forwards events

const jobs = [
  {
    title: 'Coals to Newcastle',
    referenceId: '18615',
    stops: [
      {
        type: 'PICKUP',
        address: '4506 East Avenue, Renton, Wa 98058',
        cargoDescription: '6 boxes 10x10x23',
        arrivalTime: '2016-01-19T19:14:33.000Z'
      },
      {
        type: 'DROPOFF',
        address: '6352 Sherwood Drive, Seattle, Wa 98121',
        arrivalTime: '2016-01-19T22:15:52.000Z'
      },
    ],
  },
  {
    title: 'Twinbrook Creamery To Starbucks',
    referenceId: '548482',
    stops: [
      {
        type: 'PICKUP',
        address: '4103 Fulton Street, Renton, Wa 98058',
        cargoDescription: '5 pallets',
        arrivalTime: '2016-01-20T19:00:00.000Z'
      },
      {
        type: 'DROPOFF',
        address: '7745 Cherry Street, Seattle, Wa 98121',
        arrivalTime: '2016-01-20T23:10:00.000Z'
      },
    ],
  },
  {
    title: 'Victrola To Seinheiser',
    referenceId: '4D23C6',
    stops: [
      {
        type: 'PICKUP',
        address: '628 Depot Street, Renton, Wa 98058',
        cargoDescription: '4 pallets',
        arrivalTime: '2016-01-20T21:00:00.000Z'
      },
      {
        type: 'DROPOFF',
        address: '58 Sunset Avenue, Seattle, Wa 98121',
        arrivalTime: '2016-01-21T00:10:00.000Z'
      },
    ],
  },
  {
    title: 'Uber To Imprint',
    referenceId: 'B12311',
    stops: [
      {
        type: 'PICKUP',
        address: '163 Cambridge Road, Renton, Wa 98058',
        cargoDescription: '1 box 12x10x12',
        arrivalTime: '2016-01-20T21:00:00.000Z'
      },
      {
        type: 'DROPOFF',
        address: '668 Jackson Avenue, Seattle, Wa 98121',
        arrivalTime: '2016-01-21T00:10:00.000Z'
      },
    ],
  },
];

function createStorage(){
  if (localStorage.getItem("jobs") === null) {
    localStorage.setItem('jobs', JSON.stringify(jobs));
}

}
function getJobs(){
  var jobs = localStorage.getItem('jobs');
  return(JSON.parse(jobs))
}

var App = React.createClass ({
  getInitialState() {
    return { mounted: false };
  },

  componentDidMount() {
    this.setState({ mounted: true });
  },
  render() {
    createStorage();
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
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"></link>
        <AppHeader/>
        <div className='content'>
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={700}
            transitionEnterTimeout={700}
            transitionLeaveTimeout={300}>
                   {child}
          </ReactCSSTransitionGroup>
        </div>
    </div>
    )
  }
});





export default App;
