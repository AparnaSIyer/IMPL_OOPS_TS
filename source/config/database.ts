import {Sequelize} from "sequelize"

const db='test'
const username='root'
const password=''

export const database= new  Sequelize(db,username,password,{
    dialect: "mysql",
    port:3307
  });
