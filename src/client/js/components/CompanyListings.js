import React from 'react';
import request from 'superagent'

import {Link} from 'react-router-dom'
import CompanyCard from './CompanyCard'
//import CompanyCard from './CompanyCard'

class CompanyListings  extends React.Component {

    constructor(...args){
      super(...args)

      this.state = {
        compApiData : []
      }
    }

    componentWillMount(){
      request
        .get('/api/companies')
        .then((serverRes)=>{
          this.setState({
            compApiData: serverRes.body
          })
        })
    }

  render(){
     const listingsData = this.state.compApiData

    return   <div className="page page--companies">
        <h2>Company Listing</h2>
        {/* render CompanyCard components here ... */}
        {
         listingsData.map( (listingObj) => {
           return <CompanyCard
             {...listingObj}
             key={listingObj.id+listingObj.name}
            />
        })
      }
      </div>
  }
}

export default CompanyListings
