import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { CardClicked, Deck, Selection, SetSelection } from "../../../Services/types"
import { cardClickedMock, deckMock, selectionBoardMock } from "../../../__tests__/mocks";
import handleClickCard from "../helpers/handleClickCard";
import handleSelection from './../helpers/handleSelection';
import handleDistribution from './../helpers/handleDistribution';

interface Context {
    params: {
        deck: Deck,
        cardClicked: CardClicked,
        selection: Selection | null,
        setSelection: SetSelection
    }
}


describe('handleClickCard', () => {

    const initialParams = {
        deck: structuredClone(deckMock),
        cardClicked: structuredClone(cardClickedMock), 
        selection: structuredClone(selectionBoardMock),
        setSelection: vi.fn()
    }

    beforeEach(() => {
        vi.mock('../helpers/handleSelection')
        vi.mock('../helpers/handleDistribution')
    })

    afterEach(() => {
        vi.restoreAllMocks()
    })



    describe('if no card is already selected', () => {


        beforeEach<Context>((cxt) => {
            cxt.params = {...initialParams}
        })
        

        it<Context>('should handle selection', ({params}) => {
            params.selection = null
            handleClickCard(params)
            
            expect(handleSelection).toHaveBeenCalledOnce()
            expect(handleDistribution).not.toHaveBeenCalledOnce()
        })
    })

    describe('if cards are already selected', () => {

        beforeEach<Context>((cxt) => {
            cxt.params = {...initialParams}
        })


        it<Context>('handle selection if cell clicked is the same as the previous selection', ({params}) => {
            handleClickCard(params)

            expect(handleSelection).toHaveBeenCalledOnce()
            expect(handleDistribution).not.toHaveBeenCalledOnce()
        })

        it<Context>('handle distribution if cell cliqued is not the same as the previous selection', ({params}) => {
            params.cardClicked.indexCell = 1
            handleClickCard(params)

            expect(handleSelection).not.toHaveBeenCalledOnce()
            expect(handleDistribution).toHaveBeenCalledOnce()
        })
    })
})