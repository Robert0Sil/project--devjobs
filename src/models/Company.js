const { Model } = require('objection')

class Company extends Model {

  static get tableName(){
    return 'companies';
  }

  static get relationMappings(){
    const Job = require('./Job')

    return {
      job: {
        relation: Model.HasManyRelation,
        modelClass: Job,
        join : {
          from : 'companies.id',
          to: 'jobs.com_id'
        }
      }
    }
  }

}

module.exports = Company
