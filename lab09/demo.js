const jwt = require("jsonwebtoken");

const username = "Shameer";
const roles = ["boss"];
const jwt_key = "my-secret";
const jwt_exp = 5000;

// Create JSON Web Token
const token = jwt.sign({ username, roles }, jwt_key, { expiresIn: jwt_exp });
console.log(token);

// Verify JSON Web Token
jwt.verify(token, jwt_key, (err, data) => {
  if (err) {
    console.log("Token verification failed: ", err.message);
  } else {
    console.log("User: ", data);
  }
});
