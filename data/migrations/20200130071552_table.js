
exports.up = function(knex) {
  return knex.schema.createTable('teachers', tbl => {
      tbl.increments()
      tbl.string('firstname').notNullable()
      tbl.string('lastname').notNullable()

  })
  .createTable('students', tbl => {
      tbl.increments()
      tbl.string('firstname').notNullable()
      tbl.string('lastname').notNullable()
      tbl.integer('teacher_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('teachers')
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExist('students')
  .dropTableIfExist('teachers')

};
