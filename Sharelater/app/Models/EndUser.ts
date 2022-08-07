import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class EndUser extends BaseModel {
  @column({ isPrimary: true })
  public user_id: number

  @column()
  public first_name: string 

  @column()
  public last_name: string

  @column()
  public title: string

  @column()
  public date_birth: DateTime

  @column()
  public street: string

  @column()
  public zip: number 

  @column()
  public city: string 

  @column()
  public country: string 

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
