exports.up = async function(knex) {
  await knex.schema.createTable("places", table => {
    table.increments("place_id").unsigned().primary()
    table.text("lat").notNullable()
    table.text("lng").notNullable()
    table.text("city").notNullable()
    table.text("state").notNullable()
    table.text("name").notNullable()
    table.text("image").notNullable()
    table.text("type").notNullable()
    table.text("vicinity").notNullable()
    table.boolean("open_now").notNullable()
  })
}

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("places")
}
