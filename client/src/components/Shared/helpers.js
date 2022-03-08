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

async function saveCharacter(characterData, handleSuccess, handleError) {
  const url = characterData.id ? "/api/character/" + characterData.id : "/api/character/";
  const method = characterData.id ? 'PATCH' : 'POST';
  const request = {
    method,
    url,
    data: {
      ...characterData
    }
  };

  const {
    data: { validationErrors }
  } = await makeRequest(request);

  if (validationErrors) {
    handleError(validationErrors[0])
    return
  }

  handleSuccess()
  return
}

export {
  calcMod,
  calcProficiencyBonus,
  getCharacterData,
  saveCharacter
};
