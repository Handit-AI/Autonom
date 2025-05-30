'use strict';

import { Sequelize } from 'sequelize';

/** @type {import('sequelize-cli').Migration} */
export const up = async (queryInterface) => {
  await queryInterface.addColumn('Models', 'description', {
    type: Sequelize.STRING,
    allowNull: true,
  });
};

export const down = async (queryInterface) => {
  await queryInterface.removeColumn('Models', 'description');
};
