const { db } = require("../db/sql");
const bcrypt = require("bcrypt");
const saltRounds = 10;

async function google(req, res) {
  const { fullname, email, googlePhotoUrl } = req.body;
  const isAdmin = false;
  const generatePassword =
    Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
  const hashPassword = await bcrypt.hash(generatePassword, saltRounds);
  const username =
    fullname.split(" ")[0] + Math.floor(Math.random() * (999 - 100 + 1) + 100);
  try {
    db.query(
      "INSERT INTO access_user ( fullname, username, email, password, isAdmin, profile_picture) VALUE (?, ?, ?, ?, ?, ? )",
      [fullname, username, email, hashPassword, isAdmin, googlePhotoUrl],
      (err, result) => {
        if (err) {
          console.log("Error executing query: ", err.stack);
          res.status(400).send("Error creating user");
          return;
        }
        res.status(201).send("User created successfully");
      }
    );
  } catch (error) {
    console.log("A big google error: ", error.message);
  }
}

// Create a new user
async function signup(req, res) {
  const profile_picture =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
  const isAdmin = false;
  const password = req.body.password;
  const encryptedPassword = await bcrypt.hash(password, saltRounds);

  const { fullname, username, email } = req.body;
  db.query(
    "INSERT INTO access_user (fullname, username, email, password, isAdmin, profile_picture) VALUE ( ?, ?, ?, ?, ?, ?)",
    [fullname, username, email, encryptedPassword, isAdmin, profile_picture],
    (err, result) => {
      if (err) {
        console.log("Error executing query: ", err.stack);
        res.status(400).send("Error creating user");
        return;
      }
      res.status(201).send("User created successfully");
    }
  );
}

async function forgotPass(req, res) {
  const {newPassword,email} = req.body;
  const hashPassword = await bcrypt.hash(newPassword, saltRounds);
  try {
    db.query("UPDATE access_user SET password = ? WHERE email = ?",[hashPassword, email], function (err, results) {
      if (err) {
        res.send({
          code: 400,
          failed: "error occured",
          err: err
        });
      } else {
        res.status(201).send("User password updated successfully");
      }
    })
  } catch (error) {
    console.log("A big forgotPass error: ", error.message);
  }
}

async function signin(req, res) {
  const { email, password } = req.body;
  if (email !== "" && password !== "") {
    db.query(
      "SELECT password FROM access_user WHERE email = ?",
      [email],
      async function (error, results, fields) {
        if (error) {
          res.send({
            code: 400,
            failed: "error occurred",
            error: error,
          });
        } else {
          if (results.length > 0) {
            const comparison = await bcrypt.compare(
              password,
              results[0].password
            );

            if (comparison) {
              res.send({
                code: 200,
                success: "login successful",
                id: results[0].id,
                username: results[0].username,
              });
            } else {
              res.send({
                code: 204,
                error: "Email and password does not match",
              });
            }
          } else {
            res.send({
              code: 206,
              error: "Email does not exist",
            });
          }
        }
      }
    );
  } else {
    console.log("Error 204");
    res.status(204).send("Error Occurred");
  }
}

module.exports = {
  signup,
  signin,
  google,
  forgotPass
};
