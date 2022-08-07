import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'bookings'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('booking_id')
      table.string('user_id').references('endusers.user_id').onDelete('CASCADE')
      table.string('model_id').references('models.model_id').onDelete('CASCADE')
      table.boolean('booked').defaultTo(true)
      table.timestamp('start_time', { useTz: true })
      table.timestamp('end_time', { useTz: true })
      table.integer('price')
      table.boolean('coverage').defaultTo(false)

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
