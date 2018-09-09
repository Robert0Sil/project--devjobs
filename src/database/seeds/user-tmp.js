
exports.seed = function(knex, Promise) {

  const users = [
    {
      email: 'rob@sil.xxx',
      password: '1'
    },
    {
      email: 'sil@rob.xxx',
      password: '1'

    }

  ];
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert(
        users
      );
    });
};
