const db = require('../db');

class UserController{
  async createUser(req, res){
    const { name, surname, credit } = req.body;
    const newPersone = await db.query('INSERT INTO clients (name, surname, credit) values ($1, $2, $3) RETURNING *', [name, surname, credit]);
    res.json(newPersone.rows[0]);
  }
  async getUsers(req,res){
    const users = await db.query('SELECT * FROM clients');
    res.json(users.rows);
  }
  async updateUser(req,res){
    const {id, name, surname, credit} = req.body;
    const user = await db.query('UPDATE clients set name =$1, surname = $2, credit = $3 where id = $4 RETURNING *', [name, surname, credit, id]);
    res.json(user.rows[0]);
  }
  async deleteUser(req,res){
    const id = req.params.id;
    const user = await db.query('DELETE FROM clients where id = $1 RETURNING *', [id]);
    res.json(user.rows[0]);
  }
}
module.exports = new UserController();