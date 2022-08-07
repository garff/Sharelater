import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Booking extends BaseModel {
  @column({ isPrimary: true })
  public booking_id: number

  @column()
  public user_id: string 

  @column()
  public model_id: string 

  @column()
  public booked: boolean

  @column()
  public date: Date

  @column()
  public start_time: DateTime

  @column()
  public end_time: DateTime

  @column()
  public price: number

  @column()
  public coverage: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
