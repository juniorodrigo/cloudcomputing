import bcrypt from "bcryptjs";

const mysql = require('mysql');
require('dotenv').config();

const { DB_HOST, DB_USER, DB_PASSWORD, DB_AUTH_DATABASE, DB_GENERAL_DATABASE } = process.env;

const authConfig = {
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_AUTH_DATABASE,
};

const generalConfig = {
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_GENERAL_DATABASE,
};
const blogConfig = {
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: "Blog",
};
const EspecialPool = (Nombre_bd) => {

  const EspecialPoolConfig = {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: Nombre_bd,
  };
  const EspecialPool = mysql.createPool(EspecialPoolConfig);
  return EspecialPool
}

const personalizedConfig = {
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
};


//Pool SQL
const authPool = mysql.createPool(authConfig);
const generalPool = mysql.createPool(generalConfig);
const personalizedPool = mysql.createPool(personalizedConfig);
const blogPool = mysql.createPool(blogConfig);


module.exports = {
  authPool,
  generalPool,
  personalizedPool,
  blogPool

};

const connGet = (DataBase) => {

  return new Promise((resolve, reject) => {
    personalizedPool.getConnection(function(err, conn) { conn.changeUser({database: DataBase}, function (err) {
      resolve(conn)
    });
    });
  });
};

export default {connGet}