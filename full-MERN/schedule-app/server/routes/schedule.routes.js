console.log("schedule.routes.js");

//controller variable
const Schedules = require("../controllers/schedule.controller");

module.exports = (app) => {
  app.get("/api/schedule", Schedules.getAll);
  app.post("/api/schedule", Schedules.create);
};
