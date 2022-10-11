import { starterDistribution } from './utils/utils';


export const CARD_SIZE = {
    width: 120,
    height: 170
}

export const SYMBOLES = ["♥️", "♦️", "♠️", "♣️"]

export const GAP_CARDS_INTO_BOARDCELL = 30




export const STARTER_DECK = {
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
}