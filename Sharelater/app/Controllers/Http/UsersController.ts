import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class UsersController {

    async index ({ view }: HttpContextContract) {
        const endusers = await Database.query().from('endusers').select('*')

        return view.render('users', { endusers })
    }

    async create ({ view }: HttpContextContract) {
        return view.render('create_users')
    }

    async store ({ request, response }: HttpContextContract) {
        const user = request.all()
        await Database.table('endusers').insert(user)

        return response.redirect().toPath('/users/create')
    }

}
