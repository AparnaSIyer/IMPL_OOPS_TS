import {Sequelize, Model, DataTypes, BuildOptions} from "sequelize"
import {database} from "../config/database"

export class Book extends Model{
    public id!: number
    public name!: string
    public isbn!: string
    public author_name!:string
    public genre!:string
}


Book.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      isbn: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      author_name: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      genre: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
    },
    {
      tableName: "books",
      sequelize: database, // this bit is important
    }
  );
  
  Book.sync({ force: true }).then(() => console.log("Book table created"));
  