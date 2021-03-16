
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Listening on port ${port}`));
app.use(express.json());

app.get("/users", (req, res) => {});

app.get("/books", (req, res) => {});

app.post("/login", (req, res) => {
  let base64Encoding = req.headers.authorization.split(" ")[1];
    console.log(base64Encoding);
  let credentials = Buffer.from(base64Encoding.split, 'base64').toString().split(":");
    console.log(credentials);
  const username = credentials[0];
  const password = credentials[1];
});

app.get("/logout", (req, res) => {});

app.get("/favorite", (req, res) => {});

app.post("/book", (req, res) => {});  

/* const cors = require("cors");
const {
  getUserByUsername,
  isEmptyObject,
  isPasswordCorrect,
} = require("./shared");

app.use(cors());


app.post("/login", (req, res) => {
  let base64Encoding = req.headers.authorization.split(" ")[1];
  let credentials = Buffer.from(base64Encoding, "base64").toString().split(":");
  const username = credentials[0];
  const password = credentials[1];
  getUserByUsername(username).then((user) => {
    if (user && !isEmptyObject(user)) {
      isPasswordCorrect(user.key, password).then((result) => {
        result
          ? res.status(200).send({ username: user.username, role: user.role })
          : res
              .status(401)
              .send({ message: "username or password is incorrect" });
      });
    } else
      res.status(401).send({ message: "username or password is incorrect" });
  });
});

app.get("/logout", (req, res) => {});

app.get("/favorite", (req, res) => {});

app.post("/book", (req, res) => {}); */
