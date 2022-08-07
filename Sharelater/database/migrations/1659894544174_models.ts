import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'models'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.string('model_id', 50).primary()
      table.string('model', 50).notNullable()
      table.float('minute_fee').notNullable()
      table.boolean('active').notNullable()

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
