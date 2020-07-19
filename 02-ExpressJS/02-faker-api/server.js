const express = require("express");
const faker = require("faker");
const cors = require("cors");
const PORT = 8000;
const app = express();
app.use(cors());

class Company {
  constructor() {
    this.name = faker.company.companyName();
  }
}

class User {
  constructor() {
    this.name = faker.name.lastName();
    this.last = faker.name.firstName();
    this.address = faker.address.streetAddress();
    this.city = faker.address.city();
    this.state = faker.address.state();
    this.zip = faker.address.zipCode();
    this.avatar = faker.image.avatar();
  }
}
const company = new Company();
const user = new User();

app.listen(PORT, () => {
  console.log(`listening at localhost:${PORT}`);
});

/* 
app.get("/api/company/new", (req, res) => {
  res.json(company);
});
app.get("/api/user/company", (req, res) => {
  const result = [new User(), new Company()];
  res.json(result);
});
*/

app.get("/api/:type/:new", (req, res) => {
  if (req.params.type === "users" && req.params.new === "new") {
    res.json(user);
  } else if (req.params.type === "companies" && req.params.new === "new") {
    res.json(company);
  } else if (req.params.type === "user" && req.params.new === "company") {
    let result = [new Company(), new User()];
    res.json(result);
    console.log(`Employee of the month is: `);
    console.log(result);
  }
});
