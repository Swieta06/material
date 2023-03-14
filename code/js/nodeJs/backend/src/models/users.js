const db = require("../helpers/db");
exports.selectAllUser = async () => {
  const sql = `SELECT * FROM "users"`;
  const data = await db.query(sql);
  return data.rows;
};
exports.selectUserById = async (id) => {
  const sql = `SELECT * FROM 
    "users" WHERE "id"=$1 `;
  const values = [id];
  const data = await db.query(sql, values);
  if (data.rows.length > 0) {
    return data.rows[0];
  } else {
    return null;
  }
};
exports.deletUserById = async (id) => {
    const sql = `DELETE FROM 
      "users" WHERE "id"=$1
      RETURNING * `;
    const values = [id];
    const data = await db.query(sql, values);
    if (data.rows.length > 0) {
      return data.rows[0];
    } else {
      return null;
    }
  };

  exports.insertUser = async (data) => {
    const sql = `INSERT INTO "users"
    ("name","email","password") 
    VALUES ($1,$2,$3)
    RETURNING *`;
    const values=[data.name,data.email,data.password]
    const result = await db.query(sql,values);
    return result.rows[0];
  };
  exports.updateUser = async (data,id) => {
    const sql = `UPDATE "users" SET
    "name"=$1,
    "email"=$2,
    "password"=$3
    WHERE "id"=$4
    RETURNING *`;
    const values=[data.name,data.email,data.password,id]
    const result = await db.query(sql,values);
    //return result.rows[0];
    if (result.rows.length > 0) {
        return result.rows[0];
      } else {
        return null;
      }
    
  };
  exports.selectUserByEmail = async (email) => {
    const sql = `SELECT * FROM 
      "users" WHERE "email"=$1 `;
    const values = [email];
    const data = await db.query(sql, values);
    if (data.rows.length > 0) {
      return data.rows[0];
    } else {
      return null;
    }
  };
