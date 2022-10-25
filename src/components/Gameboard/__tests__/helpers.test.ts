import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import { Card, CardClicked, Deck, Selection, TypeCell } from '../../../Services/types';
import { handleSelection } from '../helpers';
import handleSelectionBoardCell from '../helpers/handleSelectionBoardCell';
import authorizationSelection from '../helpers/authorizationSelection';


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


    beforeAll(() => {
        vi.mock('../helpers/handleSelectionBoardCell')
    })

    afterAll(() => {
        //FIXME: Find a way to replace the line below by vi.restoreAllMocks()
        handleSelectionBoardCell.mockRestore()
    })


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




    it<CardClickedCxt>('shouldn\'t set selection if typeCell equal "wincell"', ({cardClicked}) => {
        handleSelection(cardClicked, deck, setSelectionMock)

        expect(setSelectionMock).not.toHaveBeenCalled()
    })

    it<CardClickedCxt>('only set selection if typeCell equal "bonuscell', ({cardClicked}) => {
        cardClicked.typeCell = "bonuscell"
        handleSelection(cardClicked, deck, setSelectionMock)

        expect(handleSelectionBoardCell).not.toHaveBeenCalled()
        expect(setSelectionMock).toHaveBeenCalled()
    })

    it<CardClickedCxt>('set selection and handle selection for boardCell if typeCell equal "boardcell', ({cardClicked}) => {
        cardClicked.indexCard = 0
        cardClicked.typeCell = "boardcell"
        handleSelection(cardClicked, deck, setSelectionMock)
        

        expect(handleSelectionBoardCell).toHaveBeenCalled()
        expect(setSelectionMock).toHaveBeenCalled()
    })


})





describe('handleSelectionBoardCell', () => {

    const cardsInCell: Card[] = [
        {
            designation: 8,
            symbole: '♦️',
            value: 8
        },
        {
            designation: 10,
            symbole: '♦️',
            value: 10
        },
        {
            designation: 9,
            symbole: '♠️',
            value: 9
        },
        {
            designation: 8,
            symbole: "♥️",
            value: 8
        }
    ]
    
    const cellOrigin: {type: TypeCell,index: number} = {
        type: "boardcell",
        index: 3
    }

    beforeAll(() => {
        vi.mock('../helpers/authorizationSelection.ts')
    })

    afterAll(() => {
        authorizationSelection.restore()
    })



    it('should return good selection if selection is authorized', () => {
        const indexCardClicked = 1
        const cardClicked: CardClicked = {
            indexCard: indexCardClicked,
            card: cardsInCell[indexCardClicked],
            typeCell: cellOrigin.type,
            indexCell: cellOrigin.index
        }
        
        const selectionExpected: Selection = {
            cards: [
                {
                    designation: 10,
                    symbole: '♦️',
                    value: 10
                },
                {
                    designation: 9,
                    symbole: '♠️',
                    value: 9
                },
                {
                    designation: 8,
                    symbole: "♥️",
                    value: 8
                }],
            cellOrigin
        }
        
        authorizationSelection.mockReturnValue(true)


        const result = handleSelectionBoardCell(cardClicked, cardsInCell)

        expect(result).toStrictEqual(selectionExpected)

    })

    it('should return null if selection is unauthorized', () => {
        const indexCardClicked = 0
        const cardClicked: CardClicked = {
            indexCard: indexCardClicked,
            card: cardsInCell[indexCardClicked],
            typeCell: cellOrigin.type,
            indexCell: cellOrigin.index
        }
        
        authorizationSelection.mockReturnValue(false)


        const result = handleSelectionBoardCell(cardClicked, cardsInCell)

        expect(result).toStrictEqual(null)
    })
    
})




interface CardsSelectedCxt {
    cardsSelected: Card[]
}


describe('authorizationSelection', () => {

    beforeEach<CardsSelectedCxt>((cxt) => {
        cxt.cardsSelected = [
            {
                designation: 10,
                symbole: '♦️',
                value: 10
            },
            {
                designation: 9,
                symbole: '♠️',
                value: 9
            },
            {
                designation: 8,
                symbole: "♥️",
                value: 8
            }]
    })

    it<CardsSelectedCxt>('authorize selection if colors is alternate and value is decreasing', ({cardsSelected}) => {
        const result =  authorizationSelection(cardsSelected)
        expect(result).toBe(true)
    })

    it<CardsSelectedCxt>('unauthorize selection if colors isn\'t alternate', ({cardsSelected}) => {
        cardsSelected[0].symbole = "♣️"
        const result =  authorizationSelection(cardsSelected)
        expect(result).toBe(false)
    })
    
    it<CardsSelectedCxt>('unauthorize selection if value isn\'t decreasing', ({cardsSelected}) => {
        cardsSelected[1].value = 11
        const result =  authorizationSelection(cardsSelected)
        expect(result).toBe(false)
    })

    it<CardsSelectedCxt>('authorize selection if only one card is selected', ({cardsSelected}) => {
        cardsSelected = [cardsSelected[2]]
        const result =  authorizationSelection(cardsSelected)
        expect(result).toBe(true)
    })
})