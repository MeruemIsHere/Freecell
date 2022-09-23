import { useState } from 'react';
import { starterDistribution } from './Gameboard.helpers';


// {
//     designation: 7,
//     symbole: "♣️",
//     value: 7
// }

export function useDeck() {
    const [deck, setDeck] = useState({
        bonusCells: [
            [{
                designation: 7,
                symbole: "♣️",
                value: 7
            }],
            [],
            [],
            []
        ],
        winCells: [
            [{
                designation: 7,
                symbole: "♣️",
                value: 7
            }, {
                designation: 8,
                symbole: "♣️",
                value: 8
            }],
            [],
            [],
            []
        ],
        boardCells: starterDistribution()
    })

    return { deck }
}