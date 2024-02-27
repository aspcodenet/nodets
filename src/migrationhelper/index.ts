// import  * as Umzug  from 'umzug';
// import {
//   Association, DataTypes, HasManyAddAssociationMixin, HasManyCountAssociationsMixin,
//   HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, HasManyHasAssociationMixin,
//   HasManySetAssociationsMixin, HasManyAddAssociationsMixin, HasManyHasAssociationsMixin,
//   HasManyRemoveAssociationMixin, HasManyRemoveAssociationsMixin, Model, ModelDefined, Optional,
//   Sequelize, InferAttributes, InferCreationAttributes, CreationOptional, NonAttribute, ForeignKey,
// } from 'sequelize';

// import dotenv from 'dotenv';
// dotenv.config(); 

// const sequelize2 = new Sequelize(`mysql://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:3306/${process.env.DB_DATABASE}`)

// const umzug = new Umzug.Umzug({
//     migrations: { glob: 'src/migrations/*.ts' },
//     context: sequelize2.getQueryInterface(),
//     storage: new Umzug.SequelizeStorage({ sequelize:sequelize2 }),
//     logger: console,
//   });

//   export async function migrate() {
//     return umzug.up();
//   }
  
//   export async function revert() {
//     return umzug.down({ to: 0 });
//   }