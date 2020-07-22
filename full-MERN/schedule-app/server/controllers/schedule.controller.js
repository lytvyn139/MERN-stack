console.log("schedule.controller.js");

//variable accessing db
const Schedule = require("../models/schedule.model");

class ScheduleController {
  create(req, res) {
    const newSchedule = new Schedule(req.body); //form data
    // if it's get saved we respond with Schedule Obj
    newSchedule
      .save()
      .then(() => res.json(newSchedule))
      .catch((err) => res.json(err));
  }
  getAll(req, res) {
    Schedule.find()
      .then((schedule) => res.json(schedule))
      .catch((err) => res.json(err));
  }
}

module.exports = new ScheduleController();
