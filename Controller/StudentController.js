const Student = require("../Modal/StudentModal");


//ahilan

const createStudent = async (req, res) => {
  try {
    let data = req.body;
    const Studentdb = await new Student(data);
    await Studentdb.save();

    res.send({
      message: "Student data created successfully",
      Student: Studentdb,
    });
  } catch (err) {
    res.send(err);
    console.log(err);
  }
};

const getStudent = async (req, res) => {
  try {
    let id = req.query.id;
    if (id) {
      const Studentdb = await Student.findById(id).populate("trainerId");

      res.send({
        message: "Student data fetched successfully",
        Student: Studentdb,
      });
    } else {
      const Studentdb = await Student.find().populate("trainerId");

      res.send({
        message: "Student data fetched successfully",
        Student: Studentdb,
      });
    }
  } catch (err) {
    res.send(err);
    console.log(err);
  }
};

const updateStudent = async (req, res) => {
  try {
    let id = req.query.id;
    let data = req.body;
    const Studentdb = await Student.findByIdAndUpdate(id, data, { new: true });

    res.send({
      message: "Student data update successfully",
      Student: Studentdb,
    });
  } catch (err) {
    res.send(err);
    console.log(err);
  }
};

const deleteStudent = async (req, res) => {
  try {
    let id = req.query.id;
    const Studentdb = await Student.findByIdAndDelete(id);

    res.send({
      message: "Student data deleted successfully",
    });
  } catch (err) {
    res.send(err);
    console.log(err);
  }
};

module.exports = { createStudent, getStudent, updateStudent, deleteStudent };
