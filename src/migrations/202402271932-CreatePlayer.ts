// 'use strict';

// import { QueryInterface, DataTypes, Sequelize } from 'sequelize';

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up(queryInterface:QueryInterface, sequelize:Sequelize) {
//     console.log(queryInterface)
//     await queryInterface.createTable('Products', {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: DataTypes.INTEGER
//       },
//       name: {
//         type: DataTypes.STRING
//       },
//       unitPrice: {
//         type: DataTypes.INTEGER
//       },
//       stockLevel: {
//         type: DataTypes.INTEGER
//       },
//       createdAt: {
//         allowNull: false,
//         type: DataTypes.DATE
//       },
//       updatedAt: {
//         allowNull: false,
//         type: DataTypes.DATE
//       }
//     });
//   },
//   async down(queryInterface:QueryInterface, sequelize:Sequelize) {
//     await queryInterface.dropTable('Products');
//   }
// };