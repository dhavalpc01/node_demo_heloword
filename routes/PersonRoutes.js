const express = require("express");
const router = express.Router();

const Person = require("../models/Person");

router.post("/", async (req, res) => {
  try {
    const data = req.body; // req.body contain the person data

    // create a new person obj using mongoose model
    const newPerson = new Person(data); // it's called model create

    //  save this person data on database
    const response = await newPerson.save();

    console.log("data done --- ", response);
    // send response to frontend side
    res.status(200).json(response);
  } catch (error) {
    console.log("error --- ", error);
    // send response to frontend sides
    res.status(500).json({ error: "internal server error" });
  }

  // Old version
  // const data = req.body;

  // const newPerson = new Person(data);

  // newPerson.save((error, savedPerson) => {
  //   if (error) {
  //     console.log("error --- ", error);
  //     res.status(500).json({ error: "internal server error" });
  //   } else {
  //     console.log("data done --- ", savedPerson);
  //     res.status(200).json(savedPersons);
  //   }
  // });
});

router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data done --- ", data);
    res.status(200).json(data);
  } catch (error) {
    console.log("error --- ", error);
    res.status(500).json({ error: "internal server error" });
  }
});

router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    console.log("workType == ", workType);
    if (
      workType === "chef" ||
      workType === "waiter" ||
      workType === "manager"
    ) {
      const response = await Person.find({ work: workType });
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "invalid work type" });
    }
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const updatedPersonValue = req.body;
    const response = await Person.findByIdAndUpdate(
      personId,
      updatedPersonValue,
      {
        new: true, // return the updatesd document
        runValidators: true, //Run mongoos validation
      }
    );

    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const response = await Person.findByIdAndDelete(personId);

    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    }

    res.status(200).json({ message: "person deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
});

module.exports = router;
