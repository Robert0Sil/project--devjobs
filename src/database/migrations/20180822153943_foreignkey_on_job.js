
exports.up = function(knex, Promise) {
  return knex.schema.table('jobs', (jobTable)=>{
      // Add incremting primary key column
      jobTable.integer('com_id')
        .unsigned()
        .references('id')
        .inTable('companies')
        .onUpdate('cascade')
        .onDelete('cascade')

      return jobTable
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('jobs', (jobTable)=>{
    jobTable.dropForeign('com_id')
    jobTable.dropColumn('com_id')

    return jobTable
  })
};
