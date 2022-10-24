import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { CardClicked, Deck } from '../../../Services/types';
import { handleSelection } from '../helpers';
import handleSelectionBoardCell from '../helpers/handleSelectionBoardCell';


interface CardClickedCxt {
    cardClicked: CardClicked,
    deck: Deck
}

describe('handleSelection()', () => {

    const deck: Deck = {
        bonusCells: [[], [], [], []],
        winCells: [[], [], [], []],
        boardCells: [[], [], [], [], [], [], [], []]
    }
    const setSelectionMock = vi.fn()
    vi.mock('../helpers/handleSelectionBoardCell')




    beforeEach<CardClickedCxt>(ctx => {
        ctx.cardClicked = {
            indexCard: 0,
            card: {
                designation: "J",
                symbole: "♥️",
                value: 11
            },
            typeCell: "wincell",
            indexCell: 2
        }
    })

    afterEach(() => {
        vi.clearAllMocks()
    })



    
    it<CardClickedCxt>('shouldn\'t call setSelection if typeCell equal "wincell"', ({cardClicked}) => {
        handleSelection(cardClicked, deck, setSelectionMock)

        expect(setSelectionMock).not.toHaveBeenCalled()
    })

    it<CardClickedCxt>('should call setSelection and not handleSelectionBoardCell if typeCell equal "bonuscell', ({cardClicked}) => {
        cardClicked.typeCell = "bonuscell"
        handleSelection(cardClicked, deck, setSelectionMock)

        expect(setSelectionMock).toHaveBeenCalled()
        expect(handleSelectionBoardCell).not.toHaveBeenCalled()
    })

    it<CardClickedCxt>('should call setSelection and handleSelectionBoardCell if typeCell equal "boardcell', ({cardClicked}) => {
        cardClicked.indexCard = 0
        cardClicked.typeCell = "boardcell"
        handleSelection(cardClicked, deck, setSelectionMock)
        

        expect(setSelectionMock).toHaveBeenCalled()
        expect(handleSelectionBoardCell).toHaveBeenCalled()
    })


})

