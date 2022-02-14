import makeRequest from "./api";

function calcMod(attrScore) {
  return Math.floor((attrScore - 10) / 2);
}

function calcProficiencyBonus(level) {
  return Math.floor((level - 1) / 4 + 2);
}

async function getCharacterData(characterId, updateCharacter, setLoading) {
  setLoading(true);
  const request = {
    method: "GET",
    url: "/api/character/" + characterId,
  };
  const { data } = await makeRequest(request);

  updateCharacter(data);
  setLoading(false);
}

export { calcMod, calcProficiencyBonus, getCharacterData };
