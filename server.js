// video 4
// var fs = require("fs");
// var os = require("os");
// const notes = require("./notes");
// var _ = require("lodash");

// // // for user info
// // var user = os.userInfo();
// // console.log("user == ", user);

// // // for append a fileF
// // fs.appendFile("greeting.tsx", "Hi" + user.username + "!\n", () => {
// //   console.log("file is created");
// // });

// var age = notes.age;
// var add = notes.addNum(age, 20);
// console.log("add === ", add);
// console.log("age --- ", age);

// var data = ["person", "person", 1, 2, 3, 1, 2, 3, "name", "age", "2"];
// var filter = _.uniq(data);
// console.log("filter === ", filter);

// console.log("type == ", _.isString(0));

// const jsonString = '{"name":"dhdhd", "age":"20", "city":"rajkot"}';
// const jsonObject = JSON.stringify(jsonString);
// console.log("json == ", jsonString, jsonObject);

// express code 5
// const express = require("express");
// const app = express();

// app.get("/", function (req, res) {
//   res.send("Hello World wel come to the ");
// });

// app.get("/hello", function (req, res) {
//   res.send("hello this is hello root");
// });

// app.get("/data", function (req, res) {
//   var datas = {
//     name: "dhdhd",
//     age: "20",
//     isviv: true,
//     notvis: false,
//   };
//   res.send(datas);
// });

// post code vide 6
// app.post("/adduser", function (req, res) {
//   res.send("data add sucessfuly");
// });

// video 7
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const db = require("./db");
require("dotenv").config();

// const Person = require("./models/Person");
// const MenuItem = require("./models/MenuItem");

// app.post("/person", async (req, res) => {
//   try {
//     const data = req.body; // req.body contain the person data

//     // create a new person obj using mongoose model
//     const newPerson = new Person(data); // it's called model create

//     //  save this person data on database
//     const response = await newPerson.save();

//     console.log("data done --- ", response);
//     // send response to frontend side
//     res.status(200).json(response);
//   } catch (error) {
//     console.log("error --- ", error);
//     // send response to frontend sides
//     res.status(500).json({ error: "internal server error" });
//   }

//   // Old version
//   // const data = req.body;

//   // const newPerson = new Person(data);

//   // newPerson.save((error, savedPerson) => {
//   //   if (error) {
//   //     console.log("error --- ", error);
//   //     res.status(500).json({ error: "internal server error" });
//   //   } else {
//   //     console.log("data done --- ", savedPerson);
//   //     res.status(200).json(savedPersons);
//   //   }
//   // });
// });

// video no 7
// app.get("/person", async (req, res) => {
//   try {
//     const data = await Person.find();
//     console.log("data done --- ", data);
//     res.status(200).json(data);
//   } catch (error) {
//     console.log("error --- ", error);
//     res.status(500).json({ error: "internal server error" });
//   }
// });

// app.post("/menu", async (req, res) => {
//   try {
//     const data = req.body;
//     const newMenu = new MenuItem(data);
//     const response = await newMenu.save();
//     res.status(200).json(response);
//   } catch (err) {
//     res.status(500).json({ error: "internal server error" });
//   }
// });

// app.get("/menu", async (req, res) => {
//   try {
//     const data = await MenuItem.find();
//     res.status(200).json(data);
//   } catch (err) {
//     res.status(500).json({ error: "internal server error" });
//   }
// });

// video no 8
// app.get("/person/:workType", async (req, res) => {
//   try {
//     const workType = req.params.workType;
//     console.log("workType == ", workType);
//     if (
//       workType === "chef" ||
//       workType === "waiter" ||
//       workType === "manager"
//     ) {
//       const response = await Person.find({ work: workType });
//       res.status(200).json(response);
//     } else {
//       res.status(404).json({ error: "invalid work type" });
//     }
//   } catch (error) {
//     res.status(500).json({ error: "internal server error" });
//   }
// });

const personRoutes = require("./routes/PersonRoutes");
const menuItemRoutes = require("./routes/menuItemRoutes");

app.use("/person", personRoutes);
app.use("/menu", menuItemRoutes);

app.get("/", function (req, res) {
  res.send("Hello World wel come to the ");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("locol host is running - 3000");
});
