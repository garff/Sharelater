import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class EndUserTag extends BaseModel {
  @column({ isPrimary: true })
  public user_tag_id: number

  @column()
  public tag_id: number

  @column()
  public user_id: string 

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
