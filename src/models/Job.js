const { Model } = require('objection')

class Job extends Model {

  static get tableName(){
    return 'jobs';
  }

  static get relationMappings(){
    const Company = require('./Company')

    return {
      company: {
        relation: Model.BelongsToOneRelation,
        modelClass: Company,
        join : {
          from : 'jobs.com_id',
          to: 'companies.id'
        }
      }
    }
  }

}

module.exports = Job
