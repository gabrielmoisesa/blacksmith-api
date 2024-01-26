import { QueryInterface } from 'sequelize';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.bulkInsert(
      'products',
      [
        {
          name: 'Excalibur',
          price: '10 gold pieces',
          order_id: 1,
        },
        {
          name: 'Sword of Omens',
          price: '20 gold pieces',
          order_id: 1,
        },
        {
          name: "Orpheus' lyre",
          price: '1 gold piece',
          order_id: 2,
        },
        {
          name: 'Armor of Achilles',
          price: '1 gold piece',
          order_id: 2,
        },
        {
          name: "Dagda's harp",
          price: '15 gold pieces',
          order_id: 3,
        },
      ],
      {}
    );
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.bulkDelete('products', {});
  },
};
