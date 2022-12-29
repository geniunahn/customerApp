// SQL ORM 모듈
const { Sequelize, DataTypes } = require("sequelize");

// DB 생성
const sequelize = new Sequelize({
  dialect: "sqlite", // db 종류
  storage: "database.sqlite", // 파일명
});

// Model(테이블) 생성
const Posts = sequelize.define("Posts", {
  // create (속성 정의)
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  sex: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contact: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  passward: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = { sequelize, Posts };
