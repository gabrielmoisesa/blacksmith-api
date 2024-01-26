import { QueryInterface } from 'sequelize';
import bcrypt from 'bcryptjs';

const SALT_ROUNDS = process.env.BCRYPT_SALT_ROUNDS || 10;

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          username: 'Hagar',
          vocation: 'Warrior',
          level: 10,
          password: bcrypt.hashSync('terrible', SALT_ROUNDS),
        },
        {
          username: 'Eddie',
          vocation: 'Warrior',
          level: 8,
          password: bcrypt.hashSync('lucky', SALT_ROUNDS),
        },
        {
          username: 'Helga',
          vocation: 'Healer',
          level: 9,
          password: bcrypt.hashSync('valkyrie', SALT_ROUNDS),
        },
      ],
      {}
    );
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.bulkDelete('users', {});
  },
};
