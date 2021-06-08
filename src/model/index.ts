import type { Pool } from 'pg'
import initDB from '../libs/init-db'

import UsersModel from './users'
import TokensModel from './tokens'

export default class AppModel {

	db: Pool
  users: UsersModel
  tokens: TokensModel

	constructor(){
	}

	async init (){
		this.db = initDB()
    this.users = new UsersModel(this.db)
    this.tokens = new TokensModel(this.db)
	}
}