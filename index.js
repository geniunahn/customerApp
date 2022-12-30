const express = require("express");
const app = express();
const ejs = require("ejs");
const { sequelize, Userinfos } = require("./database");

sequelize.sync().then(function (res) {
  console.log("데이터 연결 완료");
});

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// home
app.get("/", async function (req, res) {
  const userinfos = await Userinfos.findAll();
  res.render("pages/index.ejs", {
    userinfos,
  });
});

// create
app.post("/create", async function (req, res) {
  let name = req.body.name;
  let age = req.body.age;
  let sex = req.body.sex;
  let contact = req.body.contact;
  let password = req.body.password;
  newUserinfos = await Userinfos.create({
    name: name,
    age: age,
    sex: sex,
    contact: contact,
    passward: password,
  });
  res.redirect("/");
});

// delete
app.post("/delete/:id", async function (req, res) {
  let deletePwd = req.body.delete_pwd;
  let pwdNum = req.params.id;
  let select = await Userinfos.findAll({
    where: {
      id: pwdNum,
    },
  });
  if (deletePwd == select[0].passward) {
    await Userinfos.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.redirect("/");
  } else {
    res.redirect("/");
  }
});

// search
app.post("/search", async function (req, res) {
  let nameSearch = req.body.name_search;
  let userinfos = await Userinfos.findAll({
    where: {
      name: nameSearch,
    },
  });

  if (userinfos !== null) {
    res.render("pages/index.ejs", {
      userinfos: userinfos,
    });
  }
});

const port = 3005;
app.listen(port, () => {
  console.log(`server running at ${port}`);
});
