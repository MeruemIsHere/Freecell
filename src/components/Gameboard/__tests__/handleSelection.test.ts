import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { CardClicked, Deck } from "../../../Services/types"
import { cardClickedMock, deckMock } from "../../../__tests__/mocks"
import handleSelection from "../helpers/handleSelection";
import handleSelectionBoardCell from './../helpers/handleSelectionBoardCell';

interface Context {
    cardClicked: CardClicked,
    deck: Deck
}

describe('handleSelection()', () => {

    const deck: Deck = deckMock
    const setSelectionMock = vi.fn()
    vi.mock('../helpers/handleSelectionBoardCell')



    beforeEach<Context>(ctx => {
        ctx.cardClicked = structuredClone(cardClickedMock)
    })

    afterEach(() => {
        vi.clearAllMocks()
    })




    it<Context>('shouldn\'t set selection if typeCell equal "wincell"', ({cardClicked}) => {
        cardClicked.typeCell = "wincell"
        handleSelection(cardClicked, deck, setSelectionMock)

        expect(setSelectionMock).not.toHaveBeenCalled()
    })

    it<Context>('only set selection if typeCell equal "bonuscell', ({cardClicked}) => {
        cardClicked.typeCell = "bonuscell"
        
        handleSelection(cardClicked, deck, setSelectionMock)
        
        
        
        expect(handleSelectionBoardCell).not.toHaveBeenCalled()
        expect(setSelectionMock).toHaveBeenCalled()
    })

    it<Context>('handle selection for boardCell and set selection if typeCell equal "boardcell', ({cardClicked}) => {
        cardClicked.indexCard = 0
        handleSelection(cardClicked, deck, setSelectionMock)
        

        expect(handleSelectionBoardCell).toHaveBeenCalled()
        expect(setSelectionMock).toHaveBeenCalled()
    })


})
