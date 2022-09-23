import { useState } from 'react';
import { starterDistribution } from './Gameboard.helpers';


// {
//     "designation": 7,
//     "symbole": "♣️"
// }

export function useDeck() {
    const [deck, setDeck] = useState({
        bonusCells: [
            [{
                "designation": 7,
                "symbole": "♣️"
            }],
            [],
            [],
            []
        ],
        winCells: [
            [{
                "designation": 7,
                "symbole": "♣️"
            }, {
                "designation": 8,
                "symbole": "♣️"
            }],
            [],
            [],
            []
        ],
        boardCells: starterDistribution()
    })

    return { deck }
}