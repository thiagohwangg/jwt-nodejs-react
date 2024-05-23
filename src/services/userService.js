import mysql from "mysql2";
import bcrypt from "bcryptjs";

// Create the connection to database
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt",
  });

const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (userPassword) => {
  let hashPassword = bcrypt.hashSync(userPassword, salt);
  return hashPassword
}

const createNewUser = (email, password, username) => {
    let hashPass = hashUserPassword(password)

    connection.query(
        "INSERT INTO users (email, password, username) VALUES (?, ?, ?)",
        [email, hashPass, username],
        function (err, results, fields) {
          if (err) {
            console.log("err: ", err);
          }
        }
      );
}

const getUserList = () => {
  let users = [];
  connection.query(
    "Select * from users",
    
    function (err, results, fields) {
      console.log("results: ", results);
      if (err) {
        console.log("err: ", err);
      }
    }
  );
}

module.exports = {
  createNewUser,
  getUserList
}