function calcMod(attrScore) {
    return Math.floor((attrScore-10) / 2)
}

function calcProficiencyBonus(level) {
    return Math.floor((level-1)/4 + 2)
}

export {
    calcMod,
    calcProficiencyBonus
}