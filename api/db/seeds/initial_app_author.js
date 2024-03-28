/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  await knex('app_authors').select('*')
    .then((rows) => {
      if (rows.length === 0) {
        return knex('app_authors').insert([
          {id: 1, first_name: 'Harper', last_name: 'Lee'},
          {id: 2, first_name: 'Jane', last_name: 'Austen'},
          {id: 3, first_name: 'Viginia', last_name: 'Woolf'},
        ]);
      }
    })
};
