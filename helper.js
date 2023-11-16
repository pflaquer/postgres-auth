const client = require("./db.js")
const bcrypt = require("bcryptjs")

const emailExists = async (email) => {
  const data = await client.query("SELECT * FROM users WHERE email=$1", [
    email,
  ]);
 
  if (data.rowCount == 0) return false; 
  return data.rows[0];
};

const emailExists = async (email) => {
  const data = await client.query("SELECT * FROM users WHERE email=$1", [
    email,
  ]);
 
  if (data.rowCount == 0) return false; 
  return data.rows[0];
};

const matchPassword = async (password, hashPassword) => {
  const match = await bcrypt.compare(password, hashPassword);
  return match
};

module.exports = { emailExists, createUser, matchPassword };


