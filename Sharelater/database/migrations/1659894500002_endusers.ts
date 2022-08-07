import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'endusers'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.string('user_id', 256).primary()
      table.string('first_name', 50).notNullable()
      table.string('last_name', 50).notNullable()
      table.string('title', 10).notNullable()
      table.date('date').notNullable()
      table.string('street', 50).notNullable()
      table.string('zip', 4).notNullable()
      table.string('city', 50).notNullable()
      table.string('country', 50).notNullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
