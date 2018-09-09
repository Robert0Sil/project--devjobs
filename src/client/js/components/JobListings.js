import React from 'react';
import request from 'superagent'

import {Link} from 'react-router-dom'
import JobCard from './JobCard'

export default class JobListings extends React.Component {

  constructor(...args){
    super(...args)

    this.state = {
      jobApiData : []
    }
  }

  componentWillMount(){
    request
      .get('/api/jobs')
      .then((serverRes)=>{
        this.setState({
          jobApiData: serverRes.body
        })
      })
  }

  render(){
    const listingsData = this.state.jobApiData

    return   <div className="page page--jobslist">
        <h2>Job Listing</h2>
        {/* render JobCard components here ... */}
        {
          listingsData.map( (listingObj) => {
            return <JobCard
              {...listingObj}
              key={listingObj.id+listingObj.title}
             />
          })
        }
      </div>
  }
}
