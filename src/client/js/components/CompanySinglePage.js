import React, { Component } from 'react';
import request from 'superagent'
import {Link} from 'react-router-dom'
/* import superagent*/

class CompanySinglePage extends React.Component{

  constructor(...args){
    super(...args)

    this.state = {
      furnObj: {},
      compApiData : []
    }
  }

  _fetchSingData(comProps){
    let apiReqUrl='http://localhost:3000/api/companies'
    let comInRoute = comProps.match.params.id

    if(typeof comInRoute !== 'undefined'){
      apiReqUrl = `http://localhost:3000/api/companies/${comtInRoute}`
  }

  request
   .get(apiReqUrl)
   .then((serRes)=>{
     const serResJson = serRes.body
     //console.log(serResJson)
     this.setState({ furnObj : serResJson })
   })
 }

 componentWillMount(){
  this._fetchSingData(this.props)
 }
 componentWillReceiveProps(newProps){
    this._fetchSinData(newProps)
 }

 render(){

  return <div className="company-single">
    <div className="company-single__company-col">
        <img
          className="company-single__image"
          src={/* company image_link */'https://flathash.com/cool' }
          //{this.props.image_link}
        />
        <hr/>
        <h2 className="company-single__name">
          { /* company name */ 'Company X'}
          ${this.state.furnObj.title}
        </h2>
        <p className="company-single__location">
          {/* company location*/ 'Guanajuato' }
          ${this.state.furnObj.location}
        </p>
        <hr/>
        <p className="company-single__description">
          {/* company description */ 'Lorem ipsum dolor...'}
          ${this.state.furnObj.description}
        </p>
      </div>
      <div className="company-single__job-listings-col">
        <h3>Latest Jobs</h3>
        {/*
          map over .jobs from company object to generate
          an array of JSX of jobs that belong to the company
          -- demo of output below
        */}
        {[
          <div className="company-single__job-listing">
             <h4 className="company-single__job-listing__title">
                {/*Job Title*/}Job Example
             </h4>
             <p className="company-single__job-listing__moreinfo">
                {/*Job Location*/}Ciudad de Mexico
                | {/*Job Salary*/} //37K
             </p>
             <Link
               className="company-single__job-listing__link"
               /* job's id (dynamic value in ${}) */
               to={`/companies/${this.props.id}`} >
                More Info
             </Link>
          </div>
      ]}


      </div>

    </div>
  }
}

export default CompanySinglePage
