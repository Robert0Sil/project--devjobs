
exports.up = function(knex, Promise) {

  return knex
    .schema
    .createTable('jobs', (jobTable)=>{
      // Add incremting primary key column
      jobTable.increments();

      // Add data columns
      jobTable.string('name')
      jobTable.text('description')
      jobTable.string('location')
      jobTable.integer('salary')
      jobTable.boolean('full_time')
      //jobTable.integer('com_id')
      jobTable.timestamps(true, true)

      return jobTable
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('jobs')

};
