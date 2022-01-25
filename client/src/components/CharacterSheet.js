//import { useState, useContext, useEffect, useCallback } from 'react'
import GeneralInfo from './General/GeneralInfo'
import Stats from './Stats/Stats'
import Combat from './Combat/Combat'
import Character from './Character/Character'

function CharacterSheet() {
    return (
        <form name="character-sheet" id="sheet">
            <GeneralInfo></GeneralInfo>
            <div class="wrapper wide">
                <Stats></Stats>
                <Combat></Combat>
                <Character></Character>
            </div>
        </form>
    )
}

export default CharacterSheet;
