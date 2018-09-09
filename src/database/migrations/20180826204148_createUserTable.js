exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('users', (usrTable)=>{
    //primary key
    usrTable.increments()

    //Fields
    usrTable.string('email').notNullable()
    usrTable.string('password').notNullable()
    //usrTable.string('nick').notNullable()
    //usrTable.string('name').notNullable()
    //usrTable.string('last_name').notNullable()
    usrTable.timestamps(true, true)

    return usrTable
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};
