import { beforeEach, describe, expect, it } from "vitest"
import { Card } from "../../../Services/types"
import { cardsSelectionMock } from "../../../__tests__/mocks"
import authorizationSelection from './../helpers/authorizationSelection';

interface CardsSelectedCxt {
    cardsSelected: Card[]
}


describe('authorizationSelection', () => {

    beforeEach<CardsSelectedCxt>((cxt) => {
        cxt.cardsSelected = structuredClone(cardsSelectionMock)
    })

    it<CardsSelectedCxt>('authorize selection if colors is alternate and value is decreasing', ({cardsSelected}) => {
        const result =  authorizationSelection(cardsSelected)

        expect(result).toBe(true)
    })

    it<CardsSelectedCxt>('unauthorize selection if colors isn\'t alternate', ({cardsSelected}) => {
        cardsSelected[0].symbole = "♥️"
        const result =  authorizationSelection(cardsSelected)

        expect(result).toBe(false)
    })
    
    it<CardsSelectedCxt>('unauthorize selection if value isn\'t decreasing', ({cardsSelected}) => {
        cardsSelected[1].value = 8
        const result =  authorizationSelection(cardsSelected)

        expect(result).toBe(false)
    })

    it<CardsSelectedCxt>('authorize selection if only one card is selected', ({cardsSelected}) => {
        cardsSelected = [cardsSelected[2]]
        const result =  authorizationSelection(cardsSelected)

        expect(result).toBe(true)
    })
})
