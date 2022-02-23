const characters = require('./data/character.json');

const seed = async (knex) => {
  await knex('characters').insert(characters);
};

export default seed;
