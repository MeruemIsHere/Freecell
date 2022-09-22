import { useState } from 'react';
import { starterDistribution } from './Gameboard.helpers';


// {
//     "designation": 7,
//     "symbole": "♣️"
// }

export function useDeck() {
    const [deck, setDeck] = useState({
        bonusCells: [
            [],
            [],
            [],
            []
        ],
        winCells: [
            [],
            [],
            [],
            []
        ],
        boardCells: starterDistribution()
    })

    return { deck }
}