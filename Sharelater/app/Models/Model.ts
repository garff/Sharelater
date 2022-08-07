import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Model extends BaseModel {
  @column({ isPrimary: true })
  public model_id: string

  @column()
  public model: string 

  @column()
  public minute_fee: number 

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
