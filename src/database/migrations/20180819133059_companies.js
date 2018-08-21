// file created through
//  `knex migrate:make «name-of-db-change»`



// 'up' allows us to change the db schema to something new

//  To enforce the schema changes on the db:
// $ knex migrate:latest
exports.up = function(knex, Promise) {

  return knex
    .schema
    .createTable('companies', (companyTable)=>{
      // Add incremting primary key column
      companyTable.increments('id');

      // Add data columns
      companyTable.string('title').notNullable()
      companyTable.text('description')
      companyTable.string('location')
      companyTable.string('image_link')
      companyTable.timestamps(true, true)

      return companyTable
    })
};
// 'down' allows us to reverse changes to db schema

//  To undo the schema changes on the db:
// $ knex migrate:rollback

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('companies')

};
