import Model from "../model";

export default class UsersModel extends Model {

  async existUser({login}){
    const resp = await this.db.query(`
      SELECT COUNT (1) FROM users WHERE lower(login)=lower($1)
    `, [ login ])
    return resp.rows[0].count
  }

  async addUser({name, login, password}){

		const resp = await this.db.query(
			`INSERT INTO users (name, login, password) VALUES ($1, $2, digest($3, 'sha1')) RETURNING id`,
			[ name, login, password ]
		)
		return resp.rows[0]
	}

  async checkPassword ({ login, password }){
    const resp = await this.db.query(
			`SELECT password = digest($2, 'sha1') true_password, id, login FROM users WHERE lower(login)=lower($1)`,
			[ login, password ]
		)
		return resp.rows[0]
  }

  async updateLastLoginTime(user_id: number){
		const resp = await this.db.query(`UPDATE users SET last_login_time=$2 WHERE id = $1`, [user_id, Date.now()])
		return resp.rowCount
	}
}