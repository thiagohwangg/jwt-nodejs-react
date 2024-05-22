// Get the client
import mysql from "mysql2";

// Create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "jwt",
});

const handleHelloWorld = (req, res) => {
  return res.render("home.ejs");
};

const handleUserPage = (req, res) => {
  return res.render("user.ejs");
};

const handleCreateNewUser = (req, res) => {
  let { email, password, username } = req.body;
  
  connection.query(
    'INSERT INTO users (email, password, username) VALUES (?, ?, ?)',[email, password, username],
    function (err, results, fields) {
        if(err) {
            console.log("err: ", err);
        }
    }
  );
  return res.send("handleCreateNewUser");
};

module.exports = {
  handleHelloWorld,
  handleUserPage,
  handleCreateNewUser,
};
