const express = require("express");
const app = express();
const ejs = require("ejs");
const { sequelize, Posts } = require("./database");

sequelize.sync().then(function (res) {
  console.log("데이터 연결 완료");
});

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// home
app.get("/", async function (req, res) {
  const posts = await Posts.findAll();
  res.render("pages/index.ejs", {
    posts,
  });
});

// create
app.post("/create", async function (req, res) {
  let name = req.body.name;
  let age = req.body.age;
  let sex = req.body.sex;
  let contact = req.body.contact;
  let password = req.body.password;
  newPost = await Posts.create({
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
  let select = await Posts.findAll({
    where: {
      id: pwdNum,
    },
  });
  if (deletePwd == select[0].passward) {
    await Posts.destroy({
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
  let select = await Posts.findAll({
    where: {
      name: nameSearch,
    },
  });

  let searchId = select[0].id;
  let searchName = select[0].name;
  let searchAge = select[0].age;
  let searchSex = select[0].sex;
  let searchContact = select[0].contact;

  res.render("pages/search.ejs", {
    searchId,
    searchName,
    searchAge,
    searchSex,
    searchContact,
  });
});

const port = 3005;
app.listen(port, () => {
  console.log(`server running at ${port}`);
});
