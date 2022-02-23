async function getCharacter(id, dbConn) {
  return dbConn('characters').where({ id });
}

async function upsertCharacter(character, dbConn) {
  return dbConn('characters')
    .insert(character)
    .onConflict('id')
    .merge();
}

const API = {
  getCharacter,
  upsertCharacter,
};

module.exports = API;
