import { CardClicked, Deck, Selection } from "../Services/types";


export let deckMock: Deck = {
    bonusCells: [[], [], [], []],
    winCells: [[], [], [], []],
    boardCells: [
        [
            {
                "designation": 7,
                "symbole": "♥️",
                "value": 7
            },
            {
                "designation": 10,
                "symbole": "♥️",
                "value": 10
            },
            {
                "designation": "A",
                "symbole": "♦️",
                "value": 1
            },
            {
                "designation": "Q",
                "symbole": "♠️",
                "value": 12
            },
            {
                "designation": "J",
                "symbole": "♥️",
                "value": 11
            },
            {
                "designation": 10,
                "symbole": "♣️",
                "value": 10
            },
            {
                "designation": 9,
                "symbole": "♦️",
                "value": 9
            }
        ],
        [
            {
                "designation": "Q",
                "symbole": "♣️",
                "value": 12
            },
            {
                "designation": 6,
                "symbole": "♦️",
                "value": 6
            },
            {
                "designation": 2,
                "symbole": "♠️",
                "value": 2
            },
            {
                "designation": "A",
                "symbole": "♥️",
                "value": 1
            },
            {
                "designation": 3,
                "symbole": "♠️",
                "value": 3
            },
            {
                "designation": 3,
                "symbole": "♦️",
                "value": 3
            },
            {
                "designation": 9,
                "symbole": "♥️",
                "value": 9
            }
        ],
        [
            {
                "designation": 3,
                "symbole": "♣️",
                "value": 3
            },
            {
                "designation": 2,
                "symbole": "♥️",
                "value": 2
            },
            {
                "designation": 7,
                "symbole": "♦️",
                "value": 7
            },
            {
                "designation": 5,
                "symbole": "♣️",
                "value": 5
            },
            {
                "designation": "K",
                "symbole": "♥️",
                "value": 13
            },
            {
                "designation": 5,
                "symbole": "♦️",
                "value": 5
            },
            {
                "designation": "J",
                "symbole": "♦️",
                "value": 11
            }
        ],
        [
            {
                "designation": 10,
                "symbole": "♦️",
                "value": 10
            },
            {
                "designation": 4,
                "symbole": "♣️",
                "value": 4
            },
            {
                "designation": 9,
                "symbole": "♠️",
                "value": 9
            },
            {
                "designation": "J",
                "symbole": "♠️",
                "value": 11
            },
            {
                "designation": 3,
                "symbole": "♥️",
                "value": 3
            },
            {
                "designation": 10,
                "symbole": "♠️",
                "value": 10
            },
            {
                "designation": "K",
                "symbole": "♦️",
                "value": 13
            }
        ],
        [
            {
                "designation": 4,
                "symbole": "♥️",
                "value": 4
            },
            {
                "designation": 6,
                "symbole": "♣️",
                "value": 6
            },
            {
                "designation": 4,
                "symbole": "♦️",
                "value": 4
            },
            {
                "designation": 4,
                "symbole": "♠️",
                "value": 4
            },
            {
                "designation": 8,
                "symbole": "♠️",
                "value": 8
            },
            {
                "designation": 2,
                "symbole": "♣️",
                "value": 2
            }
        ],
        [
            {
                "designation": "A",
                "symbole": "♠️",
                "value": 1
            },
            {
                "designation": 5,
                "symbole": "♠️",
                "value": 5
            },
            {
                "designation": 7,
                "symbole": "♠️",
                "value": 7
            },
            {
                "designation": "J",
                "symbole": "♣️",
                "value": 11
            },
            {
                "designation": 6,
                "symbole": "♠️",
                "value": 6
            },
            {
                "designation": 7,
                "symbole": "♣️",
                "value": 7
            }
        ],
        [
            {
                "designation": 6,
                "symbole": "♥️",
                "value": 6
            },
            {
                "designation": "K",
                "symbole": "♠️",
                "value": 13
            },
            {
                "designation": 8,
                "symbole": "♥️",
                "value": 8
            },
            {
                "designation": "K",
                "symbole": "♣️",
                "value": 13
            },
            {
                "designation": "A",
                "symbole": "♣️",
                "value": 1
            },
            {
                "designation": "Q",
                "symbole": "♥️",
                "value": 12
            }
        ],
        [
            {
                "designation": 5,
                "symbole": "♥️",
                "value": 5
            },
            {
                "designation": 2,
                "symbole": "♦️",
                "value": 2
            },
            {
                "designation": 9,
                "symbole": "♣️",
                "value": 9
            },
            {
                "designation": 8,
                "symbole": "♣️",
                "value": 8
            },
            {
                "designation": "Q",
                "symbole": "♦️",
                "value": 12
            },
            {
                "designation": 8,
                "symbole": "♦️",
                "value": 8
            }
        ]
    ]
}


export let cardClickedMock: CardClicked = {
    indexCard: 3,
    card: deckMock.boardCells[0][3],
    typeCell: "boardcell",
    indexCell: 0
}

export let cardsInCellSelectedMock = [...deckMock.boardCells[cardClickedMock.indexCell]]

export const cardsSelectionMock = [...cardsInCellSelectedMock].splice(cardClickedMock.indexCard, deckMock.boardCells[cardClickedMock.indexCell].length - cardClickedMock.indexCard)

export let selectionBoardMock: Selection = {
    cards: cardsSelectionMock,
    cellOrigin: {
        index: cardClickedMock.indexCell,
        type: cardClickedMock.typeCell
    }
}