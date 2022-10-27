import { afterAll, beforeAll, beforeEach, describe, expect, it, vi } from "vitest"
import { CardClicked, Selection } from "../../../Services/types";
import { cardClickedMock, cardsInCellSelectedMock, selectionBoardMock } from "../../../__tests__/mocks"
import authorizationSelection from './../helpers/authorizationSelection';
import handleSelectionBoardCell from './../helpers/handleSelectionBoardCell';


interface Context {
    cardClicked: CardClicked,
    selectionExpected: Selection
}


describe('handleSelectionBoardCell', () => {

    const cardsInCell = cardsInCellSelectedMock


    beforeAll(() => {
        vi.mock('../helpers/authorizationSelection.ts')
    })

    afterAll(() => {
        authorizationSelection.restore()
    })

    beforeEach<Context>(cxt => {
        cxt.cardClicked = structuredClone(cardClickedMock)
        cxt.selectionExpected = structuredClone(selectionBoardMock)
    })
    

    it<Context>('should return good selection if selection is authorized', ({cardClicked, selectionExpected}) => {
        authorizationSelection.mockReturnValue(true)
        const result = handleSelectionBoardCell(cardClicked, cardsInCell)
        
        expect(result).toStrictEqual(selectionExpected)

    })

    it<Context>('should return null if selection is unauthorized', ({cardClicked, selectionExpected}) => {    
        authorizationSelection.mockReturnValue(false)
        const result = handleSelectionBoardCell(cardClicked, cardsInCell)

        expect(result).toStrictEqual(null)
    })
    
})

